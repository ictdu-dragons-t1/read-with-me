import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Root from './routes/root';
import MainMenu from './routes/menu';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root/>
  },
  {
    path: "/menu",
    element: <MainMenu/>
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
