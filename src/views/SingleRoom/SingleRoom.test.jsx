import React from 'react'
import {shallow} from 'enzyme'
import SingleRoom, { calcPrecio } from './SingleRoom.jsx'
import FormularioFinal from 'components/Searchs/DetailSearch/FormularioFinal'
import Modal from 'components/ModalBooking/ModalBooking'

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

    test.skip('should spy doPost function and be called', () => {
        const wrapper = shallow (<SingleRoom match={match}/>)
        const spy = jest.spyOn(wrapper.instance(), 'doPost')
        const component = shallow (<FormularioFinal calcPrecio={jest.fn()} onConfirm = {spy}/>)
        const spyComponent = jest.spyOn(component.instance(), 'confirm')
        component.find('[name="bookIt"]').simulate('click');
        const subComponent = shallow (<Modal precio={0.00} onConfirm={spyComponent}/>)
        subComponent.find('[name="bookNow"]').simulate('click');
        expect(spy).toBeCalled();
    })

    test('should spy calcPrecio function and be called', () => {
        const wrapper = shallow (<SingleRoom match={match}/>)
        const spy = jest.spyOn(wrapper.instance(), 'calcPrecio')
        const component = shallow (<FormularioFinal calcPrecio = {spy}/>)
        component.find('[name="bookIt"]').simulate('click');
        expect(spy).toBeCalled();
    })
})