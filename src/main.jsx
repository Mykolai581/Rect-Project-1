import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./i18n.js";

const root = document.getElementById("root");

createRoot(root).render(<App />);
