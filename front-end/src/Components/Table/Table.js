import React from 'react';
import ReactTable from 'react-table';

import './Table.css';


class Table extends React.Component{

	createTableColumns(selectedColumn) {
		const tableColumns = [
			{
				Header: selectedColumn.replace(/^\w/, c => c.toUpperCase()),
				accessor: selectedColumn
			},
			{
				Header: 'Count',
				accessor: 'count',
			},
			{
				Header: 'Average age',
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