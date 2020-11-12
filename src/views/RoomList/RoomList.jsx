import React, {Component} from 'react'
import RoomService from '../../services/room.service'
import {
    Container,
    Row,
    Col
  } from "reactstrap";
import Button from 'reactstrap/lib/Button';
import Formulario from '../../components/Searchs/MainSearch/FormularioPrincipal.jsx'
import { isDateBetween } from '../../services/date.service';
import { now } from '../../services/date.service'

class RoomList extends Component {
    constructor(props) {
        super(props)
        this.state = {
            rooms: [],
            filter: {
                price_from: '',
                price_to: '',
                type: '',
                date_from: now,
                date_to: now,   
            },
            filterVisible: false,
        }
        this.handleEvent = this.handleEvent.bind(this);
        this.onFilterChange = this.onFilterChange.bind(this);
    }

    componentDidMount(){
        RoomService.getAllRooms().then((res) => {
            this.setState({ rooms : res.data });
            console.log(res.data);
        });

         const showFilter = () => {
            if (
                document.documentElement.scrollTop > 150 ||
                document.body.scrollTop > 150
            ) {
                this.setState({filterVisible: true});
            } else if (
                document.documentElement.scrollTop < 400 ||
                document.body.scrollTop < 400
            ) {
                this.setState({filterVisible: false});
            }
        };
        window.addEventListener("scroll", showFilter);
        return function cleanup() {
            window.removeEventListener("scroll", showFilter);
        };
    }

    handleEvent(id){
        this.props.history.push({
            pathname: `/showRoomById/${id}`,
            state: {
                dateIn: this.state.filter.date_from,
                dateOut: this.state.filter.date_to,
            }
        })
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
                        {roomsFiltered.length!=0 ?
                            roomsFiltered.map(
                                rooms => 
                                <Container key={rooms.id} className="listaRoomWithImg">
                                    <Row>
                                        <Col lg={5}><br/>
                                            <img src={require(`../../assets/img/${rooms.codigo}.jpg`)} alt="imagen1"/>
                                        </Col><br/>
                                        <Col lg={4} className="roomInfo">
                                            <Row className="roomName">
                                                {rooms.codigo}
                                            </Row>
                                            <Row className="roomDescription">
                                                {rooms.descripcion.substring(0,50)}...
                                            </Row>
                                        </Col>
                                        <Col lg={3} >
                                            <Row className="roomPrice">
                                                €{rooms.precio}<span className="mainnight">/night</span>
                                            </Row>
                                            <Row className="bookButton">
                                                <Button name="bookRoom" style={{background:  "rgb(145, 114, 65)"}} onClick={() => this.handleEvent(rooms.id)}>Book now!</Button>
                                            </Row>
                                        </Col>
                                    </Row>
                                    <br></br>
                                </Container>
                            )
                            :
                            <Container className="noHabs">
                                <Row>
                                    Nos disponemos de habitaciones con el criterio seleccionado.<br/>
                                    Disculpe las molestias
                                </Row>
                            </Container>
                        }
                    <br/>       
                    </div>
                </Col>

                <Col lg={3}>
                    {this.state.filterVisible?<Formulario className="formPrincipal" onFilterChange={this.onFilterChange} /> : <></>}
                </Col>
            </Row>
        )
    }
}
export default RoomList