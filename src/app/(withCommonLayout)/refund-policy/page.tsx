import type { Metadata } from "next";
import LegalPage from "@/src/components/Shared/LegalPage/LegalPage";

export const metadata: Metadata = {
  title: "Refund Policy",
  description: "EcoVolt Energy's refund and cancellation policy.",
};

const BODY = `Deposits paid to schedule a site survey are fully refundable if cancelled more than 48 hours before the scheduled visit.

Once a project agreement is signed, cancellation terms and any applicable refunds are outlined in your individual service agreement, based on work already completed (design, permitting, materials ordered).

Consultations and quotes are always free and carry no cancellation fee.

This is a placeholder refund policy. Please replace this content with your finalized, legally reviewed refund policy before launch.`;

export default function RefundPolicyPage() {
  return (
    <LegalPage
      eyebrow="Refund Policy"
      title="Refund Policy"
      updated="August 2026"
      body={BODY}
    />
  );
}
