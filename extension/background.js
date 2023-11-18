chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
  if (message.action === "logDomElements") {
    try {
      console.log("background.js");
      chrome.scripting
        .executeScript({
          target: { tabId: message.tabId },
          files: ["content.js"],
        })
        .then(() => {
          console.log("background.js");
        });
      console.log("background.js");
    } catch (error) {
      console.error("Error executing script:", error);
    }
  }
});
