import type { Metadata } from "next";
import LegalPage from "@/src/components/Shared/LegalPage/LegalPage";

export const metadata: Metadata = {
  title: "Terms & Conditions",
  description: "The terms and conditions governing use of EcoVolt Energy's services.",
};

const BODY = `By requesting a quote, scheduling a consultation, or otherwise using EcoVolt Energy's services, you agree to the following terms.

All quotes provided through our website are estimates. Final pricing is confirmed after a site survey and depends on system size, site conditions, and local permitting requirements.

Installation timelines communicated during consultation are estimates and may shift due to permitting, weather, or equipment availability.

Warranties on equipment (solar panels, inverters, batteries, chargers) are provided by their respective manufacturers; workmanship warranties on installation are provided directly by EcoVolt Energy as outlined in your service agreement.

This is a placeholder terms page. Please replace this content with your finalized, legally reviewed terms and conditions before launch.`;

export default function TermsConditionsPage() {
  return (
    <LegalPage
      eyebrow="Terms & Conditions"
      title="Terms & Conditions"
      updated="August 2026"
      body={BODY}
    />
  );
}
