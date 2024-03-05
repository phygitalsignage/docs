import { Link } from "react-router-dom";
import { Page, pages } from "../pages";

export const HomeLinkGroups = ({ group }: { group: Page}) => {
    return (
        <div className="my-5">
            <div className="mb-2">
                <Link to={group.route} className="text-xl font-semibold hover:text-blue-600 hover:underline">{group.label}</Link>
            </div>
            <div className="flex flex-col gap-1 p-2.5 pt-1">
                {group.children && group.children.map((pageKey) => {
                    const page = pages[pageKey];
                    return (
                        <div>
                            <Link key={pageKey} to={page.route} className="text-slate-600 hover:text-blue-600 hover:underline">{page.label}</Link>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}