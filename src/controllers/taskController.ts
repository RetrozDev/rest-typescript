import models from "../models/modelProvider";
import type { Request, Response } from "express";

const browse = async (req: Request, res: Response) => {
	try {
		const tasks = await models.taskModel.getAll();
		res.status(200).json(tasks);
	} catch (error: unknown) {
		console.error("Error fetching tasks:", error);
		res.status(500).json({
			message: "Internal server error",
			error: error instanceof Error ? error.message : String(error),
		});
	}
};

const read = async (req: Request, res: Response) => {
	const { id } = req.params; // Extracting id from request parameters
	try {
		const task = await models.taskModel.getById(id);
		if (!task) {
			return res.status(404).json({ message: "Task not found" });
		}
		res.status(200).json(task);
	} catch (error: unknown) {
		console.error("Error fetching task:", error);
		res.status(500).json({
			message: "Internal server error",
			error: error instanceof Error ? error.message : String(error),
		});
	}
};

const edit = async (req: Request, res: Response) => {
	const { id } = req.params; // Extracting id from request parameters
	const { title, description } = req.body; // Extracting title and description from request body
	try {
		const task = await models.taskModel.getById(id);
		if (!task) {
			return res.status(404).json({ message: "Task not found" });
		}
		const updatedTask = await models.taskModel.updateTask(id, {
			title,
			description,
		});
		res.status(200).json(updatedTask);
	} catch (error: unknown) {
		console.error("Error updating task:", error);
		res.status(500).json({
			message: "Internal server error",
			error: error instanceof Error ? error.message : String(error),
		});
	}
};

const add = async (req: Request, res: Response) => {
	const { title, description } = req.body; // Extracting title and description from request body
	try {
		const newTask = await models.taskModel.addTask({ title, description });
		res.status(201).json(newTask);
	} catch (error: unknown) {
		console.error("Error adding task:", error);
		res.status(500).json({
			message: "Internal server error",
			error: error instanceof Error ? error.message : String(error),
		});
	}
};

const deleteTask = async (req: Request, res: Response) => {
    const { id } = req.params; // Extracting id from request parameters
    try {
        const task = await models.taskModel.getById(id);
        if (!task) {
            res.status(404).json({ message: "Task not found" });
        }
        await models.taskModel.deleteTask(id);
        res.status(204).send(); // No content to send back
    } catch (error: unknown) {
        console.error("Error deleting task:", error);
        res.status(500).json({
            message: "Internal server error",
            error: error instanceof Error ? error.message : String(error),
        });
    }
};

export const taskController = {
	browse, // Get all tasks 
	read, // Get a task by ID
    edit, // Edit a task by ID
	add, // Add a new task
    deleteTask, // Delete a task by ID
};
