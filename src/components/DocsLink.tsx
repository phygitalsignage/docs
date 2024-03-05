import React from 'react';
import { Link as RouterLink } from 'react-router-dom';

interface DocsLinkProps {
    to: string;
    children: React.ReactNode;
    [key: string]: unknown;
}

export const DocsLink: React.FC<DocsLinkProps> = ({ to, children, ...props }) => {
    const isExternal = /^(https?:\/\/|www\.)/.test(to);

    const classes = "text-blue-600 hover:underline"

    if (isExternal) {
        return (
            <a href={to} target="_blank" rel="noopener noreferrer" {...props} className={`${classes} inline-flex items-center gap-1`}>
                {children}
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4">
                    <path fillRule="evenodd" d="M4.25 5.5a.75.75 0 0 0-.75.75v8.5c0 .414.336.75.75.75h8.5a.75.75 0 0 0 .75-.75v-4a.75.75 0 0 1 1.5 0v4A2.25 2.25 0 0 1 12.75 17h-8.5A2.25 2.25 0 0 1 2 14.75v-8.5A2.25 2.25 0 0 1 4.25 4h5a.75.75 0 0 1 0 1.5h-5Z" clipRule="evenodd" />
                    <path fillRule="evenodd" d="M6.194 12.753a.75.75 0 0 0 1.06.053L16.5 4.44v2.81a.75.75 0 0 0 1.5 0v-4.5a.75.75 0 0 0-.75-.75h-4.5a.75.75 0 0 0 0 1.5h2.553l-9.056 8.194a.75.75 0 0 0-.053 1.06Z" clipRule="evenodd" />
                </svg>
            </a>
        );
    } else {
        return (
            <RouterLink to={to} {...props} className={`${classes}`}>
                {children}
            </RouterLink>
        );
    }
};