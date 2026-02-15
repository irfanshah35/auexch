"use client";

import { useEffect, useState, type ReactNode } from "react";
import Marque from "@/components/common/marque";
import Header from "@/components/common/header";
import Footer from "@/components/common/footer";
import Sidebar from "@/components/sidebar";

export default function PagesLayout({ children }: { children: ReactNode }) {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 1200);
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  if (isMobile) {
    return (
      <div className="w-full min-h-screen">
        <Marque />
        <Header />
        {children}
        <Footer />
      </div>
    );
  }

  return (
    <div className="w-full h-screen overflow-hidden">
      <div className="fixed top-0 left-0 w-full z-50">
        <Marque />
        <Header />
      </div>

      <div className="flex pt-[92px] h-full w-100% mt-5">
        <aside className="w-[300px] h-full overflow-y-auto no-scrollbar border-r border-white/5">
          <Sidebar />
        </aside>

        <main className="w-[51.179%] h-full overflow-y-auto no-scrollbar">
          {children}
          <Footer />
        </main>
        <div className="w-[0.279%] bg-black">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            xmlns:xlink="http://www.w3.org/1999/xlink"
            aria-hidden="true"
            role="img"
            class="iconify iconify--custom minimal__iconify__root css-eadae1"
            id="_r_94_"
            width="1em"
            height="1em"
            viewBox="0 0 24 24"
            className="absolute translate-[-50%_-50%]"
          >
            <path
              fill="currentColor"
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M11.0625 5.505C11.0625 4.5375 10.2225 3.75 9.1875 3.75C8.1525 3.75 7.3125 4.5375 7.3125 5.505C7.3125 6.474 8.1525 7.26 9.1875 7.26C10.2225 7.26 11.0625 6.474 11.0625 5.505ZM11.0625 18.495C11.0625 17.526 10.2225 16.74 9.1875 16.74C8.1525 16.74 7.3125 17.526 7.3125 18.495C7.3125 19.464 8.1525 20.25 9.1875 20.25C10.2225 20.25 11.0625 19.4625 11.0625 18.495ZM9.1875 10.245C10.2225 10.245 11.0625 11.0325 11.0625 12C11.0625 12.9675 10.2225 13.755 9.1875 13.755C8.1525 13.755 7.3125 12.9675 7.3125 12C7.3125 11.0325 8.1525 10.245 9.1875 10.245ZM16.6875 5.505C16.6875 4.5375 15.8475 3.75 14.8125 3.75C13.7775 3.75 12.9375 4.5375 12.9375 5.505C12.9375 6.474 13.7775 7.26 14.8125 7.26C15.8475 7.26 16.6875 6.474 16.6875 5.505ZM14.8125 16.74C15.8475 16.74 16.6875 17.526 16.6875 18.495C16.6875 19.464 15.8475 20.25 14.8125 20.25C13.7775 20.25 12.9375 19.4625 12.9375 18.495C12.9375 17.526 13.7775 16.74 14.8125 16.74ZM16.6875 12C16.6875 11.0325 15.8475 10.245 14.8125 10.245C13.7775 10.245 12.9375 11.0325 12.9375 12C12.9375 12.9675 13.7775 13.755 14.8125 13.755C15.8475 13.755 16.6875 12.9675 16.6875 12Z"
            ></path>
          </svg>
        </div>

        <aside className="flex-auto h-full overflow-y-auto no-scrollbar border-l border-white/5">
          <Sidebar />
        </aside>
      </div>
    </div>
  );
}
