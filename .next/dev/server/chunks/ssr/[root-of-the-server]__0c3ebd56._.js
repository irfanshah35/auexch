module.exports = [
"[externals]/next/dist/compiled/next-server/app-page-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/app-page-turbo.runtime.dev.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js", () => require("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/action-async-storage.external.js [external] (next/dist/server/app-render/action-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/action-async-storage.external.js", () => require("next/dist/server/app-render/action-async-storage.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/work-unit-async-storage.external.js [external] (next/dist/server/app-render/work-unit-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/work-unit-async-storage.external.js", () => require("next/dist/server/app-render/work-unit-async-storage.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/work-async-storage.external.js [external] (next/dist/server/app-render/work-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/work-async-storage.external.js", () => require("next/dist/server/app-render/work-async-storage.external.js"));

module.exports = mod;
}),
"[project]/Desktop/auexch/src/lib/store/store.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/* eslint-disable @typescript-eslint/no-explicit-any */ __turbopack_context__.s([
    "useAppStore",
    ()=>useAppStore
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$auexch$2f$node_modules$2f$zustand$2f$esm$2f$react$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/auexch/node_modules/zustand/esm/react.mjs [app-ssr] (ecmascript)");
;
const useAppStore = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$auexch$2f$node_modules$2f$zustand$2f$esm$2f$react$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["create"])((set)=>({
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
}),
"[externals]/util [external] (util, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("util", () => require("util"));

module.exports = mod;
}),
"[externals]/stream [external] (stream, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("stream", () => require("stream"));

module.exports = mod;
}),
"[externals]/path [external] (path, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("path", () => require("path"));

module.exports = mod;
}),
"[externals]/http [external] (http, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("http", () => require("http"));

module.exports = mod;
}),
"[externals]/https [external] (https, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("https", () => require("https"));

module.exports = mod;
}),
"[externals]/url [external] (url, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("url", () => require("url"));

module.exports = mod;
}),
"[externals]/fs [external] (fs, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("fs", () => require("fs"));

module.exports = mod;
}),
"[externals]/crypto [external] (crypto, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("crypto", () => require("crypto"));

module.exports = mod;
}),
"[externals]/http2 [external] (http2, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("http2", () => require("http2"));

module.exports = mod;
}),
"[externals]/assert [external] (assert, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("assert", () => require("assert"));

module.exports = mod;
}),
"[externals]/tty [external] (tty, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("tty", () => require("tty"));

module.exports = mod;
}),
"[externals]/os [external] (os, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("os", () => require("os"));

module.exports = mod;
}),
"[externals]/zlib [external] (zlib, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("zlib", () => require("zlib"));

module.exports = mod;
}),
"[externals]/events [external] (events, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("events", () => require("events"));

module.exports = mod;
}),
"[project]/Desktop/auexch/src/lib/config.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
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
}),
"[project]/Desktop/auexch/src/lib/axios-instance.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "http",
    ()=>http
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$auexch$2f$node_modules$2f$axios$2f$lib$2f$axios$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/auexch/node_modules/axios/lib/axios.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$auexch$2f$src$2f$lib$2f$config$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/auexch/src/lib/config.ts [app-ssr] (ecmascript)");
;
;
const http = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$auexch$2f$node_modules$2f$axios$2f$lib$2f$axios$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].create({
    baseURL: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$auexch$2f$src$2f$lib$2f$config$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["BASE_URL"],
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
    if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
    ;
    return config;
}, (error)=>{
    return Promise.reject(error);
});
}),
"[project]/Desktop/auexch/src/lib/crypto-service.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// lib/cryptoService.ts
__turbopack_context__.s([
    "CryptoService",
    ()=>CryptoService
]);
const SECRET_PASS = "9f2d3b7c4a6e8f0b-1c2d3e4f5a6b7c8d-9e0f1a2b3c4d5e6f7-a8b9c0d1e2f3a4";
// Optional: second password (you had PASS in original)
const PASS = SECRET_PASS;
const enc = (str)=>new TextEncoder().encode(str);
const dec = (buf)=>new TextDecoder().decode(buf);
const b64 = (a)=>Buffer.from(a instanceof Uint8Array ? a : new Uint8Array(a)).toString("base64");
const ub64 = (s)=>new Uint8Array(Buffer.from(s, "base64"));
const subtle = ()=>{
    if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
    ;
    return globalThis.crypto.subtle;
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
}),
"[project]/Desktop/auexch/src/lib/index-db.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "getData",
    ()=>getData,
    "initDB",
    ()=>initDB,
    "saveData",
    ()=>saveData
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$auexch$2f$node_modules$2f$idb$2f$build$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/auexch/node_modules/idb/build/index.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$auexch$2f$src$2f$lib$2f$config$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/auexch/src/lib/config.ts [app-ssr] (ecmascript)");
;
;
const dbName = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$auexch$2f$src$2f$lib$2f$config$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CONFIG"].SiteName;
const storeName = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$auexch$2f$src$2f$lib$2f$config$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CONFIG"].SiteName;
const initDB = async ()=>{
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$auexch$2f$node_modules$2f$idb$2f$build$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["openDB"])(dbName, 1, {
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
}),
"[project]/Desktop/auexch/src/lib/functions.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
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
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$auexch$2f$src$2f$lib$2f$axios$2d$instance$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/auexch/src/lib/axios-instance.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$auexch$2f$src$2f$lib$2f$crypto$2d$service$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/auexch/src/lib/crypto-service.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$auexch$2f$src$2f$lib$2f$index$2d$db$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/auexch/src/lib/index-db.ts [app-ssr] (ecmascript)");
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
        const cached = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$auexch$2f$src$2f$lib$2f$index$2d$db$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getData"])(cachedKey);
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
        const response = await __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$auexch$2f$src$2f$lib$2f$axios$2d$instance$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["http"].post(url, payload);
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
            await (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$auexch$2f$src$2f$lib$2f$index$2d$db$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["saveData"])(cachedKey, apiData);
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
        const encrypted = await __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$auexch$2f$src$2f$lib$2f$crypto$2d$service$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CryptoService"].encryptJSON1(reqBody);
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
        const result = await __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$auexch$2f$src$2f$lib$2f$crypto$2d$service$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CryptoService"].decryptApiResponse(encryptedResponse);
        if (result?.meta?.status_code === 200) {
            // Save tokens
            if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
            ;
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
            const decryptedErr = await __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$auexch$2f$src$2f$lib$2f$crypto$2d$service$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CryptoService"].decryptApiResponse(err?.response?.data);
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
}),
"[project]/Desktop/auexch/src/lib/store/authStore.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useAuthStore",
    ()=>useAuthStore
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$auexch$2f$node_modules$2f$zustand$2f$esm$2f$react$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/auexch/node_modules/zustand/esm/react.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$auexch$2f$src$2f$lib$2f$functions$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/auexch/src/lib/functions.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$auexch$2f$src$2f$lib$2f$config$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/auexch/src/lib/config.ts [app-ssr] (ecmascript)");
;
;
;
const useAuthStore = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$auexch$2f$node_modules$2f$zustand$2f$esm$2f$react$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["create"])((set, get)=>({
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
            const result = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$auexch$2f$src$2f$lib$2f$functions$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["loginRequest"])({
                url: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$auexch$2f$src$2f$lib$2f$config$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CONFIG"].userLogin,
                username,
                password,
                setState: set
            });
            // ---- Toast
            if (showToast) {
                if (typeof result?.meta?.message === "string") {
                    const msg = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$auexch$2f$src$2f$lib$2f$functions$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["splitMsg"])(result.meta.message);
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
            if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
            ;
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
}),
"[project]/Desktop/auexch/src/app/responsive-layout.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>ResponsiveLayout
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$auexch$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/auexch/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$auexch$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/auexch/node_modules/next/navigation.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$auexch$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/auexch/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$auexch$2f$src$2f$lib$2f$store$2f$store$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/auexch/src/lib/store/store.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$auexch$2f$src$2f$lib$2f$store$2f$authStore$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/auexch/src/lib/store/authStore.ts [app-ssr] (ecmascript)");
"use client";
;
;
;
;
;
function ResponsiveLayout({ children }) {
    const { setCasinoEvents, setAllEventsList, setExchangeTypeList, setMenuList, setExchangeNews, setUserBalance, setStakeValue } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$auexch$2f$src$2f$lib$2f$store$2f$store$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useAppStore"])();
    const pathname = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$auexch$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["usePathname"])();
    const [isMobile, setIsMobile] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$auexch$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [isReady, setIsReady] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$auexch$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const { checkLogin, isLoggedIn } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$auexch$2f$src$2f$lib$2f$store$2f$authStore$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useAuthStore"])();
    // device breakpoint detection
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$auexch$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const handleResize = ()=>{
            setIsMobile(window.innerWidth < 992);
            setIsReady(true);
        };
        handleResize();
        window.addEventListener("resize", handleResize);
        return ()=>window.removeEventListener("resize", handleResize);
    }, []);
    // Prevent blank white page before DOM mount
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
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$auexch$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$auexch$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
        children: isMobile ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$auexch$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "relative w-full h-screen overflow-y-auto",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$auexch$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "overflow-y-auto",
                children: children
            }, void 0, false, {
                fileName: "[project]/Desktop/auexch/src/app/responsive-layout.tsx",
                lineNumber: 71,
                columnNumber: 11
            }, this)
        }, void 0, false, {
            fileName: "[project]/Desktop/auexch/src/app/responsive-layout.tsx",
            lineNumber: 68,
            columnNumber: 9
        }, this) : /* ---------------- DESKTOP VIEW ---------------- */ /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$auexch$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "relative w-full h-screen overflow-hidden",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$auexch$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("marque", {}, void 0, false, {
                    fileName: "[project]/Desktop/auexch/src/app/responsive-layout.tsx",
                    lineNumber: 83,
                    columnNumber: 11
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$auexch$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex h-full",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$auexch$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
                        className: "",
                        children: [
                            children,
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$auexch$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "h-[30]"
                            }, void 0, false, {
                                fileName: "[project]/Desktop/auexch/src/app/responsive-layout.tsx",
                                lineNumber: 88,
                                columnNumber: 15
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Desktop/auexch/src/app/responsive-layout.tsx",
                        lineNumber: 86,
                        columnNumber: 13
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/Desktop/auexch/src/app/responsive-layout.tsx",
                    lineNumber: 84,
                    columnNumber: 11
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/Desktop/auexch/src/app/responsive-layout.tsx",
            lineNumber: 80,
            columnNumber: 9
        }, this)
    }, void 0, false);
}
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__0c3ebd56._.js.map