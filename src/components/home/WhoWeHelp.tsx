import { FadeIn } from "../FadeIn";
import { HeartHandshake, Users, CheckCircle2 } from "lucide-react";

function CheckItem({ children }: { children: React.ReactNode }) {
  return (
    <li className="flex gap-3">
      <CheckCircle2 className="w-5 h-5 text-sage shrink-0 mt-1" />
      <span className="text-text-body">{children}</span>
    </li>
  );
}

export function WhoWeHelp() {
  return (
    <section className="py-24 bg-teal-pale">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-8">
          <FadeIn>
            <div className="bg-white p-10 rounded-2xl border border-border h-full shadow-sm">
              <div className="w-12 h-12 rounded-xl bg-teal-light flex items-center justify-center mb-6">
                <HeartHandshake className="w-6 h-6 text-teal-deep" />
              </div>
              <h3 className="text-2xl mb-6">Individuals &amp; Families</h3>
              <ul className="space-y-4">
                <CheckItem>Approaching or recovering from hospital admission</CheckItem>
                <CheckItem>Managing multiple conditions and appointments</CheckItem>
                <CheckItem>Living at a distance from relatives needing support</CheckItem>
                <CheckItem>Feeling overwhelmed by "who does what"</CheckItem>
              </ul>
            </div>
          </FadeIn>
          <FadeIn delay={0.2}>
            <div className="bg-white p-10 rounded-2xl border border-border h-full shadow-sm">
              <div className="w-12 h-12 rounded-xl bg-lavender-light flex items-center justify-center mb-6">
                <Users className="w-6 h-6 text-lavender" />
              </div>
              <h3 className="text-2xl mb-6">Referrers &amp; Professionals</h3>
              <ul className="space-y-4 mb-8">
                <CheckItem>GP practices &amp; PCN social prescribing teams</CheckItem>
                <CheckItem>Hospital discharge and flow teams</CheckItem>
                <CheckItem>Community pharmacies &amp; voluntary sector</CheckItem>
                <CheckItem>Private hospitals needing joined-up community support</CheckItem>
              </ul>
              <a href="/for-referrers" className="text-teal-mid font-medium hover:underline inline-block">
                Learn more in For Referrers →
              </a>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
