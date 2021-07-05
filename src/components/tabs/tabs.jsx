import React, { Component } from 'react';
import { ButtonGroup } from 'reactstrap';
import styled from 'styled-components';

const Button = styled.button`
    background-color: ${props => props.active ? '#2196F3' : '#FFF'};
    color: ${props => props.active ? '#FFF' : '#4A4A4A'};
    padding: 15px;
    border: 1px solid #DFE5EC;
    font-weight: 600;
    font-size: 12px;
    letter-spacing: 0.5px;
    text-transform: uppercase;
    user-select: ${props => props.active ? 'none' : 'auto'};
    cursor: ${props => props.active ? 'default' : 'pointer'};
    margin-bottom: 13px;
    &:active{
        background-color: #2196F3 !important;
        color: #FFF;
    }
    &:hover{
        background-color: ${props => props.active ? '#2196F3' : '#f1fcff'};
    }
    &:first-of-type{
        border-top-left-radius: 5px;
        border-bottom-left-radius: 5px;
    }
    &:last-of-type{
        border-top-right-radius: 5px;
        border-bottom-right-radius: 5px;
    }
`;

class Tabs extends Component {
    render() { 

        return ( 
            <ButtonGroup>
                <Button>
                    Самый дешёвый
                </Button>
                <Button>
                    Самый короткий
                </Button>
                <Button>
                    Оптимальный
                </Button>
            </ButtonGroup>
         );
    }
}
 
export default Tabs;