import { useState } from "react";
import ProjectModal from "./ProjectModal";

function Projects() {
  const [open, setOpen] = useState(false);

  return (
    <section className="py-32 px-6 bg-slate-900">
      <h2 className="text-center text-5xl font-bold text-cyan-400">
        Projects
      </h2>

      <div
        onClick={() => setOpen(true)}
        className="mt-20 max-w-xl mx-auto p-8 rounded-2xl bg-slate-800 cursor-pointer hover:-translate-y-2 transition"
      >
        <h3 className="text-2xl font-semibold">
          Electronics E-Commerce Website
        </h3>
        <p className="mt-4 text-slate-400">
          Python + HTML + CSS + JavaScript
        </p>
      </div>

      {open && <ProjectModal close={() => setOpen(false)} />}
    </section>
  );
}

export default Projects;
