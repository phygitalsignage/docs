import { pages } from '../../pages';
import { BaseNav } from './BaseNav'

export const ServiceNav = () => {
    return (
        <BaseNav links={pages.service.children || []} main={pages.service}/>
    )
}