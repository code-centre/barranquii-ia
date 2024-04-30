import { EmailTemplate } from "../../components/emailTemplate";
import { Resend } from "resend";
import prisma from "@/lib/prisma";
import { User } from "@/lib/types";

interface Params {
  params: { id: string };
}

const resend = new Resend(process.env.API_KEY_RESEND);

export async function POST(request: Request, { params }: Params) {
  const id = await request.json();

  const singleUser = await prisma.user.findFirst({
    where: {
      id: Number(id),
    },
  });

  if (singleUser) {
    try {
      const data = await sendMail(singleUser, singleUser?.ticketType);
      return Response.json(data);
    } catch (error) {
      return Response.json({ error });
    }
  }
}

export async function sendMail(user: User, type: string) {
  const data = await resend.emails.send({
    from: "Barranqui-IA <contacto@fundacioncodigoabierto.com>",
    to: [`${user?.email}`],
    subject:
      type === "TALLER"
        ? "Boleto Limitado - Hackatón Barranqui-IA"
        : "Boleta General - Hackatón Barranqui-IA",
    react: EmailTemplate({
      name: `${user?.name} ${user?.lastName}`,
      type,
    }),
    text: "",
  });
}
