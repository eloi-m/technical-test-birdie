import React from 'react';
import ReactTable from 'react-table';
import Loader from "react-loader";

import './Table.css';

const numberofRowsToSee = 3


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
		console.log(data)
		return(
			<div> 
				<ReactTable
					data={data}
					columns={this.createTableColumns(selectedColumn)}

					showPagination={false}
					defaultPageSize = {data.length === 0 ? 3 : data.length}
					className = "-striped -highlight"
				/>
				<div style={{fontStyle:"italic", padding:"5%"}}> 
					{data.length < numberofRowsToSee 
						? null
						: data.slice(numberofRowsToSee - data.length).length + " rows omitted"
					}
				</div>
			</div>
			)
	}
}


export default Table;