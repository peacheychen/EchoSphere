console.log("content.js");

const element = document.getElementsByTagName("div"); // Replace 'selector' with the appropriate CSS selector
console.log(element); // Do something with the element

chrome.runtime.sendMessage({ elementData: element }, function (response) {
  console.log("response");
});
