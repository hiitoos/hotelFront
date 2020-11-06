import React from 'react'
import {shallow} from 'enzyme'
import RoomList from './RoomList.jsx'

// function getRooms () {
//     const data = [
//         {
//             codigo: "test1",
//             descripcion: "descripcion test1",
//             fechasOcupadas: ["2020-11-20", "2020-11-21"],
//             id: 1,
//             numpersonas: 1,
//             precio: 50,
//             tipoModel: {
//                 id: 1,
//                 nombre: "TestSimple",
//                 descipcion: "TestSimple"
//             }
//         },
//         {
//             codigo: "test2",
//             descripcion: "descripcion test2",
//             fechasOcupadas: ["2020-11-22", "2020-11-23"],
//             id: 2,
//             numpersonas: 4,
//             precio: 150,
//             tipoModel: {
//                 id: 2,
//                 nombre: "TestDoble",
//                 descipcion: "TestDoble"
//             }
//         },
//     ];
//     return data;
// };

describe('RoomList unit test', () => {
    test('should have required items', () => {
        const wrapper = shallow (<RoomList />);
        let clase = wrapper.find('.listRooms');
        expect(clase).toHaveLength(1)
    })

})