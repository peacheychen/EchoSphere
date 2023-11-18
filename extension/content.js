const pageTitle = document.title;

chrome.runtime.sendMessage({ title: "ttt" }, function (response) {
  console.log("response", response);
});
