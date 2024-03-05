import { ReactNode } from 'react'

export const Paragraph = ({children} : {
    children: ReactNode
}) => {
    return (
        <p className='mb-5 mt-1'>{children}</p>
    )
}
