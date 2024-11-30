import prisma from "@/lib/prisma";
import { useImperativeHandle } from "react";

export async function GET(){
  const allSubscribers = await prisma.user.findMany();

  return Response.json(allSubscribers,{status:200})
}


export async function POST(request:Request){
    const res = await request.json()
    const {first_name, user_id, username} = res;


    if(!first_name || !user_id)
    {
        return  new Response("Please Provide all details",{status:403})
    }

    const data = await prisma.user.create({
        data: { first_name, user_id, username },
      })

    return Response.json({message:`User Subscribed Sucessfully!`},{status:201})
}



export async function DELETE(request:Request){
  const url = new URL(request.url);
  const userId = url.searchParams.get('userId');

  if(!userId)
  {
      return  new Response("Please Provide userId",{status:403})
  }

  const data = await prisma.user.delete({
    where:{user_id:userId}
  })

  return Response.json({message:`User deleted Sucessfully!`},{status:201})
}