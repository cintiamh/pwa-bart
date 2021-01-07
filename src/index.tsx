import React from "react";
import ReactDOM from "react-dom";
import App from "./App";

// Check that service workers are supported
if ("serviceWorker" in navigator) {
  // Use the window load event to keep the page load performant
  window.addEventListener("load", () => {
    navigator.serviceWorker.register("/pwa-bart/sw.js");
  });
}

ReactDOM.render(<App />, document.getElementById("root"));
