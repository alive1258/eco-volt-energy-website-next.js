import { Mail, MapPin, Phone } from "lucide-react";
import SlideLeft from "@/src/components/Common/Animaation/SlideLeft";
import SlideRight from "@/src/components/Common/Animaation/SlideRight";
import ConsultationForm from "@/src/components/Ui/ContactPage/ConsultationForm";
import { COMPANY } from "@/src/utils/data/energy";

const INFO_ITEMS = [
  { icon: Phone, label: "Phone", value: COMPANY.phone, href: `tel:${COMPANY.phone.replace(/[^+\d]/g, "")}` },
  { icon: Mail, label: "Email", value: COMPANY.email, href: `mailto:${COMPANY.email}` },
  { icon: MapPin, label: "Address", value: COMPANY.address },
];

const ContactSection = () => {
  return (
    <section className="px-5 py-16 md:px-20 md:py-24">
      <div className="container overflow-hidden rounded-[28px] bg-brand-600 px-0">
        <div className="grid gap-10 p-8 sm:p-12 lg:grid-cols-2 lg:gap-16 lg:p-16">
          <SlideLeft>
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-brand-100">
              Get In Touch
            </span>
            <h2 className="mt-4 font-display text-3xl leading-tight text-white sm:text-4xl">
              Schedule A Free Consultation
            </h2>
            <p className="mt-4 max-w-md text-sm leading-relaxed text-white/75">
              Let&apos;s discuss how we can power your future with clean
              energy.
            </p>

            <ul className="mt-9 space-y-5">
              {INFO_ITEMS.map(({ icon: Icon, label, value, href }) => (
                <li key={label} className="flex items-start gap-4">
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-white/15 text-white">
                    <Icon size={18} />
                  </span>
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-wide text-white/50">
                      {label}
                    </p>
                    {href ? (
                      <a href={href} className="font-medium text-white transition hover:text-brand-100">
                        {value}
                      </a>
                    ) : (
                      <p className="font-medium text-white">{value}</p>
                    )}
                  </div>
                </li>
              ))}
            </ul>
          </SlideLeft>

          <SlideRight delay={2}>
            <ConsultationForm dark />
          </SlideRight>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
