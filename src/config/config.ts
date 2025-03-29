import { config } from "dotenv";
config();

import type { ConnectionOptions } from "mysql2";

type ServerConfig = {
	port: number;
};

export const serverConfig: ServerConfig = {
	port: Number(process.env.SERVER_PORT) || 3000,
};

export const databaseConfig: ConnectionOptions = {
	host: process.env.DB_HOST || "localhost",
	user: process.env.DB_USER || "root",
	password: process.env.DB_PASSWORD || undefined,
	database: process.env.DB_NAME || "test",
	port: Number(process.env.DB_PORT) || 3306,
};
