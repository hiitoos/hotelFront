import React, {Component} from 'react'
import RoomService from '../services/room.service'
import BookingService from '../services/booking.service'
import IndexNavbar from "components/Navbars/IndexNavbar.js";
import {
    Container,
    Row,
    Col
} from "reactstrap";
import Formulario from "components/FormularioFinal.jsx"

class Singleroom extends Component {
    constructor(props) {
        super(props)
        this.state = {
            room: {},
        }
        console.log(this.props);
    }

    componentDidMount() {
        RoomService.getRoom(this.props.match.params.id).then((res) => {
            this.setState({
                room: res.data
            });
        });
    }

    doPost(data){
        BookingService.newBooking(data)
            .then(idReserva => {
                this.props.history.push({
                    pathname: "/thankyoupage",
                    state: {
                        reserva: idReserva
                    }
                })
            })
    }

    render() {      
            return (
                <div>
                    <IndexNavbar />
                    {
                        this.state.room.habitacion ? 
                        <Container key={this.state.room.habitacion.id} className="listaRoomWithImg"><br />
                            <Row>
                                <Col lg={12}>
                                    <img src={require(`../assets/img/${this.state.room.habitacion.codigo!==undefined 
                                                                            ? this.state.room.habitacion.codigo 
                                                                            : "blank"
                                                                    }.jpg`)
                                            } alt="imagen1" />
                                </Col><br />
                            </Row>
                            <Row>
                                <Col lg={12} className="roomInfo">
                                <Row>
                                    <Col lg={4}>
                                        <Row className="roomNameFinal">
                                            {this.state.room.habitacion.codigo}
                                        </Row>
                                        <hr />
                                        <Row className="roomPrice">
                                            <span className="desde">
                                                Desde
                                            </span><br/>
                                            <span className="price">
                                                {this.state.room.habitacion.precio}€
                                            </span>
                                            <span className="night">
                                                /night
                                            </span>
                                        </Row>
                                    </Col>
                                    <Col lg={8} className="roomDescriptionFinal">
                                        {this.state.room.habitacion.descripcion}
                                    </Col>
                                </Row>
                                </Col>
                            </Row>
                            <br />
                            <Formulario 
                                fechas={this.state.room.fechas} 
                                idHab={this.state.room.habitacion.id} 
                                codHab={this.state.room.habitacion.codigo}
                                onConfirm={this.doPost.bind(this)}
                            />
                        </Container>
                        : <></>
                    }
                    <br />
                </div>
            ) 
    }

}

export default Singleroom