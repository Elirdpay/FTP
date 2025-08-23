(globalThis.TURBOPACK = globalThis.TURBOPACK || []).push([typeof document === "object" ? document.currentScript : undefined, {

"[project]/workspaces/FTP/src/components/cart/checkout-modal.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>CheckoutModal)
});
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
function CheckoutModal({ open, onClose, subtotal, singleItem }) {
    _s();
    const [balance, setBalance] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$workspaces$2f$FTP$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [loading, setLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$workspaces$2f$FTP$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [confirming, setConfirming] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$workspaces$2f$FTP$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [success, setSuccess] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$workspaces$2f$FTP$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$workspaces$2f$FTP$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "CheckoutModal.useEffect": ()=>{
            async function load() {
                const token = localStorage.getItem('access_token');
                if (!token) {
                    setBalance(null);
                    return;
                }
                try {
                    const res = await fetch('/api/me/profile', {
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
                    console.error('fetch /me/profile failed', e);
                    setBalance(null);
                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$workspaces$2f$FTP$2f$src$2f$lib$2f$toast$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"])('Сеть: не удалось получить профиль');
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
        // show confirmation buttons first
        setConfirming(true);
    }
    async function doConfirm() {
        const token = localStorage.getItem('access_token');
        if (!token) {
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$workspaces$2f$FTP$2f$src$2f$lib$2f$toast$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"])('Пожалуйста, войдите в аккаунт для оплаты с баланса');
            return;
        }
        setLoading(true);
        try {
            let res;
            if (singleItem) {
                res = await fetch('/api/me/checkout/item', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                        Authorization: `Bearer ${token}`
                    },
                    body: JSON.stringify({
                        product_id: String(singleItem.product_id),
                        quantity: singleItem.quantity || 1
                    })
                });
            } else {
                res = await fetch('/api/me/checkout', {
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
            }
            if (!res.ok) {
                const j = await res.json().catch(()=>({}));
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$workspaces$2f$FTP$2f$src$2f$lib$2f$toast$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"])(j.detail || 'Ошибка оплаты');
                setLoading(false);
                setConfirming(false);
                return;
            }
            const j = await res.json();
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$workspaces$2f$FTP$2f$src$2f$lib$2f$toast$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"])('Оплата проведена, заказ #' + j.order_id);
            // update server cart count from server
            try {
                const rc = await fetch('/api/me/cart', {
                    headers: {
                        Authorization: `Bearer ${token}`
                    }
                });
                if (rc.ok) {
                    const cj = await rc.json();
                    const cnt = Array.isArray(cj) ? cj.reduce((s, i)=>s + (i.quantity || 0), 0) : 0;
                    try {
                        localStorage.setItem('server_cart_count', String(cnt));
                    } catch (e) {}
                    ;
                    try {
                        window.dispatchEvent(new Event('storage'));
                    } catch (e) {}
                }
            } catch (e) {}
            if (singleItem) {
                // show success panel with choices
                setSuccess(true);
                setConfirming(false);
                setLoading(false);
                return;
            }
            // full-cart flow: close and redirect to account
            onClose();
            location.href = '/account';
        } catch (e) {
            console.error('fetch /me/checkout failed', e);
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$workspaces$2f$FTP$2f$src$2f$lib$2f$toast$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"])('Сеть: не удалось выполнить оплату');
        } finally{
            setLoading(false);
            setConfirming(false);
        }
    }
    function cancelConfirm() {
        setConfirming(false);
    // remain in cart (close modal keeps user on cart page)
    }
    function payDirect() {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$workspaces$2f$FTP$2f$src$2f$lib$2f$toast$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"])('Перенаправление на платёжный шлюз (симуляция)');
        // in real app redirect to external payment provider
        onClose();
        location.href = '/checkout';
    }
    if (!open) return null;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$workspaces$2f$FTP$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        "data-orchids-id": "src/components/cart/checkout-modal.tsx:78:4",
        "data-orchids-name": "div",
        className: "fixed inset-0 z-50 flex items-center justify-center px-4",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$workspaces$2f$FTP$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                "data-orchids-id": "src/components/cart/checkout-modal.tsx:79:6",
                "data-orchids-name": "div",
                className: "absolute inset-0 bg-black/60",
                onClick: onClose
            }, void 0, false, {
                fileName: "[project]/workspaces/FTP/src/components/cart/checkout-modal.tsx",
                lineNumber: 79,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$workspaces$2f$FTP$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                "data-orchids-id": "src/components/cart/checkout-modal.tsx:80:6",
                "data-orchids-name": "div",
                className: "relative bg-card border border-stroke rounded-2xl p-6 w-full max-w-2xl shadow-xl max-h-[90vh] overflow-auto",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$workspaces$2f$FTP$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        "data-orchids-id": "src/components/cart/checkout-modal.tsx:81:8",
                        "data-orchids-name": "div",
                        className: "flex justify-between items-center mb-4",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$workspaces$2f$FTP$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                "data-orchids-id": "src/components/cart/checkout-modal.tsx:82:10",
                                "data-orchids-name": "h3",
                                className: "text-2xl font-bold",
                                children: "Оформление заказа"
                            }, void 0, false, {
                                fileName: "[project]/workspaces/FTP/src/components/cart/checkout-modal.tsx",
                                lineNumber: 82,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$workspaces$2f$FTP$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                "data-orchids-id": "src/components/cart/checkout-modal.tsx:83:10",
                                "data-orchids-name": "button",
                                onClick: onClose,
                                className: "text-muted-foreground text-xl",
                                children: "✕"
                            }, void 0, false, {
                                fileName: "[project]/workspaces/FTP/src/components/cart/checkout-modal.tsx",
                                lineNumber: 83,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/workspaces/FTP/src/components/cart/checkout-modal.tsx",
                        lineNumber: 81,
                        columnNumber: 9
                    }, this),
                    success ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$workspaces$2f$FTP$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        "data-orchids-id": "src/components/cart/checkout-modal.tsx:86:10",
                        "data-orchids-name": "div",
                        className: "p-6 text-center",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$workspaces$2f$FTP$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                "data-orchids-id": "src/components/cart/checkout-modal.tsx:87:12",
                                "data-orchids-name": "h3",
                                className: "text-3xl font-bold mb-4",
                                children: "Успех!"
                            }, void 0, false, {
                                fileName: "[project]/workspaces/FTP/src/components/cart/checkout-modal.tsx",
                                lineNumber: 87,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$workspaces$2f$FTP$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                "data-orchids-id": "src/components/cart/checkout-modal.tsx:88:12",
                                "data-orchids-name": "p",
                                className: "text-sm text-muted-foreground mb-6",
                                children: "Покупка успешно оформлена. Перейдите в личный кабинет для активации покупок."
                            }, void 0, false, {
                                fileName: "[project]/workspaces/FTP/src/components/cart/checkout-modal.tsx",
                                lineNumber: 88,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$workspaces$2f$FTP$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                "data-orchids-id": "src/components/cart/checkout-modal.tsx:89:12",
                                "data-orchids-name": "div",
                                className: "flex flex-col gap-3 max-w-sm mx-auto",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$workspaces$2f$FTP$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$workspaces$2f$FTP$2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                        "data-orchids-id": "src/components/cart/checkout-modal.tsx:90:14",
                                        "data-orchids-name": "Button",
                                        onClick: ()=>{
                                            try {
                                                location.href = '/account';
                                            } catch (e) {}
                                        },
                                        className: "w-full brand-gradient brand-glow",
                                        children: "Перейти в личный кабинет"
                                    }, void 0, false, {
                                        fileName: "[project]/workspaces/FTP/src/components/cart/checkout-modal.tsx",
                                        lineNumber: 90,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$workspaces$2f$FTP$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$workspaces$2f$FTP$2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                        "data-orchids-id": "src/components/cart/checkout-modal.tsx:91:14",
                                        "data-orchids-name": "Button",
                                        variant: "outline",
                                        onClick: ()=>{
                                            try {
                                                localStorage.setItem('server_cart_count', '0');
                                                window.dispatchEvent(new Event('storage'));
                                            } catch (e) {}
                                            ;
                                            setSuccess(false);
                                            onClose();
                                        },
                                        className: "w-full",
                                        children: "Остаться в корзине"
                                    }, void 0, false, {
                                        fileName: "[project]/workspaces/FTP/src/components/cart/checkout-modal.tsx",
                                        lineNumber: 91,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/workspaces/FTP/src/components/cart/checkout-modal.tsx",
                                lineNumber: 89,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/workspaces/FTP/src/components/cart/checkout-modal.tsx",
                        lineNumber: 86,
                        columnNumber: 11
                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$workspaces$2f$FTP$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        "data-orchids-id": "src/components/cart/checkout-modal.tsx:95:8",
                        "data-orchids-name": "div",
                        className: "grid grid-cols-1 md:grid-cols-2 gap-6",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$workspaces$2f$FTP$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                "data-orchids-id": "src/components/cart/checkout-modal.tsx:96:10",
                                "data-orchids-name": "div",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$workspaces$2f$FTP$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                        "data-orchids-id": "src/components/cart/checkout-modal.tsx:97:12",
                                        "data-orchids-name": "h4",
                                        className: "text-sm text-muted-foreground",
                                        children: "Итоговая сумма"
                                    }, void 0, false, {
                                        fileName: "[project]/workspaces/FTP/src/components/cart/checkout-modal.tsx",
                                        lineNumber: 97,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$workspaces$2f$FTP$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        "data-orchids-id": "src/components/cart/checkout-modal.tsx:98:12",
                                        "data-orchids-name": "div",
                                        className: "text-3xl font-extrabold mt-2",
                                        children: [
                                            new Intl.NumberFormat('ru-RU').format(subtotal),
                                            " ₽"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/workspaces/FTP/src/components/cart/checkout-modal.tsx",
                                        lineNumber: 98,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$workspaces$2f$FTP$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        "data-orchids-id": "src/components/cart/checkout-modal.tsx:99:12",
                                        "data-orchids-name": "div",
                                        className: "mt-4 text-sm text-muted-foreground",
                                        children: "Проверьте сервер, UID и никнейм на следующем шаге."
                                    }, void 0, false, {
                                        fileName: "[project]/workspaces/FTP/src/components/cart/checkout-modal.tsx",
                                        lineNumber: 99,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/workspaces/FTP/src/components/cart/checkout-modal.tsx",
                                lineNumber: 96,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$workspaces$2f$FTP$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                "data-orchids-id": "src/components/cart/checkout-modal.tsx:101:10",
                                "data-orchids-name": "div",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$workspaces$2f$FTP$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                        "data-orchids-id": "src/components/cart/checkout-modal.tsx:102:12",
                                        "data-orchids-name": "h4",
                                        className: "text-sm text-muted-foreground",
                                        children: "Баланс аккаунта"
                                    }, void 0, false, {
                                        fileName: "[project]/workspaces/FTP/src/components/cart/checkout-modal.tsx",
                                        lineNumber: 102,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$workspaces$2f$FTP$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        "data-orchids-id": "src/components/cart/checkout-modal.tsx:103:12",
                                        "data-orchids-name": "div",
                                        className: "text-2xl font-bold mt-2",
                                        children: balance !== null ? new Intl.NumberFormat('ru-RU').format(balance) + ' ₽' : '—'
                                    }, void 0, false, {
                                        fileName: "[project]/workspaces/FTP/src/components/cart/checkout-modal.tsx",
                                        lineNumber: 103,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$workspaces$2f$FTP$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        "data-orchids-id": "src/components/cart/checkout-modal.tsx:104:14",
                                        "data-orchids-name": "div",
                                        className: "mt-4 flex flex-col gap-3",
                                        children: !confirming ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$workspaces$2f$FTP$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$workspaces$2f$FTP$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$workspaces$2f$FTP$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$workspaces$2f$FTP$2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                                    "data-orchids-id": "src/components/cart/checkout-modal.tsx:107:18",
                                                    "data-orchids-name": "Button",
                                                    onClick: payWithBalance,
                                                    disabled: loading || balance !== null && balance < subtotal,
                                                    className: "w-full brand-gradient brand-glow",
                                                    children: "Оплатить с баланса"
                                                }, void 0, false, {
                                                    fileName: "[project]/workspaces/FTP/src/components/cart/checkout-modal.tsx",
                                                    lineNumber: 107,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$workspaces$2f$FTP$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$workspaces$2f$FTP$2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                                    "data-orchids-id": "src/components/cart/checkout-modal.tsx:108:18",
                                                    "data-orchids-name": "Button",
                                                    variant: "outline",
                                                    onClick: payDirect,
                                                    className: "w-full",
                                                    children: "Оплатить напрямую"
                                                }, void 0, false, {
                                                    fileName: "[project]/workspaces/FTP/src/components/cart/checkout-modal.tsx",
                                                    lineNumber: 108,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$workspaces$2f$FTP$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            "data-orchids-id": "src/components/cart/checkout-modal.tsx:111:16",
                                            "data-orchids-name": "div",
                                            className: "flex flex-col gap-3",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$workspaces$2f$FTP$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$workspaces$2f$FTP$2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                                    "data-orchids-id": "src/components/cart/checkout-modal.tsx:112:18",
                                                    "data-orchids-name": "Button",
                                                    onClick: doConfirm,
                                                    disabled: loading,
                                                    className: "w-full bg-emerald-600 hover:bg-emerald-700 text-white",
                                                    children: "Подтвердить"
                                                }, void 0, false, {
                                                    fileName: "[project]/workspaces/FTP/src/components/cart/checkout-modal.tsx",
                                                    lineNumber: 112,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$workspaces$2f$FTP$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$workspaces$2f$FTP$2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                                    "data-orchids-id": "src/components/cart/checkout-modal.tsx:113:18",
                                                    "data-orchids-name": "Button",
                                                    variant: "outline",
                                                    onClick: cancelConfirm,
                                                    className: "w-full border-red-600 text-red-600 hover:bg-red-50",
                                                    children: "Отменить"
                                                }, void 0, false, {
                                                    fileName: "[project]/workspaces/FTP/src/components/cart/checkout-modal.tsx",
                                                    lineNumber: 113,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/workspaces/FTP/src/components/cart/checkout-modal.tsx",
                                            lineNumber: 111,
                                            columnNumber: 17
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/workspaces/FTP/src/components/cart/checkout-modal.tsx",
                                        lineNumber: 104,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/workspaces/FTP/src/components/cart/checkout-modal.tsx",
                                lineNumber: 101,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/workspaces/FTP/src/components/cart/checkout-modal.tsx",
                        lineNumber: 95,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/workspaces/FTP/src/components/cart/checkout-modal.tsx",
                lineNumber: 80,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/workspaces/FTP/src/components/cart/checkout-modal.tsx",
        lineNumber: 78,
        columnNumber: 5
    }, this);
}
_s(CheckoutModal, "JjvORdC83EuSI2krx7jpFieddls=");
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

//# sourceMappingURL=workspaces_FTP_src_components_cart_checkout-modal_tsx_fd6deac3._.js.map