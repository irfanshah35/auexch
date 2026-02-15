"use client";

export default function Sidebbar() {
  return (
    <>
      <div className="px-4 w-full">
        <ul className="flex flex-col gap-1">
          <div className="bg-[rgba(145,158,171,8%)] hover:bg-[rgba(145,158,171,16%)] pr-2 cursor-pointer rounded-lg mt-2 flex items-center">
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
            <div className="font-bold text-[0.6875rem] leading-normal uppercase text-[#637381]"></div>
          </li>
        </ul>
      </div>
    </>
  );
}
