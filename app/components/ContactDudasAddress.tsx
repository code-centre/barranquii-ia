import { CONTACTO_GENERAL } from "@/app/config/contactGeneral";

type Props = {
  intro: string;
  accentClassName?: string;
  mutedClassName?: string;
};

export default function ContactDudasAddress({
  intro,
  accentClassName = "text-purple-400",
  mutedClassName = "text-gray-500",
}: Props) {
  return (
    <>
      <p className="mb-6 text-gray-300 leading-relaxed">{intro}</p>
      <address className="not-italic rounded-xl border border-white/10 bg-white/5 p-6">
        <ul className="space-y-4 text-gray-300">
          <li>
            <span
              className={`block text-xs font-semibold uppercase tracking-wider ${accentClassName}`}
            >
              Correo
            </span>
            <a
              href={`mailto:${CONTACTO_GENERAL.email}`}
              className={`mt-1 inline-block underline-offset-2 hover:underline ${accentClassName}`}
            >
              {CONTACTO_GENERAL.email}
            </a>
          </li>
          <li>
            <span
              className={`block text-xs font-semibold uppercase tracking-wider ${accentClassName}`}
            >
              Teléfono y WhatsApp
            </span>
            <a
              href={CONTACTO_GENERAL.whatsappHref}
              target="_blank"
              rel="noopener noreferrer"
              className={`mt-1 inline-block underline-offset-2 hover:underline ${accentClassName}`}
            >
              {CONTACTO_GENERAL.telDisplay}
            </a>
            <span className={`mt-1 block text-sm ${mutedClassName}`}>
              También puedes usar el botón flotante de WhatsApp en esta página.
            </span>
          </li>
          <li>
            <a
              href={`tel:${CONTACTO_GENERAL.telE164}`}
              className="text-sm text-gray-400 underline-offset-2 hover:text-gray-300 hover:underline"
            >
              Llamar por teléfono
            </a>
          </li>
        </ul>
      </address>
    </>
  );
}
