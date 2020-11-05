import React from 'react'
import FormularioPrincipal from './FormularioPrincipal.jsx'
import DatePicker from 'react-datepicker'
import { shallow, mount } from 'enzyme'
import { now } from '../../../services/date.service'

describe ('MainSearch unit test', () => {
    test('it should render without crashing', () =>{
        const wrapper = shallow (<FormularioPrincipal />);
        expect(wrapper).toMatchSnapshot();
    });

    test('should have required inputs', () => {
        const wrapper = shallow (<FormularioPrincipal />);
        expect(wrapper.find('input[name="price_from"]')).toHaveLength(1);
        expect(wrapper.find('input[name="price_to"]')).toHaveLength(1);
        expect(wrapper.find('input[name="type"]')).toHaveLength(1);
    })

    test('should run onChange PRICE FROM with the new State', () => {
        const mockUpdateFilter = jest.fn();
        const wrapper = shallow (<FormularioPrincipal onFilterChange={mockUpdateFilter}/>);
        wrapper.find('input[name="price_from"]').simulate('change', {target:{name:'price_from', value: '100'}});
        expect (mockUpdateFilter).toHaveBeenCalledWith({
            price_from: '100',
            price_to: '',
            type: '',
            date_from: now,
            date_to: now,
        })
    })

    test('should run onChange PRICE TO with the new State', () => {
        const mockUpdateFilter = jest.fn();
        const wrapper = shallow (<FormularioPrincipal onFilterChange={mockUpdateFilter}/>);
        wrapper.find('input[name="price_to"]').simulate('change', {target:{name:'price_to', value: '200'}});
        expect (mockUpdateFilter).toHaveBeenCalledWith({
            price_from: '',
            price_to: '200',
            type: '',
            date_from: now,
            date_to: now,
        })
    })

    test('should run onChange TYPE with the new State', () => {
        const mockUpdateFilter = jest.fn();
        const wrapper = shallow (<FormularioPrincipal onFilterChange={mockUpdateFilter}/>);
        wrapper.find('input[name="type"]').simulate('change', {target:{name:'type', value: 'Simple'}});
        expect (mockUpdateFilter).toHaveBeenCalledWith({
            price_from: '',
            price_to: '',
            type: 'Simple',
            date_from: now,
            date_to: now,
        })
    })

})