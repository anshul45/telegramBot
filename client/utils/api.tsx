import { ManageApi, UserResponse } from "./types";

const url =  process.env.API_BASE_URL || 'http://localhost:3000/api';

export const fetchAllUsers = async() => {
    const data = await fetch(url+"/subscribe");
    const usersData:UserResponse[] = await data.json();
    return usersData;
}

export const fetchAllBlockedUsers = async () => {
  const data = await fetch(url + "/block");
  const usersData:UserResponse[] = await data.json();
  return usersData;
}

export const blockUser = async (userId:string) => {
    const response = await fetch (url+"/block?userId="+userId,{method:"PUT"})
}

export const unBlockUser = async (userId:string) => {
    const response = await fetch (url+"/block?userId="+userId,{method:"DELETE"})
}


export const deleteUser = async (userId:string) => {
    const response = await fetch (url+"/subscribe?userId="+userId,{method:"DELETE"})
}

export const fetchApiKey = async (apiType:string) => {
  const data = await fetch(url+"/apiKey?apiType="+apiType);
  const usersData:ManageApi = await data.json();
  return usersData;
}

export const addApiKey = async (apiType: string, apiKey: string) => {
    const response = await fetch(url+`/apiKey?apiType=${apiType}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        key: apiKey,
      }),
    });
  
    if (!response.ok) {
      throw new Error(`Failed to add API key: ${response.statusText}`);
    }
  
    const usersData = await response.json();
    return usersData;
  };
  