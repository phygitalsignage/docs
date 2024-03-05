import { PageName } from '../../pages';
import { BaseNav } from './BaseNav'

export const TopLevelNav = () => {
    const links = [
        "documentation",
        "service",
        "usage",
        "cms",
        "subscription",
        "player",
        "content",
        "troubleshooting",
        "support"
    ] as PageName[];

    return (
        <BaseNav links={links}/>
    )
}
