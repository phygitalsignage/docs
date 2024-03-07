import { pages } from '../../pages';
import { BaseNav } from './BaseNav'

export const ServerNav = () => {
    return (
        <BaseNav links={pages.server.children || []} main={pages.server}/>
    )
}