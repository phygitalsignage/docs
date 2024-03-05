import { usePageTitle } from "../hooks/usePageTitle"

export const PageTitle = ({ title }: { title: string }) => {
    
    usePageTitle(title)

    return (
        <h1 className="text-3xl font-bold mb-6">{ title }</h1>
    )
}
