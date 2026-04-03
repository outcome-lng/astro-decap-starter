import { Navbar } from "../Navbar";
import { Footer } from "../Footer";
import { HomeHero } from "./HomeHero";
import { Services } from "./Services";
import { Process } from "./Process";
import { WhoWeHelp } from "./WhoWeHelp";
import { AboutKate } from "./AboutKate";
import { PricingReferrers } from "./PricingReferrers";
import { FinalCTA } from "./FinalCTA";

export function HomePage() {
  return (
    <>
      <Navbar />
      <main className="pt-[72px]">
        <HomeHero />
        <Services />
        <Process />
        <WhoWeHelp />
        <AboutKate />
        <PricingReferrers />
        <FinalCTA />
      </main>
      <Footer />
    </>
  );
}
