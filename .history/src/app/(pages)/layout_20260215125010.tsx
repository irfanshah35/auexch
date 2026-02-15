"use client";

import { useEffect, useState, type ReactNode } from "react";
import Marque from "@/components/common/marque";
import Header from "@/components/common/header";
import Footer from "@/components/common/footer";
import Sidebar from "@/components/sidebar";

export default function PagesLayout({ children }: { children: ReactNode }) {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 1200);
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

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

      <div className="flex pt-[92px] h-full w-100% mt-5">
        <aside className="w-[300px] h-full overflow-y-auto no-scrollbar border-r border-white/5">
          <Sidebar />
        </aside>

        <main className="w-[51.179%] h-full overflow-y-auto no-scrollbar">
          {children}
          <Footer />
        </main>
        <div className="w-[0.279%] bg-black"></div>

        <aside className="flex- h-full overflow-y-auto no-scrollbar border-l border-white/5">
          <Sidebar />
        </aside>
      </div>
    </div>
  );
}
