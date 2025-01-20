import profileimganimated from "../../assets/img/profileimganimated.webp";
import { Button } from "../button/Button";
export const Hero = () => {
  return (
    <>
      <header
        style={{
          display: "flex",
          justifyContent: "space-between",
          marginBottom: "80px",
        }}
      >
        <Badge
          title="Desarrollador Frontend Jr"
          bulletColor="#616161"
          textSize="18px"
          colorText="#c0c0c0"
          sizing="8px"
          bgColor="none"
          fWeight="normal"
        />
        <Badge
          title="DISPONIBLE PARA TRABAJAR"
          bulletColor="#28C780"
          textSize="12px"
          colorText="#039754"
          bgColor="rgb(40, 199, 128, 0.15)"
          sizing="8px"
          paddingBadge="4px 10px"
          fWeight="bold"
        />
      </header>
      <Card />
    </>
  );
};

export const Badge = ({
  title,
  bulletColor,
  textSize,
  colorText,
  sizing,
  bgColor,
  fWeight,
  paddingBadge,
}) => {
  return (
    <section
      style={{
        display: "flex",
        alignItems: "center",
        backgroundColor: bgColor,
        padding: paddingBadge,
        borderRadius: "30px",
      }}
    >
      <div
        style={{
          width: sizing,
          height: sizing,
          borderRadius: "50%",
          backgroundColor: bulletColor,
          marginRight: "8px",
        }}
      ></div>
      <span
        style={{
          fontSize: textSize,
          color: colorText,
          fontWeight: fWeight,
        }}
      >
        {title}
      </span>
    </section>
  );
};

export const Card = () => {
  return (
    <>
      <section
        style={{
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <HeroTitleName />
        <HeroImg />
      </section>
      <section
        style={{
          width: "230px",
          display: "flex",
          justifyContent: "space-between",
          marginBottom: "40px",
        }}
      >
        <Button value="Contáctame" bgColor="#383838" />
        <Button value="Copy email" bgColor="rgba(125,125,125,0)" />
      </section>
    </>
  );
};

const HeroTitleName = () => {
  return (
    <article style={{ width: "50%" }}>
      <h1 style={{ fontSize: "37px", marginBottom: "20px", color: "#fff" }}>
        Hernán Sánchez
      </h1>
      <p
        style={{
          fontSize: "18px",
          color: "#C0C0C0",
          lineHeight: "1.5",
          textAlign: "justify",
        }}
      >
        Apasionado por la tecnología, desarrollo frontend y diseño UI, además de
        contar con conocimientos técnicos en desarrollo backend. Actualmente
        cursando la Tecnicatura en Programación en la Universidad Nacional
        Guillermo Brown. Busco seguir desarrollando mis habilidades y aportar
        mis conocimientos dentro de un equipo dinámico, enfrentando nuevos
        desafíos con un enfoque proactivo y orientado a resultados.
      </p>
    </article>
  );
};

export const HeroImg = () => {
  return (
    <div
      style={{ border: "1px solid #fff", borderRadius: "50%", padding: "10px" }}
    >
      <figure
        style={{
          backgroundColor: "#D4D4D6",
          width: "250px",
          height: "250px",
          borderRadius: "50%",
          overflow: "hidden",
          textAlign: "center",
        }}
      >
        <img
          src={profileimganimated}
          alt=""
          style={{
            width: "230px",
            height: "230px",
            position: "relative",
            top: "20px",
          }}
        />
      </figure>
    </div>
  );
};
