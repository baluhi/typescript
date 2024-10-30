// import React from 'react';
// import { Icon } from 'semantic-ui-react';
// import { DataItem } from '../../tableData';

// interface TableComponentProps {
//   data: DataItem[];
// }

// const TableComponent: React.FC<TableComponentProps> = ({ data }) => {
//   const [expandedRows, setExpandedRows] = React.useState<(number | string)[]>([]);

//   const toggleRow = (id: number | string) => {
//     setExpandedRows((prev) =>
//       prev.includes(id) ? prev.filter((rowId) => rowId !== id) : [...prev, id]
//     );
//   };
//   // Recursive function to render rows
//   const renderRows = (items: DataItem[], depth: number = 0): React.ReactNode => {
//     return items.map((item) => {
//       const isExpanded = expandedRows.includes(item.id);

//       return (
//         <React.Fragment key={item.id}>
//           <tr>
//             <td style={{ paddingLeft: `${depth * 20}px` }}>
//               <Icon
//                 name={isExpanded ? 'angle down' : 'angle right'}
//                 onClick={() => toggleRow(item.id)}
//                 style={{ cursor: 'pointer' }}
//               />
//               {item.id}
//             </td>
//             <td>{item.name}</td>
//           </tr>
//           {/* If the row is expanded and has a sub_list, render it recursively */}
//           {isExpanded && item.sub_list && item.sub_list.length > 0 && (
//             renderRows(item.sub_list, depth + 1)
//           )}
//         </React.Fragment>
//       );
//     });
//   };

//   return (
//     <table>
//       <tbody>{renderRows(data)}</tbody>
//     </table>
//   );
// };

// export default TableComponent;


import React from 'react';
import { Icon, Table, Button, Modal, Grid } from 'semantic-ui-react';
import { DataItem } from '../../tableData';
import SelectedRowsTable from '../SelectedRowsTable/SelectedRowsTable'

interface TableComponentProps {
  data: DataItem[];
}

const TableComponent: React.FC<TableComponentProps> = ({ data }) => {
  const [expandedRows, setExpandedRows] = React.useState<(number | string)[]>([]);
  const [selectedRows, setSelectedRows] = React.useState<DataItem[]>([]);
  const [isModalOpen, setIsModalOpen] = React.useState(false);

  const toggleRow = (id: number | string) => {
    setExpandedRows((prev) =>
      prev.includes(id) ? prev.filter((rowId) => rowId !== id) : [...prev, id]
    );
  };

  const addRowToSelected = (item: DataItem) => {
    if (!item.sub_list || item.sub_list.length === 0) {
      setSelectedRows((prev) => [...prev, item]);
      setExpandedRows((prev) => prev.filter((rowId) => rowId !== item.id)); // Remove caret when added to selected
    }
  };

  const removeRow = (id: number | string) => {
    setSelectedRows((prev) => prev.filter((item) => item.id !== id));
  };

  const renderRows = (items: DataItem[], depth: number = 0): React.ReactNode => {
    return items.map((item) => {
      const isExpanded = expandedRows.includes(item.id);
      const isSelected = selectedRows.some((row) => row.id === item.id);
      const isParent = item.sub_list && item.sub_list.length > 0;

      return (
        <React.Fragment key={item.id}>
          <Table.Row>
            <Table.Cell style={{ paddingLeft: `${depth * 20}px` }}>
              {!isSelected && (
                <Icon
                  name={isExpanded ? 'angle down' : 'angle right'}
                  onClick={() => toggleRow(item.id)}
                  style={{ cursor: 'pointer', marginRight: '8px' }}
                />
              )}
              <Button
                basic
                compact
                size="small"
                onClick={() => addRowToSelected(item)}
                disabled={isSelected || isParent}
              >
                {item.id}
              </Button>
            </Table.Cell>
            <Table.Cell>{item.name}</Table.Cell>
          </Table.Row>
          {isExpanded && item.sub_list && item.sub_list.length > 0 && (
            renderRows(item.sub_list, depth + 1)
          )}
        </React.Fragment>
      );
    });
  };

  return (
    <div>
      <Button primary onClick={() => setIsModalOpen(true)}>Open Table Modal</Button>

      <Modal open={isModalOpen} onClose={() => setIsModalOpen(false)} size="large">
        <Modal.Header>Tables</Modal.Header>
        <Modal.Content>
          <Grid columns={2} divided>
            <Grid.Row>
              <Grid.Column>
                <h3>Main Table</h3>
                <Table celled striped compact>
                  <Table.Header>
                    <Table.Row>
                      <Table.HeaderCell>ID</Table.HeaderCell>
                      <Table.HeaderCell>Name</Table.HeaderCell>
                    </Table.Row>
                  </Table.Header>
                  <Table.Body>{renderRows(data)}</Table.Body>
                </Table>
              </Grid.Column>

              <Grid.Column>
                <h3>Selected Rows</h3>
                <SelectedRowsTable selectedRows={selectedRows} removeRow={removeRow} />
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </Modal.Content>
        <Modal.Actions>
          <Button onClick={() => setIsModalOpen(false)}>Close</Button>
        </Modal.Actions>
      </Modal>
    </div>
  );
};

export default TableComponent;
