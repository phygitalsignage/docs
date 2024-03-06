import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
    createBrowserRouter,
    RouterProvider,
} from "react-router-dom";
import { DocsLayout } from './DocsLayout';
import { Update } from './pages/Player/Update';
import { Install } from './pages/Player/Install';
import { Devices } from './pages/Player/Devices';
import { Player } from './pages/Player';
import { PlayerRequirements } from './pages/Player/PlayerRequirements';
import { Home } from './pages/Home';
import { Features } from './pages/Service/Features';
import { GettingStarted } from './pages/Service/GettingStarted';
import { HowItWorks } from './pages/Service/HowItWorks';
import { Service } from './pages/Service';
import { Usage } from './pages/Usage';
import { Cloud } from './pages/Usage/Cloud';
import { Onpremises } from './pages/Usage/Onpremises';
import { OfflineMode } from './pages/Player/OfflineMode';
import { ContentManagementSystem } from './pages/ContentManagementSystem';
import { AccountRecovery } from './pages/ContentManagementSystem/AccountRecovery';
import { Troubleshooting } from './pages/Troubleshooting';
import { ClearCache } from './pages/Troubleshooting/ClearCache';
import { WhiteScreen } from './pages/Troubleshooting/WhiteScreen';
import { DeleteAccount } from './pages/ContentManagementSystem/DeleteAccount';
import { EmailConfimation } from './pages/ContentManagementSystem/EmailConfimation';
import { Support } from './pages/Support';
import { Subscription } from './pages/Subscription';
import { Trial } from './pages/Subscription/Trial';
import { Pilot } from './pages/Subscription/Pilot';
import { SignIn } from './pages/ContentManagementSystem/SignIn';
import { ScreenOffline } from './pages/Troubleshooting/ScreenOffline';
import { PlaylistPending } from './pages/Troubleshooting/PlaylistPending';
import { Content } from './pages/Content';
import { Duration } from './pages/Content/Duration';
import { Upload } from './pages/Content/Upload';
import { SupportedFormats } from './pages/Content/SupportedFormats';
import { ContentUploadTroubleshooting } from './pages/Troubleshooting/ContentUploadTroubleshooting';
import { DeletingContent } from './pages/Content/DeletingContent';
import { ScreenRotation } from './pages/Screens/ScreenRotation';
import { Screens } from './pages/Screens';
import { Playlists } from './pages/Playlists';
import { UpdateTime } from './pages/Playlists/UpdateTime';

const content = {
    path: "content",
    children: [
        {
            path: "",
            element: <Content />
        },
        {
            path: "upload",
            element: <Upload />
        },
        {
            path: "duration",
            element: <Duration />
        },
        {
            path: "supported-formats",
            element: <SupportedFormats />
        },
        {
            path: "deleting",
            element: <DeletingContent />
        }
    ]
}

const subscription = {
    path: "subscription",
    children: [
        {
            path: "",
            element: <Subscription />
        },
        {
            path: "trial",
            element: <Trial />
        },
        {
            path: "pilot",
            element: <Pilot />
        }
    ]
}

const troubleshooting = {
    path: "troubleshooting",
    children: [
        {
            path: "",
            element: <Troubleshooting />
        },
        {
            path: "clear-cache",
            element: <ClearCache />
        },
        {
            path: "white-screen",
            element: <WhiteScreen />
        },
        {
            path: "screen-offline",
            element: <ScreenOffline />
        },
        {
            path: "playlist-pending",
            element: <PlaylistPending />
        },
        {
            path: "upload-content",
            element: <ContentUploadTroubleshooting />
        }
    ]
}

const screens = {
    path: "screens",
    children: [
        {
            path: "",
            element: <Screens />
        },
        {
            path: "screen-rotation",
            element: <ScreenRotation />
        }
    ]
}

const cms = {
    path: "cms",
    children: [
        {
            path: "",
            element: <ContentManagementSystem />
        },
        {
            path: "recovery",
            element: <AccountRecovery />
        },
        {
            path: "delete-account",
            element: <DeleteAccount />
        },
        {
            path: "email-confirmation",
            element: <EmailConfimation />
        },
        {
            path: "sign-in",
            element: <SignIn />
        },
    ]
}

const player = {
    path: "player",
    children: [
        {
            path: "",
            element: <Player />
        },
        {
            path: "devices",
            element: <Devices />
        },
        {
            path: "install",
            element: <Install />
        },
        {
            path: "update",
            element: <Update />
        },
        {
            path: "requirements",
            element: <PlayerRequirements />
        },
        {
            path: "offline",
            element: <OfflineMode />
        }
    ]
}

const service = {
    path: "service",
    children: [
        {
            path: "",
            element: <Service />
        },
        {
            path: "features",
            element: <Features />
        },
        {
            path: "getting-started",
            element: <GettingStarted />
        },
        {
            path: "how-it-works",
            element: <HowItWorks />
        },
    ]
}

const usage = {
    path: "usage",
    children: [
        {
            path: "",
            element: <Usage />
        },
        {
            path: "cloud",
            element: <Cloud />
        },
        {
            path: "on-premises",
            element: <Onpremises />
        },
    ]
}

const playlists = {
    path: "playlists",
    children: [
        {
            path: "",
            element: <Playlists />
        },
        {
            path: "update-time",
            element: <UpdateTime />
        },
    ]
}

const router = createBrowserRouter([
    {
        children: [
            {
                element: <DocsLayout />,
                children: [
                    {
                        path: "",
                        element: <Home />
                    },
                    {
                        path: "support",
                        element: <Support />
                    },
                    player,
                    service,
                    usage,
                    cms,
                    troubleshooting,
                    subscription,
                    content,
                    screens,
                    playlists
                ]
            } 
        ]
    },
    {
        path: "*", 
        element: <div>not found</div>
    }
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
        <RouterProvider router={router} />
    </React.StrictMode>,
)
