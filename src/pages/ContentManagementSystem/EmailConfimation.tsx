import { DocsLink } from "../../components/DocsLink"
import { InfoBlock } from "../../components/InfoBlock"
import { PageHeader } from "../../components/PageHeader"
import { Paragraph } from "../../components/Paragraph"
import { SubTitle } from "../../components/SubTitle"
import { SupportLink } from "../../components/SupportLink"
import { pages } from "../../pages"

export const EmailConfimation = () => {
    return (
        <>
            <PageHeader
                page="emailConfirmation"
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
                После регистрации в Фиджитал необходимо подтвердить адрес электронной почты.
            </Paragraph>
            <Paragraph>
                Если вы получили письмо, но не создавали аккаунт, то можете просто проигнорировать его.
            </Paragraph>
            <InfoBlock>
                Для <DocsLink to={pages.onpremises.route}>on-premises инсталляций</DocsLink> функционал подтверждения адреса электронной почты опционален.
            </InfoBlock>
            <SubTitle title="Повторный запрос письма для подтверждения адреса электронной почты" />
            <Paragraph>
                Если вы не получили письмо после регистрации или у вас нет к нему доступа, мы можем отправить его повторно.
            </Paragraph>
            <Paragraph>
                <SupportLink/>
            </Paragraph>
        </>
    )
}
