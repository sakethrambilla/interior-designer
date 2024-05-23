import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Heroheader from "./Hero-header";
import Feature from "./Feature";
import Cta from "./Cta";
import Benefits from "./Benefits";
import Gallery from "./Gallery";
import Process from "./Process";
import Testimonials from "./Testimonials";

const LandingPage = () => {
  return (
    <main className=" font-poppins w-full ">
      <Heroheader />
      <Feature />
      <Cta />
      <Benefits />
      <Gallery />
      <Process />
      <Testimonials />
      <Footer />
    </main>
  );
};

export default LandingPage;
