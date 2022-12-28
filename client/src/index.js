import React, { useEffect } from "react";
import { createRoot } from "react-dom/client";
import "./utils/style.css";
import App from "./App";

function AppWithCallbackAfterRender() {
  useEffect(() => {
    console.log("rendered");
  });

  return <App tab="home" />;
}

const container = document.getElementById("root");
const root = createRoot(container);
root.render(<AppWithCallbackAfterRender />);
