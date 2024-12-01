import prisma from "@/lib/prisma";

export async function PUT(request:Request) {
    try{
    const url = new URL(request.url);
    const userId = url.searchParams.get('userId');
    if (!userId) {
        return new Response("you need to provide userID");
    }

    const res = await prisma.user.update({where:{user_id : userId},data:{
        status : "BLOCKED"
    }})

    return  Response.json({"User Blocked Sucessfully":res},{status:200})
}
    catch (error) {
        console.error(error);
        return new Response("An error occurred while blocking the user.", { status: 500 });
    }
}



export async function DELETE(request:Request) {
    try{
    const url = new URL(request.url);
    const userId = url.searchParams.get('userId');
    if (!userId) {
        return new Response("you need to provide userID");
    }

    const res = await prisma.user.update({where:{user_id : userId},data:{
        status : "ACTIVE"
    }})
    return  Response.json({"User Unblocked Sucessfully":res},{status:200})
}
    catch (error) {
        console.error(error);
        return new Response("An error occurred while blocking the user.", { status: 500 });
    }
}

export async function GET(){
    try {
        const res = await prisma.user.findMany({where:{status : 'BLOCKED'}})
        return Response.json(res,{status:200})
    }  catch (error) {
        console.error(error);
        return new Response("An error occurred while blocking the user.", { status: 500 });
    }
}