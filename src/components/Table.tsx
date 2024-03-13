import { ReactNode } from 'react';

interface TableProps {
    headers: ReactNode[];
    data: ReactNode[][];
}

export const Table = ({ headers, data }: TableProps) => {
    return (
        <div className="overflow-x-auto">
            <table className="min-w-full table-auto">
                <thead>
                    <tr>
                        {headers.map((header, index) => (
                            <th key={index} className="px-4 py-2">{header}</th>
                        ))}
                    </tr>
                </thead>
                <tbody>
                    {data.map((rowData, rowIndex) => (
                        <tr key={rowIndex}>
                            {rowData.map((cellData, cellIndex) => (
                                <td key={cellIndex} className="border-t px-5 py-3">{cellData}</td>
                            ))}
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}