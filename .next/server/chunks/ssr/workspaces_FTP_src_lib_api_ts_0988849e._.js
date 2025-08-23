module.exports = {

"[project]/workspaces/FTP/src/lib/api.ts [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "API_BASE": (()=>API_BASE),
    "addToCart": (()=>addToCart),
    "getJson": (()=>getJson),
    "postJson": (()=>postJson)
});
const API_BASE = '' // use relative paths; Next will proxy to backend
;
async function postJson(path, body, token) {
    const res = await fetch(`/api${path}`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            ...token ? {
                Authorization: `Bearer ${token}`
            } : {}
        },
        body: JSON.stringify(body)
    });
    return res.json();
}
async function getJson(path, token) {
    const res = await fetch(`/api${path}`, {
        headers: {
            ...token ? {
                Authorization: `Bearer ${token}`
            } : {}
        }
    });
    return res.json();
}
async function addToCart(productId, quantity = 1, name, price) {
    const token = ("TURBOPACK compile-time falsy", 0) ? ("TURBOPACK unreachable", undefined) : null;
    if ("TURBOPACK compile-time falsy", 0) {
        "TURBOPACK unreachable";
    }
    // Guest cart in localStorage
    if ("TURBOPACK compile-time falsy", 0) {
        "TURBOPACK unreachable";
    }
    return {
        ok: false
    };
}
}}),

};

//# sourceMappingURL=workspaces_FTP_src_lib_api_ts_0988849e._.js.map