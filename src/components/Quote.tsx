import { ReactNode } from "react"
import { DocsLink } from "./DocsLink"

export const Quote = ({children, source} : {
    children: ReactNode
    source?: string
}) => {
    return (
        <div className="mx-5 bg-slate-100 p-5 rounded-xl my-10">
            {children}
            { source && (
                <div className="text-sm mt-2">
                    <DocsLink to={source}>
                    Ссылка на источник
                    </DocsLink>
                </div>
            )}
        </div>
    )
}
