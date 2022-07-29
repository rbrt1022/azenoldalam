import './App.css';
import Fejlec from './Fejlec';
import Torzs from './Torzs';
import Lablec from './Lablec';
import { BrowserRouter as Irányító, Route, Switch} from "react-router-dom";
import Kezdolap from './Kezdolap';
import Kapcsolat from './Kapcsolat';
import Animacio from './Animacio';

function App() {
  return (
    <Irányító>
      <div className="App">
        <Animacio />
        
        <Fejlec />
        
        <div id='tartalom'>
          <Switch>
            <Route exact path="/azenoldalam/">
              <Kezdolap />
            </Route>
            <Route path="/azenoldalam/k">
              <Torzs />
            </Route>
            <Route path="/azenoldalam/e">
              <Kapcsolat />
            </Route>
          </Switch>
        </div>
        <Lablec />
      </div>
    </Irányító>
  );
}

export default App;
