import axios from 'axios';
const API_BASE_URL = "http://localhost:8080/api";
class ReservaService{
    async getAllBookings(){
        return await axios.get( API_BASE_URL + '/showAllBookings');
    }

}
export default new ReservaService ()