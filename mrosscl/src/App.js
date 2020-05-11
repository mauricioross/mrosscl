import React from 'react';
import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Iam from './Components/iam/Iam';
function App() {

  return (
    // `  <div className="App">
    //     <header className="App-header">
    //       <img src={logo} className="App-logo" alt="logo" />
    //       <p>
    //         Edit <code>src/App.js</code> and save to reload.
    //       </p>
    //       <a
    //         className="App-link"
    //         href="https://reactjs.org"
    //         target="_blank"
    //         rel="noopener noreferrer"
    //       >
    //         Learn React
    //       </a>
    //     </header>
    //   </div>`  
    <Router>
      <Switch>
        <Route exact path="/">
          <div className="App">
            <div className="Container">
              <span className="Neon"> <h1 className="label" data-text="Mauricio Ross Arevalo">Mauricio Ross Arevalo</h1></span>
              <Link className="Neon-Button" to="/iam" >Entrar</Link>
            </div>
          </div>
        </Route>
        <Route path="/iam">
          <Iam />
        </Route>

      </Switch>
    </Router>

  );
}

export default App;
