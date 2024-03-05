import { ReactNode } from "react"

export const WarningBlock = ({ children }: { children: ReactNode}) => {
    return (
        <div className='w-full flex flex-col sm:flex-row gap-4 p-5 bg-orange-50 rounded-lg my-10'>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-orange-600 shrink-0">
                <path strokeLinecap="round" strokeLinejoin="round" d="m11.25 11.25.041-.02a.75.75 0 0 1 1.063.852l-.708 2.836a.75.75 0 0 0 1.063.853l.041-.021M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9-3.75h.008v.008H12V8.25Z" />
            </svg>
            <div className="text-base">
                {children}
            </div>
        </div>
    )
}
