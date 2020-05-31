import logo from './logo.svg';
import './App.scss';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Index from './Components/index/Index';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import React, { Component } from 'react'
import {Helmet} from "react-helmet";
export default class App extends Component {
  constructor(props) {
    super(props);
    this.hideShowMenu = this.hideShowMenu.bind(this);
    this.state = {
      show: true,
    };
  };
  hideShowMenu = (status) => {
    
    this.setState({ show: !status });
    console.log(!status);
  }
  render() {
    return (
      <Router>
         <Helmet>
                <meta charSet="utf-8" />
                <title>Mauricio Ross Arevalo</title>
            </Helmet>
        <Switch>
          <Route exact path="/">
            <Index/>
          </Route>
         
        </Switch>
      </Router>
    )
  }
}


