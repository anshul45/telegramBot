export interface UserResponse {
    id:string,
    user_id:string,
    username:string,
    first_name:string,
    status: "ACTIVE" | "BLOCKED",
    createdAt:string,
    updatedAt:string
}


export interface ManageApi {
    createdAt:string,
    id:string,
    key:string,
    type: "WEATHER"| "BOT",
    updatedAt:string
}