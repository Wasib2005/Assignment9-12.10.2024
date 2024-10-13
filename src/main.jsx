import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import "./index.css";
import { RouterProvider } from "react-router-dom";
import { MainRouter } from "./Routers/MainRouter.jsx";
import DataProvider from "./Context/CommonContext.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <DataProvider>
      <RouterProvider router={MainRouter} />
    </DataProvider>
  </StrictMode>
);
