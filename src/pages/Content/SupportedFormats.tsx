import { PageHeader } from '../../components/PageHeader'
import { WorkInProgress } from '../../components/WorkInProgress'

export const SupportedFormats = () => {
    return (
        <>
            <PageHeader
                page="supportedFormats"
                parentPage="content"
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
