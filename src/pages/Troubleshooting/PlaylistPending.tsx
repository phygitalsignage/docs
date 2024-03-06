import { DocsLink } from "../../components/DocsLink"
import { PageHeader } from "../../components/PageHeader"
import { Paragraph } from "../../components/Paragraph"
import { SubTitle } from "../../components/SubTitle"
import { WorkInProgress } from "../../components/WorkInProgress"
import { pages } from "../../pages"

export const PlaylistPending = () => {
    return (
        <>
            <PageHeader
                page="playlistPending"
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
            <Paragraph>
                Если плейлист отображается в статусе «Ожидание», но по расписанию он должен уже показываться на экранах, то вы можете ознакомиться с возможными способами решения.
            </Paragraph>
            <SubTitle title="Устройство выключено или не подключено к интернету" />
            <Paragraph>
                Когда устройство выключено, оно не может начать воспроизведение плейлиста.
            </Paragraph>
            <Paragraph>
                Если в личном кабинете отображается, что экран выключен, то для решения проблемы см. раздел <DocsLink to={pages.screenOffline.route}>{pages.screenOffline.label}</DocsLink>
            </Paragraph>
        </>
    )
}
