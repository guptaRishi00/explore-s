import React from "react";

import SectionTitle from "../../components/SectionTitle";

import SingleService from "../../components/Service/SingleService";

import serviceImg1 from "../../assets/images/service/1.png";
import serviceImg2 from "../../assets/images/service/2.png";
import serviceImg3 from "../../assets/images/service/3.png";
import serviceImg4 from "../../assets/images/service/4.png";

const Service = () => {
  return (
    <div className="react_popular_topics pt---100 pb---70">
      <div className="container">
        <SectionTitle Title="Our Expertise, Your Success" />
        <div className="row">
          <div
            className="col-lg-3 wow animate__fadeInUp"
            data-wow-duration="0.3s"
          >
            <SingleService
              itemImg={serviceImg1}
              title="Ph.D. Research Assistance"
            />
          </div>
          <div
            className="col-lg-3 wow animate__fadeInUp"
            data-wow-duration="0.5s"
          >
            <SingleService
              itemImg={serviceImg2}
              title="
                    Data Analysis & Statistics                "
            />
          </div>
          <div
            className="col-lg-3 wow animate__fadeInUp"
            data-wow-duration="0.7s"
          >
            <SingleService itemImg={serviceImg3} title="
                    Academic Writing Services                " />
          </div>
          <div
            className="col-lg-3 wow animate__fadeInUp"
            data-wow-duration="0.9s"
          >
            <SingleService itemImg={serviceImg4} title="
                    Publication & Review Support                " />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Service;
