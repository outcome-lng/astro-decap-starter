import { FadeIn } from "../FadeIn";
import { Navigation, ClipboardList, Home as HomeIcon, HeartHandshake, CalendarClock, Users, ArrowRight, Info } from "lucide-react";

const services = [
  { icon: Navigation, title: "Care Navigation", desc: "Coordination across NHS, private & community services. Managing letters, forms and clear hand-offs.", link: "/services" },
  { icon: ClipboardList, title: "Appointment Prep & Accompaniment", desc: "Preparing questions, attending key appointments, taking notes and agreeing next steps.", link: "/services" },
  { icon: HomeIcon, title: "Admission & Discharge Coordination", desc: "Home-readiness checklists, non-clinical set-up, and signposting to registered care providers.", featured: true, link: "/services" },
  { icon: HeartHandshake, title: "Carer Coaching & Practical Support", desc: "Weekly check-ins, briefings, admin support, and signposting for benefits/allowances.", link: "/services" },
  { icon: CalendarClock, title: "Ongoing Navigation Support", desc: "Long-term retained support for managing complex, multi-layered chronic conditions.", link: "/services" },
  { icon: Users, title: "Support for Referrers", desc: "Complementing GPs, discharge teams, and social prescribers with non-clinical coordination.", accent: "lavender" as const, link: "/for-referrers" },
];

export function Services() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <FadeIn className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-teal-mid font-medium uppercase tracking-wide text-sm mb-4 block">What we do</span>
          <h2 className="mb-6">Practical support, every step of the way</h2>
          <p className="text-lg text-text-muted">
            We are not here to replace your NHS team or social care. We are here to help you use them more effectively — and to make sure your voice is heard.
          </p>
        </FadeIn>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {services.map((service, i) => (
            <FadeIn key={i} delay={i * 0.1}>
              <a href={service.link} className="block h-full group">
                <div className={`h-full p-8 rounded-2xl border transition-all duration-300 group-hover:-translate-y-1 group-hover:shadow-lg ${
                  service.featured
                    ? "bg-teal-deep border-teal-deep text-white shadow-md"
                    : service.accent === "lavender"
                    ? "bg-lavender-light/30 border-lavender/20 hover:border-lavender"
                    : "bg-white border-border hover:border-teal-mid"
                }`}>
                  <service.icon className={`w-8 h-8 mb-6 ${service.featured ? "text-teal-light" : service.accent === "lavender" ? "text-lavender" : "text-teal-deep"}`} strokeWidth={1.5} />
                  <h3 className={`text-xl mb-3 ${service.featured ? "text-white" : ""}`}>{service.title}</h3>
                  <p className={`mb-6 leading-relaxed ${service.featured ? "text-teal-light" : "text-text-muted"}`}>{service.desc}</p>
                  <span className={`inline-flex items-center text-sm font-medium group-hover:underline underline-offset-4 ${service.featured ? "text-white" : "text-teal-mid"}`}>
                    Learn more <ArrowRight className="w-4 h-4 ml-1" />
                  </span>
                </div>
              </a>
            </FadeIn>
          ))}
        </div>

        <FadeIn delay={0.4}>
          <div className="flex gap-4 p-5 md:p-6 bg-ivory border-l-[3px] border-teal-mid rounded-lg">
            <Info className="w-6 h-6 text-teal-mid shrink-0 mt-0.5" />
            <div>
              <h4 className="font-serif font-semibold text-lg text-teal-deep mb-2">Phase 1 Scope Notice</h4>
              <div className="text-text-body text-sm md:text-base leading-relaxed">
                We provide independent advocacy, navigation and non-clinical support. <strong>We do not deliver personal care or clinical treatment.</strong> Where these are required, we coordinate with your NHS/private clinicians and CQC-registered providers.
              </div>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
