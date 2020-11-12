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
        "precioHab": props.precio.toFixed(2) === undefined ? 0.00 : props.precio.toFixed(2),
        "habId": props.idHab,
        "id_cliente": 1
    };

    const reservar = () =>{
        props.onConfirm(dataOut); 
    }

    return (
        <Fragment >
            <Modal className="modal" show={show} onHide={handleClose} >
                <Modal.Header className="modal-header" closeButton>
                    <Modal.Title className="modal-title">Final details of <h1>{props.habitacion}</h1></Modal.Title>
                </Modal.Header> 
                <Modal.Body className="modal-body">Summary<br/>
                    Check in day: {moment(props.in).format('LL').toString()}<br/>
                    Check out day: {moment(props.out).format('LL').toString()}<br/>
                    Final price: {props.precio.toFixed(2)}€<br/>
                </Modal.Body>
                <Modal.Footer className="modal-footer">
                    <Button name="closeBtn" variant="secondary" onClick={handleClose}>
                        Go Back
                    </Button>
                    <Button name="bookNow" variant="primary" onClick={() => {
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