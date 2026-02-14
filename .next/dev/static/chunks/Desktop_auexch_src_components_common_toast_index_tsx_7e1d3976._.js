(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/Desktop/auexch/src/components/common/toast/index.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$auexch$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/auexch/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$auexch$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/auexch/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
const ToastComponent = ({ toast, onClose })=>{
    _s();
    const [show, setShow] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$auexch$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$auexch$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "ToastComponent.useEffect": ()=>{
            const showTimer = setTimeout({
                "ToastComponent.useEffect.showTimer": ()=>setShow(true)
            }["ToastComponent.useEffect.showTimer"], 100);
            const hideTimer = setTimeout({
                "ToastComponent.useEffect.hideTimer": ()=>{
                    setShow(false);
                    setTimeout({
                        "ToastComponent.useEffect.hideTimer": ()=>onClose(toast.id)
                    }["ToastComponent.useEffect.hideTimer"], 400);
                }
            }["ToastComponent.useEffect.hideTimer"], 4000);
            return ({
                "ToastComponent.useEffect": ()=>{
                    clearTimeout(showTimer);
                    clearTimeout(hideTimer);
                }
            })["ToastComponent.useEffect"];
        }
    }["ToastComponent.useEffect"], [
        toast.id,
        onClose
    ]);
    const handleClose = ()=>{
        setShow(false);
        setTimeout(()=>onClose(toast.id), 400);
    };
    const icons = {
        success: "✓",
        error: "✗",
        warning: "⚠",
        info: "ℹ"
    };
    const toastStyle = {
        marginTop: "15px",
        background: "white",
        borderRadius: "12px",
        padding: "2px 20px 10px",
        marginBottom: "15px",
        boxShadow: "0 10px 40px rgba(0,0,0,0.3)",
        borderLeft: `5px solid ${toast.type === "success" ? "#28a745" : toast.type === "error" ? "#dc3545" : toast.type === "info" ? "#17a2b8" : "#ffc107"}`,
        opacity: show ? 1 : 0,
        transform: show ? "translateX(0)" : "translateX(100%)",
        transition: "all 0.4s cubic-bezier(0.68, -0.55, 0.265, 1.55)",
        position: "relative",
        overflow: "hidden"
    };
    const headerStyle = {
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        marginBottom: "8px"
    };
    const titleStyle = {
        fontWeight: "bold",
        fontSize: "14px",
        marginRight: "10px",
        color: toast.type === "success" ? "#28a745" : toast.type === "error" ? "#dc3545" : toast.type === "info" ? "#17a2b8" : "#856404"
    };
    const closeStyle = {
        background: "none",
        border: "none",
        fontSize: "18px",
        cursor: "pointer",
        color: "#999",
        padding: "0",
        marginLeft: "auto"
    };
    const messageStyle = {
        fontSize: "13px",
        color: "#333",
        lineHeight: "1.4"
    };
    const progressStyle = {
        position: "absolute",
        bottom: "0",
        left: "0",
        height: "3px",
        background: toast.type === "success" ? "#28a745" : toast.type === "error" ? "#dc3545" : toast.type === "info" ? "#17a2b8" : "#856404",
        animation: "progress 4s linear forwards",
        width: "100%"
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$auexch$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        style: toastStyle,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$auexch$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: headerStyle,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$auexch$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: titleStyle,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$auexch$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                style: {
                                    display: "inline-block",
                                    width: "16px",
                                    height: "16px",
                                    marginRight: "8px",
                                    fontWeight: "bold"
                                },
                                children: icons[toast.type]
                            }, void 0, false, {
                                fileName: "[project]/Desktop/auexch/src/components/common/toast/index.tsx",
                                lineNumber: 127,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0)),
                            toast.title
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Desktop/auexch/src/components/common/toast/index.tsx",
                        lineNumber: 126,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$auexch$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        style: closeStyle,
                        onClick: handleClose,
                        children: "×"
                    }, void 0, false, {
                        fileName: "[project]/Desktop/auexch/src/components/common/toast/index.tsx",
                        lineNumber: 140,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/Desktop/auexch/src/components/common/toast/index.tsx",
                lineNumber: 125,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$auexch$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: messageStyle,
                children: toast.message
            }, void 0, false, {
                fileName: "[project]/Desktop/auexch/src/components/common/toast/index.tsx",
                lineNumber: 144,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$auexch$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: progressStyle
            }, void 0, false, {
                fileName: "[project]/Desktop/auexch/src/components/common/toast/index.tsx",
                lineNumber: 145,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/Desktop/auexch/src/components/common/toast/index.tsx",
        lineNumber: 124,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_s(ToastComponent, "bXBd/WbmO9A8Q7bxaOKZvuJyGc0=");
_c = ToastComponent;
const __TURBOPACK__default__export__ = ToastComponent;
var _c;
__turbopack_context__.k.register(_c, "ToastComponent");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Desktop/auexch/src/components/common/toast/index.tsx [app-client] (ecmascript, next/dynamic entry)", ((__turbopack_context__) => {

__turbopack_context__.n(__turbopack_context__.i("[project]/Desktop/auexch/src/components/common/toast/index.tsx [app-client] (ecmascript)"));
}),
]);

//# sourceMappingURL=Desktop_auexch_src_components_common_toast_index_tsx_7e1d3976._.js.map