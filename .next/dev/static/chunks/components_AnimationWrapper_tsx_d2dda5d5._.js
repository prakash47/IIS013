(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/components/AnimationWrapper.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>AnimationWrapper
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
"use client";
;
;
function AnimationWrapper({ children, className = "", animation = "fade-up", delay = 0 }) {
    const variants = {
        "fade-up": {
            hidden: {
                opacity: 0,
                y: 40
            },
            visible: {
                opacity: 1,
                y: 0
            }
        },
        "fade-in": {
            hidden: {
                opacity: 0
            },
            visible: {
                opacity: 1
            }
        },
        "scale-up": {
            hidden: {
                opacity: 0,
                scale: 0.9
            },
            visible: {
                opacity: 1,
                scale: 1
            }
        },
        "slide-right": {
            hidden: {
                opacity: 0,
                x: -40
            },
            visible: {
                opacity: 1,
                x: 0
            }
        },
        "slide-left": {
            hidden: {
                opacity: 0,
                x: 40
            },
            visible: {
                opacity: 1,
                x: 0
            }
        }
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
        initial: "hidden",
        whileInView: "visible",
        viewport: {
            once: true,
            margin: "-100px"
        },
        variants: variants[animation],
        transition: {
            duration: 0.7,
            delay,
            ease: [
                0.21,
                0.47,
                0.32,
                0.98
            ]
        },
        className: className,
        children: children
    }, void 0, false, {
        fileName: "[project]/components/AnimationWrapper.tsx",
        lineNumber: 42,
        columnNumber: 9
    }, this);
}
_c = AnimationWrapper;
var _c;
__turbopack_context__.k.register(_c, "AnimationWrapper");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=components_AnimationWrapper_tsx_d2dda5d5._.js.map