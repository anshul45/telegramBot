import prisma from "@/lib/prisma";

export async function GET(request:Request, { params }: { params: Promise<{ userId: string }> }){
    const userId = (await params).userId;

    if(userId)
    {

        const allSubscribers = await prisma.user.findUnique({where:{
            user_id:userId
        }})
        return Response.json(allSubscribers,{status:200})
    }

  
  return Response.json("No user Found",{status:200})
  
  
    
  }