import React from 'react'
import {shallow} from 'enzyme'
import RoomList from './RoomList.jsx'
import Formulario from 'components/Searchs/MainSearch/FormularioPrincipal'

describe('RoomList unit test', () => {
    test('should have required items', () => {
        let mock = [];     
        const wrapper = shallow (<RoomList  rooms={mock}/>);
        let clase = wrapper.find('.listRooms');
        expect(clase).toHaveLength(1)
    })

    test('should call onFilterChange when PRICE_FROM value\'s change', () => {
        let mock = [];     
        const wrapper = shallow (<RoomList  rooms={mock}/>)
        const spy = jest.spyOn(wrapper.instance(), 'onFilterChange')
        const component = shallow (<Formulario onFilterChange = {spy}/>)
        component.find('[name="price_from"]').simulate('change', { target: { name: 'price_from', value: 50 }});
        expect(spy).toBeCalled();
    })

    test('should call onFilterChange when PRICE_TO value\'s change', () => {
        let mock = [];     
        const wrapper = shallow (<RoomList  rooms={mock}/>)
        const spy = jest.spyOn(wrapper.instance(), 'onFilterChange')
        const component = shallow (<Formulario onFilterChange = {spy}/>)
        component.find('[name="price_to"]').simulate('change', { target: { name: 'price_to', value: 500 }});
        expect(spy).toBeCalled();
    })

    test('should call onFilterChange when TYPE value\'s change', () => {
        let mock = [];     
        const wrapper = shallow (<RoomList  rooms={mock}/>)
        const spy = jest.spyOn(wrapper.instance(), 'onFilterChange')
        const component = shallow (<Formulario onFilterChange = {spy}/>)
        component.find('[name="type"]').simulate('change', { target: { name: 'type', value: 'Simple' }});
        expect(spy).toBeCalled();
    })

    test('should have 0 rooms', () =>{
        let mock = [];     
        const wrapper = shallow (<RoomList rooms={mock}/>)
        const componentInstance = wrapper.instance();
        componentInstance.componentDidMount();
        expect(wrapper.state('rooms')).toHaveLength(0);        
    })

    test('should have 1 room', () =>{
        let mock = [
            {
                codigo: "Gaudí",
                descripcion: "Habitación moderna",
                fechasOcupadas: [ "2020-11-24", "2020-11-25", "2020-11-26"],
                id: 1,
                numpersonas: 2,
                precio: 300,
                tipoModel: {
                    descripcion: "Simple",
                    id: 2,
                    nombre: "Simple"
                }
            }
        ]
        const wrapper = shallow (<RoomList rooms={mock}/>)
        const componentInstance = wrapper.instance();
        componentInstance.componentDidMount();
        expect(wrapper.state('rooms')).toHaveLength(1);        
    })
})