import { Link, Outlet, NavLink } from "react-router-dom"
import { Logo } from "./components/Logo"

export const DocsLayout = () => {
    return (
        <>
            <div className="flex min-h-screen w-full">
                <div className="w-[300px] shrink-0 p-5">
                    <Link to="/" className="bg-neutral-100 hover:bg-neutral-200 flex items-center p-3 px-5 rounded-xl transition">
                        <Logo height={8}/>
                        <div className="font-medium flex-1 text-center">
                            Документация
                        </div>
                    </Link>
                    <div>
                        <NavLink to="/download">
                            Скачать приложение
                        </NavLink>
                    </div>
                </div>
                <div className="flex-1 px-10 my-10">
                    <div className="max-w-[750px] text-lg">
                        <Outlet />
                    </div>
                </div>
            </div>
        </>
    )
}
