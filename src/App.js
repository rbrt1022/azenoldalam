import './App.css';
import Fejlec from './Fejlec';
import Torzs from './Torzs';
import Lablec from './Lablec';
import { Routes, Route, Link, HashRouter, useRoutes } from "react-router-dom";
import Kezdolap from './Kezdolap';
import Kapcsolat from './Kapcsolat';
import "./Animacio.css";

function App() {
  return (
    <HashRouter basename="/">
      <div className="App">
        <Fejlec />
        
        <div id='tartalom'>
          {/* <Switch>
            <Route exact path="/azenoldalam/">
              <Kezdolap />
            </Route>
            <Route path="/azenoldalam/k">
              <Torzs />
            </Route>
            <Route path="/azenoldalam/e">
              <Kapcsolat />
            </Route>
          </Switch> */}

          <useRoutes>
          {/* <Route path="/react-router-test/about">
            <About />
          </Route>
          <Route path="/react-router-test/users">
            <Users />
          </Route>
          <Route path="/react-router-test/">
            <Home />
          </Route> */}
          <Routes>
            <Route path="/" element={<Kezdolap />}/>
            <Route path="/k" element={<Torzs />}/>
            <Route path="/e" element={<Kapcsolat />} />
            
          </Routes>
          </useRoutes>
        </div>
        
        <Lablec />
      </div>
    </HashRouter>
  );
}

export default App;
