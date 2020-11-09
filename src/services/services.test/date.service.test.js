import {isDateBetween, now} from '../date.service'
import moment from 'moment'

describe ('DateService unit test', () =>{
    test('should return true', () => {
        let resp =  isDateBetween ('2020-11-20', new Date('2020-11-19'), new Date('2020-11-21'));
        expect(resp).toBeTruthy();
    })

    test('should return false', () => {
        let resp =  isDateBetween ('2020-11-12', new Date('2020-11-01'), new Date('2020-11-02'));
        expect(resp).toBeFalsy();
    })

    test('should NOW be NEW DATE', () => {
        expect(moment(now).format("yyyy-MM-DD")).toBe(moment(new Date()).format("yyyy-MM-DD"));
    })

})