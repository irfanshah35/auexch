"use client";

import { motion } from "framer-motion";
import { type MouseEvent, useState } from "react";
import styles from "./sidebar.module.css";

const sportsItems = [
  {
    name: "Cricket",
    iconUrl: "/sidebar/ic_cricket.svg",
    count: 6,
    tournaments: [
      {
        name: "Ford Trophy",
        count: 1,
        thirdItems: [{ name: "Central Stags v Canterbury Kings", count: 1 }],
      },
      {
        name: "ICC Men's T20 World Cup",
        count: 1,
        thirdItems: [{ name: "Otago Volts v Auckland Aces", count: 1 }],
      },
      {
        name: "Ford Trophy",
        count: 1,
        thirdItems: [{ name: "Central Stags v Canterbury Kings", count: 1 }],
      },
      {
        name: "ICC Men's T20 World Cup",
        count: 1,
        thirdItems: [{ name: "Otago Volts v Auckland Aces", count: 1 }],
      },
      {
        name: "Ford Trophy",
        count: 1,
        thirdItems: [{ name: "Central Stags v Canterbury Kings", count: 1 }],
      },
      {
        name: "ICC Men's T20 World Cup",
        count: 1,
        thirdItems: [{ name: "Otago Volts v Auckland Aces", count: 1 }],
      },
    ],
  },
  {
    name: "Football",
    iconUrl: "/sidebar/ic_football.svg",
    count: 22,
    tournaments: [
      {
        name: "Premier League",
        count: 22,
        thirdItems: [{ name: "Arsenal v Chelsea", count: 22 }],
      },
      {
        name: "La Liga",
        count: 18,
        thirdItems: [{ name: "Barcelona v Sevilla", count: 18 }],
      },
    ],
  },
];

const DROPDOWN_TRANSITION = {
  height: { duration: 0.28, ease: [0.22, 1, 0.36, 1] as const },
  opacity: { duration: 0.2, ease: "easeOut" as const },
};

export default function Sidebbar() {
  const [isQuickLinksOpen, setIsQuickLinksOpen] = useState(true);
  const [isSportsOpen, setIsSportsOpen] = useState(true);
  const [openSportIndex, setOpenSportIndex] = useState<number | null>(null);
  const [openTournamentKey, setOpenTournamentKey] = useState<string | null>(
    null,
  );

  const handleSportsToggle = () => {
    setIsSportsOpen((prev) => {
      const next = !prev;
      if (!next) {
        setOpenSportIndex(null);
        setOpenTournamentKey(null);
      }
      return next;
    });
  };

  const handleQuickLinksToggle = () => {
    setIsQuickLinksOpen((prev) => !prev);
  };

  const handleSportClick = (
    event: MouseEvent<HTMLAnchorElement>,
    index: number,
  ) => {
    event.preventDefault();
    setOpenTournamentKey(null);
    setOpenSportIndex((prev) => {
      const next = prev === index ? null : index;
      return next;
    });
  };

  const handleTournamentClick = (
    event: MouseEvent<HTMLAnchorElement>,
    sportIndex: number,
    tournamentIndex: number,
  ) => {
    event.preventDefault();
    const key = `${sportIndex}-${tournamentIndex}`;
    setOpenTournamentKey((prev) => (prev === key ? null : key));
  };

  return (
    <div className={styles.container}>
      <ul className={styles.list}>
        <div className={styles.searchRow}>
          <span className={styles.searchIconWrap}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              xmlnsXlink="http://www.w3.org/1999/xlink"
              aria-hidden="true"
              role="img"
              className={styles.searchIcon}
              id="_r_9n_"
              width="1em"
              height="1em"
              viewBox="0 0 24 24"
            >
              <path
                fill="currentColor"
                d="m20.71 19.29l-3.4-3.39A7.92 7.92 0 0 0 19 11a8 8 0 1 0-8 8a7.92 7.92 0 0 0 4.9-1.69l3.39 3.4a1 1 0 0 0 1.42 0a1 1 0 0 0 0-1.42M5 11a6 6 0 1 1 6 6a6 6 0 0 1-6-6"
              />
            </svg>
          </span>
          <span className={styles.shortcut}>⌘K</span>
        </div>

        <li className={styles.item}>
          <div
            className={`${styles.sectionTitle} flex items-center justify-between`}
            onClick={handleQuickLinksToggle}
            role="button"
            tabIndex={0}
            onKeyDown={(event) => {
              if (event.key === "Enter" || event.key === " ") {
                event.preventDefault();
                handleQuickLinksToggle();
              }
            }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              xmlnsXlink="http://www.w3.org/1999/xlink"
              aria-hidden="true"
              role="img"
              className={`${styles.sectionIcon} duration-300 ${!isQuickLinksOpen ? "-rotate-90" : ""}`}
              id="_r_6_"
              width="1em"
              height="1em"
              viewBox="0 0 24 24"
            >
              <path
                fill="currentColor"
                d="M12 16a1 1 0 0 1-.64-.23l-6-5a1 1 0 1 1 1.28-1.54L12 13.71l5.36-4.32a1 1 0 0 1 1.41.15a1 1 0 0 1-.14 1.46l-6 4.83A1 1 0 0 1 12 16"
              ></path>
            </svg>
            <span className={styles.sectionLabel}>Quick Links</span>
          </div>

          <motion.div
            className={styles.sportDropdown}
            initial={false}
            animate={
              isQuickLinksOpen
                ? { height: "auto", opacity: 1 }
                : { height: 0, opacity: 0 }
            }
            transition={DROPDOWN_TRANSITION}
          >
            <ul className={styles.subList}>
              <li className={styles.item}>
                <a className={styles.link}>
                  <span className={styles.linkIconWrap}>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      xmlnsXlink="http://www.w3.org/1999/xlink"
                      aria-hidden="true"
                      role="img"
                      className={styles.linkIcon}
                      id="_r_4f_"
                      width="1em"
                      height="1em"
                      viewBox="0 0 24 24"
                    >
                      <path
                        fill="none"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M3 12h4.5L9 6l4 12l2-9l1.5 3H21"
                      ></path>
                    </svg>
                  </span>
                  <span className={styles.linkText}>Inplay</span>
                  <span className={styles.badgeWrap}>
                    <span className={styles.badge}>34</span>
                  </span>
                </a>
              </li>

              <li className={styles.item}>
                <a className={styles.link}>
                  <span className={styles.marketIconWrap}>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      xmlnsXlink="http://www.w3.org/1999/xlink"
                      aria-hidden="true"
                      role="img"
                      className={styles.linkIcon}
                      id="_r_5_"
                      width="1em"
                      height="1em"
                      viewBox="0 0 14 14"
                    >
                      <g
                        fill="none"
                        stroke="currentColor"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="1"
                      >
                        <path d="M.5.5v13h13"></path>
                        <path d="M3.5 6.5L6 9l4-6l3.5 2.5"></path>
                      </g>
                    </svg>
                  </span>
                  <span className={styles.linkText}>Multi Markets</span>
                  <span className={styles.badgeWrap}>
                    <span className={styles.badge}>34</span>
                  </span>
                </a>
              </li>
            </ul>
          </motion.div>
        </li>

        <li className={styles.item}>
          <div
            className={`${styles.sectionTitle} flex items-center justify-between`}
            onClick={handleSportsToggle}
            role="button"
            tabIndex={0}
            onKeyDown={(event) => {
              if (event.key === "Enter" || event.key === " ") {
                event.preventDefault();
                handleSportsToggle();
              }
            }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              xmlnsXlink="http://www.w3.org/1999/xlink"
              aria-hidden="true"
              role="img"
              className={`${styles.sectionIcon} duration-300 ${!isSportsOpen ? "-rotate-90" : ""}`}
              id="_r_6_"
              width="1em"
              height="1em"
              viewBox="0 0 24 24"
            >
              <path
                fill="currentColor"
                d="M12 16a1 1 0 0 1-.64-.23l-6-5a1 1 0 1 1 1.28-1.54L12 13.71l5.36-4.32a1 1 0 0 1 1.41.15a1 1 0 0 1-.14 1.46l-6 4.83A1 1 0 0 1 12 16"
              ></path>
            </svg>
            <span className={`${styles.sectionLabel} flex-auto`}>sports</span>
            <span className={styles.badgeWrap}>
              <span className={styles.badge}>34</span>
            </span>
          </div>

          <motion.div
            className={styles.sportDropdown}
            initial={false}
            animate={
              isSportsOpen
                ? { height: "auto", opacity: 1 }
                : { height: 0, opacity: 0 }
            }
            transition={DROPDOWN_TRANSITION}
          >
            <ul className={styles.subList}>
              {sportsItems.map((sport, sportIndex) => (
                <li className={styles.item} key={`${sport.name}-${sportIndex}`}>
                  <a
                    className={styles.link}
                    href="#"
                    onClick={(event) => handleSportClick(event, sportIndex)}
                  >
                    <span className={styles.linkIconWrap}>
                      <span
                        className={styles.sportImage}
                        style={
                          {
                            "--sport-icon": `url(${sport.iconUrl})`,
                          } as { [key: string]: string }
                        }
                      ></span>
                    </span>
                    <span className={styles.linkText}>{sport.name}</span>
                    <span className={styles.badgeWrap}>
                      <span className={styles.badge}>{sport.count}</span>
                    </span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      xmlnsXlink="http://www.w3.org/1999/xlink"
                      aria-hidden="true"
                      role="img"
                      className={`${styles.navArrow} ${
                        openSportIndex === sportIndex ? styles.navArrowOpen : ""
                      }`}
                      id="_r_r_"
                      width="1em"
                      height="1em"
                      viewBox="0 0 24 24"
                    >
                      <path
                        fill="currentColor"
                        d="M10 19a1 1 0 0 1-.64-.23a1 1 0 0 1-.13-1.41L13.71 12L9.39 6.63a1 1 0 0 1 .15-1.41a1 1 0 0 1 1.46.15l4.83 6a1 1 0 0 1 0 1.27l-5 6A1 1 0 0 1 10 19"
                      ></path>
                    </svg>
                  </a>
                  <motion.div
                    className={`${styles.navItem} ${styles.sportDropdown}`}
                    initial={false}
                    animate={
                      openSportIndex === sportIndex
                        ? { height: "auto", opacity: 1 }
                        : { height: 0, opacity: 0 }
                    }
                    transition={DROPDOWN_TRANSITION}
                  >
                    <div className="flex w-full">
                      <div className="w-full">
                        <ul className={`${styles.navItemWrapper}`}>
                          {sport.tournaments.map(
                            (tournament, tournamentIndex) => (
                              <li
                                className={`${styles.navItemLi}`}
                                key={`${tournament.name}-${tournamentIndex}`}
                              >
                                <a
                                  className={`${styles.navLink}`}
                                  href={
                                    tournament.thirdItems.length > 0
                                      ? "#"
                                      : undefined
                                  }
                                  onClick={
                                    tournament.thirdItems.length > 0
                                      ? (event) =>
                                          handleTournamentClick(
                                            event,
                                            sportIndex,
                                            tournamentIndex,
                                          )
                                      : undefined
                                  }
                                >
                                  <span className={`${styles.navItemText}`}>
                                    {tournament.name}
                                  </span>
                                  <span className={styles.badgeWrap}>
                                    <span className={styles.badge}>
                                      {tournament.count}
                                    </span>
                                  </span>
                                  <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    xmlnsXlink="http://www.w3.org/1999/xlink"
                                    aria-hidden="true"
                                    role="img"
                                    className={`${styles.navArrow} ${
                                      openTournamentKey ===
                                      `${sportIndex}-${tournamentIndex}`
                                        ? styles.navArrowOpen
                                        : ""
                                    }`}
                                    id="_r_r_"
                                    width="1em"
                                    height="1em"
                                    viewBox="0 0 24 24"
                                  >
                                    <path
                                      fill="currentColor"
                                      d="M10 19a1 1 0 0 1-.64-.23a1 1 0 0 1-.13-1.41L13.71 12L9.39 6.63a1 1 0 0 1 .15-1.41a1 1 0 0 1 1.46.15l4.83 6a1 1 0 0 1 0 1.27l-5 6A1 1 0 0 1 10 19"
                                    ></path>
                                  </svg>
                                </a>

                                {tournament.thirdItems.length > 0 && (
                                  <motion.div
                                    className={`${styles.navItem} ${styles.sportDropdown}`}
                                    initial={false}
                                    animate={
                                      openTournamentKey ===
                                      `${sportIndex}-${tournamentIndex}`
                                        ? { height: "auto", opacity: 1 }
                                        : { height: 0, opacity: 0 }
                                    }
                                    transition={DROPDOWN_TRANSITION}
                                  >
                                    <div className="flex w-full">
                                      <div className="w-full">
                                        <ul
                                          className={`${styles.navItemWrapper}`}
                                        >
                                          {tournament.thirdItems.map(
                                            (thirdItem, thirdItemIndex) => (
                                              <li
                                                className={`${styles.navItemLi}`}
                                                key={`${thirdItem.name}-${thirdItemIndex}`}
                                              >
                                                <a
                                                  className={`${styles.navLink}`}
                                                >
                                                  <span
                                                    className={`${styles.thirdItemText}`}
                                                  >
                                                    {thirdItem.name}
                                                  </span>
                                                  <span
                                                    className={styles.badgeWrap}
                                                  >
                                                    <span
                                                      className={styles.badge}
                                                    >
                                                      {thirdItem.count}
                                                    </span>
                                                  </span>
                                                  <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    xmlnsXlink="http://www.w3.org/1999/xlink"
                                                    aria-hidden="true"
                                                    role="img"
                                                    className={`${styles.navArrow}`}
                                                    id="_r_r_"
                                                    width="1em"
                                                    height="1em"
                                                    viewBox="0 0 24 24"
                                                  >
                                                    <path
                                                      fill="currentColor"
                                                      d="M10 19a1 1 0 0 1-.64-.23a1 1 0 0 1-.13-1.41L13.71 12L9.39 6.63a1 1 0 0 1 .15-1.41a1 1 0 0 1 1.46.15l4.83 6a1 1 0 0 1 0 1.27l-5 6A1 1 0 0 1 10 19"
                                                    ></path>
                                                  </svg>
                                                </a>
                                              </li>
                                            ),
                                          )}
                                        </ul>
                                      </div>
                                    </div>
                                  </motion.div>
                                )}
                              </li>
                            ),
                          )}
                        </ul>
                      </div>
                    </div>
                  </motion.div>
                </li>
              ))}
            </ul>
          </motion.div>
        </li>
      </ul>
    </div>
  );
}
