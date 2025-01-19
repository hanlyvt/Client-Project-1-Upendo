import React from "react";
import ServicePlansBlok from "./service_plans_blok";
import "./ServicePlansContainer.css";

const Service_plans_container = ({ service_plans_container = [] }) => {
  return (
    <div className="service-plans-container">
      {service_plans_container.length > 0 ? (
        service_plans_container.map((blok, index) => (
          <ServicePlansBlok
            key={index}
            servicePlans={blok.service_plans_blok}
          />
        ))
      ) : (
        <p>..</p>
      )}
    </div>
  );
};

export default Service_plans_container;
