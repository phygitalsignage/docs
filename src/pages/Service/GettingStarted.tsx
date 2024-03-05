import { DocsLink } from "../../components/DocsLink"
import { InfoBlock } from "../../components/InfoBlock"
import { PageHeader } from "../../components/PageHeader"
import { Paragraph } from "../../components/Paragraph"
import { SubTitle } from "../../components/SubTitle"
import { WorkInProgress } from "../../components/WorkInProgress"
import { pages } from "../../pages"

export const GettingStarted = () => {
    return (
        <>
            <PageHeader
                page="gettingStarted"
                parentPage="service"
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
                Для работы с Фиджитал не нужно устанавливать дополнительное программное обеспечение на компьютер.
            </Paragraph>
            <Paragraph>
                Все управление осуществляется через личный кабинет <DocsLink to="https://cloud.phygitalsignage.io/">cloud.phygitalsignage.io</DocsLink>, для доступа необходимы браузер и интернет.
            </Paragraph>
            <SubTitle title="Что необходимо для начала работы?"/>
            <Paragraph>
                1. Зарегистрироваться в личном кабинете Фиджитал <DocsLink to="https://cloud.phygitalsignage.io/signup">cloud.phygitalsignage.io/signup</DocsLink>
            </Paragraph>
            <Paragraph>
                2. <DocsLink to={pages.subscription.route}>Запросить тестовый доступ или оформить подписку</DocsLink>
            </Paragraph>
            <Paragraph>
                3. Экран (телевизор, дисплей, монитор, видеостена), проектор или планшет
            </Paragraph>
            <Paragraph>
                4. В отдельных случаях Android приставка / плеер
            </Paragraph>
            <InfoBlock>
                <div className="mb-3">
                    Мы не производим оборудование. Фиджитал можно использовать на большом количестве различных устройств.
                </div>
                <DocsLink to={pages.devices.route}>Подробнее о совместимых устройствах</DocsLink>
            </InfoBlock>
        </>
    )
}
