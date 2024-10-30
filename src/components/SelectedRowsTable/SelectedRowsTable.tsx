import React from 'react';
import { Table, Icon, Button } from 'semantic-ui-react';
import { DataItem } from '../../tableData';

interface SelectedRowsTableProps {
  selectedRows: DataItem[];
  removeRow: (id: number | string) => void;
}

const  SelectedRowsTable: React.FC<SelectedRowsTableProps> = ({ selectedRows, removeRow }) => (
  <Table celled striped compact>
    <Table.Header>
      <Table.Row>
        <Table.HeaderCell>ID</Table.HeaderCell>
        <Table.HeaderCell>Name</Table.HeaderCell>
        <Table.HeaderCell>Actions</Table.HeaderCell>
      </Table.Row>
    </Table.Header>
    <Table.Body>
      {selectedRows.map((item) => (
        <Table.Row key={item.id}>
          <Table.Cell>{item.id}</Table.Cell>
          <Table.Cell>{item.name}</Table.Cell>
          <Table.Cell textAlign="center">
            <Button icon basic onClick={() => removeRow(item.id)}>
              <Icon name="close" color="red" />
            </Button>
          </Table.Cell>
        </Table.Row>
      ))}
    </Table.Body>
  </Table>
);

export default SelectedRowsTable;


// I have 3 components one is the parent component and two are the child component
// .parent component is box model,one of the child component is  TableComponent one 
// more child is SelectedRowsTable. my requirement is 3 components are reuseble.
//  incorporate two child into box model. when i click box model appear in that box model one 
//  side is tablelayout component one side is SelectedRowsTable 
