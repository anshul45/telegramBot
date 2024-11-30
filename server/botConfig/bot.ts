import TelegramBot from "node-telegram-bot-api";
import { getApiKey } from "../services/apiService";

let bot: TelegramBot | undefined;

export const startBot = async (): Promise<TelegramBot> => {
  try {
    const response = await getApiKey("BOT");
    const token = response.key;

    if (!token || typeof token !== "string") {
      throw new Error("Bot token is missing or invalid.");
    }

    bot = new TelegramBot(token, { polling: true });
    return bot;
  } catch (error) {
    console.error("Error starting bot:", error);
    process.exit(1);
  }
};

