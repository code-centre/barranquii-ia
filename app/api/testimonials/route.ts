import { NextResponse } from "next/server";
import prisma from "@/lib/prisma";




export async function GET(request: Request) {
	const url = new URL(request.url);
	const hackathon = url.searchParams.get("hackathon");
	const year = url.searchParams.get("year");
	
	if (!hackathon || !year) {
		return NextResponse.json({ error: "Missing hackathon or year" }, { status: 400 });
	}

  try {
    const testimonials = await prisma.testimonials.findMany({
      where: {
        hackathon: hackathon,
        year: parseInt(year),
      },
    });
    return NextResponse.json({ testimonials }, { status: 200 });
  } catch (error) {
    if (error instanceof Error) {
      return NextResponse.json({ error: error.message }, { status: 500 });
    }
  }
}

export async function POST(request: Request) {
  try {
    const body = await request.json();
		const { nameUser, description, role, hackathon, year } = body;
    // updateUserTable().then(() => console.log("User table updated"));

    const newTestimonial = await prisma.testimonials.create({
      data: {
        nameUser,
        description,
        role,
        hackathon,
        year: parseInt(year),
      },
    });
    return NextResponse.json({ newTestimonial }, { status: 200 });
  } catch (error) {
		console.log(error);
    if (error instanceof Error) {
      return NextResponse.json({ error: error.message }, { status: 500 });
    }
  }
}
