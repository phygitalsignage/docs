import { PageHeader } from "../../components/PageHeader"
import { Paragraph } from "../../components/Paragraph"
import { WorkInProgress } from "../../components/WorkInProgress"

export const HowItWorks = () => {
    return (
        <>
            <PageHeader
                page="howItWorks"
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
            <Paragraph>
                Приложение устанавливается на устройство и подключается в личном кабинете, затем управление происходит через личный кабинет
            </Paragraph> 
        </>
    )
}
