import { PageHeader } from "../components/PageHeader"
import { WorkInProgress } from "../components/WorkInProgress"

export const Playlists = () => {
    return (
        <>
            <PageHeader
                page="playlists"
                updatedAt={
                    {
                        day: 3,
                        month: 3,
                        year: 24
                    }
                }
            />
            <WorkInProgress />
        </>
    )
}
