import './App.css';
import Fejlec from './Fejlec';
import Torzs from './Torzs';
import Lablec from './Lablec';
import { BrowserRouter as Irányító, Route, Switch} from "react-router-dom";
import Kezdolap from './Kezdolap';
import Kapcsolat from './Kapcsolat';

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