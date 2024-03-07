import { DocsLink } from "../../components/DocsLink"
import { PageHeader } from "../../components/PageHeader"
import { Paragraph } from "../../components/Paragraph"
import { SubTitle } from "../../components/SubTitle"

export const ServerRequirements = () => {
    return (
        <>
            <PageHeader
                page="serverRequirements"
                parentPage="server"
                updatedAt={
                    {
                        day: 3,
                        month: 3,
                        year: 24
                    }
                }
            />
            <SubTitle title="Минимальные требования" />
            <Paragraph>
                Нижеуказанная конфигурация поддерживает подключение до 100 устройств.
            </Paragraph>
            <Paragraph>
                Операционная система: Unix/Linux (рекомендуем Ubuntu)
            </Paragraph>
            <Paragraph>
                Процессор: 2-ядерный
            </Paragraph>
            <Paragraph>
                Оперативная память: от 4 Гб
            </Paragraph>
            <Paragraph>
                Дисковое пространство: от 20 Гб
            </Paragraph>
            <Paragraph>
                Сеть: Стабильное интернет-соединение
            </Paragraph>
            <Paragraph>
                Версия Docker: 25.x.x или выше
            </Paragraph>
            <SubTitle title="Поддержка Astra Linux (Астра Линукс)" />
            <Paragraph>
                Серверная часть Фиджитал может быть запущена на сервере под управлением <DocsLink to="https://astralinux.ru/">Astra Linux</DocsLink>.
            </Paragraph>
        </>
    )
}
