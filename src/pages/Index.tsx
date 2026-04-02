import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import LineupSection from "@/components/LineupSection";
import ScheduleSection from "@/components/ScheduleSection";
import ExperienceSection from "@/components/ExperienceSection";
import TicketsSection from "@/components/TicketsSection";
import VenueSection from "@/components/VenueSection";
import FAQSection from "@/components/FAQSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <Navbar />
      <HeroSection />
      <LineupSection />
      <ScheduleSection />
      <ExperienceSection />
      <TicketsSection />
      <VenueSection />
      <FAQSection />
      <Footer />
    </div>
  );
};

export default Index;
