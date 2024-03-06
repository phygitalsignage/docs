import { DocsLink } from "../../components/DocsLink"
import { Footnote } from "../../components/Footnote"
import { PageHeader } from "../../components/PageHeader"
import { Paragraph } from "../../components/Paragraph"
import { SubTitle } from "../../components/SubTitle"
import { WarningBlock } from "../../components/WarningBlock"
import { pages } from "../../pages"

export const PlayerRequirements = () => {
    return (
        <div>
            <PageHeader
                page="playerRequirements"
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
                Плеер Фиджитал может быть установлен только на Android устройства.
            </Paragraph>
            <Paragraph>
                Это могут быть телевизоры, профессиональные дисплеи, ТВ-приставки и планшеты.
            </Paragraph>
            <Paragraph>
                Подробнее см. <DocsLink to={pages.devices.route}>{pages.devices.label}</DocsLink>
            </Paragraph>
            <SubTitle title="Операционная система"/>
            <Paragraph>
                Android 8.0 и выше.
            </Paragraph>
            <SubTitle title="Аппаратные требования"/>
            <Paragraph>
                Минимальные требования к характеристикам устройства:
            </Paragraph>
            <Paragraph>
                Процессор: Quad-core Cortex-A53
            </Paragraph>
            <Paragraph>
                Оперативная память:	1 Гб
            </Paragraph>
            <Paragraph>
                Дисковое пространство:	8 Гб
            </Paragraph>
            <SubTitle title="Права доступа"/>
            <Paragraph>
                Возможность установки приложений из Google Play, RuStore или APK файлов напрямую.
            </Paragraph>
            <SubTitle title="Интернет"/>
            <Paragraph>
                Необходимо постоянное подключение к интернету*.
            </Paragraph>
            <WarningBlock>
                При обновлении контента на экранах может расходоваться большое количество трафика.<br/><br/>
                Мы рекомендуем использовать безлимитный интернет на всех устройствах, которые подключены к Фиджитал.
            </WarningBlock>
            <Footnote>
                Для on-premises требуется стабильное соединение с сервером.
            </Footnote>
            <SubTitle title="Скорость соединения"/>
            <Paragraph>
                Рекомендуемая: от 5 Мбит/с.
            </Paragraph>
            <Paragraph>
                При более низкой скорости будет более долгое обновление контента и плейлистов на экранах.
            </Paragraph>
        </div>
    )
}
