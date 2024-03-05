import { Link } from "react-router-dom";
import { Page } from "../pages";

export const Breadcrumbs = ({ parent, current }: { parent: Page | null; current: string }) => {
    const linkClass = "leading-1 inline-flex rounded items-center text-slate-400 hover:text-slate-600 transition"

    return (
        <div className="text-base mb-5 flex items-center gap-1">
            <span>
                <Link to="/" className={linkClass}>Документация</Link>
            </span>
            <Separator/>
            {parent !== null && (
                <div className="flex items-center gap-1">
                    <Link to={parent.route}  className={linkClass}>{parent.label}</Link>
                    <Separator/>
                </div>
            )}
            <span className="py-1 px-3 rounded items-center text-slate-600 font-bold hidden">{current}</span>
        </div>
    );
};

const Separator = () => {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5 text-slate-400">
            <path fillRule="evenodd" d="M8.22 5.22a.75.75 0 0 1 1.06 0l4.25 4.25a.75.75 0 0 1 0 1.06l-4.25 4.25a.75.75 0 0 1-1.06-1.06L11.94 10 8.22 6.28a.75.75 0 0 1 0-1.06Z" clipRule="evenodd" />
        </svg>
    )
}