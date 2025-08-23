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
}]);

//# sourceMappingURL=workspaces_FTP_src_lib_toast_ts_36c34a63._.js.map