import Sidebbar from "@/components/sidebar";
import type { ReactNode } from "react";

export default function PagesLayout({ children }: { children: ReactNode }) {
  return (
    <>
      <div>
        <Sidebbar />
        {children}
      </div>
    </>
  );
}
