import PriceService from '../price.service'
import axios from 'axios'

jest.mock('axios');

const dataOut = {
    "id":1, 
    "checkIn": new Date(), 
    "checkOut": new Date()
}

describe('PriceService unit test', () => {
    test('should return ', () =>{
        axios.get.mockResolvedValue(300);
        PriceService.getPrice(dataOut).then(
            data => expect(data).toEquals(300)
        ).catch((err) => console.log(err))
    })
})