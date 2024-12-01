import prisma from "@/lib/prisma";

export async function GET(){
  try{
    const allSubscribers = await prisma.user.findMany(); 
    return Response.json(allSubscribers,{status:200})
  }
  catch (error) {
    console.error(error);
    return new Response("An error occurred while getting the user.", { status: 500 });
}
}


export async function POST(request:Request){
  try{
    const res = await request.json()
    const {first_name, user_id, username} = res;


    if(!first_name || !user_id)
    {
        return  new Response("Please Provide all details",{status:403})
    }

    await prisma.user.create({
        data: { first_name, user_id, username },
      })

    return Response.json({message:`User Subscribed Sucessfully!`},{status:201})
  }
    catch (error) {
      console.error(error);
      return new Response("An error occurred while Subscribing the user.", { status: 500 });
  }
}



export async function DELETE(request:Request){
  try{
  const url = new URL(request.url);
  const userId = url.searchParams.get('userId');

  if(!userId)
  {
      return  new Response("Please Provide userId",{status:403})
  }

  await prisma.user.delete({
    where:{user_id:userId}
  })

  return Response.json({message:`User Unsubscribe Sucessfully!`},{status:201})
}
  catch (error) {
    console.error(error);
    return new Response("An error occurred while Unsubscribing the user.", { status: 500 });
}
}