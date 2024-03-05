import { DocsLink } from "../../components/DocsLink"
import { PageHeader } from "../../components/PageHeader"
import { Paragraph } from "../../components/Paragraph"
import { Quote } from "../../components/Quote"
import { SubTitle } from "../../components/SubTitle"
import { WorkInProgress } from "../../components/WorkInProgress"

export const Cloud = () => {
    return (
        <>
            <PageHeader
                page="cloud"
                parentPage="usage"
                updatedAt={
                    {
                        day: 3,
                        month: 3,
                        year: 24
                    }
                }
            />
            <WorkInProgress />
            <SubTitle title="Расположение серверов" />
            <Paragraph>
                Мы используем инфраструктуру <DocsLink to="https://cloud.yandex.ru/ru/">Yandex Cloud</DocsLink>.
            </Paragraph>
            <Paragraph>
                Все данные хранятся на серверах, которые расположены на территории Российской Федерации.
            </Paragraph>
            <Quote source="https://cloud.yandex.ru/ru/security/standards/152-fz">
                Платформа Yandex Cloud имеет аттестат соответствия ИСПДн требованиям безопасности информации и персональных данных, а также выполняет все требования ФЗ-152 (УЗ-1), постановления правительства №1119 и Приказа ФСТЭК №21.
            </Quote>
        </>
        
    )
}
