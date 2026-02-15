"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";
import Marque from "@/components/common/marque";
import Header from "@/components/common/header";
import Footer from "@/components/common/footer";
import Sidebar from "@/components/sidebar";

export default function PagesLayout({ children }: { children: ReactNode }) {
  const [isMobile, setIsMobile] = useState(false);

  // ✅ resizable main width (in px)
  const containerRef = useRef<HTMLDivElement | null>(null);
  const [mainWidth, setMainWidth] = useState<number>(0);

  const isDraggingRef = useRef(false);
  const dragStartXRef = useRef(0);
  const dragStartWidthRef = useRef(0);

  // ---------- Mobile detect ----------
  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 1200);
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // ---------- Init / Persist main width ----------
  useEffect(() => {
    if (isMobile) return;

    const init = () => {
      const el = containerRef.current;
      if (!el) return;

      // available width for (main + divider + right) after left fixed 300px
      const total = el.clientWidth;

      // try persisted value
      const saved =
        typeof window !== "undefined"
          ? localStorage.getItem("pageslayout:mainWidth")
          : null;
      const savedNum = saved ? Number(saved) : NaN;

      // constraints
      const min = 360; // main min width
      const max = Math.max(min, total - 360); // keep right sidebar at least 360px

      if (!Number.isNaN(savedNum) && savedNum >= min && savedNum <= max) {
        setMainWidth(savedNum);
      } else {
        // default similar to your old 51.179% look
        const defaultWidth = Math.floor(total * 0.51179);
        setMainWidth(Math.max(min, Math.min(max, defaultWidth)));
      }
    };

    init();

    // keep it valid on window resize
    const onResize = () => init();
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, [isMobile]);

  // ---------- Drag handlers ----------
  const clampMainWidth = (w: number) => {
    const el = containerRef.current;
    if (!el) return w;

    const total = el.clientWidth;
    const min = 360;
    const max = Math.max(min, total - 360);
    return Math.max(min, Math.min(max, w));
  };

  const startDrag = (clientX: number) => {
    if (isMobile) return;
    isDraggingRef.current = true;
    dragStartXRef.current = clientX;
    dragStartWidthRef.current = mainWidth;

    // nicer UX while dragging
    document.body.style.userSelect = "none";
    document.body.style.cursor = "col-resize";
  };

  const moveDrag = (clientX: number) => {
    if (!isDraggingRef.current) return;

    const delta = clientX - dragStartXRef.current;
    const next = clampMainWidth(dragStartWidthRef.current + delta);

    setMainWidth(next);
    try {
      localStorage.setItem("pageslayout:mainWidth", String(next));
    } catch {}
  };

  const endDrag = () => {
    if (!isDraggingRef.current) return;
    isDraggingRef.current = false;

    document.body.style.userSelect = "";
    document.body.style.cursor = "";
  };

  useEffect(() => {
    if (isMobile) return;

    const onMouseMove = (e: MouseEvent) => moveDrag(e.clientX);
    const onMouseUp = () => endDrag();

    const onTouchMove = (e: TouchEvent) => {
      if (!e.touches?.length) return;
      moveDrag(e.touches[0].clientX);
    };
    const onTouchEnd = () => endDrag();

    window.addEventListener("mousemove", onMouseMove);
    window.addEventListener("mouseup", onMouseUp);
    window.addEventListener("touchmove", onTouchMove, { passive: false });
    window.addEventListener("touchend", onTouchEnd);

    return () => {
      window.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("mouseup", onMouseUp);
      window.removeEventListener("touchmove", onTouchMove);
      window.removeEventListener("touchend", onTouchEnd);
    };
  }, [isMobile, mainWidth]);

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

      <div ref={containerRef} className="flex pt-[92px] h-full w-100% mt-5">
        {/* ✅ left fixed 300px */}
        <aside className="w-[300px] h-full overflow-y-auto no-scrollbar border-r border-white/5">
          <Sidebar />
        </aside>

        {/* ✅ MAIN (resizable) */}
        <main
          className="h-full overflow-y-auto no-scrollbar"
          style={{ width: mainWidth ? `${mainWidth}px` : "51.179%" }}
        >
          {children}
          <Footer />
        </main>

        {/* ✅ DRAGGABLE DIVIDER */}
        <div
          className="w-[10px] relative select-none"
          style={{ cursor: "col-resize" }}
          onMouseDown={(e) => startDrag(e.clientX)}
          onTouchStart={(e) => {
            if (!e.touches?.length) return;
            startDrag(e.touches[0].clientX);
          }}
          role="separator"
          aria-orientation="vertical"
          aria-label="Resize content panel"
        >
          {/* hit area background */}
          <div className="absolute inset-0 bg-transparent" />

          {/* your svg (centered) */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
            aria-hidden="true"
            role="img"
            id="_r_94_"
            width="1em"
            height="1em"
            viewBox="0 0 24 24"
            className="absolute -translate-x-1/2 -translate-y-1/2 left-1/2 top-1/2 h-5 w-5 text-white/40"
          >
            <path
              fill="currentColor"
              fillRule="evenodd"
              clipRule="evenodd"
              d="M11.0625 5.505C11.0625 4.5375 10.2225 3.75 9.1875 3.75C8.1525 3.75 7.3125 4.5375 7.3125 5.505C7.3125 6.474 8.1525 7.26 9.1875 7.26C10.2225 7.26 11.0625 6.474 11.0625 5.505ZM11.0625 18.495C11.0625 17.526 10.2225 16.74 9.1875 16.74C8.1525 16.74 7.3125 17.526 7.3125 18.495C7.3125 19.464 8.1525 20.25 9.1875 20.25C10.2225 20.25 11.0625 19.4625 11.0625 18.495ZM9.1875 10.245C10.2225 10.245 11.0625 11.0325 11.0625 12C11.0625 12.9675 10.2225 13.755 9.1875 13.755C8.1525 13.755 7.3125 12.9675 7.3125 12C7.3125 11.0325 8.1525 10.245 9.1875 10.245ZM16.6875 5.505C16.6875 4.5375 15.8475 3.75 14.8125 3.75C13.7775 3.75 12.9375 4.5375 12.9375 5.505C12.9375 6.474 13.7775 7.26 14.8125 7.26C15.8475 7.26 16.6875 6.474 16.6875 5.505ZM14.8125 16.74C15.8475 16.74 16.6875 17.526 16.6875 18.495C16.6875 19.464 15.8475 20.25 14.8125 20.25C13.7775 20.25 12.9375 19.4625 12.9375 18.495C12.9375 17.526 13.7775 16.74 14.8125 16.74ZM16.6875 12C16.6875 11.0325 15.8475 10.245 14.8125 10.245C13.7775 10.245 12.9375 11.0325 12.9375 12C12.9375 12.9675 13.7775 13.755 14.8125 13.755C15.8475 13.755 16.6875 12.9675 16.6875 12Z"
            ></path>
          </svg>
        </div>

        {/* ✅ RIGHT sidebar auto grows/shrinks */}
        <aside className="flex-auto h-full overflow-y-auto no-scrollbar border-l border-white/5">
          <Sidebar />
        </aside>

        {/* ✅ optional drag overlay (so you can drag smoothly even if cursor goes over iframe/text) */}
        {isDraggingRef.current ? (
          <div
            className="fixed inset-0 z-[9999]"
            style={{ cursor: "col-resize" }}
          />
        ) : null}
      </div>
    </div>
  );
}
