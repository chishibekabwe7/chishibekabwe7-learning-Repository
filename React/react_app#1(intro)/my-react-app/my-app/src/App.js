import './App.css';
function App (){
    let age = 0;
    const inscreaseage = () => {
        age = age +1;
        console.log(age);
    }
    return <div className="App">
        {age} <button onClick={inscreaseage}>increase Age</button>
        </div>
}
export default App;