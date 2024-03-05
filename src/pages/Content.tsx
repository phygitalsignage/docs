import { PageHeader } from "../components/PageHeader"
import { WorkInProgress } from "../components/WorkInProgress"

export const Content = () => {
    return (
        <>
            <PageHeader
                page="content"
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
