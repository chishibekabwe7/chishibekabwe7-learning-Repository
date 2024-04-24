import './App.css';
import {Planets} from './Planets';
//import {User} from './User';

function App() {
  /*
const users = [
  {name:"Pedro",age:21},
  {name:"Jake",age:25},
  {name:"Jessica",age:45},
]
  return (
    <div className="App">
      {users.map((user,key) => {
          return <User name={user.name} age={user.age}/>;
        })}
    </div>
    ); */

const planets = [
  { name: "Mars", isGasPlanet: false},
  { name: "Earth", isGasPlanet: false},
  { name: "Jupiter", isGasPlanet: true},
  { name: "Venus", isGasPlanet: false},
  { name: "Neptune", isGasPlanet: true},
  { name: "Uranus", isGasPlanet: true},
]
    return (
    <div className="App">
    {planets.map((value ,key) => {
      if (value.isGasPlanet)
      return <Planets name={value.name} /> 
    })}
    </div>
    );
  }


export default App;

