import './App.css';
import { useState } from 'react';

function App() {

return ( 
<div className='App'>
  <User2 Name="Chishibe" Age={19} email="chishibekabwe7@gmail.com" />
  <User2 Name="Jake" Age={20} email="Jake23@gmail.com" />
  <User2 Name="Jessica" Age={22} email="Jessica325@gmail.com" />
  <Job2 Company="Amazon" Position="Software Developer" Salary="90000" />
  <Job2 Company="Google" Position="System Cordinator" Salary="70000" />
  <Job2 Company="Netflix" Position="Database Administrator" Salary="60000" />
</div>
);

}

const Job2 = (props) => {
  return(
    <div>
      <h1>{props.Company}</h1>
      <h1>{props.Position}</h1>
      <h1>{props.Salary}</h1>
    </div>
  )
}

const User2 = (props) => {
return (
  <div>
    <h1>{props.Name}</h1>
    <h1>{props.Age}</h1>
    <h1>{props.email}</h1>
  </div>
)
}

export default App;
