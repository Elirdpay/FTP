(globalThis.TURBOPACK = globalThis.TURBOPACK || []).push([typeof document === "object" ? document.currentScript : undefined, {

"[project]/workspaces/FTP/src/lib/api.ts [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
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
    const token = ("TURBOPACK compile-time truthy", 1) ? localStorage.getItem('access_token') : ("TURBOPACK unreachable", undefined);
    if (token) {
        const res = await fetch(`/api/me/cart/add`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${token}`
            },
            body: JSON.stringify({
                product_id: String(productId),
                quantity
            })
        });
        try {
            if (res.ok) {
                // refresh server cart count and notify header
                try {
                    const r = await fetch('/api/me/cart', {
                        headers: {
                            Authorization: `Bearer ${token}`
                        }
                    });
                    if (r.ok) {
                        const j = await r.json();
                        const cnt = Array.isArray(j) ? j.reduce((s, i)=>s + (i.quantity || 0), 0) : 0;
                        try {
                            localStorage.setItem('server_cart_count', String(cnt));
                        } catch (e) {}
                        ;
                        try {
                            window.dispatchEvent(new Event('storage'));
                        } catch (e) {}
                    }
                } catch (e) {}
            }
        } catch (e) {}
        return res;
    }
    // Guest cart in localStorage
    if ("TURBOPACK compile-time truthy", 1) {
        const raw = localStorage.getItem('guest_cart') || '[]';
        let arr = [];
        try {
            arr = JSON.parse(raw);
        } catch (e) {
            arr = [];
        }
        // use provided snapshot if available, otherwise attempt to resolve product info from server
        let snapshotName = name || null;
        let snapshotPrice = price || null;
        if (!snapshotName || !snapshotPrice) {
            try {
                const r = await fetch(`/api/products/resolve?name=${encodeURIComponent(String(productId))}`);
                if (r.ok) {
                    const pj = await r.json();
                    snapshotName = snapshotName || pj.name;
                    snapshotPrice = snapshotPrice || pj.price;
                }
            } catch (e) {}
        }
        const existing = arr.find((it)=>it.product_id === String(productId));
        if (existing) existing.quantity = (existing.quantity || 1) + quantity;
        else arr.push({
            product_id: String(productId),
            quantity,
            name: snapshotName,
            price: snapshotPrice
        });
        localStorage.setItem('guest_cart', JSON.stringify(arr));
        window.dispatchEvent(new Event('storage'));
        return {
            ok: true
        };
    }
    "TURBOPACK unreachable";
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
}]);

//# sourceMappingURL=workspaces_FTP_src_lib_api_ts_22d99064._.js.map