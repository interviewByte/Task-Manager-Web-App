import React, { useState } from 'react';
import axios from 'axios';

const TaskForm = ({ setTasks }) => {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post('http://localhost:5000/api/tasks', { name, description }, {
        headers: {
          'x-auth-token': localStorage.getItem('token'),
        },
      });
      setTasks((prevTasks) => [...prevTasks, res.data]);
      setName('');
      setDescription('');
      console.log("res.data",res.data)
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className="container pb-4">
    <h2 className="text-center mb-4">Add New Task</h2>
    <form onSubmit={handleSubmit} className="p-4 border rounded bg-light shadow">
      <div className="mb-3">
        <label htmlFor="taskName" className="form-label">Task Name</label>
        <input
          type="text"
          id="taskName"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Enter task name"
          className="form-control"
          required
        />
      </div>
      <div className="mb-3">
        <label htmlFor="taskDescription" className="form-label">Task Description</label>
        <input
          type="text"
          id="taskDescription"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          placeholder="Enter task description"
          className="form-control"
          required
        />
      </div>
      <button type="submit" className="btn mb-2 btn-primary w-100">Add Task</button>
    </form>
  </div>
  
  );
};

export default TaskForm;
