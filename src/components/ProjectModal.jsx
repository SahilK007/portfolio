function ProjectModal({ close }) {
  return (
    <div className="fixed inset-0 bg-black/80 backdrop-blur z-50 flex justify-center overflow-y-auto">
      <div className="bg-slate-900 p-10 rounded-3xl max-w-3xl my-20 relative">
        <button onClick={close} className="absolute top-6 right-6">✕</button>
        <h2 className="text-4xl font-bold text-cyan-400">
          Electronics E-Commerce Website
        </h2>
        <p className="mt-6 text-slate-400">
          A full frontend project focused on UI, responsiveness and product flow.
        </p>
      </div>
    </div>
  );
}

export default ProjectModal;
