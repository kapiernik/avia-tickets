import React, { Component } from 'react';
import styled from 'styled-components';

const TicketBlock = styled.div`
    padding: 20px;
    background-color: #ffffff;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: repeat(3, 1fr);
    grid-template-areas: "price price image"
                         "forth forth forth"
                         "back back back";
    grid-gap: 20px 0;
    border-radius: 5px;
    box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.1);
    margin-bottom: 20px;
`;

const Price = styled.h2`
    grid-area: price;
    font-size: 24px;
    color: #2196F3;
    font-weight: 600;
    margin: auto 0;
    line-height: 24px;
`;

const Image = styled.img``;

const Forth = styled.div`
    grid-area: forth;
    display: flex;
    flex-direction: row;
`;

const Back = styled(Forth)`
    grid-area: back;
`;

const InfoContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
`;

const Label = styled.h3`
    font-size: 12px;
    font-weight: 600;
    line-height: 18px;
    letter-spacing: .5px;
    color: #A0B0B9;
    text-transform: uppercase;
`;

const Value = styled.h4`
    font-weight: 600;
    font-size: 14px;
    line-height: 21px;
    color: #4A4A4A;
`;

class Ticket extends Component {
    render() {
        return ( 
            <TicketBlock>
                <Price>
                    13 700 Р
                </Price>
                <Image src="https://pics.avs.io/99/36/S7.png"></Image>
                <Forth>
                    <InfoContainer>
                        <Label route>
                            IEV - HKT
                        </Label>
                        <Value route>
                            23:50 - 4:30
                        </Value>
                    </InfoContainer>
                    <InfoContainer>
                        <Label length>
                            В пути
                        </Label>
                        <Value length>
                            23ч 15м
                        </Value>
                    </InfoContainer>
                    <InfoContainer>
                        <Label stops>
                            3 пересадки
                        </Label>
                        <Value route>
                            MSK, SPB, ODS
                        </Value>
                    </InfoContainer>
                </Forth>
                <Back>
                    <InfoContainer>
                        <Label route>
                            IEV - HKT
                        </Label>
                        <Value route>
                            23:50 - 4:30
                        </Value>
                    </InfoContainer>
                    <InfoContainer>
                        <Label length>
                            В пути
                        </Label>
                        <Value length>
                            23ч 15м
                        </Value>
                    </InfoContainer>
                    <InfoContainer>
                        <Label stops>
                            3 пересадки
                        </Label>
                        <Value route>
                            MSK, SPB, ODS
                        </Value>
                    </InfoContainer>
                </Back>
            </TicketBlock>
         );
    }
}
 
export default Ticket;