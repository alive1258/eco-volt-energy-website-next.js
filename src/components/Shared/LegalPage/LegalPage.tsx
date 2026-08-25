import PageHero from "@/src/components/Shared/PageHero/PageHero";
import { IMAGES } from "@/src/utils/data/energy";

interface LegalPageProps {
  eyebrow: string;
  title: string;
  updated: string;
  body: string;
}

const LegalPage = ({ eyebrow, title, updated, body }: LegalPageProps) => {
  return (
    <>
      <PageHero
        eyebrow={eyebrow}
        title={title}
        subtitle={`Last updated: ${updated}`}
        image={IMAGES.windTurbinesField}
        alt="Wind turbines in a green field"
      />

      <section className="bg-white py-16 md:py-24">
        <div className="container max-w-3xl">
          <p className="whitespace-pre-line text-base leading-relaxed text-brand-900/70">
            {body}
          </p>
        </div>
      </section>
    </>
  );
};

export default LegalPage;
