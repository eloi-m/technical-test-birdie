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
		const columnRequested = selectedColumn.replace(/_/g, " ") 
		console.log(columnRequested)
		return db.query(
			`SELECT 
				\`${columnRequested}\`,
				COUNT(\`${columnRequested}\`) AS count,
				AVG(age) as averageAge
			FROM census_learn_sql
			GROUP BY \`${columnRequested}\`
			ORDER BY COUNT(\`${columnRequested}\`) DESC
			`,
			(error, results, fields) => {console.log(error, results, fields);
				callback(error, results, fields)});
	},

	
};


export default Task;