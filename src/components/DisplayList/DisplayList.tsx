import React from 'react';
import { Table, Button } from 'semantic-ui-react';
import { DataItem } from '../../tableData';

interface SelectedRowsTableProps {
  selectedRows: DataItem[];
  removeRow: (id: number | string) => void;
}

const SelectedRowsTable: React.FC<SelectedRowsTableProps> = ({ selectedRows, removeRow }) => {
  return (
    <Table celled striped compact>
      <Table.Header>
        <Table.Row>
          <Table.HeaderCell>ID</Table.HeaderCell>
          <Table.HeaderCell>Name</Table.HeaderCell>
          <Table.HeaderCell>Actions</Table.HeaderCell>
        </Table.Row>
      </Table.Header>
      <Table.Body>
        {selectedRows.map((row) => (
          <Table.Row key={row.id}>
            <Table.Cell>{row.id}</Table.Cell>
            <Table.Cell>{row.name}</Table.Cell>
            <Table.Cell>
              <Button negative onClick={() => removeRow(row.id)}>Remove</Button>
            </Table.Cell>
          </Table.Row>
        ))}
      </Table.Body>
    </Table>
  );
};

export default SelectedRowsTable;
