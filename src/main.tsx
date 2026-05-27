import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "../src/styles/index.css";
import App from "./App.tsx";
import { BrowserRouter } from "react-router-dom";
import { TrackContextProvider } from "./features/tracks/contexts/TrackContext.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <TrackContextProvider>
        <App />
      </TrackContextProvider>
    </BrowserRouter>
  </StrictMode>,
);
