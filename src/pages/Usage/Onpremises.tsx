import { PageHeader } from "../../components/PageHeader"
import { WorkInProgress } from "../../components/WorkInProgress"

export const Onpremises = () => {
    return (
        <>
            <PageHeader
                page="onpremises"
                parentPage="usage"
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
