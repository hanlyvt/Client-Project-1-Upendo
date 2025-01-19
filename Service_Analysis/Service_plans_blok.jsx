import React from "react";
import "./Service_plans_blok.css";

const ServicePlansBlok = ({ servicePlans }) => {
  return (
    <div className="plans_container">
      {servicePlans.map((plan, index) => (
        <div key={index} className="service_plan">
          <div className="service_lijntje"></div>
          <div className="serviceplanstitel">{plan.title}</div>
          <div className="service_plans_text_opsomming">
            <div className="serviceplanstext1">{plan.description}</div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ServicePlansBlok;
