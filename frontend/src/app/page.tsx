import Image from "next/image";
import HeroSection from "./components/HeroSection";
import AboutSection from "./components/AboutSection";
import WhatIDoSection from "./components/WhatIDoSection";
import InquerySection from "./components/InquerySection";
import OurProcess from "./components/OurProcess";

export default function Home() {
  return (
   <main>
    <HeroSection/>
    <AboutSection/>
    <WhatIDoSection/>
    <OurProcess/>
    <InquerySection/>
   </main>
  );
}
