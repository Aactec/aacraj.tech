import React from 'react';
import HeaderComponent from './component/HeaderComponent';
import HeroComponent from './component/HeroComponent';
import AboutComponent from './component/AboutComponent';
import ServiceComponent from './component/ServiceComponent';
import SkillComponent from './component/SkillComponent';
import FeaturedProjectComponent from './component/FeaturedProjectComponent';
import PricingTableComponent from './component/PricingTableComponent';
import FooterComponent from './component/FooterComponent';
import ContactComponent from './component/ContactComponent';
import './App.css';

function App() {
  return (
    <main className="Background">
        <HeaderComponent />
        <HeroComponent />
        <AboutComponent />
        <ServiceComponent />
        <SkillComponent />
        <FeaturedProjectComponent />
        <PricingTableComponent />
        <ContactComponent />
        <FooterComponent />
    </main>
  );
}

export default App;
