import React, { Component, Fragment }  from 'react';
import {
    Container,
    Row,
    Col
} from 'reactstrap'
import BookingService from '../services/bookingService'
import "../assets/css/style.css"

class ThankYouPage extends Component {
    constructor(props) {
        super(props)
        this.state = {
            booking: [],
            habitacion: [],
        }
    }

    componentDidMount(){
        BookingService.getBookingById(this.props.location.state.reserva).then((res) => {
            this.setState({ booking : res.data });
            this.setState({ habitacion : res.data.habitacion});
        });
    }

    render(){
        return(
            <Fragment>
                <Container className="thankyou">
                    <br/>
                    <Row className="idReserva"><h1><span>Booking: </span> #{this.state.booking.id}#</h1><br/></Row>
                    <Row className="fechas">
                        <Col lg={6}>
                            <span className="check">Check in:</span> <span className="horario">(From 14.00h)</span> <br/><h2>{this.state.booking.fechaIn}</h2><br/>
                        </Col>
                        <Col lg={6}>
                            <span className="check">Check out:</span><span className="horario">(To 10.00h)</span><br/><h2>{this.state.booking.fechaOut}</h2><br/>
                        </Col>
                    </Row>
                    <Row>
                        <Col>Precio Final: <br/><h2>{this.state.booking.precioTotal}€</h2><br/></Col>
                    </Row>
                    <Row>
                        <Col>Habitacion: <br/><h2>{this.state.habitacion.codigo}</h2><br/></Col>
                    </Row>
                    <Row>
                        <Col>Descripcion habitacion: <br/><h2>{this.state.habitacion.descripcion}</h2><br/></Col>
                    </Row>
                    <Row>
                        <Col>Precio habitacion: <br/><h2>{this.state.habitacion.precio}€</h2><br/></Col>
                    </Row>
                    <Row>Gracias por confiar en nosotros, esperamos su visita y que disfrute de ella. </Row>
                    <Row>Estamos a su disposición</Row>
                </Container>
            </Fragment>
        )
    }
}

export default ThankYouPage