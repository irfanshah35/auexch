"use client";

import { useState } from "react";
import styles from "./sportsPage.module.css";

const tabs = ["Cricket", "Soccer", "Tennis"];

export default function SportsNave() {
  const [activeTab, setActiveTab] = useState("Cricket");

  return (
    <section>
      <h2 className={styles["sr-only"]}>Explore Cricket Betting</h2>

      <div className={styles["tabs-root"]}>
        <div className="MuiButtonBase-root MuiTabScrollButton-root MuiTabScrollButton-horizontal Mui-disabled MuiTabs-scrollButtons css-xuc7kg"><svg className="MuiSvgIcon-root MuiSvgIcon-fontSizeSmall css-qgieeu" focusable="false" aria-hidden="true" viewBox="0 0 24 24"><path d="M15.41 16.09l-4.58-4.59 4.58-4.59L14 5.5l-6 6 6 6z"></path></svg><span className="MuiTouchRipple-root css-4mb1j7"></span></div>
        <div className={styles["tabs-scroller"]}>
          <div role="tablist" className={styles["tabs-list"]}>
            {tabs.map((tab) => (
              <button
                key={tab}
                role="tab"
                aria-selected={activeTab === tab}
                className={`${styles["tab-btn"]} ${activeTab === tab ? styles.active : ""
                  }`}
                onClick={() => setActiveTab(tab)}
              >
                {tab}
                <span
                  className={`${styles["tab-icon"]} ${styles[`icon-${tab.toLowerCase().replace(/\s/g, "-")}`]
                    }`}
                />
              </button>
            ))}
          </div>

          {/* Indicator */}
          <span
            className={styles["tab-indicator"]}
            style={{
              /* optional: move indicator dynamically later */
            }}
          />
        </div>
      </div>
    </section>
  );
}
