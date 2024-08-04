import React, { useEffect, useState } from 'react';
import axios from 'axios';
import TaskForm from '../components/TaskForm';
import TaskList from '../components/TaskList';

const Dashboard = () => {
  const [tasks, setTasks] = useState([]);
  const [statusFilter, setStatusFilter] = useState('');
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    const fetchTasks = async () => {
      try {
        const res = await axios.get('http://localhost:5000/api/tasks', {
          headers: {
            'x-auth-token': localStorage.getItem('token'),
          },
          params: {
            status: statusFilter,
            search: searchQuery
          }
        });
        setTasks(res.data);
      } catch (err) {
        console.error("Error pavan singh",err);
      }
    };

    fetchTasks();
  }, [statusFilter, searchQuery]);

  return (
    <div className='container-fluid p-4'>
      <div className='row'>
        <div className='col-md-6 py-3 d-flex flex-column justify-content-center align-items-center bg-light border rounded'>
        <h1 className='text-center mb-4'>Welcome to the Dashboard</h1>
        <TaskForm setTasks={setTasks} />
        </div>
        <div className='col-md-6  bg-light border rounded'>
        <div className="d-flex flex-column mb-3 pt-4">
            <input
              type="text"
              className="form-control mb-2"
              placeholder="Search tasks..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            <select
              className="form-select mb-3"
              value={statusFilter}
              onChange={(e) => setStatusFilter(e.target.value)}
            >
              <option value="">All Status</option>
              <option value="completed">Completed</option>
              <option value="pending">Pending</option>
            </select>
          </div>
        <TaskList tasks={tasks} setTasks={setTasks} />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
