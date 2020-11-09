import axios from 'axios';
const API_BASE_URL = "http://localhost:8080/api";
class ReservaService{

  async getBookingById(id){
      return await axios.get( API_BASE_URL + `/showBookingById/${id}`);
    }

    async newBooking(dataIn){
            let resp;
            let config = {
              method: 'post',
              url: (API_BASE_URL + '/newBooking'),
              headers: { 
                'Access-Control-Allow-Origin':'*',
                'Content-Type': 'application/json', 
              },
              data : dataIn
            };
            await axios(config)
              .then((response) => {
                  resp = response.data
              })
              .catch(function (error) {
                console.log(error);
              });
            return resp;
    }
}
export default new ReservaService ()