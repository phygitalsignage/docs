import React from "react";
import { Breadcrumbs } from "../components/Breadcrumbs";
import { PageTitle } from "../components/PageTitle";
import { UpdatedAt } from "../components/UpdatedAt";
import { pages, PageName } from "../pages";

interface PageHeaderProps {
    page: PageName;
    parentPage?: PageName;
    updatedAt?: { day: number; month: number; year: number };
}

export const PageHeader: React.FC<PageHeaderProps> = ({ page, parentPage, updatedAt }) => {
    return (
        <header>
            <Breadcrumbs current={pages[page].route} parent={parentPage ? pages[parentPage] : null} />
            {updatedAt && <UpdatedAt {...updatedAt} />}
            <PageTitle title={pages[page].label} />
        </header>
    );
};