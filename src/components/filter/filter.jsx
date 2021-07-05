import React, { Component } from 'react';
import styled from 'styled-components';
import inputImage from './input.svg';
import checkedInputImage from './checkedInput.svg';


class Filter extends Component {
    render() { 

        const Filter = styled.div`
            display: inline-block;
            max-width: 232px;
            background-color: #FFF;
            box-shadow: 0px 2px 8px 0px rgba(0, 0, 0, .1);
            padding-bottom: 10px;
            margin-right: 20px;
        `;

        const Title = styled.h3`
            font-weight: bold;
            color: #4A4A4A;
            font-size: 12px;
            letter-spacing: .5px;
            line-height: 12px;
            text-transform: uppercase;
            padding: 20px;
            padding-bottom: 10px;
        `;

        const Form = styled.form``;

        const Label = styled.label`
            width: 100%;
            display: flex;
            flex-direction: row;
            align-items: center;
            padding: 10px 20px;
            font-weight: 400;
            font-size: 13px;
            color: #4A4A4A;
            &:hover{
                background-color: #f1fcff;
            }
        `;

        const Input = styled.input`
            position: absolute;
            -webkit-appearance: none;
            appearance: none;
        `;

        const CheckBox = styled.span`
            margin-right: 10px;
            width: 20px;
            height: 20px;
            background-image: url(${inputImage});
            input:checked + & {
                background-image: url(${checkedInputImage});
            }
        `;

        return ( 
            <Filter>
                <Title>
                    Количество пересадок
                </Title>
                <Form>
                    <Label>
                        <Input type="checkbox" />
                        <CheckBox></CheckBox>
                        Все
                    </Label>
                    <Label>
                        <Input type="checkbox" />
                        <CheckBox></CheckBox>
                         1 пересадка
                    </Label>
                    <Label>
                        <Input type="checkbox" />
                        <CheckBox></CheckBox>
                        2 пересадки
                    </Label>
                    <Label>
                        <Input type="checkbox" />
                        <CheckBox></CheckBox>
                        3 пересадки
                    </Label>
                </Form>
            </Filter>
         );
    }
}
 
export default Filter;