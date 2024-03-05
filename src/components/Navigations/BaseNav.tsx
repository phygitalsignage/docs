import { NavLink } from 'react-router-dom'
import { Page, pages, PageName } from "../../pages";

const generateNavLinks = (order: PageName[]) => {
    return order.map(page => {
        const { label, route } = pages[page];
        return { to: route, label };
    });
}

export const BaseNav = ({ links, main }: {links: PageName[], main?: Page}) => {
    const navLinks = generateNavLinks(links);

    return (
        <>
            {main && (
                <>
                    <NavLink to="/" end
                        className={({ isActive }) =>
                            [
                                isActive ? "text-blue-600 font-medium" : "",
                                "hover:bg-neutral-100 transition py-2 px-4 flex items-center rounded-lg gap-2 mb-2"
                            ].join(" ")
                        }
                        draggable={false}>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5">
                            <path fillRule="evenodd" d="M11.78 5.22a.75.75 0 0 1 0 1.06L8.06 10l3.72 3.72a.75.75 0 1 1-1.06 1.06l-4.25-4.25a.75.75 0 0 1 0-1.06l4.25-4.25a.75.75 0 0 1 1.06 0Z" clipRule="evenodd" />
                        </svg>

                    Назад
                    </NavLink>
                    <NavLink to={main.route} end
                        className={({ isActive }) =>
                            [
                                isActive ? "text-blue-600 font-medium cursor-default" : "hover:bg-neutral-100",
                                "transition py-2 px-4 flex items-center rounded-lg"
                            ].join(" ")
                        }
                        draggable={false}>
                        {main.label}
                    </NavLink>
                </>
            )}
            <div className={`${main && "pl-5 border-l-2 mt-2"} flex flex-col gap-1`}>
                {
                    navLinks.map((link, index) => (
                        <NavLink key={index} to={link.to} end
                            className={({ isActive }) =>
                                [
                                    isActive ? "text-blue-600 font-medium cursor-default bg-neutral-100" : "hover:bg-neutral-100",
                                    "transition py-2 px-4 flex items-center rounded-lg"
                                ].join(" ")
                            }
                            draggable={false}>
                            {link.label}
                        </NavLink>
                    ))
                }
            </div>
            
        </>
    
    )
}
