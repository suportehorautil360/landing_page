import { Navbar } from "./components/landing/navbar";
import { Hero } from "./components/landing/hero";
import { Problems } from "./components/landing/problems";
import { DashboardSection } from "./components/landing/dashboard-section";
import { Features } from "./components/landing/features";
import { Security } from "./components/landing/security";
import { Results } from "./components/landing/results";
import { FooterCta } from "./components/landing/footer-cta";
import { Footer } from "./components/landing/footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Problems />
        <DashboardSection />
        <Features />
        <Security />
        <Results />
      </main>
      <FooterCta />
      <Footer />
    </>
  );
}
