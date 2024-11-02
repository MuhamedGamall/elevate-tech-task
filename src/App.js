// src/App.js
import React, { useEffect } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/home";
import NotFound from "./pages/not-found"; 

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "*",
    element: <NotFound />,
  },
]);

function App() {
  useEffect(() => {
    document.title = "Elevate task";
  }, []);

  return (
    <div className="p-4">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
