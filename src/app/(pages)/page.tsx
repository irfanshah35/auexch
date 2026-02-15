"use client";

import { useEffect, useState } from "react";
import dynamic from "next/dynamic";
import SingleMarket from "@/components/sidebar";
import Casino from "@/components/casino/page";
import SingleaMarket from "@/components/single-market/page";
import HomeSlider from "@/components/home-slider/page";
import SportsNave from "@/components/sports-nave";


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
          <HomeSlider />
          <SportsNave />
          <SingleaMarket />
          <Casino />
        </div>
      )}

      {/* ================= DESKTOP VIEW ================= */}
      {!isMobile && (
        <div>
          <HomeSlider />
          <br />
          <SportsNave />
            <br />
          <SingleaMarket />
          <Casino />
        </div>
      )}
    </>
  );
}
