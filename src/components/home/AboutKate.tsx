import { FadeIn } from "../FadeIn";
import { Button } from "../Button";
import { TrustPill } from "../TrustPill";

interface AboutKateProps {
  heading?: string;
  bio?: string;
  quote?: string;
}

export function AboutKate({
  heading = "Registered Nurse-led, independent and local to Shropshire",
  bio = "With extensive experience across the NHS, community settings, and private health insurance, I've seen firsthand how difficult it can be to hold everything together while coping with illness.",
  quote = "Our mission is to ensure every patient and family has the same level of knowledgeable, calm advocacy.",
}: AboutKateProps) {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-20 items-center">
          <FadeIn className="lg:col-span-5 relative">
            <div className="aspect-[4/5] rounded-[24px] overflow-hidden bg-teal-pale relative z-10">
              <img src="/images/kate-profile.svg" alt="Kate Phillips, Founder" className="w-full h-full object-cover" />
            </div>
            <div className="absolute -bottom-6 -right-6 w-48 h-48 bg-cream rounded-full z-0"></div>
          </FadeIn>
          <FadeIn delay={0.2} className="lg:col-span-7">
            <h2 className="mb-6 text-balance">{heading}</h2>
            <p className="text-lg text-text-muted mb-8">{bio}</p>
            <blockquote className="border-l-4 border-teal-mid pl-6 py-2 mb-8 bg-ivory/50 rounded-r-lg">
              <p className="text-xl font-serif italic text-teal-deep">"{quote}"</p>
            </blockquote>
            <div className="flex flex-wrap gap-2 mb-10">
              <TrustPill text="Registered Nurse (NMC)" />
              <TrustPill text="RAF-trained" />
              <TrustPill text="Complex care pathways" />
            </div>
            <Button variant="ghost" href="/about">Learn more about Kate →</Button>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
