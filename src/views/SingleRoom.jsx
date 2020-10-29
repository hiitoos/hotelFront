import React, {Component} from 'react'
import RoomService from '../services/roomService'
import IndexNavbar from "components/Navbars/IndexNavbar.js";
import {
Container,
Row,
Col
} from "reactstrap";
import Formulario from "components/Formulario.jsx"

class Singleroom extends Component {
    constructor(props) {
        super(props)
        this.state = {
            room: {},
        }
    }

    componentDidMount() {
        RoomService.getRoom(this.props.match.params.id).then((res) => {
            this.setState({
                room: res.data
            });
        });
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
                                <img src={require(`../assets/img/${this.state.room.habitacion.codigo!==undefined ? this.state.room.habitacion.codigo : "blank"
                                    }.jpg`)} alt="imagen1" />
                                </Col><br />
                            </Row>
                            <Row>
                                <Col lg={12} className="roomInfo">
                                <Row>
                                    <Col lg={4}>
                                    <Row className="roomNameFinal">{this.state.room.habitacion.codigo}</Row>
                                    <hr />
                                    <Row className="roomPrice"><span className="desde">Desde</span><br/>{this.state.room.habitacion.precio}€<span className="precio">/night</span></Row>
                                    </Col>
                                    <Col lg={8} className="roomDescriptionFinal">
                                    {this.state.room.habitacion.descripcion}
                                    </Col>
                                </Row>
                                </Col>
                            </Row>
                            <br />
                            <Formulario fechas={this.state.room.fechas} idHab={this.state.room.habitacion.id} />
                        </Container>
                        : <></>
                    }
                    <br />
                </div>
            ) 
    }

}

export default Singleroom