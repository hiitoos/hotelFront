import {isDateBetween} from '../date.service'

describe ('DateService unit test', () =>{
    test('should return true', () => {
        let resp =  isDateBetween ('2020-11-20', new Date('2020-11-19'), new Date('2020-11-21'));
        expect(resp).toBeTruthy();
    })

    test('should return false', () => {
        let resp =  isDateBetween ('2020-11-12', new Date('2020-11-01'), new Date('2020-11-02'));
        expect(resp).toBeFalsy();
    })

})