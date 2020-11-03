import React, { useState, useEffect, Fragment }  from 'react';
import Modal from "react-bootstrap/Modal";
import Button from 'reactstrap/lib/Button';
import moment from 'moment'
import BookingService from '../services/booking.service'
import { useHistory } from "react-router";

function PreFinish(props) {
    const [show, setShow] = useState(false);
    const [setIdReserva] = useState(0);
    const handleClose = () => setShow(false);

    
    const history = useHistory();

    useEffect( ()=>{
        setShow(props.show);
    },[props])


    let dataOut = 
    {
        "checkIn": moment(props.in).format("YYYY-MM-DD"), 
        "checkOut": moment(props.out).format("YYYY-MM-DD"),
        "precioHab": props.precio.toFixed(2),
        "habId": props.idHab,
        "id_cliente": 1
    };

    const reservar = () =>{
        BookingService.newBooking(dataOut)
            .then(idReserva => {
                setIdReserva(idReserva)
                history.push({
                    pathname: "/thankyoupage",
                    state: {
                        reserva: idReserva
                    }
                })
            })    
    }

    return (
        <Fragment>
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Final details of <h1>{props.habitacion}</h1></Modal.Title>
                </Modal.Header> 
                <Modal.Body>Summary<br/>
                    Check in day: {props.in?props.in:"TODAY"}<br/>
                    Check out day: {props.out?props.out:"TODAY"}<br/>
                    Final price: {props.precio.toFixed(2)}€<br/>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Go Back
                    </Button>
                    <Button variant="primary" onClick={() => {
                                                            handleClose()
                                                            reservar()
                                                            }
                    }>
                        Book it!
                    </Button>
                </Modal.Footer>
            </Modal>
        </Fragment>
    );
}

export default PreFinish