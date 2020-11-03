import React, {Component} from 'react'
import RoomService from '../services/room.service'
import {
    Container,
    Row,
    Col
  } from "reactstrap";
import Button from 'reactstrap/lib/Button';
import Formulario from '../components/FormularioPrincipal.jsx'
import { isDateBetween } from '../services/date.service';


class RoomList extends Component {
    constructor(props) {
        super(props)
        this.state = {
            rooms: [],
            filter: {
                price_from: '',
                price_to: '',
                type: '',
                guest_from: '',
                date_from: '',
                date_to: '',
            },
        }
        this.handleEvent = this.handleEvent.bind(this);
        this.onFilterChange = this.onFilterChange.bind(this);
    }

    componentDidMount(){
        RoomService.getAllRooms().then((res) => {
            this.setState({ rooms : res.data });
        });
    }

    handleEvent(id){
        this.props.history.push(`/showRoomById/${id}`);
    }

    onFilterChange(data){
        this.setState({filter: data});
    }

    render(){
        const roomsFiltered = this.state.rooms.filter((room) => {
            let validPricePerNightFrom = this.state.filter.price_from ?
                room.precio >= +this.state.filter.price_from :
                true;
            let validPricePerNightTo = this.state.filter.price_to ?
                room.precio <= +this.state.filter.price_to :
                true;
            let validGuest = this.state.filter.guest_from ?
                room.numpersona >= +this.state.filter.guest_from :
                true;
            let validType = room.tipoModel.nombre.includes(this.state.filter.type);

            let validDate = !room.fechasOcupadas.some(
                (date) =>
                isDateBetween(date, this.state.filter.date_from, this.state.filter.date_to),
            );

            return (
                validPricePerNightFrom &&
                validPricePerNightTo &&
                validGuest &&
                validType &&
                validDate
            );

        });

        return(
            <Row className="listRooms">
                <Col lg={9}>
                    <div>
                        {
                            //this.state.rooms.map(
                            roomsFiltered.map(
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
                                                <Button style={{background:  "rgb(145, 114, 65)"}} onClick={() => this.handleEvent(rooms.id)}>Book now!</Button>
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
                    <Formulario onFilterChange={this.onFilterChange}/>
                </Col>
            </Row>
        )
    }
}
export default RoomList