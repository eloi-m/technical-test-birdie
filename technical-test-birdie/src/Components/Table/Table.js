import React from 'react';
import ReactTable from 'react-table';

import './Table.css';

import data from '../../data.json'

import { connect } from "react-redux";

import { loadSelectedColumn } from '../../ducks/data';


const mapStateToProps = state => {
	return { selectedColumn: state.selectedColumn };
};


const mapDispatchToProps = (dispatch) => {
	return {
		loadSelectedColumn: (selectedColumn) => dispatch(loadSelectedColumn(selectedColumn)),
	}
};



const columns = [
	{
		Header:'Age',
		accessor:'age'
	},
	{
		Header: 'Class of Worker',
		accessor: 'class of worker',
	},
	{
		Header: 'Education',
		accessor: 'education'
	}
]


class Table extends React.Component{


	render() {
		const selectedColumn = this.props.selectedColumn;

		console.log(selectedColumn);

    return(
			<ReactTable
				data={data}
				columns={columns}
				/>
		)
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(Table);