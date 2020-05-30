import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './styles.scss';

const ProfileHeader = () => {

  return (
    <>
      <div className="container-profile">
          <h1>Mauricio Esteban Ross Arevalo</h1>
          <Container className="container">
            <Row>
              <Col>Software Enginner</Col>
              <Col xs={7}>HTML5, Javascript, CSS, Angular, React, Python</Col>
              <Col xs={2}>Santaigo de Chile</Col>
            </Row>
          </Container>
      </div>
    </>
  );
};

export default ProfileHeader;
