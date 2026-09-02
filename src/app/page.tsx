import Hero from "@/components/Hero";
import BookingWidget from "@/components/BookingWidget";
import PricingBanner from "@/components/PricingBanner";
import ServiceGrid from "@/components/ServiceGrid";
import SocialProof from "@/components/SocialProof";
import TopBar from "@/components/TopBar";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import EmergencyModal from "@/components/EmergencyModal";

export default function Home() {
  return (
    <>
      <TopBar />
      <Header />
      <main className="flex-1">
        <Hero />
        <PricingBanner />
        <BookingWidget />
        <ServiceGrid />
        <SocialProof />
      </main>
      <Footer />
      <EmergencyModal />
    </>
  );
}
