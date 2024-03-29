import type { FC, CSSProperties } from "react";
import {
  getServices,
  type OfferedServices,
} from "../../services/offered-services";
import type { GetServerSideProps } from "next";

const serviceListItemStyles: Record<string, CSSProperties | undefined> = {
  card: {
    borderRadius: "6px",
    boxShadow: "rgba(0, 0, 0, 0.13) -2px 4px 45px 0px",
    padding: "48px 28px",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
  },
  link: {
    textDecoration: "none",
  },
  img: {
    width: "166px",
    height: "100px",
  },
  title: {
    fontFamily: "Poppins, sans-serif",
    fontWeight: 600,
    fontSize: "20px",
    color: "rgb(36, 36, 36)",
    marginTop: "20px",
  },
};

interface ServiceListItemProps extends OfferedServices {}

const ServiceListItem: FC<ServiceListItemProps> = ({ title, src, href }) => {
  return (
    <li style={serviceListItemStyles.card}>
      <a style={serviceListItemStyles.link} href={href}>
        <img style={serviceListItemStyles.img} src={src} />
        <h3 style={serviceListItemStyles.title}>{title}</h3>
      </a>
    </li>
  );
};

const servicesStyles: Record<string, CSSProperties | undefined> = {
  section: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    padding: "80px 128px",
    backgroundColor: "rgb(248, 249, 252)",
  },
  title: {
    fontFamily: "Poppins, sans-serif",
    fontWeight: 600,
    fontSize: "32px",
    color: "rgb(36, 36, 36)",
  },
  serviceList: {
    display: "grid",
    gridTemplateColumns: "repeat(5, 1fr)",
    gap: "20px",
    listStyle: "none",
  },
  seeAllLink: {
    boxSizing: "border-box",
    padding: "16px",
    background: "#CA2F35",
    borderRadius: "8px",
    fontFamily: "Lato, system-ui, sans-serif",
    fontSize: "20px",
    fontWeight: 500,
    color: "#fff",
    display: "flex",
    fontVariationSettings: "normal",
    justifyContent: "center",
    alignItems: "center",
    marginTop: "32px",
    width: "181px",
    height: "48px",
  },
};

export interface ServicesProps {
  services: OfferedServices[];
}

const Services: FC<ServicesProps> = ({ services }) => {
  return (
    <section style={servicesStyles.section}>
      <h2 style={servicesStyles.title}>
        We offer consulting, training, strategy, and staff augmentation.
      </h2>
      <ul style={servicesStyles.serviceList}>
        {services.map((service) => {
          return <ServiceListItem key={service.title} {...service} />;
        })}
      </ul>
      <a style={servicesStyles.seeAllLink}>See all services</a>
    </section>
  );
};

export default Services;

export const getServerData: GetServerSideProps<ServicesProps> = async () => {
  const services = await getServices();

  return { props: { services } };
};
