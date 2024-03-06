import { DocsLink } from "../../components/DocsLink"
import { InfoBlock } from "../../components/InfoBlock"
import { List } from "../../components/List"
import { PageHeader } from "../../components/PageHeader"
import { Paragraph } from "../../components/Paragraph"
import { SubTitle } from "../../components/SubTitle"
import { UpdateTimeCalculator } from "../../components/UpdateTimeCalculator"

export const UpdateTime = () => {
    return (
        <>
            <PageHeader
                page="updateTime"
                parentPage="playlists"
                updatedAt={
                    {
                        day: 3,
                        month: 3,
                        year: 24
                    }
                }
            />
            <Paragraph>
                При редактировании плейлиста без добавления новых файлов, скорость обновления содержимого на экранах от 2 до 5 минут.
            </Paragraph>
            <Paragraph>
                Например:
            </Paragraph>
            <List
                items={[
                    'Изменение порядка воспроизведение',
                    'Добавление и изменение триггерных сценариев',
                    'Удаление контента',
                    'Изменение расписания'
                ]}
                ordered={false}
            />
            <Paragraph>
                Если вы добавляете в плейлист новые файлы или создаете полностью новый плейлист, то скорость зависит от размера файлов (плейлиста) и скорости интернет соединения у устройств, на которые установлено приложение Фиджитал.
            </Paragraph>
            <SubTitle title="Калькулятор времени обновления контента" />
            <Paragraph>
                С помощью нашего калькулятора вы можете рассчитать ориентировочное время обновления плейлистов на экранах после внесения изменений в личном кабинете.
            </Paragraph>
            <Paragraph>
                <DocsLink to="https://yandex.ru/internet/">Проверить скорость входящего соединения</DocsLink>
                <InfoBlock>
                    Указывайте скорость интернета, к которому подключены экраны.
                </InfoBlock>
            </Paragraph>
            <UpdateTimeCalculator />
        </>
    )
}
