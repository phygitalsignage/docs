import { ReactNode } from "react"

export const Example = ({children} : {
    children: ReactNode
}) => {
    return (
        <div className='mx-5 p-5 bg-slate-100 rounded-xl my-10'>
            <div className='text-xs text-slate-400 uppercase font-bold'>
                Пример
            </div>
            <div className='mt-5'>
                {children}
            </div>
        </div>
    )
}
