import React from "react";

const About = ({ userData }) => {
  return (
    <section id="about" className="section about-section bg-gray">
      <div className="container">
        <div className="row">
          <div className="col-lg-6">
            <div className="about-img">
              <img src={userData.about.avatar.url} alt="About" />
            </div>
          </div>
          <div className="col-lg-6">
            <div className="about-content">
              <h2>About Me</h2>
              <p>{userData.about.description}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
