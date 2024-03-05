import { PageHeader } from "../../components/PageHeader"
import { Paragraph } from "../../components/Paragraph"
import { SubTitle } from "../../components/SubTitle"
import { WarningBlock } from "../../components/WarningBlock"

export const DeletingContent = () => {
    return (
        <>
            <PageHeader
                page="deletingContent"
                parentPage="content"
                updatedAt={
                    {
                        day: 3,
                        month: 3,
                        year: 24
                    }
                }
            />
            <Paragraph>
                Вы можете удалять любые загруженные файлы в личном кабинете.
            </Paragraph>
            <WarningBlock>
                Это необратимое действие. После удаления файлов из личного кабинета вы не сможете их восстановить.
            </WarningBlock>
            <Paragraph>
                Удаление файлов сразу освобождает доступное дисковое пространство.
            </Paragraph>
            <Paragraph>
                При удалении файлов в личном кабинете, они автоматически удаляются из всех плейлистов.
            </Paragraph>
            <Paragraph>
                Если во время удаления контента какие-либо экраны были оффлайн, то контент на них удалится после восстановления подключения.
            </Paragraph>
            <SubTitle title="Удаление сразу нескольких файлов" />
            <Paragraph>
                Вы можете удалять файлы как по отдельности, так и несколько сразу.
            </Paragraph>
        </>
    )
}
