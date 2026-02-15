"use client";

import { useState, useEffect, useCallback } from "react";
import styles from "./sportsPage.module.css";
import { useAppStore } from "@/lib/store/store";

export default function SportsNave() {
  const { menuList } = useAppStore();
  const [activeTab, setActiveTab] = useState("Cricket");
  const [navItems, setNavItems] = useState<{ label: string; href: string }[]>([]);

  const navData = ["cricket", "soccer", "tennis"];

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
