import { PageHeader } from "../components/PageHeader"
import { Paragraph } from "../components/Paragraph"
import { WorkInProgress } from "../components/WorkInProgress"

export const Subscription = () => {
    return (
        <>
            <PageHeader
                page="subscription"
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
Сервис работает по подписке в зависимости от количества экранов и размера хранилища для контента
Отображение списка подписок и их срока действия
            </Paragraph>
        </>
    )
}
