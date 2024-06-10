import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const HomePage = () => {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState("");
  const [editingTask, setEditingTask] = useState(null);
  const [showInput, setShowInput] = useState(false);
  const navigate = useNavigate();

  const addTask = () => {
    if (newTask.trim()) {
      setTasks([...tasks, newTask]);
      setNewTask("");
      setShowInput(false);
    }
  };

  const deleteTask = (index) => {
    setTasks(tasks.filter((_, i) => i !== index));
  };

  const editTask = (index) => {
    setEditingTask(index);
    setNewTask(tasks[index]);
    setShowInput(true);
  };

  const updateTask = () => {
    if (newTask.trim() && editingTask !== null) {
      const updatedTasks = tasks.map((task, index) =>
        index === editingTask ? newTask : task
      );
      setTasks(updatedTasks);
      setNewTask("");
      setEditingTask(null);
      setShowInput(false);
    }
  };

  return (
    <div className="flex flex-col items-center bg-gray-900 min-h-screen py-12 px-4 md:px-12">
      <h1 className="text-white text-4xl mb-8">
        TODO <span className="text-blue-500">LIST</span>
      </h1>
      <div className="w-full max-w-lg space-y-4">
        {tasks.map((task, index) => (
          <div
            key={index}
            className="bg-white p-4 rounded-lg flex justify-between items-center shadow-lg"
          >
            <div className="flex items-center">
              <span className="block check-icon bg-green-500 w-6 h-6 rounded-full mr-4"></span>
              <div>
                <p className="font-bold text-lg">{task}</p>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <button
                onClick={() => editTask(index)}
                className="bg-blue-500 text-white px-4 py-2 rounded-md"
              >
                Edit
              </button>
              <button
                onClick={() => deleteTask(index)}
                className="bg-red-500 text-white px-4 py-2 rounded-md"
              >
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>
      <button
        onClick={() => setShowInput(true)}
        className="mt-8 bg-blue-500 text-white px-6 py-2 rounded-full"
      >
        Add Todo
      </button>
      {showInput && (
        <div className="fixed inset-0 bg-gray-900 bg-opacity-50 flex items-center justify-center z-10">
          <div className="bg-white p-4 rounded-lg w-11/12 md:w-1/3">
            <input
              type="text"
              className="border border-gray-300 p-2 rounded w-full mb-4"
              value={newTask}
              onChange={(e) => setNewTask(e.target.value)}
            />
            {editingTask !== null ? (
              <button
                onClick={updateTask}
                className="bg-green-500 text-white p-2 rounded w-full mb-2"
              >
                Update Task
              </button>
            ) : (
              <button
                onClick={addTask}
                className="bg-blue-500 text-white p-2 rounded w-full mb-2"
              >
                Add Task
              </button>
            )}
            <button
              onClick={() => {
                setShowInput(false);
                setEditingTask(null);
                setNewTask("");
              }}
              className="text-gray-500 w-full"
            >
              Cancel
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default HomePage;
