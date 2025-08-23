(globalThis.TURBOPACK = globalThis.TURBOPACK || []).push([typeof document === "object" ? document.currentScript : undefined, {

"[project]/workspaces/FTP/src/lib/toast.ts [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "toast": (()=>toast)
});
function toast(msg) {
    if ("TURBOPACK compile-time falsy", 0) {
        "TURBOPACK unreachable";
    }
    const id = 'app-toast';
    let el = document.getElementById(id);
    if (!el) {
        el = document.createElement('div');
        el.id = id;
        el.style.position = 'fixed';
        el.style.right = '20px';
        el.style.bottom = '20px';
        el.style.zIndex = '9999';
        document.body.appendChild(el);
    }
    const t = document.createElement('div');
    t.textContent = msg;
    el.appendChild(t);
    // trigger CSS animation
    setTimeout(()=>t.classList.add('show'), 10);
    // remove after timeout with fade
    setTimeout(()=>{
        t.classList.remove('show');
        setTimeout(()=>t.remove(), 300);
    }, 3000);
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/workspaces/FTP/src/components/cart/checkout-modal.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>CheckoutModal)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$workspaces$2f$FTP$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/workspaces/FTP/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$workspaces$2f$FTP$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/workspaces/FTP/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$workspaces$2f$FTP$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/workspaces/FTP/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$workspaces$2f$FTP$2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/workspaces/FTP/src/components/ui/button.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$workspaces$2f$FTP$2f$src$2f$lib$2f$toast$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/workspaces/FTP/src/lib/toast.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
function CheckoutModal({ open, onClose, subtotal }) {
    _s();
    const [balance, setBalance] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$workspaces$2f$FTP$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [loading, setLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$workspaces$2f$FTP$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$workspaces$2f$FTP$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "CheckoutModal.useEffect": ()=>{
            async function load() {
                const token = localStorage.getItem('access_token');
                if (!token) {
                    setBalance(null);
                    return;
                }
                try {
                    const res = await fetch((__TURBOPACK__imported__module__$5b$project$5d2f$workspaces$2f$FTP$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].env.NEXT_PUBLIC_API_BASE || 'http://localhost:8000') + '/me/profile', {
                        headers: {
                            Authorization: `Bearer ${token}`
                        }
                    });
                    if (!res.ok) {
                        setBalance(null);
                        return;
                    }
                    const j = await res.json();
                    setBalance(Number(j.balance || 0));
                } catch (e) {
                    setBalance(null);
                }
            }
            if (open) load();
        }
    }["CheckoutModal.useEffect"], [
        open
    ]);
    async function payWithBalance() {
        const token = localStorage.getItem('access_token');
        if (!token) {
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$workspaces$2f$FTP$2f$src$2f$lib$2f$toast$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"])('Пожалуйста, войдите в аккаунт для оплаты с баланса');
            return;
        }
        setLoading(true);
        try {
            const res = await fetch((__TURBOPACK__imported__module__$5b$project$5d2f$workspaces$2f$FTP$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].env.NEXT_PUBLIC_API_BASE || 'http://localhost:8000') + '/me/checkout', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    Authorization: `Bearer ${token}`
                },
                body: JSON.stringify({
                    server: 'Auto',
                    uid: '',
                    nickname: ''
                })
            });
            if (!res.ok) {
                const j = await res.json().catch(()=>({}));
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$workspaces$2f$FTP$2f$src$2f$lib$2f$toast$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"])(j.detail || 'Ошибка оплаты');
                setLoading(false);
                return;
            }
            const j = await res.json();
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$workspaces$2f$FTP$2f$src$2f$lib$2f$toast$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"])('Оплата проведена, заказ #' + j.order_id);
            onClose();
            location.href = '/me/orders';
        } catch (e) {
            console.error(e);
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$workspaces$2f$FTP$2f$src$2f$lib$2f$toast$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"])('Ошибка сети');
        } finally{
            setLoading(false);
        }
    }
    function payDirect() {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$workspaces$2f$FTP$2f$src$2f$lib$2f$toast$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"])('Перенаправление на платёжный шлюз (симуляция)');
        // in real app redirect to external payment provider
        onClose();
        location.href = '/checkout';
    }
    if (!open) return null;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$workspaces$2f$FTP$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        "data-orchids-id": "src/components/cart/checkout-modal.tsx:46:4",
        "data-orchids-name": "div",
        className: "fixed inset-0 z-50 flex items-center justify-center px-4",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$workspaces$2f$FTP$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                "data-orchids-id": "src/components/cart/checkout-modal.tsx:47:6",
                "data-orchids-name": "div",
                className: "absolute inset-0 bg-black/60",
                onClick: onClose
            }, void 0, false, {
                fileName: "[project]/workspaces/FTP/src/components/cart/checkout-modal.tsx",
                lineNumber: 47,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$workspaces$2f$FTP$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                "data-orchids-id": "src/components/cart/checkout-modal.tsx:48:6",
                "data-orchids-name": "div",
                className: "relative bg-card border border-stroke rounded-2xl p-6 w-full max-w-2xl shadow-xl max-h-[90vh] overflow-auto",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$workspaces$2f$FTP$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        "data-orchids-id": "src/components/cart/checkout-modal.tsx:49:8",
                        "data-orchids-name": "div",
                        className: "flex justify-between items-center mb-4",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$workspaces$2f$FTP$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                "data-orchids-id": "src/components/cart/checkout-modal.tsx:50:10",
                                "data-orchids-name": "h3",
                                className: "text-2xl font-bold",
                                children: "Оформление заказа"
                            }, void 0, false, {
                                fileName: "[project]/workspaces/FTP/src/components/cart/checkout-modal.tsx",
                                lineNumber: 50,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$workspaces$2f$FTP$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                "data-orchids-id": "src/components/cart/checkout-modal.tsx:51:10",
                                "data-orchids-name": "button",
                                onClick: onClose,
                                className: "text-muted-foreground text-xl",
                                children: "✕"
                            }, void 0, false, {
                                fileName: "[project]/workspaces/FTP/src/components/cart/checkout-modal.tsx",
                                lineNumber: 51,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/workspaces/FTP/src/components/cart/checkout-modal.tsx",
                        lineNumber: 49,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$workspaces$2f$FTP$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        "data-orchids-id": "src/components/cart/checkout-modal.tsx:53:8",
                        "data-orchids-name": "div",
                        className: "grid grid-cols-1 md:grid-cols-2 gap-6",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$workspaces$2f$FTP$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                "data-orchids-id": "src/components/cart/checkout-modal.tsx:54:10",
                                "data-orchids-name": "div",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$workspaces$2f$FTP$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                        "data-orchids-id": "src/components/cart/checkout-modal.tsx:55:12",
                                        "data-orchids-name": "h4",
                                        className: "text-sm text-muted-foreground",
                                        children: "Итоговая сумма"
                                    }, void 0, false, {
                                        fileName: "[project]/workspaces/FTP/src/components/cart/checkout-modal.tsx",
                                        lineNumber: 55,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$workspaces$2f$FTP$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        "data-orchids-id": "src/components/cart/checkout-modal.tsx:56:12",
                                        "data-orchids-name": "div",
                                        className: "text-3xl font-extrabold mt-2",
                                        children: [
                                            new Intl.NumberFormat('ru-RU').format(subtotal),
                                            " ₽"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/workspaces/FTP/src/components/cart/checkout-modal.tsx",
                                        lineNumber: 56,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$workspaces$2f$FTP$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        "data-orchids-id": "src/components/cart/checkout-modal.tsx:57:12",
                                        "data-orchids-name": "div",
                                        className: "mt-4 text-sm text-muted-foreground",
                                        children: "Проверьте сервер, UID и никнейм на следующем шаге."
                                    }, void 0, false, {
                                        fileName: "[project]/workspaces/FTP/src/components/cart/checkout-modal.tsx",
                                        lineNumber: 57,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/workspaces/FTP/src/components/cart/checkout-modal.tsx",
                                lineNumber: 54,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$workspaces$2f$FTP$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                "data-orchids-id": "src/components/cart/checkout-modal.tsx:59:10",
                                "data-orchids-name": "div",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$workspaces$2f$FTP$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                        "data-orchids-id": "src/components/cart/checkout-modal.tsx:60:12",
                                        "data-orchids-name": "h4",
                                        className: "text-sm text-muted-foreground",
                                        children: "Баланс аккаунта"
                                    }, void 0, false, {
                                        fileName: "[project]/workspaces/FTP/src/components/cart/checkout-modal.tsx",
                                        lineNumber: 60,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$workspaces$2f$FTP$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        "data-orchids-id": "src/components/cart/checkout-modal.tsx:61:12",
                                        "data-orchids-name": "div",
                                        className: "text-2xl font-bold mt-2",
                                        children: balance !== null ? new Intl.NumberFormat('ru-RU').format(balance) + ' ₽' : '—'
                                    }, void 0, false, {
                                        fileName: "[project]/workspaces/FTP/src/components/cart/checkout-modal.tsx",
                                        lineNumber: 61,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$workspaces$2f$FTP$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        "data-orchids-id": "src/components/cart/checkout-modal.tsx:62:12",
                                        "data-orchids-name": "div",
                                        className: "mt-4 flex flex-col gap-3",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$workspaces$2f$FTP$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$workspaces$2f$FTP$2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                                "data-orchids-id": "src/components/cart/checkout-modal.tsx:63:14",
                                                "data-orchids-name": "Button",
                                                onClick: payWithBalance,
                                                disabled: loading || balance !== null && balance < subtotal,
                                                className: "w-full",
                                                children: "Оплатить с баланса"
                                            }, void 0, false, {
                                                fileName: "[project]/workspaces/FTP/src/components/cart/checkout-modal.tsx",
                                                lineNumber: 63,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$workspaces$2f$FTP$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$workspaces$2f$FTP$2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                                "data-orchids-id": "src/components/cart/checkout-modal.tsx:64:14",
                                                "data-orchids-name": "Button",
                                                variant: "outline",
                                                onClick: payDirect,
                                                className: "w-full",
                                                children: "Оплатить напрямую"
                                            }, void 0, false, {
                                                fileName: "[project]/workspaces/FTP/src/components/cart/checkout-modal.tsx",
                                                lineNumber: 64,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/workspaces/FTP/src/components/cart/checkout-modal.tsx",
                                        lineNumber: 62,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/workspaces/FTP/src/components/cart/checkout-modal.tsx",
                                lineNumber: 59,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/workspaces/FTP/src/components/cart/checkout-modal.tsx",
                        lineNumber: 53,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/workspaces/FTP/src/components/cart/checkout-modal.tsx",
                lineNumber: 48,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/workspaces/FTP/src/components/cart/checkout-modal.tsx",
        lineNumber: 46,
        columnNumber: 5
    }, this);
}
_s(CheckoutModal, "tlkXgmHy5j6v13n2PHqN60LngB8=");
_c = CheckoutModal;
var _c;
__turbopack_context__.k.register(_c, "CheckoutModal");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/workspaces/FTP/src/components/cart/checkout-modal.tsx [app-client] (ecmascript, next/dynamic entry)": ((__turbopack_context__) => {

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.n(__turbopack_context__.i("[project]/workspaces/FTP/src/components/cart/checkout-modal.tsx [app-client] (ecmascript)"));
}}),
}]);

//# sourceMappingURL=workspaces_FTP_src_e6f7d386._.js.map