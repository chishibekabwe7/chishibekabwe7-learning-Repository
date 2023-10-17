import './App.css';
import {Job} from './tasks/Job';

function App (){
  return (  <div className="App">
      <Job salary={9000} position='Senior SDE' company='Amazon' />
      <Job salary={12000} position='Junior SDE' company='Google' />
      <Job salary={10000} position='Project Manager' company='Netflix' />
    </div>
  );
}



export default App;