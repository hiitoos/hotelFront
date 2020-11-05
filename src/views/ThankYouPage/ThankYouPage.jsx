import React, { Component }  from 'react';
import {
    Container,
    Row,
    Col
} from 'reactstrap'
import BookingService from '../../services/booking.service'
import "../../assets/css/style.css"
import Button from 'reactstrap/lib/Button';


class ThankYouPage extends Component {
    constructor(props) {
        super(props)
        this.state = {
            booking: [],
            habitacion: [],
        }
    }

    componentDidMount(){
        this.props.location.state!==undefined
            ?   BookingService.getBookingById(this.props.location.state.reserva).then((res) => {
                    this.setState({ booking : res.data });
                    this.setState({ habitacion : res.data.habitacion});
                })
            :   this.setState({
                    booking: [],
                    habitacion: [],
                })

    }

    render(){
        return(
            <div className="thankyouFG">
                <br/>
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
                        <Col><span className="check">Precio Final: </span><br/><h2>{this.state.booking.precioTotal}€</h2><br/></Col>
                    </Row>
                    <Row>
                        <Col><span className="check">Habitacion:</span> <br/><h2>{this.state.habitacion.codigo}</h2><br/></Col>
                    </Row>
                    <Row>
                        <Col><span className="check">Descripcion habitacion:</span> <br/><h2>{this.state.habitacion.descripcion}</h2><br/></Col>
                    </Row>
                    <Row>
                        <Col><span className="check">Precio habitacion: </span><br/><h2>{this.state.habitacion.precio}€</h2><br/></Col>
                    </Row>
                    <Row className="tyMsg">Gracias por confiar en nosotros, esperamos su visita y que disfrute de ella. </Row>
                    <Row className="tyMsg">Estamos a su disposición</Row>
                    <Row><Button className="tyBtn" onClick={() => this.props.history.push("/")}>Home</Button></Row>
                </Container>
            </div>
        )
    }
}

export default ThankYouPage