import { NextResponse } from "next/server";
import prisma from "@/lib/prisma";
import { sendMail } from "@/app/api/send/route";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const transaction = body.data.transaction;

    switch (body.event) {
      case "transaction.updated":
        const paymentLinkId = transaction.payment_link_id;

        const user = await prisma.user.findFirst({
          where: {
            paymentLinkId: paymentLinkId,
          },
        });

        if (transaction.status === "APPROVED" && user) {
          const updatedUser = await prisma.user.update({
            where: {
              id: user?.id,
            },
            data: {
              paymentId: transaction.id,
            },
          });

          if (updatedUser) {
            await sendMail(updatedUser, updatedUser.ticketType);
          }

          return NextResponse.json({ updatedUser }, { status: 200 });
        }

        return NextResponse.json({ status: 404 });

      default:
        return NextResponse.json({ status: 200 });
    }
  } catch (error) {
    if (error instanceof Error) {
      return NextResponse.json({ error: error.message }, { status: 500 });
    }
  }
}
