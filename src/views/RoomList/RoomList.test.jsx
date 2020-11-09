import React from 'react'
import {shallow} from 'enzyme'
import RoomList from './RoomList.jsx'
import Formulario from 'components/Searchs/MainSearch/FormularioPrincipal'

describe('RoomList unit test', () => {
    test('should have required items', () => {
        const wrapper = shallow (<RoomList />);
        let clase = wrapper.find('.listRooms');
        expect(clase).toHaveLength(1)
    })

    test.skip('should spy handleEvent function and be called', () => {
        const wrapper = shallow (<RoomList/>)
        const spy = jest.spyOn(wrapper.instance(), 'handleEvent')
        const button = wrapper.find('[name="bookRoom"]')
        button.simulate('click');
        expect(spy).toBeCalled();
        //ESTA FUNCION NO SE PUEDE PROBAR PORQUE EL BOTON NO SE HA CREADO, 
        //TIENE QUE HACER EL MAP DE LOS DATOS QUE HA RECOGIDO DE LA PETICION
        //DE AXIOS (RoomList.jsx / componenDidMount() / Ln: 31-36)
    })

    test('should call onFilterChange when PRICE_FROM value\'s change', () => {
        const wrapper = shallow (<RoomList />)
        const spy = jest.spyOn(wrapper.instance(), 'onFilterChange')
        const component = shallow (<Formulario onFilterChange = {spy}/>)
        component.find('[name="price_from"]').simulate('change', { target: { name: 'price_from', value: 50 }});
        expect(spy).toBeCalled();
    })

    test('should call onFilterChange when PRICE_TO value\'s change', () => {
        const wrapper = shallow (<RoomList />)
        const spy = jest.spyOn(wrapper.instance(), 'onFilterChange')
        const component = shallow (<Formulario onFilterChange = {spy}/>)
        component.find('[name="price_to"]').simulate('change', { target: { name: 'price_to', value: 500 }});
        expect(spy).toBeCalled();
    })

    test('should call onFilterChange when TYPE value\'s change', () => {
        const wrapper = shallow (<RoomList />)
        const spy = jest.spyOn(wrapper.instance(), 'onFilterChange')
        const component = shallow (<Formulario onFilterChange = {spy}/>)
        component.find('[name="type"]').simulate('change', { target: { name: 'type', value: 'Simple' }});
        expect(spy).toBeCalled();
    })
})