import bot from "./bot/bot";
import { botRoutes } from "./routes/botRoutes";
import adminRoutes from "./routes/adminRoutes";



bot.setMyCommands([
  { command: "/weather", description: "Get the current weather for a location or city" },
  { command: "/forecast", description: "Get a 3-day weather forecast" },
  { command: "/alerts", description: "Set weather alerts" },
  { command: "/language", description: "Change the forecast language" },
  { command: "/units", description: "Change unit preferences" },
]);


botRoutes();




