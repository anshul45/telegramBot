import axios, { AxiosInstance } from "axios";

// Define response type
export interface UserSubscriptionResponse {
  id: string;
  user_id: string;
  username: string | null;
  first_name: string;
  status: "ACTIVE" | "BLOCKED";
  createdAt: string;
  updatedAt: string;
}

interface apiKeyData {
id:string,
type:'WEATHER'|'BOT',
key:string,
createdAt:string,
updatedAt:string
}

// Axios instance for reusability
const apiClient: AxiosInstance = axios.create({
  baseURL: "https://telegram-bot-phi-ivory.vercel.app/api/subscribe"
});

// Check user subscription
export const checkUserSubscription = async (
  userId: string
): Promise<UserSubscriptionResponse | null> => {
  try {
    const { data } = await apiClient.get<UserSubscriptionResponse>(`/${userId}`);
    return data;
  } catch (error) {
    console.error("Error checking subscription:", error);
    return null;
  }
};

// Add user subscription
export const addUserSubscription = async (
  user_id: string,
  username: string,
  first_name: string
): Promise<boolean> => {
  try {
    await apiClient.post("/", { user_id, username, first_name });
    return true;
  } catch (error) {
    console.error("Error adding subscription:", error);
    return false;
  }
};

// Unsubscribe user
export const unsubscribeUser = async (userId: string): Promise<boolean> => {
  try {
    await apiClient.delete(`?userId=${userId}`);
    return true;
  } catch (error) {
    console.error("Error unsubscribing user:", error);
    return false;
  }
};

export const getApiKey = async(apiType:string):Promise<apiKeyData> => {
  try {
    const data = await axios.get("https://telegram-bot-phi-ivory.vercel.app/api/apiKey?apiType="+apiType);
    return data.data;
  } catch (error) {
    console.error("Error fetching API key:", error);
    throw new Error("Unable to fetch API key.");
  }
 
}
