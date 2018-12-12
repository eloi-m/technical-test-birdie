import React from 'react';
import ReactTable from 'react-table';

import './Table.css';

import data2 from '../../data.json'






class Table extends React.Component{

	createTableColumns(selectedColumn) {
		const tableColumns = [
			{
				Header: selectedColumn,
				accessor: selectedColumn
			},
			{
				Header: 'count',
				accessor: 'count',
			},
			{
				Header: 'averageAge',
				accessor: 'averageAge'
			}
		]
		return tableColumns
	}

	render() {
	const {selectedColumn, data} = this.props;

    return(
			<ReactTable
				data={data}
				columns={this.createTableColumns(selectedColumn)}
				/>
		)
	}
}


export default Table;