import { useState } from "react";
import { Navbar } from "../Navbar";
import { Footer } from "../Footer";
import { FadeIn } from "../FadeIn";
import { Button } from "../Button";
import { Mail, Phone, Calendar, AlertTriangle } from "lucide-react";

interface ContactPageProps {
  heroHeading?: string;
  heroSubheading?: string;
  email?: string;
  phone?: string;
  address?: string;
  calendlyUrl?: string;
}

export function ContactPage({
  heroHeading = "Get in touch",
  heroSubheading = "We aim to respond within one business day.",
  email = "info@inkindra.com",
  phone = "01743 630199",
  address = "Myddle, Shropshire, SY4 3AU",
  calendlyUrl = "https://calendly.com/kate-phillips-inkindra/30min",
}: ContactPageProps) {
  const [isSubmitted, setIsSubmitted] = useState(false);

  return (
    <>
      <Navbar />
      <main className="pt-[72px]">
        <div className="flex flex-col bg-cream min-h-screen pb-24">
          <section className="py-20 text-center px-4">
            <FadeIn>
              <h1 className="mb-6">{heroHeading}</h1>
              <p className="text-xl text-text-muted">{heroSubheading}</p>
            </FadeIn>
          </section>

          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
            <div className="grid lg:grid-cols-12 gap-12 items-start">
              <FadeIn className="lg:col-span-4 space-y-6">
                <a href={`mailto:${email}`} className="flex items-center gap-4 p-6 bg-white rounded-2xl border border-border hover:border-teal-mid hover:shadow-md transition-all group">
                  <div className="w-12 h-12 rounded-full bg-teal-pale flex items-center justify-center shrink-0">
                    <Mail className="w-6 h-6 text-teal-deep" />
                  </div>
                  <div>
                    <div className="text-sm text-text-muted mb-1">Email us</div>
                    <div className="font-medium text-teal-deep group-hover:underline">{email}</div>
                  </div>
                </a>
                <a href={`tel:${phone?.replace(/\s/g, '')}`} className="flex items-center gap-4 p-6 bg-white rounded-2xl border border-border hover:border-teal-mid hover:shadow-md transition-all group">
                  <div className="w-12 h-12 rounded-full bg-sage-light/30 flex items-center justify-center shrink-0">
                    <Phone className="w-6 h-6 text-sage" />
                  </div>
                  <div>
                    <div className="text-sm text-text-muted mb-1">Call us</div>
                    <div className="font-medium text-teal-deep group-hover:underline">{phone}</div>
                  </div>
                </a>
                <a href={calendlyUrl} target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 p-6 bg-teal-deep text-white rounded-2xl hover:bg-[#0a4537] hover:shadow-md transition-all">
                  <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center shrink-0">
                    <Calendar className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <div className="text-sm text-teal-light/80 mb-1">Schedule a chat</div>
                    <div className="font-medium underline underline-offset-2">Book a free 30min call</div>
                  </div>
                </a>
                <div className="p-6 bg-ivory rounded-2xl border border-border mt-8">
                  <h4 className="font-medium text-teal-deep mb-2">Location</h4>
                  <p className="text-sm text-text-muted leading-relaxed">
                    Serving Shropshire and the catchment areas for The Shrewsbury and Telford Hospital NHS Trust, RJAH and Whitchurch Community Hospital.
                    <br /><br />
                    {address}
                  </p>
                </div>
              </FadeIn>

              <FadeIn delay={0.2} className="lg:col-span-8 bg-white p-8 md:p-12 rounded-[24px] border border-border shadow-sm">
                <div className="flex items-start gap-4 p-4 mb-8 bg-amber-50 rounded-xl border border-amber-200 text-amber-900">
                  <AlertTriangle className="w-6 h-6 text-amber-600 shrink-0 mt-0.5" />
                  <p className="text-sm leading-relaxed">
                    <strong>Urgent safeguarding concern?</strong> Do not use this form. Please contact social services or call 999/111 immediately. We are not an emergency service.
                  </p>
                </div>

                {isSubmitted ? (
                  <div className="text-center py-16">
                    <div className="w-20 h-20 bg-teal-pale rounded-full flex items-center justify-center mx-auto mb-6">
                      <Mail className="w-10 h-10 text-teal-deep" />
                    </div>
                    <h3 className="text-3xl mb-4">Thank you</h3>
                    <p className="text-lg text-text-muted">We have received your message and will be in touch within one business day.</p>
                    <Button className="mt-8" onClick={() => setIsSubmitted(false)}>Send another message</Button>
                  </div>
                ) : (
                  <form
                    name="contact"
                    method="POST"
                    data-netlify="true"
                    netlify-honeypot="bot-field"
                    onSubmit={(e) => {
                      e.preventDefault();
                      const form = e.currentTarget;
                      fetch("/", {
                        method: "POST",
                        headers: { "Content-Type": "application/x-www-form-urlencoded" },
                        body: new URLSearchParams(new FormData(form) as any).toString(),
                      }).then(() => setIsSubmitted(true)).catch(() => alert("Something went wrong. Please try again."));
                    }}
                    className="space-y-6"
                  >
                    <input type="hidden" name="form-name" value="contact" />
                    <p className="hidden"><label>Don't fill this out: <input name="bot-field" /></label></p>

                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-medium text-text-body mb-2" htmlFor="firstName">First name <span className="text-red-500">*</span></label>
                        <input name="firstName" id="firstName" required className="w-full px-4 py-3 rounded-lg border border-border focus:ring-teal-mid focus:outline-none focus:ring-2 focus:border-transparent transition-all bg-cream/50" />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-text-body mb-2" htmlFor="lastName">Last name <span className="text-red-500">*</span></label>
                        <input name="lastName" id="lastName" required className="w-full px-4 py-3 rounded-lg border border-border focus:ring-teal-mid focus:outline-none focus:ring-2 focus:border-transparent transition-all bg-cream/50" />
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-medium text-text-body mb-2" htmlFor="email">Email <span className="text-red-500">*</span></label>
                        <input name="email" id="email" type="email" required className="w-full px-4 py-3 rounded-lg border border-border focus:ring-teal-mid focus:outline-none focus:ring-2 focus:border-transparent transition-all bg-cream/50" />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-text-body mb-2" htmlFor="phone">Phone number</label>
                        <input name="phone" id="phone" type="tel" className="w-full px-4 py-3 rounded-lg border border-border focus:ring-teal-mid focus:outline-none focus:ring-2 focus:border-transparent transition-all bg-cream/50" />
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-text-body mb-3">I am: <span className="text-red-500">*</span></label>
                      <div className="space-y-3">
                        {["An individual/family member", "A carer", "A professional/referrer"].map((opt) => (
                          <label key={opt} className="flex items-center gap-3 cursor-pointer">
                            <input type="radio" name="userType" value={opt} required className="w-4 h-4 text-teal-deep bg-cream border-border focus:ring-teal-mid" />
                            <span className="text-text-body">{opt}</span>
                          </label>
                        ))}
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-text-body mb-2" htmlFor="howCanWeHelp">How can we help? <span className="text-red-500">*</span></label>
                      <textarea name="howCanWeHelp" id="howCanWeHelp" rows={4} required minLength={10} className="w-full px-4 py-3 rounded-lg border border-border focus:ring-teal-mid focus:outline-none focus:ring-2 focus:border-transparent transition-all bg-cream/50 resize-none" placeholder="Please briefly describe your situation..." />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-text-body mb-2" htmlFor="howDidYouHear">How did you hear about us?</label>
                      <select name="howDidYouHear" id="howDidYouHear" className="w-full px-4 py-3 rounded-lg border border-border focus:ring-teal-mid focus:outline-none focus:ring-2 focus:border-transparent transition-all bg-cream/50 appearance-none">
                        <option value="">Please select...</option>
                        <option value="GP/referrer">GP or Professional Referrer</option>
                        <option value="Search">Internet search</option>
                        <option value="Word of mouth">Word of mouth</option>
                        <option value="Social media">Social media</option>
                        <option value="Other">Other</option>
                      </select>
                    </div>

                    <div className="pt-4">
                      <label className="flex items-start gap-3 cursor-pointer">
                        <input type="checkbox" name="consent" required className="w-5 h-5 mt-1 text-teal-deep bg-cream border-border focus:ring-teal-mid rounded" />
                        <span className="text-sm text-text-muted leading-relaxed">
                          I consent to InKindRa storing my details to respond to this enquiry, in line with the <a href="/privacy" target="_blank" className="text-teal-mid underline">Privacy Notice</a>. <span className="text-red-500">*</span>
                        </span>
                      </label>
                    </div>

                    <div className="pt-6">
                      <Button type="submit" className="w-full sm:w-auto px-10">Send your message</Button>
                    </div>
                  </form>
                )}
              </FadeIn>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
