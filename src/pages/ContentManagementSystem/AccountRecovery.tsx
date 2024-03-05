import { DocsLink } from '../../components/DocsLink'
import { InfoBlock } from '../../components/InfoBlock'
import { PageHeader } from '../../components/PageHeader'
import { Paragraph } from '../../components/Paragraph'
import { SubTitle } from '../../components/SubTitle'
import { SupportLink } from '../../components/SupportLink'
import { pages } from '../../pages'

export const AccountRecovery = () => {
    return (
        <>
            <PageHeader
                page="accountRecovery"
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
                На этой странице собраны наиболее частые ситуации с проблемами входа в личный кабинет и способы их решения.
            </Paragraph>
            <InfoBlock>
                Мы не ограничиваем доступ в личный кабинет в случае, если заканчивается платная подписка или тестовый период.
            </InfoBlock>
            <SubTitle title="Восстановление пароля"/>
            <Paragraph>
                Вы можете восстановить свой пароль на странице восстановления пароля <DocsLink to="https://cloud.phygitalsignage.io/recovery-password">cloud.phygitalsignage.io/recovery-password</DocsLink>
            </Paragraph>
            <Paragraph>
                На этой странице необходимо указать ваш адрес электронной почты, указанной при регистрации. После этого на почту придет письмо с ссылкой на смену пароля от вашей учетной записи.
            </Paragraph>
            <InfoBlock>
                Если не приходит письмо, проверьте папку «Спам» и возможность на получение писем с почтового адреса noreply@phygitalsignage.io, если вы используете корпоративную почту.
            </InfoBlock>
            <SubTitle title="Организация не найдена"/>
            <Paragraph>
                Если при попытке авторизации вы видите сообщение, что организация не найдена, это значит, что учетной записи с такой почтой не существует.
            </Paragraph>
            <Paragraph>
                Рекомендуем проверить правильность ввода адреса электронной почты.
            </Paragraph>
            <Paragraph>
                Если вы уверены, что регистрировали учетную запись на эту почту и затем не меняли ее, свяжитесь с нами.
            </Paragraph>
            <SubTitle title="Белый экран"/>
            См. <DocsLink to={pages.whiteScreen.route}>{pages.troubleshooting.label} - {pages.whiteScreen.label}</DocsLink>         
            <SubTitle title="Другая проблема?"/>
            <Paragraph>
                <SupportLink />
            </Paragraph>
        </>
    )
}
