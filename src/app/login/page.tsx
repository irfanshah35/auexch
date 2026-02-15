"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

export default function LoginPage() {
  const [showPassword, setShowPassword] = useState(false);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  return (
    <section className="flex flex-col xl:flex-row w-full min-h-screen">
      <div >
         <Image
          src="/brand_logo_dark.png"
          alt="AuExch Logo"
          width={152}
          height={100}
          className="object-contain ms-8 mt-[2px] mb-[2px]"
        />
   

      {/* LEFT SIDE */}
      <div className="hidden lg:flex flex-col justify-center items-center w-[480px] h-[100%] text-white px-16 pb-21"
        style={{
          backgroundImage: `linear-gradient(
      0deg, 
      rgba(34, 40, 48, 0.92), 
      rgba(34, 40, 48, 0.92)
    ), url('https://auexch.com/assets/background/background-3-blur.webp')`
        }}>
        <h2 className="text-[32px] font-semibold mb-33">Hi, Welcome back</h2>
        <Image
          src="/brand_logo_dark.png"
          alt="AuExch Logo"
          width={304}
          height={100}
          className="object-contain mx-1"
        />
      </div>
         </div>

      {/* RIGHT SIDE */}
      <div className="flex flex-1 flex-col justify-center px-8 md:px-16 lg:px-24 text-white">
        {/* Mobile Logo */}
        <div className="ml-4 mt-4 w-[170px] lg:hidden">
          <Image
            src="/assets/img/brand_logo_dark.png"
            alt="logo"
            width={170}
            height={40}
          />
        </div>

        <div className="mx-4 mt-12 md:mx-auto md:w-[448px] xl:w-[420px]">
          <form className="space-y-5">

            {/* Heading */}
            <h2 className="text-xl xl:text-[19px] font-semibold">
              Sign in to AuExch
            </h2>
            <p className="text-sm  text-white">
              Don’t have an account?{" "}
              <Link href="/signup" className="">
                Get started
              </Link>
            </p>

            {/* Username */}
            <div className="relative">
              <input
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                placeholder=" "
                className="peer w-full rounded-[8px] border border-[#373E45] px-4 py-3 text-sm bg-[#11141a] text-white outline-none focus:border-[#078DEE]"
              />
              <label className="absolute left-3 top-3 text-sm text-[#637381] peer-placeholder-shown:top-3 peer-placeholder-shown:text-sm peer-focus:-top-2 peer-focus:text-xs peer-focus:text-white bg-[#1F252C] px-1 transition-all">
                Username *
              </label>
            </div>

            {/* Password */}
            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder=" "
                className="peer w-full rounded-[8px] border border-[#373E45] px-4 py-3 text-sm bg-[#11141a] text-white outline-none focus:border-[#078DEE]"
              />
              <label className="absolute left-3 top-3 text-sm text-[#637381] peer-placeholder-shown:top-3 peer-placeholder-shown:text-sm peer-focus:-top-2 peer-focus:text-xs peer-focus:text-white bg-[#1F252C] px-1 transition-all">
                Password *
              </label>

              {/* Toggle */}
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-3 text-gray-400 hover:text-white"
              >
                {showPassword ? "Hide" : "Show"}
              </button>
            </div>

            {/* Login Button */}
            <button
              disabled={!password}
              className={`w-full rounded-[8px] py-3 text-sm font-semibold transition-all ${password
                ? "bg-[#078DEE] text-white"
                : "bg-[rgba(145,158,171,0.24)] text-[rgba(145,158,171,0.8)] cursor-not-allowed"
                }`}
            >
              Login
            </button>

            {/* Reset Password */}
            <Link href="/reset-password">
              <button
                type="button"
                className="w-full rounded-[8px] py-3 font-semibold text-white"
              >
                Reset Password
              </button>
            </Link>

            {/* Go to Home */}
            <Link href="/home">
              <button
                type="button"
                className="w-full rounded-[8px] py-3 font-semibold bg-white text-[#212B36]"
              >
                Go to Home
              </button>
            </Link>

          </form>
        </div>
      </div>
    </section>
  );
}
