const lugar = require('./lugar/lugar');
const clima = require('./clima/clima');
const argv = require('yargs').options({
    direccion: {
        alias: 'd',
        desc: 'Dirección de la ciudad para obtener el clima',
        demand: true
    }
}).argv;

let get_info = async(direccion) => {

    try {

        let ciudad = await lugar.get_ciudad(direccion);
        let temp = await clima.get_clima(ciudad.lat, ciudad.lng);

        return `La temperatua en ${ciudad.direccion} es de ${temp}º.`;

    } catch (error) {

        return `No fue posible determinar la temperatura de [${direccion}].\n${error}`;

    }

};

get_info(argv.direccion)
    .then(msg => console.log(msg))
    .catch(e => console.error(e));