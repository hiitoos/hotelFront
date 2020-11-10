import React from 'react'
import {shallow} from 'enzyme'
import ModalBooking from './ModalBooking'

describe('ModalBooking unit test', () => {
    test ('should have required items', () => {
        const wrapper = shallow (<ModalBooking precio={0}/>)
        expect(wrapper.find(".modal")).toHaveLength(1)
        expect(wrapper.find(".modal-header")).toHaveLength(1)
        expect(wrapper.find(".modal-title")).toHaveLength(1)
        expect(wrapper.find(".modal-body")).toHaveLength(1)
        expect(wrapper.find(".modal-footer")).toHaveLength(1)
        expect(wrapper.find('[name="closeBtn"]')).toHaveLength(1)
        expect(wrapper.find('[name="bookNow"]')).toHaveLength(1)
    })
    test('should call Reservar function on click', () => {
        const mock = jest.fn();
        const wrapper = shallow (<ModalBooking precio={0} onConfirm={mock}/>)
        const button = wrapper.find('[name="bookNow"]')
        button.simulate('click')
        expect(mock).toBeCalledTimes(1)
    })
})