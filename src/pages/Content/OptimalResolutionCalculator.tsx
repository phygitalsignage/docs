import { InfoBlock } from "../../components/InfoBlock"
import { List } from "../../components/List"
import { PageHeader } from "../../components/PageHeader"
import { Paragraph } from "../../components/Paragraph"
import { SubTitle } from "../../components/SubTitle"
import { WorkInProgress } from "../../components/WorkInProgress"

export const OptimalResolutionCalculator = () => {
    return (
        <>
            <PageHeader
                page="optimalResolutionCalculator"
                parentPage="content"
                updatedAt={
                    {
                        day: 13,
                        month: 3,
                        year: 24
                    }
                }
            />
            <WorkInProgress />
            <Paragraph>
                Оптимальное разрешение контента зависит от нескольких параметров:
            </Paragraph>
            <List
                items={[
                    'Максимальное разрешение экрана',
                    'Диагональ экрана',
                    'Дистанция просмотра'
                ]}
                ordered={false}
            />
            <InfoBlock>
                Если у вас светодиодный экран или проектор, рекомендуем связаться с нашей технической поддержкой для консультации.
            </InfoBlock>
            <SubTitle title="Максимальное разрешение экрана" />
            <Paragraph>
                На этот параметр необходимо обращать внимание в первую очередь.
            </Paragraph>
            <Paragraph>
                Если разрешение экрана FullHD (1920x1080), то нет смысла использовать 4K контент, так как он будет сжат до FullHD.
            </Paragraph>
            <Paragraph>
                Использование контента, которое превышает разрешение экрана не только не имеет смысла, но и негативно влияет на плавность воспроизведения и скорость загрузки контента на устройства.
            </Paragraph>
        </>
    )
}
