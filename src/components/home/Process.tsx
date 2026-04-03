import { FadeIn } from "../FadeIn";
import { Button } from "../Button";

const steps = [
  "Free initial phone conversation",
  "Assessment & plan",
  "Joined-up support",
  "Delivery & check-ins",
  "Review & next steps",
];

export function Process() {
  return (
    <section className="py-24 bg-cream border-y border-border/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <FadeIn>
          <span className="text-teal-mid font-medium uppercase tracking-wide text-sm mb-4 block">The process</span>
          <h2 className="mb-16">A clear path forward, always</h2>
        </FadeIn>
        <div className="flex flex-col md:flex-row justify-between items-center md:items-start gap-8 md:gap-4 relative mb-16">
          <div className="hidden md:block absolute top-[28px] left-[10%] right-[10%] h-[2px] bg-border z-0"></div>
          {steps.map((step, i) => (
            <FadeIn key={i} delay={i * 0.1} className="relative z-10 w-full md:w-1/5 flex flex-col items-center">
              <div className="w-14 h-14 rounded-full bg-white border-4 border-cream shadow-sm flex items-center justify-center text-xl font-serif font-bold text-teal-deep mb-4">
                {i + 1}
              </div>
              <h4 className="font-medium text-text-body px-2">{step}</h4>
            </FadeIn>
          ))}
        </div>
        <FadeIn delay={0.5}>
          <Button variant="ghost" href="/how-it-works">See the full process →</Button>
        </FadeIn>
      </div>
    </section>
  );
}
