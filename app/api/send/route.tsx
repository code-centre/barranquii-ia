import { EmailTemplate } from "../../components/emailTemplate";
import { Resend } from "resend";
import prisma from "@/lib/prisma";

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

  try {
    const data = await resend.emails.send({
      from: "Barranqui-IA <contacto@fundacioncodigoabierto.com>",
      to: [`${singleUser?.email}`],
      subject: "Boleta de la Hackatón - Barranqui-IA ",
      react: EmailTemplate({
        name: `${singleUser?.name} ${singleUser?.lastName}`,
      }),
      text: "",
    });
    return Response.json(data);
  } catch (error) {
    return Response.json({ error });
  }
}
