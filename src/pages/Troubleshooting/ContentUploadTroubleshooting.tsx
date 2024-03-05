import { PageHeader } from "../../components/PageHeader"
import { WorkInProgress } from "../../components/WorkInProgress"

export const ContentUploadTroubleshooting = () => {
    return (
        <>
            <PageHeader
                page="contentUploadTroubleshooting"
                parentPage="troubleshooting"
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
