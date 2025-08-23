(globalThis.TURBOPACK = globalThis.TURBOPACK || []).push([typeof document === "object" ? document.currentScript : undefined, {

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
"[project]/workspaces/FTP/src/app/checkout/form/page.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>CheckoutForm)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$workspaces$2f$FTP$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/workspaces/FTP/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$workspaces$2f$FTP$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/workspaces/FTP/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$workspaces$2f$FTP$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/workspaces/FTP/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$workspaces$2f$FTP$2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/workspaces/FTP/src/components/ui/button.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
function CheckoutForm() {
    _s();
    const [name, setName] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$workspaces$2f$FTP$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    const [address, setAddress] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$workspaces$2f$FTP$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    const [server, setServer] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$workspaces$2f$FTP$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('Asia');
    const [loading, setLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$workspaces$2f$FTP$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [subtotal, setSubtotal] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$workspaces$2f$FTP$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    async function pay(e) {
        e.preventDefault();
        setLoading(true);
        const token = localStorage.getItem('access_token');
        const res = await fetch((__TURBOPACK__imported__module__$5b$project$5d2f$workspaces$2f$FTP$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].env.NEXT_PUBLIC_API_BASE || 'http://localhost:8000') + '/me/checkout', {
            method: 'POST',
            headers: {
                Authorization: `Bearer ${token}`,
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                server,
                uid: address,
                nickname: name
            })
        });
        setLoading(false);
        if (!res.ok) {
            const toast = (await __turbopack_context__.r("[project]/workspaces/FTP/src/lib/toast.ts [app-client] (ecmascript, async loader)")(__turbopack_context__.i)).toast;
            toast('Ошибка оплаты');
            return;
        }
        const j = await res.json();
        const toast = (await __turbopack_context__.r("[project]/workspaces/FTP/src/lib/toast.ts [app-client] (ecmascript, async loader)")(__turbopack_context__.i)).toast;
        toast('Оплата прошла. Заказ #' + j.order_id);
        location.href = '/checkout';
    }
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$workspaces$2f$FTP$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "CheckoutForm.useEffect": ()=>{
            async function loadTotal() {
                const token = localStorage.getItem('access_token');
                const base = __TURBOPACK__imported__module__$5b$project$5d2f$workspaces$2f$FTP$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].env.NEXT_PUBLIC_API_BASE || 'http://localhost:8000';
                try {
                    if (token) {
                        const res = await fetch(base + '/me/cart', {
                            headers: {
                                Authorization: `Bearer ${token}`
                            }
                        });
                        if (res.ok) {
                            const items = await res.json();
                            const s = items.reduce({
                                "CheckoutForm.useEffect.loadTotal.s": (a, it)=>a + (it.price || 0) * (it.quantity || 1)
                            }["CheckoutForm.useEffect.loadTotal.s"], 0);
                            setSubtotal(s);
                            return;
                        }
                    }
                    // guest
                    const raw = localStorage.getItem('guest_cart') || '[]';
                    let arr = [];
                    try {
                        arr = JSON.parse(raw);
                    } catch (e) {
                        arr = [];
                    }
                    // try resolve prices via server
                    const resolved = await Promise.all(arr.map({
                        "CheckoutForm.useEffect.loadTotal": async (it)=>{
                            try {
                                const r = await fetch(base + `/products/resolve?name=${encodeURIComponent(it.product_id)}`);
                                if (r.ok) {
                                    const pj = await r.json();
                                    return {
                                        price: pj.price || 0,
                                        qty: it.quantity || 1
                                    };
                                }
                            } catch (e) {}
                            return {
                                price: 0,
                                qty: it.quantity || 1
                            };
                        }
                    }["CheckoutForm.useEffect.loadTotal"]));
                    const s = resolved.reduce({
                        "CheckoutForm.useEffect.loadTotal.s": (a, it)=>a + it.price * it.qty
                    }["CheckoutForm.useEffect.loadTotal.s"], 0);
                    setSubtotal(s);
                } catch (e) {
                    setSubtotal(0);
                }
            }
            loadTotal();
        }
    }["CheckoutForm.useEffect"], []);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$workspaces$2f$FTP$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        "data-orchids-id": "src/app/checkout/form/page.tsx:55:4",
        "data-orchids-name": "section",
        className: "container py-12",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$workspaces$2f$FTP$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            "data-orchids-id": "src/app/checkout/form/page.tsx:56:6",
            "data-orchids-name": "div",
            className: "max-w-3xl mx-auto bg-card border rounded-2xl p-8 shadow-md",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$workspaces$2f$FTP$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                    "data-orchids-id": "src/app/checkout/form/page.tsx:57:8",
                    "data-orchids-name": "h1",
                    className: "text-3xl font-bold mb-4",
                    children: "Оформление заказа"
                }, void 0, false, {
                    fileName: "[project]/workspaces/FTP/src/app/checkout/form/page.tsx",
                    lineNumber: 57,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$workspaces$2f$FTP$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    "data-orchids-id": "src/app/checkout/form/page.tsx:58:8",
                    "data-orchids-name": "p",
                    className: "text-sm text-muted-foreground mb-6",
                    children: "Пожалуйста, проверьте информацию и подтвердите оплату. Сумма будет списана с вашего баланса."
                }, void 0, false, {
                    fileName: "[project]/workspaces/FTP/src/app/checkout/form/page.tsx",
                    lineNumber: 58,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$workspaces$2f$FTP$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
                    "data-orchids-id": "src/app/checkout/form/page.tsx:60:8",
                    "data-orchids-name": "form",
                    onSubmit: pay,
                    className: "grid grid-cols-1 gap-4",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$workspaces$2f$FTP$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                            "data-orchids-id": "src/app/checkout/form/page.tsx:61:10",
                            "data-orchids-name": "label",
                            className: "block",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$workspaces$2f$FTP$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    "data-orchids-id": "src/app/checkout/form/page.tsx:62:12",
                                    "data-orchids-name": "div",
                                    className: "text-sm font-medium mb-2",
                                    children: "Server"
                                }, void 0, false, {
                                    fileName: "[project]/workspaces/FTP/src/app/checkout/form/page.tsx",
                                    lineNumber: 62,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$workspaces$2f$FTP$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                    "data-orchids-id": "src/app/checkout/form/page.tsx:63:12",
                                    "data-orchids-name": "select",
                                    className: "input w-full",
                                    value: server,
                                    onChange: (e)=>setServer(e.target.value),
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$workspaces$2f$FTP$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                            "data-orchids-id": "src/app/checkout/form/page.tsx:64:14",
                                            "data-orchids-name": "option",
                                            value: "Asia",
                                            children: "Asia"
                                        }, void 0, false, {
                                            fileName: "[project]/workspaces/FTP/src/app/checkout/form/page.tsx",
                                            lineNumber: 64,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$workspaces$2f$FTP$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                            "data-orchids-id": "src/app/checkout/form/page.tsx:65:14",
                                            "data-orchids-name": "option",
                                            value: "America",
                                            children: "America"
                                        }, void 0, false, {
                                            fileName: "[project]/workspaces/FTP/src/app/checkout/form/page.tsx",
                                            lineNumber: 65,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$workspaces$2f$FTP$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                            "data-orchids-id": "src/app/checkout/form/page.tsx:66:14",
                                            "data-orchids-name": "option",
                                            value: "Europe",
                                            children: "Europe"
                                        }, void 0, false, {
                                            fileName: "[project]/workspaces/FTP/src/app/checkout/form/page.tsx",
                                            lineNumber: 66,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$workspaces$2f$FTP$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                            "data-orchids-id": "src/app/checkout/form/page.tsx:67:14",
                                            "data-orchids-name": "option",
                                            value: "Taiwan",
                                            children: "Taiwan"
                                        }, void 0, false, {
                                            fileName: "[project]/workspaces/FTP/src/app/checkout/form/page.tsx",
                                            lineNumber: 67,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/workspaces/FTP/src/app/checkout/form/page.tsx",
                                    lineNumber: 63,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/workspaces/FTP/src/app/checkout/form/page.tsx",
                            lineNumber: 61,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$workspaces$2f$FTP$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                            "data-orchids-id": "src/app/checkout/form/page.tsx:71:10",
                            "data-orchids-name": "label",
                            className: "block",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$workspaces$2f$FTP$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    "data-orchids-id": "src/app/checkout/form/page.tsx:72:12",
                                    "data-orchids-name": "div",
                                    className: "text-sm font-medium mb-2",
                                    children: "UID"
                                }, void 0, false, {
                                    fileName: "[project]/workspaces/FTP/src/app/checkout/form/page.tsx",
                                    lineNumber: 72,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$workspaces$2f$FTP$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                    "data-orchids-id": "src/app/checkout/form/page.tsx:73:12",
                                    "data-orchids-name": "input",
                                    className: "input w-full",
                                    value: address,
                                    onChange: (e)=>setAddress(e.target.value)
                                }, void 0, false, {
                                    fileName: "[project]/workspaces/FTP/src/app/checkout/form/page.tsx",
                                    lineNumber: 73,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/workspaces/FTP/src/app/checkout/form/page.tsx",
                            lineNumber: 71,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$workspaces$2f$FTP$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                            "data-orchids-id": "src/app/checkout/form/page.tsx:76:10",
                            "data-orchids-name": "label",
                            className: "block",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$workspaces$2f$FTP$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    "data-orchids-id": "src/app/checkout/form/page.tsx:77:12",
                                    "data-orchids-name": "div",
                                    className: "text-sm font-medium mb-2",
                                    children: "Никнейм"
                                }, void 0, false, {
                                    fileName: "[project]/workspaces/FTP/src/app/checkout/form/page.tsx",
                                    lineNumber: 77,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$workspaces$2f$FTP$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                    "data-orchids-id": "src/app/checkout/form/page.tsx:78:12",
                                    "data-orchids-name": "input",
                                    className: "input w-full",
                                    value: name,
                                    onChange: (e)=>setName(e.target.value)
                                }, void 0, false, {
                                    fileName: "[project]/workspaces/FTP/src/app/checkout/form/page.tsx",
                                    lineNumber: 78,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/workspaces/FTP/src/app/checkout/form/page.tsx",
                            lineNumber: 76,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$workspaces$2f$FTP$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            "data-orchids-id": "src/app/checkout/form/page.tsx:81:10",
                            "data-orchids-name": "div",
                            className: "flex items-center justify-between mt-2",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$workspaces$2f$FTP$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    "data-orchids-id": "src/app/checkout/form/page.tsx:82:12",
                                    "data-orchids-name": "div",
                                    className: "text-sm text-muted-foreground",
                                    children: "Оплата будет списана с баланса пользователя"
                                }, void 0, false, {
                                    fileName: "[project]/workspaces/FTP/src/app/checkout/form/page.tsx",
                                    lineNumber: 82,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$workspaces$2f$FTP$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    "data-orchids-id": "src/app/checkout/form/page.tsx:83:12",
                                    "data-orchids-name": "div",
                                    className: "text-lg font-bold text-brand",
                                    children: subtotal !== null ? subtotal.toLocaleString() + ' ₽' : '— ₽'
                                }, void 0, false, {
                                    fileName: "[project]/workspaces/FTP/src/app/checkout/form/page.tsx",
                                    lineNumber: 83,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/workspaces/FTP/src/app/checkout/form/page.tsx",
                            lineNumber: 81,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$workspaces$2f$FTP$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            "data-orchids-id": "src/app/checkout/form/page.tsx:86:10",
                            "data-orchids-name": "div",
                            className: "flex gap-3 mt-4",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$workspaces$2f$FTP$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$workspaces$2f$FTP$2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                    "data-orchids-id": "src/app/checkout/form/page.tsx:87:12",
                                    "data-orchids-name": "Button",
                                    type: "submit",
                                    disabled: loading,
                                    children: loading ? 'Оплата...' : 'Оплатить'
                                }, void 0, false, {
                                    fileName: "[project]/workspaces/FTP/src/app/checkout/form/page.tsx",
                                    lineNumber: 87,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$workspaces$2f$FTP$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$workspaces$2f$FTP$2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                    "data-orchids-id": "src/app/checkout/form/page.tsx:88:12",
                                    "data-orchids-name": "Button",
                                    type: "button",
                                    variant: "default",
                                    onClick: ()=>location.href = '/',
                                    children: "Вернуться к покупкам"
                                }, void 0, false, {
                                    fileName: "[project]/workspaces/FTP/src/app/checkout/form/page.tsx",
                                    lineNumber: 88,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/workspaces/FTP/src/app/checkout/form/page.tsx",
                            lineNumber: 86,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/workspaces/FTP/src/app/checkout/form/page.tsx",
                    lineNumber: 60,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/workspaces/FTP/src/app/checkout/form/page.tsx",
            lineNumber: 56,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/workspaces/FTP/src/app/checkout/form/page.tsx",
        lineNumber: 55,
        columnNumber: 5
    }, this);
}
_s(CheckoutForm, "9+Fb55NaSP0obFQLowfxIaoRouk=");
_c = CheckoutForm;
var _c;
__turbopack_context__.k.register(_c, "CheckoutForm");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
}]);

//# sourceMappingURL=workspaces_FTP_src_40aa79e7._.js.map