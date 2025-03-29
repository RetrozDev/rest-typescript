import express from "express";
import { serverConfig } from "./config/config";
import { router } from "./routes/router";
import type { Application } from "express";

const app: Application = express();
const port = serverConfig.port;

app
	.listen(port, () => {
		console.log(`Server is running on http://localhost:${port}`);
	})
	.on("error", (err) => {
		console.error("Error starting server:", err);
	});

app.get("/", (req, res) => {
	res.send("Hello, World!");
});

app.use(express.json()); // Middleware to parse JSON request bodies
app.use(express.urlencoded({ extended: true })); // Middleware to parse URL-encoded request bodies
app.use("/api", router);


