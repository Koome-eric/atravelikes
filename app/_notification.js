"use client";
import { useRef } from "react";

export function Notification() {
  const ref = useRef(null);
  function expandLines() {
    ref.current.classList.toggle("line-clamp-2");
  }

  return (
    <div className="text-[0.75rem] font-semibold text-center text-secondary p-2 bg-secondary text-white">
      <div ref={ref} className="line-clamp-2">
        Welcome to Atravelikes — your smart travel companion! For personalized assistance, feel free to call us: +2348053466817, +23408024139027, or +2348133228962.
      </div>
      <button
        className="text-primary min-[583px]:hidden underline-offset-4 underline"
        onClick={expandLines}
      >
        View more
      </button>
    </div>
  );
}
