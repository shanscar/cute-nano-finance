// @platform: web
// Note: This is the web entry point - React Native uses App.tsx with Expo
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";

createRoot(document.getElementById("root")!).render(<App />);
