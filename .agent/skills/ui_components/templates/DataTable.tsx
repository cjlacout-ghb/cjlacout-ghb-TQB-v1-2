interface Column {
    key: string;
    label: string;
    align?: 'left' | 'center' | 'right';
    width?: string;
}

interface DataTableProps {
    columns: Column[];
    data: any[];
}

/**
 * TQB Standard Data Table
 */
export default function DataTable({ columns, data }: DataTableProps) {
    return (
        <div className="overflow-x-auto">
            <table className="table-dark w-full">
                <thead>
                    <tr>
                        {columns.map((col) => (
                            <th
                                key={col.key}
                                className={`
                                    ${col.align === 'center' ? 'text-center' : col.align === 'right' ? 'text-right' : 'text-left'}
                                    ${col.width || ''}
                                `}
                            >
                                {col.label}
                            </th>
                        ))}
                    </tr>
                </thead>
                <tbody>
                    {data.map((row, i) => (
                        <tr key={i} className="animate-slide-up" style={{ animationDelay: `${i * 50}ms` }}>
                            {columns.map((col) => (
                                <td
                                    key={col.key}
                                    className={`
                                        ${col.align === 'center' ? 'text-center' : col.align === 'right' ? 'text-right' : 'text-left'}
                                    `}
                                >
                                    {row[col.key]}
                                </td>
                            ))}
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}
