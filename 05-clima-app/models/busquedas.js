//File System para guardar archivos
const fs = require('fs');
const axios = require('axios');

class Busquedas {

    historial = []
    dbPath = './db/database.json';

    constructor() {
        //Leer DB si existe
        this.leerDB();
    }

    get historialCapitalizado() {
        return this.historial.map( lugar => {
            let palabras = lugar.split(' '); //Cortar las palabras con un espacio
            palabras = palabras.map( p => p[0].toUpperCase() + p.substring(1) );

            return palabras.join( ' ' ) //Unir de nuevo el arreglo con un espacio
        }) 
    }

    get paramsMapbox(){
        return {
            'access_token' : process.env.MAPBOX_KEY,
            'limit': 5,
            'language' : 'es'
        }
    }


    get paramsOpenweather(){
        return {
            appid: process.env.OPENWEATHER_KEY,
            units: 'metric',
            lang: 'es'
        }
    }


    async ciudad( lugar = '' ){
        try {
            //Petición http
            const instance = axios.create({
                baseURL: `https://api.mapbox.com/geocoding/v5/mapbox.places/${ lugar }.json`,
                params: this.paramsMapbox
            });

            const resp = await instance.get();
            return resp.data.features.map( lugar => ({ //Regresar un objeto de forma implicita
                id: lugar.id,
                nombre: lugar.place_name,
                lng: lugar.center[0],
                lat: lugar.center[1]
            })); //retornar los datos que necesito
        } catch (error) {
            return [];
        }
    } 


    async climaLugar( lat, lon ){
        try {
            //Instance axios.create()
            const instance = axios.create({
                baseURL: `https://api.openweathermap.org/data/2.5/weather`,
                params: { ...this.paramsOpenweather, lat, lon } //Desestructuración de los parámetros y se le envía los otros argumentos
            })
            //resp.data
            const resp = await instance.get();
            const { weather, main} = resp.data;

            return {
                desc: weather[0].description, //Primero viene en un arreglo y luego un objeto
                temp: main.temp,
                temp_min: main.temp_min,
                temp_max: main.temp_max  
            }
        } catch (error) {
            console.log( error );
        }
    }


    agregarHistorial( lugar = '' ){
        //Validación para evitar duplicados
        if ( this.historial.includes( lugar.toLocaleLowerCase() )){
            return;
        }
        this.historial = this.historial.splice(0,5); //Para cortar el arreglo en el historial hasta 6 registros
        this.historial.unshift( lugar ); //Agregar el lugar en la primera posición de la lista
        
        //Guardar en DB 
        this.guardarDB();
    }

    guardarDB(){
        const payload = {
            historial: this.historial
        }
        fs.writeFileSync( this.dbPath, JSON.stringify( payload ) ); 
    }

    leerDB(){
        //Debe de existir...
        if ( !fs.existsSync( this.dbPath) ){
            return null;
        } 
        //Si existe 
        const info  = fs.readFileSync( this.dbPath, { encoding: 'utf-8' } );
        const data = JSON.parse( info ); //Tomar ese objeto que es un string y parsearlo para que regrese a ser un objeto JSON
        this.historial = data.historial;
    }

}

module.exports = Busquedas;
