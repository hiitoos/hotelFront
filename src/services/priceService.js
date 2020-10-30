import axios from 'axios';
const API_BASE_URL = "http://localhost:8080/api";

class PriceService{
    async getPrecio(data){
        let config = {
        method: 'post',
        url:  (API_BASE_URL + '/calculaPrecio'),
        headers: { 
            'Access-Control-Allow-Origin':'*',
            'Content-Type': 'application/json', 
        },
        data : data
        };
        axios(config)
        .then(function (response) {
            return response.data;
        })
        .catch(function (error) {
        console.log(error);
        });
    }

}
export default new PriceService()