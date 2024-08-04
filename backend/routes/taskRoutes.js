const express = require('express');
const router = express.Router();
const { createTask, updateTask, deleteTask, getTasks } = require('../controllers/taskController');
const auth = require('../middleware/auth');

// Create Task
router.post('/', auth, createTask);

// Update Task
router.put('/:id', auth, updateTask);

// Delete Task
router.delete('/:id', auth, deleteTask);

// Get Tasks
router.get('/', auth, getTasks);

module.exports = router;
