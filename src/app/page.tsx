"use client";

import { useEffect, useState } from "react";
import dynamic from "next/dynamic";

 
export default function Home() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 992);
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <>
      {/* ================= MOBILE VIEW ================= */}
      {isMobile && (
        <div>
          <h1>m-view</h1>
        </div>
      )}

      {/* ================= DESKTOP VIEW ================= */}
      {!isMobile && (
        <div>
          <h1>D View</h1>
        </div>
      )}
    </>
  );
}
