import express from 'express';
import { authMiddleware } from '../middleware/authMiddleware.js';
import { listTasks, createTask, updateTask, deleteTask, dashboardStats } from '../controllers/taskController.js';
import Task from '../models/Task.js';

const router = express.Router();

// Apply auth middleware to all routes
router.use(authMiddleware);

// Task CRUD routes
router.get('/', listTasks);
router.post('/', createTask);
router.put('/:id', updateTask);
router.delete('/:id', deleteTask);
router.get('/stats/dashboard', dashboardStats);

// Subjects autocomplete
router.get('/meta/subjects', async (req, res) => {
  try {
    const subjects = await Task.distinct('subject', { 
      user: req.user.id, 
      subject: { $ne: null, $ne: '' } 
    });
    res.json({ subjects });
  } catch (e) {
    console.error(e);
    res.status(500).json({ message: 'Failed to load subjects' });
  }
});

export default router;
