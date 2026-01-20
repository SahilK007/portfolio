function Navbar() {
  return (
    <nav className="fixed top-6 left-1/2 -translate-x-1/2 z-50">
      <div className="flex gap-6 px-8 py-4 rounded-full bg-black/40 backdrop-blur-md border border-white/10">
        {["hero","about","projects","achievements","contact"].map(link => (
          <a
            key={link}
            href={`#${link}`}
            className="text-sm text-slate-400 hover:text-cyan-400 transition"
          >
            {link.charAt(0).toUpperCase() + link.slice(1)}
          </a>
        ))}
      </div>
    </nav>
  );
}

export default Navbar;
