import React from 'react';
import { render, screen, act } from '@testing-library/react';
import CustomTable from './CustomTable';
import { makeData, getTable } from './utils'; // Assuming these utilities exist for test setup

describe('CustomTable', () => {
  it('renders without crashing', () => {
    const data = makeData(10); // Create 10 rows of data
    const table = getTable(data); // Get a table instance with the data

    render(<CustomTable table={table} />);
    expect(screen.getByRole('table')).toBeInTheDocument();
  });

  it('initially shows a loading state', () => {
    const data = makeData(10);
    const table = getTable(data);

    render(<CustomTable table={table} />);
    // Assuming there is a loading indicator that can be queried
    expect(screen.queryByTestId('loading-indicator')).toBeInTheDocument();
  });

  it('renders rows after table is ready', async () => {
    const data = makeData(10);
    const table = getTable(data);

    await act(async () => {
      render(<CustomTable table={table} />);
    });

    // Assuming rows can be identified by their role or testid
    expect(screen.getAllByRole('row')).toHaveLength(10);
  });

  it('cleans up on unmount', () => {
    const data = makeData(10);
    const table = getTable(data);
    const { unmount } = render(<CustomTable table={table} />);

    // Perform any necessary assertions before unmounting
    expect(screen.getByRole('table')).toBeInTheDocument();

    act(() => {
      unmount();
    });

    // Assuming there is a way to check if cleanup logic has been executed
    // For example, if cleanup involves removing event listeners, you would check if they have been removed
    // This is a placeholder for actual logic that might be needed
    expect(table.hasBeenCleanedUp).toBeTruthy(); // Replace with actual cleanup check
  });
});
