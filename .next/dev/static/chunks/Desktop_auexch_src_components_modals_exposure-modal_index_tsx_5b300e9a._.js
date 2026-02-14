(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/Desktop/auexch/src/components/modals/exposure-modal/index.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>ExposureModal
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$auexch$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/auexch/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$auexch$2f$src$2f$lib$2f$config$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/auexch/src/lib/config.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$auexch$2f$src$2f$lib$2f$functions$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/auexch/src/lib/functions.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$auexch$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/auexch/node_modules/next/navigation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$auexch$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/auexch/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
function ExposureModal({ open, onClose }) {
    _s();
    const [show, setShow] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$auexch$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const modalRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$auexch$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const [exposerData, setExposerData] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$auexch$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])();
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$auexch$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"])();
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$auexch$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "ExposureModal.useEffect": ()=>{
            function handleClickOutside(e) {
                if (modalRef.current && !modalRef.current.contains(e.target)) {
                    onClose();
                }
            }
            if (open) {
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$auexch$2f$src$2f$lib$2f$functions$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["fetchData"])({
                    url: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$auexch$2f$src$2f$lib$2f$config$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CONFIG"].getExposureListURL,
                    payload: {
                        key: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$auexch$2f$src$2f$lib$2f$config$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CONFIG"].siteKey
                    },
                    setFn: setExposerData
                });
                document.addEventListener("mousedown", handleClickOutside);
            }
            return ({
                "ExposureModal.useEffect": ()=>{
                    document.removeEventListener("mousedown", handleClickOutside);
                }
            })["ExposureModal.useEffect"];
        }
    }["ExposureModal.useEffect"], [
        open
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$auexch$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "ExposureModal.useEffect": ()=>{
            if (open) {
                setShow(true);
                document.body.style.overflow = "hidden";
            } else {
                const timer = setTimeout({
                    "ExposureModal.useEffect.timer": ()=>setShow(false)
                }["ExposureModal.useEffect.timer"], 300);
                document.body.style.overflow = "auto";
                return ({
                    "ExposureModal.useEffect": ()=>clearTimeout(timer)
                })["ExposureModal.useEffect"];
            }
        }
    }["ExposureModal.useEffect"], [
        open
    ]);
    const handleNavigation = (eventId, eventTypeId)=>{
        // Close modal first
        onClose();
        // Then navigate
        router.push(`/market-details/${eventId}/${eventTypeId}`);
    };
    if (!show) return null;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$auexch$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$auexch$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "fixed text-black inset-0 pt-2 md:pt-5.5 min-[992px]:pt-3.5 bg-black/50 flex items-baseline min-[992px]:items-start justify-center z-50",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$auexch$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                ref: modalRef,
                className: `
          bg-white mx-[7px] max-[768px]:w-[500px] md:w-[498px] max-h-screen [@media(min-width:992px)]:w-[71.5%] shadow-lg overflow-y-auto no-scrollbar
          transform transition-all duration-300 ease-out
          ${open ? "translate-y-0 opacity-100" : "-translate-y-full opacity-0"}
        `,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$auexch$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center justify-between px-2.5 h-[49px] md:py-0! bg-[linear-gradient(180deg,#000000,#000000_42%,#000000)] text-white [@media(min-width:992px)]:h-[47px]",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$auexch$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                className: "text-xl font-medium relative -top-px",
                                children: "My Market"
                            }, void 0, false, {
                                fileName: "[project]/Desktop/auexch/src/components/modals/exposure-modal/index.tsx",
                                lineNumber: 72,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$auexch$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: onClose,
                                className: "bg-transparent border-0 p-0 text-[35px] cursor-pointer [@media(min-width:992px)]:text-[33px]",
                                children: "×"
                            }, void 0, false, {
                                fileName: "[project]/Desktop/auexch/src/components/modals/exposure-modal/index.tsx",
                                lineNumber: 75,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Desktop/auexch/src/components/modals/exposure-modal/index.tsx",
                        lineNumber: 71,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$auexch$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "p-3",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$auexch$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("table", {
                            className: "w-full border-collapse border border-black/12.5",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$auexch$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("thead", {
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$auexch$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$auexch$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                className: "p-0.5 md:px-3 min-[992px]:py-[7px] h-[26px] min-[992px]:h-10 text-center text-black border border-black/12.5 text-sm min-[992px]:text-base",
                                                children: "Sport Name"
                                            }, void 0, false, {
                                                fileName: "[project]/Desktop/auexch/src/components/modals/exposure-modal/index.tsx",
                                                lineNumber: 87,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$auexch$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                className: "p-0.5 md:px-3 min-[992px]:py-[7px] h-[26px] min-[992px]:h-10 text-center text-black border border-black/12.5 text-sm min-[992px]:text-base",
                                                children: "Event Name"
                                            }, void 0, false, {
                                                fileName: "[project]/Desktop/auexch/src/components/modals/exposure-modal/index.tsx",
                                                lineNumber: 90,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$auexch$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                className: "p-0.5 md:px-3 min-[992px]:py-[7px] h-[26px] min-[992px]:h-10 text-center text-black border border-black/12.5 text-sm min-[992px]:text-base",
                                                children: "Market Name"
                                            }, void 0, false, {
                                                fileName: "[project]/Desktop/auexch/src/components/modals/exposure-modal/index.tsx",
                                                lineNumber: 93,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$auexch$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                className: "p-0.5 md:px-3 min-[992px]:py-[7px] h-[26px] min-[992px]:h-10 text-center text-black border border-black/12.5 text-sm min-[992px]:text-base",
                                                children: "Trade"
                                            }, void 0, false, {
                                                fileName: "[project]/Desktop/auexch/src/components/modals/exposure-modal/index.tsx",
                                                lineNumber: 96,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Desktop/auexch/src/components/modals/exposure-modal/index.tsx",
                                        lineNumber: 86,
                                        columnNumber: 17
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/auexch/src/components/modals/exposure-modal/index.tsx",
                                    lineNumber: 85,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$auexch$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tbody", {
                                    children: exposerData?.length > 0 ? exposerData?.map((item, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$auexch$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$auexch$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                    className: "px-2 py-1.5 md:px-3 md:py-[7px] h-10 text-center border text-black border-black/12.5 bg-transparent text-xs md:text-base",
                                                    children: item?.eventType?.name
                                                }, void 0, false, {
                                                    fileName: "[project]/Desktop/auexch/src/components/modals/exposure-modal/index.tsx",
                                                    lineNumber: 106,
                                                    columnNumber: 23
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$auexch$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                    className: "px-2 py-1.5 md:px-3 md:py-[7px] h-10 text-center border text-[#0d6efd] border-black/12.5 bg-transparent text-xs md:text-base cursor-pointer ",
                                                    onClick: ()=>handleNavigation(item?.event?.id, item?.eventType?.id),
                                                    children: item?.event?.name
                                                }, void 0, false, {
                                                    fileName: "[project]/Desktop/auexch/src/components/modals/exposure-modal/index.tsx",
                                                    lineNumber: 109,
                                                    columnNumber: 23
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$auexch$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                    className: "px-2 py-1.5 md:px-3 md:py-[7px] h-10 text-center border text-[#0d6efd] border-black/12.5 bg-transparent text-xs md:text-base cursor-pointer ",
                                                    children: item?.market?.name
                                                }, void 0, false, {
                                                    fileName: "[project]/Desktop/auexch/src/components/modals/exposure-modal/index.tsx",
                                                    lineNumber: 115,
                                                    columnNumber: 23
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$auexch$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                    className: "px-2 py-1.5 md:px-3 md:py-[7px] h-10 text-center border text-black border-black/12.5 bg-transparent text-xs md:text-base",
                                                    children: item?.betCounts
                                                }, void 0, false, {
                                                    fileName: "[project]/Desktop/auexch/src/components/modals/exposure-modal/index.tsx",
                                                    lineNumber: 120,
                                                    columnNumber: 23
                                                }, this)
                                            ]
                                        }, index, true, {
                                            fileName: "[project]/Desktop/auexch/src/components/modals/exposure-modal/index.tsx",
                                            lineNumber: 105,
                                            columnNumber: 21
                                        }, this)) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$auexch$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$auexch$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                            colSpan: 4,
                                            className: "px-2 py-0.5 md:px-3 min-[992px]:py-[7px] h-[23px] min-[992px]:h-10 text-center border text-black border-black/12.5 bg-transparent text-xs min-[992px]:text-base",
                                            children: "No real-time records found"
                                        }, void 0, false, {
                                            fileName: "[project]/Desktop/auexch/src/components/modals/exposure-modal/index.tsx",
                                            lineNumber: 127,
                                            columnNumber: 21
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/auexch/src/components/modals/exposure-modal/index.tsx",
                                        lineNumber: 126,
                                        columnNumber: 19
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/auexch/src/components/modals/exposure-modal/index.tsx",
                                    lineNumber: 102,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Desktop/auexch/src/components/modals/exposure-modal/index.tsx",
                            lineNumber: 84,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/Desktop/auexch/src/components/modals/exposure-modal/index.tsx",
                        lineNumber: 83,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Desktop/auexch/src/components/modals/exposure-modal/index.tsx",
                lineNumber: 62,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/Desktop/auexch/src/components/modals/exposure-modal/index.tsx",
            lineNumber: 61,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/Desktop/auexch/src/components/modals/exposure-modal/index.tsx",
        lineNumber: 60,
        columnNumber: 5
    }, this);
}
_s(ExposureModal, "x0eg1MrXW+8+a5UTO22pHNQBGtU=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$auexch$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"]
    ];
});
_c = ExposureModal;
var _c;
__turbopack_context__.k.register(_c, "ExposureModal");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Desktop/auexch/src/components/modals/exposure-modal/index.tsx [app-client] (ecmascript, next/dynamic entry)", ((__turbopack_context__) => {

__turbopack_context__.n(__turbopack_context__.i("[project]/Desktop/auexch/src/components/modals/exposure-modal/index.tsx [app-client] (ecmascript)"));
}),
]);

//# sourceMappingURL=Desktop_auexch_src_components_modals_exposure-modal_index_tsx_5b300e9a._.js.map