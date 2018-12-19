import React from 'react';
import { connect } from "react-redux";
import { loadSelectedColumn, loadData, loadColumns, } from './ducks/data';

import Header from './Components/Header';
import Table from './Components/Table/Table'
import ColumnSelector from './Components/ColumnSelector'

import config from '../config'

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




const mapStateToProps = state => {
  return {
    selectedColumn: state.selectedColumn,
    data: state.data,
    columns: state.columns
  };
};


const mapDispatchToProps = (dispatch) => {
	return {
    loadSelectedColumn: (selectedColumn) => dispatch(loadSelectedColumn(selectedColumn)),
    loadData: (selectedColumn) => dispatch(loadData(selectedColumn)),
    loadColumns: () => dispatch(loadColumns()),
	}
};



// eslint-disable-next-line react/prefer-stateless-function
class App extends React.Component {
  
  componentWillMount() {
    this.props.loadColumns()
  }

  render() {
    const { data = [], columns = [], selectedColumn = "" } = this.props


    return (
      <div> 
        <Header />
        <div style={BODY_STYLE}> 
          <div style={COLUMN_SELECTOR_TYPE}>   
            <ColumnSelector
              columns = {columns.map((e) => e.Field)}
              onChange={
                (newSelection) => 
                {this.props.loadData(newSelection)
                this.props.loadSelectedColumn(newSelection)}}
              config = {config}
            />
          </div>
          <div style={TABLE_STYLE}>
            <Table
              data = {data}
              selectedColumn = {selectedColumn}
              config = {config}
              />
          </div>
      </div>
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
