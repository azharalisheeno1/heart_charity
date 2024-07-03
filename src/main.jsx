import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Form from "./Components/Form.jsx";

const router= createBrowserRouter([{path:"/",element:<App/>,children:[{path:"/form",element:<Form></Form>}]},
])
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router}>

    </RouterProvider>

  </React.StrictMode>
);
