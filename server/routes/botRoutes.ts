import bot from "../botConfig/bot";
import { sendWeatherUpdate, startBot, subscribe, unsubscribe } from "../controllers/botControllers";

export const botRoutes = () => {

    bot.onText(/\/start/,startBot)
    bot.onText(/\/subscribe/,subscribe)
    bot.onText(/\/unsubscribe/,unsubscribe)
    bot.on("message",sendWeatherUpdate)
}