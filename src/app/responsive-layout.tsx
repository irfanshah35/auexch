"use client";

import { useEffect, useState } from "react";
import Marque from "@/components/common/marque";
import Header from "@/components/common/header";
import Footer from "@/components/common/footer";
import Sidebar from "@/components/sidebar";

export default function ResponsiveLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 1200);
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  /* ================= MOBILE ================= */
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

  /* ================= DESKTOP ================= */
  return (
    <div className="w-full h-screen overflow-hidden  ">

      <div className="fixed top-0 left-0 w-full z-50">
        <Marque />
        <Header />
      </div>


      <div className="flex pt-[92px] h-full">

        <aside className="w-[25%] h-full overflow-y-auto no-scrollbar border-r border-white/5">
          <Sidebar />
        </aside>


        <main className="w-[50%] h-full overflow-y-auto no-scrollbar px-3">
          {children}
          <Footer />
        </main>


        <aside className="w-[25%] h-full overflow-y-auto no-scrollbar border-l border-white/5">
          <Sidebar />
        </aside>
      </div>
    </div>
  );
}
