import "./App.css";
import { useEffect, useState } from "react";

function App() {

 const [catFact,setCatFact] = useState("");

 useEffect(() => {
   fetch("https:/catfact.ninja/fact?max_length=140").then((res) => res.json()).then((data) => {
    setCatFact(data.fact)
   })
 },[])
   

    return (
        <div className="App">
            <button>Generate Cat Fact</button>
           <p>{catFact}</p>
        </div>
    )
}

export default App;