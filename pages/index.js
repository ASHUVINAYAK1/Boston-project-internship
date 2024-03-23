import React, { Fragment, useEffect, useState } from "react";
import axios from "axios";
import Contact from "@/src/components/Contact";
import Footer from "@/src/components/Footer";
import Header from "@/src/components/Header";
import Home from "@/src/components/Home";
import Portfolio from "@/src/components/Portfolio";
import Services from "@/src/components/Services";
import Skill from "@/src/components/Skill";
import Testimonial from "@/src/components/Testimonial";
import ImageView from "@/src/components/popup/ImageView";
import { boston } from "@/src/utils";

const Index = () => {
  const [userData, setUserData] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    boston.scrollToActiveNav();
    boston.imgToSvg();
    axios
      .get("https://portfolio-backend-30mp.onrender.com/api/v1/get/user/65b3a22c01d900e96c4219ae")
      .then((response) => {
        setUserData(response.data.user); 
        setLoading(false); 
      })
      .catch((error) => {
        setError(error);
        setLoading(false); 
      });
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  const { timeline, skills, projects, testimonials, services, social_handles } = userData;
  return (
    <Fragment>
      <ImageView />
      <Header />
      <main className="wrapper">
        <Home />
        <Services servicesData={services} />
        <Skill skillsData={skills} experiencesData={timeline} />
        <Portfolio projectsData={projects} />
        <Testimonial testimonialData={testimonials} />
        <Contact />
        <div className="right-effects" />
        <div className="left-effects" />
      </main>
      <Footer socialhandles={social_handles} />
    </Fragment>
  );
};

export default Index;
