import GooglePlayBadgeSrc from "../../assets/google-play-badge.png"
import RuStoreBadgeSrc from "../../assets/rustore-badge.svg"
import { InfoBlock } from "../../components/InfoBlock"
import { SubTitle } from "../../components/SubTitle"
import { pages } from "../../pages"
import { DocsLink } from "../../components/DocsLink"
import { PageHeader } from "../../components/PageHeader"
import { Paragraph } from "../../components/Paragraph"
import { List } from "../../components/List"

export const Install = () => {
    return (
        <>
            <PageHeader
                page="install"
                parentPage="player"
                updatedAt={
                    {
                        day: 3,
                        month: 3,
                        year: 24
                    }
                }
            />
            <Paragraph>
                Чтобы управлять контентом на экранах с помощью Фиджитал вам необходимо установить приложение нашего плеера на экран или устройство, которое подключено к экрану.
            </Paragraph>
            <SubTitle title="Установка через Google Play" />
            <Paragraph>
                    Скачайте приложение "Phygital Signage Player" по ссылке в Google Play
            </Paragraph>
            <a href="https://play.google.com/store/apps/details?id=io.phygitalsignage.smilplayer" target="_blank" className="inline-flex w-[188px]">
                <img src={GooglePlayBadgeSrc} alt="" className="w-full h-full"/>
            </a>
            <SubTitle title="Установка через RuStore" />
            <Paragraph>
                    Скачайте приложение "Phygital Signage Player" по ссылке в RuStore
            </Paragraph>
            <a href="https://apps.rustore.ru/app/io.phygitalsignage.smilplayer" target="_blank" className="inline-flex w-[188px]">
                <img src={RuStoreBadgeSrc} alt="" className="w-full h-full"/>
            </a>
            <SubTitle title="Установка с помощью APK файла" />
            <Paragraph>
                Если на вашем устройстве нет Google Play, то вы можете скачать APK файл и установить приложение плеера самостоятельно.
            </Paragraph>
            <Paragraph>
                Скачайте файл через бразуер устройства или загрузите его с флешки на само устройство, после чего запустите APK файл и дождитесь полной установки приложения.
            </Paragraph>
            <Paragraph>
                <DocsLink to="https://storage.yandexcloud.net/smilplayer/app-release-6.1.1.apk">Скачать APK</DocsLink>
            </Paragraph>
            <InfoBlock>
                При установке через APK файл обновление приложения необходимо будет осуществлять вручную. 
            </InfoBlock>
            <Paragraph>
                <DocsLink to={pages.update.route}>Узнать больше об обновлении приложения</DocsLink>
            </Paragraph>
            <SubTitle title="Разрешение на установку" />
            <Paragraph>
                Если приложение не устанавливается, возможно, это связано со стандартными настройками устройства.
            </Paragraph>
            <Paragraph>
                Для установки приложения с помощью APK файла требуется разрешить установку из неизвестных источников.
            </Paragraph>
            <Paragraph>
                Система может показать окно с разрешением при открытии файла. Если окно не показывается, то необходимо зайти в настройки устройства, найти пункт «Установка из неизвестного источника» и разрешить установку. 
            </Paragraph>
            <Paragraph>
                После этого попробовать запустить APK файл повторно для установки приложения.
            </Paragraph>
            <SubTitle title="Установите время, дату и часовой пояс" />
            <Paragraph>
                Для корректной работы приложения Фиджитал убедитесь, что на устройстве выставлены корректные дата, время и часовой пояс.
            </Paragraph>
            <Paragraph>
                Порядок настройки даты и времени зависит от устройства.
            </Paragraph>
            <Paragraph>
                При наличии возможности автоматической установки даты и времени, рекомендуем включить эту опцию.
            </Paragraph>
            <SubTitle title="Настройка планшетов" />
            <Paragraph>
                Чтобы подготовить планшет к работе, мы рекомендуем сделать дополнительные настройки:
            </Paragraph>
            <List
                items={[
                    'Отключить автоблокировку экрана',
                    'Отключить все оповещения',
                    'Установить автоматическое включение и выключение устройства в настройках планшета',
                    'Выключить режим энергосбережения и адаптивное энергопотребление',
                ]}
                ordered={false}
            />
        </>
    )
}
