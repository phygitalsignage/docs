import { InfoBlock } from '../../components/InfoBlock'
import { PageHeader } from '../../components/PageHeader'
import { Paragraph } from '../../components/Paragraph'
import { SubTitle } from '../../components/SubTitle'
import { SupportLink } from '../../components/SupportLink'
import { Table } from '../../components/Table'
import { WarningBlock } from '../../components/WarningBlock'

export const SupportedFormats = () => {
    return (
        <>
            <PageHeader
                page="supportedFormats"
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
                Мы не гарантируем исправное отображение контента, который не соответствует разрешению экрана или превышает ограничения нашей платформы.
            </Paragraph>
            <Paragraph>
                Если вы уверены, что контент не превышает разрешение 4K и соответствует параметрам экрана, но при этом отображается некорректно — обратитесь, пожалуйста, в службу поддержки.
            </Paragraph>
            <WarningBlock>
                Техническая поддержка не оказывает услуги по редактированию и конвертации контента.
            </WarningBlock>
            <SubTitle title="Рекомендуемое разрешение" />
            <Paragraph>
                Мы рекомендуем использовать контент в формате Full HD: 1920×1080 для ландшафтной ориентации или 1080×1920 для портретной.
            </Paragraph>
            <Paragraph>
                Большинство устройств без проблем воспроизводят Full HD содержимое, вы можете не беспокоиться, что видео будет притормаживать или устройство зависнет.
            </Paragraph>
            <Paragraph>
                При просмотре контента с большого расстояния разница между 4K и Full HD не заметна, при этом контент отображается более плавно и занимает меньше места на диске.
            </Paragraph>
            <InfoBlock>
                4K видео и изображения занимают примерно в 4 раза больше места, а также значительно дольше загружаются на устройства при обновлении контента.
            </InfoBlock>
            <SubTitle title="Максимальное разрешение" />
            <Paragraph>
                Фиджитал поддерживает максимальное разрешение видео и изображений не выше 4K UHD: 3840×2160 для ландшафтной ориентации или 2160×3840 для портретной.
            </Paragraph>
            <Paragraph>
                Использование контента, который превышает разрешение устройства может привести к зависанию более слабых устройств.
            </Paragraph>
            <SubTitle title="Видео"/>
            <Paragraph>
                Поддерживаемые форматы: H.264
            </Paragraph>
            <Paragraph>
                Поддерживаемые контейнеры: MPEG-4 (.mp4)
            </Paragraph>
            <SubTitle title="Рекомендуемый битрейт видео" />
            <div className='text-lg'>
                <Table
                    headers={[<div className='text-left'>Разрешение</div>, 'Битрейт, кбит/с']}
                    data={[
                        ['2160p (4K)', <div className='text-center'>35,000</div>],
                        ['1440p (QHD)', <div className='text-center'>16,000</div>],
                        ['1080p (FullHD)', <div className='text-center'>8,000</div>],
                        ['720p', <div className='text-center'>5,000</div>],
                        ['480p', <div className='text-center'>2,500</div>],
                    ]}
                />
            </div>
            <SubTitle title="Изображения"/>
            <Paragraph>
                Поддерживаемые форматы: JPEG (.jpg), PNG (.png)
            </Paragraph>
            <WarningBlock>
                Фиджитал не поддерживает анимированные GIF изображения.
            </WarningBlock>
            <SubTitle title="Веб-страницы"/>
            <Paragraph>
                Мы планируем добавить поддержку веб-страниц и шаблонов (HTML, JavaScript, CSS) во втором полугодии 2024 года.
            </Paragraph>
            <InfoBlock>
                В разработке.
            </InfoBlock>
            <SubTitle title="Аудиофайлы"/>
            <WarningBlock>
                Не поддерживается.
            </WarningBlock>
            <SubTitle title="Презентации"/>
            <WarningBlock>
                Не поддерживается.
            </WarningBlock>
            <SubTitle title="PDF"/>
            <WarningBlock>
                Не поддерживается.
            </WarningBlock>
            <SubTitle title="Текстовые документы и таблицы Excel"/>
            <WarningBlock>
                Не поддерживается.
            </WarningBlock>
            <SubTitle title="Потоковое видео"/>
            <WarningBlock>
                Не поддерживается.
            </WarningBlock>
            <SubTitle title="Стриминговые сервисы, видеохостинги и IPTV"/>
            <Paragraph>
                YouTube, RUTUBE, VK, Twitch и пр.
            </Paragraph>
            <WarningBlock>
                Не поддерживается.
            </WarningBlock>
            <SubTitle title="Интерактивный контент"/>
            <Paragraph>
                Навигация, киоски самообслуживания, информационные стенды и пр.
            </Paragraph>
            <WarningBlock>
                Не поддерживается.
            </WarningBlock>
            <SubTitle title="3D-контент"/>
            <WarningBlock>
                Не поддерживается.
            </WarningBlock>
            <SubTitle title="Необходима поддержка определенного типа контента?" />
            <Paragraph>
                Если для вас критически важно наличие поддержки какого-либо контента, напишите нам и мы постараемся найти решение.
            </Paragraph>
            <Paragraph>
                <SupportLink/>
            </Paragraph>
        </>
    )
}
