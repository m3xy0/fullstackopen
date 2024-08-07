import { useState, useEffect } from 'react';
import infoServices from "../../services/infoServices";

const Weather = ({ oneCountry }) => {
    const [weatherData, setWeatherData] = useState(null);
    const APIkey = import.meta.env.VITE_WEATHER_API_KEY;
    const icon = weatherData ? weatherData.weather[0] : ''
    

    useEffect(() => {
        if (oneCountry.length === 0) {
            setWeatherData(null)
            return;
        }

        const city = oneCountry.capital[0]

        infoServices
            .getWeatherData(city, APIkey)
            .then(weatherData => {
                setWeatherData(weatherData);
            })
            .catch(error => {
                console.error("Error fetching weather data:", error);
            });
    }, [oneCountry]);

    if (!weatherData) {
        return null;
    }

    return (
        <div>
            <p>Temperature: {weatherData.main.temp} Celcius</p>
            <img 
                src={`https://openweathermap.org/img/wn/${icon.icon}@2x.png`}
                alt={icon.description}
                style={{display: 'block', backgroundColor: 'hsl(0, 0%, 90%)', transition: 'background-color 300ms'}}
            />
            <p>Wind: {weatherData.wind.speed} m/s</p>
        </div>
    );
};

export default Weather;

