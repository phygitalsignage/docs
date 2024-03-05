import { pages } from "../../pages";
import { BaseNav } from "./BaseNav";

export const TroubleshootingNav = () => {
    return (
        <BaseNav links={pages.troubleshooting.children || []} main={pages.troubleshooting}/>
    )
}
