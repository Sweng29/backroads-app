import React from "react";
import { serviceLinks } from "../Data";
import Service from "./Service";
import Title from "./Title";

const Services = () => {
  return (
    <section className="section services" id="services">
      <Title title="our" subTitle="services" />
      <div className="section-center services-center">
        {serviceLinks.map((service) => {
          return <Service key={service.id} service={service} />;
        })}
      </div>
    </section>
  );
};

export default Services;
