import browser from "webextension-polyfill";

const pathUrl = browser.runtime.getURL("/path.html");
console.log(pathUrl);