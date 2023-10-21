import './App.css';
import { useState } from 'react';

function App (){
  const [count , setCount] = useState(0);

  const IncreaseBy1 = () => {
    setCount(count + 1);
  };
  const DecreaseBy1 = () => {
    setCount(count - 1);
  };
  const Reset = () => {
     setCount(0)
  };


  return (  
  <div className="App">
   <button onClick={DecreaseBy1}>Decrease</button><br/>
   <button onClick={IncreaseBy1} style={{marginTop : "10px"}}>Increase</button><br/>
   <button onClick={Reset} style={{marginTop : "10px"}}>Set to Zero</button><br/><br/>
   {count}
  </div>
  );
}



export default App;