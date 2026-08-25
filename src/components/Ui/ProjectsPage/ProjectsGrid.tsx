"use client";

import Image from "next/image";
import { useMemo, useState } from "react";
import { motion } from "framer-motion";
import SlideUp from "@/src/components/Common/Animaation/SlideUp";
import { PROJECTS } from "@/src/utils/data/energy";

const CATEGORIES = ["All", "Solar Energy", "Wind Energy", "Energy Storage"];

const ProjectsGrid = () => {
  const [active, setActive] = useState("All");

  const filtered = useMemo(
    () =>
      active === "All"
        ? PROJECTS
        : PROJECTS.filter((project) => project.category === active),
    [active],
  );

  return (
    <section className="bg-white py-16 md:py-24">
      <div className="container">
        <SlideUp className="flex flex-wrap items-center justify-center gap-3">
          {CATEGORIES.map((category) => (
            <button
              key={category}
              type="button"
              onClick={() => setActive(category)}
              className={`rounded-full px-5 py-2.5 text-sm font-semibold transition ${
                active === category
                  ? "bg-brand-600 text-white"
                  : "bg-brand-50 text-brand-900/70 hover:bg-brand-100"
              }`}
            >
              {category}
            </button>
          ))}
        </SlideUp>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((project) => (
            <motion.div
              key={project.title}
              layout
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.35 }}
              className="group overflow-hidden rounded-2xl border border-brand-900/10 bg-white shadow-sm transition hover:shadow-xl"
            >
              <div className="relative aspect-4/3 overflow-hidden">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <span className="absolute left-4 top-4 rounded-full bg-white/90 px-3 py-1 text-[11px] font-bold uppercase tracking-wide text-brand-700">
                  {project.category}
                </span>
              </div>
              <div className="p-5">
                <h3 className="font-bold text-brand-950">{project.title}</h3>
                <p className="mt-1 text-sm text-brand-900/50">{project.detail}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsGrid;
