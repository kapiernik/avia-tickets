import React, { Component } from 'react';
import styled from 'styled-components';

// Стили для компонентов

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

    // Склонение слова "пересадка"
    
    renderStopsEnding(value){  
        value = Math.abs(value) % 100; // Округленное количество пересадок
        const num = value % 10; // Окончание числа пересадок (если это просто цифра - то записывается такое же значение)
        if(value > 10 && value < 20) return "пересадок"; // Если число больше 10 и меньше - то подставляем "пересадок" 
        if(num > 1 && num < 5) return "пересадки"; // Если число ЗАКАНЧИВАЕТСЯ на число, большее единицы и меньше пяти - то "пересадки"
        if(num === 1) return "пересадка"; // Если число ЗАКАНЧИВАЕТСЯ на единицу - то "пересадка"
        return "пересадок"; // В остальном случае - "пересадок"
    }

    // Правильное отображение времени полета

    renderFlightTime(date, duration){
        const departureDate = new Date(date); // Дата отлета
        // Дата отправки в милисекундах после 1 января 1970 года (мы к дате отлета добавляем длительность перелета)
        const arrivalDateinMilliSeconds = new Date(date).setMinutes(duration); 
        const arrivalDate = new Date(arrivalDateinMilliSeconds); // Дата отправки в нормальном формате

        const departureHour = departureDate.getUTCHours(); // Час отлета по Гринвичу
        const departureMinutes = departureDate.getUTCMinutes(); // Минута отлета по Гринвичу
        const arrivalHour = arrivalDate.getUTCHours(); // Час прилета по Гринвичу
        const arrivalMinutes = arrivalDate.getUTCMinutes(); // Час прилета по Гринвичу

        return `${departureHour}:${departureMinutes} - ${arrivalHour}:${arrivalMinutes}`;
    }

    // Правильное отображение длительности полета

    renderFlightDuration(duration){
        let flightDurationHours = Math.floor(duration / 60); // Количество часов полета
        // Количество оставшихся минут (от данных длительности в минутах отнимаем количество часов перелета в минутах)
        let flightDurationMinutes = duration - (flightDurationHours * 60);

        // Если количество часов(минут) меньше девяти, прибавляем к ним нолик для красоты

        if(flightDurationHours <= 9){
            flightDurationHours = `0${flightDurationHours}`;
        }

        if(flightDurationMinutes <= 9){
            flightDurationHours = `0${flightDurationMinutes}`;
        }

        // Если количество минут(часов) равняется нулю, мы их просто не упоминаем

        if(flightDurationMinutes === 0){
            return `${flightDurationHours} часов`;
        } else if (flightDurationHours === 0){
            return `${flightDurationMinutes} минут`;
        }

        return `${flightDurationHours}ч ${flightDurationMinutes}м`;
    }

    render() {

        // Деструктуризация пропсов

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