import bot from "./botConfig/bot";
import { botRoutes } from "./routes/botRoutes";

botRoutes()

bot.startPolling();