import React, { Component, Fragment }  from 'react';
import BookingService from '../services/bookingService'

class ThankYouPage extends Component {
    constructor(props) {
        super(props)
        this.state = {
            booking: [],
            habitacion: [],
        }
    }

    componentDidMount(){
        BookingService.getBookingById(this.props.location.state.reserva).then((res) => {
            this.setState({ booking : res.data });
            this.setState({ habitacion : res.data.habitacion});
        });
    }

    render(){
        return(
            <Fragment>
                ID: {this.state.booking.id}<br/>
                Fecha in: {this.state.booking.fechaIn}<br/>
                Fecha out: {this.state.booking.fechaOut}<br/>
                Precio Final: {this.state.booking.precioTotal}<br/>
                Habitacion: {this.state.habitacion.codigo}<br/>
                Descripcion habitacion: {this.state.habitacion.descripcion}<br/>
                Precio habitacion: {this.state.habitacion.precio}<br/>
            </Fragment>
        )
    }
}

export default ThankYouPage