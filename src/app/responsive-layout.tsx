"use client";

import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { useAppStore } from "../lib/store/store";
import { useAuthStore } from "@/lib/store/authStore";

// 🔥 Lazy Load Components Instead of Direct Import
 
 

 

export default function ResponsiveLayout({ children }: { children: React.ReactNode }) {
  const {
    setCasinoEvents,
    setAllEventsList,
    setExchangeTypeList,
    setMenuList,
    setExchangeNews,
    setUserBalance,
    setStakeValue,
  } = useAppStore();

  const pathname = usePathname();
  const [isMobile, setIsMobile] = useState(false);
  const [isReady, setIsReady] = useState(false);
  const { checkLogin, isLoggedIn } = useAuthStore();

  // device breakpoint detection
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 992);
      setIsReady(true);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);


  // Prevent blank white page before DOM mount
   

  const hideMenuAndSports =
    pathname?.includes("/market-details") ||
    [
      "/accountstatement",
      "/activity-log",
      "/bethistory",
      "/changepassword",
      "/password-history",
      "/profitloss",
      "/profitloss-event",
      "/profitloss-market",
      "/settings",
      "/userBetHistory",
      "/rules",
    ].includes(pathname || "");

  if (pathname === "/login") return children;

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