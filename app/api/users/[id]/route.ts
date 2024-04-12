import { NextResponse } from "next/server";
import prisma from "@/lib/prisma";

interface Params {
  params: { id: string };
}

export async function GET(request: Request, { params }: Params) {
  try {
    const singleUser = await prisma.user.findFirst({
      where: {
        id: Number(params.id),
      },
    });

    if (!singleUser)
      return NextResponse.json({ error: "User not found" }, { status: 404 });

    return NextResponse.json(singleUser, { status: 200 });
  } catch (error) {
    if (error instanceof Error) {
      return NextResponse.json({ error: error.message }, { status: 500 });
    }
  }
}

export async function PUT(request: Request, { params }: Params) {
  try {
    const body = await request.json();

    const updatedUser = await prisma.user.update({
      where: {
        id: Number(params.id),
      },
      data: body,
    });

    return NextResponse.json(updatedUser, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error }, { status: 500 });
  }
}

export async function DELETE(request: Request, { params }: Params) {
  try {
    const deletedUser = await prisma.user.delete({
      where: {
        id: Number(params.id),
      },
    });

    return NextResponse.json(deletedUser, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error: error }, { status: 500 });
  }
}
