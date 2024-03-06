import { pages } from '../../pages';
import { BaseNav } from './BaseNav'

export const PlaylistsNav = () => {
    return (
        <BaseNav links={pages.playlists.children || []} main={pages.playlists}/>
    )
}