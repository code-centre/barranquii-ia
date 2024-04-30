import { NextResponse } from "next/server";
import prisma from "@/lib/prisma";
import { sendMail } from "@/app/api/send/route";

export async function POST(request: Request) {
  try {
    const body = await request.json();

    switch (body.event) {
      case "transaction.updated":
        const paymentLinkId = body.payment_link_id;

        const updatedUser = await prisma.user.update({
          where: {
            paymentLinkId: paymentLinkId,
          },
          data: {
            paymentId: body.data.transaction.id,
          },
        });

        if (updatedUser) {
          await sendMail(updatedUser, updatedUser.ticketType);
        }

        return NextResponse.json({ updatedUser }, { status: 200 });

      default:
        return NextResponse.json({ status: 200 });
    }
  } catch (error) {
    if (error instanceof Error) {
      return NextResponse.json({ error: error.message }, { status: 500 });
    }
  }
}
