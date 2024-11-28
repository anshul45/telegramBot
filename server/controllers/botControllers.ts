import { Message } from "node-telegram-bot-api"
import bot from "../botConfig/bot"


const getWeather = (city:string) => {
const weatherData = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${process.env.WEATHER_API}`
return weatherData;
}

export const startBot = (msg:Message) => {
    const chatId = msg.chat.id;
    const name = msg.chat.first_name;
bot.sendMessage(chatId,` Hi ${name} Welcome to WeatherBot!

I can send you the current weather of any city around the world. 

Just send me the city's name here!

Example: Delhi

`)
}

export const sendWeatherUpdate = (msg:Message) => {
    if (msg.text !== "/start") {
        const chatId = msg.chat.id;
        if(msg.text)
        {
        const data = getWeather(msg.text)

        if(data) {
            console.log(data)
            bot.sendMessage(chatId,"here is ur weather update")
        }
        else{
            bot.sendMessage(chatId,"An error occurred. Please make sure that you have entered the correct city")
        }

        }
        
    }
}



// bot.sendMessage(chatId,"Please subscribe to @whbots to continue using the bot. Thank you.")