"use client";

import Link from "next/link";
import { ArrowUp } from "lucide-react";
import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaLinkedinIn,
} from "react-icons/fa";
import Logo from "../Logo/Logo";
import { COMPANY } from "@/src/utils/data/energy";

const QUICK_LINKS = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Projects", href: "/projects" },
  { label: "Blog", href: "/#insights" },
  { label: "Contact", href: "/contact" },
];

const SERVICE_LINKS = [
  { label: "Solar Energy", href: "/services#solar-energy-solutions" },
  { label: "Wind Energy", href: "/services#wind-energy-solutions" },
  { label: "Energy Storage", href: "/services#energy-storage-systems" },
  { label: "EV Charging", href: "/services#ev-charging-solutions" },
  { label: "Maintenance", href: "/contact" },
];

const SUPPORT_LINKS = [
  { label: "FAQs", href: "/contact#faq" },
  { label: "Support Center", href: "/contact" },
  { label: "Privacy Policy", href: "/privacy-policy" },
  { label: "Terms & Conditions", href: "/terms-conditions" },
];

// TODO: swap in the company's real social profile URLs
const SOCIAL_LINKS = [
  { icon: FaFacebookF, label: "Facebook", href: "#" },
  { icon: FaTwitter, label: "Twitter", href: "#" },
  { icon: FaLinkedinIn, label: "LinkedIn", href: "#" },
  { icon: FaInstagram, label: "Instagram", href: "#" },
];

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative bg-white pt-16 pb-8 border-t border-brand-900/10">
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 mb-14">
          {/* BRAND */}
          <div className="lg:col-span-4 space-y-5">
            <Link href="/" className="inline-flex">
              <Logo variant="dark" size="lg" />
            </Link>
            <p className="text-brand-900/60 text-sm max-w-sm leading-relaxed">
              Powering a sustainable future with clean and renewable energy
              solutions.
            </p>

            <div className="flex gap-3">
              {SOCIAL_LINKS.map(({ icon: Icon, label, href }) => (
                <a
                  key={label}
                  href={href}
                  onClick={href === "#" ? (e) => e.preventDefault() : undefined}
                  aria-label={label}
                  className="flex items-center justify-center w-9 h-9 rounded-full bg-brand-50 text-brand-700 hover:bg-brand-600 hover:text-white transition-colors"
                >
                  <Icon size={13} />
                </a>
              ))}
            </div>
          </div>

          {/* LINK COLUMNS */}
          <div className="lg:col-span-8 grid grid-cols-2 gap-8 md:grid-cols-3">
            <div className="space-y-4">
              <h3 className="text-sm font-bold text-brand-900">Quick Links</h3>
              <ul className="space-y-3">
                {QUICK_LINKS.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-brand-900/60 hover:text-brand-600 text-sm transition-colors duration-300"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div className="space-y-4">
              <h3 className="text-sm font-bold text-brand-900">Services</h3>
              <ul className="space-y-3">
                {SERVICE_LINKS.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-brand-900/60 hover:text-brand-600 text-sm transition-colors duration-300"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div className="space-y-4">
              <h3 className="text-sm font-bold text-brand-900">Support</h3>
              <ul className="space-y-3">
                {SUPPORT_LINKS.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-brand-900/60 hover:text-brand-600 text-sm transition-colors duration-300"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* BOTTOM BAR */}
        <div className="pt-6 border-t border-brand-900/10 flex flex-col md:flex-row justify-between items-center gap-4 text-center md:text-left">
          <p className="text-xs text-brand-900/50">
            © {currentYear} {COMPANY.name}. All Rights Reserved.
          </p>
          <p className="text-xs text-brand-900/40">
            {COMPANY.address} · {COMPANY.phone}
          </p>
        </div>
      </div>

      <button
        onClick={scrollToTop}
        aria-label="Back to top"
        className="fixed bottom-6 right-6 z-40 flex h-11 w-11 items-center justify-center rounded-full bg-brand-600 text-white shadow-lg transition hover:bg-brand-700 hover:-translate-y-1"
      >
        <ArrowUp size={18} />
      </button>
    </footer>
  );
};

export default Footer;
