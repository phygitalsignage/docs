import { DocsLink } from "../../components/DocsLink"
import { List } from "../../components/List"
import { PageHeader } from "../../components/PageHeader"
import { Paragraph } from "../../components/Paragraph"

export const ClearCache = () => {
    return (
        <>
            <PageHeader
                page="clearCache"
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
                Для удобства мы собрали ссылки на инструкции по очистке кеша в популярных браузерах.
            </Paragraph>
            <List items={
                [
                    <DocsLink to="https://support.google.com/accounts/answer/32050?hl=ru">Как очистить кеш в бразуере Google Chrome</DocsLink>,
                    <DocsLink to="https://yandex.ru/support/browser/personal-data-protection/cache-memory.html#clearing-cache">Как очистить кеш в Яндекс.Браузере</DocsLink>,
                    <DocsLink to="https://support.mozilla.org/ru/kb/kak-udalit-kesh-firefox?redirectslug=kak-ochistit-kesh-firefox&redirectlocale=ru">Как очистить кеш в браузере Mozilla Firefox</DocsLink>,
                    <DocsLink to="https://help.reg.ru/support/hosting/razmeshcheniye-sayta-otobrazheniye-v-brauzere/kak-ochistit-kesh-v-brauzere-safari">Как очистить кеш в бразуере Safari</DocsLink>
                ]
            } ordered={false} />
        </>
    )
}
