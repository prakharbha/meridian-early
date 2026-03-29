"use client";

import Image from "next/image";
import { useState, useEffect, useCallback } from "react";
import { ZoomIn, X } from "lucide-react";

interface ZoomImageProps {
  src: string;
  alt: string;
  className?: string;
}

export function ZoomImage({ src, alt, className }: ZoomImageProps) {
  const [open, setOpen] = useState(false);

  const close = useCallback(() => setOpen(false), []);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => { if (e.key === "Escape") close(); };
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [open, close]);

  return (
    <>
      {/* Thumbnail */}
      <div
        className={`group relative w-full cursor-zoom-in overflow-hidden rounded-xl shadow-2xl ${className ?? ""}`}
        onClick={() => setOpen(true)}
        title="Click to enlarge"
      >
        <div className="relative w-full aspect-video">
          <Image src={src} alt={alt} fill className="object-cover transition-transform duration-300 group-hover:scale-105" />
        </div>
        {/* hover overlay */}
        <div className="absolute inset-0 flex items-center justify-center bg-black/0 group-hover:bg-black/30 transition-colors duration-300 rounded-xl">
          <div className="flex flex-col items-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <ZoomIn className="w-8 h-8 text-white drop-shadow-lg" />
            <span className="text-white text-xs font-semibold tracking-wide drop-shadow-lg">Click to enlarge</span>
          </div>
        </div>
      </div>

      {/* Lightbox */}
      {open && (
        <div
          className="fixed inset-0 z-[9999] flex items-center justify-center p-4 bg-black/90 backdrop-blur-sm"
          onClick={close}
        >
          <button
            className="absolute top-4 right-4 text-white/70 hover:text-white transition-colors"
            onClick={close}
            aria-label="Close"
          >
            <X className="w-8 h-8" />
          </button>
          <div
            className="relative max-w-5xl w-full max-h-[90vh]"
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={src}
              alt={alt}
              width={1400}
              height={900}
              className="w-full h-auto max-h-[90vh] object-contain rounded-lg shadow-2xl"
            />
          </div>
        </div>
      )}
    </>
  );
}
