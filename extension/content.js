chrome.runtime.onInstalled.addListener(() => {
  console.log("Extension installed");
});

chrome.runtime.onStartup.addListener(() => {
  console.log("Extension started");
});
chrome.runtime.getURL("images/sudoswap.png");
console.log("Background script loaded");
