import logo from './logo.svg';
import './App.scss';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Iam from './Components/iam/Iam';
import 
Home from './Components/Home';
import Index from './Components/index/Index';
import Header from './Components/Header/index';
import SideMenu from './Components/SideMenu/index';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import React, { Component } from 'react'

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
        <Switch>
          <Route exact path="/">
            <Index/>
          </Route>
         
        </Switch>
      </Router>
    )
  }
}


