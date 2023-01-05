import React, { useState } from "react";

import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import ShortenUrl from "./components/ShortenUrl/ShortenUrl";
import LinkProvider from "./store/LinkProvider";
import CTA from "./components/CTA/CTA";
import Footer from "./components/Footer/Footer";

const App = () => {
  // Manage mobile menu with state.
  const [showMobileMenu, setShowMobileMenu] = useState(false);

  return (
    <LinkProvider>
      {/* Reander header. */}
      <Header
        showMobileMenu={showMobileMenu}
        setShowMobileMenu={setShowMobileMenu}
      />

      {/* Render hero section */}
      <Hero />

      {/* Render shorten url section. */}
      <ShortenUrl />

      {/* Render CTA section. */}
      <CTA />

      {/* Render footer section. */}
      <Footer />
    </LinkProvider>
  );
};

export default App;
