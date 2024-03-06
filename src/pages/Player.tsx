import { DocsLink } from "../components/DocsLink"
import { InfoBlock } from "../components/InfoBlock"
import { PageHeader } from "../components/PageHeader"
import { Paragraph } from "../components/Paragraph"
import { SubTitle } from "../components/SubTitle"
import { WorkInProgress } from "../components/WorkInProgress"
import { pages } from "../pages"

export const Player = () => {
    return (
        <>
            <PageHeader
                page="player"
                updatedAt={
                    {
                        day: 3,
                        month: 3,
                        year: 24
                    }
                }
            />
            <WorkInProgress />
    Установка и характеристики плеера
Smart TV или приставки
ОС Android 8.0 и выше

Функция автовозврата контента при выходе в меню приставки или Smart TV

Возможность установки приложения из Google Play
Установка плеера
Google Play, APK файл

Кеширование контента
Контент, который планируется воспроизводить на экранах предварительно сохраняется в память устройства

Приложение может обновляться через Google Play или вручную с помощью нового .apk файла
            <InfoBlock>
                Смена плейлистов и обновление контента на устройствах происходит только при наличии соединения с интернетом.
                <div className="mt-2">
                Подробнее см. <DocsLink to={pages.offlineMode.route}>{pages.offlineMode.label}</DocsLink>
                </div>
            </InfoBlock>
            <SubTitle title="Поворот экрана"/>
            <Paragraph>
                С Фиджитал вам не нужно поворачивать контент в редакторе видео или изображений.
            </Paragraph>
            <Paragraph>
                Вы можете программно поворачивать контент, даже если экран не поддерживает возможность изменения ориентации.
            </Paragraph>
            <Paragraph>
                Таким образом, вы сможете создавать вертикальные плейлисты для экранов, которые расположены в портретном режиме.
            </Paragraph>
            <Paragraph>
                Поворот экрана осуществляется через <DocsLink to={pages.cms.route}>личный кабинет</DocsLink>.
            </Paragraph>
            <Paragraph>
                Подробнее см. <DocsLink to={pages.screenRotation.route}>{pages.screenRotation.label}</DocsLink>
            </Paragraph>
            <SubTitle title="Режим киоска" />
            <Paragraph>
                Приложение автоматически открывается при перезагрузке устройства.
            </Paragraph>
            <Paragraph>
                Если свернуть или закрыть приложение, то оно автоматически откроется в течении 5 минут в зависимости от устройства и версии приложения.
            </Paragraph>
            <SubTitle title="Кеширование контента" />
            <Paragraph>
                Приложение плеера Фиджитал автоматически сохраняет в память устройства изображения и видео, которые планируется воспроизводить на экране.
            </Paragraph>
            <Paragraph>
                Если один и тот же файл используется в разных плейлистах на экране, то он будет скачан с сервера только один раз и затем воспроизводиться из внутренней памяти.
            </Paragraph>
            <Paragraph>
                Это снижает нагрузку на сеть и даёт возможность воспроизводить контент, даже если нет интернета.
            </Paragraph>
            <SubTitle title="Можно ли обновлять контент на экране с флешки, а не через личный кабинет?" />
            <Paragraph>
                Нет, обновление контента и плейлистов возможно только через личный кабинет.
            </Paragraph>
        </>
    )
}
