import React from 'react';

interface Props {
    day: number;
    month: number;
    year: number;
}

const getMonthName = (month: number): string => {
    const months = [
        'января',
        'февраля',
        'марта',
        'апреля',
        'мая',
        'июня',
        'июля',
        'августа',
        'сентября',
        'октября',
        'ноября',
        'декабря'
    ];

    return months[month - 1];
}

export const UpdatedAt: React.FC<Props> = ({ day, month, year }) => {
    const monthName = getMonthName(month);

    return (
        <div className='my-2 text-sm text-slate-500'>
            <span>Обновлено: {day} {monthName} 20{year} года</span>
        </div>
    );
}