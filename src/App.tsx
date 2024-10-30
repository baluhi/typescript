import React from 'react';
import './App.css';
import TableComponent from './components/Table/TableLayout';
import { sampleData } from './tableData';
import 'semantic-ui-css/semantic.min.css'
import BoxModel from './components/BoxModel/BoxModel';

// import { tableData } from './tableData';
// import NestedTable from './components/Table/NestedTable';
// import ModalComponent from './components/ModalComponent/ModalComponent';


function App() {
  return (
    <div>
{/* <ModalComponent/> */}
{/* <TableComponent data={sampleData}/> */}
<BoxModel data={sampleData}/>


    </div>
  );
}

export default App;
