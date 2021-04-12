import React, { useState } from "react";
import { browser } from "webextension-polyfill-ts";
import { GiAbstract056 } from "react-icons/gi";
import { MdSchool } from "react-icons/md";

const PopupApp = () => {
  const [apiKey, setApiKey] = useState("");

  const saveApiKey = async () => {
    console.log("Sending message");
    await browser.runtime.sendMessage({ message: "SAVE_KEY", apiKey });
  };

  return (
    <>
      <input
        type="text"
        value={apiKey}
        onChange={(e) => {
          setApiKey(e.target.value);
        }}
      />
      <div className="buttonDiv">
        <button onClick={saveApiKey}>Save</button>
        <GiAbstract056 />
        <MdSchool />
      </div>
    </>
  );
};

export default PopupApp;
