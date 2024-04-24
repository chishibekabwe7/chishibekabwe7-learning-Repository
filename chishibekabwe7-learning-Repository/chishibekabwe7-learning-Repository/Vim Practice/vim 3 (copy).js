import { useState } from 'react';
import './App.css';

function App() {
  
  const [todoList, setTodoList] = useState([]);
  const [newTask,setNewTask] = useState("");

  {/*Search effect function*/}
  const searchEffect = (event) => {
    setNewTask(event.target.value)
  }
  
  {/*AddTask logic*/}
  const addTasks = () =>{
    const task = {
      id: todoList.length === 0 ? 1 : todoList[todoList.length -1] .id +1,
      taskName:newTask
    }
  }
   {/*delete task*/}
   const deleteTask = (taskName) => {
    const newtodolist2 = 
      todoList.filter((task) => {
        if(task === taskName){
          return false;
        }
        else{
          return true;
        }

      })
    
   }



return(
  <div className='App'>
    {/*input bar with search effect */}
     <input onChange={searchEffect}/>

    {/*Adding list items to the array*/}
     <button onClick={addTasks}>Add</button>

    {/*Outputing the search effect */}
     <br/>{newTask}


    {/*first Div */}
      <div className='list'>
        {/*Displaying the list item with an array*/}

        { todoList.map((tasks)=>{
          return <div>
            <h1>{tasks}</h1>
          </div>

          {/*delete button */}
          <button onClick={deleteTask}>x</button>
        })}
      </div>




  </div>
)
}

export default App;