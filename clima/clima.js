const axios = require('axios');

const get_clima = async(lat, lng) => {

    let respuesta = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&units=metric&appid=8436cf68218ff39ce4cc3d4bb5a314a5`);

    return respuesta.data.main.temp;

};

module.exports = {
    get_clima
}