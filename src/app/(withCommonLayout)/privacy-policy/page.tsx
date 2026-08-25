import type { Metadata } from "next";
import LegalPage from "@/src/components/Shared/LegalPage/LegalPage";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "How EcoVolt Energy collects, uses, and protects your data.",
};

const BODY = `EcoVolt Energy ("we", "us", "our") respects your privacy. This page outlines, at a high level, how we handle information collected through our website and consultations.

We collect information you provide directly to us — such as your name, email, phone number, and project details — when you request a quote or contact our team. We use this information solely to respond to your inquiry, schedule consultations, and provide our services.

We do not sell your personal information to third parties. Information may be shared with trusted partners strictly to deliver the services you request (e.g. installation scheduling, financing partners you opt into).

You may request access to, correction of, or deletion of your data at any time by contacting info@ecovolt.com.

This is a placeholder policy. Please replace this content with your finalized, legally reviewed privacy policy before launch.`;

export default function PrivacyPolicyPage() {
  return (
    <LegalPage
      eyebrow="Privacy Policy"
      title="Privacy Policy"
      updated="August 2026"
      body={BODY}
    />
  );
}
