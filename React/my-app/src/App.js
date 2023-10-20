import './App.css';
import { useState } from 'react';

function App (){
const [age,setAge] = useState(0);

const increaseAge = () =>{
setAge(age + 1);
};

  return (  
  <div className="App">
    {age}<br/>
    <button onClick={increaseAge}>Increase age</button><br/>
  </div>
  );
}



export default App;