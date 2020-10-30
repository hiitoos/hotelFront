import React, { useState, Fragment } from "react";
import PreFinish from '../components/PreFinish'
import moment from 'moment'
import {
    // Container,
    Row,
    Col
    } from "reactstrap";
import Button from 'reactstrap/lib/Button';
import "bootstrap/dist/css/bootstrap.min.css";

import DatePicker, { registerLocale } from "react-datepicker";
import es from 'date-fns/locale/es';
import "react-datepicker/dist/react-datepicker.css";
registerLocale('es', es);


let excludedDates = [];

function Formulario (props){
    const [startDate, setStartDate] = useState(0);
    const [endDate, setEndDate] = useState(null);
    const [precioTotal, setPrecioTotal] = useState(0);
    const [modal, setModal] = useState(false);

    for (let i=0; i<props.fechas.length; i++){
        excludedDates[i] = new Date(props.fechas[i]);
    }

    const onChange = dates => {
        const [start, end] = dates;
        setStartDate(start);
        setEndDate(end);
        if(modal) setModal(!modal)
    };



    const postBookNow = () => {
        let axios = require('axios');
        let data = {"id":props.idHab, "checkIn":startDate ? startDate : new Date(), "checkOut":endDate ? endDate : startDate};
        let config = {
          method: 'post',
          url: 'http://localhost:8080/api/calculaPrecio',
          headers: { 
            'Access-Control-Allow-Origin':'*',
            'Content-Type': 'application/json', 
          },
          data : data
        };
        axios(config)
        .then(function (response) {
          setPrecioTotal(response.data);
        })
        .catch(function (error) {
          console.log(error);
        });
      }
 
    return(
        <Fragment>
            <Row>
                <Col lg={4}>
                     {/* {precioTotal}  */}
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
                    <Button onClick={() => {setModal(!modal)
                                            postBookNow()
                                            }  
                    }>Book Now!</Button>
                    <PreFinish show={modal} habitacion={props.codHab} idHab={props.idHab} precio={precioTotal} in={moment(startDate).format('LL').toString()} out={moment(endDate).format('LL').toString()} />
                </Col>
            </Row>
        </Fragment>
    )
}

export default Formulario;