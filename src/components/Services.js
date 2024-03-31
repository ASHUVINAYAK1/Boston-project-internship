import React from "react";
import SectionTitle from "./SectionTitle";

const Services = ({ servicesData }) => {
  return (
    <section id="services" className="section services-section bg-gray">
      <div className="container">
        <SectionTitle heading={"Services I Offer"} subHeading={"Services"} />
        <div className="row gy-4">
          {servicesData && servicesData.map((service, index) => (
            <div className="col-sm-6 col-lg-4" key={index}>
              <div className="feature-box-01">
                <div className="feature-content">
                  <div className="number">
                    <span>0{index + 1}</span>
                  </div>
                  {/* <h5>{service.name}</h5>
                  <p>{service.desc}</p> */}

                  {service.image && <img src={service.image.url} alt={service.name} />}
                  {service.icon && <div className="icon"><i className={service.icon} /></div>}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
