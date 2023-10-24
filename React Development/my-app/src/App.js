import './App.css';
import { useState } from 'react';

function App (){
 const [todoList,setTodoList] = useState([]);

 const [newTask,setNewTask] = useState("");
 
 const handleChange = (event) =>{
  setNewTask(event.target.value);
 }

 const addTask = () => {

 };
  return (  
  <div className="App">
    {/*div 1*/}
    <div className="addTask">
      <input onChange={handleChange} />
        <button>Add Task</button><br/>
        {newTask}
    </div>

  {/*div 2 */}
  <div className="list"></div>
  </div>
  );
}



export default App;