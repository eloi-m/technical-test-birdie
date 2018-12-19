import React from 'react';
import ReactTable from 'react-table';
import PropTypes from 'prop-types';
import Loader from 'react-loader';

import './Table.css';


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

	renderTable(selectedColumn, data, config) {
		const numberOfDisplayedRows = config.numberOfDisplayedRows
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
						: data.length - numberOfDisplayedRows + " rows omitted"
				}
				</div>
		</div>
		)
	}

	render() {
		const {selectedColumn = "", data = [], loaded} = this.props;

		const  {config} = this.props;

		return(
			<div style = {{width:"50%"}}>
				<Loader loaded={loaded}>
					{data.length > 0 
						? this.renderTable(selectedColumn, data, config)
						: <div style={{fontStyle:"italic", margin:"5%", display:"flex", justifyContent:"center"}}> 
								{config.invitationToSelectColumn}
						</div>
				}
				</Loader>
			</div>
		)
	}
}


export default Table;