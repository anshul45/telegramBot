
import TelegramBot, { Message } from "node-telegram-bot-api";
import { sendWeatherUpdate, startBot, subscribe, unsubscribe } from "../controllers/botControllers";
export const botRoutes = async(bot:TelegramBot) => {
    
    
    bot.onText(/\/start/, (msg: Message) => startBot(bot, msg));
    bot.onText(/\/subscribe/,(msg: Message) => subscribe(bot, msg))
    bot.onText(/\/unsubscribe/,(msg: Message) => unsubscribe(bot, msg))
    bot.on("message",(msg: Message) => sendWeatherUpdate(bot, msg))
}