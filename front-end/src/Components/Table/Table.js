import React from 'react';
import ReactTable from 'react-table';
import PropTypes from 'prop-types';

import './Table.css';

const numberOfDisplayedRows = 100


class Table extends React.Component{

	static PropTypes = {
		selectedColumns: PropTypes.string,
	}


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

	renderTable(selectedColumn, data) {
		return(
			<div>
				<ReactTable
					data={data}
					columns={this.createTableColumns(selectedColumn)}

					showPagination={false}
					pageSize = {data.length > numberOfDisplayedRows ? numberOfDisplayedRows : data.length}
					className = "-striped -highlight"
				/>
				<div style={{fontStyle:"italic", padding:"5%"}}> 
					{data.length < numberOfDisplayedRows
						? null
						: data.slice(numberOfDisplayedRows - data.length).length + " rows omitted"
				}
				</div>
		</div>
		)
	}

	render() {
		const {selectedColumn = "", data = []} = this.props;

		return(
			<div style = {{width:"50%"}}>
				{data.length > 0 
					? this.renderTable(selectedColumn, data)
					: <div style={{fontStyle:"italic", margin:"5%", display:"flex", justifyContent:"center"}}> 
							Please select a column
					</div>
				}
			</div>
		)
	}
}


export default Table;