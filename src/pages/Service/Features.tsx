import { PageHeader } from "../../components/PageHeader"
import { WorkInProgress } from "../../components/WorkInProgress"

export const Features = () => {
    return (
        <>
            <PageHeader
                page="features"
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
