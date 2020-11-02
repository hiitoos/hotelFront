import axios from 'axios';
const API_BASE_URL = "http://localhost:8080/api";
class PriceService {
    async getPrice(dataIn) {
        let resp;
        let config = {
            method: 'post',
            url: (API_BASE_URL + '/calculaPrecio'),
            headers: {
                'Access-Control-Allow-Origin': '*',
                'Content-Type': 'application/json',
            },
            data: dataIn
        };
        await axios(config)
            .then((response) => {
                resp = response.data;
            })
            .catch(function (error) {
                console.log(error);
            });
        return resp;
    }

}
export default new PriceService()