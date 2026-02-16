"use client";

export default function SingleaMarket() {
  return (
    <ul className="mt-2">
      <li className="w-full rounded-[2px] border border-dashed border-[rgba(145,158,171,0.16)] bg-[rgba(145,158,171,0.04)] text-white">

        {/* MAIN ROW */}
        <div className="flex w-full flex-col lg:flex-row">

          {/* LEFT CONTENT – 60% */}
          <div className="w-full lg:w-[60%] py-[7.5px] px-[8px]">
            <div className="flex items-center gap-1 text-[9px] font-bold uppercase text-[#098DEE]">
              <span>Cricket</span>
              <span className="h-1 w-1 rounded-full bg-[rgb(99,115,129)]"></span>
              <span>IPL</span>
            </div>

            <div className="mt-0">
              <div className="text-[14px] font-bold">India</div>
              <div className="text-[14px] font-bold">Pakistan</div>
            </div>

            <div className="mt-0 flex items-center gap-3 text-[10px] font-bold uppercase">
              <div className="flex items-center gap-1 text-[#098DEE]">
                <span className="h-2 w-2 rounded-full bg-[#098DEE] animate-pulse"></span>
                Live
              </div>
              <span className="text-[rgb(145,158,171)]">1 Markets</span>
              <span className="text-[rgb(145,158,171)]">
                Traded: <span className="text-[#ffab00]">1,234</span>
              </span>
            </div>
          </div>

          {/* RIGHT ODDS – 40% */}
          <div className="w-full lg:w-[40%] border-t lg:border-t-0 lg:border-l border-[rgb(22,28,36)] py-[5.5px] px-[6px]">

            {/* ODDS GRID */}
            <div className="grid grid-cols-3 gap-2 mt-3">

              {/* TEAM 1 */}
              <div className="flex flex-col gap-1">
                <span className="text-center text-xs">India</span>
                <div className="grid grid-cols-2 gap-1">
                  <OddsBack price="1.85" size="120" />
                  <OddsLay price="1.90" size="95" />
                </div>
              </div>

              {/* CENTER EMPTY */}
              <div className="flex flex-col gap-1">
                <span className="text-center text-xs opacity-0">.</span>
                <div className="grid grid-cols-2 gap-1">
                  <div className="h-[34px] rounded bg-[rgba(0,178,255,0.25)]"></div>
                  <div className="h-[34px] rounded bg-[rgba(255,122,127,0.25)]"></div>
                </div>
              </div>

              {/* TEAM 2 */}
              <div className="flex flex-col gap-1">
                <span className="text-center text-xs">Pakistan</span>
                <div className="grid grid-cols-2 gap-1">
                  <OddsBack price="2.10" size="80" />
                  <OddsLay price="2.20" size="60" />
                </div>
              </div>

            </div>
          </div>

        </div>
      </li>
    </ul>
  );
}

/* ================== BUTTON COMPONENTS ================== */

function OddsBack({ price, size }: any) {
  return (
    <button className="h-[34px] rounded bg-[rgba(0,178,255,0.7)] text-black hover:bg-[rgb(0,178,255)]">
      <div className="text-sm font-semibold leading-none">{price}</div>
      <div className="text-[10px] leading-none">{size}</div>
    </button>
  );
}

function OddsLay({ price, size }: any) {
  return (
    <button className="h-[34px] rounded bg-[rgba(255,122,127,0.7)] text-black hover:bg-[rgb(255,122,127)]">
      <div className="text-sm font-semibold leading-none">{price}</div>
      <div className="text-[10px] leading-none">{size}</div>
    </button>
  );
}
