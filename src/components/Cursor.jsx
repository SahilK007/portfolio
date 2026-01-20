import { useEffect, useState } from "react";

function Cursor() {
  const [pos, setPos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    if (!window.matchMedia("(pointer: fine)").matches) return;

    document.body.style.cursor = "none";
    const move = e => setPos({ x: e.clientX, y: e.clientY });
    window.addEventListener("mousemove", move);
    return () => window.removeEventListener("mousemove", move);
  }, []);

  return (
    <div
      className="fixed w-3 h-3 bg-cyan-400 rounded-full pointer-events-none z-[9999]"
      style={{ transform: `translate(${pos.x}px, ${pos.y}px)` }}
    />
  );
}

export default Cursor;
