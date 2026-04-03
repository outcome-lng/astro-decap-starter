import { FadeIn } from "../FadeIn";
import { Button } from "../Button";
import { TrustPill } from "../TrustPill";

interface HomeHeroProps {
  label?: string;
  heading?: string;
  subheading?: string;
  ctaText?: string;
  ctaUrl?: string;
  stat1Number?: string;
  stat1Label?: string;
  stat2Number?: string;
  stat2Label?: string;
  quote?: string;
  quoteAuthor?: string;
  quoteRole?: string;
}

export function HomeHero({
  label = "Registered Nurse-led · Shropshire & surrounds",
  heading = "Registered nurse-led care navigation — so your family isn't doing it alone.",
  subheading = "We coordinate appointments, communication and next steps across NHS, private and community services — so nothing gets lost between teams.",
  ctaText = "Talk to a Care Navigator",
  ctaUrl = "https://calendly.com/kate-phillips-inkindra/30min",
  stat1Number = "90,500",
  stat1Label = "Delayed bed days per week nationally",
  stat2Number = "1",
  stat2Label = "Conversation that starts complete care co-ordination",
  quote = "In 2024, I navigated complex care journeys for my late father and youngest daughter. That experience reinforced why every family deserves an advocate.",
  quoteAuthor = "Kate Phillips",
  quoteRole = "Founder, Registered Nurse",
}: HomeHeroProps) {
  return (
    <section className="bg-cream pt-16 pb-24 md:pt-24 md:pb-32 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <FadeIn>
            <div className="max-w-xl">
              <span className="inline-block text-sage font-semibold uppercase tracking-wider text-sm mb-6">{label}</span>
              <h1 className="mb-6 text-balance">{heading}</h1>
              <p className="text-xl text-text-muted mb-8 text-balance">{subheading}</p>
              <div className="flex flex-wrap gap-4 mb-10">
                <Button href={ctaUrl} external>{ctaText}</Button>
                <Button variant="ghost" href="/services">See how we help</Button>
              </div>
              <div className="flex flex-wrap gap-2">
                <TrustPill text="Registered Nurse-led" />
                <TrustPill text="DBS checked" />
                <TrustPill text="Insured" />
                <TrustPill text="ICO-registered" />
              </div>
            </div>
          </FadeIn>

          <FadeIn delay={0.2} direction="left">
            <div className="relative">
              <div className="bg-white rounded-2xl shadow-xl shadow-teal-deep/5 overflow-hidden border border-border">
                <div className="h-2 w-full bg-gradient-to-r from-teal-mid via-sage to-lavender"></div>
                <div className="p-8 md:p-10">
                  <div className="grid grid-cols-2 gap-8 mb-10">
                    <div>
                      <div className="text-4xl font-serif text-teal-deep font-semibold mb-2">{stat1Number}</div>
                      <div className="text-sm font-medium text-text-muted leading-tight">{stat1Label}</div>
                    </div>
                    <div>
                      <div className="text-4xl font-serif text-teal-deep font-semibold mb-2">{stat2Number}</div>
                      <div className="text-sm font-medium text-text-muted leading-tight">{stat2Label}</div>
                    </div>
                  </div>
                  <div className="bg-lavender-light/50 p-6 rounded-xl border-l-4 border-lavender text-text-body relative">
                    <p className="italic font-medium text-lg leading-relaxed mb-4">"{quote}"</p>
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-teal-pale flex items-center justify-center text-teal-deep font-serif font-bold text-xl">{quoteAuthor?.[0] ?? "K"}</div>
                      <div>
                        <div className="font-semibold text-teal-deep text-sm">{quoteAuthor}</div>
                        <div className="text-xs text-text-muted">{quoteRole}</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="absolute -bottom-6 -right-4 md:-right-8 bg-teal-deep text-white px-6 py-4 rounded-xl shadow-lg font-medium text-sm border-2 border-white transform rotate-2">
                Initial call — Always free
              </div>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
