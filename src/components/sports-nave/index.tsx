"use client";

import { useState, useEffect, useCallback } from "react";
import styles from "./sportsPage.module.css";
import { useAppStore } from "@/lib/store/store";
import { CONFIG } from "@/lib/config";
import { useAuthStore } from "@/lib/store/authStore";
import { usePathname } from "next/navigation";
import { fetchData } from "@/lib/functions";

export default function SportsNave() {
  const { menuList } = useAppStore();
  const [activeTab, setActiveTab] = useState("Cricket");
  const [navItems, setNavItems] = useState<{ label: string; href: string }[]>([]);

  const navData = ["cricket", "soccer", "tennis"];
  const [isMobile, setIsMobile] = useState(false);
  const {
    setCasinoEvents,
    setAllEventsList,
    setExchangeTypeList,
    setMenuList,
    setExchangeNews,
    setUserBalance,
    setStakeValue,
    setBannersList
  } = useAppStore();

  const pathname = usePathname();
  const { checkLogin, isLoggedIn } = useAuthStore();

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 1200);
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  // API Calls
  useEffect(() => {
    const token = localStorage.getItem("token");
    checkLogin(token || "");

    fetchData({
      url: CONFIG.getAllEventsList,
      payload: { key: CONFIG.siteKey },
      cachedKey: "allEventsList",
      setFn: setAllEventsList,
      expireIn: CONFIG.getAllEventsListTime,
    });

    fetchData({
      url: CONFIG.getTopCasinoGame,
      payload: { key: CONFIG.siteKey },
      cachedKey: "casinoEvents",
      setFn: setCasinoEvents,
      expireIn: CONFIG.getTopCasinoGameTime,
    });

    fetchData({
      url: CONFIG.menuList,
      payload: { key: CONFIG.siteKey },
      cachedKey: "menuList",
      setFn: setMenuList,
      expireIn: CONFIG.menuListTime,
    });

    fetchData({
      url: CONFIG.exchangeTypeList,
      payload: { key: CONFIG.siteKey },
      cachedKey: "exchangeTypeList",
      setFn: setExchangeTypeList,
      expireIn: CONFIG.exchangeTypeListTime,
    });
    

    fetchData({
      url: CONFIG.getExchangeNews,
      payload: { key: CONFIG.siteKey },
      cachedKey: "exchangeNews",
      setFn: setExchangeNews,
      expireIn: CONFIG.getExchangeNewsTime,

    });

    // fetchData({
    //   url: CONFIG.getUserBetStake,
    //   payload: { key: CONFIG.siteKey },
    //   cachedKey: "betStake",
    //   setFn: setStakeValue,
    //   expireIn: CONFIG.getUserBetStakeTime,
    // });
  }, []);

  useEffect(() => {
    const eventsType = menuList?.eventTypes;

    if (!eventsType) {
      setNavItems([]);
      return;
    }

    type NavItem = { label: string; href: string };

    const newItems: NavItem[] = eventsType
      .filter((item: any) => navData.includes(item?.eventType?.name?.toLowerCase()))
      .map((item: any) => ({
        label: item?.eventType?.name?.toUpperCase(),
        href: `/game-list/${item?.eventType?.name}/${item?.eventType?.id}`,
      }));

    setNavItems(newItems);

    // ✅ Explicitly typed `item`
    if (!newItems.some((item: NavItem) => item.label === activeTab)) {
      const cricketTab = newItems.find((item: NavItem) => item.label.toLowerCase() === "cricket");
      setActiveTab(cricketTab ? cricketTab.label : newItems[0]?.label);
    }
  }, [menuList]);



  const isActive = useCallback(
    (href: string) => {
      if (!href) return false;
      return href === "/" ? window.location.pathname === "/" : window.location.pathname.startsWith(href);
    },
    []
  );

  return (
    <section>
      <div className={styles["tabs-root"]}>
        <div className={styles["tabs-scroller"]}>
          <div role="tablist" className={styles["tabs-list"]}>
            {navItems.map((item, idx) => (
              <button
                key={idx}
                role="tab"
                aria-selected={activeTab === item.label}
                className={`${styles["tab-btn"]} ${activeTab === item.label ? styles.active : ""
                  }`}
                onClick={() => setActiveTab(item.label)}
              >
                {item.label}

                {/* Tab icon placeholder (optional) */}
                <span
                  className={`${styles["tab-icon"]} ${styles[`icon-${item.label.toLowerCase().replace(/\s/g, "-")}`]
                    }`}
                />

                {/* Active underline */}
                {activeTab === item.label && (
                  <span className={styles["tab-indicator"]}></span>
                )}
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
