"use client";

import { useEffect, useMemo, useRef, useState, type ReactNode } from "react";
import Marque from "@/components/common/marque";
import Header from "@/components/common/header";
import Footer from "@/components/common/footer";
import Sidebar from "@/components/sidebar";

export default function PagesLayout({ children }: { children: ReactNode }) {
  const [isMobile, setIsMobile] = useState(false);

  // ✅ Resizer state (desktop only)
  const containerRef = useRef<HTMLDivElement | null>(null);
  const draggingRef = useRef(false);

  const LEFT_WIDTH = 300; // fixed
  const DIVIDER_WIDTH = 8; // grab area (visual can still be thin)

  // main width in px (so right sidebar automatically expands/shrinks)
  const [mainWidth, setMainWidth] = useState<number>(0);

  const clamp = (v: number, min: number, max: number) =>
    Math.max(min, Math.min(max, v));

  const computeLimits = () => {
    const el = containerRef.current;
    if (!el) return { min: 360, max: 900, available: 0 };

    const total = el.clientWidth;

    // available space for (main + right) after fixed left + divider
    const available = Math.max(0, total - LEFT_WIDTH - DIVIDER_WIDTH);

    // pick sensible min/max based on available
    const min = Math.min(
      available - 260,
      Math.max(320, Math.floor(available * 0.35)),
    );
    const max = Math.max(min + 80, Math.floor(available * 0.75));

    return {
      min: clamp(min, 280, Math.max(280, available - 260)),
      max: clamp(max, 360, Math.max(360, available - 180)),
      available,
    };
  };

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 1200);
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // ✅ initialize + keep width valid on resize (desktop)
  useEffect(() => {
    if (isMobile) return;

    const setInitial = () => {
      const { min, max, available } = computeLimits();
      if (!available) return;

      setMainWidth((prev) => {
        // first time: set to ~51% like your old layout
        if (!prev) return clamp(Math.floor(available * 0.51179), min, max);
        return clamp(prev, min, max);
      });
    };

    setInitial();

    const onResize = () => setInitial();
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, [isMobile]);

  const onPointerDownDivider = (e: React.PointerEvent) => {
    if (isMobile) return;

    draggingRef.current = true;

    // capture pointer so drag continues even if cursor leaves divider
    (e.currentTarget as HTMLDivElement).setPointerCapture(e.pointerId);

    // prevent text selection while dragging
    document.body.style.userSelect = "none";
    document.body.style.cursor = "col-resize";
  };

  const onPointerMove = (e: React.PointerEvent) => {
    if (!draggingRef.current || isMobile) return;

    const el = containerRef.current;
    if (!el) return;

    const rect = el.getBoundingClientRect();
    const x = e.clientX - rect.left;

    // main width = pointerX - left fixed width - half divider (feel natural)
    const raw = x - LEFT_WIDTH - DIVIDER_WIDTH / 2;

    const { min, max } = computeLimits();
    setMainWidth(clamp(Math.floor(raw), min, max));
  };

  const endDrag = () => {
    if (!draggingRef.current) return;
    draggingRef.current = false;

    document.body.style.userSelect = "";
    document.body.style.cursor = "";
  };

  const mainStyle = useMemo(() => {
    // if not set yet, let it auto (effect will set it)
    if (!mainWidth) return undefined;

    return {
      flex: `0 0 ${mainWidth}px`,
      width: `${mainWidth}px`,
    } as const;
  }, [mainWidth]);

  if (isMobile) {
    return (
      <div className="w-full min-h-screen">
        <Marque />
        <Header />
        {children}
        <Footer />
      </div>
    );
  }

  return (
    <div className="w-full h-screen overflow-hidden">
      <div className="fixed top-0 left-0 w-full z-50">
        <Marque />
        <Header />
      </div>

      {/* ✅ Desktop body */}
      <div ref={containerRef} className="flex pt-[92px] h-full w-full mt-5">
        {/* LEFT (fixed 300px) */}
        <aside className="w-[300px] h-full overflow-y-auto no-scrollbar border-r border-white/5">
          <Sidebar />
        </aside>

        {/* MAIN (resizable) */}
        <main className="h-full overflow-y-auto no-scrollbar" style={mainStyle}>
          {children}
          <Footer />
        </main>

        {/* DIVIDER (drag handle) */}
        <div
          role="separator"
          aria-orientation="vertical"
          aria-label="Resize content"
          onPointerDown={onPointerDownDivider}
          onPointerMove={onPointerMove}
          onPointerUp={endDrag}
          onPointerCancel={endDrag}
          onLostPointerCapture={endDrag}
          className="relative h-full select-none"
          style={{
            width: `${DIVIDER_WIDTH}px`,
            cursor: "col-resize",
            touchAction: "none",
          }}
        >
          {/* thin visible line */}
          <div className="absolute left-1/2 top-0 h-full w-[1px] -translate-x-1/2 bg-black" />

          {/* your svg centered */}
          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-md bg-black/40 backdrop-blur px-1 py-1">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              xmlnsXlink="http://www.w3.org/1999/xlink"
              aria-hidden="true"
              role="img"
              id="_r_94_"
              width="1em"
              height="1em"
              viewBox="0 0 24 24"
              className="h-5 w-5 text-white/80"
            >
              <path
                fill="currentColor"
                fillRule="evenodd"
                clipRule="evenodd"
                d="M11.0625 5.505C11.0625 4.5375 10.2225 3.75 9.1875 3.75C8.1525 3.75 7.3125 4.5375 7.3125 5.505C7.3125 6.474 8.1525 7.26 9.1875 7.26C10.2225 7.26 11.0625 6.474 11.0625 5.505ZM11.0625 18.495C11.0625 17.526 10.2225 16.74 9.1875 16.74C8.1525 16.74 7.3125 17.526 7.3125 18.495C7.3125 19.464 8.1525 20.25 9.1875 20.25C10.2225 20.25 11.0625 19.4625 11.0625 18.495ZM9.1875 10.245C10.2225 10.245 11.0625 11.0325 11.0625 12C11.0625 12.9675 10.2225 13.755 9.1875 13.755C8.1525 13.755 7.3125 12.9675 7.3125 12C7.3125 11.0325 8.1525 10.245 9.1875 10.245ZM16.6875 5.505C16.6875 4.5375 15.8475 3.75 14.8125 3.75C13.7775 3.75 12.9375 4.5375 12.9375 5.505C12.9375 6.474 13.7775 7.26 14.8125 7.26C15.8475 7.26 16.6875 6.474 16.6875 5.505ZM14.8125 16.74C15.8475 16.74 16.6875 17.526 16.6875 18.495C16.6875 19.464 15.8475 20.25 14.8125 20.25C13.7775 20.25 12.9375 19.4625 12.9375 18.495C12.9375 17.526 13.7775 16.74 14.8125 16.74ZM16.6875 12C16.6875 11.0325 15.8475 10.245 14.8125 10.245C13.7775 10.245 12.9375 11.0325 12.9375 12C12.9375 12.9675 13.7775 13.755 14.8125 13.755C15.8475 13.755 16.6875 12.9675 16.6875 12Z"
              ></path>
            </svg>
          </div>
        </div>

        {/* RIGHT (auto expands/shrinks) */}
        <aside className="flex-1 h-full overflow-y-auto no-scrollbar border-l border-white/5">
          <Sidebar />
        </aside>
      </div>
    </div>
  );
}
