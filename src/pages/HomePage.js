import { Navbar } from "../components/Navbar";
import { About } from "../components/About";
import { OurWork } from "../components/OurWork";
import { Contact } from "../components/Contact";
import { Footer } from "../components/Footer";
import { Testimonials } from "../components/Testimonials";
import { useEffect, useState } from "react";

export const HomePage = () => {
  const [showPage, setShowPage] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setShowPage(true);
    }, 1000);
  });

  if (!showPage) {
    return null;
  }

  return (
    <div className="fadeIn">
      <Navbar />

      <About />
      <OurWork />
      <Testimonials />
      <Contact />
      <Footer />
    </div>
  );
};
