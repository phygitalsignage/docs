import { PageHeader } from "../../components/PageHeader"
import { WorkInProgress } from "../../components/WorkInProgress"

export const Storage = () => {
    return (
        <>
            <PageHeader
                page="storage"
                parentPage="content"
                updatedAt={
                    {
                        day: 11,
                        month: 3,
                        year: 24
                    }
                }
            />
            <WorkInProgress />
        </>
    )
}
