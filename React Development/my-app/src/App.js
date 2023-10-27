import './App.css';
import { useState } from 'react';

function App (){
  const [todoList, setTodoList] = useState([]);
  const [newTask, setNewTask] = useState("");
  
  {/*OnChange Function */}
  const handleChange = (event) =>{
    setNewTask(event.target.value);
  }

  {/*Add Task Function */}
  const addTask = () => {
    setTodoList([...todoList ,newTask]);
  }

  {/*Delete Task Function */}
  const deleteTask = (taskName) => {
   const newTodoList = todoList.filter((task) =>{
    if (task === taskName){
      return false;
    }
    else{
      return true;
    }
   }); 
   setTodoList(newTodoList);
};

  return (  
<div className="App">

  {/*Div 1*/}
   <div className='addTask'>
    <input onChange={handleChange}/> 
      <button onClick={addTask}> Add Task </button>
   </div> 
    {newTask}


  {/*Div 2*/}
   <div className='list'>
   {todoList.map((task =>{
    return <div>
      <h1>{task}</h1>
      <button onClick={deleteTask}>X</button>
      </div>
              
   }))} 
    </div> 


</div>

  );
}



export default App;