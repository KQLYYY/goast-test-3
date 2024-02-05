import { flexRender, RowData, Table } from "@tanstack/react-table";
import React from "react";

type Props<T extends RowData> = {
  table: Table<T>;
};

export function CustomTable<T extends RowData>({ table }: Props<T>) {
  return (
    <table className="min-w-full divide-y divide-gray-300">
      <tbody>
        {table.getRowModel().rows.map((row) => (
          <tr key={row.id}>
            {row.getVisibleCells().map((cell) => (
              <td key={cell.id}>
                {flexRender(cell.column.columnDef.cell, cell.getContext())}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default CustomTable;
