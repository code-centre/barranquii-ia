/* eslint-disable @next/next/no-img-element */
import * as React from "react";

interface EmailTemplateProps {
  name: string;
}

export const EmailTemplate: React.FC<Readonly<EmailTemplateProps>> = ({
  name,
}) => (
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
    <p style={{ color: "#D1D5DB", display: "block", marginTop: 5 }}>
      04 de abril de 2024 a las 08:00 a.m.
    </p>
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
            Evento
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
);
