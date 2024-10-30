import React from 'react';
import { Icon, Table, Button } from 'semantic-ui-react';
import { DataItem } from '../../tableData';

interface TableComponentProps {
  data: DataItem[];
  addRowToSelected: (item: DataItem) => void;
  selectedRows: DataItem[];
}

const  TableComponent: React.FC<TableComponentProps> = ({ data, addRowToSelected, selectedRows }) => {
  const [expandedRows, setExpandedRows] = React.useState<(number | string)[]>([]);

  const toggleRow = (id: number | string) => {
    setExpandedRows(prev => prev.includes(id) ? prev.filter(rowId => rowId !== id) : [...prev, id]);
  };

  const renderRows = (items: DataItem[], depth = 0): React.ReactNode => {
    return items.map(item => {
      const isExpanded = expandedRows.includes(item.id);
      const isSelected = selectedRows.some(row => row.id === item.id);
      const hasChildren = item.sub_list && item.sub_list.length > 0;

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
                disabled={isSelected || hasChildren}
              >
                {item.id}
              </Button>
            </Table.Cell>
            <Table.Cell>{item.name}</Table.Cell>
          </Table.Row>
          {isExpanded && hasChildren && renderRows(item.sub_list || [], depth + 1)}
        </React.Fragment>
      );
    });
  };

  return (
    <Table celled striped compact>
      <Table.Header>
        <Table.Row>
          <Table.HeaderCell>ID</Table.HeaderCell>
          <Table.HeaderCell>Name</Table.HeaderCell>
        </Table.Row>
      </Table.Header>
      <Table.Body>{renderRows(data)}</Table.Body>
    </Table>
  );
};

export default TableComponent;
