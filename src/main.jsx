import { createTheme, MantineProvider } from "@mantine/core";
import "@mantine/core/styles.css";
import React from "react";
import ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import { RequireAuth } from "./components/RequireAuth";
import "./index.css";
import Home from "./routes/home";
import Landing from "./routes/landing";
import Root from "./routes/root";
import BookShowcase from "./routes/showcase";

const theme = createTheme({
  fontFamily: "poppins, sans-serif",
});

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route element={<Root />}>
        <Route path="/" element={<Landing />} />

        <Route
          path="/home"
          element={
            <RequireAuth>
              <Home />
            </RequireAuth>
          }
        />
        <Route
          path="/showcase"
          element={
            <RequireAuth>
              <BookShowcase />
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
