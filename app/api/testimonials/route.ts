import { NextResponse } from "next/server";
import prisma from "@/lib/prisma";




export async function GET() {
  try {
    const testimonials = await prisma.testimonials.findMany({});
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
    console.log(body);
    // updateUserTable().then(() => console.log("User table updated"));

    const newTestimonial = await prisma.testimonials.create({
      data: body,
    });
    return NextResponse.json({ newTestimonial }, { status: 200 });
  } catch (error) {
    console.log('catch');
    
    if (error instanceof Error) {
      return NextResponse.json({ error: error.message }, { status: 500 });
    }
  }
}
