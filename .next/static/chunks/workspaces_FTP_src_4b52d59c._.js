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
"[project]/workspaces/FTP/src/components/ui/AuthDialog.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>AuthDialog)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$workspaces$2f$FTP$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/workspaces/FTP/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$workspaces$2f$FTP$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/workspaces/FTP/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$workspaces$2f$FTP$2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/workspaces/FTP/src/components/ui/button.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$workspaces$2f$FTP$2f$src$2f$lib$2f$toast$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/workspaces/FTP/src/lib/toast.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature(), _s1 = __turbopack_context__.k.signature(), _s2 = __turbopack_context__.k.signature();
"use client";
;
;
;
function AuthDialog({ open, onClose }) {
    _s();
    const [mode, setMode] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$workspaces$2f$FTP$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('login');
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$workspaces$2f$FTP$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        "data-orchids-id": "src/components/ui/AuthDialog.tsx:10:4",
        "data-orchids-name": "div",
        className: open ? "fixed inset-0 z-50 flex items-center justify-center bg-black/60" : "hidden",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$workspaces$2f$FTP$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            "data-orchids-id": "src/components/ui/AuthDialog.tsx:11:6",
            "data-orchids-name": "div",
            className: "bg-card border border-stroke rounded-2xl p-8 w-full max-w-md mx-auto relative animate-fade-in",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$workspaces$2f$FTP$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                    "data-orchids-id": "src/components/ui/AuthDialog.tsx:12:8",
                    "data-orchids-name": "button",
                    "aria-label": "close",
                    className: "absolute top-4 right-4 text-xl text-muted-foreground hover:text-foreground",
                    onClick: onClose,
                    children: "×"
                }, void 0, false, {
                    fileName: "[project]/workspaces/FTP/src/components/ui/AuthDialog.tsx",
                    lineNumber: 12,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$workspaces$2f$FTP$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    "data-orchids-id": "src/components/ui/AuthDialog.tsx:13:8",
                    "data-orchids-name": "div",
                    className: "flex justify-center mb-6 bg-muted/40 rounded-lg p-1",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$workspaces$2f$FTP$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            "data-orchids-id": "src/components/ui/AuthDialog.tsx:14:10",
                            "data-orchids-name": "button",
                            className: `px-4 py-2 rounded-l-lg pill ${mode === 'login' ? 'bg-muted text-foreground border border-stroke' : 'bg-transparent text-muted-foreground'}`,
                            onClick: ()=>setMode('login'),
                            children: "Вход"
                        }, void 0, false, {
                            fileName: "[project]/workspaces/FTP/src/components/ui/AuthDialog.tsx",
                            lineNumber: 14,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$workspaces$2f$FTP$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            "data-orchids-id": "src/components/ui/AuthDialog.tsx:15:10",
                            "data-orchids-name": "button",
                            className: `px-4 py-2 rounded-r-lg pill ${mode === 'register' ? 'bg-muted text-foreground border border-stroke' : 'bg-transparent text-muted-foreground'}`,
                            onClick: ()=>setMode('register'),
                            children: "Регистрация"
                        }, void 0, false, {
                            fileName: "[project]/workspaces/FTP/src/components/ui/AuthDialog.tsx",
                            lineNumber: 15,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/workspaces/FTP/src/components/ui/AuthDialog.tsx",
                    lineNumber: 13,
                    columnNumber: 9
                }, this),
                mode === 'login' ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$workspaces$2f$FTP$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(LoginForm, {
                    "data-orchids-id": "src/components/ui/AuthDialog.tsx:17:26",
                    "data-orchids-name": "LoginForm",
                    onSuccess: onClose
                }, void 0, false, {
                    fileName: "[project]/workspaces/FTP/src/components/ui/AuthDialog.tsx",
                    lineNumber: 17,
                    columnNumber: 27
                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$workspaces$2f$FTP$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(RegisterForm, {
                    "data-orchids-id": "src/components/ui/AuthDialog.tsx:17:61",
                    "data-orchids-name": "RegisterForm",
                    onSuccess: onClose
                }, void 0, false, {
                    fileName: "[project]/workspaces/FTP/src/components/ui/AuthDialog.tsx",
                    lineNumber: 17,
                    columnNumber: 149
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/workspaces/FTP/src/components/ui/AuthDialog.tsx",
            lineNumber: 11,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/workspaces/FTP/src/components/ui/AuthDialog.tsx",
        lineNumber: 10,
        columnNumber: 5
    }, this);
}
_s(AuthDialog, "dRu6JN1xq9XVSc/+DzMuWYbDX34=");
_c = AuthDialog;
function LoginForm({ onSuccess }) {
    _s1();
    const [email, setEmail] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$workspaces$2f$FTP$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    const [password, setPassword] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$workspaces$2f$FTP$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    const [loading, setLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$workspaces$2f$FTP$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [error, setError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$workspaces$2f$FTP$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    async function handleLogin(e) {
        e.preventDefault();
        setError('');
        setLoading(true);
        try {
            let res;
            try {
                res = await fetch('/api/auth/login', {
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
                console.error('fetch /api/auth/login failed', e);
                setError('Сеть: не удалось связаться с сервером');
                setLoading(false);
                return;
            }
            let j = null;
            try {
                j = await res.json();
            } catch (e) {
                j = null;
            }
            if (!res.ok) {
                // try to get text fallback
                let text = null;
                try {
                    text = await res.text();
                } catch (e) {}
                const msg = j && j.detail ? j.detail : text && text.length > 0 ? text : res.statusText || 'Неверные данные';
                setError(msg);
                setLoading(false);
                return;
            }
            if (j.access_token) {
                localStorage.setItem('access_token', j.access_token);
            }
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$workspaces$2f$FTP$2f$src$2f$lib$2f$toast$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"])('Вход выполнен');
            onSuccess();
            // reload to refresh UI/auth state
            try {
                location.reload();
            } catch (e) {}
        } catch (e) {
            console.error(e);
            setError('Ошибка');
        } finally{
            setLoading(false);
        }
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$workspaces$2f$FTP$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
        "data-orchids-id": "src/components/ui/AuthDialog.tsx:61:4",
        "data-orchids-name": "form",
        onSubmit: handleLogin,
        className: "space-y-4",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$workspaces$2f$FTP$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                "data-orchids-id": "src/components/ui/AuthDialog.tsx:62:6",
                "data-orchids-name": "label",
                className: "block",
                children: [
                    "Email",
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$workspaces$2f$FTP$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                        "data-orchids-id": "src/components/ui/AuthDialog.tsx:64:8",
                        "data-orchids-name": "input",
                        type: "email",
                        className: "input w-full mt-1",
                        value: email,
                        onChange: (e)=>setEmail(e.target.value),
                        required: true,
                        autoFocus: true
                    }, void 0, false, {
                        fileName: "[project]/workspaces/FTP/src/components/ui/AuthDialog.tsx",
                        lineNumber: 64,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/workspaces/FTP/src/components/ui/AuthDialog.tsx",
                lineNumber: 62,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$workspaces$2f$FTP$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                "data-orchids-id": "src/components/ui/AuthDialog.tsx:66:6",
                "data-orchids-name": "label",
                className: "block",
                children: [
                    "Пароль",
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$workspaces$2f$FTP$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                        "data-orchids-id": "src/components/ui/AuthDialog.tsx:68:8",
                        "data-orchids-name": "input",
                        type: "password",
                        className: "input w-full mt-1",
                        value: password,
                        onChange: (e)=>setPassword(e.target.value),
                        required: true
                    }, void 0, false, {
                        fileName: "[project]/workspaces/FTP/src/components/ui/AuthDialog.tsx",
                        lineNumber: 68,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/workspaces/FTP/src/components/ui/AuthDialog.tsx",
                lineNumber: 66,
                columnNumber: 7
            }, this),
            error && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$workspaces$2f$FTP$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                "data-orchids-id": "src/components/ui/AuthDialog.tsx:70:16",
                "data-orchids-name": "div",
                className: "text-red-500 text-sm",
                children: error
            }, void 0, false, {
                fileName: "[project]/workspaces/FTP/src/components/ui/AuthDialog.tsx",
                lineNumber: 70,
                columnNumber: 17
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$workspaces$2f$FTP$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$workspaces$2f$FTP$2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                "data-orchids-id": "src/components/ui/AuthDialog.tsx:71:6",
                "data-orchids-name": "Button",
                type: "submit",
                className: "w-full",
                disabled: loading,
                children: loading ? 'Вход...' : 'Войти'
            }, void 0, false, {
                fileName: "[project]/workspaces/FTP/src/components/ui/AuthDialog.tsx",
                lineNumber: 71,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/workspaces/FTP/src/components/ui/AuthDialog.tsx",
        lineNumber: 61,
        columnNumber: 5
    }, this);
}
_s1(LoginForm, "W6lnGRDcsGJzokrtWo32i2aXI7g=");
_c1 = LoginForm;
function RegisterForm({ onSuccess }) {
    _s2();
    const [email, setEmail] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$workspaces$2f$FTP$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    const [password, setPassword] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$workspaces$2f$FTP$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    const [confirm, setConfirm] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$workspaces$2f$FTP$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    const [strength, setStrength] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$workspaces$2f$FTP$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    const [loading, setLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$workspaces$2f$FTP$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [error, setError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$workspaces$2f$FTP$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    function checkStrength(pw) {
        let s = 0;
        if (pw.length >= 8) s++;
        if (/[A-Z]/.test(pw)) s++;
        if (/[0-9]/.test(pw)) s++;
        if (/[^A-Za-z0-9]/.test(pw)) s++;
        setStrength(s);
    }
    async function handleRegister(e) {
        e.preventDefault();
        setError('');
        if (password !== confirm) {
            setError('Пароли не совпадают');
            return;
        }
        setLoading(true);
        try {
            let res;
            try {
                res = await fetch('/api/auth/register', {
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
                console.error('fetch /api/auth/register failed', e);
                setError('Сеть: не удалось связаться с сервером');
                setLoading(false);
                return;
            }
            let j = null;
            try {
                j = await res.json();
            } catch (e) {
                j = null;
            }
            if (!res.ok) {
                let text = null;
                try {
                    text = await res.text();
                } catch (e) {}
                ;
                const msg = j && j.detail ? j.detail : text && text.length > 0 ? text : res.statusText || 'Ошибка регистрации';
                setError(msg);
                setLoading(false);
                return;
            }
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$workspaces$2f$FTP$2f$src$2f$lib$2f$toast$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"])('Регистрация успешна');
            // попытка авто-логина
            try {
                const lr = await fetch('/api/auth/login', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({
                        email,
                        password
                    })
                });
                const lj = await lr.json().catch(()=>({}));
                if (lr.ok && lj.access_token) {
                    localStorage.setItem('access_token', lj.access_token);
                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$workspaces$2f$FTP$2f$src$2f$lib$2f$toast$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"])('Вы автоматически вошли');
                    try {
                        location.reload();
                    } catch (e) {}
                    ;
                    return;
                }
            } catch (e) {
                console.error('auto-login after register failed', e);
            }
            onSuccess();
        } catch (e) {
            console.error(e);
            setError('Ошибка');
        } finally{
            setLoading(false);
        }
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$workspaces$2f$FTP$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
        "data-orchids-id": "src/components/ui/AuthDialog.tsx:118:4",
        "data-orchids-name": "form",
        onSubmit: handleRegister,
        className: "space-y-4",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$workspaces$2f$FTP$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                "data-orchids-id": "src/components/ui/AuthDialog.tsx:119:6",
                "data-orchids-name": "label",
                className: "block",
                children: [
                    "Email",
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$workspaces$2f$FTP$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                        "data-orchids-id": "src/components/ui/AuthDialog.tsx:121:8",
                        "data-orchids-name": "input",
                        type: "email",
                        className: "input w-full mt-1",
                        value: email,
                        onChange: (e)=>setEmail(e.target.value),
                        required: true,
                        autoFocus: true
                    }, void 0, false, {
                        fileName: "[project]/workspaces/FTP/src/components/ui/AuthDialog.tsx",
                        lineNumber: 121,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/workspaces/FTP/src/components/ui/AuthDialog.tsx",
                lineNumber: 119,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$workspaces$2f$FTP$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                "data-orchids-id": "src/components/ui/AuthDialog.tsx:123:6",
                "data-orchids-name": "label",
                className: "block",
                children: [
                    "Пароль",
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$workspaces$2f$FTP$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                        "data-orchids-id": "src/components/ui/AuthDialog.tsx:125:8",
                        "data-orchids-name": "input",
                        type: "password",
                        className: "input w-full mt-1",
                        value: password,
                        onChange: (e)=>{
                            setPassword(e.target.value);
                            checkStrength(e.target.value);
                        },
                        required: true
                    }, void 0, false, {
                        fileName: "[project]/workspaces/FTP/src/components/ui/AuthDialog.tsx",
                        lineNumber: 125,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/workspaces/FTP/src/components/ui/AuthDialog.tsx",
                lineNumber: 123,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$workspaces$2f$FTP$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                "data-orchids-id": "src/components/ui/AuthDialog.tsx:127:6",
                "data-orchids-name": "div",
                className: "h-2 w-full bg-gray-200 rounded",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$workspaces$2f$FTP$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    "data-orchids-id": "src/components/ui/AuthDialog.tsx:128:8",
                    "data-orchids-name": "div",
                    className: `h-2 rounded ${strength === 0 ? 'bg-gray-200' : strength < 3 ? 'bg-red-400' : strength === 3 ? 'bg-yellow-400' : 'bg-green-500'}`,
                    style: {
                        width: `${strength * 25}%`
                    }
                }, void 0, false, {
                    fileName: "[project]/workspaces/FTP/src/components/ui/AuthDialog.tsx",
                    lineNumber: 128,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/workspaces/FTP/src/components/ui/AuthDialog.tsx",
                lineNumber: 127,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$workspaces$2f$FTP$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                "data-orchids-id": "src/components/ui/AuthDialog.tsx:130:6",
                "data-orchids-name": "label",
                className: "block",
                children: [
                    "Подтвердите пароль",
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$workspaces$2f$FTP$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                        "data-orchids-id": "src/components/ui/AuthDialog.tsx:132:8",
                        "data-orchids-name": "input",
                        type: "password",
                        className: "input w-full mt-1",
                        value: confirm,
                        onChange: (e)=>setConfirm(e.target.value),
                        required: true
                    }, void 0, false, {
                        fileName: "[project]/workspaces/FTP/src/components/ui/AuthDialog.tsx",
                        lineNumber: 132,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/workspaces/FTP/src/components/ui/AuthDialog.tsx",
                lineNumber: 130,
                columnNumber: 7
            }, this),
            error && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$workspaces$2f$FTP$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                "data-orchids-id": "src/components/ui/AuthDialog.tsx:134:16",
                "data-orchids-name": "div",
                className: "text-red-500 text-sm",
                children: error
            }, void 0, false, {
                fileName: "[project]/workspaces/FTP/src/components/ui/AuthDialog.tsx",
                lineNumber: 134,
                columnNumber: 17
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$workspaces$2f$FTP$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$workspaces$2f$FTP$2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                "data-orchids-id": "src/components/ui/AuthDialog.tsx:135:6",
                "data-orchids-name": "Button",
                type: "submit",
                className: "w-full",
                disabled: loading,
                children: loading ? 'Регистрация...' : 'Зарегистрироваться'
            }, void 0, false, {
                fileName: "[project]/workspaces/FTP/src/components/ui/AuthDialog.tsx",
                lineNumber: 135,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/workspaces/FTP/src/components/ui/AuthDialog.tsx",
        lineNumber: 118,
        columnNumber: 5
    }, this);
}
_s2(RegisterForm, "YxQ61JCPmqt6AD6s2TmCV9YYwHM=");
_c2 = RegisterForm;
var _c, _c1, _c2;
__turbopack_context__.k.register(_c, "AuthDialog");
__turbopack_context__.k.register(_c1, "LoginForm");
__turbopack_context__.k.register(_c2, "RegisterForm");
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
var __TURBOPACK__imported__module__$5b$project$5d2f$workspaces$2f$FTP$2f$src$2f$components$2f$ui$2f$AuthDialog$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/workspaces/FTP/src/components/ui/AuthDialog.tsx [app-client] (ecmascript)");
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
    const [isLogged, setIsLogged] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$workspaces$2f$FTP$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [profile, setProfile] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$workspaces$2f$FTP$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [menuOpen, setMenuOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$workspaces$2f$FTP$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$workspaces$2f$FTP$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Header.useEffect": ()=>{
            const update = {
                "Header.useEffect.update": async (e)=>{
                    try {
                        const token = localStorage.getItem('access_token');
                        if (token) {
                            // prefer server_cart_count if present
                            const sc = localStorage.getItem('server_cart_count');
                            if (sc !== null) {
                                setCartCount(Number(sc));
                                return;
                            }
                            // fallback: fetch server cart
                            try {
                                const r = await fetch('/api/me/cart', {
                                    headers: {
                                        Authorization: `Bearer ${token}`
                                    }
                                });
                                if (r.ok) {
                                    const j = await r.json();
                                    setCartCount(Array.isArray(j) ? j.reduce({
                                        "Header.useEffect.update": (s, i)=>s + (i.quantity || 0)
                                    }["Header.useEffect.update"], 0) : 0);
                                    return;
                                }
                            } catch (e) {}
                        }
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
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$workspaces$2f$FTP$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Header.useEffect": ()=>{
            const loadProfile = {
                "Header.useEffect.loadProfile": async ()=>{
                    try {
                        const token = localStorage.getItem('access_token');
                        if (!token) {
                            setIsLogged(false);
                            setProfile(null);
                            return;
                        }
                        setIsLogged(true);
                        const r = await fetch('/api/me/profile', {
                            headers: {
                                'Authorization': `Bearer ${token}`
                            }
                        });
                        if (!r.ok) {
                            setIsLogged(false);
                            setProfile(null);
                            return;
                        }
                        const j = await r.json();
                        setProfile(j);
                    } catch (e) {
                        console.error('profile fetch failed', e);
                        setIsLogged(false);
                        setProfile(null);
                    }
                }
            }["Header.useEffect.loadProfile"];
            loadProfile();
            const onStorage = {
                "Header.useEffect.onStorage": (_e)=>{
                    loadProfile();
                }
            }["Header.useEffect.onStorage"];
            window.addEventListener('storage', onStorage);
            return ({
                "Header.useEffect": ()=>window.removeEventListener('storage', onStorage)
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
        "data-orchids-id": "src/components/sections/header.tsx:65:2",
        "data-orchids-name": "header",
        className: "bg-card border-b border-stroke sticky top-0 z-50",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$workspaces$2f$FTP$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            "data-orchids-id": "src/components/sections/header.tsx:66:6",
            "data-orchids-name": "div",
            className: "container",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$workspaces$2f$FTP$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    "data-orchids-id": "src/components/sections/header.tsx:67:8",
                    "data-orchids-name": "div",
                    className: "flex items-center justify-between gap-4 py-4",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$workspaces$2f$FTP$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$workspaces$2f$FTP$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                            "data-orchids-id": "src/components/sections/header.tsx:69:10",
                            "data-orchids-name": "Link",
                            href: "/",
                            className: "brand flex items-center gap-3 font-display font-bold text-xl letter-spacing-wide",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$workspaces$2f$FTP$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    "data-orchids-id": "src/components/sections/header.tsx:70:12",
                                    "data-orchids-name": "div",
                                    className: "logo w-10 h-10 rounded-full bg-gradient-to-r from-brand to-brand-2 brand-glow flex items-center justify-center",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$workspaces$2f$FTP$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        "data-orchids-id": "src/components/sections/header.tsx:71:14",
                                        "data-orchids-name": "span",
                                        className: "text-primary-foreground font-bold",
                                        children: "F"
                                    }, void 0, false, {
                                        fileName: "[project]/workspaces/FTP/src/components/sections/header.tsx",
                                        lineNumber: 71,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/workspaces/FTP/src/components/sections/header.tsx",
                                    lineNumber: 70,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$workspaces$2f$FTP$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    "data-orchids-id": "src/components/sections/header.tsx:73:12",
                                    "data-orchids-name": "span",
                                    className: "text-foreground",
                                    children: "Free To Pay"
                                }, void 0, false, {
                                    fileName: "[project]/workspaces/FTP/src/components/sections/header.tsx",
                                    lineNumber: 73,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/workspaces/FTP/src/components/sections/header.tsx",
                            lineNumber: 69,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$workspaces$2f$FTP$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("nav", {
                            "data-orchids-id": "src/components/sections/header.tsx:77:10",
                            "data-orchids-name": "nav",
                            className: "hidden md:flex items-center gap-6",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$workspaces$2f$FTP$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    "data-orchids-id": "src/components/sections/header.tsx:78:12",
                                    "data-orchids-name": "button",
                                    onClick: ()=>scrollToSection('genshin'),
                                    className: "pill px-3 py-2 bg-muted border border-stroke rounded-xl text-sm hover:border-brand-2 transition-colors",
                                    children: "Genshin Impact"
                                }, void 0, false, {
                                    fileName: "[project]/workspaces/FTP/src/components/sections/header.tsx",
                                    lineNumber: 78,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$workspaces$2f$FTP$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    "data-orchids-id": "src/components/sections/header.tsx:84:12",
                                    "data-orchids-name": "button",
                                    onClick: ()=>scrollToSection('hsr'),
                                    className: "pill px-3 py-2 bg-muted border border-stroke rounded-xl text-sm hover:border-brand-2 transition-colors",
                                    children: "Honkai: Star Rail"
                                }, void 0, false, {
                                    fileName: "[project]/workspaces/FTP/src/components/sections/header.tsx",
                                    lineNumber: 84,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$workspaces$2f$FTP$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    "data-orchids-id": "src/components/sections/header.tsx:90:12",
                                    "data-orchids-name": "button",
                                    onClick: ()=>scrollToSection('zzz'),
                                    className: "pill px-3 py-2 bg-muted border border-stroke rounded-xl text-sm hover:border-brand-2 transition-colors",
                                    children: "Zenless Zone Zero"
                                }, void 0, false, {
                                    fileName: "[project]/workspaces/FTP/src/components/sections/header.tsx",
                                    lineNumber: 90,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/workspaces/FTP/src/components/sections/header.tsx",
                            lineNumber: 77,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$workspaces$2f$FTP$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            "data-orchids-id": "src/components/sections/header.tsx:99:10",
                            "data-orchids-name": "div",
                            className: "flex items-center gap-3",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$workspaces$2f$FTP$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    "data-orchids-id": "src/components/sections/header.tsx:101:12",
                                    "data-orchids-name": "button",
                                    className: "pill px-3 py-2 bg-muted border border-stroke rounded-xl text-sm hover:border-brand-2 transition-colors hidden sm:flex items-center gap-1",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$workspaces$2f$FTP$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$workspaces$2f$FTP$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$globe$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Globe$3e$__["Globe"], {
                                            "data-orchids-id": "src/components/sections/header.tsx:102:14",
                                            "data-orchids-name": "Globe",
                                            className: "w-4 h-4"
                                        }, void 0, false, {
                                            fileName: "[project]/workspaces/FTP/src/components/sections/header.tsx",
                                            lineNumber: 102,
                                            columnNumber: 15
                                        }, this),
                                        "RU"
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/workspaces/FTP/src/components/sections/header.tsx",
                                    lineNumber: 101,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$workspaces$2f$FTP$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    "data-orchids-id": "src/components/sections/header.tsx:107:12",
                                    "data-orchids-name": "button",
                                    className: "pill p-2 bg-muted border border-stroke rounded-xl hover:border-brand-2 transition-colors hidden sm:block",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$workspaces$2f$FTP$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$workspaces$2f$FTP$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$search$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Search$3e$__["Search"], {
                                        "data-orchids-id": "src/components/sections/header.tsx:108:14",
                                        "data-orchids-name": "Search",
                                        className: "w-4 h-4"
                                    }, void 0, false, {
                                        fileName: "[project]/workspaces/FTP/src/components/sections/header.tsx",
                                        lineNumber: 108,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/workspaces/FTP/src/components/sections/header.tsx",
                                    lineNumber: 107,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$workspaces$2f$FTP$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$workspaces$2f$FTP$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                    "data-orchids-id": "src/components/sections/header.tsx:112:12",
                                    "data-orchids-name": "Link",
                                    href: "/cart",
                                    className: "pill relative p-2 bg-muted border border-stroke rounded-xl hover:border-brand-2 transition-colors",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$workspaces$2f$FTP$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$workspaces$2f$FTP$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$shopping$2d$cart$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ShoppingCart$3e$__["ShoppingCart"], {
                                            "data-orchids-id": "src/components/sections/header.tsx:113:14",
                                            "data-orchids-name": "ShoppingCart",
                                            className: "w-4 h-4"
                                        }, void 0, false, {
                                            fileName: "[project]/workspaces/FTP/src/components/sections/header.tsx",
                                            lineNumber: 113,
                                            columnNumber: 15
                                        }, this),
                                        cartCount > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$workspaces$2f$FTP$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            "data-orchids-id": "src/components/sections/header.tsx:115:16",
                                            "data-orchids-name": "span",
                                            className: "absolute -top-2 -right-2 bg-destructive text-destructive-foreground text-xs w-5 h-5 rounded-full flex items-center justify-center font-bold",
                                            children: cartCount
                                        }, void 0, false, {
                                            fileName: "[project]/workspaces/FTP/src/components/sections/header.tsx",
                                            lineNumber: 115,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/workspaces/FTP/src/components/sections/header.tsx",
                                    lineNumber: 112,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$workspaces$2f$FTP$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    "data-orchids-id": "src/components/sections/header.tsx:122:12",
                                    "data-orchids-name": "div",
                                    className: "relative",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$workspaces$2f$FTP$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            "data-orchids-id": "src/components/sections/header.tsx:123:14",
                                            "data-orchids-name": "button",
                                            onClick: ()=>{
                                                if (isLogged) {
                                                    setMenuOpen(!menuOpen);
                                                } else {
                                                    setIsAuthOpen(true);
                                                }
                                            },
                                            className: `pill p-2 border rounded-xl transition-colors flex items-center gap-2 ${isLogged ? 'brand-gradient brand-glow text-primary-foreground border-transparent' : 'bg-muted border border-stroke hover:border-brand-2'}`,
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$workspaces$2f$FTP$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$workspaces$2f$FTP$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$user$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__User$3e$__["User"], {
                                                    "data-orchids-id": "src/components/sections/header.tsx:124:16",
                                                    "data-orchids-name": "User",
                                                    className: "w-4 h-4"
                                                }, void 0, false, {
                                                    fileName: "[project]/workspaces/FTP/src/components/sections/header.tsx",
                                                    lineNumber: 124,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$workspaces$2f$FTP$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    "data-orchids-id": "src/components/sections/header.tsx:125:16",
                                                    "data-orchids-name": "span",
                                                    className: "hidden sm:block text-sm font-medium",
                                                    children: isLogged ? 'Кабинет' : 'Войти'
                                                }, void 0, false, {
                                                    fileName: "[project]/workspaces/FTP/src/components/sections/header.tsx",
                                                    lineNumber: 125,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/workspaces/FTP/src/components/sections/header.tsx",
                                            lineNumber: 123,
                                            columnNumber: 15
                                        }, this),
                                        menuOpen && isLogged && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$workspaces$2f$FTP$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            "data-orchids-id": "src/components/sections/header.tsx:129:16",
                                            "data-orchids-name": "div",
                                            className: "absolute right-0 mt-2 w-64 bg-card border border-stroke rounded-lg p-4 shadow-lg z-50",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$workspaces$2f$FTP$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    "data-orchids-id": "src/components/sections/header.tsx:130:18",
                                                    "data-orchids-name": "div",
                                                    className: "flex items-center justify-between mb-3",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$workspaces$2f$FTP$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            "data-orchids-id": "src/components/sections/header.tsx:131:20",
                                                            "data-orchids-name": "div",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$workspaces$2f$FTP$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    "data-orchids-id": "src/components/sections/header.tsx:132:22",
                                                                    "data-orchids-name": "div",
                                                                    className: "text-xs text-muted-foreground",
                                                                    children: "Токены"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/workspaces/FTP/src/components/sections/header.tsx",
                                                                    lineNumber: 132,
                                                                    columnNumber: 23
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$workspaces$2f$FTP$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    "data-orchids-id": "src/components/sections/header.tsx:133:22",
                                                                    "data-orchids-name": "div",
                                                                    className: "font-semibold",
                                                                    children: profile?.tokens ?? 0
                                                                }, void 0, false, {
                                                                    fileName: "[project]/workspaces/FTP/src/components/sections/header.tsx",
                                                                    lineNumber: 133,
                                                                    columnNumber: 23
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/workspaces/FTP/src/components/sections/header.tsx",
                                                            lineNumber: 131,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$workspaces$2f$FTP$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            "data-orchids-id": "src/components/sections/header.tsx:135:20",
                                                            "data-orchids-name": "div",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$workspaces$2f$FTP$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    "data-orchids-id": "src/components/sections/header.tsx:136:22",
                                                                    "data-orchids-name": "div",
                                                                    className: "text-xs text-muted-foreground",
                                                                    children: "Баланс"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/workspaces/FTP/src/components/sections/header.tsx",
                                                                    lineNumber: 136,
                                                                    columnNumber: 23
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$workspaces$2f$FTP$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    "data-orchids-id": "src/components/sections/header.tsx:137:22",
                                                                    "data-orchids-name": "div",
                                                                    className: "font-semibold",
                                                                    children: [
                                                                        profile?.balance ? Math.round(profile.balance) : 0,
                                                                        " ₽"
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/workspaces/FTP/src/components/sections/header.tsx",
                                                                    lineNumber: 137,
                                                                    columnNumber: 23
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/workspaces/FTP/src/components/sections/header.tsx",
                                                            lineNumber: 135,
                                                            columnNumber: 21
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/workspaces/FTP/src/components/sections/header.tsx",
                                                    lineNumber: 130,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$workspaces$2f$FTP$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    "data-orchids-id": "src/components/sections/header.tsx:140:18",
                                                    "data-orchids-name": "div",
                                                    className: "flex flex-col gap-2",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$workspaces$2f$FTP$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$workspaces$2f$FTP$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                            "data-orchids-id": "src/components/sections/header.tsx:141:20",
                                                            "data-orchids-name": "Link",
                                                            href: "/account",
                                                            className: "pill px-3 py-2 bg-muted border border-stroke rounded-md text-sm text-center",
                                                            children: "Перейти в личный кабинет"
                                                        }, void 0, false, {
                                                            fileName: "[project]/workspaces/FTP/src/components/sections/header.tsx",
                                                            lineNumber: 141,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$workspaces$2f$FTP$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                            "data-orchids-id": "src/components/sections/header.tsx:142:20",
                                                            "data-orchids-name": "button",
                                                            onClick: ()=>{
                                                                localStorage.removeItem('access_token');
                                                                setIsLogged(false);
                                                                setProfile(null);
                                                                setMenuOpen(false);
                                                                try {
                                                                    location.reload();
                                                                } catch (e) {}
                                                            },
                                                            className: "pill px-3 py-2 bg-destructive text-destructive-foreground rounded-md",
                                                            children: "Выйти"
                                                        }, void 0, false, {
                                                            fileName: "[project]/workspaces/FTP/src/components/sections/header.tsx",
                                                            lineNumber: 142,
                                                            columnNumber: 21
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/workspaces/FTP/src/components/sections/header.tsx",
                                                    lineNumber: 140,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/workspaces/FTP/src/components/sections/header.tsx",
                                            lineNumber: 129,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$workspaces$2f$FTP$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$workspaces$2f$FTP$2f$src$2f$components$2f$ui$2f$AuthDialog$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                            "data-orchids-id": "src/components/sections/header.tsx:147:14",
                                            "data-orchids-name": "AuthDialog",
                                            open: isAuthOpen,
                                            onClose: ()=>{
                                                setIsAuthOpen(false); /* refresh profile after close */ 
                                                setTimeout(()=>{
                                                    try {
                                                        window.dispatchEvent(new Event('storage'));
                                                    } catch (e) {}
                                                }, 200);
                                            }
                                        }, void 0, false, {
                                            fileName: "[project]/workspaces/FTP/src/components/sections/header.tsx",
                                            lineNumber: 147,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/workspaces/FTP/src/components/sections/header.tsx",
                                    lineNumber: 122,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$workspaces$2f$FTP$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    "data-orchids-id": "src/components/sections/header.tsx:151:12",
                                    "data-orchids-name": "button",
                                    className: "pill p-2 bg-muted border border-stroke rounded-xl hover:border-brand-2 transition-colors md:hidden",
                                    onClick: ()=>setIsMenuOpen(!isMenuOpen),
                                    children: isMenuOpen ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$workspaces$2f$FTP$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$workspaces$2f$FTP$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__["X"], {
                                        "data-orchids-id": "src/components/sections/header.tsx:155:28",
                                        "data-orchids-name": "X",
                                        className: "w-4 h-4"
                                    }, void 0, false, {
                                        fileName: "[project]/workspaces/FTP/src/components/sections/header.tsx",
                                        lineNumber: 155,
                                        columnNumber: 29
                                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$workspaces$2f$FTP$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$workspaces$2f$FTP$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$menu$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Menu$3e$__["Menu"], {
                                        "data-orchids-id": "src/components/sections/header.tsx:155:56",
                                        "data-orchids-name": "Menu",
                                        className: "w-4 h-4"
                                    }, void 0, false, {
                                        fileName: "[project]/workspaces/FTP/src/components/sections/header.tsx",
                                        lineNumber: 155,
                                        columnNumber: 139
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/workspaces/FTP/src/components/sections/header.tsx",
                                    lineNumber: 151,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/workspaces/FTP/src/components/sections/header.tsx",
                            lineNumber: 99,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$workspaces$2f$FTP$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("script", {
                            "data-orchids-id": "src/components/sections/header.tsx:158:10",
                            "data-orchids-name": "script",
                            dangerouslySetInnerHTML: {
                                __html: ''
                            }
                        }, void 0, false, {
                            fileName: "[project]/workspaces/FTP/src/components/sections/header.tsx",
                            lineNumber: 158,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/workspaces/FTP/src/components/sections/header.tsx",
                    lineNumber: 67,
                    columnNumber: 9
                }, this),
                isMenuOpen && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$workspaces$2f$FTP$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("nav", {
                    "data-orchids-id": "src/components/sections/header.tsx:163:10",
                    "data-orchids-name": "nav",
                    className: "md:hidden pb-4 border-t border-stroke mt-4 pt-4",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$workspaces$2f$FTP$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        "data-orchids-id": "src/components/sections/header.tsx:164:12",
                        "data-orchids-name": "div",
                        className: "flex flex-col gap-2",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$workspaces$2f$FTP$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                "data-orchids-id": "src/components/sections/header.tsx:165:14",
                                "data-orchids-name": "button",
                                onClick: ()=>scrollToSection('genshin'),
                                className: "pill px-3 py-2 bg-muted border border-stroke rounded-xl text-sm hover:border-brand-2 transition-colors text-left",
                                children: "Genshin Impact"
                            }, void 0, false, {
                                fileName: "[project]/workspaces/FTP/src/components/sections/header.tsx",
                                lineNumber: 165,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$workspaces$2f$FTP$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                "data-orchids-id": "src/components/sections/header.tsx:171:14",
                                "data-orchids-name": "button",
                                onClick: ()=>scrollToSection('hsr'),
                                className: "pill px-3 py-2 bg-muted border border-stroke rounded-xl text-sm hover:border-brand-2 transition-colors text-left",
                                children: "Honkai: Star Rail"
                            }, void 0, false, {
                                fileName: "[project]/workspaces/FTP/src/components/sections/header.tsx",
                                lineNumber: 171,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$workspaces$2f$FTP$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                "data-orchids-id": "src/components/sections/header.tsx:177:14",
                                "data-orchids-name": "button",
                                onClick: ()=>scrollToSection('zzz'),
                                className: "pill px-3 py-2 bg-muted border border-stroke rounded-xl text-sm hover:border-brand-2 transition-colors text-left",
                                children: "Zenless Zone Zero"
                            }, void 0, false, {
                                fileName: "[project]/workspaces/FTP/src/components/sections/header.tsx",
                                lineNumber: 177,
                                columnNumber: 15
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/workspaces/FTP/src/components/sections/header.tsx",
                        lineNumber: 164,
                        columnNumber: 13
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/workspaces/FTP/src/components/sections/header.tsx",
                    lineNumber: 163,
                    columnNumber: 11
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/workspaces/FTP/src/components/sections/header.tsx",
            lineNumber: 66,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/workspaces/FTP/src/components/sections/header.tsx",
        lineNumber: 65,
        columnNumber: 3
    }, this);
}
_s(Header, "78mJADMPHpj2ztv+8c6i0Zw41z8=");
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
            try {
                const token = localStorage.getItem('access_token');
                if (token) {
                    const rc = await fetch('/api/me/cart', {
                        headers: {
                            Authorization: `Bearer ${token}`
                        }
                    });
                    if (rc.ok) {
                        const j = await rc.json();
                        const cnt = Array.isArray(j) ? j.reduce((s, i)=>s + (i.quantity || 0), 0) : 0;
                        try {
                            localStorage.setItem('server_cart_count', String(cnt));
                        } catch (e) {}
                        ;
                        try {
                            window.dispatchEvent(new Event('storage'));
                        } catch (e) {}
                    }
                }
            } catch (e) {}
        } catch (e) {
            console.error(e);
            const toast = (await __turbopack_context__.r("[project]/workspaces/FTP/src/lib/toast.ts [app-client] (ecmascript, async loader)")(__turbopack_context__.i)).toast;
            toast('Ошибка при добавлении');
        }
    };
    const getTabKey = (gameId)=>selectedTab[gameId] || 'crystals';
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$workspaces$2f$FTP$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        "data-orchids-id": "src/components/sections/game-sections.tsx:126:4",
        "data-orchids-name": "div",
        className: "container space-y-16",
        children: games.map((game)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$workspaces$2f$FTP$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                "data-orchids-id": "src/components/sections/game-sections.tsx:128:8@games",
                "data-orchids-name": "section",
                id: game.id,
                className: "space-y-8",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$workspaces$2f$FTP$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        "data-orchids-id": "src/components/sections/game-sections.tsx:129:10@games",
                        "data-orchids-name": "div",
                        className: "flex items-center space-x-4",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$workspaces$2f$FTP$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                "data-orchids-id": "src/components/sections/game-sections.tsx:130:12@games",
                                "data-orchids-name": "div",
                                className: "w-16 h-16 rounded-2xl flex items-center justify-center text-3xl brand-glow",
                                style: {
                                    background: `linear-gradient(135deg, ${game.gradientFrom}, ${game.gradientTo})`,
                                    color: 'white'
                                },
                                children: game.logo
                            }, void 0, false, {
                                fileName: "[project]/workspaces/FTP/src/components/sections/game-sections.tsx",
                                lineNumber: 130,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$workspaces$2f$FTP$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                "data-orchids-id": "src/components/sections/game-sections.tsx:139:12@games",
                                "data-orchids-name": "div",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$workspaces$2f$FTP$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                        "data-orchids-id": "src/components/sections/game-sections.tsx:140:14@games",
                                        "data-orchids-name": "h2",
                                        className: "text-3xl font-bold text-foreground",
                                        children: game.name
                                    }, void 0, false, {
                                        fileName: "[project]/workspaces/FTP/src/components/sections/game-sections.tsx",
                                        lineNumber: 140,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$workspaces$2f$FTP$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        "data-orchids-id": "src/components/sections/game-sections.tsx:141:14@games",
                                        "data-orchids-name": "p",
                                        className: "text-muted-foreground",
                                        children: "Каталог донатов"
                                    }, void 0, false, {
                                        fileName: "[project]/workspaces/FTP/src/components/sections/game-sections.tsx",
                                        lineNumber: 141,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/workspaces/FTP/src/components/sections/game-sections.tsx",
                                lineNumber: 139,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/workspaces/FTP/src/components/sections/game-sections.tsx",
                        lineNumber: 129,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$workspaces$2f$FTP$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        "data-orchids-id": "src/components/sections/game-sections.tsx:146:10@games",
                        "data-orchids-name": "div",
                        className: "flex gap-3 flex-wrap",
                        children: [
                            {
                                key: 'crystals',
                                label: 'Кристаллы',
                                icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$workspaces$2f$FTP$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$workspaces$2f$FTP$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$coins$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Coins$3e$__["Coins"], {
                                    "data-orchids-id": "src/components/sections/game-sections.tsx:148:59",
                                    "data-orchids-name": "Coins",
                                    className: "w-4 h-4"
                                }, void 0, false, {
                                    fileName: "[project]/workspaces/FTP/src/components/sections/game-sections.tsx",
                                    lineNumber: 148,
                                    columnNumber: 60
                                }, this)
                            },
                            {
                                key: 'subscriptions',
                                label: 'Подписки',
                                icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$workspaces$2f$FTP$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$workspaces$2f$FTP$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$calendar$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Calendar$3e$__["Calendar"], {
                                    "data-orchids-id": "src/components/sections/game-sections.tsx:149:63",
                                    "data-orchids-name": "Calendar",
                                    className: "w-4 h-4"
                                }, void 0, false, {
                                    fileName: "[project]/workspaces/FTP/src/components/sections/game-sections.tsx",
                                    lineNumber: 149,
                                    columnNumber: 64
                                }, this)
                            },
                            {
                                key: 'battlepass',
                                label: 'Боевой пропуск',
                                icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$workspaces$2f$FTP$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$workspaces$2f$FTP$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$award$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Award$3e$__["Award"], {
                                    "data-orchids-id": "src/components/sections/game-sections.tsx:150:66",
                                    "data-orchids-name": "Award",
                                    className: "w-4 h-4"
                                }, void 0, false, {
                                    fileName: "[project]/workspaces/FTP/src/components/sections/game-sections.tsx",
                                    lineNumber: 150,
                                    columnNumber: 67
                                }, this)
                            }
                        ].map((tab)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$workspaces$2f$FTP$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                "data-orchids-id": "src/components/sections/game-sections.tsx:152:14@games",
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
                                lineNumber: 152,
                                columnNumber: 15
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/workspaces/FTP/src/components/sections/game-sections.tsx",
                        lineNumber: 146,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$workspaces$2f$FTP$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        "data-orchids-id": "src/components/sections/game-sections.tsx:168:10@games",
                        "data-orchids-name": "div",
                        className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6",
                        children: generateProducts(game).filter((p)=>{
                            const activeTab = getTabKey(game.id);
                            if (activeTab === 'crystals') return p.type === 'crystal';
                            if (activeTab === 'subscriptions') return p.type === 'subscription';
                            if (activeTab === 'battlepass') return p.type === 'battlepass';
                            return true;
                        }).map((product)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$workspaces$2f$FTP$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                "data-orchids-id": "src/components/sections/game-sections.tsx:178:16@games",
                                "data-orchids-name": "div",
                                className: "bg-card border border-stroke rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-200 hover:scale-105",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$workspaces$2f$FTP$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        "data-orchids-id": "src/components/sections/game-sections.tsx:182:18@games",
                                        "data-orchids-name": "div",
                                        className: "flex items-center gap-4 mb-4",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$workspaces$2f$FTP$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                "data-orchids-id": "src/components/sections/game-sections.tsx:183:20",
                                                "data-orchids-name": "div",
                                                className: "w-20 h-20 rounded-2xl flex items-center justify-center text-xl",
                                                style: {
                                                    background: `linear-gradient(135deg, ${game.gradientFrom}20, ${game.gradientTo}20)`,
                                                    border: `1px solid ${game.brandColor}30`
                                                },
                                                children: getProductIcon(product.type)
                                            }, void 0, false, {
                                                fileName: "[project]/workspaces/FTP/src/components/sections/game-sections.tsx",
                                                lineNumber: 183,
                                                columnNumber: 21
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$workspaces$2f$FTP$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                "data-orchids-id": "src/components/sections/game-sections.tsx:192:20",
                                                "data-orchids-name": "div",
                                                className: "flex-1",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$workspaces$2f$FTP$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                        "data-orchids-id": "src/components/sections/game-sections.tsx:193:22",
                                                        "data-orchids-name": "h3",
                                                        className: "font-semibold text-card-foreground text-lg mb-1",
                                                        children: product.name
                                                    }, void 0, false, {
                                                        fileName: "[project]/workspaces/FTP/src/components/sections/game-sections.tsx",
                                                        lineNumber: 193,
                                                        columnNumber: 23
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$workspaces$2f$FTP$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        "data-orchids-id": "src/components/sections/game-sections.tsx:194:22",
                                                        "data-orchids-name": "p",
                                                        className: "text-sm text-muted-foreground",
                                                        children: game.shortName
                                                    }, void 0, false, {
                                                        fileName: "[project]/workspaces/FTP/src/components/sections/game-sections.tsx",
                                                        lineNumber: 194,
                                                        columnNumber: 23
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/workspaces/FTP/src/components/sections/game-sections.tsx",
                                                lineNumber: 192,
                                                columnNumber: 21
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/workspaces/FTP/src/components/sections/game-sections.tsx",
                                        lineNumber: 182,
                                        columnNumber: 19
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$workspaces$2f$FTP$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        "data-orchids-id": "src/components/sections/game-sections.tsx:198:18@games",
                                        "data-orchids-name": "div",
                                        className: "mb-6",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$workspaces$2f$FTP$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            "data-orchids-id": "src/components/sections/game-sections.tsx:199:20",
                                            "data-orchids-name": "div",
                                            className: "text-3xl font-bold text-brand mb-1",
                                            children: [
                                                new Intl.NumberFormat('ru-RU').format(product.price),
                                                " ",
                                                product.currency
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/workspaces/FTP/src/components/sections/game-sections.tsx",
                                            lineNumber: 199,
                                            columnNumber: 21
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/workspaces/FTP/src/components/sections/game-sections.tsx",
                                        lineNumber: 198,
                                        columnNumber: 19
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$workspaces$2f$FTP$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        "data-orchids-id": "src/components/sections/game-sections.tsx:204:18@games",
                                        "data-orchids-name": "button",
                                        onClick: ()=>handleAddToCart(product, game),
                                        className: "w-full brand-gradient text-primary-foreground font-bold py-3 px-6 rounded-xl brand-glow hover:scale-105 transition-transform flex items-center justify-center gap-2",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$workspaces$2f$FTP$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$workspaces$2f$FTP$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$shopping$2d$cart$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ShoppingCart$3e$__["ShoppingCart"], {
                                                "data-orchids-id": "src/components/sections/game-sections.tsx:208:20",
                                                "data-orchids-name": "ShoppingCart",
                                                className: "w-4 h-4"
                                            }, void 0, false, {
                                                fileName: "[project]/workspaces/FTP/src/components/sections/game-sections.tsx",
                                                lineNumber: 208,
                                                columnNumber: 21
                                            }, this),
                                            "В корзину"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/workspaces/FTP/src/components/sections/game-sections.tsx",
                                        lineNumber: 204,
                                        columnNumber: 19
                                    }, this)
                                ]
                            }, product.id, true, {
                                fileName: "[project]/workspaces/FTP/src/components/sections/game-sections.tsx",
                                lineNumber: 178,
                                columnNumber: 17
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/workspaces/FTP/src/components/sections/game-sections.tsx",
                        lineNumber: 168,
                        columnNumber: 11
                    }, this)
                ]
            }, game.id, true, {
                fileName: "[project]/workspaces/FTP/src/components/sections/game-sections.tsx",
                lineNumber: 128,
                columnNumber: 9
            }, this))
    }, void 0, false, {
        fileName: "[project]/workspaces/FTP/src/components/sections/game-sections.tsx",
        lineNumber: 126,
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

//# sourceMappingURL=workspaces_FTP_src_4b52d59c._.js.map