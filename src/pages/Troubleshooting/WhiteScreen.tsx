import { DocsLink } from "../../components/DocsLink"
import { InfoBlock } from "../../components/InfoBlock"
import { List } from "../../components/List"
import { PageHeader } from "../../components/PageHeader"
import { Paragraph } from "../../components/Paragraph"
import { pages } from "../../pages"

export const WhiteScreen = () => {
    return (
        <>
            <PageHeader
                page="whiteScreen"
                parentPage="troubleshooting"
                updatedAt={
                    {
                        day: 3,
                        month: 3,
                        year: 24
                    }
                }
            />
            <Paragraph>
                Видите белый экран при попытке входа в личный кабинет, при регистрации или восстановлении пароля?
            </Paragraph>
            <List items={[
                'Проверьте соединение с интернетом',
                'Попробуйте полностью обновить страницу',
                'Очистите кеш браузера',
                'Убедитесь, что включена поддержка JavaScript в браузере'
            ]} ordered={false}/>
            <DocsLink to={pages.clearCache.route}>Как очистить кеш браузера?</DocsLink>
            <InfoBlock>
                Ничего не помогло? <DocsLink to={pages.support.route}>Обратитесь к нам</DocsLink>, чтобы мы помогли вам решить вашу проблему.
            </InfoBlock> 
        </>
    )
}
