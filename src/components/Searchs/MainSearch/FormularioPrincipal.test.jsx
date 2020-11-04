import React from 'react'
import DatePicker from "react-datepicker";
import FormularioPrincipal from './FormularioPrincipal.jsx'
import {shallow, mount} from 'enzyme'
import { now } from '../../../services/date.service'
import moment from 'moment'

describe ('Search unit test', () => {
    test('it should render without crashing', () =>{
        const wrapper = shallow (<FormularioPrincipal />);
        expect(wrapper).toMatchSnapshot();
    });

    test('should have required inputs', () => {
        const wrapper = shallow (<FormularioPrincipal />);
        const wrapper2 = mount (<DatePicker />);
        expect(wrapper.find('input[name="price_from"]')).toHaveLength(1);
        expect(wrapper.find('input[name="price_to"]')).toHaveLength(1);
        expect(wrapper.find('input[name="type"]')).toHaveLength(1);
    })

    test('should run onChange with the new State', () => {
        const updateFilter = jest.fn();
        const wrapper = shallow (<FormularioPrincipal onFilterChange={updateFilter}/>);
        wrapper.find('input[name="price_from"]').simulate('change', {target:{name:'price_from', value: '100'}});
        expect (updateFilter).toHaveBeenCalledWith({
            price_from: '100',
            price_to: '',
            type: '',
            guest_from: '',
            date_from: now,
            date_to: now,
        })
    })
    
})