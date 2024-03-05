import { Breadcrumbs } from "../components/Breadcrumbs"
import { DocsLink } from "../components/DocsLink"
import { List } from "../components/List"
import { PageTitle } from "../components/PageTitle"
import { Paragraph } from "../components/Paragraph"
import { SubTitle } from "../components/SubTitle"
import { WarningBlock } from "../components/WarningBlock"
import { pages } from "../pages"

export const ContentManagementSystem = () => {
    return (
        <>
            <Breadcrumbs current={pages.cms.label} parent={null}/>
            <PageTitle title={pages.cms.label} />
            <Paragraph>
                Личный кабинет Фиджитал — это интерфейс системы управления контентом и экранами.
            </Paragraph>
            <Paragraph>
                Для работы в личном кабинете необходимы:
            </Paragraph>
            <List items={['Комьютер или ноутбук', 'Браузер', 'Интернет', 'Учетная запись Фиджитал']} ordered={false}/>
            <Paragraph>
                Перейти в личный кабинет можно по ссылке <DocsLink to="https://cloud.phygitalsignage.io/">cloud.phygitalsignage.io</DocsLink>
            </Paragraph>
            <WarningBlock>
                Личный кабинет не предназначен для работы с планшетов или смартфонов.
            </WarningBlock>
            <SubTitle title="Создание учетной записи"/>
            <Paragraph>
                У нас открытая регистрация, доступная для всех желающих.
            </Paragraph>
            <Paragraph>
                Вы можете свободно ознакомиться с интерфейсом и запросить бесплатный тестовый доступ на подключение экранов.
            </Paragraph>
            <Paragraph>
                При регистрации потребуется указать:
            </Paragraph>
            <List items={['Имя и фамилию', 'Email', 'Пароль']} ordered={false}/>
            <Paragraph>
                И затем подтвердить адрес электронной почты.
            </Paragraph>
            <Paragraph>
                <DocsLink to="https://cloud.phygitalsignage.io/signup">Создать учетную запись</DocsLink>
            </Paragraph>
            <SubTitle title="Подтверждение адреса электронной почты"/>
            <Paragraph>
                См. <DocsLink to={pages.emailConfirmation.route}>{pages.emailConfirmation.label}</DocsLink>
            </Paragraph>
            <SubTitle title="Личные данные"/>
            <Paragraph>
                После регистрации, в личном кабинете также можно указать дополнительные персональные данные.
            </Paragraph>
            <SubTitle title="Обучение и подсказки"/>
            <Paragraph>
                Вся актуальная справочная информация о работе с Фиджитал располагается на этом сайте <DocsLink to="https://docs.phygitalsignage.io/">docs.phygitalsignage.io</DocsLink>
            </Paragraph>
            <Paragraph>
                При наведении на некоторые элементы в интерфейсе в личном кабинете вы можете увидеть всплывающие подсказки.
            </Paragraph>
            <SubTitle title="Поддерживаемые операционные системы" />
            <List items={['Windows', 'Linux', 'macOS']} ordered={false}/>
            <SubTitle title="Рекомендуемые браузеры" />
            <List items={['Google Chrome', 'Яндекс.Браузер', 'Opera Browser', 'Mozilla Firefox', 'Safari']} ordered={false}/>
            <SubTitle title="Мобильная версия личного кабинета"/>
            <Paragraph>
                В мобильной версии личного кабинета отображается только информация о статусе экранов.
            </Paragraph>
            <Paragraph>
                Для управления контентом на экранах необходимо зайти в личный кабинет с компьютера или ноутбука.
            </Paragraph>
        </>
    )
}
