import axios from 'axios';
const API_BASE_URL = "http://localhost:8080/api";
class ReservaService{
    async getAllBookings(){
        return await axios.get( API_BASE_URL + '/showAllBookings');
    }

    async newBooking(dataIn){
            let data = dataIn
            let config = {
              method: 'post',
              url: (API_BASE_URL + '/newBooking'),
              headers: { 
                'Access-Control-Allow-Origin':'*',
                'Content-Type': 'application/json', 
              },
              data : data
            };
            axios(config)
            .then((response) => {
                console.log("OK")
                return response.status
            })
            .catch(function (error) {
              console.log(error);
            });
    }
}
export default new ReservaService ()