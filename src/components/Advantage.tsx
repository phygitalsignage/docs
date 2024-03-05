import { ReactNode } from 'react'

export const Advantage = ({ title, children }: { title: string, children: ReactNode}) => {
    return (
        <div className='my-5'>
            <div className='flex gap-1 items-center'>
                <div className='text-lg'>
                    {title}
                </div>
            </div>
            <div className='bg-slate-100 p-6 rounded-xl mx-5 mt-2'>
                {children}
            </div>
        </div>
    )
}
