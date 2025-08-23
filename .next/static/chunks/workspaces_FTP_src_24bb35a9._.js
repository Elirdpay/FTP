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
"[project]/workspaces/FTP/src/components/ui/auth-modal.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>AuthModal)
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
function AuthModal({ open, onClose }) {
    _s();
    const [mode, setMode] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$workspaces$2f$FTP$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('login');
    const [email, setEmail] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$workspaces$2f$FTP$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    const [password, setPassword] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$workspaces$2f$FTP$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    const [confirm, setConfirm] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$workspaces$2f$FTP$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    const [error, setError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$workspaces$2f$FTP$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    const [loading, setLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$workspaces$2f$FTP$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    if (!open) return null;
    async function submit(e) {
        e.preventDefault();
        setError('');
        // basic validation
        if (!email || !email.includes('@')) {
            setError('Введите корректный email');
            return;
        }
        if (!password || password.length < 6) {
            setError('Пароль должен быть не менее 6 символов');
            return;
        }
        if (mode === 'login') {
            const data = new FormData();
            data.append('username', email);
            data.append('password', password);
            setLoading(true);
            let res;
            try {
                res = await fetch((__TURBOPACK__imported__module__$5b$project$5d2f$workspaces$2f$FTP$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].env.NEXT_PUBLIC_API_BASE || 'http://127.0.0.1:8000') + '/token', {
                    method: 'POST',
                    body: data
                });
            } catch (e) {
                console.error('fetch /token failed', e);
                setError('Сетевая ошибка: не удалось связаться с сервером');
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$workspaces$2f$FTP$2f$src$2f$lib$2f$toast$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"])('Сеть: не удалось связаться с сервером');
                setLoading(false);
                return;
            }
            if (!res.ok) {
                setError('Неверные учётные данные');
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$workspaces$2f$FTP$2f$src$2f$lib$2f$toast$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"])('Неверные учётные данные');
                setLoading(false);
                return;
            }
            const j = await res.json();
            localStorage.setItem('access_token', j.access_token);
            // Merge guest cart into user cart
            try {
                const raw = localStorage.getItem('guest_cart') || '[]';
                const arr = JSON.parse(raw);
                for (const it of arr){
                    await fetch((__TURBOPACK__imported__module__$5b$project$5d2f$workspaces$2f$FTP$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].env.NEXT_PUBLIC_API_BASE || 'http://localhost:8000') + '/me/cart/add', {
                        method: 'POST',
                        headers: {
                            'Content-Type': 'application/json',
                            Authorization: `Bearer ${j.access_token}`
                        },
                        body: JSON.stringify({
                            product_id: it.product_id,
                            quantity: it.quantity || 1
                        })
                    });
                }
                localStorage.removeItem('guest_cart');
                window.dispatchEvent(new Event('storage'));
            } catch (e) {
                console.error('merge guest cart failed', e);
            }
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$workspaces$2f$FTP$2f$src$2f$lib$2f$toast$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"])('Вход выполнен');
            onClose();
            setLoading(false);
            location.reload();
            return;
        }
        // register
        if (password !== confirm) {
            setError('Пароли не совпадают');
            return;
        }
        setLoading(true);
        let res;
        try {
            res = await fetch((__TURBOPACK__imported__module__$5b$project$5d2f$workspaces$2f$FTP$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].env.NEXT_PUBLIC_API_BASE || 'http://127.0.0.1:8000') + '/register', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    email,
                    password
                })
            });
        } catch (e) {
            console.error('fetch /register failed', e);
            setError('Сетевая ошибка при регистрации');
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$workspaces$2f$FTP$2f$src$2f$lib$2f$toast$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"])('Сеть: не удалось связаться с сервером');
            setLoading(false);
            return;
        }
        if (!res.ok) {
            const j = await res.json().catch(()=>({}));
            setError(j.detail || 'Ошибка');
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$workspaces$2f$FTP$2f$src$2f$lib$2f$toast$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"])(j.detail || 'Ошибка');
            setLoading(false);
            return;
        }
        // auto-login after successful registration
        try {
            const data = new FormData();
            data.append('username', email);
            data.append('password', password);
            const tokenRes = await fetch((__TURBOPACK__imported__module__$5b$project$5d2f$workspaces$2f$FTP$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].env.NEXT_PUBLIC_API_BASE || 'http://localhost:8000') + '/token', {
                method: 'POST',
                body: data
            });
            if (tokenRes.ok) {
                const jj = await tokenRes.json();
                localStorage.setItem('access_token', jj.access_token);
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$workspaces$2f$FTP$2f$src$2f$lib$2f$toast$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"])('Регистрация успешна, вы вошли');
                setLoading(false);
                onClose();
                location.reload();
                return;
            }
        } catch (e) {
            console.error(e);
        }
        setLoading(false);
        setMode('login');
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$workspaces$2f$FTP$2f$src$2f$lib$2f$toast$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"])('Регистрация успешна, войдите в систему');
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$workspaces$2f$FTP$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        "data-orchids-id": "src/components/ui/auth-modal.tsx:76:4",
        "data-orchids-name": "div",
        className: "fixed inset-0 z-50 flex items-center justify-center px-4",
        children: [
            "object" !== 'undefined' && window.location.protocol === 'file:' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$workspaces$2f$FTP$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                "data-orchids-id": "src/components/ui/auth-modal.tsx:78:8",
                "data-orchids-name": "div",
                className: "absolute top-6 left-1/2 -translate-x-1/2 bg-yellow-50 border-l-4 border-yellow-400 text-yellow-800 p-3 rounded",
                children: "Вы открыли приложение как файл. Откройте dev-сервер по URL, например http://localhost:3001"
            }, void 0, false, {
                fileName: "[project]/workspaces/FTP/src/components/ui/auth-modal.tsx",
                lineNumber: 78,
                columnNumber: 9
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$workspaces$2f$FTP$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                "data-orchids-id": "src/components/ui/auth-modal.tsx:80:6",
                "data-orchids-name": "div",
                className: "absolute inset-0 bg-black/60",
                onClick: onClose
            }, void 0, false, {
                fileName: "[project]/workspaces/FTP/src/components/ui/auth-modal.tsx",
                lineNumber: 80,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$workspaces$2f$FTP$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                "data-orchids-id": "src/components/ui/auth-modal.tsx:81:6",
                "data-orchids-name": "div",
                className: "relative bg-card border border-stroke rounded-2xl p-6 w-full max-w-lg shadow-xl max-h-[90vh] overflow-auto",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$workspaces$2f$FTP$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        "data-orchids-id": "src/components/ui/auth-modal.tsx:82:8",
                        "data-orchids-name": "div",
                        className: "flex justify-between items-center mb-6",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$workspaces$2f$FTP$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                "data-orchids-id": "src/components/ui/auth-modal.tsx:83:10",
                                "data-orchids-name": "h3",
                                className: "text-2xl font-bold",
                                children: mode === 'login' ? 'Вход в аккаунт' : 'Создать аккаунт'
                            }, void 0, false, {
                                fileName: "[project]/workspaces/FTP/src/components/ui/auth-modal.tsx",
                                lineNumber: 83,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$workspaces$2f$FTP$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                "data-orchids-id": "src/components/ui/auth-modal.tsx:84:10",
                                "data-orchids-name": "button",
                                onClick: onClose,
                                className: "text-muted-foreground text-xl",
                                children: "✕"
                            }, void 0, false, {
                                fileName: "[project]/workspaces/FTP/src/components/ui/auth-modal.tsx",
                                lineNumber: 84,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/workspaces/FTP/src/components/ui/auth-modal.tsx",
                        lineNumber: 82,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$workspaces$2f$FTP$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        "data-orchids-id": "src/components/ui/auth-modal.tsx:86:2",
                        "data-orchids-name": "div",
                        className: "grid grid-cols-2 gap-6 mb-4",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$workspaces$2f$FTP$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                "data-orchids-id": "src/components/ui/auth-modal.tsx:87:10",
                                "data-orchids-name": "div",
                                className: "p-4 rounded-lg bg-muted/60 border border-stroke",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$workspaces$2f$FTP$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                        "data-orchids-id": "src/components/ui/auth-modal.tsx:88:12",
                                        "data-orchids-name": "h4",
                                        className: "font-semibold mb-2",
                                        children: "Преимущества"
                                    }, void 0, false, {
                                        fileName: "[project]/workspaces/FTP/src/components/ui/auth-modal.tsx",
                                        lineNumber: 88,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$workspaces$2f$FTP$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                        "data-orchids-id": "src/components/ui/auth-modal.tsx:89:12",
                                        "data-orchids-name": "ul",
                                        className: "text-sm text-muted-foreground list-disc list-inside space-y-1",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$workspaces$2f$FTP$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                "data-orchids-id": "src/components/ui/auth-modal.tsx:90:14",
                                                "data-orchids-name": "li",
                                                children: "Сохраняйте корзину"
                                            }, void 0, false, {
                                                fileName: "[project]/workspaces/FTP/src/components/ui/auth-modal.tsx",
                                                lineNumber: 90,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$workspaces$2f$FTP$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                "data-orchids-id": "src/components/ui/auth-modal.tsx:91:14",
                                                "data-orchids-name": "li",
                                                children: "История заказов"
                                            }, void 0, false, {
                                                fileName: "[project]/workspaces/FTP/src/components/ui/auth-modal.tsx",
                                                lineNumber: 91,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$workspaces$2f$FTP$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                "data-orchids-id": "src/components/ui/auth-modal.tsx:92:14",
                                                "data-orchids-name": "li",
                                                children: "Быстрая оплата"
                                            }, void 0, false, {
                                                fileName: "[project]/workspaces/FTP/src/components/ui/auth-modal.tsx",
                                                lineNumber: 92,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/workspaces/FTP/src/components/ui/auth-modal.tsx",
                                        lineNumber: 89,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/workspaces/FTP/src/components/ui/auth-modal.tsx",
                                lineNumber: 87,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$workspaces$2f$FTP$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
                                "data-orchids-id": "src/components/ui/auth-modal.tsx:95:10",
                                "data-orchids-name": "form",
                                onSubmit: submit,
                                className: "space-y-3",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$workspaces$2f$FTP$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                        "data-orchids-id": "src/components/ui/auth-modal.tsx:96:12",
                                        "data-orchids-name": "label",
                                        className: "block",
                                        children: [
                                            "Email",
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$workspaces$2f$FTP$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                "data-orchids-id": "src/components/ui/auth-modal.tsx:97:14",
                                                "data-orchids-name": "input",
                                                placeholder: "you@example.com",
                                                className: "input w-full mt-2",
                                                value: email,
                                                onChange: (e)=>setEmail(e.target.value)
                                            }, void 0, false, {
                                                fileName: "[project]/workspaces/FTP/src/components/ui/auth-modal.tsx",
                                                lineNumber: 97,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/workspaces/FTP/src/components/ui/auth-modal.tsx",
                                        lineNumber: 96,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$workspaces$2f$FTP$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                        "data-orchids-id": "src/components/ui/auth-modal.tsx:99:12",
                                        "data-orchids-name": "label",
                                        className: "block",
                                        children: [
                                            "Пароль",
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$workspaces$2f$FTP$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                "data-orchids-id": "src/components/ui/auth-modal.tsx:100:14",
                                                "data-orchids-name": "input",
                                                placeholder: "••••••••",
                                                className: "input w-full mt-2",
                                                type: "password",
                                                value: password,
                                                onChange: (e)=>setPassword(e.target.value)
                                            }, void 0, false, {
                                                fileName: "[project]/workspaces/FTP/src/components/ui/auth-modal.tsx",
                                                lineNumber: 100,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/workspaces/FTP/src/components/ui/auth-modal.tsx",
                                        lineNumber: 99,
                                        columnNumber: 13
                                    }, this),
                                    mode === 'register' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$workspaces$2f$FTP$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                        "data-orchids-id": "src/components/ui/auth-modal.tsx:103:14",
                                        "data-orchids-name": "label",
                                        className: "block",
                                        children: [
                                            "Подтвердите пароль",
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$workspaces$2f$FTP$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                "data-orchids-id": "src/components/ui/auth-modal.tsx:104:16",
                                                "data-orchids-name": "input",
                                                placeholder: "Повторите пароль",
                                                className: "input w-full mt-2",
                                                type: "password",
                                                value: confirm,
                                                onChange: (e)=>setConfirm(e.target.value)
                                            }, void 0, false, {
                                                fileName: "[project]/workspaces/FTP/src/components/ui/auth-modal.tsx",
                                                lineNumber: 104,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/workspaces/FTP/src/components/ui/auth-modal.tsx",
                                        lineNumber: 103,
                                        columnNumber: 15
                                    }, this),
                                    error && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$workspaces$2f$FTP$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        "data-orchids-id": "src/components/ui/auth-modal.tsx:107:22",
                                        "data-orchids-name": "div",
                                        className: "text-destructive",
                                        children: error
                                    }, void 0, false, {
                                        fileName: "[project]/workspaces/FTP/src/components/ui/auth-modal.tsx",
                                        lineNumber: 107,
                                        columnNumber: 23
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$workspaces$2f$FTP$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        "data-orchids-id": "src/components/ui/auth-modal.tsx:108:12",
                                        "data-orchids-name": "div",
                                        className: "flex gap-2",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$workspaces$2f$FTP$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$workspaces$2f$FTP$2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                                "data-orchids-id": "src/components/ui/auth-modal.tsx:109:14",
                                                "data-orchids-name": "Button",
                                                type: "submit",
                                                children: mode === 'login' ? 'Войти' : 'Зарегистрироваться'
                                            }, void 0, false, {
                                                fileName: "[project]/workspaces/FTP/src/components/ui/auth-modal.tsx",
                                                lineNumber: 109,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$workspaces$2f$FTP$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$workspaces$2f$FTP$2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                                "data-orchids-id": "src/components/ui/auth-modal.tsx:110:14",
                                                "data-orchids-name": "Button",
                                                variant: "ghost",
                                                onClick: ()=>setMode(mode === 'login' ? 'register' : 'login'),
                                                children: mode === 'login' ? 'Создать аккаунт' : 'Войти'
                                            }, void 0, false, {
                                                fileName: "[project]/workspaces/FTP/src/components/ui/auth-modal.tsx",
                                                lineNumber: 110,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/workspaces/FTP/src/components/ui/auth-modal.tsx",
                                        lineNumber: 108,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/workspaces/FTP/src/components/ui/auth-modal.tsx",
                                lineNumber: 95,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/workspaces/FTP/src/components/ui/auth-modal.tsx",
                        lineNumber: 86,
                        columnNumber: 3
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$workspaces$2f$FTP$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        "data-orchids-id": "src/components/ui/auth-modal.tsx:114:8",
                        "data-orchids-name": "div",
                        className: "text-xs text-muted-foreground",
                        children: "Вход означает соглашение с пользовательским соглашением и политикой конфиденциальности."
                    }, void 0, false, {
                        fileName: "[project]/workspaces/FTP/src/components/ui/auth-modal.tsx",
                        lineNumber: 114,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/workspaces/FTP/src/components/ui/auth-modal.tsx",
                lineNumber: 81,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/workspaces/FTP/src/components/ui/auth-modal.tsx",
        lineNumber: 76,
        columnNumber: 5
    }, this);
}
_s(AuthModal, "ClzK+jxe+qEtiW6ykP3gqO7TfBM=");
_c = AuthModal;
var _c;
__turbopack_context__.k.register(_c, "AuthModal");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/workspaces/FTP/src/components/sections/header.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>Header)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$workspaces$2f$FTP$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/workspaces/FTP/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$workspaces$2f$FTP$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/workspaces/FTP/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$workspaces$2f$FTP$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/workspaces/FTP/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$workspaces$2f$FTP$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$search$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Search$3e$__ = __turbopack_context__.i("[project]/workspaces/FTP/node_modules/lucide-react/dist/esm/icons/search.js [app-client] (ecmascript) <export default as Search>");
var __TURBOPACK__imported__module__$5b$project$5d2f$workspaces$2f$FTP$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$shopping$2d$cart$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ShoppingCart$3e$__ = __turbopack_context__.i("[project]/workspaces/FTP/node_modules/lucide-react/dist/esm/icons/shopping-cart.js [app-client] (ecmascript) <export default as ShoppingCart>");
var __TURBOPACK__imported__module__$5b$project$5d2f$workspaces$2f$FTP$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$user$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__User$3e$__ = __turbopack_context__.i("[project]/workspaces/FTP/node_modules/lucide-react/dist/esm/icons/user.js [app-client] (ecmascript) <export default as User>");
var __TURBOPACK__imported__module__$5b$project$5d2f$workspaces$2f$FTP$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$globe$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Globe$3e$__ = __turbopack_context__.i("[project]/workspaces/FTP/node_modules/lucide-react/dist/esm/icons/globe.js [app-client] (ecmascript) <export default as Globe>");
var __TURBOPACK__imported__module__$5b$project$5d2f$workspaces$2f$FTP$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$menu$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Menu$3e$__ = __turbopack_context__.i("[project]/workspaces/FTP/node_modules/lucide-react/dist/esm/icons/menu.js [app-client] (ecmascript) <export default as Menu>");
var __TURBOPACK__imported__module__$5b$project$5d2f$workspaces$2f$FTP$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__ = __turbopack_context__.i("[project]/workspaces/FTP/node_modules/lucide-react/dist/esm/icons/x.js [app-client] (ecmascript) <export default as X>");
var __TURBOPACK__imported__module__$5b$project$5d2f$workspaces$2f$FTP$2f$src$2f$components$2f$ui$2f$auth$2d$modal$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/workspaces/FTP/src/components/ui/auth-modal.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
;
function Header() {
    _s();
    const [isMenuOpen, setIsMenuOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$workspaces$2f$FTP$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [cartCount, setCartCount] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$workspaces$2f$FTP$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    const [isAuthOpen, setIsAuthOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$workspaces$2f$FTP$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$workspaces$2f$FTP$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Header.useEffect": ()=>{
            const update = {
                "Header.useEffect.update": ()=>{
                    try {
                        const g = JSON.parse(localStorage.getItem('guest_cart') || '[]');
                        setCartCount(Array.isArray(g) ? g.reduce({
                            "Header.useEffect.update": (s, i)=>s + (i.quantity || 1)
                        }["Header.useEffect.update"], 0) : 0);
                    } catch (e) {
                        setCartCount(0);
                    }
                }
            }["Header.useEffect.update"];
            update();
            window.addEventListener('storage', update);
            return ({
                "Header.useEffect": ()=>window.removeEventListener('storage', update)
            })["Header.useEffect"];
        }
    }["Header.useEffect"], []);
    const scrollToSection = (sectionId)=>{
        const element = document.getElementById(sectionId);
        if (element) {
            element.scrollIntoView({
                behavior: 'smooth'
            });
        }
        setIsMenuOpen(false);
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$workspaces$2f$FTP$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("header", {
        "data-orchids-id": "src/components/sections/header.tsx:33:2",
        "data-orchids-name": "header",
        className: "bg-card border-b border-stroke sticky top-0 z-50",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$workspaces$2f$FTP$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            "data-orchids-id": "src/components/sections/header.tsx:34:6",
            "data-orchids-name": "div",
            className: "container",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$workspaces$2f$FTP$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    "data-orchids-id": "src/components/sections/header.tsx:35:8",
                    "data-orchids-name": "div",
                    className: "flex items-center justify-between gap-4 py-4",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$workspaces$2f$FTP$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$workspaces$2f$FTP$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                            "data-orchids-id": "src/components/sections/header.tsx:37:10",
                            "data-orchids-name": "Link",
                            href: "/",
                            className: "brand flex items-center gap-3 font-display font-bold text-xl letter-spacing-wide",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$workspaces$2f$FTP$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    "data-orchids-id": "src/components/sections/header.tsx:38:12",
                                    "data-orchids-name": "div",
                                    className: "logo w-10 h-10 rounded-full bg-gradient-to-r from-brand to-brand-2 brand-glow flex items-center justify-center",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$workspaces$2f$FTP$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        "data-orchids-id": "src/components/sections/header.tsx:39:14",
                                        "data-orchids-name": "span",
                                        className: "text-primary-foreground font-bold",
                                        children: "F"
                                    }, void 0, false, {
                                        fileName: "[project]/workspaces/FTP/src/components/sections/header.tsx",
                                        lineNumber: 39,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/workspaces/FTP/src/components/sections/header.tsx",
                                    lineNumber: 38,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$workspaces$2f$FTP$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    "data-orchids-id": "src/components/sections/header.tsx:41:12",
                                    "data-orchids-name": "span",
                                    className: "text-foreground",
                                    children: "Free To Pay"
                                }, void 0, false, {
                                    fileName: "[project]/workspaces/FTP/src/components/sections/header.tsx",
                                    lineNumber: 41,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/workspaces/FTP/src/components/sections/header.tsx",
                            lineNumber: 37,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$workspaces$2f$FTP$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("nav", {
                            "data-orchids-id": "src/components/sections/header.tsx:45:10",
                            "data-orchids-name": "nav",
                            className: "hidden md:flex items-center gap-6",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$workspaces$2f$FTP$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    "data-orchids-id": "src/components/sections/header.tsx:46:12",
                                    "data-orchids-name": "button",
                                    onClick: ()=>scrollToSection('genshin'),
                                    className: "pill px-3 py-2 bg-muted border border-stroke rounded-xl text-sm hover:border-brand-2 transition-colors",
                                    children: "Genshin Impact"
                                }, void 0, false, {
                                    fileName: "[project]/workspaces/FTP/src/components/sections/header.tsx",
                                    lineNumber: 46,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$workspaces$2f$FTP$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    "data-orchids-id": "src/components/sections/header.tsx:52:12",
                                    "data-orchids-name": "button",
                                    onClick: ()=>scrollToSection('hsr'),
                                    className: "pill px-3 py-2 bg-muted border border-stroke rounded-xl text-sm hover:border-brand-2 transition-colors",
                                    children: "Honkai: Star Rail"
                                }, void 0, false, {
                                    fileName: "[project]/workspaces/FTP/src/components/sections/header.tsx",
                                    lineNumber: 52,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$workspaces$2f$FTP$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    "data-orchids-id": "src/components/sections/header.tsx:58:12",
                                    "data-orchids-name": "button",
                                    onClick: ()=>scrollToSection('zzz'),
                                    className: "pill px-3 py-2 bg-muted border border-stroke rounded-xl text-sm hover:border-brand-2 transition-colors",
                                    children: "Zenless Zone Zero"
                                }, void 0, false, {
                                    fileName: "[project]/workspaces/FTP/src/components/sections/header.tsx",
                                    lineNumber: 58,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/workspaces/FTP/src/components/sections/header.tsx",
                            lineNumber: 45,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$workspaces$2f$FTP$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            "data-orchids-id": "src/components/sections/header.tsx:67:10",
                            "data-orchids-name": "div",
                            className: "flex items-center gap-3",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$workspaces$2f$FTP$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    "data-orchids-id": "src/components/sections/header.tsx:69:12",
                                    "data-orchids-name": "button",
                                    className: "pill px-3 py-2 bg-muted border border-stroke rounded-xl text-sm hover:border-brand-2 transition-colors hidden sm:flex items-center gap-1",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$workspaces$2f$FTP$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$workspaces$2f$FTP$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$globe$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Globe$3e$__["Globe"], {
                                            "data-orchids-id": "src/components/sections/header.tsx:70:14",
                                            "data-orchids-name": "Globe",
                                            className: "w-4 h-4"
                                        }, void 0, false, {
                                            fileName: "[project]/workspaces/FTP/src/components/sections/header.tsx",
                                            lineNumber: 70,
                                            columnNumber: 15
                                        }, this),
                                        "RU"
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/workspaces/FTP/src/components/sections/header.tsx",
                                    lineNumber: 69,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$workspaces$2f$FTP$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    "data-orchids-id": "src/components/sections/header.tsx:75:12",
                                    "data-orchids-name": "button",
                                    className: "pill p-2 bg-muted border border-stroke rounded-xl hover:border-brand-2 transition-colors hidden sm:block",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$workspaces$2f$FTP$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$workspaces$2f$FTP$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$search$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Search$3e$__["Search"], {
                                        "data-orchids-id": "src/components/sections/header.tsx:76:14",
                                        "data-orchids-name": "Search",
                                        className: "w-4 h-4"
                                    }, void 0, false, {
                                        fileName: "[project]/workspaces/FTP/src/components/sections/header.tsx",
                                        lineNumber: 76,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/workspaces/FTP/src/components/sections/header.tsx",
                                    lineNumber: 75,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$workspaces$2f$FTP$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$workspaces$2f$FTP$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                    "data-orchids-id": "src/components/sections/header.tsx:80:12",
                                    "data-orchids-name": "Link",
                                    href: "/cart",
                                    className: "pill relative p-2 bg-muted border border-stroke rounded-xl hover:border-brand-2 transition-colors",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$workspaces$2f$FTP$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$workspaces$2f$FTP$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$shopping$2d$cart$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ShoppingCart$3e$__["ShoppingCart"], {
                                            "data-orchids-id": "src/components/sections/header.tsx:81:14",
                                            "data-orchids-name": "ShoppingCart",
                                            className: "w-4 h-4"
                                        }, void 0, false, {
                                            fileName: "[project]/workspaces/FTP/src/components/sections/header.tsx",
                                            lineNumber: 81,
                                            columnNumber: 15
                                        }, this),
                                        cartCount > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$workspaces$2f$FTP$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            "data-orchids-id": "src/components/sections/header.tsx:83:16",
                                            "data-orchids-name": "span",
                                            className: "absolute -top-2 -right-2 bg-destructive text-destructive-foreground text-xs w-5 h-5 rounded-full flex items-center justify-center font-bold",
                                            children: cartCount
                                        }, void 0, false, {
                                            fileName: "[project]/workspaces/FTP/src/components/sections/header.tsx",
                                            lineNumber: 83,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/workspaces/FTP/src/components/sections/header.tsx",
                                    lineNumber: 80,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$workspaces$2f$FTP$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    "data-orchids-id": "src/components/sections/header.tsx:90:12",
                                    "data-orchids-name": "button",
                                    onClick: ()=>setIsAuthOpen(true),
                                    className: "pill p-2 bg-muted border border-stroke rounded-xl hover:border-brand-2 transition-colors",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$workspaces$2f$FTP$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$workspaces$2f$FTP$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$user$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__User$3e$__["User"], {
                                        "data-orchids-id": "src/components/sections/header.tsx:91:14",
                                        "data-orchids-name": "User",
                                        className: "w-4 h-4"
                                    }, void 0, false, {
                                        fileName: "[project]/workspaces/FTP/src/components/sections/header.tsx",
                                        lineNumber: 91,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/workspaces/FTP/src/components/sections/header.tsx",
                                    lineNumber: 90,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$workspaces$2f$FTP$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$workspaces$2f$FTP$2f$src$2f$components$2f$ui$2f$auth$2d$modal$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                    "data-orchids-id": "src/components/sections/header.tsx:94:12",
                                    "data-orchids-name": "AuthModal",
                                    open: isAuthOpen,
                                    onClose: ()=>setIsAuthOpen(false)
                                }, void 0, false, {
                                    fileName: "[project]/workspaces/FTP/src/components/sections/header.tsx",
                                    lineNumber: 94,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$workspaces$2f$FTP$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    "data-orchids-id": "src/components/sections/header.tsx:97:12",
                                    "data-orchids-name": "button",
                                    className: "pill p-2 bg-muted border border-stroke rounded-xl hover:border-brand-2 transition-colors md:hidden",
                                    onClick: ()=>setIsMenuOpen(!isMenuOpen),
                                    children: isMenuOpen ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$workspaces$2f$FTP$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$workspaces$2f$FTP$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__["X"], {
                                        "data-orchids-id": "src/components/sections/header.tsx:101:28",
                                        "data-orchids-name": "X",
                                        className: "w-4 h-4"
                                    }, void 0, false, {
                                        fileName: "[project]/workspaces/FTP/src/components/sections/header.tsx",
                                        lineNumber: 101,
                                        columnNumber: 29
                                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$workspaces$2f$FTP$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$workspaces$2f$FTP$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$menu$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Menu$3e$__["Menu"], {
                                        "data-orchids-id": "src/components/sections/header.tsx:101:56",
                                        "data-orchids-name": "Menu",
                                        className: "w-4 h-4"
                                    }, void 0, false, {
                                        fileName: "[project]/workspaces/FTP/src/components/sections/header.tsx",
                                        lineNumber: 101,
                                        columnNumber: 139
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/workspaces/FTP/src/components/sections/header.tsx",
                                    lineNumber: 97,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/workspaces/FTP/src/components/sections/header.tsx",
                            lineNumber: 67,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$workspaces$2f$FTP$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("script", {
                            "data-orchids-id": "src/components/sections/header.tsx:104:10",
                            "data-orchids-name": "script",
                            dangerouslySetInnerHTML: {
                                __html: ''
                            }
                        }, void 0, false, {
                            fileName: "[project]/workspaces/FTP/src/components/sections/header.tsx",
                            lineNumber: 104,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/workspaces/FTP/src/components/sections/header.tsx",
                    lineNumber: 35,
                    columnNumber: 9
                }, this),
                isMenuOpen && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$workspaces$2f$FTP$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("nav", {
                    "data-orchids-id": "src/components/sections/header.tsx:109:10",
                    "data-orchids-name": "nav",
                    className: "md:hidden pb-4 border-t border-stroke mt-4 pt-4",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$workspaces$2f$FTP$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        "data-orchids-id": "src/components/sections/header.tsx:110:12",
                        "data-orchids-name": "div",
                        className: "flex flex-col gap-2",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$workspaces$2f$FTP$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                "data-orchids-id": "src/components/sections/header.tsx:111:14",
                                "data-orchids-name": "button",
                                onClick: ()=>scrollToSection('genshin'),
                                className: "pill px-3 py-2 bg-muted border border-stroke rounded-xl text-sm hover:border-brand-2 transition-colors text-left",
                                children: "Genshin Impact"
                            }, void 0, false, {
                                fileName: "[project]/workspaces/FTP/src/components/sections/header.tsx",
                                lineNumber: 111,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$workspaces$2f$FTP$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                "data-orchids-id": "src/components/sections/header.tsx:117:14",
                                "data-orchids-name": "button",
                                onClick: ()=>scrollToSection('hsr'),
                                className: "pill px-3 py-2 bg-muted border border-stroke rounded-xl text-sm hover:border-brand-2 transition-colors text-left",
                                children: "Honkai: Star Rail"
                            }, void 0, false, {
                                fileName: "[project]/workspaces/FTP/src/components/sections/header.tsx",
                                lineNumber: 117,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$workspaces$2f$FTP$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                "data-orchids-id": "src/components/sections/header.tsx:123:14",
                                "data-orchids-name": "button",
                                onClick: ()=>scrollToSection('zzz'),
                                className: "pill px-3 py-2 bg-muted border border-stroke rounded-xl text-sm hover:border-brand-2 transition-colors text-left",
                                children: "Zenless Zone Zero"
                            }, void 0, false, {
                                fileName: "[project]/workspaces/FTP/src/components/sections/header.tsx",
                                lineNumber: 123,
                                columnNumber: 15
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/workspaces/FTP/src/components/sections/header.tsx",
                        lineNumber: 110,
                        columnNumber: 13
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/workspaces/FTP/src/components/sections/header.tsx",
                    lineNumber: 109,
                    columnNumber: 11
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/workspaces/FTP/src/components/sections/header.tsx",
            lineNumber: 34,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/workspaces/FTP/src/components/sections/header.tsx",
        lineNumber: 33,
        columnNumber: 3
    }, this);
}
_s(Header, "DWX6QlE7vkH4e6gxVfNa2GdxCeE=");
_c = Header;
var _c;
__turbopack_context__.k.register(_c, "Header");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/workspaces/FTP/src/components/sections/hero-banner.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$workspaces$2f$FTP$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/workspaces/FTP/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$workspaces$2f$FTP$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/workspaces/FTP/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$workspaces$2f$FTP$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$left$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronLeft$3e$__ = __turbopack_context__.i("[project]/workspaces/FTP/node_modules/lucide-react/dist/esm/icons/chevron-left.js [app-client] (ecmascript) <export default as ChevronLeft>");
var __TURBOPACK__imported__module__$5b$project$5d2f$workspaces$2f$FTP$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronRight$3e$__ = __turbopack_context__.i("[project]/workspaces/FTP/node_modules/lucide-react/dist/esm/icons/chevron-right.js [app-client] (ecmascript) <export default as ChevronRight>");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
const bannerData = [
    {
        id: 'genshin',
        title: 'Genshin Impact',
        subtitle: 'Кристаллы сотворения',
        description: 'Плати меньше — получай больше',
        discount: 'До 20% скидка',
        buttonText: 'Купить сейчас',
        background: undefined,
        image: '/banner-genshin-new.png',
        href: '#genshin'
    },
    {
        id: 'hsr',
        title: 'Honkai: Star Rail',
        subtitle: 'Онериковые осколки',
        description: 'Исследуй звездные пути',
        discount: 'До 15% скидка',
        buttonText: 'Пополнить',
        background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
        href: '#hsr'
    },
    {
        id: 'zzz',
        title: 'Zenless Zone Zero',
        subtitle: 'Моноскипы',
        description: 'Окунись в городские приключения',
        discount: 'До 18% скидка',
        buttonText: 'Получить',
        background: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)',
        href: '#zzz'
    }
];
const HeroBanner = ()=>{
    _s();
    const [currentSlide, setCurrentSlide] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$workspaces$2f$FTP$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    const [isAutoplay, setIsAutoplay] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$workspaces$2f$FTP$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(true);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$workspaces$2f$FTP$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "HeroBanner.useEffect": ()=>{
            if (!isAutoplay) return;
            const interval = setInterval({
                "HeroBanner.useEffect.interval": ()=>{
                    setCurrentSlide({
                        "HeroBanner.useEffect.interval": (prev)=>(prev + 1) % bannerData.length
                    }["HeroBanner.useEffect.interval"]);
                }
            }["HeroBanner.useEffect.interval"], 5000);
            return ({
                "HeroBanner.useEffect": ()=>clearInterval(interval)
            })["HeroBanner.useEffect"];
        }
    }["HeroBanner.useEffect"], [
        isAutoplay
    ]);
    const goToSlide = (index)=>{
        setCurrentSlide(index);
        setIsAutoplay(false);
        setTimeout(()=>setIsAutoplay(true), 10000);
    };
    const goToPrevious = ()=>{
        setCurrentSlide((prev)=>(prev - 1 + bannerData.length) % bannerData.length);
        setIsAutoplay(false);
        setTimeout(()=>setIsAutoplay(true), 10000);
    };
    const goToNext = ()=>{
        setCurrentSlide((prev)=>(prev + 1) % bannerData.length);
        setIsAutoplay(false);
        setTimeout(()=>setIsAutoplay(true), 10000);
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$workspaces$2f$FTP$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        "data-orchids-id": "src/components/sections/hero-banner.tsx:73:4",
        "data-orchids-name": "section",
        className: "w-full",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$workspaces$2f$FTP$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            "data-orchids-id": "src/components/sections/hero-banner.tsx:74:6",
            "data-orchids-name": "div",
            className: "container",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$workspaces$2f$FTP$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                "data-orchids-id": "src/components/sections/hero-banner.tsx:75:8",
                "data-orchids-name": "div",
                className: "relative group rounded-xl overflow-hidden h-80 md:h-96",
                children: [
                    bannerData.map((banner, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$workspaces$2f$FTP$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            "data-map-index": index,
                            "data-orchids-id": "src/components/sections/hero-banner.tsx:78:12@bannerData",
                            "data-orchids-name": "div",
                            className: `absolute inset-0 transition-all duration-500 ease-in-out ${index === currentSlide ? 'opacity-100 translate-x-0' : index < currentSlide ? 'opacity-0 -translate-x-full' : 'opacity-0 translate-x-full'}`,
                            style: banner.image ? {
                                background: `url(${banner.image}) center/cover no-repeat`
                            } : {
                                background: banner.background
                            },
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$workspaces$2f$FTP$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                "data-map-index": index,
                                "data-orchids-id": "src/components/sections/hero-banner.tsx:91:14@bannerData",
                                "data-orchids-name": "div",
                                className: "relative h-full flex items-center justify-between p-8 md:p-12",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$workspaces$2f$FTP$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        "data-map-index": index,
                                        "data-orchids-id": "src/components/sections/hero-banner.tsx:93:16@bannerData",
                                        "data-orchids-name": "div",
                                        className: "flex-1 text-white",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$workspaces$2f$FTP$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                "data-map-index": index,
                                                "data-orchids-id": "src/components/sections/hero-banner.tsx:94:18@bannerData",
                                                "data-orchids-name": "div",
                                                className: "mb-4",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$workspaces$2f$FTP$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    "data-map-index": index,
                                                    "data-orchids-id": "src/components/sections/hero-banner.tsx:95:20@bannerData",
                                                    "data-orchids-name": "span",
                                                    className: "inline-block px-3 py-1 bg-white/20 backdrop-blur-sm rounded-full text-sm font-medium",
                                                    children: banner.discount
                                                }, void 0, false, {
                                                    fileName: "[project]/workspaces/FTP/src/components/sections/hero-banner.tsx",
                                                    lineNumber: 95,
                                                    columnNumber: 21
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/workspaces/FTP/src/components/sections/hero-banner.tsx",
                                                lineNumber: 94,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$workspaces$2f$FTP$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                                "data-map-index": index,
                                                "data-orchids-id": "src/components/sections/hero-banner.tsx:99:18@bannerData",
                                                "data-orchids-name": "h1",
                                                className: "text-3xl md:text-5xl font-bold mb-2",
                                                children: banner.title
                                            }, void 0, false, {
                                                fileName: "[project]/workspaces/FTP/src/components/sections/hero-banner.tsx",
                                                lineNumber: 99,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$workspaces$2f$FTP$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                "data-map-index": index,
                                                "data-orchids-id": "src/components/sections/hero-banner.tsx:100:18@bannerData",
                                                "data-orchids-name": "p",
                                                className: "text-lg md:text-xl text-white/90 mb-2",
                                                children: banner.subtitle
                                            }, void 0, false, {
                                                fileName: "[project]/workspaces/FTP/src/components/sections/hero-banner.tsx",
                                                lineNumber: 100,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$workspaces$2f$FTP$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                "data-map-index": index,
                                                "data-orchids-id": "src/components/sections/hero-banner.tsx:101:18@bannerData",
                                                "data-orchids-name": "p",
                                                className: "text-white/80 mb-6 max-w-md",
                                                children: banner.description
                                            }, void 0, false, {
                                                fileName: "[project]/workspaces/FTP/src/components/sections/hero-banner.tsx",
                                                lineNumber: 101,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$workspaces$2f$FTP$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                "data-map-index": index,
                                                "data-orchids-id": "src/components/sections/hero-banner.tsx:102:18@bannerData",
                                                "data-orchids-name": "a",
                                                href: banner.href,
                                                className: "inline-block px-6 py-3 brand-gradient text-primary-foreground font-semibold rounded-xl brand-glow hover:scale-105 transition-transform",
                                                children: banner.buttonText
                                            }, void 0, false, {
                                                fileName: "[project]/workspaces/FTP/src/components/sections/hero-banner.tsx",
                                                lineNumber: 102,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/workspaces/FTP/src/components/sections/hero-banner.tsx",
                                        lineNumber: 93,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$workspaces$2f$FTP$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        "data-map-index": index,
                                        "data-orchids-id": "src/components/sections/hero-banner.tsx:111:16@bannerData",
                                        "data-orchids-name": "div",
                                        className: "hidden md:flex items-center justify-center w-48 h-48 bg-white/10 backdrop-blur-sm rounded-full",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$workspaces$2f$FTP$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            "data-map-index": index,
                                            "data-orchids-id": "src/components/sections/hero-banner.tsx:112:18@bannerData",
                                            "data-orchids-name": "div",
                                            className: "w-24 h-24 bg-white/20 rounded-full flex items-center justify-center",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$workspaces$2f$FTP$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                "data-map-index": index,
                                                "data-orchids-id": "src/components/sections/hero-banner.tsx:113:20@bannerData",
                                                "data-orchids-name": "span",
                                                className: "text-2xl font-bold text-white",
                                                children: banner.title.split(' ').map((word)=>word[0]).join('')
                                            }, void 0, false, {
                                                fileName: "[project]/workspaces/FTP/src/components/sections/hero-banner.tsx",
                                                lineNumber: 113,
                                                columnNumber: 21
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/workspaces/FTP/src/components/sections/hero-banner.tsx",
                                            lineNumber: 112,
                                            columnNumber: 19
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/workspaces/FTP/src/components/sections/hero-banner.tsx",
                                        lineNumber: 111,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/workspaces/FTP/src/components/sections/hero-banner.tsx",
                                lineNumber: 91,
                                columnNumber: 15
                            }, this)
                        }, banner.id, false, {
                            fileName: "[project]/workspaces/FTP/src/components/sections/hero-banner.tsx",
                            lineNumber: 78,
                            columnNumber: 13
                        }, this)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$workspaces$2f$FTP$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        "data-orchids-id": "src/components/sections/hero-banner.tsx:123:10@goToPrevious",
                        "data-orchids-name": "button",
                        onClick: goToPrevious,
                        className: "absolute top-1/2 left-4 -translate-y-1/2 bg-black/30 backdrop-blur-sm text-white p-2 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300 hover:bg-black/50",
                        "aria-label": "Previous slide",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$workspaces$2f$FTP$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$workspaces$2f$FTP$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$left$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronLeft$3e$__["ChevronLeft"], {
                            "data-orchids-id": "src/components/sections/hero-banner.tsx:128:12",
                            "data-orchids-name": "ChevronLeft",
                            size: 24
                        }, void 0, false, {
                            fileName: "[project]/workspaces/FTP/src/components/sections/hero-banner.tsx",
                            lineNumber: 128,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/workspaces/FTP/src/components/sections/hero-banner.tsx",
                        lineNumber: 123,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$workspaces$2f$FTP$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        "data-orchids-id": "src/components/sections/hero-banner.tsx:131:10@goToNext",
                        "data-orchids-name": "button",
                        onClick: goToNext,
                        className: "absolute top-1/2 right-4 -translate-y-1/2 bg-black/30 backdrop-blur-sm text-white p-2 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300 hover:bg-black/50",
                        "aria-label": "Next slide",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$workspaces$2f$FTP$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$workspaces$2f$FTP$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronRight$3e$__["ChevronRight"], {
                            "data-orchids-id": "src/components/sections/hero-banner.tsx:136:12",
                            "data-orchids-name": "ChevronRight",
                            size: 24
                        }, void 0, false, {
                            fileName: "[project]/workspaces/FTP/src/components/sections/hero-banner.tsx",
                            lineNumber: 136,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/workspaces/FTP/src/components/sections/hero-banner.tsx",
                        lineNumber: 131,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$workspaces$2f$FTP$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        "data-orchids-id": "src/components/sections/hero-banner.tsx:140:10",
                        "data-orchids-name": "div",
                        className: "absolute bottom-4 left-1/2 -translate-x-1/2 flex items-center space-x-2",
                        children: bannerData.map((_, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$workspaces$2f$FTP$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                "data-map-index": index,
                                "data-orchids-id": "src/components/sections/hero-banner.tsx:142:14@bannerData",
                                "data-orchids-name": "button",
                                onClick: ()=>goToSlide(index),
                                className: `w-2 h-2 rounded-full transition-all duration-300 ${index === currentSlide ? 'bg-white scale-125' : 'bg-white/50 hover:bg-white/75'}`,
                                "aria-label": `Go to slide ${index + 1}`
                            }, index, false, {
                                fileName: "[project]/workspaces/FTP/src/components/sections/hero-banner.tsx",
                                lineNumber: 142,
                                columnNumber: 15
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/workspaces/FTP/src/components/sections/hero-banner.tsx",
                        lineNumber: 140,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/workspaces/FTP/src/components/sections/hero-banner.tsx",
                lineNumber: 75,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/workspaces/FTP/src/components/sections/hero-banner.tsx",
            lineNumber: 74,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/workspaces/FTP/src/components/sections/hero-banner.tsx",
        lineNumber: 73,
        columnNumber: 5
    }, this);
};
_s(HeroBanner, "M9GUNeUYR2PDwEXaFeHY025SbGY=");
_c = HeroBanner;
const __TURBOPACK__default__export__ = HeroBanner;
var _c;
__turbopack_context__.k.register(_c, "HeroBanner");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/workspaces/FTP/src/components/sections/popular-items.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>PopularItems)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$workspaces$2f$FTP$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/workspaces/FTP/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$workspaces$2f$FTP$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$star$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Star$3e$__ = __turbopack_context__.i("[project]/workspaces/FTP/node_modules/lucide-react/dist/esm/icons/star.js [app-client] (ecmascript) <export default as Star>");
var __TURBOPACK__imported__module__$5b$project$5d2f$workspaces$2f$FTP$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trending$2d$up$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__TrendingUp$3e$__ = __turbopack_context__.i("[project]/workspaces/FTP/node_modules/lucide-react/dist/esm/icons/trending-up.js [app-client] (ecmascript) <export default as TrendingUp>");
var __TURBOPACK__imported__module__$5b$project$5d2f$workspaces$2f$FTP$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$shopping$2d$cart$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ShoppingCart$3e$__ = __turbopack_context__.i("[project]/workspaces/FTP/node_modules/lucide-react/dist/esm/icons/shopping-cart.js [app-client] (ecmascript) <export default as ShoppingCart>");
'use client';
;
;
const popularItems = [
    {
        id: '1',
        name: '980 Кристаллов сотворения',
        price: 980,
        originalPrice: 1080,
        discount: '10%',
        image: 'https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/5342e257-e4b8-4597-b5e4-106a1f7fb6b8-seagm-com/assets/images/1942-27.jpg',
        game: 'Genshin Impact',
        gameIcon: '🌟',
        isMostPopular: true,
        category: 'crystal'
    },
    {
        id: '2',
        name: 'Благословение полой луны',
        price: 300,
        image: 'https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/5342e257-e4b8-4597-b5e4-106a1f7fb6b8-seagm-com/assets/images/1942-27.jpg',
        game: 'Genshin Impact',
        gameIcon: '🌟',
        isMostPopular: true,
        category: 'subscription'
    },
    {
        id: '3',
        name: '980 Онериковых осколков',
        price: 980,
        originalPrice: 1080,
        discount: '10%',
        image: 'https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/5342e257-e4b8-4597-b5e4-106a1f7fb6b8-seagm-com/assets/images/1942-27.jpg',
        game: 'Honkai: Star Rail',
        gameIcon: '🚂',
        isMostPopular: true,
        category: 'crystal'
    },
    {
        id: '4',
        name: 'Жемчужный гимн',
        price: 635,
        image: 'https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/5342e257-e4b8-4597-b5e4-106a1f7fb6b8-seagm-com/assets/images/1942-27.jpg',
        game: 'Genshin Impact',
        gameIcon: '🌟',
        category: 'battlepass'
    },
    {
        id: '5',
        name: '980 Моноскипов',
        price: 980,
        image: 'https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/5342e257-e4b8-4597-b5e4-106a1f7fb6b8-seagm-com/assets/images/2705-24.jpg',
        game: 'Zenless Zone Zero',
        gameIcon: '⚡',
        category: 'crystal'
    },
    {
        id: '6',
        name: 'Пропуск экспресса',
        price: 300,
        image: 'https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/5342e257-e4b8-4597-b5e4-106a1f7fb6b8-seagm-com/assets/images/1942-27.jpg',
        game: 'Honkai: Star Rail',
        gameIcon: '🚂',
        category: 'subscription'
    }
];
function PopularItems() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$workspaces$2f$FTP$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        "data-orchids-id": "src/components/sections/popular-items.tsx:84:4",
        "data-orchids-name": "section",
        className: "container",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$workspaces$2f$FTP$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                "data-orchids-id": "src/components/sections/popular-items.tsx:86:6",
                "data-orchids-name": "div",
                className: "flex items-center justify-between mb-12",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$workspaces$2f$FTP$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        "data-orchids-id": "src/components/sections/popular-items.tsx:87:8",
                        "data-orchids-name": "div",
                        className: "flex items-center gap-4",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$workspaces$2f$FTP$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                "data-orchids-id": "src/components/sections/popular-items.tsx:88:10",
                                "data-orchids-name": "div",
                                className: "flex items-center justify-center w-12 h-12 rounded-2xl brand-gradient brand-glow",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$workspaces$2f$FTP$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$workspaces$2f$FTP$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trending$2d$up$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__TrendingUp$3e$__["TrendingUp"], {
                                    "data-orchids-id": "src/components/sections/popular-items.tsx:89:12",
                                    "data-orchids-name": "TrendingUp",
                                    className: "w-5 h-5 text-primary-foreground"
                                }, void 0, false, {
                                    fileName: "[project]/workspaces/FTP/src/components/sections/popular-items.tsx",
                                    lineNumber: 89,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/workspaces/FTP/src/components/sections/popular-items.tsx",
                                lineNumber: 88,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$workspaces$2f$FTP$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                "data-orchids-id": "src/components/sections/popular-items.tsx:91:10",
                                "data-orchids-name": "div",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$workspaces$2f$FTP$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                        "data-orchids-id": "src/components/sections/popular-items.tsx:92:12",
                                        "data-orchids-name": "h2",
                                        className: "text-3xl font-bold text-foreground",
                                        children: "Самые популярные товары"
                                    }, void 0, false, {
                                        fileName: "[project]/workspaces/FTP/src/components/sections/popular-items.tsx",
                                        lineNumber: 92,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$workspaces$2f$FTP$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        "data-orchids-id": "src/components/sections/popular-items.tsx:95:12",
                                        "data-orchids-name": "p",
                                        className: "text-muted-foreground mt-1",
                                        children: "Топовые предложения из всех игр"
                                    }, void 0, false, {
                                        fileName: "[project]/workspaces/FTP/src/components/sections/popular-items.tsx",
                                        lineNumber: 95,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/workspaces/FTP/src/components/sections/popular-items.tsx",
                                lineNumber: 91,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/workspaces/FTP/src/components/sections/popular-items.tsx",
                        lineNumber: 87,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$workspaces$2f$FTP$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        "data-orchids-id": "src/components/sections/popular-items.tsx:100:8",
                        "data-orchids-name": "button",
                        className: "text-brand hover:text-brand-2 font-medium transition-colors duration-200",
                        children: "Просмотреть больше →"
                    }, void 0, false, {
                        fileName: "[project]/workspaces/FTP/src/components/sections/popular-items.tsx",
                        lineNumber: 100,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/workspaces/FTP/src/components/sections/popular-items.tsx",
                lineNumber: 86,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$workspaces$2f$FTP$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                "data-orchids-id": "src/components/sections/popular-items.tsx:106:6",
                "data-orchids-name": "div",
                className: "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12",
                children: popularItems.map((item)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$workspaces$2f$FTP$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        "data-orchids-id": "src/components/sections/popular-items.tsx:108:10@popularItems",
                        "data-orchids-name": "div",
                        className: "group relative bg-card border border-stroke rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105",
                        children: [
                            item.isMostPopular && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$workspaces$2f$FTP$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                "data-orchids-id": "src/components/sections/popular-items.tsx:114:14@popularItems",
                                "data-orchids-name": "div",
                                className: "absolute top-4 left-4 z-10",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$workspaces$2f$FTP$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    "data-orchids-id": "src/components/sections/popular-items.tsx:115:16@popularItems",
                                    "data-orchids-name": "div",
                                    className: "bg-yellow-500 text-black text-xs font-bold px-3 py-1 rounded-full flex items-center gap-1",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$workspaces$2f$FTP$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$workspaces$2f$FTP$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$star$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Star$3e$__["Star"], {
                                            "data-orchids-id": "src/components/sections/popular-items.tsx:116:18@popularItems",
                                            "data-orchids-name": "Star",
                                            className: "w-3 h-3 fill-current"
                                        }, void 0, false, {
                                            fileName: "[project]/workspaces/FTP/src/components/sections/popular-items.tsx",
                                            lineNumber: 116,
                                            columnNumber: 19
                                        }, this),
                                        "Хит продаж"
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/workspaces/FTP/src/components/sections/popular-items.tsx",
                                    lineNumber: 115,
                                    columnNumber: 17
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/workspaces/FTP/src/components/sections/popular-items.tsx",
                                lineNumber: 114,
                                columnNumber: 15
                            }, this),
                            item.discount && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$workspaces$2f$FTP$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                "data-orchids-id": "src/components/sections/popular-items.tsx:124:14@popularItems",
                                "data-orchids-name": "div",
                                className: "absolute top-4 right-4 z-10",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$workspaces$2f$FTP$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    "data-orchids-id": "src/components/sections/popular-items.tsx:125:16@popularItems",
                                    "data-orchids-name": "div",
                                    className: "bg-destructive text-destructive-foreground text-xs font-bold px-2 py-1 rounded-full",
                                    children: [
                                        "-",
                                        item.discount
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/workspaces/FTP/src/components/sections/popular-items.tsx",
                                    lineNumber: 125,
                                    columnNumber: 17
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/workspaces/FTP/src/components/sections/popular-items.tsx",
                                lineNumber: 124,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$workspaces$2f$FTP$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                "data-orchids-id": "src/components/sections/popular-items.tsx:131:12@popularItems",
                                "data-orchids-name": "div",
                                className: "space-y-4",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$workspaces$2f$FTP$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        "data-orchids-id": "src/components/sections/popular-items.tsx:133:14@popularItems",
                                        "data-orchids-name": "div",
                                        className: "w-full h-32 bg-muted rounded-xl overflow-hidden group-hover:scale-105 transition-transform duration-300",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$workspaces$2f$FTP$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                            "data-orchids-id": "src/components/sections/popular-items.tsx:134:16@popularItems",
                                            "data-orchids-name": "img",
                                            src: item.image,
                                            alt: item.name,
                                            className: "w-full h-full object-cover"
                                        }, void 0, false, {
                                            fileName: "[project]/workspaces/FTP/src/components/sections/popular-items.tsx",
                                            lineNumber: 134,
                                            columnNumber: 17
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/workspaces/FTP/src/components/sections/popular-items.tsx",
                                        lineNumber: 133,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$workspaces$2f$FTP$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        "data-orchids-id": "src/components/sections/popular-items.tsx:142:14@popularItems",
                                        "data-orchids-name": "div",
                                        className: "flex items-center gap-2",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$workspaces$2f$FTP$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                "data-orchids-id": "src/components/sections/popular-items.tsx:143:16@popularItems",
                                                "data-orchids-name": "div",
                                                className: "text-lg",
                                                children: item.gameIcon
                                            }, void 0, false, {
                                                fileName: "[project]/workspaces/FTP/src/components/sections/popular-items.tsx",
                                                lineNumber: 143,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$workspaces$2f$FTP$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                "data-orchids-id": "src/components/sections/popular-items.tsx:144:16@popularItems",
                                                "data-orchids-name": "span",
                                                className: "text-sm text-muted-foreground font-medium",
                                                children: item.game
                                            }, void 0, false, {
                                                fileName: "[project]/workspaces/FTP/src/components/sections/popular-items.tsx",
                                                lineNumber: 144,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$workspaces$2f$FTP$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                "data-orchids-id": "src/components/sections/popular-items.tsx:147:16@popularItems",
                                                "data-orchids-name": "div",
                                                className: `text-xs px-2 py-1 rounded-full ${item.category === 'crystal' ? 'bg-blue-500/20 text-blue-400 border border-blue-500/30' : item.category === 'subscription' ? 'bg-green-500/20 text-green-400 border border-green-500/30' : 'bg-purple-500/20 text-purple-400 border border-purple-500/30'}`,
                                                children: item.category === 'crystal' ? 'Кристаллы' : item.category === 'subscription' ? 'Подписка' : 'Батл Пасс'
                                            }, void 0, false, {
                                                fileName: "[project]/workspaces/FTP/src/components/sections/popular-items.tsx",
                                                lineNumber: 147,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/workspaces/FTP/src/components/sections/popular-items.tsx",
                                        lineNumber: 142,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$workspaces$2f$FTP$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        "data-orchids-id": "src/components/sections/popular-items.tsx:163:14@popularItems",
                                        "data-orchids-name": "div",
                                        className: "space-y-2",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$workspaces$2f$FTP$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                "data-orchids-id": "src/components/sections/popular-items.tsx:164:16@popularItems",
                                                "data-orchids-name": "h3",
                                                className: "font-semibold text-card-foreground text-lg leading-tight group-hover:text-brand transition-colors duration-200",
                                                children: item.name
                                            }, void 0, false, {
                                                fileName: "[project]/workspaces/FTP/src/components/sections/popular-items.tsx",
                                                lineNumber: 164,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$workspaces$2f$FTP$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                "data-orchids-id": "src/components/sections/popular-items.tsx:169:16@popularItems",
                                                "data-orchids-name": "div",
                                                className: "flex items-center gap-2",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$workspaces$2f$FTP$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        "data-orchids-id": "src/components/sections/popular-items.tsx:170:18@popularItems",
                                                        "data-orchids-name": "span",
                                                        className: "text-2xl font-bold text-brand",
                                                        children: [
                                                            new Intl.NumberFormat('ru-RU').format(item.price),
                                                            " ₽"
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/workspaces/FTP/src/components/sections/popular-items.tsx",
                                                        lineNumber: 170,
                                                        columnNumber: 19
                                                    }, this),
                                                    item.originalPrice && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$workspaces$2f$FTP$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        "data-orchids-id": "src/components/sections/popular-items.tsx:174:20@popularItems",
                                                        "data-orchids-name": "span",
                                                        className: "text-sm text-muted-foreground line-through",
                                                        children: [
                                                            new Intl.NumberFormat('ru-RU').format(item.originalPrice),
                                                            " ₽"
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/workspaces/FTP/src/components/sections/popular-items.tsx",
                                                        lineNumber: 174,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/workspaces/FTP/src/components/sections/popular-items.tsx",
                                                lineNumber: 169,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/workspaces/FTP/src/components/sections/popular-items.tsx",
                                        lineNumber: 163,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$workspaces$2f$FTP$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        "data-orchids-id": "src/components/sections/popular-items.tsx:182:14@popularItems",
                                        "data-orchids-name": "button",
                                        onClick: async ()=>{
                                            const api = await __turbopack_context__.r("[project]/workspaces/FTP/src/lib/api.ts [app-client] (ecmascript, async loader)")(__turbopack_context__.i);
                                            const r = await api.addToCart(item.id, 1, item.name, item.price);
                                            const toast = (await __turbopack_context__.r("[project]/workspaces/FTP/src/lib/toast.ts [app-client] (ecmascript, async loader)")(__turbopack_context__.i)).toast;
                                            if (r.ok === false || r.status && r.status >= 400) {
                                                toast('Ошибка');
                                            } else toast('Добавлено в корзину');
                                        },
                                        className: "w-full brand-gradient text-primary-foreground font-bold py-3 px-6 rounded-xl brand-glow hover:scale-105 transition-transform flex items-center justify-center gap-2",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$workspaces$2f$FTP$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$workspaces$2f$FTP$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$shopping$2d$cart$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ShoppingCart$3e$__["ShoppingCart"], {
                                                "data-orchids-id": "src/components/sections/popular-items.tsx:190:16@popularItems",
                                                "data-orchids-name": "ShoppingCart",
                                                className: "w-4 h-4"
                                            }, void 0, false, {
                                                fileName: "[project]/workspaces/FTP/src/components/sections/popular-items.tsx",
                                                lineNumber: 190,
                                                columnNumber: 17
                                            }, this),
                                            "В корзину"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/workspaces/FTP/src/components/sections/popular-items.tsx",
                                        lineNumber: 182,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/workspaces/FTP/src/components/sections/popular-items.tsx",
                                lineNumber: 131,
                                columnNumber: 13
                            }, this)
                        ]
                    }, item.id, true, {
                        fileName: "[project]/workspaces/FTP/src/components/sections/popular-items.tsx",
                        lineNumber: 108,
                        columnNumber: 11
                    }, this))
            }, void 0, false, {
                fileName: "[project]/workspaces/FTP/src/components/sections/popular-items.tsx",
                lineNumber: 106,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/workspaces/FTP/src/components/sections/popular-items.tsx",
        lineNumber: 84,
        columnNumber: 5
    }, this);
}
_c = PopularItems;
var _c;
__turbopack_context__.k.register(_c, "PopularItems");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/workspaces/FTP/src/components/sections/game-sections.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>GameSections)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$workspaces$2f$FTP$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/workspaces/FTP/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$workspaces$2f$FTP$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/workspaces/FTP/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$workspaces$2f$FTP$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$shopping$2d$cart$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ShoppingCart$3e$__ = __turbopack_context__.i("[project]/workspaces/FTP/node_modules/lucide-react/dist/esm/icons/shopping-cart.js [app-client] (ecmascript) <export default as ShoppingCart>");
var __TURBOPACK__imported__module__$5b$project$5d2f$workspaces$2f$FTP$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$coins$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Coins$3e$__ = __turbopack_context__.i("[project]/workspaces/FTP/node_modules/lucide-react/dist/esm/icons/coins.js [app-client] (ecmascript) <export default as Coins>");
var __TURBOPACK__imported__module__$5b$project$5d2f$workspaces$2f$FTP$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$calendar$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Calendar$3e$__ = __turbopack_context__.i("[project]/workspaces/FTP/node_modules/lucide-react/dist/esm/icons/calendar.js [app-client] (ecmascript) <export default as Calendar>");
var __TURBOPACK__imported__module__$5b$project$5d2f$workspaces$2f$FTP$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$award$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Award$3e$__ = __turbopack_context__.i("[project]/workspaces/FTP/node_modules/lucide-react/dist/esm/icons/award.js [app-client] (ecmascript) <export default as Award>");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
const games = [
    {
        id: 'genshin',
        name: 'Genshin Impact',
        shortName: 'GI',
        brandColor: '#4A90E2',
        gradientFrom: '#4A90E2',
        gradientTo: '#7B68EE',
        crystalName: 'Кристаллы сотворения',
        subscriptionName: 'Благословение полой луны',
        logo: '🌟'
    },
    {
        id: 'hsr',
        name: 'Honkai: Star Rail',
        shortName: 'HSR',
        brandColor: '#F39C12',
        gradientFrom: '#F39C12',
        gradientTo: '#E67E22',
        crystalName: 'Онериковые осколки',
        subscriptionName: 'Пропуск экспресса',
        logo: '🚂'
    },
    {
        id: 'zzz',
        name: 'Zenless Zone Zero',
        shortName: 'ZZZ',
        brandColor: '#E74C3C',
        gradientFrom: '#E74C3C',
        gradientTo: '#C0392B',
        crystalName: 'Моноскипы',
        subscriptionName: 'Месячный пропуск',
        logo: '⚡'
    }
];
const generateProducts = (game)=>[
        // Crystals
        {
            id: `${game.id}-crystal-6480`,
            name: `6480 ${game.crystalName}`,
            amount: 6480,
            price: 6400,
            currency: '₽',
            type: 'crystal'
        },
        {
            id: `${game.id}-crystal-3280`,
            name: `3280 ${game.crystalName}`,
            amount: 3280,
            price: 3280,
            currency: '₽',
            type: 'crystal'
        },
        {
            id: `${game.id}-crystal-1980`,
            name: `1980 ${game.crystalName}`,
            amount: 1980,
            price: 1980,
            currency: '₽',
            type: 'crystal'
        },
        {
            id: `${game.id}-crystal-980`,
            name: `980 ${game.crystalName}`,
            amount: 980,
            price: 980,
            currency: '₽',
            type: 'crystal'
        },
        {
            id: `${game.id}-crystal-300`,
            name: `300 ${game.crystalName}`,
            amount: 300,
            price: 300,
            currency: '₽',
            type: 'crystal'
        },
        {
            id: `${game.id}-crystal-60`,
            name: `60 ${game.crystalName}`,
            amount: 60,
            price: 60,
            currency: '₽',
            type: 'crystal'
        },
        // Subscriptions
        {
            id: `${game.id}-subscription`,
            name: game.subscriptionName,
            amount: 1,
            price: 300,
            currency: '₽',
            type: 'subscription'
        },
        // Battle Pass
        {
            id: `${game.id}-bp-basic`,
            name: 'Жемчужный гимн',
            amount: 1,
            price: 635,
            currency: '₽',
            type: 'battlepass'
        },
        {
            id: `${game.id}-bp-premium`,
            name: 'Жемчужный хор',
            amount: 1,
            price: 1250,
            currency: '₽',
            type: 'battlepass'
        }
    ];
const getProductIcon = (type)=>{
    switch(type){
        case 'crystal':
            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$workspaces$2f$FTP$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$workspaces$2f$FTP$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$coins$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Coins$3e$__["Coins"], {
                "data-orchids-id": "src/components/sections/game-sections.tsx:84:13",
                "data-orchids-name": "Coins",
                className: "w-4 h-4"
            }, void 0, false, {
                fileName: "[project]/workspaces/FTP/src/components/sections/game-sections.tsx",
                lineNumber: 84,
                columnNumber: 14
            }, this);
        case 'subscription':
            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$workspaces$2f$FTP$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$workspaces$2f$FTP$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$calendar$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Calendar$3e$__["Calendar"], {
                "data-orchids-id": "src/components/sections/game-sections.tsx:86:13",
                "data-orchids-name": "Calendar",
                className: "w-4 h-4"
            }, void 0, false, {
                fileName: "[project]/workspaces/FTP/src/components/sections/game-sections.tsx",
                lineNumber: 86,
                columnNumber: 14
            }, this);
        case 'battlepass':
            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$workspaces$2f$FTP$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$workspaces$2f$FTP$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$award$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Award$3e$__["Award"], {
                "data-orchids-id": "src/components/sections/game-sections.tsx:88:13",
                "data-orchids-name": "Award",
                className: "w-4 h-4"
            }, void 0, false, {
                fileName: "[project]/workspaces/FTP/src/components/sections/game-sections.tsx",
                lineNumber: 88,
                columnNumber: 14
            }, this);
        default:
            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$workspaces$2f$FTP$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$workspaces$2f$FTP$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$coins$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Coins$3e$__["Coins"], {
                "data-orchids-id": "src/components/sections/game-sections.tsx:90:13",
                "data-orchids-name": "Coins",
                className: "w-4 h-4"
            }, void 0, false, {
                fileName: "[project]/workspaces/FTP/src/components/sections/game-sections.tsx",
                lineNumber: 90,
                columnNumber: 14
            }, this);
    }
};
function GameSections() {
    _s();
    const [selectedTab, setSelectedTab] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$workspaces$2f$FTP$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({});
    const handleAddToCart = async (product, game)=>{
        try {
            // use helper if available
            // dynamic import to avoid circular
            const api = await __turbopack_context__.r("[project]/workspaces/FTP/src/lib/api.ts [app-client] (ecmascript, async loader)")(__turbopack_context__.i);
            const toast = (await __turbopack_context__.r("[project]/workspaces/FTP/src/lib/toast.ts [app-client] (ecmascript, async loader)")(__turbopack_context__.i)).toast;
            const r = await api.addToCart(product.id, 1, product.name, product.price);
            if (r.ok === false || r.status && r.status >= 400) {
                toast('Ошибка при добавлении в корзину');
                return;
            }
            toast('Добавлено в корзину');
        } catch (e) {
            console.error(e);
            const toast = (await __turbopack_context__.r("[project]/workspaces/FTP/src/lib/toast.ts [app-client] (ecmascript, async loader)")(__turbopack_context__.i)).toast;
            toast('Ошибка при добавлении');
        }
    };
    const getTabKey = (gameId)=>selectedTab[gameId] || 'crystals';
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$workspaces$2f$FTP$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        "data-orchids-id": "src/components/sections/game-sections.tsx:119:4",
        "data-orchids-name": "div",
        className: "container space-y-16",
        children: games.map((game)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$workspaces$2f$FTP$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                "data-orchids-id": "src/components/sections/game-sections.tsx:121:8@games",
                "data-orchids-name": "section",
                id: game.id,
                className: "space-y-8",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$workspaces$2f$FTP$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        "data-orchids-id": "src/components/sections/game-sections.tsx:122:10@games",
                        "data-orchids-name": "div",
                        className: "flex items-center space-x-4",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$workspaces$2f$FTP$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                "data-orchids-id": "src/components/sections/game-sections.tsx:123:12@games",
                                "data-orchids-name": "div",
                                className: "w-16 h-16 rounded-2xl flex items-center justify-center text-3xl brand-glow",
                                style: {
                                    background: `linear-gradient(135deg, ${game.gradientFrom}, ${game.gradientTo})`,
                                    color: 'white'
                                },
                                children: game.logo
                            }, void 0, false, {
                                fileName: "[project]/workspaces/FTP/src/components/sections/game-sections.tsx",
                                lineNumber: 123,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$workspaces$2f$FTP$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                "data-orchids-id": "src/components/sections/game-sections.tsx:132:12@games",
                                "data-orchids-name": "div",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$workspaces$2f$FTP$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                        "data-orchids-id": "src/components/sections/game-sections.tsx:133:14@games",
                                        "data-orchids-name": "h2",
                                        className: "text-3xl font-bold text-foreground",
                                        children: game.name
                                    }, void 0, false, {
                                        fileName: "[project]/workspaces/FTP/src/components/sections/game-sections.tsx",
                                        lineNumber: 133,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$workspaces$2f$FTP$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        "data-orchids-id": "src/components/sections/game-sections.tsx:134:14@games",
                                        "data-orchids-name": "p",
                                        className: "text-muted-foreground",
                                        children: "Каталог донатов"
                                    }, void 0, false, {
                                        fileName: "[project]/workspaces/FTP/src/components/sections/game-sections.tsx",
                                        lineNumber: 134,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/workspaces/FTP/src/components/sections/game-sections.tsx",
                                lineNumber: 132,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/workspaces/FTP/src/components/sections/game-sections.tsx",
                        lineNumber: 122,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$workspaces$2f$FTP$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        "data-orchids-id": "src/components/sections/game-sections.tsx:139:10@games",
                        "data-orchids-name": "div",
                        className: "flex gap-3 flex-wrap",
                        children: [
                            {
                                key: 'crystals',
                                label: 'Кристаллы',
                                icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$workspaces$2f$FTP$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$workspaces$2f$FTP$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$coins$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Coins$3e$__["Coins"], {
                                    "data-orchids-id": "src/components/sections/game-sections.tsx:141:59",
                                    "data-orchids-name": "Coins",
                                    className: "w-4 h-4"
                                }, void 0, false, {
                                    fileName: "[project]/workspaces/FTP/src/components/sections/game-sections.tsx",
                                    lineNumber: 141,
                                    columnNumber: 60
                                }, this)
                            },
                            {
                                key: 'subscriptions',
                                label: 'Подписки',
                                icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$workspaces$2f$FTP$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$workspaces$2f$FTP$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$calendar$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Calendar$3e$__["Calendar"], {
                                    "data-orchids-id": "src/components/sections/game-sections.tsx:142:63",
                                    "data-orchids-name": "Calendar",
                                    className: "w-4 h-4"
                                }, void 0, false, {
                                    fileName: "[project]/workspaces/FTP/src/components/sections/game-sections.tsx",
                                    lineNumber: 142,
                                    columnNumber: 64
                                }, this)
                            },
                            {
                                key: 'battlepass',
                                label: 'Боевой пропуск',
                                icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$workspaces$2f$FTP$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$workspaces$2f$FTP$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$award$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Award$3e$__["Award"], {
                                    "data-orchids-id": "src/components/sections/game-sections.tsx:143:66",
                                    "data-orchids-name": "Award",
                                    className: "w-4 h-4"
                                }, void 0, false, {
                                    fileName: "[project]/workspaces/FTP/src/components/sections/game-sections.tsx",
                                    lineNumber: 143,
                                    columnNumber: 67
                                }, this)
                            }
                        ].map((tab)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$workspaces$2f$FTP$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                "data-orchids-id": "src/components/sections/game-sections.tsx:145:14@games",
                                "data-orchids-name": "button",
                                onClick: ()=>setSelectedTab((prev)=>({
                                            ...prev,
                                            [game.id]: tab.key
                                        })),
                                className: `flex items-center gap-2 px-4 py-3 rounded-xl font-semibold transition-all ${getTabKey(game.id) === tab.key ? 'brand-gradient text-primary-foreground brand-glow' : 'bg-muted border border-stroke text-muted-foreground hover:border-brand-2'}`,
                                children: [
                                    tab.icon,
                                    tab.label
                                ]
                            }, tab.key, true, {
                                fileName: "[project]/workspaces/FTP/src/components/sections/game-sections.tsx",
                                lineNumber: 145,
                                columnNumber: 15
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/workspaces/FTP/src/components/sections/game-sections.tsx",
                        lineNumber: 139,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$workspaces$2f$FTP$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        "data-orchids-id": "src/components/sections/game-sections.tsx:161:10@games",
                        "data-orchids-name": "div",
                        className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6",
                        children: generateProducts(game).filter((p)=>{
                            const activeTab = getTabKey(game.id);
                            if (activeTab === 'crystals') return p.type === 'crystal';
                            if (activeTab === 'subscriptions') return p.type === 'subscription';
                            if (activeTab === 'battlepass') return p.type === 'battlepass';
                            return true;
                        }).map((product)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$workspaces$2f$FTP$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                "data-orchids-id": "src/components/sections/game-sections.tsx:171:16@games",
                                "data-orchids-name": "div",
                                className: "bg-card border border-stroke rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-200 hover:scale-105",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$workspaces$2f$FTP$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        "data-orchids-id": "src/components/sections/game-sections.tsx:175:18@games",
                                        "data-orchids-name": "div",
                                        className: "flex items-center gap-4 mb-4",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$workspaces$2f$FTP$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                "data-orchids-id": "src/components/sections/game-sections.tsx:176:20",
                                                "data-orchids-name": "div",
                                                className: "w-20 h-20 rounded-2xl flex items-center justify-center text-xl",
                                                style: {
                                                    background: `linear-gradient(135deg, ${game.gradientFrom}20, ${game.gradientTo}20)`,
                                                    border: `1px solid ${game.brandColor}30`
                                                },
                                                children: getProductIcon(product.type)
                                            }, void 0, false, {
                                                fileName: "[project]/workspaces/FTP/src/components/sections/game-sections.tsx",
                                                lineNumber: 176,
                                                columnNumber: 21
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$workspaces$2f$FTP$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                "data-orchids-id": "src/components/sections/game-sections.tsx:185:20",
                                                "data-orchids-name": "div",
                                                className: "flex-1",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$workspaces$2f$FTP$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                        "data-orchids-id": "src/components/sections/game-sections.tsx:186:22",
                                                        "data-orchids-name": "h3",
                                                        className: "font-semibold text-card-foreground text-lg mb-1",
                                                        children: product.name
                                                    }, void 0, false, {
                                                        fileName: "[project]/workspaces/FTP/src/components/sections/game-sections.tsx",
                                                        lineNumber: 186,
                                                        columnNumber: 23
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$workspaces$2f$FTP$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        "data-orchids-id": "src/components/sections/game-sections.tsx:187:22",
                                                        "data-orchids-name": "p",
                                                        className: "text-sm text-muted-foreground",
                                                        children: game.shortName
                                                    }, void 0, false, {
                                                        fileName: "[project]/workspaces/FTP/src/components/sections/game-sections.tsx",
                                                        lineNumber: 187,
                                                        columnNumber: 23
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/workspaces/FTP/src/components/sections/game-sections.tsx",
                                                lineNumber: 185,
                                                columnNumber: 21
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/workspaces/FTP/src/components/sections/game-sections.tsx",
                                        lineNumber: 175,
                                        columnNumber: 19
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$workspaces$2f$FTP$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        "data-orchids-id": "src/components/sections/game-sections.tsx:191:18@games",
                                        "data-orchids-name": "div",
                                        className: "mb-6",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$workspaces$2f$FTP$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            "data-orchids-id": "src/components/sections/game-sections.tsx:192:20",
                                            "data-orchids-name": "div",
                                            className: "text-3xl font-bold text-brand mb-1",
                                            children: [
                                                new Intl.NumberFormat('ru-RU').format(product.price),
                                                " ",
                                                product.currency
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/workspaces/FTP/src/components/sections/game-sections.tsx",
                                            lineNumber: 192,
                                            columnNumber: 21
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/workspaces/FTP/src/components/sections/game-sections.tsx",
                                        lineNumber: 191,
                                        columnNumber: 19
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$workspaces$2f$FTP$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        "data-orchids-id": "src/components/sections/game-sections.tsx:197:18@games",
                                        "data-orchids-name": "button",
                                        onClick: ()=>handleAddToCart(product, game),
                                        className: "w-full brand-gradient text-primary-foreground font-bold py-3 px-6 rounded-xl brand-glow hover:scale-105 transition-transform flex items-center justify-center gap-2",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$workspaces$2f$FTP$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$workspaces$2f$FTP$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$shopping$2d$cart$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ShoppingCart$3e$__["ShoppingCart"], {
                                                "data-orchids-id": "src/components/sections/game-sections.tsx:201:20",
                                                "data-orchids-name": "ShoppingCart",
                                                className: "w-4 h-4"
                                            }, void 0, false, {
                                                fileName: "[project]/workspaces/FTP/src/components/sections/game-sections.tsx",
                                                lineNumber: 201,
                                                columnNumber: 21
                                            }, this),
                                            "В корзину"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/workspaces/FTP/src/components/sections/game-sections.tsx",
                                        lineNumber: 197,
                                        columnNumber: 19
                                    }, this)
                                ]
                            }, product.id, true, {
                                fileName: "[project]/workspaces/FTP/src/components/sections/game-sections.tsx",
                                lineNumber: 171,
                                columnNumber: 17
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/workspaces/FTP/src/components/sections/game-sections.tsx",
                        lineNumber: 161,
                        columnNumber: 11
                    }, this)
                ]
            }, game.id, true, {
                fileName: "[project]/workspaces/FTP/src/components/sections/game-sections.tsx",
                lineNumber: 121,
                columnNumber: 9
            }, this))
    }, void 0, false, {
        fileName: "[project]/workspaces/FTP/src/components/sections/game-sections.tsx",
        lineNumber: 119,
        columnNumber: 5
    }, this);
}
_s(GameSections, "97gOMVc2TsvBAN7JCWrXv2fE0cU=");
_c = GameSections;
var _c;
__turbopack_context__.k.register(_c, "GameSections");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
}]);

//# sourceMappingURL=workspaces_FTP_src_24bb35a9._.js.map