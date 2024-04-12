import { EmailTemplate } from "../../components/emailTemplate";
import { Resend } from "resend";
import prisma from "@/lib/prisma";

interface Params {
  params: { id: string };
}

const resend = new Resend("re_fJc91nyU_Hjipwd4C1ntb9nqM1DH54s2u");

export async function POST(request: Request, { params }: Params) {
  const singleUser = await prisma.user.findFirst({
    where: {
      id: Number(params.id),
    },
  });

  try {
    const data = await resend.emails.send({
      from: "Barranqui-IA <onboarding@resend.dev>",
      to: [`${singleUser?.email}`],
      subject: "Boleta de la Hackatón - Barranqui-IA ",
      react: EmailTemplate({
        name: `${singleUser?.name} ${singleUser?.lastName}`,
      }),
      text: "",
    });
    // console.log(data);

    return Response.json(data);
  } catch (error) {
    return Response.json({ error });
  }
}
