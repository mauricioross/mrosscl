import React, { Component } from 'react'
import PropTypes from 'prop-types';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './styles.scss';
import ProfileHeader from '../ProfileHeader';

export default class index extends Component {
    static propTypes = {
        prop: PropTypes
    }

    render() {
        return (
            <div className={this.props.menuShow ? 'show container-home' : 'hide container-home'}>
                <Container>
                    <Row>
                        <Col><ProfileHeader></ProfileHeader></Col>
                    </Row>
                    <Row>
                        <Col>1 of 3</Col>
                        <Col>2 of 3</Col>
                        <Col>3 of 3</Col>
                    </Row>
                </Container>
            </div>
        )
    }
}
