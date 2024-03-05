import React from 'react';

interface ListProps {
    items: React.ReactNode[]
    ordered: boolean;
}

export const List: React.FC<ListProps> = ({ items, ordered }) => {
    const ListTag = ordered ? 'ol' : 'ul';
    const listItemClass = ordered ? 'list-decimal' : 'list-disc';

    return (
        <ListTag className={`list-inside ${listItemClass} ml-10 my-5`}>
            {items.map((item, index) => (
                <li key={index} className="mb-2">{item}</li>
            ))}
        </ListTag>
    );
};