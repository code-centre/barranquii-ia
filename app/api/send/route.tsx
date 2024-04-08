import { EmailTemplate } from '../../components/emailTemplate';
import { Resend } from 'resend';

const resend = new Resend('re_fJc91nyU_Hjipwd4C1ntb9nqM1DH54s2u');

export async function POST() {
  try {
    const data = await resend.emails.send({
      from: 'Barranqui-IA <onboarding@resend.dev>',
      to: ['davidaragon007@gmail.com'],
      subject: 'Boleta de la Hackatón - Barranqui-IA ',
      react: EmailTemplate({ name: 'David Aragón' }),
      text: '',
    });
    // console.log(data);
    

    return Response.json(data);
  } catch (error) {
    return Response.json({ error });
  }
}