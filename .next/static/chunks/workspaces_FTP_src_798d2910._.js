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
"[project]/workspaces/FTP/src/app/account/page.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>AccountPage)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$workspaces$2f$FTP$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/workspaces/FTP/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$workspaces$2f$FTP$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/workspaces/FTP/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$workspaces$2f$FTP$2f$src$2f$lib$2f$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/workspaces/FTP/src/lib/api.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$workspaces$2f$FTP$2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/workspaces/FTP/src/components/ui/button.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
function AccountPage() {
    _s();
    const [profile, setProfile] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$workspaces$2f$FTP$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$workspaces$2f$FTP$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "AccountPage.useEffect": ()=>{
            const token = localStorage.getItem('access_token');
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$workspaces$2f$FTP$2f$src$2f$lib$2f$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getJson"])('/me/profile', token || undefined).then(setProfile);
        }
    }["AccountPage.useEffect"], []);
    if (!profile) return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$workspaces$2f$FTP$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        "data-orchids-id": "src/app/account/page.tsx:14:23",
        "data-orchids-name": "section",
        className: "container py-12",
        children: "Loading..."
    }, void 0, false, {
        fileName: "[project]/workspaces/FTP/src/app/account/page.tsx",
        lineNumber: 14,
        columnNumber: 24
    }, this);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$workspaces$2f$FTP$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        "data-orchids-id": "src/app/account/page.tsx:17:4",
        "data-orchids-name": "section",
        className: "container py-12",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$workspaces$2f$FTP$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                "data-orchids-id": "src/app/account/page.tsx:18:6",
                "data-orchids-name": "h1",
                className: "text-3xl font-bold mb-4",
                children: "Личный кабинет"
            }, void 0, false, {
                fileName: "[project]/workspaces/FTP/src/app/account/page.tsx",
                lineNumber: 18,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$workspaces$2f$FTP$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                "data-orchids-id": "src/app/account/page.tsx:19:6",
                "data-orchids-name": "div",
                className: "p-4 border rounded max-w-md",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$workspaces$2f$FTP$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        "data-orchids-id": "src/app/account/page.tsx:20:8",
                        "data-orchids-name": "div",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$workspaces$2f$FTP$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                "data-orchids-id": "src/app/account/page.tsx:20:13",
                                "data-orchids-name": "strong",
                                children: "Email:"
                            }, void 0, false, {
                                fileName: "[project]/workspaces/FTP/src/app/account/page.tsx",
                                lineNumber: 20,
                                columnNumber: 86
                            }, this),
                            " ",
                            profile.email
                        ]
                    }, void 0, true, {
                        fileName: "[project]/workspaces/FTP/src/app/account/page.tsx",
                        lineNumber: 20,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$workspaces$2f$FTP$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        "data-orchids-id": "src/app/account/page.tsx:21:8",
                        "data-orchids-name": "div",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$workspaces$2f$FTP$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                "data-orchids-id": "src/app/account/page.tsx:21:13",
                                "data-orchids-name": "strong",
                                children: "Баланс:"
                            }, void 0, false, {
                                fileName: "[project]/workspaces/FTP/src/app/account/page.tsx",
                                lineNumber: 21,
                                columnNumber: 86
                            }, this),
                            " ",
                            profile.balance
                        ]
                    }, void 0, true, {
                        fileName: "[project]/workspaces/FTP/src/app/account/page.tsx",
                        lineNumber: 21,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$workspaces$2f$FTP$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        "data-orchids-id": "src/app/account/page.tsx:22:8",
                        "data-orchids-name": "div",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$workspaces$2f$FTP$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                "data-orchids-id": "src/app/account/page.tsx:22:13",
                                "data-orchids-name": "strong",
                                children: "Текущая корзина:"
                            }, void 0, false, {
                                fileName: "[project]/workspaces/FTP/src/app/account/page.tsx",
                                lineNumber: 22,
                                columnNumber: 86
                            }, this),
                            " ",
                            profile.cart_id || 'нет'
                        ]
                    }, void 0, true, {
                        fileName: "[project]/workspaces/FTP/src/app/account/page.tsx",
                        lineNumber: 22,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/workspaces/FTP/src/app/account/page.tsx",
                lineNumber: 19,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$workspaces$2f$FTP$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                "data-orchids-id": "src/app/account/page.tsx:24:6",
                "data-orchids-name": "div",
                className: "mt-6",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$workspaces$2f$FTP$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$workspaces$2f$FTP$2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                    "data-orchids-id": "src/app/account/page.tsx:25:8",
                    "data-orchids-name": "Button",
                    onClick: ()=>{
                        localStorage.removeItem('access_token');
                        location.href = '/';
                    },
                    children: "Выйти"
                }, void 0, false, {
                    fileName: "[project]/workspaces/FTP/src/app/account/page.tsx",
                    lineNumber: 25,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/workspaces/FTP/src/app/account/page.tsx",
                lineNumber: 24,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/workspaces/FTP/src/app/account/page.tsx",
        lineNumber: 17,
        columnNumber: 5
    }, this);
}
_s(AccountPage, "ANwzos52wNXGupoJVH1cRI1qCto=");
_c = AccountPage;
var _c;
__turbopack_context__.k.register(_c, "AccountPage");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
}]);

//# sourceMappingURL=workspaces_FTP_src_798d2910._.js.map