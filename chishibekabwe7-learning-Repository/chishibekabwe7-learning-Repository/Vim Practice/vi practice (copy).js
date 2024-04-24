import './App.css';
import { useState } from 'react';

function App() {
    const [todoList,setTodoList] =([]);
    const [newTask,setNewTask] = ("");

    //search feature function
    const searchfeature = (event) => {
        setNewTask(event.target.value)
    }

    //add Task function
    const addTask = () => {
    const task ={
        id: todoList.length === 0 ? 1 : todoList[todoList.length -1]. id + 1,
        taskName:newTask,
    } 
    setTodoList([...todoList,task]);
    setNewTask("");
    }
    
    //delete task function
    const deleteTask = (id) => {
        const newTodoList =todoList.filter((task) =>{
            return task.id !== id;
        })
        setTodoList(newTodoList);
    }


    return(
        <div className="App">
            {/*Input bar*/}
            <input onChange={searchfeature} />

            {/*addTask button*/}
            <button onClick={addTask}>Add task</button>

            {/*second div */}
            <div className='App'>
              {todoList.map((task) =>(
                <div key={task.id}>
                    <h1>{task.taskName}</h1>
                </div>
              ))}
            </div>

            {/*delete button */}
            <button onClick={() => deleteTask(task.id)}>delete task</button>
        </div>


    );
}
export default App;