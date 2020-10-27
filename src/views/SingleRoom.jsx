import React, {Component} from 'react'
import RoomService from '../services/roomService'
import IndexNavbar from "components/Navbars/IndexNavbar.js";
import {
    Container,
    Row,
    Col
  } from "reactstrap";

  class Singleroom extends Component {
    constructor(props) {
        super(props)
        this.state = {
            room: {},
        }
    }

    componentDidMount(){
        RoomService.getRoom(this.props.match.params.id).then((res) => {
            this.setState({ room : res.data });
        });
    }

    render(){
        return(
            <div>
                <IndexNavbar />
                {
                        <Container key={this.state.room.id} className="listaRoomWithImg"><br/>
                            <Row>
                                <Col lg={12}>
                                    <img src={require(`../assets/img/${this.state.room.codigo!==undefined ? this.state.room.codigo : "blank"}.jpg`)} alt="imagen1"/>
                                </Col><br/>
                            </Row>
                            <Row>
                                <Col lg={12} className="roomInfo">
                                        <Row>
                                            <Col lg={3}>
                                                <Row className="roomNameFinal">{this.state.room.codigo}</Row>
                                                <hr/>
                                                <Row className="roomPrice">{this.state.room.precio}€<span>/night</span></Row>
                                            </Col>
                                            <Col lg={9} className="roomDescriptionFinal">
                                                {this.state.room.descripcion}
                                            </Col>
                                        </Row>
                                </Col>
                                </Row>
                            <br></br>
                        </Container>
                    
                }
            <br/>       
            </div>
        )
    }

  }

  export default Singleroom
