import { FadeIn } from "../FadeIn";
import { Button } from "../Button";

export function FinalCTA() {
  return (
    <section className="bg-teal-deep text-white py-24">
      <div className="max-w-4xl mx-auto px-4 text-center">
        <FadeIn>
          <h2 className="text-white mb-6">Feeling stuck or overwhelmed by care coordination?</h2>
          <p className="text-teal-light text-lg mb-10 max-w-2xl mx-auto">
            If you're in Shropshire and trying to juggle hospital, GP, community and caring responsibilities, you don't have to do it alone. A short conversation can clarify whether InKindRa is the right fit.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button variant="white" href="https://calendly.com/kate-phillips-inkindra/30min" external>
              Request a free call
            </Button>
            <Button variant="outline-white" href="/contact">
              Send us a message
            </Button>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
