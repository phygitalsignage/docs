import { PageHeader } from "../../components/PageHeader"
import { WorkInProgress } from "../../components/WorkInProgress"

export const PlayerRequirements = () => {
    return (
        <div>
            <PageHeader
                page="playerRequirements"
                parentPage="player"
                updatedAt={
                    {
                        day: 3,
                        month: 3,
                        year: 24
                    }
                }
            />
            <WorkInProgress />
        Требования к клиенту (плееру)
Любое устройство (приставка или Smart TV) с Android 8.0 и выше.
Стабильный интернет без обрывов скорость интернета
        </div>
    )
}
