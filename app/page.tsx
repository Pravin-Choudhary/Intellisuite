import AboutUS from "@/components/AboutUs";
import AgencyHeroSection from "@/components/ClientSection";
import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import NavBar from "@/components/Navbar";


export default function page() {
  return (
    <div className="space-y-5">
      <NavBar/>
      <HeroSection/>
      <AboutUS/>
      <AgencyHeroSection/>
      <Footer/>
    </div>
  )
}
