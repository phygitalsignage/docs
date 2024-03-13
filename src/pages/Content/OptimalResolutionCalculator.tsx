import { InfoBlock } from "../../components/InfoBlock"
import { List } from "../../components/List"
import { PageHeader } from "../../components/PageHeader"
import { Paragraph } from "../../components/Paragraph"
import { SubTitle } from "../../components/SubTitle"
import { Table } from "../../components/Table"

export const OptimalResolutionCalculator = () => {
    return (
        <>
            <PageHeader
                page="optimalResolutionCalculator"
                parentPage="content"
                updatedAt={
                    {
                        day: 13,
                        month: 3,
                        year: 24
                    }
                }
            />
            <Paragraph>
                Оптимальное разрешение контента зависит от нескольких параметров:
            </Paragraph>
            <List
                items={[
                    'Максимальное разрешение экрана',
                    'Диагональ экрана',
                    'Дистанция просмотра'
                ]}
                ordered={false}
            />
            <InfoBlock>
                Если у вас светодиодный экран или проектор, рекомендуем связаться с нашей технической поддержкой для консультации.
            </InfoBlock>
            <SubTitle title="Максимальное разрешение экрана" />
            <Paragraph>
                На этот параметр необходимо обращать внимание в первую очередь.
            </Paragraph>
            <Paragraph>
                Если разрешение экрана Full HD (1920x1080), то нет смысла использовать 4K контент, так как он будет сжат до Full HD.
            </Paragraph>
            <Paragraph>
                Использование контента, которое превышает разрешение экрана не только не имеет смысла, но и негативно влияет на плавность воспроизведения и скорость загрузки контента на устройства.
            </Paragraph>
            <SubTitle title="Диагональ экрана и расстояние" />
            <Paragraph>
                В таблице ниже ориентировочно указано при каком расстоянии в зависимости от диагонали экрана не имеет смысла использовать 4К контент.
            </Paragraph>
            <Paragraph>
                Для наблюдателя разница между 4K и Full HD на таком расстоянии практически не различима и мы рекомендуем использовать Full HD контент.
            </Paragraph>
            <div className="text-lg">
                <Table
                    headers={[<div className="">Диалогаль, дюймов</div>, 'Расстояние, метров']}
                    data={[
                        [<div className="text-center">32</div>, <div className="text-center">{">"} 1,30</div>],
                        [<div className="text-center">40</div>, <div className="text-center">{">"} 1,50</div>],
                        [<div className="text-center">43</div>, <div className="text-center">{">"} 1,75</div>],
                        [<div className="text-center">50</div>, <div className="text-center">{">"} 2</div>],
                        [<div className="text-center">55</div>, <div className="text-center">{">"} 2,20</div>],
                        [<div className="text-center">60</div>, <div className="text-center">{">"} 2,30</div>],
                        [<div className="text-center">65</div>, <div className="text-center">{">"} 2,30</div>],
                        [<div className="text-center">70</div>, <div className="text-center">{">"} 2,80</div>],
                        [<div className="text-center">75</div>, <div className="text-center">{">"} 3</div>],
                    ]}
                />
            </div>
        </>
    )
}
