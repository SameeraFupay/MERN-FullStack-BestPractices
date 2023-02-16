import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import './App.css';

const App = () => {
  return (
    <Container className="container">
      <Row>
        <Col className="header">Header</Col>
      </Row>
      <Row>
        <Col className="nav">Nav</Col>
      </Row>
      <Row>
        <Col className="main">Main</Col>
      </Row>
      <Row>
        <Col className="footer">Footer</Col>
      </Row>
    </Container>
  );
};

export default App;

/* App.css */
.container {
  display: flex;
  flex-direction: column;
  height: 100vh;
}

.header {
  background-color: #333;
  color: #fff;
  padding: 20px;
}

.nav {
  background-color: #ddd;
  padding: 20px;
}

.main {
  flex: 1;
  background-color: #fff;
  padding: 20px;
}

.footer {
  background-color: #333;
  color: #fff;
  padding: 20px;
}