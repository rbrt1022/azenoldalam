import './App.css';
import Fejlec from './Fejlec';
import Torzs from './Torzs';
import Lablec from './Lablec';
import { HashRouter as Irányító, Route, Switch} from "react-router-dom";
import Kezdolap from './Kezdolap';
import Kapcsolat from './Kapcsolat';
import "./Animacio.css";

function App() {
  return (
    <Irányító>
      <div className="App">
        <Fejlec />
        <div id='tartalom'>
          <Switch>
            <Route exact path="/">
              <Kezdolap />
            </Route>
            <Route path="/k">
              <Torzs />
            </Route>
            <Route path="/e">
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
