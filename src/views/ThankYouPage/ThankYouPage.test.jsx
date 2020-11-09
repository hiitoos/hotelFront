import React from 'react'
import {shallow} from 'enzyme'
import ThankYouPage from './ThankYouPage'

describe('ThankYouPage unit test', () => {

    const mockData = {
        state:{
            reserva:{},
        },
    }

    const mockHistory = {
        push: jest.fn(),
    }

    test('should have required items', () => {
        const wrapper = shallow(<ThankYouPage location={mockData} />);
        expect (wrapper.find(".thankyouFG")).toHaveLength(1);
        expect (wrapper.find(".thankyou")).toHaveLength(1);
        expect (wrapper.find(".idReserva")).toHaveLength(1);
        expect (wrapper.find(".fechas")).toHaveLength(1);
        expect (wrapper.find(".check")).toHaveLength(6);
        expect (wrapper.find(".tyMsg")).toHaveLength(2);
        expect (wrapper.find(".tyBtn")).toHaveLength(1);
    })

    test('should click button', () => {
        const wrapper = shallow(<ThankYouPage location={mockData} history={mockHistory}/>);
        const button = wrapper.find(".tyBtn");
        button.simulate('click');
        expect(mockHistory.push).toHaveBeenCalledTimes(1);

    })
})