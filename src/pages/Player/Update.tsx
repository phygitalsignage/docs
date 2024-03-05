import { PageHeader } from '../../components/PageHeader'
import { WorkInProgress } from '../../components/WorkInProgress'

export const Update = () => {
    return (
        <>
            <PageHeader
                page="update"
                parentPage="player"
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
