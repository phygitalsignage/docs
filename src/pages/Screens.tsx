import { PageHeader } from "../components/PageHeader"
import { WorkInProgress } from "../components/WorkInProgress"

export const Screens = () => {
    return (
        <>
            <PageHeader
                page="screens"
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
