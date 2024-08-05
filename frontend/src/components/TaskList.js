import React from 'react';
import axios from 'axios';

const TaskList = ({ tasks, setTasks }) => {

  const handleDelete = async (id) => {
    try {
      await axios.delete(`https://task-manager-web-app-gules.vercel.app/api/tasks/${id}`, {
        headers: {
          'x-auth-token': localStorage.getItem('token'),
        },
      });
      setTasks(tasks.filter((task) => task._id !== id));
    } catch (err) {
      console.error(err);
    }
  };

  const handleComplete = async (id) => {
    try {
      const res = await axios.put(`https://task-manager-web-app-gules.vercel.app/api/tasks/${id}`, { status: 'completed' }, {
        headers: {
          'x-auth-token': localStorage.getItem('token'),
        },
      });
      setTasks(tasks.map((task) => (task._id === id ? res.data : task)));
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <>
     <div className="container">
      <h2 className="text-center mb-4">Your Tasks</h2>
      <ul className="list-group">
        {tasks.map((task) => (
          <li key={task._id} className="list-group-item d-flex justify-content-between align-items-center">
            <span style={{ textDecoration: task.status === 'completed' ? 'line-through' : 'none' }}>
              {task.name}
            </span>
            <div>
              <button
                className={`btn btn-sm ${task.status === 'completed' ? 'btn-secondary' : 'btn-success'} me-2`}
                onClick={() => handleComplete(task._id)}
                disabled={task.status === 'completed'}
              >
                {task.status === 'completed' ? 'Completed' : 'Complete'}
              </button>
              <button
                className="btn btn-danger btn-sm"
                onClick={() => handleDelete(task._id)}
              >
                Delete
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
    </>
   
  );
};

export default TaskList;
