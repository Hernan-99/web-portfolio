import { Button } from "../button/Button";
import { ElementList } from "../elementList/ElementList";
import { Badge } from "../hero/Hero";

export const Container = () => {
  const dataItem = [
    {
      title: "Landing pages",
      gradient:
        "linear-gradient(180deg, rgba(217,217,217,1) 0%, rgba(40,199,128,1) 100%)",
      description: "Lorem ipsum dolor sit amet consectetur.",
    },
    {
      title: "E-commerces",
      gradient:
        "linear-gradient(180deg, rgba(217,217,217,1) 0%, rgba(194, 199, 40,1) 100%)",
      description: "Lorem ipsum dolor sit amet consectetur.",
    },
    {
      title: "Diseño UX UI",
      gradient:
        "linear-gradient(180deg, rgba(217,217,217,1) 0%, rgba(199, 120, 40,1) 100%)",
      description: "Lorem ipsum dolor sit amet consectetur.",
    },
    {
      title: "Experimentos",
      gradient:
        "linear-gradient(180deg, rgba(217,217,217,1) 0%, rgba(40, 122, 199,1) 100%)",
      description: "Lorem ipsum dolor sit amet consectetur.",
    },
  ];
  const data = dataItem.length;
  return (
    <section
      style={{
        backgroundColor: "#2C2C2C",
        padding: "20px 30px",
        borderRadius: "12px",
        marginBottom: "20px",
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          marginBottom: "30px",
        }}
      >
        <Badge
          title="Landing pages"
          bulletColor="#616161"
          textSize="18px"
          colorText="#c0c0c0"
          sizing="8px"
          bgColor="none"
          fWeight="normal"
        />
        <Button value="Ver todos" bgColor="#383838" />
      </div>
      <ul
        style={{
          display: "flex",
          justifyContent: "space-between",
          flexWrap: "wrap",
          listStyle: "none",
        }}
      >
        {data > 0
          ? dataItem.map((dataItem, index) => (
              <li key={index} style={{ marginBottom: "60px" }}>
                <ElementList
                  title={dataItem.title}
                  description={dataItem.description}
                  gradient={dataItem.gradient}
                />
              </li>
            ))
          : null}
      </ul>
    </section>
  );
};
