import React, { useState } from 'react';
import { Icon, Table } from 'semantic-ui-react';

interface Node {
  id: string;
  name: string;
  sub_list?: Node[];
}

const data: Node[] = [
  {
    id: '1',
    name: 'Item 1',
    sub_list: [
      {
        id: '1-1',
        name: 'Sub Item 1-1',
        sub_list: [
          { id: '1-1-1', name: 'Sub Item 1-1-1' },
          { id: '1-1-2', name: 'Sub Item 1-1-2' },
        ],
      },
      {
        id: '1-2',
        name: 'Sub Item 1-2',
        sub_list: [
          { id: '1-2-1', name: 'Sub Item 1-2-1' },
          { id: '1-2-2', name: 'Sub Item 1-2-2' },
        ],
      },
    ],
  },

  {
    id: '2',
    name: 'Item 2',
    sub_list: [
      {
        id: '2-1',
        name: 'Sub Item 2-1',
        sub_list: [
          { id: '2-1-1', name: 'Sub Item 2-1-1' },
          { id: '2-1-2', name: 'Sub Item 2-1-2' },
        ],
      },
      {
        id: '2-2',
        name: 'Sub Item 2-2',
        sub_list: [
          { id: '2-2-1', name: 'Sub Item 2-2-1' },
          { id: '2-2-2', name: 'Sub Item 2-2-2' },
        ],
      },
    ],
  },
  {
    id: '3',
    name: 'Item 3',
    sub_list: [
      {
        id: '3-1',
        name: 'Sub Item 3-1',
        sub_list: [
          { id: '3-1-1', name: 'Sub Item 3-1-1' },
          { id: '3-1-2', name: 'Sub Item 3-1-2' },
        ],
      },
      {
        id: '3-2',
        name: 'Sub Item 3-2',
        sub_list: [
          { id: '3-2-1', name: 'Sub Item 3-2-1' },
          { id: '3-2-2', name: 'Sub Item 3-2-2' },
        ],
      },
    ],
  },
];

const NestedTable: React.FC = () => {
  const [expandedRows, setExpandedRows] = useState<{ [key: string]: boolean }>({});

  const toggleRow = (id: string) => {
    setExpandedRows((prevState) => ({
      ...prevState,
      [id]: !prevState[id],
    }));
  };

  const renderRows = (nodes: Node[], level = 0): React.ReactNode => {
    return nodes.map((node) => (
      <React.Fragment key={node.id}>
        {/* Table Row for the current node */}
        <Table.Row onClick={() => node.sub_list && toggleRow(node.id)} style={{ paddingLeft: `${level * 15}px` }}>
          <Table.Cell>
            {node.sub_list && (
              <Icon name={expandedRows[node.id] ? 'caret down' : 'caret right'} />
            )}
            {node.id}
          </Table.Cell>
          <Table.Cell>{node.name}</Table.Cell>
        </Table.Row>

        {/* Render sub-list if it exists and is expanded */}
        {expandedRows[node.id] && node.sub_list && (
          <Table.Row>
            <Table.Cell colSpan="2" style={{ padding: 0 }}>
              <Table celled compact="very" style={{ width: '100%' }}>
                <Table.Body>{renderRows(node.sub_list, level + 1)}</Table.Body>
              </Table>
            </Table.Cell>
          </Table.Row>
        )}
      </React.Fragment>
    ));
  };

  return (
    <Table celled compact="very" style={{ width: '100%' }}>
      <Table.Header>
        <Table.Row>
          <Table.HeaderCell>Node Code</Table.HeaderCell>
          <Table.HeaderCell>Node Name</Table.HeaderCell>
        </Table.Row>
      </Table.Header>
      <Table.Body>{renderRows(data)}</Table.Body>
    </Table>
  );
};

export default NestedTable;
