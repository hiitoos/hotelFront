import React, {Component} from 'react'
import RoomService from '../../services/room.service'
import BookingService from '../../services/booking.service'
import IndexNavbar from "components/Navbars/IndexNavbar.js";
import {
    Container,
    Row,
    Col
} from "reactstrap";
import PriceService from '../../services/price.service'
import Formulario from "components/Searchs/DetailSearch/FormularioFinal.jsx"
import {now} from 'services/date.service'
class Singleroom extends Component {
    constructor(props) {
        super(props)
        this.state = {
            room: {},
            precioTotal: 0,
        }
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

    calcPrecio = (dataOut) => {
        PriceService.getPrice(dataOut).then(data => {
            this.setState({precioTotal: data})
            console.log("PRECIOTOTAL",this.state.precioTotal)
            return this.state.precioTotal;
        })
   }

    render() {
            return (
                <div className="singleRoom">
                    <IndexNavbar />
                    {
                        this.state.room.habitacion ?
                        <Container key={this.state.room.habitacion.id} className="listaRoomWithImg"><br />
                            <Row>
                                <Col lg={12}>
                                    <img src={require(`../../assets/img/${this.state.room.habitacion.codigo!==undefined
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
                                className="formulario"
                                fechaIn={this.props.location.state!==undefined ? this.props.location.state.dateIn : now}
                                fechaOut={this.props.location.state!==undefined ? this.props.location.state.dateOut : now}
                                fechas={this.state.room.fechas}
                                idHab={this.state.room.habitacion.id}
                                precioTotal={this.state.precioTotal}
                                calcPrecio={this.calcPrecio.bind(this)}
                                codHab={this.state.room.habitacion.codigo}
                                onConfirm={this.doPost.bind(this)}
                            />
                        </Container>
                        :                            
                        <Formulario
                            className="formulario"
                            fechaIn={now}
                            fechaOut={now}
                            fechas={[]}
                            idHab={0}
                            precioTotal={0.00}
                            calcPrecio={this.calcPrecio.bind(this)}
                            codHab={'No1'}
                            onConfirm={this.doPost.bind(this)}
                        />
                    }
                    <br />
                </div>
            )
    }

}

export default Singleroom