import { ReactNode } from 'react'

export const Footnote = ({children} : {
    children: ReactNode
}) => {
    return (
        <p className='text-sm text-slate-500'>*{children}</p>
    )
}
