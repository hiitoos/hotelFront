import axios from 'axios';
const API_BASE_URL = "http://localhost:8080/api";
class HabitacionService{
    async getAllRooms(){
        return await axios.get( API_BASE_URL + '/showAllRooms');
    }

}
export default new HabitacionService()