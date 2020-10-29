import React, { Component } from 'react';
import RoomService from '../services/roomService.js'
// import Carousel from "../views/index-sections/Carousel.js";
import IndexNavbar from "components/Navbars/IndexNavbar.js";
import '../assets/css/now-ui-kit.css'

class ListRoomComponent extends Component {
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
    render() {
        return (
            <div>
                <IndexNavbar />
                <h2 className = "text-center">Lista de HABITACIONES</h2>
                <div className = "Row" >
                    <table className = "table table-striped table-bordered">
                    <thead>
                        <tr>
                            <th>Codigo</th>
                            <th>Descripcion</th>
                            <th>Precio</th>
                            <th>Tipo</th>
                            <th>Capacidad</th>
                        </tr>
                    </thead>
                    <tbody>
                                {
                                    this.state.rooms.map(
                                        rooms => 
                                        <tr key = {rooms.id}>
                                             <td> {rooms.codigo} </td>   
                                             <td> {rooms.descripcion} </td>   
                                             <td> {rooms.precio}</td>
                                             <td> {rooms.tipoModel.nombre}</td>
                                             <td> {rooms.numpersonas}</td>                            
                                        </tr>
                                    )
                                }
                            </tbody>
                        </table>
                 </div>
            </div>
        )
    }
}

export default ListRoomComponent