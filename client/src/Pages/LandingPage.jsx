import React from "react";

import TopNav from "../components/TopNav";
import Header from "../components/Header";
import Hero from "../components/Hero";
import Flash from "../components/Flash";
import BestSeller from "../components/BestSeller";
import Footer from "../components/Footer";
import Service from "../components/Service";
import Arrival from "../components/Arrival";
import Main from "../components/Main";

const LandingPage = () => {
  return (
    <div className="w-full h-auto bg-[#fff] scroll-smooth">
      <Hero />

      <Main />

      <Service />
    </div>
  );
};

export default LandingPage;
