import { PageHeader } from "../../components/PageHeader"
import { WorkInProgress } from "../../components/WorkInProgress"

export const Pilot = () => {
    return (
        <>
            <PageHeader
                page="pilot"
                parentPage="service"
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
