import axios from 'axios';
const API_BASE_URL = "http://localhost:8080/api";
class HabitacionService{
    async getAllRooms(){
        try{
            const resp = await axios.get( API_BASE_URL + '/showAllRooms')
            return await resp.data;
        }
        catch(e){
            console.log("API caída, contacte con ADMIN")
            return []
        }
    }

    async getRoom(id){
        return await axios.get( API_BASE_URL + '/showRoomById/'+id);
    }

}
export default new HabitacionService()