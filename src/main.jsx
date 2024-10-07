import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import { Auth, RequireAuth } from "./components/Auth";
import { createTheme, MantineProvider } from '@mantine/core';
import Home from "./routes/home";
import Landing from "./routes/landing";

const theme = createTheme({
  fontFamily: 'poppins, sans-serif', 
});

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
    <MantineProvider theme={theme}>
      <RouterProvider router={router} />
    </MantineProvider>
  </React.StrictMode>
);
