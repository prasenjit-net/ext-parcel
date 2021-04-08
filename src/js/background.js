import browser from "webextension-polyfill";

const path = browser.runtime.getURL("path");
console.log(path);

console.log("Hello World");