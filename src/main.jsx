import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import Home from "./routes/home";
import Landing from "./routes/landing";
import { Auth, RequireAuth } from "./components/Auth";

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route element={<Auth />}>
        <Route path="/" element={<Landing />} />

        <Route
          path="/home"
          element={
            <RequireAuth>
              <Home />
            </RequireAuth>
          }
        />
      </Route>
    </>
  )
);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
