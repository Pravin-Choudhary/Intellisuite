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
    <section id="hero">
      <HeroSection/>
    </section>
    <section id="about-us" >
      <AboutUS/>
    </section>
    <section id="team">
      <TeamSection/>
    </section>
    <section id="reviews">
      <ReviewCardTestimonials/>
    </section>
    <section id="pricing">
      <PricingSection/>
    </section>
    <section id="cta">
      <CTA/>
    </section>
      <Footer/>
    </div>
  )
}
