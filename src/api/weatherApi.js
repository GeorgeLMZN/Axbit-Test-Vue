import DB from '../db/db'

const API_KEY = "6cf475f4c7ee868891dde1b39cd3f0e7";


const getWeather = city => fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&lang=en&units=metric&appid=${API_KEY}`)
                                .then(r => r.json())


export const filteredData = async (city) => {
    const data = await getWeather(city);
    const resObj = {
                    weather: data.weather[0].description,
                    windSpeed: data.wind.speed, 
                    temp: data.main.temp,  
                    ico:'https://openweathermap.org/img/w/' + data.weather[0].icon + '.png',
                    city: city,
                    main: data.weather[0].main,
                    bg: DB[data.weather[0].main],
                }
   
    return resObj;
}



