const Task = require('../models/Task');
const { search } = require('../routes/userRoutes');

// Create Task
exports.createTask = async (req, res) => {
  const { name, status } = req.body;

  try {
    const newTask = new Task({
      name,
      status,
      user: req.user.id,
    });

    const task = await newTask.save();
    res.json(task);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
};

// Update Task
exports.updateTask = async (req, res) => {
  const { status } = req.body;

  try {
    // Find the task by ID
    let task = await Task.findById(req.params.id);
    if (!task) return res.status(404).json({ msg: 'Task not found' });

    // Check if user owns the task
    if (task.user.toString() !== req.user.id) {
      return res.status(401).json({ msg: 'User not authorized' });
    }

    task = await Task.findByIdAndUpdate(req.params.id, { $set: { status } }, { new: true });
    res.json(task);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
};

// Delete Task
exports.deleteTask = async (req, res) => {
  try {
    let task = await Task.findById(req.params.id);
    if (!task) return res.status(404).json({ msg: 'Task not found' });

    // Check if user owns the task
    if (task.user.toString() !== req.user.id) {
      return res.status(401).json({ msg: 'User not authorized' });
    }

    await Task.findByIdAndDelete(req.params.id);
    res.json({ msg: 'Task removed' });
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
};

// Get Tasks
exports.getTasks = async (req, res) => {
  const {status, search} = req.query;
  try {
    const query = {user: req.user.id };
    if(status) {
      query.status = status;
    }

    if (search) {
      query.name = {$regex: search, $options: 'i'} //case insensitive search
    }
    // const tasks = await Task.find({ user: req.user.id }).sort({ date: -1 });
    const tasks = await Task.find(query).sort({createdAt: -1}); //Sort tasks by creation data
    res.json(tasks);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
};
