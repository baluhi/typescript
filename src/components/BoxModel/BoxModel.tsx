import React, { useState } from 'react';
import { Button, Modal, Grid } from 'semantic-ui-react';
import TableComponent from '../Layout/Layout';
import SelectedRowsTable from '../SelectedRowsTable/SelectedRowsTable';
import { DataItem } from '../../tableData';

interface BoxModelProps {
  data: DataItem[];
}

const BoxModel: React.FC<BoxModelProps> = ({ data }) => {
  const [selectedRows, setSelectedRows] = useState<DataItem[]>([]);
  const [isModalOpen, setIsModalOpen] = useState(false); // State to manage modal visibility

  const addRowToSelected = (item: DataItem) => {
    if (!selectedRows.some((row) => row.id === item.id)) {
      setSelectedRows((prev) => [...prev, item]);
    }
  };

  const removeRow = (id: number | string) => {
    setSelectedRows((prev) => prev.filter((item) => item.id !== id));
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
                <TableComponent 
                selectedRows={selectedRows}
                  data={data} 
                  addRowToSelected={addRowToSelected} 
                />
              </Grid.Column>

              <Grid.Column>
                <h3>Selected Rows</h3>
                <SelectedRowsTable 
                  selectedRows={selectedRows} 
                  removeRow={removeRow} 
                />
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

export default BoxModel;
