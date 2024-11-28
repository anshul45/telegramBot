import bot from "../botConfig/bot";
import { sendWeatherUpdate, startBot } from "../controllers/botControllers";

export const botRoutes = () => {

    bot.onText(/\/start/,startBot)

    bot.on("message",sendWeatherUpdate)
}