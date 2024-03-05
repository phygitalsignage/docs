import { PageHeader } from "../../components/PageHeader"
import { Paragraph } from "../../components/Paragraph"
import { SupportLink } from "../../components/SupportLink"

export const DeleteAccount = () => {
    return (
        <>
            <PageHeader
                page="deleteAccount"
                parentPage="cms"
                updatedAt={
                    {
                        day: 3,
                        month: 3,
                        year: 24
                    }
                }
            />
            <Paragraph>
                В целях безопасности мы удаляем учетные записи только вручную, по обращению владельца учетной записи.
            </Paragraph>
            <Paragraph>
                Если вы действительно хотите полностью удалить загруженный контент, подключенные экраны и вашу учетную запись, пожалуйста, обратитесь в нашу службу поддержки.
            </Paragraph>
            <Paragraph>
                <SupportLink/>
            </Paragraph>
        </>
    )
}
