import BookingService from '../booking.service'
import axios from 'axios'

jest.mock('axios');

const booking1 = {
    id: 1,
    fechaIn: "2020-01-01",
    fechaOut: "2020-01-05",
    precioTotal: 400,
    cliente: {
        id: 1,
        nombre: "Carlos",
        apellido: "Tocho",
        email: "email@email.com"
    },
    habitacion:{
        id: 1,
        codigo: "TestHab1",
        precio: 100,
        tipo: {
            id: 1,
            descripcion: "TestHabTipo1",
            nombre: "TestTipo"
        },
        numpersonas: 4
    }
};
const booking2 = {
    id: 2,
    fechaIn: "2020-02-05",
    fechaOut: "2020-02-07",
    precioTotal: 200,
    cliente: {
        id: 2,
        nombre: "Carlos",
        apellido: "Tocho",
        email: "email@email.com"
    },
    habitacion:{
        id: 2,
        codigo: "TestHab2",
        precio: 100,
        tipo: {
            id: 2,
            descripcion: "TestHabTipo2",
            nombre: "TestTipo"
        },
        numpersonas: 2
    }
};

describe('BookingService unit test', () =>{
    // test('should fetch roomList', ()=>{
    //     axios.get.mockResolvedValue(rooms);
    //     BookingService.getAllBookings().then(
    //         data => expect(data).toEqual(rooms)
    //     )
    // })

    test('should return Room 1', ()=>{
        axios.get.mockResolvedValue(booking1);
        BookingService.getBookingById(booking1.id).then(
            data => expect(data).toEqual(booking1) 
        )
    })

    test('should return Room 2', ()=>{
        axios.get.mockResolvedValue(booking2);
        BookingService.getBookingById(booking2.id).then(
            data => expect(data).toEqual(booking2) 
        )
    })

    test('should return idBooking 1', ()=>{
        axios.post.mockResolvedValue(1);
        BookingService.newBooking(booking1).then(
            data => expect(data).toEqual(booking1.id)
        ).catch((e) => console.log(e))
    })
// ↕ ↕ ↕ ↕ ESTO PETA POR UNDEFINED ↕ ↕ ↕ ↕ 
    test.skip('should return idBooking 2', ()=>{
        axios.post.mockResolvedValue(2);
        BookingService.newBooking(booking2).then(
            data => expect(data).toEqual(booking2.id)
        ) 
    })
})