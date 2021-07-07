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
    
    renderStopsEnding(value){  
        value = Math.abs(value) % 100; 
        const num = value % 10;
        if(value > 10 && value < 20) return "пересадок"; 
        if(num > 1 && num < 5) return "пересадки";
        if(num === 1) return "пересадка"; 
        return "пересадок";
    }

    renderFlightTime(date, duration){
        const departureDate = new Date(date);
        // const flightDurationHours = Math.floor(duration / 60);
        // const flightDurationMinutes = duration - (flightDurationHours * 60);
        const arrivalDateinMilliSeconds = new Date(date).setMinutes(duration);
        const arrivalDate = new Date(arrivalDateinMilliSeconds);

        const departureHour = departureDate.getUTCHours();
        const departureMinutes = departureDate.getUTCMinutes();
        const arrivalHour = arrivalDate.getUTCHours();
        const arrivalMinutes = arrivalDate.getUTCMinutes();

        return `${departureHour}:${departureMinutes} - ${arrivalHour}:${arrivalMinutes}`;
    }

    renderFlightDuration(duration){
        const flightDurationHours = Math.floor(duration / 60);
        const flightDurationMinutes = duration - (flightDurationHours * 60);

        if(flightDurationMinutes === 0){
            return `${flightDurationHours} часов`;
        } else if (flightDurationHours === 0){
            return `${flightDurationMinutes} минут`;
        }

        return `${flightDurationHours}ч ${flightDurationMinutes}м`;
    }

    render() {

        const price = this.props.price;
        const carrier = this.props.carrier;
        const [forth, back] = this.props.segments;

        const imageUrl = `https://pics.avs.io/99/36/${carrier}.png`;

        return ( 
            <TicketBlock>
                <Price>
                    {price} Р
                </Price>
                <Image src={imageUrl}></Image>
                <Forth>
                    <InfoContainer>
                        <Label route>
                            {forth.origin} - {forth.destination}
                        </Label>
                        <Value route>
                            {this.renderFlightTime(forth.date, forth.duration)}
                        </Value>
                    </InfoContainer>
                    <InfoContainer>
                        <Label length>
                            В пути
                        </Label>
                        <Value length>
                            {this.renderFlightDuration(forth.duration)}
                        </Value>
                    </InfoContainer>
                    <InfoContainer>
                        <Label stops>
                            {forth.stops.length} {this.renderStopsEnding(forth.stops.length)}
                        </Label>
                        <Value route>
                            {forth.stops.join(", ")}
                        </Value>
                    </InfoContainer>
                </Forth>
                <Back>
                    <InfoContainer>
                        <Label route>
                            {back.origin} - {back.destination}
                        </Label>
                        <Value route>
                        {this.renderFlightTime(back.date, back.duration)}
                        </Value>
                    </InfoContainer>
                    <InfoContainer>
                        <Label duration>
                            В пути
                        </Label>
                        <Value duration>
                            {this.renderFlightDuration(back.duration)}
                        </Value>
                    </InfoContainer>
                    <InfoContainer>
                        <Label stops>
                            {back.stops.length} {this.renderStopsEnding(back.stops.length)}
                        </Label>
                        <Value route>
                            {back.stops.join(", ")}
                        </Value>
                    </InfoContainer>
                </Back>
            </TicketBlock>
         );
    }
}
 
export default Ticket;