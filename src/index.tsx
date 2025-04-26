// import ReactDOM from "react-dom/client";
// import {
//   CometChatUIKit,
//   UIKitSettingsBuilder,
// } from "@cometchat/chat-uikit-react";
// import App from "App";
// import { setupLocalization } from "CometChat/utils/utils";
// import { BuilderSettingsProvider } from "CometChat/context/BuilderSettingsContext";
// import cometChatLogo from "../src/CometChat/assets/cometchat_logo.svg";
// /**
//  * CometChat application constants
//  * @constant {Object} COMETCHAT_CONSTANTS
//  * @property {string} APP_ID - CometChat application ID
//  * @property {string} REGION - CometChat region
//  * @property {string} AUTH_KEY - CometChat authentication key
//  */
// export const COMETCHAT_CONSTANTS = {
//   APP_ID: "273703f5711a4724",
//   REGION: "eu",
//   AUTH_KEY: "9236982e1a34b01b2e8b10abcfbd0d50bc324a0c",
// };

// /**
//  * Initialize CometChat if credentials are available, otherwise render the app directly.
//  */
// if (
//   COMETCHAT_CONSTANTS.APP_ID &&
//   COMETCHAT_CONSTANTS.REGION &&
//   COMETCHAT_CONSTANTS.AUTH_KEY
// ) {
//   const uiKitSettings = new UIKitSettingsBuilder() // It helps you customize how CometChat should behave when it starts up
//     .setAppId(COMETCHAT_CONSTANTS.APP_ID)
//     .setRegion(COMETCHAT_CONSTANTS.REGION)
//     .setAuthKey(COMETCHAT_CONSTANTS.AUTH_KEY)
//     .subscribePresenceForAllUsers()
//     .build();

//   /**
//    * Initialize CometChat UIKit and render the application inside the BuilderSettingsProvider.
//    */
//   CometChatUIKit.init(uiKitSettings)?.then((response) => {
//     setupLocalization();
//     const root = ReactDOM.createRoot(
//       document.getElementById("root") as HTMLElement
//     );
//     root.render(
//       <BuilderSettingsProvider>
//         <App />
//       </BuilderSettingsProvider>
//     );
//   });
// } else {
//   /**
//    * If credentials are missing, render the app without initializing CometChat.
//    */
//   const root = ReactDOM.createRoot(
//     document.getElementById("root") as HTMLElement
//   );
//   root.render(
//     <div className="App" style={{ gap: "20px" }}>
//       <div className="cometchat-credentials__logo">
//         <img src={cometChatLogo} alt="CometChat Logo" />
//       </div>
//       <div className="cometchat-credentials__header">
//         CometChat App credentials are missing. Please add them in{" "}
//         <code>index.tsx</code> to continue.
//       </div>
//     </div>
//   );
// }

import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { BrowserRouter } from "react-router-dom";
import { BuilderSettingsProvider } from "CometChat/context/BuilderSettingsContext";

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <BuilderSettingsProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </BuilderSettingsProvider>

  </React.StrictMode>
);
