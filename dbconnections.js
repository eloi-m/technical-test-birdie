import { createConnection } from 'mysql';

var connection = createConnection({
	host: 'birdie-test.cyosireearno.eu-west-2.rds.amazonaws.com',
	port : "3306",
	user: 'test-read',
	password: 'xnxPp6QfZbCYkY8',
	database: 'birdietest'
});
  

export default connection;
