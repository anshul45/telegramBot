import axios from "axios";
import { getApiKey } from "./apiService";

interface WeatherData {
    coord: { lon: number; lat: number };
    weather: { id: number; main: string; description: string; icon: string }[];
    base: string;
    main: {
        temp: number;
        feels_like: number;
        temp_min: number;
        temp_max: number;
        pressure: number;
        humidity: number;
        sea_level?: number;
        grnd_level?: number;
    };
    visibility: number;
    wind: { speed: number; deg: number };
    clouds: { all: number };
    dt: number;
    sys: { type: number; id: number; country: string; sunrise: number; sunset: number };
    timezone: number;
    id: number;
    name: string;
    cod: number;
}

const formatWeatherResponse = (data: WeatherData): string => {
    const {
        name,
        sys: { country, sunrise, sunset },
        main: { temp, feels_like, temp_min, temp_max, humidity, pressure },
        weather,
        wind: { speed },
        clouds: { all: cloudiness },
    } = data;

    const weatherDescription = weather[0]?.description || "No description available";

    // Convert temperature to Celsius
    const tempCelsius = (temp - 273.15).toFixed(1);
    const feelsLikeCelsius = (feels_like - 273.15).toFixed(1);
    const tempMinCelsius = (temp_min - 273.15).toFixed(1);
    const tempMaxCelsius = (temp_max - 273.15).toFixed(1);

    // Format sunrise and sunset time
    const sunriseTime = new Date(sunrise * 1000).toLocaleTimeString("en-US", {
        hour: "2-digit",
        minute: "2-digit",
    });
    const sunsetTime = new Date(sunset * 1000).toLocaleTimeString("en-US", {
        hour: "2-digit",
        minute: "2-digit",
    });

    return `
🌤️ Weather Update for ${name}, ${country}:
- Temperature: ${tempCelsius}°C (Feels like: ${feelsLikeCelsius}°C)
- Min/Max Temp: ${tempMinCelsius}°C / ${tempMaxCelsius}°C
- Weather: ${weatherDescription}
- Humidity: ${humidity}%
- Pressure: ${pressure} hPa
- Wind Speed: ${speed} m/s
- Cloudiness: ${cloudiness}%
- Sunrise: ${sunriseTime}
- Sunset: ${sunsetTime}
    `.trim();
};


  
  

export const getWeatherDetail = async (city: string): Promise<string> => {
    try {
        const weatherKey = await getApiKey("WEATHER");
        if(!weatherKey) throw new Error("Unable to fetch weather  api key. Please try again later.");
        const response = await axios.get<WeatherData>(
            `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${weatherKey.key}`
        );
        return formatWeatherResponse(response.data);
    } catch (error) {
        console.error("Error fetching weather data:", error);
        throw new Error("Unable to fetch weather data. Please check the city name or try again later.");
    }
};
