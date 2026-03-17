import { Resend } from 'resend'
import { NextResponse } from 'next/server'

const resend = new Resend(process.env.RESEND_KEY)

const TO_EMAIL = 'anuar@codigoabierto.tech'

function escapeHtml(text: string): string {
  return text
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
}

export async function POST(request: Request) {
  if (!process.env.RESEND_KEY) {
    return NextResponse.json(
      { error: 'RESEND_KEY no configurada' },
      { status: 500 }
    )
  }
  try {
    const body = await request.json()
    const { empresa, sector, tamano, nombre, cargo, email, paquete, reto } = body

    if (!empresa || !email || !reto) {
      return NextResponse.json(
        { error: 'Faltan campos requeridos: empresa, email, reto' },
        { status: 400 }
      )
    }

    const safe = (s: string) => escapeHtml(String(s ?? ''))

    const html = `
      <h2>Nueva propuesta de reto - Caribe-IA</h2>
      <p><strong>Empresa:</strong> ${safe(empresa)}</p>
      <p><strong>Sector:</strong> ${sector ? safe(sector) : '—'}</p>
      <p><strong>Tamaño:</strong> ${tamano ? safe(tamano) : '—'}</p>
      <p><strong>Nombre:</strong> ${nombre ? safe(nombre) : '—'}</p>
      <p><strong>Cargo:</strong> ${cargo ? safe(cargo) : '—'}</p>
      <p><strong>Email:</strong> ${safe(email)}</p>
      <p><strong>Paquete de interés:</strong> ${paquete ? safe(paquete) : '—'}</p>
      <h3>Descripción del reto:</h3>
      <p>${safe(reto).replace(/\n/g, '<br>')}</p>
      <hr>
      <p style="color:#666;font-size:12px">Enviado desde el formulario Propón un reto - caribe-ia.com</p>
    `

    const { data, error } = await resend.emails.send({
      from: 'Caribe-IA <contacto@codigoabierto.tech>',
      to: [TO_EMAIL],
      reply_to: email,
      subject: `[Propón un reto] ${empresa} - ${nombre || 'Sin nombre'}`,
      html,
    })

    if (error) {
      console.error('Resend error:', error)
      return NextResponse.json({ error: error.message }, { status: 500 })
    }

    return NextResponse.json({ success: true, id: data?.id })
  } catch (err) {
    console.error('API propon-reto error:', err)
    return NextResponse.json(
      { error: err instanceof Error ? err.message : 'Error al enviar' },
      { status: 500 }
    )
  }
}
