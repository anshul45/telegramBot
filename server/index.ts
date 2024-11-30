import TelegramBot from "node-telegram-bot-api";
import { startBot } from "./botConfig/bot";
import { botRoutes } from "./routes/botRoutes";

const initializeApp = async () => {
  try {

    const bot:TelegramBot = await startBot(); 

    botRoutes(bot); 
    

  } catch (error) {
    console.error("Failed to initialize application:", error);
    process.exit(1); 
  }
};

initializeApp();
