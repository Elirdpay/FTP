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
var __TURBOPACK__imported__module__$5b$project$5d2f$workspaces$2f$FTP$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/workspaces/FTP/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
const API_BASE = __TURBOPACK__imported__module__$5b$project$5d2f$workspaces$2f$FTP$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].env.NEXT_PUBLIC_API_BASE || "http://localhost:8000";
async function postJson(path, body, token) {
    const res = await fetch(`${API_BASE}${path}`, {
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
    const res = await fetch(`${API_BASE}${path}`, {
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
        const res = await fetch(`${API_BASE}/me/cart/add`, {
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
                const r = await fetch(`${API_BASE}/products/resolve?name=${encodeURIComponent(String(productId))}`);
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
"[project]/workspaces/FTP/src/lib/utils.ts [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "cn": (()=>cn)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$workspaces$2f$FTP$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/workspaces/FTP/node_modules/clsx/dist/clsx.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$workspaces$2f$FTP$2f$node_modules$2f$tailwind$2d$merge$2f$dist$2f$bundle$2d$mjs$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/workspaces/FTP/node_modules/tailwind-merge/dist/bundle-mjs.mjs [app-client] (ecmascript)");
;
;
function cn(...inputs) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$workspaces$2f$FTP$2f$node_modules$2f$tailwind$2d$merge$2f$dist$2f$bundle$2d$mjs$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["twMerge"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$workspaces$2f$FTP$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["clsx"])(inputs));
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/workspaces/FTP/src/components/ui/button.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "Button": (()=>Button),
    "buttonVariants": (()=>buttonVariants)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$workspaces$2f$FTP$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/workspaces/FTP/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$workspaces$2f$FTP$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$slot$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/workspaces/FTP/node_modules/@radix-ui/react-slot/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$workspaces$2f$FTP$2f$node_modules$2f$class$2d$variance$2d$authority$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/workspaces/FTP/node_modules/class-variance-authority/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$workspaces$2f$FTP$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/workspaces/FTP/src/lib/utils.ts [app-client] (ecmascript)");
;
;
;
;
const buttonVariants = (0, __TURBOPACK__imported__module__$5b$project$5d2f$workspaces$2f$FTP$2f$node_modules$2f$class$2d$variance$2d$authority$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cva"])("inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive", {
    variants: {
        variant: {
            default: "bg-primary text-primary-foreground shadow-xs hover:bg-primary/90 transform-gpu hover:-translate-y-0.5",
            destructive: "bg-destructive text-white shadow-xs hover:bg-destructive/90 focus-visible:ring-destructive/20 dark:focus-visible:ring-destructive/40 dark:bg-destructive/60",
            outline: "border bg-background shadow-xs hover:bg-accent hover:text-accent-foreground dark:bg-input/30 dark:border-input dark:hover:bg-input/50",
            secondary: "bg-secondary text-secondary-foreground shadow-xs hover:bg-secondary/80",
            ghost: "hover:bg-accent hover:text-accent-foreground dark:hover:bg-accent/50",
            link: "text-primary underline-offset-4 hover:underline"
        },
        size: {
            default: "h-9 px-4 py-2 has-[>svg]:px-3",
            sm: "h-8 rounded-md gap-1.5 px-3 has-[>svg]:px-2.5",
            lg: "h-10 rounded-md px-6 has-[>svg]:px-4",
            icon: "size-9"
        }
    },
    defaultVariants: {
        variant: "default",
        size: "default"
    }
});
function Button({ className, variant, size, asChild = false, ...props }) {
    const Comp = asChild ? __TURBOPACK__imported__module__$5b$project$5d2f$workspaces$2f$FTP$2f$node_modules$2f40$radix$2d$ui$2f$react$2d$slot$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Slot"] : "button";
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$workspaces$2f$FTP$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Comp, {
        "data-orchids-id": "src/components/ui/button.tsx:51:4",
        "data-orchids-name": "Comp",
        "data-slot": "button",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$workspaces$2f$FTP$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])(buttonVariants({
            variant,
            size,
            className
        })),
        ...props
    }, void 0, false, {
        fileName: "[project]/workspaces/FTP/src/components/ui/button.tsx",
        lineNumber: 51,
        columnNumber: 5
    }, this);
}
_c = Button;
;
var _c;
__turbopack_context__.k.register(_c, "Button");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/workspaces/FTP/src/app/cart/page.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>CartPage)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$workspaces$2f$FTP$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/workspaces/FTP/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$workspaces$2f$FTP$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/workspaces/FTP/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$workspaces$2f$FTP$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/workspaces/FTP/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$workspaces$2f$FTP$2f$src$2f$lib$2f$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/workspaces/FTP/src/lib/api.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$workspaces$2f$FTP$2f$node_modules$2f$next$2f$dist$2f$shared$2f$lib$2f$app$2d$dynamic$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/workspaces/FTP/node_modules/next/dist/shared/lib/app-dynamic.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$workspaces$2f$FTP$2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/workspaces/FTP/src/components/ui/button.tsx [app-client] (ecmascript)");
;
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
const CheckoutModal = (0, __TURBOPACK__imported__module__$5b$project$5d2f$workspaces$2f$FTP$2f$node_modules$2f$next$2f$dist$2f$shared$2f$lib$2f$app$2d$dynamic$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(()=>__turbopack_context__.r("[project]/workspaces/FTP/src/components/cart/checkout-modal.tsx [app-client] (ecmascript, next/dynamic entry, async loader)")(__turbopack_context__.i), {
    loadableGenerated: {
        modules: [
            "[project]/workspaces/FTP/src/components/cart/checkout-modal.tsx [app-client] (ecmascript, next/dynamic entry)"
        ]
    },
    ssr: false
});
_c = CheckoutModal;
;
function CartPage() {
    _s();
    const [items, setItems] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$workspaces$2f$FTP$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [loading, setLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$workspaces$2f$FTP$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [show, setShow] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$workspaces$2f$FTP$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const load = async ()=>{
        const token = localStorage.getItem('access_token');
        let data = [];
        if (token) data = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$workspaces$2f$FTP$2f$src$2f$lib$2f$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getJson"])('/me/cart', token);
        else {
            try {
                data = JSON.parse(localStorage.getItem('guest_cart') || '[]');
            } catch (e) {
                data = [];
            }
            // guest_cart may contain snapshot { product_id, quantity, name, price }
            const base = __TURBOPACK__imported__module__$5b$project$5d2f$workspaces$2f$FTP$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].env.NEXT_PUBLIC_API_BASE || 'http://localhost:8000';
            // try to resolve missing name/price via server
            data = await Promise.all(data.map(async (it)=>{
                const out = {
                    product_id: it.product_id,
                    name: it.name || it.product_id,
                    price: it.price || 0,
                    quantity: it.quantity
                };
                if (!out.price || out.price === 0) {
                    // try resolve by product_id
                    try {
                        let resp = await fetch(base + `/products/resolve?name=${encodeURIComponent(it.product_id)}`);
                        if (resp.ok) {
                            const pj = await resp.json();
                            out.name = pj.name || out.name;
                            out.price = pj.price || out.price;
                        }
                        // fallback: try using stored name
                        if ((!out.price || out.price === 0) && it.name) {
                            resp = await fetch(base + `/products/resolve?name=${encodeURIComponent(it.name)}`);
                            if (resp.ok) {
                                const pj = await resp.json();
                                out.name = pj.name || out.name;
                                out.price = pj.price || out.price;
                            }
                        }
                        // fallback: replace underscores with dashes and try last token
                        if ((!out.price || out.price === 0) && typeof it.product_id === 'string') {
                            const alt = it.product_id.replace(/_/g, '-');
                            resp = await fetch(base + `/products/resolve?name=${encodeURIComponent(alt)}`);
                            if (resp.ok) {
                                const pj = await resp.json();
                                out.name = pj.name || out.name;
                                out.price = pj.price || out.price;
                            }
                            if (!out.price || out.price === 0) {
                                const parts = it.product_id.split('-');
                                if (parts.length) {
                                    const last = parts[parts.length - 1];
                                    resp = await fetch(base + `/products/resolve?name=${encodeURIComponent(last)}`);
                                    if (resp.ok) {
                                        const pj = await resp.json();
                                        out.name = pj.name || out.name;
                                        out.price = pj.price || out.price;
                                    }
                                }
                            }
                        }
                    } catch (e) {}
                }
                // debug
                try {
                    console.debug('cart item resolved', out);
                } catch (e) {}
                return out;
            }));
        }
        setItems(data);
    };
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$workspaces$2f$FTP$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "CartPage.useEffect": ()=>{
            load();
        }
    }["CartPage.useEffect"], []);
    async function changeQty(pid, delta) {
        // for guest cart
        const token = localStorage.getItem('access_token');
        if (!token) {
            const raw = localStorage.getItem('guest_cart') || '[]';
            let arr = [];
            try {
                arr = JSON.parse(raw);
            } catch (e) {
                arr = [];
            }
            const it = arr.find((x)=>x.product_id == pid);
            if (it) {
                it.quantity = Math.max(1, (it.quantity || 1) + delta);
                localStorage.setItem('guest_cart', JSON.stringify(arr));
                window.dispatchEvent(new Event('storage'));
                load();
            }
            return;
        }
        // call API to update quantity
        const apiBase = __TURBOPACK__imported__module__$5b$project$5d2f$workspaces$2f$FTP$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].env.NEXT_PUBLIC_API_BASE || 'http://localhost:8000';
        // find current quantity
        const resp = await fetch(apiBase + `/me/cart`, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        });
        if (!resp.ok) return;
        const items = await resp.json();
        const it = items.find((x)=>String(x.product_id) === String(pid));
        const current = it ? it.quantity || 1 : 1;
        const newQ = Math.max(0, current + delta);
        const r = await fetch(apiBase + '/me/cart/update', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${token}`
            },
            body: JSON.stringify({
                product_id: pid,
                quantity: newQ
            })
        });
        const toast = (await __turbopack_context__.r("[project]/workspaces/FTP/src/lib/toast.ts [app-client] (ecmascript, async loader)")(__turbopack_context__.i)).toast;
        if (!r.ok) toast('Ошибка обновления количества');
        else toast('Количество обновлено');
        load();
    }
    async function removeItem(pid) {
        const token = localStorage.getItem('access_token');
        if (!token) {
            const raw = localStorage.getItem('guest_cart') || '[]';
            let arr = [];
            try {
                arr = JSON.parse(raw);
            } catch (e) {
                arr = [];
            }
            arr = arr.filter((x)=>x.product_id != pid);
            localStorage.setItem('guest_cart', JSON.stringify(arr));
            window.dispatchEvent(new Event('storage'));
            load();
            return;
        }
        await fetch((__TURBOPACK__imported__module__$5b$project$5d2f$workspaces$2f$FTP$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].env.NEXT_PUBLIC_API_BASE || 'http://localhost:8000') + `/me/cart/remove?product_id=${encodeURIComponent(pid)}`, {
            method: 'POST',
            headers: {
                Authorization: `Bearer ${token}`
            }
        });
        load();
    }
    const subtotal = items.reduce((s, it)=>s + (it.price || 0) * (it.quantity || 1), 0);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$workspaces$2f$FTP$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        "data-orchids-id": "src/app/cart/page.tsx:106:4",
        "data-orchids-name": "section",
        className: "container py-12",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$workspaces$2f$FTP$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                "data-orchids-id": "src/app/cart/page.tsx:107:6",
                "data-orchids-name": "div",
                className: "flex items-center justify-between mb-6",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$workspaces$2f$FTP$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        "data-orchids-id": "src/app/cart/page.tsx:108:8",
                        "data-orchids-name": "div",
                        className: "flex items-center gap-3",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$workspaces$2f$FTP$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$workspaces$2f$FTP$2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                "data-orchids-id": "src/app/cart/page.tsx:109:10",
                                "data-orchids-name": "Button",
                                variant: "outline",
                                size: "sm",
                                onClick: ()=>location.href = '/',
                                children: "← Вернуться к покупкам"
                            }, void 0, false, {
                                fileName: "[project]/workspaces/FTP/src/app/cart/page.tsx",
                                lineNumber: 109,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$workspaces$2f$FTP$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                "data-orchids-id": "src/app/cart/page.tsx:110:10",
                                "data-orchids-name": "h1",
                                className: "text-3xl font-bold",
                                children: "Корзина"
                            }, void 0, false, {
                                fileName: "[project]/workspaces/FTP/src/app/cart/page.tsx",
                                lineNumber: 110,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/workspaces/FTP/src/app/cart/page.tsx",
                        lineNumber: 108,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$workspaces$2f$FTP$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        "data-orchids-id": "src/app/cart/page.tsx:112:8",
                        "data-orchids-name": "div",
                        className: "text-sm text-muted-foreground",
                        children: [
                            "Товаров: ",
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$workspaces$2f$FTP$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                "data-orchids-id": "src/app/cart/page.tsx:112:64",
                                "data-orchids-name": "span",
                                className: "font-semibold",
                                children: items.reduce((s, i)=>s + (i.quantity || 0), 0)
                            }, void 0, false, {
                                fileName: "[project]/workspaces/FTP/src/app/cart/page.tsx",
                                lineNumber: 112,
                                columnNumber: 135
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/workspaces/FTP/src/app/cart/page.tsx",
                        lineNumber: 112,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/workspaces/FTP/src/app/cart/page.tsx",
                lineNumber: 107,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$workspaces$2f$FTP$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                "data-orchids-id": "src/app/cart/page.tsx:114:6",
                "data-orchids-name": "div",
                className: "grid grid-cols-1 lg:grid-cols-3 gap-8",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$workspaces$2f$FTP$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        "data-orchids-id": "src/app/cart/page.tsx:115:8",
                        "data-orchids-name": "div",
                        className: "lg:col-span-2 space-y-6",
                        children: [
                            items.length === 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$workspaces$2f$FTP$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                "data-orchids-id": "src/app/cart/page.tsx:117:12",
                                "data-orchids-name": "div",
                                className: "p-12 border rounded-lg text-center text-muted-foreground",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$workspaces$2f$FTP$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        "data-orchids-id": "src/app/cart/page.tsx:118:14",
                                        "data-orchids-name": "div",
                                        className: "text-2xl font-bold mb-2",
                                        children: "Ваша корзина пуста"
                                    }, void 0, false, {
                                        fileName: "[project]/workspaces/FTP/src/app/cart/page.tsx",
                                        lineNumber: 118,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$workspaces$2f$FTP$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        "data-orchids-id": "src/app/cart/page.tsx:119:14",
                                        "data-orchids-name": "div",
                                        className: "text-sm",
                                        children: "Добавьте товары из каталога — мы сохраним их для вас."
                                    }, void 0, false, {
                                        fileName: "[project]/workspaces/FTP/src/app/cart/page.tsx",
                                        lineNumber: 119,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/workspaces/FTP/src/app/cart/page.tsx",
                                lineNumber: 117,
                                columnNumber: 13
                            }, this),
                            items.map((it)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$workspaces$2f$FTP$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    "data-orchids-id": "src/app/cart/page.tsx:124:12@items",
                                    "data-orchids-name": "div",
                                    className: "p-4 border rounded-2xl flex gap-4 items-center shadow-sm bg-card",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$workspaces$2f$FTP$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            "data-orchids-id": "src/app/cart/page.tsx:125:14@items",
                                            "data-orchids-name": "div",
                                            className: "w-24 h-24 bg-muted rounded-lg flex items-center justify-center text-2xl font-bold text-primary-foreground overflow-hidden",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$workspaces$2f$FTP$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                "data-orchids-id": "src/app/cart/page.tsx:127:16@items",
                                                "data-orchids-name": "div",
                                                className: "w-full h-full flex items-center justify-center text-2xl",
                                                children: (it.name || '✦')[0]
                                            }, void 0, false, {
                                                fileName: "[project]/workspaces/FTP/src/app/cart/page.tsx",
                                                lineNumber: 127,
                                                columnNumber: 17
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/workspaces/FTP/src/app/cart/page.tsx",
                                            lineNumber: 125,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$workspaces$2f$FTP$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            "data-orchids-id": "src/app/cart/page.tsx:130:14@items",
                                            "data-orchids-name": "div",
                                            className: "flex-1 min-w-0",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$workspaces$2f$FTP$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    "data-orchids-id": "src/app/cart/page.tsx:131:16@items",
                                                    "data-orchids-name": "div",
                                                    className: "flex items-center justify-between",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$workspaces$2f$FTP$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            "data-orchids-id": "src/app/cart/page.tsx:132:18@items",
                                                            "data-orchids-name": "div",
                                                            className: "font-semibold text-lg truncate",
                                                            children: it.name
                                                        }, void 0, false, {
                                                            fileName: "[project]/workspaces/FTP/src/app/cart/page.tsx",
                                                            lineNumber: 132,
                                                            columnNumber: 19
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$workspaces$2f$FTP$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            "data-orchids-id": "src/app/cart/page.tsx:133:18@items",
                                                            "data-orchids-name": "div",
                                                            className: "text-lg font-bold text-brand",
                                                            children: [
                                                                new Intl.NumberFormat('ru-RU').format(it.price || 0),
                                                                " ₽"
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/workspaces/FTP/src/app/cart/page.tsx",
                                                            lineNumber: 133,
                                                            columnNumber: 19
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/workspaces/FTP/src/app/cart/page.tsx",
                                                    lineNumber: 131,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$workspaces$2f$FTP$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    "data-orchids-id": "src/app/cart/page.tsx:135:16@items",
                                                    "data-orchids-name": "div",
                                                    className: "text-sm text-muted-foreground mt-1",
                                                    children: [
                                                        it.quantity,
                                                        " × ",
                                                        new Intl.NumberFormat('ru-RU').format(it.price || 0),
                                                        " ₽"
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/workspaces/FTP/src/app/cart/page.tsx",
                                                    lineNumber: 135,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/workspaces/FTP/src/app/cart/page.tsx",
                                            lineNumber: 130,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$workspaces$2f$FTP$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            "data-orchids-id": "src/app/cart/page.tsx:138:14@items",
                                            "data-orchids-name": "div",
                                            className: "flex flex-col items-end gap-2",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$workspaces$2f$FTP$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    "data-orchids-id": "src/app/cart/page.tsx:139:16@items",
                                                    "data-orchids-name": "div",
                                                    className: "flex items-center gap-2",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$workspaces$2f$FTP$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                            "data-orchids-id": "src/app/cart/page.tsx:140:18@items",
                                                            "data-orchids-name": "button",
                                                            "aria-label": "decrease",
                                                            className: "px-3 py-1 border rounded",
                                                            onClick: ()=>changeQty(it.product_id, -1),
                                                            children: "-"
                                                        }, void 0, false, {
                                                            fileName: "[project]/workspaces/FTP/src/app/cart/page.tsx",
                                                            lineNumber: 140,
                                                            columnNumber: 19
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$workspaces$2f$FTP$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            "data-orchids-id": "src/app/cart/page.tsx:141:18@items",
                                                            "data-orchids-name": "div",
                                                            className: "px-3 py-1 border rounded bg-muted",
                                                            children: it.quantity
                                                        }, void 0, false, {
                                                            fileName: "[project]/workspaces/FTP/src/app/cart/page.tsx",
                                                            lineNumber: 141,
                                                            columnNumber: 19
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$workspaces$2f$FTP$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                            "data-orchids-id": "src/app/cart/page.tsx:142:18@items",
                                                            "data-orchids-name": "button",
                                                            "aria-label": "increase",
                                                            className: "px-3 py-1 border rounded",
                                                            onClick: ()=>changeQty(it.product_id, +1),
                                                            children: "+"
                                                        }, void 0, false, {
                                                            fileName: "[project]/workspaces/FTP/src/app/cart/page.tsx",
                                                            lineNumber: 142,
                                                            columnNumber: 19
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/workspaces/FTP/src/app/cart/page.tsx",
                                                    lineNumber: 139,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$workspaces$2f$FTP$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                    "data-orchids-id": "src/app/cart/page.tsx:144:16@items",
                                                    "data-orchids-name": "button",
                                                    className: "text-sm text-destructive hover:underline",
                                                    onClick: ()=>removeItem(it.product_id),
                                                    children: "Удалить"
                                                }, void 0, false, {
                                                    fileName: "[project]/workspaces/FTP/src/app/cart/page.tsx",
                                                    lineNumber: 144,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/workspaces/FTP/src/app/cart/page.tsx",
                                            lineNumber: 138,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, it.product_id, true, {
                                    fileName: "[project]/workspaces/FTP/src/app/cart/page.tsx",
                                    lineNumber: 124,
                                    columnNumber: 13
                                }, this))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/workspaces/FTP/src/app/cart/page.tsx",
                        lineNumber: 115,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$workspaces$2f$FTP$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("aside", {
                        "data-orchids-id": "src/app/cart/page.tsx:150:8",
                        "data-orchids-name": "aside",
                        className: "p-6 border rounded-2xl bg-card shadow-md",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$workspaces$2f$FTP$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                "data-orchids-id": "src/app/cart/page.tsx:151:10",
                                "data-orchids-name": "div",
                                className: "text-muted-foreground",
                                children: "Итого"
                            }, void 0, false, {
                                fileName: "[project]/workspaces/FTP/src/app/cart/page.tsx",
                                lineNumber: 151,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$workspaces$2f$FTP$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                "data-orchids-id": "src/app/cart/page.tsx:152:10",
                                "data-orchids-name": "div",
                                className: "text-3xl font-extrabold mt-2 text-card-foreground",
                                children: [
                                    new Intl.NumberFormat('ru-RU').format(subtotal),
                                    " ₽"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/workspaces/FTP/src/app/cart/page.tsx",
                                lineNumber: 152,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$workspaces$2f$FTP$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                "data-orchids-id": "src/app/cart/page.tsx:153:10",
                                "data-orchids-name": "div",
                                className: "text-sm text-muted-foreground mt-2",
                                children: "Баланс будет списан при подтверждении заказа"
                            }, void 0, false, {
                                fileName: "[project]/workspaces/FTP/src/app/cart/page.tsx",
                                lineNumber: 153,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$workspaces$2f$FTP$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                "data-orchids-id": "src/app/cart/page.tsx:154:12",
                                "data-orchids-name": "div",
                                className: "mt-6 flex flex-col gap-3",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$workspaces$2f$FTP$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$workspaces$2f$FTP$2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                        "data-orchids-id": "src/app/cart/page.tsx:155:12",
                                        "data-orchids-name": "Button",
                                        onClick: ()=>setShow(true),
                                        className: "w-full",
                                        children: "Перейти к оплате"
                                    }, void 0, false, {
                                        fileName: "[project]/workspaces/FTP/src/app/cart/page.tsx",
                                        lineNumber: 155,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$workspaces$2f$FTP$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$workspaces$2f$FTP$2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                        "data-orchids-id": "src/app/cart/page.tsx:156:12",
                                        "data-orchids-name": "Button",
                                        variant: "default",
                                        onClick: ()=>{
                                            localStorage.removeItem('guest_cart');
                                            window.dispatchEvent(new Event('storage'));
                                            load();
                                        },
                                        className: "w-full",
                                        children: "Очистить корзину"
                                    }, void 0, false, {
                                        fileName: "[project]/workspaces/FTP/src/app/cart/page.tsx",
                                        lineNumber: 156,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/workspaces/FTP/src/app/cart/page.tsx",
                                lineNumber: 154,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/workspaces/FTP/src/app/cart/page.tsx",
                        lineNumber: 150,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/workspaces/FTP/src/app/cart/page.tsx",
                lineNumber: 114,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$workspaces$2f$FTP$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(CheckoutModal, {
                "data-orchids-id": "src/app/cart/page.tsx:160:6@subtotal",
                "data-orchids-name": "CheckoutModal",
                open: show,
                onClose: ()=>setShow(false),
                subtotal: subtotal
            }, void 0, false, {
                fileName: "[project]/workspaces/FTP/src/app/cart/page.tsx",
                lineNumber: 160,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/workspaces/FTP/src/app/cart/page.tsx",
        lineNumber: 106,
        columnNumber: 5
    }, this);
}
_s(CartPage, "yVkGUXL+2wG6kb/T7pHmaxMT1i4=");
_c1 = CartPage;
var _c, _c1;
__turbopack_context__.k.register(_c, "CheckoutModal");
__turbopack_context__.k.register(_c1, "CartPage");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
}]);

//# sourceMappingURL=workspaces_FTP_src_7a0177ee._.js.map