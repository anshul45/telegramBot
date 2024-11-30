
const url = "http://localhost:3000/api/"

export const fetchAllUsers = async() => {
    const data = await fetch("http://localhost:3000/api/subscribe");
    const usersData = await data.json();
    return usersData;
}

export const fetchAllBlockedUsers = async () => {
  const data = await fetch("http://localhost:3000/api/block");
  const usersData = await data.json();
  return usersData;
}

export const blockUser = async (userId:string) => {
    const response = await fetch ("http://localhost:3000/api/block?userId="+userId,{method:"PUT"})
}

export const unBlockUser = async (userId:string) => {
    const response = await fetch ("http://localhost:3000/api/block?userId="+userId,{method:"DELETE"})
}


export const deleteUser = async (userId:string) => {
    const response = await fetch ("http://localhost:3000/api/subscribe?userId="+userId,{method:"DELETE"})
}

export const fetchApiKey = async (apiType:string) => {
  const data = await fetch("http://localhost:3000/api/apiKey?apiType="+apiType);
  const usersData = await data.json();
  return usersData;
}

export const addApiKey = async (apiType: string, apiKey: string) => {
    const response = await fetch(`http://localhost:3000/api/apiKey?apiType=${apiType}`, {
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
  