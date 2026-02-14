(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/Desktop/auexch/src/app/loading.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Loading
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$auexch$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/auexch/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$auexch$2f$node_modules$2f$next$2f$dist$2f$shared$2f$lib$2f$app$2d$dynamic$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/auexch/node_modules/next/dist/shared/lib/app-dynamic.js [app-client] (ecmascript)");
;
"use client";
;
;
const Loader = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$auexch$2f$node_modules$2f$next$2f$dist$2f$shared$2f$lib$2f$app$2d$dynamic$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(()=>(()=>{
        const e = new Error("Cannot find module '../components/common/loader'");
        e.code = 'MODULE_NOT_FOUND';
        throw e;
    })(), {
    loadableGenerated: {
        modules: [
            null
        ]
    },
    loading: ()=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$auexch$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$auexch$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {}, void 0, false),
    ssr: false
});
_c = Loader;
function Loading() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$auexch$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "fixed inset-0 flex items-center justify-center z-9999",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$auexch$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Loader, {}, void 0, false, {
            fileName: "[project]/Desktop/auexch/src/app/loading.tsx",
            lineNumber: 14,
            columnNumber: 9
        }, this)
    }, void 0, false, {
        fileName: "[project]/Desktop/auexch/src/app/loading.tsx",
        lineNumber: 13,
        columnNumber: 5
    }, this);
}
_c1 = Loading;
var _c, _c1;
__turbopack_context__.k.register(_c, "Loader");
__turbopack_context__.k.register(_c1, "Loading");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Desktop/auexch/src/lib/config.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "BASE_URL",
    ()=>BASE_URL,
    "BASE_URL_WS",
    ()=>BASE_URL_WS,
    "CONFIG",
    ()=>CONFIG,
    "DefaultStackForT20worldexch",
    ()=>DefaultStackForT20worldexch,
    "STACK_VALUE",
    ()=>STACK_VALUE
]);
const BASE_URL = "https://t20exch.com";
const BASE_URL_WS = "https://t20exch.com";
const CONFIG = {
    SiteName: "exchange",
    siteKey: "7",
    userLogin: BASE_URL + "/app/users/playerLogin",
    getUserProfile: "/app/exchange/users/userProfile",
    getBallByBallMarket: "/api/exchange/markets/getBallByBallMarket",
    videoStreamURL: "/api/exchange/streaming/exchEventsStreaming",
    getUserBalance: "/app/exchange/users/userBalance",
    getExposureListURL: "/app/exchange/users/userEventsExposure",
    eventMatchedBetList: "/app/exchange/users/betlist/eventMatchedBetList",
    getAllEventsList: "/api/navigation/allEventsList",
    getAllEventsListTime: 1440,
    getSportsList: "/api/exchange/sports/sportsList",
    getSportsListTime: 1440,
    getTopCasinoGame: "/api/navigation/casinoEvents",
    getTopCasinoGameTime: 1440,
    casinoTableList: "/api/exchange/navigations/casino/casinoTableList",
    casinoTabList: "/api/exchange/navigations/casino/casinoTabList",
    casinoInternational: "/api/exchange/navigations/internationalCasinoList",
    casinoInternationalTime: 1440,
    menuList: "/api/navigation/menuList",
    menuListTime: 1440,
    getIpLocation: "https://pro.ip-api.com/json/?key=qSA5ctYZHdWsx04",
    getUserBetStake: "/app/exchange/users/userBetStakeList",
    getUserBetStakeTime: 518400,
    getRules: "/api/exchange/rules/getSportsRule",
    getRulesTime: 1440,
    activityList: "/app/exchange/users/userActivityLogs",
    changeUserPassword: "/app/exchange/users/userChangePassword",
    getSlider: "/api/navigation/sliderList",
    getSliderTime: 20,
    getBanner: "/api/navigation/bannersList",
    getBannerTime: 20,
    getExchangeTypeList: "/api/navigation/exchangeTypeList",
    getExchangeTypeListTime: 1440,
    getExchangeNews: "/api/navigation/exchangeNews",
    getExchangeNewsTime: 120,
    statement: "/app/exchange/users/userAccountStatement",
    profitLoss: "/app/exchange/users/pl/userSportsProfitlossNew",
    newProfitLoss: "/app/exchange/users/pl/userSportsProfitlossNew",
    profitLossEvents: "/app/exchange/users/pl/userEventsProfitlossNew",
    betHistory: "/app/exchange/users/userBetList",
    marketList: "/api/navigation/marketList",
    getRacingEvents: "/api/navigation/racingEventsList",
    getRacingEventsTime: 20,
    userUpdateStackValueURL: "/app/exchange/users/updateUserBetStake",
    profitLossMarket: "/app/exchange/users/pl/userMarketsProfitlossNew",
    getAllMarketplURL: "/app/exchange/users/pl/getMatchOddsPl",
    placeBetURL: "/app/exchange/users/placebet",
    unmatchedBets: "/app/exchange/users/matchedUnmatchedBets",
    cancelBetsAllUnmatchedBets: "/app/exchange/users/cancelBets",
    getMarketBook: "/app/exchange/users/pl/marketBook",
    exchEventsStreaming: "/api/streaming/exchEventsStreaming",
    getSponserDetailsURL: "/v1/exchange/sponsor/sponsorshipsDetails",
    profitLossHistory: "/app/exchange/users/bet/userMarketBetsNew"
};
const STACK_VALUE = [
    {
        stakeName: "1000",
        stakeAmount: "1000"
    },
    {
        stakeName: "5000",
        stakeAmount: "5000"
    },
    {
        stakeName: "10000",
        stakeAmount: "10000"
    },
    {
        stakeName: "25000",
        stakeAmount: "25000"
    },
    {
        stakeName: "50000",
        stakeAmount: "50000"
    },
    {
        stakeName: "100000",
        stakeAmount: "100000"
    },
    {
        stakeName: "200000",
        stakeAmount: "200000"
    },
    {
        stakeName: "500000",
        stakeAmount: "500000"
    }
];
const DefaultStackForT20worldexch = [
    {
        stakeName: "25000",
        stakeAmount: "25000"
    },
    {
        stakeName: "50000",
        stakeAmount: "50000"
    },
    {
        stakeName: "100000",
        stakeAmount: "100000"
    },
    {
        stakeName: "200000",
        stakeAmount: "200000"
    },
    {
        stakeName: "500000",
        stakeAmount: "500000"
    },
    {
        stakeName: "1000000",
        stakeAmount: "1000000"
    },
    {
        stakeName: "2000000",
        stakeAmount: "2000000"
    },
    {
        stakeName: "5000000",
        stakeAmount: "5000000"
    }
];
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Desktop/auexch/src/lib/axios-instance.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "http",
    ()=>http
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$auexch$2f$node_modules$2f$axios$2f$lib$2f$axios$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/auexch/node_modules/axios/lib/axios.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$auexch$2f$src$2f$lib$2f$config$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/auexch/src/lib/config.ts [app-client] (ecmascript)");
;
;
const http = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$auexch$2f$node_modules$2f$axios$2f$lib$2f$axios$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].create({
    baseURL: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$auexch$2f$src$2f$lib$2f$config$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["BASE_URL"],
    headers: {
        "x-Requested-With": "XMLHttpRequest",
        "Content-Type": "application/json"
    },
    withCredentials: false
});
// -----------------------
// 🔥 Request Interceptor
// -----------------------
http.interceptors.request.use((config)=>{
    if ("TURBOPACK compile-time truthy", 1) {
        const token = localStorage.getItem("token");
        if (token) {
            config.headers["Authorization"] = `Bearer ${token}`;
        }
    }
    return config;
}, (error)=>{
    return Promise.reject(error);
});
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Desktop/auexch/src/lib/crypto-service.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// lib/cryptoService.ts
__turbopack_context__.s([
    "CryptoService",
    ()=>CryptoService
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$auexch$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$buffer$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/Desktop/auexch/node_modules/next/dist/compiled/buffer/index.js [app-client] (ecmascript)");
const SECRET_PASS = "9f2d3b7c4a6e8f0b-1c2d3e4f5a6b7c8d-9e0f1a2b3c4d5e6f7-a8b9c0d1e2f3a4";
// Optional: second password (you had PASS in original)
const PASS = SECRET_PASS;
const enc = (str)=>new TextEncoder().encode(str);
const dec = (buf)=>new TextDecoder().decode(buf);
const b64 = (a)=>__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$auexch$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$buffer$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Buffer"].from(a instanceof Uint8Array ? a : new Uint8Array(a)).toString("base64");
const ub64 = (s)=>new Uint8Array(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$auexch$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$buffer$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Buffer"].from(s, "base64"));
const subtle = ()=>{
    if ("TURBOPACK compile-time truthy", 1) return window.crypto.subtle;
    //TURBOPACK unreachable
    ;
};
// ---- Key derivation #1 ----
async function getKey() {
    const keyMaterial = await subtle().importKey("raw", enc(SECRET_PASS), "PBKDF2", false, [
        "deriveKey"
    ]);
    return subtle().deriveKey({
        name: "PBKDF2",
        hash: "SHA-256",
        salt: enc("fixed-salt"),
        iterations: 100000
    }, keyMaterial, {
        name: "AES-GCM",
        length: 256
    }, false, [
        "encrypt",
        "decrypt"
    ]);
}
// ---- Key derivation #2 (your second implementaton) ----
async function key1() {
    const km = await subtle().importKey("raw", enc(PASS), "PBKDF2", false, [
        "deriveKey"
    ]);
    return subtle().deriveKey({
        name: "PBKDF2",
        salt: enc("x"),
        iterations: 50000,
        hash: "SHA-256"
    }, km, {
        name: "AES-GCM",
        length: 256
    }, false, [
        "encrypt",
        "decrypt"
    ]);
}
const CryptoService = {
    // --------------------------------------
    async encryptJSON (obj) {
        const iv = crypto.getRandomValues(new Uint8Array(12));
        const key = await getKey();
        const data = enc(JSON.stringify(obj));
        const ct = await subtle().encrypt({
            name: "AES-GCM",
            iv
        }, key, data);
        return {
            iv: b64(iv),
            payload: b64(ct)
        };
    },
    async decryptJSON (data) {
        const key = await getKey();
        const plain = await subtle().decrypt({
            name: "AES-GCM",
            iv: ub64(data.iv)
        }, key, ub64(data.payload));
        return JSON.parse(dec(plain));
    },
    // --------------------------------------
    async encryptJSON1 (obj) {
        const iv = crypto.getRandomValues(new Uint8Array(12));
        const key = await key1();
        const ct = await subtle().encrypt({
            name: "AES-GCM",
            iv
        }, key, enc(JSON.stringify(obj)));
        return {
            iv: b64(iv),
            payload: b64(ct)
        };
    },
    async decryptJSON1 (data) {
        const key = await key1();
        const pt = await subtle().decrypt({
            name: "AES-GCM",
            iv: ub64(data.iv)
        }, key, ub64(data.payload));
        return JSON.parse(dec(pt));
    },
    // --------------------------------------
    async decryptApiResponse (data) {
        const [iv, payload] = data.split("###");
        return this.decryptJSON1({
            iv,
            payload
        });
    }
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Desktop/auexch/src/lib/index-db.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "getData",
    ()=>getData,
    "initDB",
    ()=>initDB,
    "saveData",
    ()=>saveData
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$auexch$2f$node_modules$2f$idb$2f$build$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/auexch/node_modules/idb/build/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$auexch$2f$src$2f$lib$2f$config$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/auexch/src/lib/config.ts [app-client] (ecmascript)");
;
;
const dbName = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$auexch$2f$src$2f$lib$2f$config$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CONFIG"].SiteName;
const storeName = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$auexch$2f$src$2f$lib$2f$config$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CONFIG"].SiteName;
const initDB = async ()=>{
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$auexch$2f$node_modules$2f$idb$2f$build$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["openDB"])(dbName, 1, {
        upgrade (db) {
            if (!db.objectStoreNames.contains(storeName)) {
                db.createObjectStore(storeName);
            }
        }
    });
};
const saveData = async (key, data)=>{
    const db = await initDB();
    const payload = {
        data,
        timestamp: Date.now()
    };
    return db.put(storeName, payload, key);
};
const getData = async (key)=>{
    const db = await initDB();
    return db.get(storeName, key); // returns { data, timestamp }
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Desktop/auexch/src/lib/functions.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "fetchData",
    ()=>fetchData,
    "formatDateDetail",
    ()=>formatDateDetail,
    "formatDateStamp",
    ()=>formatDateStamp,
    "loginRequest",
    ()=>loginRequest,
    "splitMsg",
    ()=>splitMsg
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$auexch$2f$src$2f$lib$2f$axios$2d$instance$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/auexch/src/lib/axios-instance.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$auexch$2f$src$2f$lib$2f$crypto$2d$service$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/auexch/src/lib/crypto-service.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$auexch$2f$src$2f$lib$2f$index$2d$db$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/auexch/src/lib/index-db.ts [app-client] (ecmascript)");
;
;
;
function splitMsg(text) {
    const parts = text?.split(/',\s*'/)?.map((p)=>p.replace(/^'+|'+$/g, "").trim()) || [];
    return {
        status: parts[0] || "",
        title: parts[1] || "",
        desc: parts[2] || ""
    };
}
async function fetchData({ cachedKey, url, payload, setFn, showToast, expireIn = 60 * 5, forceApiCall }) {
    if (cachedKey) {
        const cached = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$auexch$2f$src$2f$lib$2f$index$2d$db$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getData"])(cachedKey);
        if (!forceApiCall && cached) {
            const now = Date.now();
            const diff = (now - cached.timestamp) / 1000; // seconds
            if (diff < expireIn) {
                // Cache Fresh
                setFn && setFn(cached.data);
                console.log("Data loaded from IndexedDB cache (fresh)");
                return;
            } else {
                console.log("Cache expired — fetching fresh API data...");
            }
        }
    }
    // API CALL
    try {
        const response = await __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$auexch$2f$src$2f$lib$2f$axios$2d$instance$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["http"].post(url, payload);
        const apiData = response?.data?.data ?? response?.data;
        setFn && setFn(apiData);
        // SHOW TOAST
        if (showToast) {
            if (typeof response?.meta?.message === "string" || typeof response?.data?.meta?.message === "string") {
                const msg = splitMsg(response?.meta?.message || response?.data?.meta?.message);
                showToast(msg.status, msg.title, msg.desc);
            } else {
                showToast("success", "Successfully", response?.meta?.message);
            }
        }
        // Save to cache
        if (cachedKey) {
            await (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$auexch$2f$src$2f$lib$2f$index$2d$db$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["saveData"])(cachedKey, apiData);
            console.log("Data saved to cache with timestamp");
        }
    } catch (error) {
        console.error("API fetch error:", error);
        if (showToast) {
            if (typeof error?.meta?.message === "string") {
                const msg = splitMsg(error.meta.message);
                showToast(msg.status, msg.title, msg.desc);
            } else {
                showToast("error", "Failed", error?.meta?.message);
            }
        }
    }
}
async function loginRequest({ url, username, password, setState }) {
    try {
        username = username.trim().toLowerCase();
        const reqBody = {
            userName: username,
            password: password,
            ts: Date.now()
        };
        const encrypted = await __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$auexch$2f$src$2f$lib$2f$crypto$2d$service$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CryptoService"].encryptJSON1(reqBody);
        const requestBody = {
            data: encrypted.iv + "###" + encrypted.payload
        };
        const response = await fetch(url, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(requestBody)
        });
        const encryptedResponse = await response.text();
        const result = await __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$auexch$2f$src$2f$lib$2f$crypto$2d$service$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CryptoService"].decryptApiResponse(encryptedResponse);
        if (result?.meta?.status_code === 200) {
            // Save tokens
            if ("TURBOPACK compile-time truthy", 1) {
                localStorage.setItem("token", result.data.accessToken);
                localStorage.setItem("intCasino", result.data.intCasino);
                localStorage.setItem("userDetail", JSON.stringify(result.data.userDetail));
                localStorage.setItem("newLogin", "true");
            }
            // update zustand state (optional)
            setState && setState({
                isLoggedIn: true,
                token: result.data.accessToken,
                userDetail: result.data.userDetail,
                error: null,
                showModal: false
            });
            return {
                success: true,
                meta: result.meta,
                data: result.data
            };
        }
        // ---------------------------------------------------
        // 7) FAILURE
        // ---------------------------------------------------
        const errMsg = result?.meta?.message || "Login failed";
        setState && setState({
            isLoggedIn: false,
            token: null,
            userDetail: null,
            error: errMsg
        });
        return {
            success: false,
            meta: result.meta,
            data: null
        };
    } catch (err) {
        console.log("🔴 Login Error:", err);
        let errorMsg = "Something went wrong";
        // Try decrypting backend error
        try {
            const decryptedErr = await __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$auexch$2f$src$2f$lib$2f$crypto$2d$service$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CryptoService"].decryptApiResponse(err?.response?.data);
            errorMsg = decryptedErr?.meta?.message || decryptedErr?.message || decryptedErr?.error || errorMsg;
        } catch  {}
        setState && setState({
            isLoggedIn: false,
            token: null,
            userDetail: null,
            meta: errorMsg
        });
        return {
            success: false,
            meta: {
                message: errorMsg,
                status_code: 500
            }
        };
    }
}
function formatDateStamp(isoString) {
    if (!isoString) return "";
    const date = new Date(isoString);
    // Add 5 hours for Pakistan timezone (UTC+5)
    const pkDate = new Date(date.getTime() + 5 * 60 * 60 * 1000);
    const day = pkDate.getUTCDate();
    const month = pkDate.getUTCMonth() + 1;
    const year = pkDate.getUTCFullYear();
    let hours = pkDate.getUTCHours();
    const minutes = pkDate.getUTCMinutes().toString().padStart(2, "0");
    const ampm = hours >= 12 ? "PM" : "AM";
    hours = hours % 12 || 12;
    const time = `${hours.toString().padStart(2, "0")}:${minutes} ${ampm}`;
    return `${day}/${month}/${year} ${time}`;
}
function formatDateDetail(isoString) {
    if (!isoString) return "";
    const date = new Date(isoString);
    // Add 5 hours for Pakistan timezone (UTC+5)
    const pkDate = new Date(date.getTime() + 5 * 60 * 60 * 1000);
    const day = pkDate.getUTCDate().toString().padStart(2, "0");
    const month = (pkDate.getUTCMonth() + 1).toString().padStart(2, "0");
    const year = pkDate.getUTCFullYear();
    let hours = pkDate.getUTCHours();
    const minutes = pkDate.getUTCMinutes().toString().padStart(2, "0");
    const seconds = pkDate.getUTCSeconds().toString().padStart(2, "0");
    const ampm = hours >= 12 ? "PM" : "AM";
    hours = hours % 12 || 12;
    const time = `${hours.toString().padStart(2, "0")}:${minutes}:${seconds} ${ampm}`;
    return `${day}-${month}-${year} ${time}`;
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Desktop/auexch/src/lib/store/store.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/* eslint-disable @typescript-eslint/no-explicit-any */ __turbopack_context__.s([
    "useAppStore",
    ()=>useAppStore
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$auexch$2f$node_modules$2f$zustand$2f$esm$2f$react$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/auexch/node_modules/zustand/esm/react.mjs [app-client] (ecmascript)");
;
const useAppStore = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$auexch$2f$node_modules$2f$zustand$2f$esm$2f$react$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["create"])((set)=>({
        userBalance: null,
        allEventsList: null,
        casinoEvents: null,
        exchangeTypeList: null,
        menuList: null,
        exchangeNews: null,
        stakeValue: null,
        setCasinoEvents: (data)=>set({
                casinoEvents: data
            }),
        setExchangeTypeList: (data)=>set({
                exchangeTypeList: data
            }),
        setMenuList: (data)=>set({
                menuList: data
            }),
        setAllEventsList: (data)=>set({
                allEventsList: data
            }),
        setExchangeNews: (data)=>set({
                exchangeNews: data
            }),
        setStakeValue: (data)=>set({
                stakeValue: data
            }),
        // auth setter
        setUserBalance: (value)=>set({
                userBalance: value
            })
    }));
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Desktop/auexch/src/lib/store/authStore.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useAuthStore",
    ()=>useAuthStore
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$auexch$2f$node_modules$2f$zustand$2f$esm$2f$react$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/auexch/node_modules/zustand/esm/react.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$auexch$2f$src$2f$lib$2f$functions$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/auexch/src/lib/functions.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$auexch$2f$src$2f$lib$2f$config$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/auexch/src/lib/config.ts [app-client] (ecmascript)");
;
;
;
const useAuthStore = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$auexch$2f$node_modules$2f$zustand$2f$esm$2f$react$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["create"])((set, get)=>({
        token: null,
        isLoggedIn: false,
        userDetail: null,
        error: null,
        showModal: false,
        checkLogin: (token)=>{
            set({
                token: token,
                isLoggedIn: !!token
            });
        },
        // ---------------------------------------------
        // LOGIN ACTION
        // ---------------------------------------------
        loginUser: async (username, password, showToast)=>{
            set({
                error: null
            });
            const result = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$auexch$2f$src$2f$lib$2f$functions$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["loginRequest"])({
                url: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$auexch$2f$src$2f$lib$2f$config$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CONFIG"].userLogin,
                username,
                password,
                setState: set
            });
            // ---- Toast
            if (showToast) {
                if (typeof result?.meta?.message === "string") {
                    const msg = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$auexch$2f$src$2f$lib$2f$functions$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["splitMsg"])(result.meta.message);
                    showToast(msg.status, msg.title, msg.desc);
                } else {
                    showToast(result?.success ? "success" : "error", result?.success ? "Successfully" : "Failed", result?.meta?.message || "Unknown error");
                }
            }
            return result;
        },
        // ---------------------------------------------
        // LOGOUT ACTION
        // ---------------------------------------------
        logoutUser: ()=>{
            if ("TURBOPACK compile-time truthy", 1) {
                localStorage.removeItem("token");
                localStorage.removeItem("intCasino");
                localStorage.removeItem("userDetail");
                localStorage.removeItem("newLogin");
            }
            set({
                isLoggedIn: false,
                token: null,
                userDetail: null,
                error: null
            });
        },
        // ---------------------------------------------
        // ERROR SETTER (optional)
        // ---------------------------------------------
        setError: (msg)=>set({
                error: msg
            })
    }));
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Desktop/auexch/src/app/responsive-layout.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>ResponsiveLayout
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$auexch$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/auexch/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$auexch$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/auexch/node_modules/next/navigation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$auexch$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/auexch/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$auexch$2f$node_modules$2f$next$2f$dist$2f$shared$2f$lib$2f$app$2d$dynamic$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/auexch/node_modules/next/dist/shared/lib/app-dynamic.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$auexch$2f$src$2f$app$2f$loading$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/auexch/src/app/loading.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$auexch$2f$src$2f$lib$2f$functions$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/auexch/src/lib/functions.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$auexch$2f$src$2f$lib$2f$config$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/auexch/src/lib/config.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$auexch$2f$src$2f$lib$2f$store$2f$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/auexch/src/lib/store/store.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$auexch$2f$src$2f$lib$2f$store$2f$authStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/auexch/src/lib/store/authStore.ts [app-client] (ecmascript)");
;
;
;
;
;
;
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
;
;
;
// 🔥 Lazy Load Components Instead of Direct Import
const Header = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$auexch$2f$node_modules$2f$next$2f$dist$2f$shared$2f$lib$2f$app$2d$dynamic$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(()=>(()=>{
        const e = new Error("Cannot find module '@/components/common/header'");
        e.code = 'MODULE_NOT_FOUND';
        throw e;
    })(), {
    loadableGenerated: {
        modules: [
            null
        ]
    },
    loading: ()=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$auexch$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$auexch$2f$src$2f$app$2f$loading$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
            fileName: "[project]/Desktop/auexch/src/app/responsive-layout.tsx",
            lineNumber: 14,
            columnNumber: 18
        }, ("TURBOPACK compile-time value", void 0))
});
_c = Header;
const Sidebar = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$auexch$2f$node_modules$2f$next$2f$dist$2f$shared$2f$lib$2f$app$2d$dynamic$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(()=>(()=>{
        const e = new Error("Cannot find module '@/components/common/sidebar'");
        e.code = 'MODULE_NOT_FOUND';
        throw e;
    })(), {
    loadableGenerated: {
        modules: [
            null
        ]
    },
    loading: ()=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$auexch$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$auexch$2f$src$2f$app$2f$loading$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
            fileName: "[project]/Desktop/auexch/src/app/responsive-layout.tsx",
            lineNumber: 18,
            columnNumber: 18
        }, ("TURBOPACK compile-time value", void 0))
});
_c1 = Sidebar;
const DTopnav = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$auexch$2f$node_modules$2f$next$2f$dist$2f$shared$2f$lib$2f$app$2d$dynamic$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(()=>(()=>{
        const e = new Error("Cannot find module '@/components/d-view/d-topnav'");
        e.code = 'MODULE_NOT_FOUND';
        throw e;
    })(), {
    loadableGenerated: {
        modules: [
            null
        ]
    },
    loading: ()=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$auexch$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$auexch$2f$src$2f$app$2f$loading$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
            fileName: "[project]/Desktop/auexch/src/app/responsive-layout.tsx",
            lineNumber: 22,
            columnNumber: 18
        }, ("TURBOPACK compile-time value", void 0)),
    ssr: false
});
_c2 = DTopnav;
const MFooter = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$auexch$2f$node_modules$2f$next$2f$dist$2f$shared$2f$lib$2f$app$2d$dynamic$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(()=>(()=>{
        const e = new Error("Cannot find module '@/components/m-view/m-footer'");
        e.code = 'MODULE_NOT_FOUND';
        throw e;
    })(), {
    loadableGenerated: {
        modules: [
            null
        ]
    },
    loading: ()=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$auexch$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$auexch$2f$src$2f$app$2f$loading$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
            fileName: "[project]/Desktop/auexch/src/app/responsive-layout.tsx",
            lineNumber: 27,
            columnNumber: 18
        }, ("TURBOPACK compile-time value", void 0))
});
_c3 = MFooter;
const MMenuTabs = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$auexch$2f$node_modules$2f$next$2f$dist$2f$shared$2f$lib$2f$app$2d$dynamic$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(()=>(()=>{
        const e = new Error("Cannot find module '@/components/m-view/m-menu-tabs'");
        e.code = 'MODULE_NOT_FOUND';
        throw e;
    })(), {
    loadableGenerated: {
        modules: [
            null
        ]
    },
    loading: ()=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$auexch$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$auexch$2f$src$2f$app$2f$loading$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
            fileName: "[project]/Desktop/auexch/src/app/responsive-layout.tsx",
            lineNumber: 31,
            columnNumber: 18
        }, ("TURBOPACK compile-time value", void 0))
});
_c4 = MMenuTabs;
const MSportsTab = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$auexch$2f$node_modules$2f$next$2f$dist$2f$shared$2f$lib$2f$app$2d$dynamic$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(_c5 = ()=>(()=>{
        const e = new Error("Cannot find module '@/components/m-view/m-sports-tab'");
        e.code = 'MODULE_NOT_FOUND';
        throw e;
    })(), {
    loadableGenerated: {
        modules: [
            null
        ]
    },
    loading: ()=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$auexch$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$auexch$2f$src$2f$app$2f$loading$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
            fileName: "[project]/Desktop/auexch/src/app/responsive-layout.tsx",
            lineNumber: 35,
            columnNumber: 18
        }, ("TURBOPACK compile-time value", void 0))
});
_c6 = MSportsTab;
function ResponsiveLayout({ children }) {
    _s();
    const { setCasinoEvents, setAllEventsList, setExchangeTypeList, setMenuList, setExchangeNews, setUserBalance, setStakeValue } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$auexch$2f$src$2f$lib$2f$store$2f$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAppStore"])();
    const pathname = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$auexch$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePathname"])();
    const [isMobile, setIsMobile] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$auexch$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [isReady, setIsReady] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$auexch$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const { checkLogin, isLoggedIn } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$auexch$2f$src$2f$lib$2f$store$2f$authStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAuthStore"])();
    // device breakpoint detection
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$auexch$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "ResponsiveLayout.useEffect": ()=>{
            const handleResize = {
                "ResponsiveLayout.useEffect.handleResize": ()=>{
                    setIsMobile(window.innerWidth < 992);
                    setIsReady(true);
                }
            }["ResponsiveLayout.useEffect.handleResize"];
            handleResize();
            window.addEventListener("resize", handleResize);
            return ({
                "ResponsiveLayout.useEffect": ()=>window.removeEventListener("resize", handleResize)
            })["ResponsiveLayout.useEffect"];
        }
    }["ResponsiveLayout.useEffect"], []);
    // API Calls
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$auexch$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "ResponsiveLayout.useEffect": ()=>{
            const token = localStorage.getItem("token");
            checkLogin(token || "");
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$auexch$2f$src$2f$lib$2f$functions$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["fetchData"])({
                url: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$auexch$2f$src$2f$lib$2f$config$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CONFIG"].getAllEventsList,
                payload: {
                    key: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$auexch$2f$src$2f$lib$2f$config$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CONFIG"].siteKey
                },
                cachedKey: "allEventsList",
                setFn: setAllEventsList,
                expireIn: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$auexch$2f$src$2f$lib$2f$config$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CONFIG"].getAllEventsListTime
            });
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$auexch$2f$src$2f$lib$2f$functions$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["fetchData"])({
                url: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$auexch$2f$src$2f$lib$2f$config$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CONFIG"].getTopCasinoGame,
                payload: {
                    key: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$auexch$2f$src$2f$lib$2f$config$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CONFIG"].siteKey
                },
                cachedKey: "casinoEvents",
                setFn: setCasinoEvents,
                expireIn: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$auexch$2f$src$2f$lib$2f$config$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CONFIG"].getTopCasinoGameTime
            });
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$auexch$2f$src$2f$lib$2f$functions$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["fetchData"])({
                url: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$auexch$2f$src$2f$lib$2f$config$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CONFIG"].menuList,
                payload: {
                    key: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$auexch$2f$src$2f$lib$2f$config$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CONFIG"].siteKey
                },
                cachedKey: "menuList",
                setFn: setMenuList,
                expireIn: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$auexch$2f$src$2f$lib$2f$config$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CONFIG"].menuListTime
            });
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$auexch$2f$src$2f$lib$2f$functions$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["fetchData"])({
                url: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$auexch$2f$src$2f$lib$2f$config$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CONFIG"].getExchangeTypeList,
                payload: {
                    key: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$auexch$2f$src$2f$lib$2f$config$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CONFIG"].siteKey
                },
                cachedKey: "exchangeTypeList",
                setFn: setExchangeTypeList,
                expireIn: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$auexch$2f$src$2f$lib$2f$config$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CONFIG"].getExchangeTypeListTime
            });
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$auexch$2f$src$2f$lib$2f$functions$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["fetchData"])({
                url: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$auexch$2f$src$2f$lib$2f$config$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CONFIG"].getExchangeNews,
                payload: {
                    key: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$auexch$2f$src$2f$lib$2f$config$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CONFIG"].siteKey
                },
                cachedKey: "exchangeNews",
                setFn: setExchangeNews,
                expireIn: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$auexch$2f$src$2f$lib$2f$config$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CONFIG"].getExchangeNewsTime
            });
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$auexch$2f$src$2f$lib$2f$functions$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["fetchData"])({
                url: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$auexch$2f$src$2f$lib$2f$config$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CONFIG"].getUserBetStake,
                payload: {
                    key: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$auexch$2f$src$2f$lib$2f$config$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CONFIG"].siteKey
                },
                cachedKey: "betStake",
                setFn: setStakeValue,
                expireIn: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$auexch$2f$src$2f$lib$2f$config$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CONFIG"].getUserBetStakeTime
            });
        }
    }["ResponsiveLayout.useEffect"], []);
    // Prevent blank white page before DOM mount
    if (!isReady) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$auexch$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "fixed inset-0 flex items-center justify-center bg-white z-9999",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$auexch$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$auexch$2f$src$2f$app$2f$loading$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                fileName: "[project]/Desktop/auexch/src/app/responsive-layout.tsx",
                lineNumber: 123,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/Desktop/auexch/src/app/responsive-layout.tsx",
            lineNumber: 122,
            columnNumber: 7
        }, this);
    }
    const hideMenuAndSports = pathname?.includes("/market-details") || [
        "/accountstatement",
        "/activity-log",
        "/bethistory",
        "/changepassword",
        "/password-history",
        "/profitloss",
        "/profitloss-event",
        "/profitloss-market",
        "/settings",
        "/userBetHistory",
        "/rules"
    ].includes(pathname || "");
    if (pathname === "/login") return children;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$auexch$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$auexch$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: isMobile ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$auexch$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "relative w-full h-screen overflow-y-auto",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$auexch$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "w-full bg-white shadow",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$auexch$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Header, {}, void 0, false, {
                            fileName: "[project]/Desktop/auexch/src/app/responsive-layout.tsx",
                            lineNumber: 152,
                            columnNumber: 13
                        }, this),
                        !hideMenuAndSports && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$auexch$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(MMenuTabs, {}, void 0, false, {
                            fileName: "[project]/Desktop/auexch/src/app/responsive-layout.tsx",
                            lineNumber: 153,
                            columnNumber: 36
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/Desktop/auexch/src/app/responsive-layout.tsx",
                    lineNumber: 151,
                    columnNumber: 11
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$auexch$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "overflow-y-auto",
                    children: [
                        children,
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$auexch$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "fixed bottom-0 left-0 w-full z-50 bg-white shadow",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$auexch$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(MFooter, {}, void 0, false, {
                                fileName: "[project]/Desktop/auexch/src/app/responsive-layout.tsx",
                                lineNumber: 161,
                                columnNumber: 15
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/Desktop/auexch/src/app/responsive-layout.tsx",
                            lineNumber: 160,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/Desktop/auexch/src/app/responsive-layout.tsx",
                    lineNumber: 156,
                    columnNumber: 11
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/Desktop/auexch/src/app/responsive-layout.tsx",
            lineNumber: 150,
            columnNumber: 9
        }, this) : /* ---------------- DESKTOP VIEW ---------------- */ /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$auexch$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "relative w-full h-screen overflow-hidden",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$auexch$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "fixed top-0 left-0 w-full z-50 bg-white shadow",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$auexch$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Header, {}, void 0, false, {
                            fileName: "[project]/Desktop/auexch/src/app/responsive-layout.tsx",
                            lineNumber: 169,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$auexch$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(DTopnav, {}, void 0, false, {
                            fileName: "[project]/Desktop/auexch/src/app/responsive-layout.tsx",
                            lineNumber: 170,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/Desktop/auexch/src/app/responsive-layout.tsx",
                    lineNumber: 168,
                    columnNumber: 11
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$auexch$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "h-[118]"
                }, void 0, false, {
                    fileName: "[project]/Desktop/auexch/src/app/responsive-layout.tsx",
                    lineNumber: 173,
                    columnNumber: 11
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$auexch$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex h-full",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$auexch$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "fixed top-29.75 left-0 h-[calc(100vh-150px)] overflow-y-auto no-scrollbar w-[15%] bg-[#C3BDBD]",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$auexch$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Sidebar, {}, void 0, false, {
                                fileName: "[project]/Desktop/auexch/src/app/responsive-layout.tsx",
                                lineNumber: 176,
                                columnNumber: 15
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/Desktop/auexch/src/app/responsive-layout.tsx",
                            lineNumber: 175,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$auexch$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
                            className: "ml-[15%] w-[85%] h-[calc(100vh-110px)] overflow-y-auto pb-2 no-scrollbar",
                            children: [
                                children,
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$auexch$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "h-[30]"
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/auexch/src/app/responsive-layout.tsx",
                                    lineNumber: 181,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Desktop/auexch/src/app/responsive-layout.tsx",
                            lineNumber: 179,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/Desktop/auexch/src/app/responsive-layout.tsx",
                    lineNumber: 174,
                    columnNumber: 11
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$auexch$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "fixed bottom-0 left-0 w-full z-50 bg-white shadow",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$auexch$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(MFooter, {}, void 0, false, {
                        fileName: "[project]/Desktop/auexch/src/app/responsive-layout.tsx",
                        lineNumber: 186,
                        columnNumber: 13
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/Desktop/auexch/src/app/responsive-layout.tsx",
                    lineNumber: 185,
                    columnNumber: 11
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/Desktop/auexch/src/app/responsive-layout.tsx",
            lineNumber: 167,
            columnNumber: 9
        }, this)
    }, void 0, false);
}
_s(ResponsiveLayout, "f+VPg0h0c/4mMYAlzuZEUU3gaKA=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$auexch$2f$src$2f$lib$2f$store$2f$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAppStore"],
        __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$auexch$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePathname"],
        __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$auexch$2f$src$2f$lib$2f$store$2f$authStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAuthStore"]
    ];
});
_c7 = ResponsiveLayout;
var _c, _c1, _c2, _c3, _c4, _c5, _c6, _c7;
__turbopack_context__.k.register(_c, "Header");
__turbopack_context__.k.register(_c1, "Sidebar");
__turbopack_context__.k.register(_c2, "DTopnav");
__turbopack_context__.k.register(_c3, "MFooter");
__turbopack_context__.k.register(_c4, "MMenuTabs");
__turbopack_context__.k.register(_c5, "MSportsTab$dynamic");
__turbopack_context__.k.register(_c6, "MSportsTab");
__turbopack_context__.k.register(_c7, "ResponsiveLayout");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Desktop/auexch/src/components/common/toast/toast-context.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ToastProvider",
    ()=>ToastProvider,
    "useToast",
    ()=>useToast
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$auexch$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/auexch/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$auexch$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/auexch/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature(), _s1 = __turbopack_context__.k.signature();
"use client";
;
const ToastContext = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$auexch$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createContext"])(undefined);
const useToast = ()=>{
    _s();
    const context = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$auexch$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useContext"])(ToastContext);
    if (!context) throw new Error("useToast must be used inside ToastProvider");
    return context;
};
_s(useToast, "b9L3QQ+jgeyIrH0NfHrJ8nn7VMU=");
const ToastProvider = ({ children })=>{
    _s1();
    const [toasts, setToasts] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$auexch$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const showToast = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$auexch$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "ToastProvider.useCallback[showToast]": (type, title, message)=>{
            const newToast = {
                id: crypto.randomUUID(),
                type,
                title,
                message
            };
            setToasts({
                "ToastProvider.useCallback[showToast]": (prev)=>[
                        ...prev,
                        newToast
                    ]
            }["ToastProvider.useCallback[showToast]"]);
        }
    }["ToastProvider.useCallback[showToast]"], []);
    const closeToast = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$auexch$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "ToastProvider.useCallback[closeToast]": (id)=>{
            setToasts({
                "ToastProvider.useCallback[closeToast]": (prev)=>prev.filter({
                        "ToastProvider.useCallback[closeToast]": (t)=>t.id !== id
                    }["ToastProvider.useCallback[closeToast]"])
            }["ToastProvider.useCallback[closeToast]"]);
        }
    }["ToastProvider.useCallback[closeToast]"], []);
    const clearAllToasts = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$auexch$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "ToastProvider.useCallback[clearAllToasts]": ()=>setToasts([])
    }["ToastProvider.useCallback[clearAllToasts]"], []);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$auexch$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ToastContext.Provider, {
        value: {
            showToast,
            closeToast,
            clearAllToasts,
            toasts
        },
        children: children
    }, void 0, false, {
        fileName: "[project]/Desktop/auexch/src/components/common/toast/toast-context.tsx",
        lineNumber: 46,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_s1(ToastProvider, "wUOT0OHPa48Sb8yNUp2C4Ic2fa8=");
_c = ToastProvider;
var _c;
__turbopack_context__.k.register(_c, "ToastProvider");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Desktop/auexch/src/components/common/toast/toast-container.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$auexch$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/auexch/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$auexch$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/auexch/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$auexch$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2d$dom$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/auexch/node_modules/next/dist/compiled/react-dom/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$auexch$2f$src$2f$components$2f$common$2f$toast$2f$toast$2d$context$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/auexch/src/components/common/toast/toast-context.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$auexch$2f$node_modules$2f$next$2f$dist$2f$shared$2f$lib$2f$app$2d$dynamic$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/auexch/node_modules/next/dist/shared/lib/app-dynamic.js [app-client] (ecmascript)");
;
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
// Dynamically import ToastComponent (client only)
const ToastComponent = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$auexch$2f$node_modules$2f$next$2f$dist$2f$shared$2f$lib$2f$app$2d$dynamic$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(()=>__turbopack_context__.A("[project]/Desktop/auexch/src/components/common/toast/index.tsx [app-client] (ecmascript, next/dynamic entry, async loader)"), {
    loadableGenerated: {
        modules: [
            "[project]/Desktop/auexch/src/components/common/toast/index.tsx [app-client] (ecmascript, next/dynamic entry)"
        ]
    },
    ssr: false
});
_c = ToastComponent;
const ToastContainer = ()=>{
    _s();
    const { toasts, closeToast } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$auexch$2f$src$2f$components$2f$common$2f$toast$2f$toast$2d$context$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useToast"])();
    // --- FIX #1: Only render Portal after mount ---
    const [mounted, setMounted] = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$auexch$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].useState(false);
    __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$auexch$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].useEffect({
        "ToastContainer.useEffect": ()=>{
            setMounted(true);
        }
    }["ToastContainer.useEffect"], []);
    // Avoid hydration mismatch
    if (!mounted) return null;
    return /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$auexch$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2d$dom$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createPortal(/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$auexch$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$auexch$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$auexch$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("style", {
                children: `
          @keyframes progress {
            from { width: 100%; }
            to { width: 0%; }
          }
        `
            }, void 0, false, {
                fileName: "[project]/Desktop/auexch/src/components/common/toast/toast-container.tsx",
                lineNumber: 26,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$auexch$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                id: "global-toast-container",
                style: {
                    position: "fixed",
                    top: "-5px",
                    right: "5px",
                    minWidth: "300px",
                    zIndex: 2147483647,
                    maxWidth: "400px",
                    pointerEvents: "none"
                },
                children: toasts.map((toast)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$auexch$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            pointerEvents: "auto"
                        },
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$auexch$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ToastComponent, {
                            toast: toast,
                            onClose: closeToast
                        }, void 0, false, {
                            fileName: "[project]/Desktop/auexch/src/components/common/toast/toast-container.tsx",
                            lineNumber: 49,
                            columnNumber: 13
                        }, ("TURBOPACK compile-time value", void 0))
                    }, toast.id, false, {
                        fileName: "[project]/Desktop/auexch/src/components/common/toast/toast-container.tsx",
                        lineNumber: 48,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0)))
            }, void 0, false, {
                fileName: "[project]/Desktop/auexch/src/components/common/toast/toast-container.tsx",
                lineNumber: 35,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true), document.body);
};
_s(ToastContainer, "c8ITofzUEQeI+mP8tKziSBTC+hc=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$auexch$2f$src$2f$components$2f$common$2f$toast$2f$toast$2d$context$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useToast"]
    ];
});
_c1 = ToastContainer;
const __TURBOPACK__default__export__ = ToastContainer;
var _c, _c1;
__turbopack_context__.k.register(_c, "ToastComponent");
__turbopack_context__.k.register(_c1, "ToastContainer");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=Desktop_auexch_src_38084cef._.js.map