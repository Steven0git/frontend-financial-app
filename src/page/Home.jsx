import React from "react";
import MainLayout from "layout/MainLayout.jsx";
import Hero from "landing/Hero.jsx";
import About from "landing/About.jsx";
import Feature from "landing/Feature.jsx";
const Home = () => {
  return (
    <MainLayout>
      <Hero />
      <About />
      <hr className="mt-1 bg-slate-500 text-slate-500 opacity-30" />
      <Feature />
      <hr className="mb-3 opacity-30" />
    </MainLayout>
  );
};
export default Home;
