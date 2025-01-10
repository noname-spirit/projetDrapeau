import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import App from "./App.jsx";
import Logo from "./components/Logo.jsx";

import "./style/index.scss";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Logo />
    <App />
  </StrictMode>
);
