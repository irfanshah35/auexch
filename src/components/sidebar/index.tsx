"use client";

export default function Sidebbar() {
  return (
    <>
      <div className="px-4 w-full">
        <ul className="flex flex-col gap-1">
          <div className="bg-[rgba(145,158,171,8%)] hover:bg-[rgba(145,158,171,16%)] pr-2 cursor-pointer rounded-[12px] mt-[22px] flex items-center">
            <span className="p-2 text-[#919EAB] inline-flex">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                xmlnsXlink="http://www.w3.org/1999/xlink"
                aria-hidden="true"
                role="img"
                className="h-5 w-5"
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
            <span className="inline-flex items-center text-[#1C252E] h-6 min-w-6 px-1.5 font-bold text-[12px] bg-white rounded-md">
              ⌘K
            </span>
          </div>
          <li className="inline-block">
            <div className="font-bold text-[0.6875rem] leading-normal uppercase text-[#637381] p-[16px_8px_8px_12px] hover:p-[16px_8px_8px_16px] relative group hover:text-white duration-300 cursor-pointer">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                xmlnsXlink="http://www.w3.org/1999/xlink"
                aria-hidden="true"
                role="img"
                className="w-4 shrink-0 h-4 inline-flex opacity-0 absolute transition-opacity duration-300 ease-in-out -left-1 group-hover:opacity-[1]!"
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
              <span className="font-bold text-[0.6875rem] leading-normal uppercase cursor-pointer text-[#637381] group-hover:text-white!">
                Quick Links
              </span>
            </div>
            <ul className="flex flex-col gap-1">
              <li className="inline-block">
                <a className="inline-flex items-center justify-center relative bg-transparent cursor-pointer select-none align-middle appearance-none no-underline w-full m-0 border-0 p-[4px_8px_4px_12px] text-[#919EAB] min-h-11 rounded-lg hover:bg-[rgba(145,158,171,8%)]">
                  <span className="mr-3 h-6 w-6 inline-flex shrink-0 text-[#919EAB] cursor-pointer">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      xmlnsXlink="http://www.w3.org/1999/xlink"
                      aria-hidden="true"
                      role="img"
                      className="inline-flex w-full h-full shrink-0"
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
                  <span className="overflow-hidden text-ellipsis flex-auto font-medium text-sm leading-[1.57143] text-[#919EAB] cursor-pointer">
                    Inplay
                  </span>
                  <span className="text-xs shrink-0 font-semibold leading-normal inline-flex ml-1.5">
                    <span
                      className="h-6 min-w-6 leading-0 text-[#68CDF9] shrink-0 cursor-default items-center inline-flex justify-center text-xs font-bold bg-[rgba(7,141,238,16%))] gap-2 transition-[200ms] duration-[cubic-bezier(0.4,0,0.2,1)] px-2 py-0 rounded-md"
                    >
                      34
                    </span>
                  </span>
                </a>
              </li>
            </ul>
          </li>
        </ul>
      </div>
    </>
  );
}
