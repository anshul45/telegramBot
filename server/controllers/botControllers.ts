import TelegramBot, { Message } from "node-telegram-bot-api";

import { addUserSubscription, checkUserSubscription, unsubscribeUser } from "../services/apiService";
import { getWeatherDetail } from "../services/weatherService";


const messages = {
    welcome: (name: string) => `Hi ${name}! Welcome to WeatherBot!

I can send you the current weather of any city around the world. 

Just send me the city's name here!

Example: Delhi`,

    help:(name:string) => `Hi ${name}! Welcome to WeatherBot!

    You can control me by sending these commands:
    
    /start - To Start bot
    /subscribe - To Subscribe bot
    /unsubscribe - To Unsubscribe bot
    /help - For help
    Just send me the city's name to fetch weather data!
    Example: Delhi`,
    subscribeSuccess: (name: string) => `Hi ${name}, You have successfully subscribed to our bot.`,
    unsubscribeSuccess: (name: string) => `Hi ${name}, You have successfully unsubscribed from our bot.`,
    invalidInput: "Invalid input. Please provide a valid city name.",
    blockedUser: "⚠️ You are currently blocked from using this bot and cannot access the requested data. Thank you.",
    subscriptionRequired: "Please subscribe using /subscribe to continue using the bot. Thank you.",
    errorFetchingWeather: "An error occurred. Please ensure that you have entered the correct city name.",
    rateLimitWarning: "⚠️ You're sending messages too quickly. Please wait a moment.",
    unexpectedError: "❌ An unexpected error occurred. Please try again later.",
};



const restrictedCommands = ["/start", "/subscribe", "/unsubscribe","/help"];

export const startBot = (bot:TelegramBot, msg: Message) => {
    const chatId = msg.chat.id;
    const name = msg.chat.first_name || "there";
    bot.sendMessage(chatId, messages.welcome(name));
};

export const help = (bot:TelegramBot, msg: Message) => {
    const chatId = msg.chat.id;
    const name = msg.chat.first_name || "there";
    bot.sendMessage(chatId, messages.help(name));
};

export const subscribe = async (bot:TelegramBot, msg: Message) => {
    const chatId = msg.chat.id.toString();
    const name = msg.chat.first_name || "there";
    const username = msg.chat.username;

    try {
        if (chatId && name && username) {
            await addUserSubscription(chatId, username, name);
        }
        bot.sendMessage(chatId, messages.subscribeSuccess(name));
    } catch (error) {
        console.error("Error subscribing user:", error);
        bot.sendMessage(chatId, messages.unexpectedError);
    }
};

export const unsubscribe = async (bot:TelegramBot, msg: Message) => {
    const chatId = msg.chat.id.toString();
    const name = msg.chat.first_name || "there";

    try {
        await unsubscribeUser(chatId);
        bot.sendMessage(chatId, messages.unsubscribeSuccess(name));
    } catch (error) {
        console.error("Error unsubscribing user:", error);
        bot.sendMessage(chatId, messages.unexpectedError);
    }
};

export const sendWeatherUpdate = async (bot:TelegramBot, msg: Message) => {
    const chatId = msg.chat.id.toString();

    try {
        const userInput = msg.text?.trim();

        if (!userInput) {
            bot.sendMessage(chatId, "Please provide a valid input.");
            return;
        }

        if ( !restrictedCommands.includes(userInput.toLowerCase())) {
           
        

        // Check subscription status
        const subscription = await checkUserSubscription(chatId);
        if (!subscription) {
            bot.sendMessage(chatId, messages.subscriptionRequired);
            return;
        }

        if (subscription.status === "BLOCKED") {
            bot.sendMessage(chatId, messages.blockedUser);
            return;
        }

        // Fetch weather details
        const weatherData = await getWeatherDetail(userInput);
        if (weatherData) {
            bot.sendMessage(chatId, weatherData);
        } else {
            bot.sendMessage(chatId, messages.errorFetchingWeather);
        }
    }
    } catch (error) {
        console.error("Error in sendWeatherUpdate:", error);
        bot.sendMessage(chatId, messages.unexpectedError);
    }
};
