import React, { useState } from "react";
import RoomService from '../services/roomService'

import {
    // Container,
    Row,
    Col
    } from "reactstrap";
import Button from 'reactstrap/lib/Button';

import DatePicker, { registerLocale } from "react-datepicker";
import es from 'date-fns/locale/es';
import "react-datepicker/dist/react-datepicker.css";
registerLocale('es', es);


let excludedDates = [];

function Formulario (props){
    const [startDate, setStartDate] = useState(0);
    const [endDate, setEndDate] = useState(null);
    
    for (let i=0; i<props.fechas.length; i++){
        excludedDates[i] = new Date(props.fechas[i]);
    }

    const onChange = dates => {
        const [start, end] = dates;
        setStartDate(start);
        setEndDate(end);
    };
 
    return(
        <>
        <Row>
            <Col lg={4}>
                Precio
            </Col>
            <Col lg={4}>
                <DatePicker
                        startDate = {startDate}
                        endDate={endDate}
                        onChange={onChange}
                        minDate={new Date()}
                        excludeDates={excludedDates}
                        locale="es"
                        selectsRange
                        inline
                    />
                </Col>
            <Col lg={4}>
                <Button>Book Now!</Button>
            </Col>
        </Row>
        </>
    )
}

export default Formulario;