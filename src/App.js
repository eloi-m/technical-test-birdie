import React from 'react';

import Header from './Components/Header';
import Table from './Components/Table/Table'
import ColumnSelector from './Components/ColumnSelector'

const TABLE_STYLE = {
  marginTop:"2%",
  marginBottom:"5%",
  display:"flex",
  justifyContent:"center",
};


const BODY_STYLE = {
  marginTop:"50px"
};


const COLUMN_SELECTOR_TYPE = {
  display: "flex",
  justifyContent:"center",
  alignItems:"center",
  padding:"2%"
}


// eslint-disable-next-line react/prefer-stateless-function
class App extends React.Component {
  render() {
    return (
      <div> 
        <Header />
        <div style={BODY_STYLE}> 
          <div style={COLUMN_SELECTOR_TYPE}>   
            <ColumnSelector/>
          </div>
          <div style={TABLE_STYLE}>
            <Table/>
          </div>
      </div>
      </div>
    );
  }
}

export default App;
