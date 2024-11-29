import axios from "axios";

interface response {
id:string,
user_id:string,
username: string | null,
first_name: string,
status: 'ACTIVE' | 'BLOCKED',
createdAt: string,
updatedAt: string
}




export const checkUserSubscription = async (user_id: string): Promise<response | null> => {
  try {
      const response = await axios.get(`http://localhost:3000/api/subscribe/${user_id}`);
      return response.data;
  } catch (error) {
      console.error("Error checking subscription:", error);
      return null;
  }
};




export const addUserSubscription = async(user_id:string, username:string, first_name:string) => {


   const response =  await axios.post("http://localhost:3000/api/subscribe",{
        user_id,
        username,
        first_name
      })
}


export const unsubscribeUser = async(user_id:string) => {
  const response = await axios.delete(`http://localhost:3000/api/subscribe?userid=${user_id}`);
}




