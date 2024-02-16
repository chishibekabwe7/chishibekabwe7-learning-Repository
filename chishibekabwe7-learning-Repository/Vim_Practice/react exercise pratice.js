
import './App.css';
import { useState } from 'react';


function App() {
   const [arr,displayArr] = useState([
     {
       "firstName": "Joe",
       "lastName": "Jackson",
       "gender": "male",
       "age": 28,
       "number": 7349282382
    },
    {
       "firstName": "James",
       "lastName": "Smith",
       "gender": "male",
       "age": 32,
       "number": 5678568567
    },
    {
       "firstName": "Emily",
       "lastName": "Jones",
       "gender": "female",
       "age": 24,
       "number": 456754675
    }
   ])


    return (
    <div className="App">
        {arr.map((people) =>(
            <div className='blog-preview' key={people.number}>
              <h1>firstName:{people.firstName}</h1>
              <h1>lastName:{people.lastName}</h1>
              <h1>gender:{people.gender}</h1>
              <h1>age:{people.age}</h1>
            </div>
            ))} 
    </div>
    );
  }


export default App;
