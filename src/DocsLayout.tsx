import { Link, Outlet, ScrollRestoration, useLocation } from "react-router-dom";
import { Logo } from "./components/Logo";
import { TopLevelNav } from "./components/Navigations/TopLevelNav";
import { PlayerNav } from "./components/Navigations/PlayerNav";
import { ServiceNav } from "./components/Navigations/ServiceNav";
import { UsageNav } from "./components/Navigations/UsageNav";
import { CMSNav } from "./components/Navigations/CMSNav";
import { TroubleshootingNav } from "./components/Navigations/TroubleshootingNav";
import { SubscriptionNav } from "./components/Navigations/SubscriptionNav";
import { ContentNav } from "./components/Navigations/ContentNav";
import { ScreensNav } from "./components/Navigations/ScreensNav";
import { PlaylistsNav } from "./components/Navigations/PlaylistsNav";
import { ServerNav } from "./components/Navigations/ServerNav";

const topLevelRoutes = [
    '',
    'support'
]

interface NavComponents {
    [key: string]: JSX.Element;
}

const navComponents: NavComponents = {
    "player": <PlayerNav />,
    "service": <ServiceNav />,
    "usage": <UsageNav />,
    "cms": <CMSNav />,
    "troubleshooting": <TroubleshootingNav />,
    "subscription": <SubscriptionNav />,
    "content": <ContentNav />,
    "screens": <ScreensNav />,
    "playlists": <PlaylistsNav />,
    "server": <ServerNav />
};

export const DocsLayout = () => {
    const location = useLocation()

    const firstPartOfRoute = location.pathname.split("/")[1];

    return (
        <>
            <ScrollRestoration />
            <div className="md:flex md:min-h-screen w-full max-w-screen-xl mx-auto">
                <div className="w-[300px] shrink-0 p-5">
                    <Link to="/" className="flex items-center p-3 px-5 rounded-xl transition gap-3" draggable={false}>
                        <Logo height={8}/>
                        <div className="font-semibold text-lg">
                            Фиджитал
                        </div>
                    </Link>
                    <div className="flex flex-col my-5">
                        {topLevelRoutes.includes(firstPartOfRoute) && <TopLevelNav />}
                        {navComponents[firstPartOfRoute]}
                    </div>
                </div>
                <div className="flex-1 px-10 my-10">
                    <div className="max-w-[750px] mb-20">
                        <Outlet />
                    </div>
                </div>
            </div>
        </>
    );
};
