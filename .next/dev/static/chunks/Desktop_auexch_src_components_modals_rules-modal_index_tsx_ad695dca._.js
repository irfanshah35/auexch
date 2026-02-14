(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/Desktop/auexch/src/components/modals/rules-modal/index.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>RulesModal
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$auexch$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/auexch/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$auexch$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/auexch/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
function RulesModal({ open, onClose, rules = null, isHeaderRules = false }) {
    _s();
    const [show, setShow] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$auexch$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const modalRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$auexch$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$auexch$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "RulesModal.useEffect": ()=>{
            function handleClickOutside(e) {
                if (modalRef.current && !modalRef.current.contains(e.target)) {
                    onClose();
                }
            }
            if (open) {
                document.addEventListener("mousedown", handleClickOutside);
            }
            return ({
                "RulesModal.useEffect": ()=>{
                    document.removeEventListener("mousedown", handleClickOutside);
                }
            })["RulesModal.useEffect"];
        }
    }["RulesModal.useEffect"], [
        open,
        onClose
    ]);
    // Handle slide-down animation
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$auexch$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "RulesModal.useEffect": ()=>{
            if (open) {
                setShow(true);
                document.body.style.overflow = "hidden";
            } else {
                const timer = setTimeout({
                    "RulesModal.useEffect.timer": ()=>setShow(false)
                }["RulesModal.useEffect.timer"], 300);
                document.body.style.overflow = "auto";
                return ({
                    "RulesModal.useEffect": ()=>clearTimeout(timer)
                })["RulesModal.useEffect"];
            }
        }
    }["RulesModal.useEffect"], [
        open
    ]);
    if (!show) return null;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$auexch$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$auexch$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "fixed text-black inset-0 pt-3.5 bg-black/50 flex items-center min-[992px]:items-start justify-center z-51",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$auexch$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                ref: modalRef,
                className: `
          bg-white mx-[7px] max-[768px]:w-[500px] max-h-screen [@media(min-width:992px)]:w-[83.3%] shadow-lg overflow-y-auto no-scrollbar [@media(min-width:992px)]:max-h-[96vh]
          transform transition-all duration-300 ease-out
          ${open ? "translate-y-0 opacity-100" : "-translate-y-full opacity-0"}
        `,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$auexch$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center justify-between px-2.5 h-[49px] md:py-0! bg-[linear-gradient(180deg,#000000,#000000_42%,#000000)] text-white [@media(min-width:992px)]:h-[50px]",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$auexch$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                className: "text-xl font-medium",
                                children: "Rules"
                            }, void 0, false, {
                                fileName: "[project]/Desktop/auexch/src/components/modals/rules-modal/index.tsx",
                                lineNumber: 63,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$auexch$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: onClose,
                                className: "bg-transparent border-0 p-0 text-[35px] cursor-pointer [@media(min-width:992px)]:text-[33px]",
                                children: "×"
                            }, void 0, false, {
                                fileName: "[project]/Desktop/auexch/src/components/modals/rules-modal/index.tsx",
                                lineNumber: 64,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Desktop/auexch/src/components/modals/rules-modal/index.tsx",
                        lineNumber: 62,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$auexch$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "p-3 pt-[13px] min-[992px]:pt-14 pb-9 min-[992px]:pb-3 text-[15px] [@media(min-width:992px)]:text-[12px] [@media(min-width:992px)]:pt-[13px]",
                        children: rules ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$auexch$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "rules-content",
                            dangerouslySetInnerHTML: {
                                __html: rules
                            }
                        }, void 0, false, {
                            fileName: "[project]/Desktop/auexch/src/components/modals/rules-modal/index.tsx",
                            lineNumber: 75,
                            columnNumber: 15
                        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$auexch$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "text-center py-8 text-gray-500",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$auexch$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                children: "No rules available."
                            }, void 0, false, {
                                fileName: "[project]/Desktop/auexch/src/components/modals/rules-modal/index.tsx",
                                lineNumber: 81,
                                columnNumber: 17
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/Desktop/auexch/src/components/modals/rules-modal/index.tsx",
                            lineNumber: 80,
                            columnNumber: 15
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/Desktop/auexch/src/components/modals/rules-modal/index.tsx",
                        lineNumber: 73,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Desktop/auexch/src/components/modals/rules-modal/index.tsx",
                lineNumber: 53,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/Desktop/auexch/src/components/modals/rules-modal/index.tsx",
            lineNumber: 52,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/Desktop/auexch/src/components/modals/rules-modal/index.tsx",
        lineNumber: 51,
        columnNumber: 5
    }, this);
}
_s(RulesModal, "eiLQrk34XVKsc99XEJ/83i36BqU=");
_c = RulesModal;
var _c;
__turbopack_context__.k.register(_c, "RulesModal");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Desktop/auexch/src/components/modals/rules-modal/index.tsx [app-client] (ecmascript, next/dynamic entry)", ((__turbopack_context__) => {

__turbopack_context__.n(__turbopack_context__.i("[project]/Desktop/auexch/src/components/modals/rules-modal/index.tsx [app-client] (ecmascript)"));
}),
]);

//# sourceMappingURL=Desktop_auexch_src_components_modals_rules-modal_index_tsx_ad695dca._.js.map