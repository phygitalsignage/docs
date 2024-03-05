import GooglePlayBadgeSrc from "../../assets/google-play-badge.png"
import { InfoBlock } from "../../components/InfoBlock"
import { SubTitle } from "../../components/SubTitle"
import { pages } from "../../pages"
import { DocsLink } from "../../components/DocsLink"
import { PageHeader } from "../../components/PageHeader"

export const Download = () => {
    return (
        <>
            <PageHeader
                page="download"
                parentPage="player"
                updatedAt={
                    {
                        day: 3,
                        month: 3,
                        year: 24
                    }
                }
            />
            <p>
                Чтобы управлять контентом на экранах с помощью Фиджитал вам необходимо установить приложение нашего плеера на экран или устройство, которое подключено к экрану.
            </p>
            <SubTitle title="Установка через Google Play" />
            <div className="mb-5">
                <div>
                    Скачайте приложение по ссылке в Google Play
                </div>
                <a href="https://play.google.com/store/apps/details?id=io.phygitalsignage.smilplayer" target="_blank" className="inline-flex h-16">
                    <img src={GooglePlayBadgeSrc} alt="" className="h-full"/>
                </a>
            </div>
            <div>
                Или найдите приложение по названию "Phygital Signage Player".
            </div>
            <SubTitle title="Установка с помощью APK файла" />
            <div className="mb-5">
                Если на вашем устройстве нет Google Play, то вы можете скачать .apk файл и установить приложение плеера самостоятельно.
                <div className="mt-5">
                    <a className="inline-block px-3 py-2 bg-blue-700 text-white hover:bg-blue-600 rounded-lg" href="https://storage.yandexcloud.net/smilplayer/app-release-6.1.1.apk" download>Скачать .apk</a>
                </div>
            </div>
            <InfoBlock>
                При установке через .apk файл обновление приложения необходимо будет осуществлять вручную. 
            </InfoBlock>
            <div>
                <DocsLink to={pages.update.route}>Узнать больше об обновлении приложения</DocsLink>
            </div>
        </>
    )
}
