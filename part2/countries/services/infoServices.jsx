import axios from 'axios'


const getAllCountryData = () => {
    return axios
        .get('https://studies.cs.helsinki.fi/restcountries/api/all')
        .then(response => response.data)
}

const getWeatherData = (cityName, APIkey) => {
    return axios
        .get(`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${APIkey}&units=metric`)
        .then(response => response.data)
}


export default {
    getAllCountryData,
    getWeatherData
}