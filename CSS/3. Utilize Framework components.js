import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const App = () => {
  return (
    <Container>
      <Row>
        <Col>Header</Col>
      </Row>
      <Row>
        <Col>Nav</Col>
      </Row>
      <Row>
        <Col>Main</Col>
      </Row>
      <Row>
        <Col>Footer</Col>
      </Row>
    </Container>
  );
};

export default App;