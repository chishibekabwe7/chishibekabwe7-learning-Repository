import { useState } from 'react';
import './App.css';

function App() {
  
const [age,setage] = useState(0);

const increaseAge = () => {
setage(age + 1)
}
const decreaseAge = () => {
  setage(age - 1)
}
const resetAge = () => {
  setage(0)
}
return ( 

  <div className='App'>
      {age}
      <button onClick={increaseAge}>Add</button><br/><br/>
      <button onClick={decreaseAge}>Deduct</button><br/><br/>
      <button onClick={resetAge}>Reset</button><br/><br/>
  </div>

  ) ;

}

export default App;
