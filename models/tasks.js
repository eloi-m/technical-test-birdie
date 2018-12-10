import db from '../dbconnections';

var Task={
	connect:function(callback){
	
    return db.query("Select * from census_learn_sql limit 10",callback);
    },
};


export default Task;