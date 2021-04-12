import { browser } from "webextension-polyfill-ts";

const path = browser.runtime.getURL("path");
console.log(path);

console.log("Hello World");

browser.runtime.onMessage.addListener(async (message, sender) => {
  console.log(message);
  console.log(sender);
  return { message: "You are welcome" };
});

// browser.webRequest.onBeforeRequest.addListener();
