import { pages } from '../../pages';
import { BaseNav } from './BaseNav'

export const CMSNav = () => {
    return (
        <BaseNav links={pages.cms.children || []} main={pages.cms}/>
    )
}