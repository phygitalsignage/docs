import { DocsLink } from "../../components/DocsLink"
import { InfoBlock } from "../../components/InfoBlock"
import { PageHeader } from "../../components/PageHeader"
import { Paragraph } from "../../components/Paragraph"
import { SubTitle } from "../../components/SubTitle"
import { pages } from "../../pages"

export const Upload = () => {
    return (
        <>
            <PageHeader
                page="upload"
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
                Прежде чем использовать контент в плейлистах его необходимо загрузить в хранилище контента в своем личном кабинете.
            </Paragraph>
            <Paragraph>
                Вы можете загружать файлы только в тех форматах, которые поддерживаются Фиджитал.
            </Paragraph>
            <Paragraph>
                См. <DocsLink to={pages.supportedFormats.route}>{pages.supportedFormats.label}</DocsLink>
            </Paragraph>
            <InfoBlock>
                Вы не можете использовать файлы из других личных кабинетов и перемещать их между личными кабинетами.<br/><br/>Если у вас есть два личных кабинета и вы хотите использовать одни и те же файлы, то вам необходимо загрузить их в оба личных кабинета.
            </InfoBlock>
            <SubTitle title="Автоматическая оптимизация контента"/>
            <Paragraph>
                Обратите внимание, что мы не конвертируем и не оптимизируем загружаемые файлы. При загрузке убедитесь в том, что контент соответствует требованиям к формату и размеру.
            </Paragraph>
            <SubTitle title="Загрузка сразу нескольких файлов"/>
            <Paragraph>
                В личном кабинете вы можете одновременно загружать сразу несколько файлов в хранилище контента.
            </Paragraph>
            <SubTitle title="Не получается загрузить файлы в личном кабинете?"/>
            <Paragraph>
                Если у вас возникли трудности с загрузкой контента, рекомендуем ознакомиться с причинами и способами решения.
            </Paragraph>
            <Paragraph>
                См. <DocsLink to={pages.contentUploadTroubleshooting.route}>{pages.contentUploadTroubleshooting.label}</DocsLink>
            </Paragraph>
        </>
    )
}
