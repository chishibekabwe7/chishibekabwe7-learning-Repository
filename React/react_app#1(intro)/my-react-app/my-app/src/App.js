import './App.css';
import { useState } from 'react';

function App (){
       const [inputValue, setInputValue] = useState("")

       const handleinputChange = (event) => {
        setInputValue(event.target.value);
       };


    return <div className="App">
         <input type="text" onChange={handleinputChange} /><br />
         {inputValue}
        </div>
    };

export default App;