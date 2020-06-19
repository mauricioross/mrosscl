import React, { Component, Fragment } from 'react'

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
import {Helmet} from "react-helmet";
export default class App extends Component {
  
  render() {
    return (
      <Fragment>
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
      </Fragment>
    )
  }
}


