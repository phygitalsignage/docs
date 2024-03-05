import { pages } from '../../pages';
import { BaseNav } from './BaseNav'

export const ContentNav = () => {
    return (
        <BaseNav links={pages.content.children || []} main={pages.content}/>
    )
}