import browser from "webextension-polyfill";
import "../styles/popup.scss";

const pathUrl = browser.runtime.getURL("/path.html");
console.log(pathUrl);

const button = document.getElementById("send-message");
button.addEventListener("click", () => {
    browser.runtime.sendMessage({message: "Hello"}).then(resp => {
        console.log(resp);
    });
});
