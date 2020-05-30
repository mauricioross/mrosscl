import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Button from 'react-bootstrap/Button';

import './styles.scss';

export default class SideMenu extends Component {
  static propTypes = {
    prop: PropTypes
  }
  constructor(props) {
    super(props);
    this.hideShowMenu = this.hideShowMenu.bind(this);
    this.state = {
      show: true,
    };
  };
  hideShowMenu = () => {
    const currentState = this.state.show;
    this.setState({ show: !currentState });
    this.props.hideShowMenu(this.state.show);
  }
  render() {
    return (
      <div className= {this.state.show ? ' header showmenu': "header hidemenu"} >
      <div className="photo"></div>
      <ul>
        <li><Button variant="primary">Home</Button></li>
        <li><Button variant="primary">I am</Button></li>
        <li><Button variant="primary">Resume</Button></li>

        <li><Button variant="primary">Hobbies</Button></li>
        <li><Button variant="primary">Contact Me</Button></li>
        <li><Button variant="primary"
                onClick={this.hideShowMenu} >{"<-"}</Button></li>
      </ul>
    </div>
    )
  }
}


