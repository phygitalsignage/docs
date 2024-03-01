import { Link, Outlet, NavLink } from "react-router-dom";
import { Logo } from "./components/Logo";

const navLinks = [
    { to: "/", label: "Документация" },
    { to: "/how-it-works", label: "Как это работает?" },
    { to: "/getting-started", label: "Подключение" },
    { to: "/signup", label: "Регистрация"},
    { to: "/devices", label: "Совместимые устройства" },
    { to: "/download", label: "Скачать приложение" }
];

export const DocsLayout = () => {
    return (
        <>
            <div className="flex min-h-screen w-full max-w-screen-xl mx-auto">
                <div className="w-[300px] shrink-0 p-5">
                    <Link to="/" className="flex items-center p-3 px-5 rounded-xl transition gap-3" draggable={false}>
                        <Logo height={8}/>
                        <div className="font-semibold text-lg">
                            Фиджитал
                        </div>
                    </Link>
                    <div className="flex flex-col my-5">
                        {navLinks.map((link, index) => (
                            <NavLink key={index} to={link.to}
                                className={({ isActive }) =>
                                    [
                                        isActive ? "text-blue-600" : "",
                                        "hover:bg-neutral-100 transition h-10 px-3 flex items-center rounded-lg"
                                    ].join(" ")
                                }
                                draggable={false}>
                                {link.label}
                            </NavLink>
                        ))}
                    </div>
                </div>
                <div className="flex-1 px-10 my-10">
                    <div className="max-w-[750px] text-lg">
                        <Outlet />
                    </div>
                </div>
            </div>
        </>
    );
};
