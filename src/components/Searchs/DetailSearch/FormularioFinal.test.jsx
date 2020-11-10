import React from 'react'
import FormularioFinal from './FormularioFinal.jsx'
import Modal from '../../ModalBooking/ModalBooking'
import {shallow} from 'enzyme'
import {now} from '../../../services/date.service'


describe ('FinalSearch unit test', () => {
    test('it should render without crashing', () =>{
        const wrapper = shallow (<FormularioFinal />);
        expect(wrapper).toMatchSnapshot();
    });

    test('should have required inputs', () => {
        const wrapper = shallow (<FormularioFinal/>);
        expect(wrapper.find('[name="bookIt"]')).toHaveLength(1);
        expect(wrapper.find('[name="datePicker_in"]')).toHaveLength(1);
        expect(wrapper.find('[name="datePicker_out"]')).toHaveLength(1);
        expect(wrapper.find('[name="modal"]')).toHaveLength(1);
    })

    test('should simulate click on button to call a PROP Function and SHOW MODAL', () => {
        const mock = jest.fn();
        const wrapper = shallow (<FormularioFinal calcPrecio={mock}/>);
        const button = wrapper.find('[name="bookIt"]');
        button.simulate('click');
        expect(mock).toHaveBeenCalledTimes(1);
        expect(wrapper.find('.modal')).toHaveLength(1);
    })

    test('should call "CONFIRM" function on bookNow modal button', () => {
        const mock = jest.fn();
        const wrapper = shallow (<Modal precio={0} onConfirm={mock}/>);
        const button = wrapper.find('[name="bookNow"]')
        button.simulate('click');
        expect(mock).toHaveBeenCalledTimes(1);
    })
})

