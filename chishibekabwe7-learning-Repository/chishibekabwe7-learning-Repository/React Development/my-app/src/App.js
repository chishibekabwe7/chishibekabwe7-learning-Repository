import './App.css';
import { useState } from 'react';
import {Task} from './tasks/Task.js'

function App() {
  const [todoList, setTodoList] = useState([]);
  const [newTask, setNewTask] = useState("");

  // OnChange Function
  const handleChange = (event) => {
    setNewTask(event.target.value);
  };

  // Add Task Function
  const addTask = () => {
    const task = {
      id: todoList.length === 0 ? 1 : todoList[todoList.length - 1].id + 1,
      taskName: newTask,
    };
    setTodoList([...todoList, task]);
    setNewTask(""); // Clear the input field after adding a task
  };

  // Delete Task Function
  const deleteTask = (id) => {
    const newTodoList = todoList.filter((task) => {
      return task.id !== id; // Keep tasks with different IDs
    });
    setTodoList(newTodoList);
  };

  return (
    <div className="App">
      {/* Input bar & Add Task button */}
      <div className='addTask'>
        <input value={newTask} onChange={handleChange} />
        <button onClick={addTask}>Add Task</button>
      </div>

      {/* Displaying the list item with an array */}
      <div className='list'>
        {todoList.map((task) => (
         <task /> 
        ))}
      </div>
    </div>
  );
}

export default App;
