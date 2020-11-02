import React, {Component} from 'react'
import RoomService from '../services/room.service'
import {
    Container,
    Row,
    Col
  } from "reactstrap";
import Button from 'reactstrap/lib/Button';
import Formulario from '../components/FormularioPrincipal.jsx'

class RoomList extends Component {
    constructor(props) {
        super(props)
        this.state = {
            rooms: []
        }
        this.handleEvent = this.handleEvent.bind(this);
    }

    componentDidMount(){
        RoomService.getAllRooms().then((res) => {
            this.setState({ rooms : res.data });
        });
    }

    handleEvent(id){
        this.props.history.push(`/showRoomById/${id}`);
    }

    render(){
        return(
            <Row className="listRooms">
                <Col lg={9}>
                    <div>
                        {
                            this.state.rooms.map(
                                rooms => 
                                <Container key={rooms.id} className="listaRoomWithImg">
                                    <Row>
                                        <Col lg={5}><br/>
                                            <img src={require(`../assets/img/${rooms.codigo}.jpg`)} alt="imagen1"/>
                                        </Col><br/>
                                        <Col lg={4} className="roomInfo">
                                            <Row className="roomName">
                                                {rooms.codigo}
                                            </Row>
                                            <Row className="roomDescription">
                                                {rooms.descripcion}
                                            </Row>
                                        </Col>
                                        <Col lg={3} >
                                            <Row className="roomPrice">
                                                €{rooms.precio}<span className="mainnight">/night</span>
                                            </Row>
                                            <Row className="bookButton">
                                                <Button onClick={() => this.handleEvent(rooms.id)}>Book now!</Button>
                                            </Row>
                                        </Col>
                                    </Row>
                                    <br></br>
                                </Container>
                            )
                        }
                    <br/>       
                    </div>
                </Col>
                <Col lg={3}>
                    <Formulario rooms={this.state.rooms}/>
                </Col>
            </Row>
        )
    }
}
export default RoomList