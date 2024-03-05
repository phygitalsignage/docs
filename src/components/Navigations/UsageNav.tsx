import { pages } from '../../pages';
import { BaseNav } from './BaseNav'

export const UsageNav = () => {
    return (
        <BaseNav links={pages.usage.children || []} main={pages.usage}/>
    )
}