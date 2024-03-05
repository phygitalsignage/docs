import { PageHeader } from "../components/PageHeader"
import { WorkInProgress } from "../components/WorkInProgress"

export const Usage = () => {
    return (
        <>
            <PageHeader
                page="usage"
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
