import { DocsLink } from "../components/DocsLink"
import { HomeLinkGroups } from "../components/HomeLinkGroups"
import { PageTitle } from "../components/PageTitle"
import { Paragraph } from "../components/Paragraph"
import { pages } from "../pages"

export const Home = () => {
    return (
        <>
            <PageTitle title="Документация Фиджитал" />
            <div className="text-xl my-5">
                Сервис для удаленного управления контентом на экранах
            </div>
            <Paragraph>
                <DocsLink to="https://cloud.phygitalsignage.io">Вернуться в личный кабинет</DocsLink>
            </Paragraph>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-3">
                <HomeLinkGroups
                    group={pages.service}
                />
                <HomeLinkGroups
                    group={pages.usage}
                />
                <HomeLinkGroups
                    group={pages.cms}
                />
                <HomeLinkGroups
                    group={pages.player}
                />
                <HomeLinkGroups
                    group={pages.troubleshooting}
                />
            </div>  
        </>
    )
}
