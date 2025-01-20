import { Container } from "../components/container/Container";
import { Hero } from "../components/hero/Hero";

export const Home = () => {
  return (
    <main
      style={{
        minWidth: "320px",
        maxWidth: "1728px",
        backgroundColor: "#212121",
        marginLeft: "auto",
        marginRight: "auto",
        border: "2px solid rgb(43, 43, 43)",
        borderRadius: "16px",
        padding: "32px 30px",
      }}
    >
      <Hero />
      <Container />
      <Container />
    </main>
  );
};
