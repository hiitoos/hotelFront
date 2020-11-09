import BookingService from '../booking.service'
import axios from 'axios'
import { isExportDeclaration } from 'typescript';

jest.mock('axios');

    const room1 = {
        codigo: "test1",
        descripcion: "descripcion test1",
        fechasOcupadas: ["2020-11-22", "2020-11-23"],
        id: 1,
        numpersonas: 2,
        precio: 150,
        tipoModel: {
            id: 2,
            nombre: "TestDoble",
            descripcion: "TestDoble"
        }
    };
    const room2 = {
        codigo: "test2",
        descripcion: "descripcion test2",
        fechasOcupadas: ["2020-11-22", "2020-11-23"],
        id: 2,
        numpersonas: 4,
        precio: 750,
        tipoModel: {
            id: 2,
            nombre: "TestDoble",
            descripcion: "TestDoble"
        }
    };

describe('BookingService unit test', () =>{
    test('should return roomList', ()=>{
        const rooms = {room1: room1, room2: room2}
        axios.get.mockResolvedValue(rooms);
        BookingService.getAllBookings().then(
            data => expect(data).toEqual(room1)
        )
    })

    test('should return a room', ()=>{
        
    })

    test('should return idBooking', ()=>{
        
    })
})