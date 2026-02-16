"use client";

import Image from "next/image";
import Icon from "@/icons/icons";

export default function Footer() {
   return (
      <>
         <div className="mt-5 mb-9 ">
            <div className="w-full rounded-xl bg-[#1C252E] text-white border  border-[rgba(145,158,171,0.2)]">

               {/* TOP SECTION */}
               <div className="flex flex-col-reverse gap-18 px-[8px] pt-[8px] md:flex-row">

                  {/* LEFT BLOCK */}
                  <div className="md:mb-[3.5px] md:w-[140px] lg:mb-0 lg:w-[200px]">

                     <Image
                        src="/secure-ssl-3.webp"
                        alt="Secure"
                        width={106}
                        
                        height={54}
                        className="mb-[8px] lg:mb-0"
                     />

                     <p className="mt-[9px] text-[13px] font-semibold leading-[19px] dark:text-[#212B36] lg:mt-2">
                        100% SAFE
                     </p>

                     <p className="mb-[7px] text-[13px] leading-[19px] dark:text-[#212B36] lg:mb-2">
                        Protected connection and encrypted data.
                     </p>

                     <span className="inline-block h-[24px] rounded bg-[rgba(7,141,238,0.16)] px-3 py-[4.75px] text-[12px] font-bold leading-[19px] text-[#68CDF9] dark:text-[rgb(3,81,171)]">
                        Payment Gateways
                     </span>

                     <div className="mb-2 mt-[9px] flex items-center gap-[4px]">
                        <Icon name="crossPay" className="h-5 w-5 " />
                        <Icon name="gPay" className="h-5 w-11 ml-1 mr-1" />
                        <Icon name="upi" className="h-5 w-11" />
                        <Icon name="home" className="h-5 w-5" />
                     </div>

                     {/* MOBILE LANGUAGE SELECT */}
                     <div className="block md:hidden">
                        <select className="w-full rounded bg-[#222] px-2 py-1 text-xs">
                           <option>English</option>
                           <option>Urdu</option>
                        </select>
                     </div>
                  </div>

                  {/* RIGHT BLOCK */}
                  <div className="md:ml-1 lg:ml-[5px]">

                     {/* LINKS */}
                     <div className="footer-items mb-2 flex justify-center whitespace-nowrap text-center text-[13px] font-medium text-[#919EAB] dark:text-[#637381] md:justify-start md:text-start">
                        {[
                           "About",
                           "Blogs",
                           "Contact Us",
                           "Responsible Gambling",
                        ].map((item, i) => (
                           <a
                              key={i}
                              href="#"
                              className={`cursor-pointer px-1 hover:underline ${i !== 3 &&
                                 "border-r border-[#272f37] dark:border-[rgba(145,158,171,0.2)]"
                                 } md:px-2 lg:px-4`}
                           >
                              {item}
                           </a>
                        ))}
                     </div>

                     {/* DESCRIPTION */}
                     <div className="mt-1 border-t border-dashed border-[rgba(145,158,171,0.2)] pt-2 text-[13px] leading-[20.9px] text-[#919EAB] dark:border-[rgba(145,158,171,0.2)] dark:text-[#637381]">
                        This website is operated by {" "}
                        <span className="text-[14px] text-[#098DEE]">
                           Au Exch
                        </span>
                        , registered under No. at{" "}
                        <span className="text-[14px] text-[#098DEE]">Curaçao</span>. This website is licensed and regulated by {" "}
                        <span className="text-[14px] text-[#098DEE]">Curaçao</span>,eGaming, license No. {" "}
                        <span className="text-[14px] ">
                           . In order to register for this website, the user is required to accept the General Terms and Conditions. In the event the General Terms and Conditions are updated, existing users may choose to discontinue using the products and services before the said update shall become effective, which is a minimum of two weeks after it has been announced.
                        </span>
                     </div>

                     {/* DESKTOP LANGUAGE SELECT */}
                     {/* <div className="hidden md:block mt-2">
                        <select className="rounded   px-2 py-3 text-xs border  border-[rgba(145,158,171,0.2)]">
                           <option>English</option>
                           <option>Urdu</option>
                        </select>
                     </div> */}
                     <div className="inline-block mt-2">
                        <button
                           type="button"
                           className="fle flex-col justify-between items-center px-3 py-0.5 border bg-[rgba(145,158,171,0.08)]  border-[rgba(145,158,171,0.2)] dark:border-gray-600 rounded-[8px] text-sm font-medium text-[#919EAB] dark:text-[#637381]  transition"
                        >
                           <p className="text-[12px]">Language</p>
                           <p className="text-[14px] text-white">English</p>
                        </button>
                     </div>

                  </div>
               </div>

               {/* POLICY LINKS */}
               <div className="flex flex-wrap justify-center  gap-x-4 gap-y-2 p-2 text-[13px] font-medium text-[#919EAB] dark:text-[#637381]">
                  {[
                     "Terms & Conditions",
                     "Betting Rules",
                     "Dispute Resolution",
                     "Fairness & RNG Testing Methods",
                     "Accounts, Payouts and Bonuses",
                     "Privacy Policy",
                     "Self-Exclusion"
                  ].map((item, i) => (
                     <a key={i} className="hover:underline hover:text-[#098DEE] cursor-pointer ">
                        {item}
                     </a>
                  ))}
               </div>


               {/* COPYRIGHT */}
               <div className="mt-1 flex justify-center bg-[#919EAB29] py-1 mx-2 mb-2 text-xs font-bold text-[#87939f] dark:text-[#637381]">
                  <p>
                     Copyright © 2026{" "}
                     <span className="cursor-pointer text-[#098DEE] hover:underline">
                        AuExch
                     </span>{" "}
                     All rights Reserved.
                  </p>
               </div>
            </div>
         </div>

         {/* SMALL SCREEN FIX */}
         <style jsx global>{`
        @media (max-width: 374px) {
          .footer-items {
            font-size: 10px !important;
          }
        }
      `}</style>
      </>
   );
}

// Copyright © "2026"   &nbsp All rights reserved.