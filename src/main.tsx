import { RouterProvider, createHashRouter } from "react-router-dom"
import React from "react"
import ReactDOM from "react-dom/client"
import App from "./App.tsx"
import "./styles.css"

const router = createHashRouter([
    {
        path: "/*",
        element: <App />,
    },
])

ReactDOM.createRoot(document.getElementById("root")!).render(
    <React.StrictMode>
        <RouterProvider router={router} />
    </React.StrictMode>
)
