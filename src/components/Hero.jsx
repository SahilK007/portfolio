import { motion } from "framer-motion";

function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center px-6">
      <motion.div
        initial={{ opacity: 0, y: 80 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="text-center max-w-4xl"
      >
        <h1 className="text-6xl md:text-7xl font-extrabold">
          Sahil <span className="text-cyan-400">Khot</span>
        </h1>
        <p className="mt-6 text-xl text-slate-400">
          AI-Assisted Full-Stack Developer
        </p>
        <p className="mt-8 text-slate-400">
          I build, experiment, and ship real-world web solutions.
        </p>
      </motion.div>
    </section>
  );
}

export default Hero;
