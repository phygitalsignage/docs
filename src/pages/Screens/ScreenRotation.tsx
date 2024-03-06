import { PageHeader } from "../../components/PageHeader"
import { WorkInProgress } from "../../components/WorkInProgress"

export const ScreenRotation = () => {
    return (
        <>
            <PageHeader
                page="screenRotation"
                parentPage="screens"
                updatedAt={
                    {
                        day: 3,
                        month: 3,
                        year: 24
                    }
                }
            />
            <WorkInProgress />
            <div>
                Вы можете изменять ориентацию экрана, даже если экран не поддерживает такую возможность.
            </div>
            <div>
            Горизонтальная 0*
            Веритальная 90*
            Горизонтальная перевёрнутая 180*
            Вертикальная перевёрнутая 270*
            </div>
        </>
    )
}
