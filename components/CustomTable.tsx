import { flexRender, RowData, Table } from "@tanstack/react-table";
import React, { useEffect, useState } from "react";

type Props<T extends RowData> = {
  table: Table<T>;
};

export function CustomTable<T extends RowData>({ table }: Props<T>) {
  const [isTableReady, setIsTableReady] = useState(false);

  useEffect(() => {
    // Assuming `table` has some asynchronous initialization that needs to be awaited.
    // This is a speculative fix and might not be necessary if `table` does not have such behavior.
    const prepareTable = async () => {
      // Perform any setup or checks required for `table` to be ready.
      // This is a placeholder for actual logic that might be needed.
      // If `table` does not require async preparation, this entire useEffect can be removed.
      setIsTableReady(true);
    };

    prepareTable();

    // Cleanup function in case there are subscriptions or other resources to dispose.
    return () => {
      // Perform any necessary cleanup.
    };
  }, [table]); // Only re-run if `table` prop changes.

  if (!isTableReady) {
    // Render nothing or a loading indicator until `table` is ready.
    return null; // or <LoadingIndicator /> if you have a loading component.
  }

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
