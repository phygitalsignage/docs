import { PageHeader } from "../components/PageHeader"
import { WorkInProgress } from "../components/WorkInProgress"

export const Troubleshooting = () => {
    return (
        <>
            <PageHeader
                page="troubleshooting"
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
