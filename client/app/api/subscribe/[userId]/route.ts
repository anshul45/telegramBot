import prisma from "@/lib/prisma";

export async function GET(request:Request, { params }: { params: Promise<{ userId: string }> }){
    try{
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
  catch (error) {
    console.error(error);
    return new Response("An error occurred while Unsubscribing the user.", { status: 500 });
}
  
  
    
  }