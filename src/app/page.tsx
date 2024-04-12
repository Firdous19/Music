import HeroSection from "@/components/HeroSection";
import FeaturedCourses from "@/components/FeaturedCourses";
import Footer from "@/components/Footer";
import WhyChooseUs from "@/components/WhyChooseUs";
import { InfiniteCards } from "@/components/InfiniteCard";
import UpcomingWebinars from "@/components/UpcommingWebiners";
import { Instructors } from "@/components/Instructors";

export default function Home() {
  return (
    <main className="min-h-screen bg-black/[0.96] antialiased bg-grid-white/[0.02]">
      <HeroSection />
      <FeaturedCourses />
      <WhyChooseUs />
      <InfiniteCards />
      <UpcomingWebinars />
      <Instructors />
      <Footer />
    </main>
  );
}
