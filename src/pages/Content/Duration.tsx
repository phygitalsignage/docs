import { DocsLink } from "../../components/DocsLink"
import { PageHeader } from "../../components/PageHeader"
import { Paragraph } from "../../components/Paragraph"
import { SubTitle } from "../../components/SubTitle"
import { pages } from "../../pages"

export const Duration = () => {
    return (
        <>
            <PageHeader
                page="duration"
                parentPage="content"
                updatedAt={
                    {
                        day: 3,
                        month: 3,
                        year: 24
                    }
                }
            />
            <Paragraph>
                Когда контент используется в плейлисте, он проигрывается определенное количество времени.
            </Paragraph>
            <SubTitle title="Видео" />
            <Paragraph>
                Продолжительность видео не изменяется через личный кабинет или в настройках плейлиста — это значит, что видео всегда вопроизводится полностью.
            </Paragraph>
            <Paragraph>
                Если вы хотите изменить продолжительность видео, вам необходимо отредактировать файл и <DocsLink to={pages.upload.route}>загрузить</DocsLink> видео с необходимой продолжительностью в Фиджитал.
            </Paragraph>
            <SubTitle title="Изображения" />
            <Paragraph>
                Для изображений вы можете выбрать продолжительность показа при редактировании плейлиста.
            </Paragraph>
        </>
    )
}
