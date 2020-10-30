import React, { useState, useEffect }  from 'react';
import Modal from "react-bootstrap/Modal";
import Button from 'reactstrap/lib/Button';
import moment from 'moment'

function PreFinish(props) {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);

    useEffect( ()=>{
        setShow(props.show);
    },[props])
     

    const postBookNow = () => {
        console.log (
            {
                "checkIn": moment(props.in).format("YYYY-MM-DD"), 
                "checkOut": moment(props.out).format("YYYY-MM-DD"),
                "precioHab": props.precio,
                "habId": props.idHab,
                "id_cliente": 1
            }
        );
        let axios = require('axios');
        let data = 
        {
            "checkIn": moment(props.in).format("YYYY-MM-DD"), 
            "checkOut": moment(props.out).format("YYYY-MM-DD"),
            "precioHab": props.precio,
            "habId": props.idHab,
            "id_cliente": 1
        };
        let config = {
          method: 'post',
          url: 'http://localhost:8080/api/newBooking',
          headers: { 
            'Access-Control-Allow-Origin':'*',
            'Content-Type': 'application/json', 
          },
          data : data
        };
        axios(config)
        .then(function (response) {
          console.log("OK")
          return response.status
        })
        .catch(function (error) {
          console.log(error);
        });
      }


    return (
        <>
        <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
                <Modal.Title>Final details of <h1>{props.habitacion}</h1></Modal.Title>
             </Modal.Header> 
            <Modal.Body>Summary<br/>
                Check in day: {props.in?props.in:"TODAY"}<br/>
                Check out day: {props.out?props.out:"TODAY"}<br/>
                Final price: {props.precio}€<br/>
            </Modal.Body>
             <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                    Go Back
                </Button>
                <Button variant="primary" onClick={() => {handleClose()
                                                        postBookNow()
                                                        }
                }>
                    Book it!
                </Button>
             </Modal.Footer>
        </Modal>
        </>
    );
}

export default PreFinish