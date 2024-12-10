import { Router } from 'express';
import { createTask, getTasks, updateTasksStatus } from '../controllers/taskController';

const router = Router();

router.get("/", getTasks);
router.post("/", createTask);
router.patch("/:taskId/status", updateTasksStatus)


export default router;