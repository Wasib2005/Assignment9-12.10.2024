import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import "./index.css";
import { RouterProvider } from "react-router-dom";
import { MainRouter } from "./Routers/MainRouter.jsx";
import Toast from "./Components/Toast.jsx";
import RegistrationProvider from "./Context/RegistrationProvider.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RegistrationProvider>
      <Toast />
      <RouterProvider router={MainRouter} />
    </RegistrationProvider>
  </StrictMode>
);
