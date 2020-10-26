import React, {Component} from 'react'
import RoomService from '../services/roomService'
import {
    Container,
    Row,
    Col
  } from "reactstrap";

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
                                <Col lg={3} className="align-me roomDescription">
                                    {rooms.descripcion}
                                </Col>
                                <Col lg={4} className="roomPrice">
                                    {rooms.precio}€
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