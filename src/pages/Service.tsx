import { Advantage } from "../components/Advantage"
import { DocsLink } from "../components/DocsLink"
import { List } from "../components/List"
import { PageHeader } from "../components/PageHeader"
import { Paragraph } from "../components/Paragraph"
import { SubTitle } from "../components/SubTitle"
import { SupportLink } from "../components/SupportLink"
import { pages } from "../pages"

export const Service = () => {
    return (
        <>
            <PageHeader
                page="service"
                updatedAt={
                    {
                        day: 3,
                        month: 3,
                        year: 24
                    }
                }
            />
            <Paragraph>
                Фиджитал — это облачный сервис для удаленного управления контентом на экранах.
            </Paragraph>
            <Paragraph>
                Вы можете:
            </Paragraph>
            <List
                items={[
                    'Централизованно управлять контентом на 1, 10 или 10,000 экранах',
                    'Создавать неограниченное количество плейлистов',
                    'Одновременно обновлять контент на одном или сразу нескольких экранах',
                    'Заранее планировать показ нужного контента по времени',
                    'Показывать определенный контент в зависимости от погоды',
                ]}
                ordered={false} 
            />
            <SubTitle title="Какие экраны можно подключить к Фиджитал?" />
            <Paragraph>
                К нашему сервису можно подключить практически любой любой экран.
            </Paragraph>
            <Paragraph>
                Подробнее cм. <DocsLink to={pages.devices.route}>{pages.devices.label}</DocsLink>
            </Paragraph>
            <SubTitle title="Преимущества" />
            <Advantage title="Открытая регистрация и бесплатный тестовый период">
                Вы самостоятельно можете зарегистрироваться <DocsLink to={pages.cms.route}>в личном кабинете</DocsLink> и попробовать наш сервис без привязки банковской карты или сложного процесса согласования.
            </Advantage>
            <Paragraph>
                См. <DocsLink to={pages.trial.route}>Подключение бесплатного тестового периода</DocsLink>
            </Paragraph>
            <Advantage title="Удаленная работа">
                Вам не обязательно находиться рядом с экранами. Для управления контентом нужен только доступ в интернет и компьютер или ноутбук.
            </Advantage>
            <Advantage title="Современный и понятный интерфейс">
                У нас неперегруженный личный кабинет, в котором легко можно разобраться, светлые тона и удобная навигация.
            </Advantage>
            <Advantage title="Простые настройки">
                Вам не нужно быть техническим специалистом или проходить долгое обучение, чтобы подключить экраны и управлять контентом.
            </Advantage>
            <Advantage title="Удобный плеер">
                В приложении плеера нет никаких настроек, достаточно просто подключить экран и затем управлять всем через <DocsLink to={pages.cms.route}>личный кабинет</DocsLink>.
            </Advantage>
            <SubTitle title="Возникли трудности?"/>
            <Paragraph>
                Мы создаем удобный и понятный сервис, без множества сложных настроек.
            </Paragraph>
            <Paragraph>
                Тем не менее, при изучении чего-то нового иногда возникают трудности.
            </Paragraph>
            <Paragraph>
                Мы всегда готовы помочь вам разобраться в том, как устроен Фиджитал и что необходимо для того, чтобы начать работу.
            </Paragraph>
            <List
                items={[
                    'Проведем демонстрацию сервиса',
                    'Проведем обучение',
                    'Ответим на все ваши вопросы',
                    'Поможем подобрать и подключить оборудование',
                ]}
                ordered={false}
            />
            <Paragraph>
                <SupportLink/>
            </Paragraph>
            <SubTitle title="Создано в России" />
            <div className="bg-slate-100 rounded-xl flex flex-col w-full py-14 justify-center items-center gap-4 px-5">
                <div className="text-slate-700 text-xl text-center">
                Фиджитал входит в Единый реестр российских программ
                </div>
                <a href="https://reestr.digital.gov.ru/reestr/1708880/" className="text-slate-500 hover:text-blue-600" target="_blank">https://reestr.digital.gov.ru/reestr/1708880/</a>
            </div>
        </>
    )
}
