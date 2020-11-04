import React from 'react'
import FormularioFinal from './FormularioFinal.jsx'
import {shallow} from 'enzyme'
import { now } from '../../../services/date.service'

describe ('FinalSearch unit test', () => {
    test('it should render without crashing', () =>{
        const wrapper = shallow (<FormularioFinal />);
        expect(wrapper).toMatchSnapshot();
    });

    test('should have required inputs', () => {
        const fechas = [];
        const wrapper = shallow (<FormularioFinal fechas={fechas}/>);
        
        expect(wrapper.find('input[name="price_from"]')).toHaveLength(1);
        expect(wrapper.find('input[name="price_to"]')).toHaveLength(1);
        expect(wrapper.find('input[name="type"]')).toHaveLength(1);
    })

})