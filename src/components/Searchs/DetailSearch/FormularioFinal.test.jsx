import React from 'react'
import FormularioFinal from './FormularioFinal.jsx'
import {shallow} from 'enzyme'


describe ('FinalSearch unit test', () => {
    test.skip('it should render without crashing', () =>{
        const wrapper = shallow (<FormularioFinal />);
        expect(wrapper).toMatchSnapshot();
    });

    test.skip('should have required inputs', () => {
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

})

