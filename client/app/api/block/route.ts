import prisma from "@/lib/prisma";

export async function PUT(request:Request) {
    const url = new URL(request.url);
    const userId = url.searchParams.get('userId');
    if (!userId) {
        return new Response("you need to provide userID");
    }

    const res = await prisma.user.update({where:{user_id : userId},data:{
        status : "BLOCKED"
    }})

    console.log(res)

    return  Response.json({"User Blocked Sucessfully":res},{status:200})

}



export async function DELETE(request:Request) {
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