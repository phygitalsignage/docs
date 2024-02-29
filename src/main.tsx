import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
    createBrowserRouter,
    RouterProvider,
} from "react-router-dom";
import { RecommendedDevices } from './pages/RecommendedDevices';
import { HowItWorks } from './pages/HowItWorks';
import { DocsLayout } from './DocsLayout';
import { Download } from './pages/Download';

const router = createBrowserRouter([
    {
        path: "/",
        children: [
            {
                element: <DocsLayout />,
                children: [
                    {
                        path: "",
                        element: <div>asd</div>
                    },
                    {
                        path: "how-it-works",
                        element: <HowItWorks />
                    },
                    {
                        path: "devices",
                        element: <RecommendedDevices />
                    },
                    {
                        path: "download",
                        element: <Download />
                    }
                ]
            } 
        ]
    },
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
        <RouterProvider router={router} />
    </React.StrictMode>,
)
