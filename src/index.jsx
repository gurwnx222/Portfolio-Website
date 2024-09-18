import React from "react";
import ReactDOM from "react-dom/client";
import App from "../src/App";  // Import the main App component

// Render the App component
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />  {/* Render App which handles routing */}
  </React.StrictMode>,
);