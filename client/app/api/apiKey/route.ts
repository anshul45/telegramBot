import prisma from "@/lib/prisma";

type ApiType = "BOT" | "WEATHER"; 

export async function GET(request: Request) {
  try {
    const url = new URL(request.url);
    const apiType = url.searchParams.get("apiType") as ApiType | null;

    // Validate the apiType
    if (!apiType || !["BOT", "WEATHER"].includes(apiType)) {
      return new Response("You need to provide a valid apiType", { status: 400 });
    }

    
    const res = await prisma.apiKey.findFirst({
      where: { type: apiType },
    });

    return Response.json(res, { status: 200 });
  } catch (error) {
    console.error("Error getting API key:", error);
    return Response.json({ error: "Internal Server Error" }, { status: 500 });
  }
}

export async function POST(request: Request) {
  try {
    const url = new URL(request.url);
    const apiType = url.searchParams.get("apiType") as ApiType | null;

    // Validate the apiType
    if (!apiType || !["BOT", "WEATHER"].includes(apiType)) {
      return new Response("You need to provide a valid apiType", { status: 400 });
    }

   
    const body = await request.json();
    const key = body.key;

    if (!key) {
      return new Response("You need to provide a key", { status: 400 });
    }

   
    await prisma.apiKey.deleteMany({
      where: { type: apiType },
    });

    const apiKey = await prisma.apiKey.create({
      data: { type: apiType, key },
    });

    return Response.json(apiKey, { status: 200 });
  } catch (error) {
    console.error("Error adding/updating API key:", error);
    return Response.json({ error: "Internal Server Error" }, { status: 500 });
  }
}
