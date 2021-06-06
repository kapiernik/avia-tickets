import React, { Component } from 'react';
import headerLogo from './header-logo.svg';
import styled from 'styled-components';

class Header extends Component {
    render() {

        const Header = styled.div`
            display: flex;
            justify-content: center;
            margin: 50px 0;
        `;

        return ( 
            <Header>
                <img src={headerLogo} alt="aviasales test task" />
            </Header>
         );
    }
}
 
export default Header;