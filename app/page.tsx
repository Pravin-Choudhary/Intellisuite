import AboutUS from "@/components/AboutUs";
import AgencyHeroSection from "@/components/ClientSection";
import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import NavBar from "@/components/Navbar";
import { PricingSection } from "@/components/Pricing";
import TeamSection from "@/components/team";



export default function page() {
  return (
    <div className="space-y-5">
      <NavBar/>
      <HeroSection/>
      <AboutUS/>
      <TeamSection/>
      <PricingSection/>
      <Footer/>
    </div>
  )
}
