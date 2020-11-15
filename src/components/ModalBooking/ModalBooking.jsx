import React, { useState, useEffect, Fragment }  from 'react';
import Modal from "react-bootstrap/Modal";
import Button from 'reactstrap/lib/Button';
import moment from 'moment'

function PreFinish(props) {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);

    useEffect( ()=>{
        setShow(props.show);
    },[props])


    let dataOut = 
    {
        "checkIn": moment(props.in).format("YYYY-MM-DD"), 
        "checkOut": moment(props.out).format("YYYY-MM-DD"),
        "precioHab": props.precio === undefined ? null : props.precio.toFixed(2),
        "habId": props.idHab,
        "id_cliente": 1
    };

    const reservar = () =>{
        if (dataOut.precioHab !== null) props.onConfirm(dataOut); 
    }

    return (
        <Fragment >
            <Modal className="modal" show={show} onHide={handleClose} >
                <Modal.Header className="modal-header" closeButton>
                    <Modal.Title className="modal-title">Detalles finales <h1>{props.habitacion}</h1></Modal.Title>
                </Modal.Header> 
                <Modal.Body className="modal-body">Resumen de la reserva:<br/>
                    Día de entrada: {moment(props.in).format('LL').toString()}<br/>
                    Día de salida: {moment(props.out).format('LL').toString()}<br/>
                    Precio final: {props.precio===undefined?0.00: props.precio.toFixed(2)}€<br/>
                </Modal.Body>
                <Modal.Footer className="modal-footer">
                    <Button name="closeBtn" variant="secondary" style={{background: "rgb(145, 114, 65)"}} onClick={handleClose}>
                        Atrás
                    </Button>
                    <Button name="bookNow" style={{background: "rgb(145, 114, 65)"}} variant="primary" onClick={() => {
                                                            handleClose()
                                                            reservar()
                                                            }
                    }>
                        ¡Reservar!
                    </Button>
                    <input type="email" placeholder="Introduzca un email"></input>
                </Modal.Footer>
            </Modal>
        </Fragment>
    );
}

export default PreFinish