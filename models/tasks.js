import db from '../dbconnections';

const Task = {
  connect(callback) {
    return db.query(
      `SELECT *
			FROM census_learn_sql limit 10
			`, callback,
    );
  },

  getColumns(callback) {
    return db.query(
      `SHOW columns 
			FROM census_learn_sql
			`, callback,
    );
  },

  getColumnAttributes(callback, selectedColumn) {
    const columnRequested = selectedColumn.replace(/_/g, ' ');
    return db.query(
      `SELECT 
				\`${columnRequested}\`,
				COUNT(\`${columnRequested}\`) AS count,
				AVG(age) as averageAge
			FROM census_learn_sql
			GROUP BY \`${columnRequested}\`
			ORDER BY COUNT(\`${columnRequested}\`) DESC
			`, callback,
    );
  },


};


export default Task;
