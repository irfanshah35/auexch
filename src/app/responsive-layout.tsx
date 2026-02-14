"use client";

import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { useAppStore } from "../lib/store/store";
import { useAuthStore } from "@/lib/store/authStore";
import Marque from "@/components/common/marque";

// 🔥 Lazy Load Components Instead of Direct Import
 
 

 

export default function ResponsiveLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const [isMobile, setIsMobile] = useState(false);

  // device breakpoint detection
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 992);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);


  return (
    <>
      {/* ---------------- MOBILE VIEW ---------------- */}
      {isMobile ? (
        <div className="relative w-full h-screen overflow-y-auto">
          

          <div className="overflow-y-auto">
            {/* <div className={`${hideMenuAndSports ? "h-[100px]" : "h-[142px]"}`}></div> */}
            {children}

            
          </div>
        </div>
      ) : (
        /* ---------------- DESKTOP VIEW ---------------- */
        <div className="relative w-full h-screen overflow-hidden">
          

          <Marque/>
          <div className="flex h-full">

            <main className="">
              {children}
              <div className="h-[30]"></div>
            </main>
          </div>

          
        </div>
      )}
    </>
  );
}