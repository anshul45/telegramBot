import TelegramBot from "node-telegram-bot-api";
import dotenv from "dotenv"

dotenv.config()

const token = process.env.BOT_TOKEN;


if (!token) {
  throw new Error('Bot token is missing. Please set BOT_TOKEN in your environment variables.');
}

const bot = new TelegramBot(token, { polling: true});


bot.on('polling_error', (error) => {
  console.error('Polling error details:', error);
});
   

export default bot;
