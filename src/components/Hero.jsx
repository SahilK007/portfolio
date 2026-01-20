export default function Hero() {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center text-center px-4">
      <h1 className="text-4xl sm:text-5xl font-bold text-gray-900">
        Sahil Khot
      </h1>

      <h2 className="mt-4 text-xl sm:text-2xl text-gray-700">
        AI-Assisted Full-Stack Developer
      </h2>

      <p className="mt-4 max-w-xl text-gray-600">
        I build and deploy web applications, AI-based tools, and student projects.
      </p>

      <div className="mt-6 flex gap-4 flex-wrap justify-center">
        <button className="px-6 py-2 bg-black text-white rounded-md">
          View Projects
        </button>

        <a
          href="https://wa.me/91XXXXXXXXXX"
          target="_blank"
          rel="noreferrer"
          className="px-6 py-2 border border-black rounded-md"
        >
          Hire Me
        </a>
      </div>
    </section>
  );
}
