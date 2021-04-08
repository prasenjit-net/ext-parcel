import browser from "webextension-polyfill";

const path = browser.runtime.getURL("path");
console.log(path);

console.log("Hello World");

browser.runtime.onMessage.addListener(async (message, sender, responder) => {
    console.log(message);
    console.log(sender);
    return {message: "You are welcome"};
});
