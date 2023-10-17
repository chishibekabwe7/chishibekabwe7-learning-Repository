import './App.css';

function App (){
  const planets = [ 
    {name: "Mars", isGasPlanet: false},
    {name: "Earth", isGasPlanet: false},
    {name: "Jupiter", isGasPlanet: true},
    {name: "Venus", isGasPlanet: false},
    {name: "Neptune", isGasPlanet: true},
    {name: "Uranus", isGasPlanet: true},
  ];

  return (  <div className="App">
    
      {planets.map((value, key) =>{ ()
        return <h1 key={key}> {value.name} </h1>
      })} 
    </div>
  );
}



export default App;