import React, { useState, Fragment, useEffect } from "react";
import PreFinish from '../../ModalBooking/ModalBooking'
import moment from 'moment'
import {
    Row,
    Col
    } from "reactstrap";
import Button from 'reactstrap/lib/Button';
import "bootstrap/dist/css/bootstrap.min.css";

import DatePicker, { registerLocale } from "react-datepicker";
import es from 'date-fns/locale/es';
import "react-datepicker/dist/react-datepicker.css";
import "assets/css/style.css";
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
        setPrecioTotal(props.precioTotal);
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
      
    const calcPrecio = () => {
         props.calcPrecio(dataOut)
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
            <Row className="formularioFinal" >
                <Col lg={4} className="bookButton">
                        <Button name="bookIt" style={{background:  "rgb(145, 114, 65)"}} className="bookIt" onClick={() => {
                                                            setModal(!modal)
                                                            calcPrecio()
                                                            }  
                        }>Book Now!</Button>
                        <PreFinish
                            name = "modal"
                            className="modal" 
                            show={modal} 
                            habitacion={props.codHab} 
                            idHab={props.idHab} 
                            precio={precioTotal} 
                            in={moment(startDate).format('LL').toString()} 
                            out={moment(endDate).format('LL').toString()} 
                            onConfirm={confirm}
                        />
                </Col>
                <Col lg={4}>
                    <DatePicker
                            name = "datePicker_in"
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
                            name = "datePicker_out"
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
            </Row>
        </Fragment>
    )
}

export default Formulario;