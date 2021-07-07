import React, { Component } from 'react';
// import styled from 'styled-components';
import Header from '../header';
import Filter from '../filter';
import Tabs from '../tabs';
import Ticket from '../ticket';
import styled from 'styled-components';

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

class App extends Component {

  state = {
    ticketsArray: [],
    stop: false
  }

  async componentDidMount(){
    const searchId = await fetch('https://front-test.beta.aviasales.ru/search') // Запрашиваем SearchID
      .then(response => response.json())
      .then(response => response.searchId);

    await fetch(`https://front-test.beta.aviasales.ru/tickets?searchId=${searchId}`) // Запрашиваем билеты
      .then(response => response.json())
      .then(response => {
        this.setState({ 
          ticketsArray: response.tickets.slice(1, 6), // Запрашиваем первые пять билетов (ВРЕМЕННОЕ РЕШЕНИЕ)
          stop: response.stop
        });
      })
  }

  //Уникальный айди для билета

  makeId() {
    let text = "";
    const possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  
    for (let i = 0; i < 5; i++)
      text += possible.charAt(Math.floor(Math.random() * possible.length));
  
    return text;
  }

  render() {

    const tickets = this.state.ticketsArray?.map((obj) => 
        <Ticket 
          key={this.makeId()} 
          price={obj.price} 
          carrier={obj.carrier} 
          segments={obj.segments} />
      );

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
            {tickets}
          </Column>
        </Container>
      </>
     );
  }
}
 
export default App;
