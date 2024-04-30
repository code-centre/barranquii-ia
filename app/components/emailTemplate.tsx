/* eslint-disable @next/next/no-img-element */
import * as React from "react";

interface EmailTemplateProps {
  name: string;
  type: string;
}

export const EmailTemplate: React.FC<Readonly<EmailTemplateProps>> = ({
  name,
  type,
}) => (
  <>
    <div style={{ width: 650, marginBottom: 50, fontSize: 16, color: "#000" }}>
      <h1>¡Hola, {name}!</h1>
      <p>
        Estamos emocionados de darte la bienvenida a Barranqui-IA, el espacio
        donde las ideas se transforman en soluciones y los desafíos se
        convierten en oportunidades de aprendizaje y crecimiento.
      </p>
      <p>
        ¡Gracias por atreverte a salir de tu zona de confort y unirte a esta
        aventura tecnológica! Sabemos que tomar la iniciativa para aprender
        cosas nuevas no siempre es fácil, pero es el primer paso hacia la
        realización de grandes cosas. En Barranqui-IA, valoramos la curiosidad y
        la valentía de explorar lo desconocido.
      </p>
      <p>
        Te invitamos a llegar con la mente abierta y la mejor actitud. Aquí,
        cada idea cuenta y cada pregunta abre un nuevo camino de posibilidades.
        Estarás rodeado de mentes innovadoras y recursos que te ayudarán a
        llevar tus habilidades al próximo nivel.
      </p>
      <p>
        {type === "TALLER"
          ? "El Hackatón tendrá lugar el 4 y 5 de mayo, con tu boleto tienes acceso para los talleres del 4 de mayo desde las 2 pm hasta las 7 pm. Asegúrate de llegar a tiempo para aprovechar cada minuto de esta experiencia enriquecedora."
          : "El evento tendrá lugar el 4 y 5 de mayo y comenzará a las 8:00 AM. Asegúrate de llegar a tiempo para aprovechar cada minuto de esta experiencia enriquecedora."}
      </p>
      <p>
        Adjunto a este correo encontrarás tu boleto para el evento. Guarda este
        documento, ya que será tu pase de entrada. También te recomendamos
        revisar los detalles y recomendaciones para asegurar que tu experiencia
        sea lo más productiva y emocionante posible.
      </p>
      <p>
        Nos vemos pronto, listos para hackear, innovar y transformar. ¡Prepárate
        para una experiencia inolvidable!
      </p>
      <p>Saludos cordiales,</p>
      <div>
        <p style={{ margin: 0 }}>Anuar Harb</p>
        <p style={{ marginTop: 0 }}>
          Organizador de{" "}
          <span style={{ fontWeight: "bold" }}>Barranqui-IA</span>
        </p>
      </div>
    </div>
    <div
      style={{
        // display: "flex",
        // height: 400,
        overflow: "hidden",
        position: "relative",
        padding: "1.5rem",
        flexDirection: "column",
        gap: "1.5rem",
        justifyContent: "space-between",
        borderRadius: "0.375rem",
        borderWidth: "1px",
        borderColor: "#fff",
        borderStyle: "dashed",
        width: 600,
        background: "#000",
      }}
    >
      {/* <img
      style={{
        position: "absolute",
        opacity: 0.5,
        filter: "blur(16px)",
        width: "500px",
        zIndex: -1,
      }}
      className="absolute"
      src="https://barranquiia.com/_next/image?url=%2Fsquare-l.webp&w=750&q=75"
      alt="square-bg"
    /> */}
      <header style={{ zIndex: 20 }}>
        <h2
          style={{
            fontSize: "1.875rem",
            lineHeight: "2.25rem",
            fontWeight: 700,
            color: "#fff",
            marginTop: 0,
          }}
        >
          Hackatón - Barranqui-IA
        </h2>
      </header>
      {/* <h2
      style={{
        maxWidth: "28rem",
        fontWeight: 700,
        display: "block",
        color: "#fff",
        margin: 0,
      }}
    >
      Área metropolitana de, Kilómetro 5, vía Puerto Colombia, Barranquilla,
      Atlántico
    </h2> */}
      <section className="flex flex-col gap-1">
        <p
          style={{
            color: "#D1D5DB",
            display: "block",
            margin: 0,
            fontSize: 16,
          }}
        >
          04 y 05 de abril de 2024
        </p>
        <p
          style={{
            color: "#fff",
            display: "block",
            marginTop: 5,
            fontSize: 16,
          }}
        >
          {type === "TALLER" ? "Empezamos 2pm" : "Empezamos 08:00 am"}
        </p>
      </section>
      <footer>
        <div
          style={{
            display: "flex",
            gap: "5rem",
            justifyContent: "space-between",
            width: "100%",
            marginTop: 20,
          }}
        >
          <div style={{ width: 300, marginTop: 20 }}>
            <h2
              style={{
                fontSize: "1.125rem",
                lineHeight: "1.75rem",
                fontWeight: 700,
                color: "#fff",
                padding: 0,
                margin: 0,
              }}
            >
              Participante
            </h2>
            <p
              style={{
                fontSize: "0.875rem",
                lineHeight: "1.25rem",
                color: "#D1D5DB",
                margin: 0,
              }}
            >
              {name}
            </p>
          </div>
          <div style={{ textAlign: "right", width: 300, marginTop: 20 }}>
            <h2
              style={{
                fontSize: "1.125rem",
                lineHeight: "1.75rem",
                fontWeight: 700,
                color: "#fff",
                padding: 0,
                margin: 0,
              }}
            >
              {type === "TALLER" ? "Entrada Limitada" : "Entrada General"}
            </h2>
            <p
              style={{
                fontSize: "0.875rem",
                lineHeight: "1.25rem",
                color: "#D1D5DB",
                margin: 0,
              }}
            >
              Hackatón - Barranqui-IA
            </p>
          </div>
        </div>
      </footer>
    </div>
  </>
);
