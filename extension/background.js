console.log("Service Worker 👋");
chrome.runtime.onMessage.addListener(function (message, sender, sendResponse) {
  if (message.title) {
    console.log("Received title from active tab:", message.title);
    // You can further process the title here
  }
});
