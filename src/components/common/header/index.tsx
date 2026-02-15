"use client";

import Link from "next/link";
import Image from "next/image";
import styles from "./headerPage.module.css";
import Icon from "@/icons/icons";
import { useEffect, useState } from "react";

export default function Header() {

  const [isDark, setIsDark] = useState(true);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const toggleTheme = () => {
    setIsDark(!isDark);
    if (isDark) {
      document.documentElement.classList.remove('dark');
    } else {
      document.documentElement.classList.add('dark');
    }
  };
  return (
    <header className="w-full bg-[#121A1F] border-b border-gray-800 text-white sticky top-0 z-[100]">
      <div className="max-w-[1600px] mx-auto px-2 h-12 flex items-center justify-between">

        {/* 👇 Left: Hamburger & Logo */}
        <div className="flex items-center gap-3 md:gap-4">
          <button className="text-gray-400 hover:text-white transition-colors p-1">
            <Icon name="logo" className="h-6 w-6" />
          </button>
          <Link href="/" className="font-[inherit]  no-underline shrink-0 text-transparent inline-flex h-[44px] w-[152px] cursor-pointer">
            <Image src="/brand_logo_dark.png" alt="AuExch Logo" fill className="object-contain relative! mx-1 " />
          </Link>
        </div>

        <nav className="hidden min-[960px]:flex items-center gap-3 lg:gap-4 font-bold text-white">
          <Link href="/" className="flex p-1 items-center text-[13px] font-bold text-white hover:text-white transition-colors group">
            <span className=" group-hover:text-white transition-colors">
              <Icon name="exchange" className="h-6 w-6" />
            </span>
            Exchange
          </Link>

          <Link href="/casinos/q-tech/aviator" className="flex p-1 items-center text-[15px] font-medium text-white hover:text-white transition-colors">
            <span>
              <Icon name="aviator" className="h-8 w-8" />
            </span>
            <span className="font-bold tracking-wider text-white">Aviator</span>
          </Link>


          <Link href="/casinos/q-tech/aviator" className="flex p-1 items-center text-[15px] font-medium text-white hover:text-white transition-colors">
            <span>
              <Icon name="evolution" className="w-15 h-7" />
            </span>
          </Link>

          <Link href="/slot" className="flex p-1 items-center text-[15px] font-medium text-white hover:text-white transition-colors">
            <span>
              <Icon name="slot" className="h-5 w-5" />
            </span>
            <span className="text-white font-bold">
              Slot
            </span>
          </Link>

          <Link href="/live-casino" className="flex p-1 items-center text-[15px] font-medium text-white hover:text-white transition-colors group">
            {/* Live Casino Icon */}
            <span className="text-gray-400 group-hover:text-white transition-colors">
              <Icon name="casino" className="h-6 w-6" />
            </span>
            Live Casino
          </Link>
        </nav>

        <div className="flex items-center gap-2 sm:gap-[10px]">
          {mounted && (
            <button
              onClick={toggleTheme}
              className="text-gray-400 hover:text-white transition-colors p-1 cursor-pointer hidden min-[600px]:flex"
              aria-label="Toggle color scheme"
            >
              <Icon name={isDark ? "moon" : "sun"} className="w-[24.96px] h-[24.96px] transition-transform" />
            </button>
          )}

          <Link
            href="/auth/login"
            className="text-sm leading-[1.71429] [text-transform:unset] min-w-16 py-[5px] px-3 flex justify-center items-center text-sm border-1 border-[#919eab52] rounded-[8px] text-white  font-bold transition-all duration-300 mr-1"
          >
            Login
          </Link>
        </div>

      </div>

      <div className="flex min-[960px]:hidden border-b-1  border-[#919eab14] relative overflow-hidden px-3">

        <hr className="m-0 shrink-0 border-0 border-t-[1px] border-dashed border-[#919eab33] absolute top-0 left-0 w-full z-[9]" />

        <nav className="flex items-center gap-2 w-full lg:gap-4 font-bold text-white overflow-x-auto scrollbar-hide h-[30px]">
          <Link href="/" className="flex p-1 items-center text-[13px] font-bold text-white hover:text-white transition-colors group whitespace-nowrap">
            <span className=" group-hover:text-white transition-colors mr-[2px] ml-[-1px]">
              <Icon name="exchange" className="h-6 w-6" />
            </span>
            <span className="relative !top-[1px]">
              Exchange
            </span>
          </Link>

          <Link href="/casinos/q-tech/aviator" className="flex p-1 items-center text-[13px] font-medium text-white hover:text-white transition-colors whitespace-nowrap">
            <span className="mr-[2px] ">
              <Icon name="aviator" className="h-8 w-8" />
            </span>
            <span className="font-bold text-white ml-[1px] relative !top-[1px]">Aviator</span>
          </Link>


          <Link href="/casinos/q-tech/aviator" className="flex p-1 items-center text-[13px] font-medium text-white hover:text-white transition-colors whitespace-nowrap">
            <span className="mr-[2px] ">
              <Icon name="evolution" className="w-15 h-7" />
            </span>
          </Link>

          <Link href="/slot" className="flex p-1 items-center text-[13px] font-medium text-white hover:text-white transition-colors whitespace-nowrap">
            <span className="mr-[2px] ">
              <Icon name="slot" className="h-5 w-5" />
            </span>
            <span className="text-white font-bold">
              Slot
            </span>
          </Link>

          <Link href="/live-casino" className="flex p-1 items-center text-[13px] font-medium text-white hover:text-white transition-colors group whitespace-nowrap">
            {/* Live Casino Icon */}
            <span className="text-gray-400 group-hover:text-white transition-colors mr-[2px] ">
              <Icon name="casino" className="h-6 w-6" />
            </span>
            Live Casino
          </Link>
        </nav>
      </div>
    </header>
  )
}