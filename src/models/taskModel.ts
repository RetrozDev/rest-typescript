import AbstractModel from "./abstractModel";
import type { RowDataPacket } from "mysql2";

export class TaskModel extends AbstractModel {
    constructor() {
        super({ table: "tasks" });
    }

    async getAll() {
        const query = `SELECT * FROM ${this.table}`;
        return new Promise((resolve, reject) => {
            this.database.query<RowDataPacket[]>(query, (err, results) => {
                if (err) {
                    console.error("Error fetching tasks: ", err);
                    reject(err);
                }
                resolve(results);
            });
        });
    }
    async getById(id: string) {
        const query = `SELECT * FROM ${this.table} WHERE id = ?`;
        return new Promise((resolve, reject) => {
            this.database.query<RowDataPacket[]>(query, [id], (err, results) => {
                if (err) {
                    console.error("Error fetching task: ", err);
                    reject(err);
                }
                resolve(results[0]);
            });
        });
    }

    async updateTask(id: string, task: { title: string; description: string }) {
        const query = `UPDATE ${this.table} SET title = ?, description = ? WHERE id = ?`;
        return new Promise((resolve, reject) => {
            this.database.query<RowDataPacket[]>(query, [task.title, task.description, id], (err, results) => {
                if (err) {
                    console.error("Error updating task: ", err);
                    reject(err);
                }
                resolve(results[0]);
            });
        });
    }

    async deleteTask(id: string) {
        const query = `DELETE FROM ${this.table} WHERE id = ?`;
        return new Promise((resolve, reject) => {
            this.database.query<RowDataPacket[]>(query, [id], (err, results) => {
                if (err) {
                    console.error("Error deleting task: ", err);
                    reject(err);
                }
                resolve(results[0]);
            });
        });
    }

    async addTask(task: { title: string; description: string }) {
        const query = `INSERT INTO ${this.table} (title, description) VALUES (?, ?)`;
        return new Promise((resolve, reject) => {
            this.database.query<RowDataPacket[]>(query, [task.title, task.description], (err, results) => {
                if (err) {
                    console.error("Error adding task: ", err);
                    reject(err);
                }
                resolve(results[0]);
            });
        });
    }

}
