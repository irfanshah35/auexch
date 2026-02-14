(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/Desktop/auexch/src/components/m-view/m-sports-tab/index.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$auexch$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/auexch/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$auexch$2f$src$2f$lib$2f$store$2f$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/auexch/src/lib/store/store.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$auexch$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/auexch/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
const MSportsTab = ({ setActiveTab, activeTab })=>{
    _s();
    const menuList = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$auexch$2f$src$2f$lib$2f$store$2f$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAppStore"])({
        "MSportsTab.useAppStore[menuList]": (state)=>state.menuList
    }["MSportsTab.useAppStore[menuList]"]);
    const [eventTypes, setEventTypes] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$auexch$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])();
    const navData = [
        "cricket",
        "soccer",
        "tennis"
    ];
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$auexch$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "MSportsTab.useEffect": ()=>{
            const event = menuList?.eventTypes || [];
            setEventTypes(event);
        }
    }["MSportsTab.useEffect"], [
        menuList
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$auexch$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "w-full",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$auexch$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
            className: "flex list-none bg-[linear-gradient(180deg,#030a12,#444647_42%,#58595a)] mb-0 pl-0 overflow-x-scroll",
            children: eventTypes?.map((item)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$auexch$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                    children: navData?.includes(item?.eventType?.name?.toLowerCase()) && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$auexch$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                        id: `${item.eventType.id}`,
                        className: "no-underline cursor-pointer",
                        onClick: ()=>setActiveTab(item.eventType.id),
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$auexch$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: `flex flex-col h-[54px] min-[992px]:h-[55px] text-center text-[12px] p-2 pb-[3px] min-w-max relative text-white
                  ${activeTab === item.eventType.id ? "bg-[linear-gradient(-180deg,#f4b501_0%,#f68700_100%)]" : "bg-transparent"}
                `,
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$auexch$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$auexch$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex justify-center mb-[5px]",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$auexch$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                            src: "/assets/transparent-login.gif",
                                            className: `w-5 h-5 sprite ${item.icon}`,
                                            alt: item.eventType.name
                                        }, void 0, false, {
                                            fileName: "[project]/Desktop/auexch/src/components/m-view/m-sports-tab/index.tsx",
                                            lineNumber: 42,
                                            columnNumber: 23
                                        }, ("TURBOPACK compile-time value", void 0))
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/auexch/src/components/m-view/m-sports-tab/index.tsx",
                                        lineNumber: 41,
                                        columnNumber: 21
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$auexch$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "text-[12px] min-[992px]:font-semibold uppercase tracking-[-0.1px]",
                                        children: item.eventType.name
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/auexch/src/components/m-view/m-sports-tab/index.tsx",
                                        lineNumber: 48,
                                        columnNumber: 21
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Desktop/auexch/src/components/m-view/m-sports-tab/index.tsx",
                                lineNumber: 40,
                                columnNumber: 19
                            }, ("TURBOPACK compile-time value", void 0))
                        }, void 0, false, {
                            fileName: "[project]/Desktop/auexch/src/components/m-view/m-sports-tab/index.tsx",
                            lineNumber: 31,
                            columnNumber: 17
                        }, ("TURBOPACK compile-time value", void 0))
                    }, void 0, false, {
                        fileName: "[project]/Desktop/auexch/src/components/m-view/m-sports-tab/index.tsx",
                        lineNumber: 26,
                        columnNumber: 15
                    }, ("TURBOPACK compile-time value", void 0))
                }, item.eventType.id, false, {
                    fileName: "[project]/Desktop/auexch/src/components/m-view/m-sports-tab/index.tsx",
                    lineNumber: 24,
                    columnNumber: 11
                }, ("TURBOPACK compile-time value", void 0)))
        }, void 0, false, {
            fileName: "[project]/Desktop/auexch/src/components/m-view/m-sports-tab/index.tsx",
            lineNumber: 22,
            columnNumber: 7
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/Desktop/auexch/src/components/m-view/m-sports-tab/index.tsx",
        lineNumber: 21,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_s(MSportsTab, "qnmR74twefKPDGwtDwLsLiIKOEk=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$auexch$2f$src$2f$lib$2f$store$2f$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAppStore"]
    ];
});
_c = MSportsTab;
const __TURBOPACK__default__export__ = MSportsTab;
var _c;
__turbopack_context__.k.register(_c, "MSportsTab");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Desktop/auexch/src/components/m-view/m-sports-tab/index.tsx [app-client] (ecmascript, next/dynamic entry)", ((__turbopack_context__) => {

__turbopack_context__.n(__turbopack_context__.i("[project]/Desktop/auexch/src/components/m-view/m-sports-tab/index.tsx [app-client] (ecmascript)"));
}),
]);

//# sourceMappingURL=Desktop_auexch_src_components_m-view_m-sports-tab_index_tsx_6ec84c3c._.js.map