import './App.css';

function App (){
  return (  <div className="App">
      <Job salary={9000} position='Senior SDE' company='Amazon' />
      <Job salary={12000} position='Junior SDE' company='Google' />
      <Job salary={10000} position='Project Manager' company='Netflix' />
    </div>
  );
}

const Job = (props) => {
return(
  <div>
  <h1>Name of company:{props.company}</h1>
  <br/>
  <h1>Position :{props.position}</h1>
  <br/>
  <h1>Salary of Employee :{props.salary}</h1>
  <br/>
  </div>
);
}

export default App;