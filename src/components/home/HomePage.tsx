import { Navbar } from "../Navbar";
import { Footer } from "../Footer";
import { HomeHero } from "./HomeHero";
import { Services } from "./Services";
import { Process } from "./Process";
import { WhoWeHelp } from "./WhoWeHelp";
import { AboutKate } from "./AboutKate";
import { PricingReferrers } from "./PricingReferrers";
import { FinalCTA } from "./FinalCTA";

interface HomePageProps {
  heroLabel?: string;
  heroHeading?: string;
  heroSubheading?: string;
  heroCtaText?: string;
  heroCtaUrl?: string;
  stat1Number?: string;
  stat1Label?: string;
  stat2Number?: string;
  stat2Label?: string;
  heroQuote?: string;
  heroQuoteAuthor?: string;
  heroQuoteRole?: string;
  kateHeading?: string;
  kateBio?: string;
  kateQuote?: string;
  ctaHeading?: string;
  ctaText?: string;
}

export function HomePage(props: HomePageProps) {
  return (
    <>
      <Navbar />
      <main className="pt-[72px]">
        <HomeHero
          label={props.heroLabel}
          heading={props.heroHeading}
          subheading={props.heroSubheading}
          ctaText={props.heroCtaText}
          ctaUrl={props.heroCtaUrl}
          stat1Number={props.stat1Number}
          stat1Label={props.stat1Label}
          stat2Number={props.stat2Number}
          stat2Label={props.stat2Label}
          quote={props.heroQuote}
          quoteAuthor={props.heroQuoteAuthor}
          quoteRole={props.heroQuoteRole}
        />
        <Services />
        <Process />
        <WhoWeHelp />
        <AboutKate
          heading={props.kateHeading}
          bio={props.kateBio}
          quote={props.kateQuote}
        />
        <PricingReferrers />
        <FinalCTA
          heading={props.ctaHeading}
          text={props.ctaText}
        />
      </main>
      <Footer />
    </>
  );
}
