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
		console.log(selectedColumn.replace(/_/g," "))

		return db.query(
			`SELECT 
				${selectedColumn},
				COUNT(${selectedColumn}) AS count,
				AVG(age) as averageAge
			FROM census_learn_sql
			GROUP BY ${selectedColumn}
			ORDER BY COUNT(${selectedColumn}) DESC
			`,
			callback);
	},

	
};


export default Task;