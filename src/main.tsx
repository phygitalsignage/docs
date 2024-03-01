import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
    createBrowserRouter,
    RouterProvider,
} from "react-router-dom";
import { Devices } from './pages/Devices';
import { HowItWorks } from './pages/HowItWorks';
import { DocsLayout } from './DocsLayout';
import { Download } from './pages/Download';
import { Home } from './pages/Home';
import { GettingStarted } from './pages/GettingStarted';
import { Support } from './pages/Support';
import { SignUp } from './pages/SignUp';

const router = createBrowserRouter([
    {
        path: "/",
        children: [
            {
                element: <DocsLayout />,
                children: [
                    {
                        path: "",
                        element: <Home />
                    },
                    {
                        path: "getting-started",
                        element: <GettingStarted />
                    },
                    {
                        path: "how-it-works",
                        element: <HowItWorks />
                    },
                    {
                        path: "devices",
                        element: <Devices />
                    },
                    {
                        path: "support", 
                        element: <Support />
                    },
                    {
                        path: "download",
                        element: <Download />
                    },
                    {
                        path: 'signup',
                        element: <SignUp />
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
