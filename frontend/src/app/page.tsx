import Image from "next/image";
import HeroSection from "./components/HeroSection";
import AboutSection from "./components/AboutSection";
import WhatIDoSection from "./components/WhatIDoSection";
import InquerySection from "./components/InquerySection";

export default function Home() {
  return (
   <main>
    <HeroSection/>
    <AboutSection/>
    <WhatIDoSection/>
    <InquerySection/>
   </main>
  );
}
