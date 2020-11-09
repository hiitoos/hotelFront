import React from 'react'
import {shallow} from 'enzyme'
import SingleRoom, { calcPrecio } from './SingleRoom.jsx'
import FormularioFinal from 'components/Searchs/DetailSearch/FormularioFinal'
import now from '../../services/date.service'
import moment from 'moment'

const match = {
    params : {
        codigo: "test2",
        descripcion: "descripcion test2",
        fechasOcupadas: ["2020-11-22", "2020-11-23"],
        id: 2,
        numpersonas: 4,
        precio: 150,
        tipoModel: {
            id: 2,
            nombre: "TestDoble",
            descripcion: "TestDoble"
        }
    }
};

describe('SingleRoom unit test', () => {
    test('should have required items', () => {
        const wrapper = shallow (<SingleRoom match={match}/>);
        expect(wrapper.find('.singleRoom')).toHaveLength(1)
        expect(wrapper.find('.formulario')).toHaveLength(1)
    })

    // test('should spy doPost function and be called', () => {
    //     const mock = jest.fn()
    //     const component = shallow (
    //         <FormularioFinal
    //             fechaIn = {moment(now).format("yyyy-MM-DD")}
    //             fechaOut = {moment(now).format("yyyy-MM-DD")}
    //             fechas = {[]}
    //             idHab = {1}
    //             precioTotal = {120}
    //             codHab = "hab1"
    //             calcPrecio={jest.fn()} 
    //             onConfirm = {mock}
    //         />)
    //     component.find('[name="bookIt"]').simulate('click');
    //     console.log(component.html())
    //     // component.find('[name="bookNow"]').simulate('click');
    //     expect(mock).toBeCalled();
    // })

    test('should spy calcPrecio function and be called', () => {
        const wrapper = shallow (<SingleRoom match={match}/>)
        const spy = jest.spyOn(wrapper.instance(), 'calcPrecio')
        const component = shallow (<FormularioFinal calcPrecio = {spy}/>)
        component.find('[name="bookIt"]').simulate('click');
        expect(spy).toBeCalled();
    })
})