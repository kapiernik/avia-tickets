import React, { Component } from 'react';
// import styled from 'styled-components';
import Header from '../header';
import Filter from '../filter';
import { Container, Col, Row } from 'reactstrap';

class App extends Component {
  render() { 

    return (
      <>
        <Container>
          <Header />
        </Container>
        <Container>
          <Col>
            <Filter />
          </Col>
        </Container>
      </>
     );
  }
}
 
export default App;
