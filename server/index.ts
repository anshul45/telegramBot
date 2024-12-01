import TelegramBot from "node-telegram-bot-api";
import { startBot } from "./botConfig/bot";
import { botRoutes } from "./routes/botRoutes";
import express, { Request, Response } from "express";
import dotenv from "dotenv"


dotenv.config();

const app = express();

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

const port = process.env.PORT || 3001;

// Dummy HTTP endpoint
app.get('/', (req: Request, res: Response) => {
  res.status(200).send('Telegram Bot Running');
});

// Start server
app.listen(port, () => console.log(`Listening on port ${port}`));