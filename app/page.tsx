import AboutUS from "@/components/AboutUs";
import { CTA } from "@/components/CTA"; 
import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import NavBar from "@/components/Navbar";
import { PricingSection } from "@/components/Pricing";
import TeamSection from "@/components/team";
import { ReviewCardTestimonials } from "@/components/Testimonals";



export default function page() {
  return (
    <div className="space-y-2 md:space-y-5">
      <NavBar/>
      <HeroSection/>
      <AboutUS/>
      <TeamSection/>
      <ReviewCardTestimonials/>
      <PricingSection/>
      <CTA/>
      <Footer/>
    </div>
  )
}
