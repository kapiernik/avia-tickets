import React, { Component } from 'react';
// import styled from 'styled-components';
import Header from '../header';
import Filter from '../filter';
import Tabs from '../tabs';
import Ticket from '../ticket';
import styled from 'styled-components';

class App extends Component {
  render() {
    
    const Container = styled.div`
      width: 1000px;
      max-width: 1250px;
      margin: 0 auto;
      display: flex;
      flex-direction: row;
      align-items: start;
      justify-content: center;
    `;

    const Column = styled.div`
      display: flex;
      flex-direction: column;
    `;

    return (
      <>
        <Container>
          <Header />
        </Container>
        <Container>
          <Column>
            <Filter />
          </Column>
          <Column>
            <Tabs />
            <Ticket />
            <Ticket />
            <Ticket />
            <Ticket />
            <Ticket />
          </Column>
        </Container>
      </>
     );
  }
}
 
export default App;
