import React, { Component } from 'react';
// import styled from 'styled-components';
import Header from '../header';
import Filter from '../filter';
import Tabs from '../tabs';
import styled from 'styled-components';

class App extends Component {
  render() {
    
    const Container = styled.div`
      max-width: 1250px;
      margin: 0 auto;
      display: flex;
      flex-direction: row;
      align-items: start;
      justify-content: center;
    `;

    return (
      <>
        <Container>
          <Header />
        </Container>
        <Container>
          <Filter />
          <Tabs />
        </Container>
      </>
     );
  }
}
 
export default App;
