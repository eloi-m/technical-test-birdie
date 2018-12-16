import db from '../dbconnections';

const Task={
	connect:function(callback){
		return db.query(
			`SELECT *
			FROM census_learn_sql limit 10
			`,callback);
		},

	getColumns:function(callback){
		return db.query(
			`SHOW columns 
			FROM census_learn_sql
			`, callback);
	},

	getColumnAttributes:function(callback, selectedColumn){
		const ColumnRequested = selectedColumn.replace(/_/g, " ")
		console.log(ColumnRequested)
		return db.query(
			`SELECT 
				${ColumnRequested},
				COUNT(${ColumnRequested}) AS count,
				AVG(age) as averageAge
			FROM census_learn_sql
			GROUP BY ${ColumnRequested}
			ORDER BY COUNT(${ColumnRequested}) DESC
			`,
			callback);
	},

	
};


export default Task;