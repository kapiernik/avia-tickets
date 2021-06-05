import React, { Component } from 'react';
import './header.css';
import headerLogo from './header-logo.svg';

class Header extends Component {
    render() { 
        return ( 
            <div className="header">
                <img src={headerLogo} alt="aviasales test task" />
            </div>
         );
    }
}
 
export default Header;