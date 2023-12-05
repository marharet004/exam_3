import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import './index.css';
import { RouterProvider, createBrowserRouter } from "react-router-dom";
// import { BrowserRouter } from "react-router-dom";

const router = createBrowserRouter([
    {
        path: '/',
        element: <App />,
        children: [
            {
                path: '/',
                lazy: () => import('./layout/Home.jsx')
            },
            {
                path: '/review/:id',
                lazy: () => import('./layout/Review.jsx')
            },
            {
                path: '/search',
                lazy: () => import('./components/search/Search.jsx')
            }

        ]
    },
    {
        path: '*',
        lazy: () => import('./pages/NotFoundPage.jsx')
    }
])

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <RouterProvider router={router} />
    </React.StrictMode>
)
