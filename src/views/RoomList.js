import React, {Component} from 'react'
import RoomService from '../services/roomService'
import {
    Container,
    Row,
    Col
  } from "reactstrap";
import Button from 'reactstrap/lib/Button';
import { Redirect } from 'react-router-dom/cjs/react-router-dom.min';

class RoomList extends Component {
    constructor(props) {
        super(props)
        this.state = {
            rooms: []
        }
    }
    componentDidMount(){
        RoomService.getAllRooms().then((res) => {
            this.setState({ rooms : res.data });
        });
    }
    render(){
        return(
            <div>
                {
                    this.state.rooms.map(
                        rooms => 
                        <Container key={rooms.id} className="listaRoomWithImg">
                            <Row>
                                <Col lg={5}>
                                    <img src={require(`../assets/img/${rooms.codigo}.jpg`)} alt="imagen1"/>
                                </Col>
                                <Col lg={3} className="roomInfo">
                                    <Row className="roomName">
                                        {rooms.codigo}
                                    </Row>
                                    <Row className="roomDescription">
                                        {rooms.descripcion}
                                    </Row>
                                </Col>
                                <Col lg={4} >
                                    <Row className="roomPrice">
                                        €{rooms.precio}<span>/night</span>
                                    </Row>
                                    <Row className="bookButton">
                                        {/* <Button onClick={`/showRoomById/${rooms.id}`}>Book now!</Button> */}
                                        <Button onClick="">Book now!</Button>
                                    </Row>
                                </Col>
                            </Row>
                            <br></br>
                        </Container>
                    )
                }
            <br/>       
            </div>
        )
    }
}
export default RoomList