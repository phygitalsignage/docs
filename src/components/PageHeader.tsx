import React from "react";
import { Breadcrumbs } from "../components/Breadcrumbs";
import { PageTitle } from "../components/PageTitle";
import { UpdatedAt } from "../components/UpdatedAt";
import { pages, Pages } from "../pages";

interface PageHeaderProps {
  page: keyof Pages;
  parentPage?: keyof Pages;
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