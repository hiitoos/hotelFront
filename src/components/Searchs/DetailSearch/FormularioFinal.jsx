import React, { useState, Fragment, useEffect } from "react";
import PreFinish from '../../ModalBooking'
import moment from 'moment'
import {
    Row,
    Col
    } from "reactstrap";
import Button from 'reactstrap/lib/Button';
import "bootstrap/dist/css/bootstrap.min.css";
import PriceService from '../../../services/price.service'

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

    useEffect( ()=>{
        setStartDate(props.fechaIn);
        setEndDate(props.fechaOut);
        for (let i=0; i<props.fechas.length; i++){
            excludedDates[i] = new Date(props.fechas[i]);
        }
    },[props])

    const onChangeIn = date => {
        setStartDate(date);
        endDate<=startDate?setEndDate(date):setEndDate(endDate);
        if(modal) setModal(!modal)
    };
    const onChangeOut = date => {
        setEndDate(date);
        if(modal) setModal(!modal)
    };
      
    // SUBIR AL PADRE!
    const calcPrecio = () => {
         PriceService.getPrice(dataOut).then(data => {setPrecioTotal(data)})
    }

    function confirm (propsHijo) {
        props.onConfirm(propsHijo);
    };

    let dataOut =
    {
        "id":props.idHab, 
        "checkIn":startDate ? startDate : new Date(), 
        "checkOut":endDate ? endDate : startDate
    };
      
    return(
        <Fragment>
            {console.log('Formulario final', props)}
            <Row>
                <Col lg={4}>
                    <DatePicker
                            selected = {startDate || new Date(props.fechaIn)}
                            endDate={endDate}
                            onChange={onChangeIn}
                            minDate={new Date()}
                            excludeDates={excludedDates}
                            dateFormat="dd/MM/yyyy"
                            locale="es"
                            inline
                    />
                </Col>
                <Col lg={4}>
                    <DatePicker
                            selected = {endDate}
                            endDate={endDate}
                            onChange={onChangeOut}
                            minDate={startDate}
                            excludeDates={excludedDates}
                            dateFormat="dd/MM/yyyy"
                            locale="es"
                            inline
                    />
                </Col>
                <Col lg={4}>
                    <Button name="bookIt" onClick={() => {setModal(!modal)
                                            calcPrecio()
                                            }  
                    }>Book Now!</Button>
                    <PreFinish 
                        show={modal} 
                        habitacion={props.codHab} 
                        idHab={props.idHab} 
                        precio={precioTotal} 
                        in={moment(startDate).format('LL').toString()} 
                        out={moment(endDate).format('LL').toString()} 
                        onConfirm={confirm}
                    />
                </Col>
            </Row>
        </Fragment>
    )
}

export default Formulario;