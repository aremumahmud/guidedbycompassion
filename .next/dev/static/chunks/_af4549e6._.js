(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/colors.json (json)", ((__turbopack_context__) => {

__turbopack_context__.v({"primary":{"50":"#fbeff3","100":"#f5d7e1","200":"#eaaec2","300":"#df85a3","400":"#d36588","500":"#ab516f","600":"#91435d","700":"#753748","800":"#582a35","900":"#3c1d23"},"secondary":{"50":"#fff9f1","100":"#fef0d8","200":"#fde4bf","300":"#f9d6a6","400":"#f4dcba","500":"#eecfa1","600":"#d6b78d","700":"#bd9f78","800":"#a48762","900":"#8b6f4c"},"accent":{"blue":"#ab516f","indigo":"#ab516f","purple":"#ab516f","pink":"#e83e8c","red":"#dc3545","orange":"#C49A6C","yellow":"#EDCFA2","green":"#10b981","teal":"#eecfa1","cyan":"#eecfa1"},"neutral":{"white":"#ffffff","black":"#000000","gray":{"50":"#f8f9fa","100":"#e9ecef","200":"#dee2e6","300":"#ced4da","400":"#adb5bd","500":"#6D6F71","600":"#6D6F71","700":"#495057","800":"#343a40","900":"#1a1a1a"}},"background":{"primary":"#ffffff","secondary":"#f8f9fa","dark":"#1a1a1a","gradient":{"hero":"linear-gradient(135deg, #ab516f 0%, #eecfa1 100%)","card":"linear-gradient(135deg, #ffffff 0%, #f8f9fa 100%)","overlay":"rgba(0, 0, 0, 0.1)"}},"text":{"primary":"#6D6F71","secondary":"#666666","muted":"#6c757d","light":"#ffffff","inverse":"#ffffff"},"border":{"light":"#e9ecef","medium":"#dee2e6","dark":"#ced4da","primary":"#ab516f"},"status":{"success":"#10b981","warning":"#ffc107","error":"#dc3545","info":"#d6b78d"},"interactive":{"primary":{"default":"#ab516f","hover":"#91435d","active":"#753748","disabled":"#6c757d"},"secondary":{"default":"#ffffff","hover":"#f8f9fa","active":"#e9ecef","disabled":"#ced4da"},"accent":{"default":"#d6b78d","hover":"#bd9f78","active":"#a48762","disabled":"#6c757d"}},"shadows":{"sm":"0 1px 2px rgba(0, 0, 0, 0.05)","md":"0 4px 6px rgba(0, 0, 0, 0.1)","lg":"0 10px 15px rgba(0, 0, 0, 0.1)","xl":"0 20px 25px rgba(0, 0, 0, 0.1)","card":"0 10px 30px rgba(0, 0, 0, 0.1)","button":"0 2px 4px rgba(0, 0, 0, 0.1)"},"opacity":{"10":"0.1","15":"0.15","20":"0.2","25":"0.25","50":"0.5","75":"0.75","80":"0.8","90":"0.9"},"themes":{"light":{"name":"Light Theme","background":{"primary":"#ffffff","secondary":"#f8f9fa"},"text":{"primary":"#6D6F71","secondary":"#666666"},"accent":"#ab516f"},"dark":{"name":"Dark Theme","background":{"primary":"#1a1a1a","secondary":"#333333"},"text":{"primary":"#ffffff","secondary":"#e9ecef"},"accent":"#ab516f"},"blue":{"name":"Blue Theme","background":{"primary":"#ffffff","secondary":"#f8f9fa"},"text":{"primary":"#6D6F71","secondary":"#666666"},"accent":"#ab516f"},"green":{"name":"Green Theme","background":{"primary":"#ffffff","secondary":"#f8f9fa"},"text":{"primary":"#6D6F71","secondary":"#666666"},"accent":"#28a745"},"purple":{"name":"Purple Theme","background":{"primary":"#ffffff","secondary":"#f8f9fa"},"text":{"primary":"#6D6F71","secondary":"#666666"},"accent":"#ab516f"},"teal":{"name":"Teal Theme","background":{"primary":"#ffffff","secondary":"#f8f9fa"},"text":{"primary":"#6D6F71","secondary":"#666666"},"accent":"#eecfa1"}}});}),
"[project]/src/contexts/ThemeContext.jsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ThemeProvider",
    ()=>ThemeProvider,
    "default",
    ()=>__TURBOPACK__default__export__,
    "useTheme",
    ()=>useTheme
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$colors$2e$json__$28$json$29$__ = __turbopack_context__.i("[project]/colors.json (json)");
;
var _s = __turbopack_context__.k.signature(), _s1 = __turbopack_context__.k.signature();
'use client';
;
;
const ThemeContext = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createContext"])();
const useTheme = ()=>{
    _s();
    const context = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useContext"])(ThemeContext);
    if (!context) {
        throw new Error('useTheme must be used within a ThemeProvider');
    }
    return context;
};
_s(useTheme, "b9L3QQ+jgeyIrH0NfHrJ8nn7VMU=");
const ThemeProvider = ({ children })=>{
    _s1();
    const [currentTheme, setCurrentTheme] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('light');
    const [customColors, setCustomColors] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({});
    // Load theme from localStorage on mount
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "ThemeProvider.useEffect": ()=>{
            const savedTheme = localStorage.getItem('theme');
            const savedColors = localStorage.getItem('customColors');
            if (savedTheme) {
                setCurrentTheme(savedTheme);
            }
            if (savedColors) {
                try {
                    setCustomColors(JSON.parse(savedColors));
                } catch (error) {
                    console.error('Error parsing saved custom colors:', error);
                }
            }
        }
    }["ThemeProvider.useEffect"], []);
    // Apply theme to document
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "ThemeProvider.useEffect": ()=>{
            document.documentElement.setAttribute('data-theme', currentTheme);
        }
    }["ThemeProvider.useEffect"], [
        currentTheme
    ]);
    // Apply custom colors to CSS variables
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "ThemeProvider.useEffect": ()=>{
            const root = document.documentElement;
            Object.entries(customColors).forEach({
                "ThemeProvider.useEffect": ([key, value])=>{
                    root.style.setProperty(`--${key}`, value);
                }
            }["ThemeProvider.useEffect"]);
        }
    }["ThemeProvider.useEffect"], [
        customColors
    ]);
    const changeTheme = (themeName)=>{
        setCurrentTheme(themeName);
        localStorage.setItem('theme', themeName);
    };
    const updateCustomColor = (colorKey, colorValue)=>{
        const newCustomColors = {
            ...customColors,
            [colorKey]: colorValue
        };
        setCustomColors(newCustomColors);
        localStorage.setItem('customColors', JSON.stringify(newCustomColors));
    };
    const resetCustomColors = ()=>{
        setCustomColors({});
        localStorage.removeItem('customColors');
        // Reset CSS variables to default values
        const root = document.documentElement;
        Object.keys(customColors).forEach((key)=>{
            root.style.removeProperty(`--${key}`);
        });
    };
    const getThemeColors = ()=>{
        return __TURBOPACK__imported__module__$5b$project$5d2f$colors$2e$json__$28$json$29$__["default"].themes[currentTheme] || __TURBOPACK__imported__module__$5b$project$5d2f$colors$2e$json__$28$json$29$__["default"].themes.light;
    };
    const getAvailableThemes = ()=>{
        return Object.keys(__TURBOPACK__imported__module__$5b$project$5d2f$colors$2e$json__$28$json$29$__["default"].themes).map((key)=>({
                key,
                ...__TURBOPACK__imported__module__$5b$project$5d2f$colors$2e$json__$28$json$29$__["default"].themes[key]
            }));
    };
    const getColorValue = (colorPath)=>{
        // Support dot notation like 'primary.900' or 'text.primary'
        const keys = colorPath.split('.');
        let value = __TURBOPACK__imported__module__$5b$project$5d2f$colors$2e$json__$28$json$29$__["default"];
        for (const key of keys){
            if (value && typeof value === 'object' && key in value) {
                value = value[key];
            } else {
                return null;
            }
        }
        return value;
    };
    const value = {
        currentTheme,
        customColors,
        changeTheme,
        updateCustomColor,
        resetCustomColors,
        getThemeColors,
        getAvailableThemes,
        getColorValue,
        colors: __TURBOPACK__imported__module__$5b$project$5d2f$colors$2e$json__$28$json$29$__["default"]
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ThemeContext.Provider, {
        value: value,
        children: children
    }, void 0, false, {
        fileName: "[project]/src/contexts/ThemeContext.jsx",
        lineNumber: 112,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_s1(ThemeProvider, "mvgknTHCe1rPplG5ZI3Nq/fJYXA=");
_c = ThemeProvider;
const __TURBOPACK__default__export__ = ThemeContext;
var _c;
__turbopack_context__.k.register(_c, "ThemeProvider");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/contexts/ContentContext.jsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ContentProvider",
    ()=>ContentProvider,
    "default",
    ()=>__TURBOPACK__default__export__,
    "useContent",
    ()=>useContent
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
const ContentContext = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createContext"])();
const useContent = ()=>{
    _s();
    const context = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useContext"])(ContentContext);
    if (!context) {
        throw new Error('useContent must be used within a ContentProvider');
    }
    return context;
};
_s(useContent, "b9L3QQ+jgeyIrH0NfHrJ8nn7VMU=");
const ContentProvider = ({ children, contentData })=>{
    const value = {
        homeData: contentData?.homeData || null,
        servicesData: contentData?.servicesData || null,
        aboutData: contentData?.aboutData || null,
        schedulingData: contentData?.schedulingData || null,
        contactData: contentData?.contactData || null,
        referUsData: contentData?.referUsData || null,
        blogsData: contentData?.blogsData || null,
        careersData: contentData?.careersData || null,
        servicesList: contentData?.servicesList || null,
        blogsList: contentData?.blogsList || null
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ContentContext.Provider, {
        value: value,
        children: children
    }, void 0, false, {
        fileName: "[project]/src/contexts/ContentContext.jsx",
        lineNumber: 29,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_c = ContentProvider;
const __TURBOPACK__default__export__ = ContentContext;
var _c;
__turbopack_context__.k.register(_c, "ContentProvider");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/assets/Logo-Color.png (static in ecmascript, tag client)", ((__turbopack_context__) => {

__turbopack_context__.v("/_next/static/media/Logo-Color.445a7774.png");}),
"[project]/src/assets/Logo-Color.png.mjs { IMAGE => \"[project]/src/assets/Logo-Color.png (static in ecmascript, tag client)\" } [app-client] (structured image object with data url, ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$assets$2f$Logo$2d$Color$2e$png__$28$static__in__ecmascript$2c$__tag__client$29$__ = __turbopack_context__.i("[project]/src/assets/Logo-Color.png (static in ecmascript, tag client)");
;
const __TURBOPACK__default__export__ = {
    src: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$assets$2f$Logo$2d$Color$2e$png__$28$static__in__ecmascript$2c$__tag__client$29$__["default"],
    width: 1128,
    height: 452,
    blurWidth: 8,
    blurHeight: 3,
    blurDataURL: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAADCAYAAACuyE5IAAAAbklEQVR42gFjAJz/ANHM3VevpcbD3NbkSPf7+wjy+voM8vr6DPT7+gv6/f0EAJGywczDyMz+sLTHsd3v7yTb8e4p3O/rMOHz8CPs+PcTAKC1yam2tsHUqrPInb/g4kev3NxXtt3eU7jc3VG63N5Mkb5FJpUT9YYAAAAASUVORK5CYII="
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/Loader.jsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$assets$2f$Logo$2d$Color$2e$png$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$src$2f$assets$2f$Logo$2d$Color$2e$png__$28$static__in__ecmascript$2c$__tag__client$2922$__$7d$__$5b$app$2d$client$5d$__$28$structured__image__object__with__data__url$2c$__ecmascript$29$__ = __turbopack_context__.i('[project]/src/assets/Logo-Color.png.mjs { IMAGE => "[project]/src/assets/Logo-Color.png (static in ecmascript, tag client)" } [app-client] (structured image object with data url, ecmascript)');
;
;
;
function Loader({ isLoading = true }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: `loader-overlay ${!isLoading ? 'hidden' : ''}`,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "loader-container",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "loader-logo",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                        src: "https://res.cloudinary.com/dvauarkh6/image/upload/v1763028431/blog-images/WhatsApp_Image_2025-11-12_at_16.09.50-removebg-preview_kiaenq.png",
                        alt: "Guided by Compassion Home Care"
                    }, void 0, false, {
                        fileName: "[project]/src/components/Loader.jsx",
                        lineNumber: 9,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/components/Loader.jsx",
                    lineNumber: 8,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "loader-spinner",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "spinner-ring"
                        }, void 0, false, {
                            fileName: "[project]/src/components/Loader.jsx",
                            lineNumber: 12,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "spinner-ring"
                        }, void 0, false, {
                            fileName: "[project]/src/components/Loader.jsx",
                            lineNumber: 13,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "spinner-ring"
                        }, void 0, false, {
                            fileName: "[project]/src/components/Loader.jsx",
                            lineNumber: 14,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/Loader.jsx",
                    lineNumber: 11,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "loader-text",
                    children: "Loading..."
                }, void 0, false, {
                    fileName: "[project]/src/components/Loader.jsx",
                    lineNumber: 16,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/Loader.jsx",
            lineNumber: 7,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/components/Loader.jsx",
        lineNumber: 6,
        columnNumber: 5
    }, this);
}
_c = Loader;
const __TURBOPACK__default__export__ = Loader;
var _c;
__turbopack_context__.k.register(_c, "Loader");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/config/airtable.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "FIELD_MAPPINGS",
    ()=>FIELD_MAPPINGS,
    "base",
    ()=>base,
    "table",
    ()=>table
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$airtable$2f$lib$2f$airtable$2e$umd$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/airtable/lib/airtable.umd.js [app-client] (ecmascript)");
;
// Airtable configuration
const AIRTABLE_TOKEN = ("TURBOPACK compile-time value", "patAzFDRhj4R1U5aC.1fae3b37731736e63268481d9502083b19ca045c5813617bfda9bdc61a0e6dae") || 'your-token-here';
const AIRTABLE_BASE_ID = ("TURBOPACK compile-time value", "app0acPzE1558kd44") || 'appvM2lDe6RRvDjl0';
const AIRTABLE_TABLE_NAME = 'GDC_Table';
// Debug logging
console.log('Airtable Configuration:');
console.log('Token:', ("TURBOPACK compile-time truthy", 1) ? `${AIRTABLE_TOKEN.substring(0, 10)}...` : "TURBOPACK unreachable");
console.log('Base ID:', AIRTABLE_BASE_ID);
console.log('Table Name:', AIRTABLE_TABLE_NAME);
// Configure Airtable with custom settings
__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$airtable$2f$lib$2f$airtable$2e$umd$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].configure({
    endpointUrl: 'https://api.airtable.com',
    apiKey: AIRTABLE_TOKEN
});
// Initialize base and table
const base = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$airtable$2f$lib$2f$airtable$2e$umd$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].base(AIRTABLE_BASE_ID);
console.log('Base:', base);
const table = base(AIRTABLE_TABLE_NAME);
console.log('Table:', table);
// Field mappings from our app to Airtable schema
const FIELD_MAPPINGS = {
    data: 'Data',
    name: 'Name' // This could be used for slug or identifier
};
;
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/libs/getRecord.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "getAllBlogPosts",
    ()=>getAllBlogPosts
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$airtable$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/config/airtable.js [app-client] (ecmascript)");
;
const recordToData = (record)=>{
    try {
        return {
            id: record.id || '',
            name: record.get(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$airtable$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FIELD_MAPPINGS"].name) || '',
            data: record.get(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$airtable$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FIELD_MAPPINGS"].data) || {},
            createdAt: record._rawJson?.createdTime || new Date().toISOString()
        };
    } catch (error) {
        console.error('Error processing record:', error);
        return {
            id: record.id || '',
            name: '',
            data: {},
            createdAt: new Date().toISOString()
        };
    }
};
const getAllBlogPosts = async (view = "Home")=>{
    return new Promise((resolve, reject)=>{
        try {
            // Validate table is initialized
            if (!__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$airtable$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["table"]) {
                reject(new Error('Airtable table is not initialized. Please check your configuration.'));
                return;
            }
            console.log('Fetching all blog posts...');
            const allRecords = [];
            // Build query options
            const queryOptions = {};
            if (view) {
                queryOptions.view = view;
            }
            // Select records with proper error handling
            const query = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$config$2f$airtable$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["table"].select(queryOptions);
            if (!query) {
                reject(new Error('Failed to create Airtable query. Table may not exist.'));
                return;
            }
            query.eachPage(function page(records, fetchNextPage) {
                try {
                    // This function (`page`) will get called for each page of records.
                    console.log(`Processing ${records.length} records...`);
                    if (records && records.length > 0) {
                        records.forEach(function(record) {
                            try {
                                console.log('Retrieved record:', record.id, record._rawJson?.createdTime);
                                allRecords.push(recordToData(record));
                            } catch (recordError) {
                                console.error('Error processing individual record:', recordError);
                            }
                        });
                    }
                    // To fetch the next page of records, call `fetchNextPage`.
                    // If there are more records, `page` will get called again.
                    // If there are no more records, `done` will get called.
                    if (fetchNextPage && typeof fetchNextPage === 'function') {
                        fetchNextPage();
                    }
                } catch (pageError) {
                    console.error('Error in page callback:', pageError);
                    reject(pageError);
                }
            }, function done(err) {
                try {
                    if (err) {
                        console.error('Error fetching blog posts:', err);
                        console.error('Error details:', {
                            statusCode: err.statusCode,
                            error: err.error,
                            message: err.message,
                            type: err.type
                        });
                        // Provide more specific error messages
                        if (err.statusCode === 404) {
                            reject(new Error('Table or base not found. Please check your Base ID and table name.'));
                        } else if (err.statusCode === 401) {
                            reject(new Error('Authentication failed. Please check your token.'));
                        } else if (err.statusCode === 403) {
                            reject(new Error('Access denied. Please check your token permissions.'));
                        } else {
                            reject(new Error(`Failed to fetch blog posts: ${err.message || 'Unknown error'}`));
                        }
                        return;
                    }
                    console.log(`✅ Successfully fetched ${allRecords.length} records`);
                    console.log(allRecords);
                    // Sort by creation date, newest first
                    const sortedRecords = allRecords.sort((a, b)=>{
                        try {
                            return new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime();
                        } catch (sortError) {
                            console.error('Error sorting records:', sortError);
                            return 0;
                        }
                    });
                    resolve(sortedRecords);
                } catch (doneError) {
                    console.error('Error in done callback:', doneError);
                    reject(doneError);
                }
            });
        } catch (error) {
            console.error('Error in getAllBlogPosts:', error);
            reject(error);
        }
    });
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/Providers.jsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Providers
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$contexts$2f$ThemeContext$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/contexts/ThemeContext.jsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$contexts$2f$ContentContext$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/contexts/ContentContext.jsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Loader$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/Loader.jsx [app-client] (ecmascript)");
// import ScrollToTop from './ScrollToTop'; // Next.js handles scoll
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$libs$2f$getRecord$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/libs/getRecord.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
;
;
const Record_toObject = (record)=>{
    let data = {};
    record.forEach((field)=>{
        data[field.name] = JSON.parse(field.data);
    });
    return data;
};
_c = Record_toObject;
function Providers({ children, initialContent }) {
    _s();
    // If initialContent is provided (SSR), use it. Otherwise null.
    const [homeData, setHomeData] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(initialContent?.homeData || null);
    const [servicesData, setServicesData] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(initialContent?.servicesData || null);
    const [aboutData, setAboutData] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(initialContent?.aboutData || null);
    const [schedulingData, setSchedulingData] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(initialContent?.schedulingData || null);
    const [contactData, setContactData] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(initialContent?.contactData || null);
    const [referUsData, setReferUsData] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(initialContent?.referUsData || null);
    const [blogsData, setBlogsData] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(initialContent?.blogsData || null);
    const [careersData, setCareersData] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(initialContent?.careersData || null);
    const [servicesList, setServicesList] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(initialContent?.servicesList || null);
    const [blogsList, setBlogsList] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(initialContent?.blogsList || null);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Providers.useEffect": ()=>{
            // If we already have homeData (from SSR), don't fetch again client-side
            if (homeData) return;
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$libs$2f$getRecord$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getAllBlogPosts"])('Home').then({
                "Providers.useEffect": (data)=>{
                    let Records = Record_toObject(data);
                    setHomeData(Records.Home);
                    setServicesData(Records.Services);
                    setAboutData(Records.About);
                    setSchedulingData(Records.Scheduling);
                    setContactData(Records.Contact);
                    setReferUsData(Records.Refer);
                    setBlogsData(Records.Blogs);
                    setCareersData(Records.Careers);
                    setServicesList(Records.ServicesData);
                    setBlogsList(Records.BlogsData);
                }
            }["Providers.useEffect"]).catch({
                "Providers.useEffect": (error)=>{
                    console.error('Error loading data from Airtable:', error);
                    setHomeData({});
                }
            }["Providers.useEffect"]);
        }
    }["Providers.useEffect"], [
        homeData
    ]);
    const contentData = {
        homeData,
        servicesData,
        aboutData,
        schedulingData,
        contactData,
        referUsData,
        blogsData,
        careersData,
        servicesList,
        blogsList
    };
    const isLoading = !homeData;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$contexts$2f$ThemeContext$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ThemeProvider"], {
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$contexts$2f$ContentContext$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ContentProvider"], {
            contentData: contentData,
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Loader$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                    isLoading: isLoading
                }, void 0, false, {
                    fileName: "[project]/src/components/Providers.jsx",
                    lineNumber: 73,
                    columnNumber: 17
                }, this),
                children
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/Providers.jsx",
            lineNumber: 71,
            columnNumber: 13
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/components/Providers.jsx",
        lineNumber: 70,
        columnNumber: 9
    }, this);
}
_s(Providers, "fg63FWPZlXNG4G6cliBb7eBSy/4=");
_c1 = Providers;
var _c, _c1;
__turbopack_context__.k.register(_c, "Record_toObject");
__turbopack_context__.k.register(_c1, "Providers");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=_af4549e6._.js.map