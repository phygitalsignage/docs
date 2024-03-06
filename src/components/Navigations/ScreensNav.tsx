import { pages } from '../../pages';
import { BaseNav } from './BaseNav'

export const ScreensNav = () => {
    return (
        <BaseNav links={pages.screens.children || []} main={pages.screens}/>
    )
}