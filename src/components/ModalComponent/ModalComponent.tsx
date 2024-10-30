// ModalComponent.tsx
import React, { useState } from "react";
import { Button, Grid, GridColumn, GridRow, Modal } from "semantic-ui-react";
import { DataItem } from "../../tableData";
import NestedTable from "../Table/NestedTable";
import TableComponent from "../Table/TableLayout";



const ModalComponent: React.FC = () => {
  const [open, setOpen] = useState(false);

  const openModal = () => setOpen(true);
  const closeModal = () => setOpen(false);

  return (
    <>
      <Button onClick={openModal} color="blue">
        Open Modal
      </Button>

      <Modal open={open} onClose={closeModal} size="small">
        <Modal.Header>Modal Title</Modal.Header>
        <Modal.Content>
          <Grid>
            <GridRow>
              <GridColumn width={10}>
             
              </GridColumn>
              <GridColumn width={6}></GridColumn>
            </GridRow>
          </Grid>
        </Modal.Content>
        <Modal.Actions>
          <Button color="grey" onClick={closeModal}>
            Close
          </Button>
          <Button
            color="green"
            onClick={() => {
              closeModal();
              alert("Confirmed!");
            }}
          >
            Confirm
          </Button>
        </Modal.Actions>
      </Modal>
    </>
  );
};

export default ModalComponent;
