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
