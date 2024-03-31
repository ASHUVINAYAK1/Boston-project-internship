import React, { useState, useRef } from "react";
import SectionTitle from "./SectionTitle";

const Portfolio = ({ projectsData }) => {
  const [activeFilter, setActiveFilter] = useState("All");
  const [selectedProject, setSelectedProject] = useState(null);

  const handleFilterClick = (filter) => {
    setActiveFilter(filter);
  };

  const openProjectDetails = (project) => {
    setSelectedProject(project);
  };

  const closeProjectDetails = () => {
    setSelectedProject(null);
  };

  const cutProjectDetails = () => {
    setSelectedProject(null);
  };

  const modalRef = useRef(null);

  const handleOutsideClick = (event) => {
    if (modalRef.current && !modalRef.current.contains(event.target)) {
      cutProjectDetails();
    }
  };

  return (
    <section id="work" className="section work-section bg-gray">
      <div className="container">
        <SectionTitle heading={"Latest Projects"} subHeading={"Portfolio"} />
        <div className="text-center mb-4">
        </div>
        <div className="row g-4 lightbox-gallery">
          {projectsData.map((portfolio) => (
            (activeFilter === "All" || portfolio.techStack.includes(activeFilter)) && (
              <div className="col-sm-6 col-lg-4" key={portfolio.id}>
                <div className="portfolio-box">
                  <div className="portfolio-img">
                    <button
                      className="gallery-link"
                      onClick={() => openProjectDetails(portfolio)}
                    >
                      <img src={portfolio.image.url} alt="image" />
                    </button>
                  </div>
                  <div className="portfolio-info">
                    <h6>{portfolio.title}</h6>
                    <span>{portfolio.subtitle}</span>
                    <a href={portfolio.image.url} className="gallery-link">
                      <i className="fas fa-arrow-right" />
                    </a>
                  </div>
                </div>
              </div>
            )
          ))}
        </div>
        {selectedProject && (
          <div className="modal" style={{ display: "block" }} onClick={handleOutsideClick}>
            <div className="modal-dialog" ref={modalRef}>
              <div className="modal-content">
                <div className="modal-header">
                  <h5 className="modal-title">{selectedProject.title}</h5>
                  <button
                    type="button"
                    className="btn-close"
                    aria-label="Close"
                    onClick={closeProjectDetails}
                  ></button>
                </div>
                <div className="modal-body">
                  <p>{selectedProject.description}</p>
                  <p>Technologies Used: {selectedProject.techStack.join(", ")}</p>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Portfolio;
