import './App.css';
import { useState } from 'react';


function App() {

const [blogs,setBlogs] = useState([
	{
		color: "blue",
		value: "#00f",
        id:1
	},
	{
		color: "cyan",
		value: "#0ff",
        id:2
	},
	{
		color: "magenta",
		value: "#f0f",
        id:3
	},
	{
		color: "yellow",
		value: "#ff0",
        id:4
	},
	{
		color: "black",
		value: "#000",
        id:5
	}
]);

  return (
      <div className='App'>
        {blogs.map((blog) =>(
        <div className='blog-preview' key={blog.id}>
            <h2>{ blog.color }</h2>
            <h4>{ blog.value }</h4>
        </div> 
        ))}
      </div>
 )
}


export default App;

