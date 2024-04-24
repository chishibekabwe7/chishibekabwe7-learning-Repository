import React, { useState } from 'react';
import './Crud.css';

 function Crud() {

  //Crud app List
  const list = [
    {
      id:1,
      Name:"HP",
      price: "2222"
    },
    {
      id:2,
      Name:"Dell",
      price:"2445"
    }
  ]
  //Crud app List ends

  //Crud app state hook
  const [lists,setList] = useState(list);
  //Crud app state hook ends


  return(
    <div className='crud'></div>
  )
  

 }

 export default Crud;