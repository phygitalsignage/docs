import { PageTitle } from "../components/PageTitle"
import { SubTitle } from "../components/SubTitle"

export const Devices = () => {
    return (
        <div>
            <PageTitle title="Устройства" />
            <div>
                Фиджитал можно использовать практически с любыми экранами: с телевизорами, профессиональными дисплеями, мониторами, менюбордами, светодиодными экранами, видеостенами, проекторами и планшетами.
            </div>
            <div className="mt-5">
                Есть телевизоры и дисплеи, на которые можно напрямую установить приложение Фиджитал. Если на ваш экран нет возможности устанавливать приложения, то необходимо приобрести Android приставку и подключить её к экрану.
            </div>
            <SubTitle title="Телевизоры" />
            <div>
                Xiaomi
            </div>
            <SubTitle title="Профессиональные дисплеи" />
            <div>
                Lumien, Sony, Philips, Panasonic, ViewSonic, Sharp, NEC, BenQ, Hisense, Lumien, Iiyama
            </div>
            <SubTitle title="Android приставки (плееры)" />
            <div>
                iconBIT, Сбербокс с прошивкой Фиджитал, Xiaomi Stick, TOX3, Rombica, X96, Ugoos
            </div>
            <SubTitle title="Планшеты" />
            <div>
                Фиджитал можно использовать на Android планшетах с версией ОС выше 8.0
            </div>
            <SubTitle title="Прочее" />
            <div>
                Для подключения светодиодных экранов и проекторов, необходимо подключить Android приставку по HDMI к контроллеру экрана или проектору.
            </div>
        </div>
    )
}
