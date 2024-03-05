import { DocsLink } from "../../components/DocsLink"
import { Footnote } from "../../components/Footnote"
import { InfoBlock } from "../../components/InfoBlock"
import { PageHeader } from "../../components/PageHeader"
import { Paragraph } from "../../components/Paragraph"
import { SubTitle } from "../../components/SubTitle"
import { pages } from "../../pages"

export const ScreenOffline = () => {
    return (
        <>
            <PageHeader
                page="screenOffline"
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
                В этом разделе мы собрали основные причины, по которым в личном кабинете экран отображается в статусе «Выключен».
            </Paragraph>
            <SubTitle title="Кабель питания и электричество" />
            <Paragraph>
                Убедитесь, что устройство, на которое установлено приложение Фиджитал включено.
            </Paragraph>
            <Paragraph>
                Не забудьте проверить наличие электричества в розетке и кабель питания.
            </Paragraph>
            <SubTitle title="Устройство зависло" />
            <Paragraph>
                В зависимости от устройства может произойти такое, что оно зависло.
            </Paragraph>
            <Paragraph>
                В таком случае достаточно перезагрузить устройство и оно опять начнет отображать контент.
            </Paragraph>
            <Paragraph>
                Перезагрузка зависшего устройства обычно осуществляется кнопкой перезагрузки или выключением и включением питания устройства.
            </Paragraph>
            <SubTitle title="Нет интернета" />
            <Paragraph>
                Проверьте стабильность работы интернета в целом и то, что устройство подключено к интернету по Wi-Fi или по кабелю.
            </Paragraph>
            <Paragraph>
                Если устройство с приложением Фиджитал не может соединиться с нашим сервисом, то в личном кабинете будет отображаться, что экран выключен.
            </Paragraph>
            <Paragraph>
                Подробнее про работу плеера без интернета вы можете прочитать на странице <DocsLink to={pages.offlineMode.route}>{pages.offlineMode.label}</DocsLink>
            </Paragraph>
            <Footnote>
                Для on-premises требуется стабильное соединение с сервером.
            </Footnote>
            <SubTitle title="Изменился код подключения" />
            <Paragraph>
                После сброса устройства к заводским настройкам или полной переустановки приложения изменяется код подключения экрана.
            </Paragraph>
            <Paragraph>
                Если вы видите на экране код подключения, вам необходимо удалить старый экран в личном кабинете и подключить его повторно.
            </Paragraph>
            <InfoBlock>
                При обновлении приложения плеера через Google Play код установки не изменяется и повторно подключать экран в личном кабинете не требуется.
            </InfoBlock>
        </>
        
    )
}
