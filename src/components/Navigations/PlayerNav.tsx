import { pages } from '../../pages';
import { BaseNav } from './BaseNav'

export const PlayerNav = () => {
    return (
        <BaseNav links={pages.player.children || []} main={pages.player}/>
    )
}