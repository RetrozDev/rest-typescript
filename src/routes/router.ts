import express from "express";

export const router = express.Router();

router.get("/", (req, res) => {
  res.send("Welcome to the API!");
});


import { taskController } from "../controllers/taskController";
router.get("/tasks", taskController.browse)
router.get("/tasks/:id", taskController.read)
router.put("/tasks/:id", taskController.edit)
router.post("/tasks", taskController.add)
router.delete("/tasks/:id", taskController.deleteTask)