import { DocsLink } from "../../components/DocsLink"
import { InfoBlock } from "../../components/InfoBlock"
import { PageHeader } from "../../components/PageHeader"
import { Paragraph } from "../../components/Paragraph"
import { SubTitle } from "../../components/SubTitle"
import { SupportLink } from "../../components/SupportLink"
import { WarningBlock } from "../../components/WarningBlock"
import { pages } from "../../pages"

export const ContentUploadTroubleshooting = () => {
    return (
        <>
            <PageHeader
                page="contentUploadTroubleshooting"
                parentPage="troubleshooting"
                updatedAt={
                    {
                        day: 13,
                        month: 3,
                        year: 24
                    }
                }
            />
            <SubTitle title="Неподдерживаемый формат" />
            <Paragraph>
                Если формат файла не поддерживается Фиджитал или файл поврежден, то его нельзя загрузить в хранилище контента.
            </Paragraph>
            <Paragraph>
                Подробнее см. <DocsLink to={pages.supportedFormats.route}>{pages.supportedFormats.label}</DocsLink>
            </Paragraph>
            <SubTitle title="Завершилась подписка" />
            <Paragraph>
                Срок действия подписок можно посмотреть в личном кабинете, на странице «Профиль» во вкладке «Баланс».
            </Paragraph>
            <WarningBlock>
                При завершении срока действия подписки вам может быть ограничен доступ к загрузке новых файлов.
            </WarningBlock>
            <SubTitle title="Недостаточно места в хранилище" />
            <Paragraph>
                Мы предоставляем ограниченное место в хранилище контента, которое зависит от вашего тарифного плана.
            </Paragraph>
            <InfoBlock>
                Если вам необходимо дополнительное дисковое пространство, обратитесь к вашему менеджеру или в нашу службу поддержки.
            </InfoBlock>
            <Paragraph>
                <SupportLink />
            </Paragraph>
            <SubTitle title="Проблемы с соединением" />
            <Paragraph>
                В случае, если происходит прерывание соединения с интернетом или изменяется точка доступа Wi-Fi, то загрузка может быть прервана.
            </Paragraph>
            <Paragraph>
                Попробуйте обновить страницу и загрузить оставшиеся файлы повторно.
            </Paragraph>
            <SubTitle title="Сервис недоступен" />
            <Paragraph>
                При планируемом обновлении нашего сервиса могут наблюдаться временные сбои в загрузке файлов в хралищие контента.
            </Paragraph>
            <Paragraph>
                Попробуйте обновить страницу и загрузить оставшиеся файлы повторно.
            </Paragraph>
            <SubTitle title="Не удалось решить проблему?" />
            <Paragraph>
                Если после обновления страницы ошибка осталась, рекомендуем связаться с нашей службой поддержки.
            </Paragraph>
            <Paragraph>
                <SupportLink />
            </Paragraph>
        </>
    )
}
