import React from 'react';
import calendarImage from '../../images/CalendarMirrored.png';
import contactImage from '../../images/Contact.png';
import maskGroupImage from '../../images/MaskGroup.png';

import styled, { css } from 'styled-components';

// Headers Components
const ChosensLayout = styled.div`
    height : 7.5vh;    
    line-height : 10px;
    background : white;
    text-align : center;
    padding : 0 15px !important;
    margin-right : 0;
    &&{
        
    }
`;

const ChosenDivOne = styled.div`
    width : 33%;
    float : left;
    height : 100%;
    padding-top : 2%;
    ${
        props =>
        props.checked === 1 &&
        css`
            border-bottom : 3px solid;
            border-bottom-color : #EB6363;
    `}
`;

const ChosenDivTwo = styled.div`
    width : 33%;
    float : left;
    height : 100%;
    ${
        props =>
        props.checked === 2 &&
        css`
            border-bottom : 3px solid;
            border-bottom-color : #EB6363;
    `}
`;

const ChosenDivThree = styled.div`
    width : 33%;
    float : left;
    height : 100%;
    padding-top : 2%;
    ${
        props =>
        props.checked === 3 &&
        css`
            border-bottom : 3px solid;
            border-bottom-color : #EB6363;
    `}
`;



const ChosenImage = styled.img`

`;
const Chosens = ({ calendar, maskGroup, contact, checked }) => {
    if(checked === 1){

    }
    return (
        <ChosensLayout>
            <ChosenDivOne checked={checked} onClick={calendar}>            
                <ChosenImage src={calendarImage} alt=""/>
            </ChosenDivOne>

            <ChosenDivTwo checked={checked} onClick={maskGroup}>            
                <ChosenImage src={maskGroupImage} alt=""/>
            </ChosenDivTwo>

            <ChosenDivThree checked={checked} onClick={contact}>            
                <ChosenImage src={contactImage} alt=""/>
            </ChosenDivThree>
        </ChosensLayout>

    );
}

export default Chosens;