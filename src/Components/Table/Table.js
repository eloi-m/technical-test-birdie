import React from 'react';
import ReactTable from 'react-table';

import './Table.css';


import data from '../../data.json'


const columns = [
	{
		Header:'Age',
		accessor:'name'
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
    return(
			<ReactTable
				data={data}
				columns={columns}
				/>
		)
  }
}


export default Table;