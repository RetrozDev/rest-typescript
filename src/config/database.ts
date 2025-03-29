import { databaseConfig } from "./config";
import mysql from "mysql2";

const connection = mysql.createConnection(databaseConfig);

connection.connect((err) => {
	if (err) {
		console.error("Error connecting to the database: ", err);
	} else {
		console.log(
			`Connected to the database ${databaseConfig.database} successfully.`,
		);
	}
});

export default connection;
