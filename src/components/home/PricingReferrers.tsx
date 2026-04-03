import { FadeIn } from "../FadeIn";
import { Button } from "../Button";
import { CheckCircle2 } from "lucide-react";

function CheckItem({ children }: { children: React.ReactNode }) {
  return (
    <li className="flex gap-3">
      <CheckCircle2 className="w-5 h-5 text-sage shrink-0 mt-1" />
      <span className="text-text-body">{children}</span>
    </li>
  );
}

export function PricingReferrers() {
  return (
    <section className="grid md:grid-cols-2">
      <div className="bg-ivory py-20 px-8 md:px-16 lg:px-24">
        <FadeIn>
          <h3 className="text-3xl mb-6">Clear, flexible pricing</h3>
          <p className="text-text-muted mb-8 text-lg">
            Straightforward pricing with one-off sessions or short packages, depending on your needs. Travel within our core Shropshire area is included.
          </p>
          <ul className="space-y-4 mb-10">
            <CheckItem>Initial conversation – always free</CheckItem>
            <CheckItem>Session-based and package options</CheckItem>
            <CheckItem>No long-term contracts or tie-ins</CheckItem>
          </ul>
          <Button variant="ghost" href="/packages">View pricing &amp; packages →</Button>
        </FadeIn>
      </div>
      <div className="bg-teal-pale py-20 px-8 md:px-16 lg:px-24">
        <FadeIn delay={0.2}>
          <h3 className="text-3xl mb-6">Support for referrers</h3>
          <p className="text-text-muted mb-8 text-lg">
            We complement existing practice teams by taking on the non-clinical coordination and communication that often falls between the cracks.
          </p>
          <ul className="space-y-4 mb-10">
            <CheckItem>Independent, Registered Nurse-led support</CheckItem>
            <CheckItem>Clear communication &amp; agreed boundaries</CheckItem>
            <CheckItem>Local to SaTH, RJAH &amp; Whitchurch catchment</CheckItem>
          </ul>
          <Button variant="ghost" href="/for-referrers">More information for referrers →</Button>
        </FadeIn>
      </div>
    </section>
  );
}
