"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/_app",{

/***/ "./pages/NavBar.js":
/*!*************************!*\
  !*** ./pages/NavBar.js ***!
  \*************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _mui_material_AppBar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @mui/material/AppBar */ \"./node_modules/@mui/material/AppBar/index.js\");\n/* harmony import */ var _mui_material_Box__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @mui/material/Box */ \"./node_modules/@mui/material/Box/index.js\");\n/* harmony import */ var _mui_material_Toolbar__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @mui/material/Toolbar */ \"./node_modules/@mui/material/Toolbar/index.js\");\n/* harmony import */ var _mui_material_IconButton__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @mui/material/IconButton */ \"./node_modules/@mui/material/IconButton/index.js\");\n/* harmony import */ var _mui_material_Typography__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @mui/material/Typography */ \"./node_modules/@mui/material/Typography/index.js\");\n/* harmony import */ var _mui_material_Menu__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @mui/material/Menu */ \"./node_modules/@mui/material/Menu/index.js\");\n/* harmony import */ var _mui_icons_material_Menu__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @mui/icons-material/Menu */ \"./node_modules/@mui/icons-material/Menu.js\");\n/* harmony import */ var _mui_material_Container__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @mui/material/Container */ \"./node_modules/@mui/material/Container/index.js\");\n/* harmony import */ var _mui_material_Button__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @mui/material/Button */ \"./node_modules/@mui/material/Button/index.js\");\n/* harmony import */ var _mui_material_MenuItem__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @mui/material/MenuItem */ \"./node_modules/@mui/material/MenuItem/index.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);\n\n\n\n\n\n\n\n\n\n\n\n\n\nfunction _arrayLikeToArray(arr, len) {\n    if (len == null || len > arr.length) len = arr.length;\n    for(var i = 0, arr2 = new Array(len); i < len; i++)arr2[i] = arr[i];\n    return arr2;\n}\nfunction _arrayWithHoles(arr) {\n    if (Array.isArray(arr)) return arr;\n}\nfunction _iterableToArrayLimit(arr, i) {\n    var _i = arr == null ? null : typeof Symbol !== \"undefined\" && arr[Symbol.iterator] || arr[\"@@iterator\"];\n    if (_i == null) return;\n    var _arr = [];\n    var _n = true;\n    var _d = false;\n    var _s1, _e;\n    try {\n        for(_i = _i.call(arr); !(_n = (_s1 = _i.next()).done); _n = true){\n            _arr.push(_s1.value);\n            if (i && _arr.length === i) break;\n        }\n    } catch (err) {\n        _d = true;\n        _e = err;\n    } finally{\n        try {\n            if (!_n && _i[\"return\"] != null) _i[\"return\"]();\n        } finally{\n            if (_d) throw _e;\n        }\n    }\n    return _arr;\n}\nfunction _nonIterableRest() {\n    throw new TypeError(\"Invalid attempt to destructure non-iterable instance.\\\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\");\n}\nfunction _slicedToArray(arr, i) {\n    return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest();\n}\nfunction _unsupportedIterableToArray(o, minLen) {\n    if (!o) return;\n    if (typeof o === \"string\") return _arrayLikeToArray(o, minLen);\n    var n = Object.prototype.toString.call(o).slice(8, -1);\n    if (n === \"Object\" && o.constructor) n = o.constructor.name;\n    if (n === \"Map\" || n === \"Set\") return Array.from(n);\n    if (n === \"Arguments\" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);\n}\nvar _this = undefined;\nvar _s = $RefreshSig$();\nvar pages = [\n    \"Home\",\n    \"Inventory\",\n    \"Suppliers\"\n];\nvar NavBar = function() {\n    var _this1 = _this;\n    _s();\n    var ref = _slicedToArray(react__WEBPACK_IMPORTED_MODULE_1___default().useState(null), 2), anchorElNav = ref[0], setAnchorElNav = ref[1];\n    var handleOpenNavMenu = function(event) {\n        setAnchorElNav(event.currentTarget);\n    };\n    var handleCloseNavMenu = function() {\n        setAnchorElNav(null);\n    };\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material_AppBar__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n        position: \"static\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material_Container__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n            maxWidth: \"xxl\",\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material_Toolbar__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n                disableGutters: true,\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material_Box__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n                        sx: {\n                            flexGrow: 1,\n                            display: {\n                                xs: \"flex\",\n                                md: \"none\"\n                            }\n                        },\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material_IconButton__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {\n                                size: \"large\",\n                                \"aria-label\": \"account of current user\",\n                                \"aria-controls\": \"menu-appbar\",\n                                \"aria-haspopup\": \"true\",\n                                onClick: handleOpenNavMenu,\n                                color: \"inherit\",\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_icons_material_Menu__WEBPACK_IMPORTED_MODULE_8__[\"default\"], {}, void 0, false, {\n                                    fileName: \"/home/gaurav/gitOffice/inventory-management-system/pages/NavBar.js\",\n                                    lineNumber: 38,\n                                    columnNumber: 15\n                                }, _this)\n                            }, void 0, false, {\n                                fileName: \"/home/gaurav/gitOffice/inventory-management-system/pages/NavBar.js\",\n                                lineNumber: 30,\n                                columnNumber: 13\n                            }, _this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material_Menu__WEBPACK_IMPORTED_MODULE_9__[\"default\"], {\n                                id: \"menu-appbar\",\n                                anchorEl: anchorElNav,\n                                anchorOrigin: {\n                                    vertical: \"bottom\",\n                                    horizontal: \"left\"\n                                },\n                                keepMounted: true,\n                                transformOrigin: {\n                                    vertical: \"top\",\n                                    horizontal: \"left\"\n                                },\n                                open: Boolean(anchorElNav),\n                                onClose: handleCloseNavMenu,\n                                sx: {\n                                    display: {\n                                        xs: \"block\",\n                                        md: \"none\"\n                                    }\n                                },\n                                children: pages.map(function(page) {\n                                    /*#__PURE__*/ return (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material_MenuItem__WEBPACK_IMPORTED_MODULE_10__[\"default\"], {\n                                        onClick: handleCloseNavMenu,\n                                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {\n                                            href: page === \"Home\" ? \"/\" : \"/\".concat(page),\n                                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material_Typography__WEBPACK_IMPORTED_MODULE_11__[\"default\"], {\n                                                textAlign: \"center\",\n                                                children: page\n                                            }, void 0, false, {\n                                                fileName: \"/home/gaurav/gitOffice/inventory-management-system/pages/NavBar.js\",\n                                                lineNumber: 61,\n                                                columnNumber: 21\n                                            }, _this1)\n                                        }, void 0, false, {\n                                            fileName: \"/home/gaurav/gitOffice/inventory-management-system/pages/NavBar.js\",\n                                            lineNumber: 60,\n                                            columnNumber: 19\n                                        }, _this1)\n                                    }, page, false, {\n                                        fileName: \"/home/gaurav/gitOffice/inventory-management-system/pages/NavBar.js\",\n                                        lineNumber: 59,\n                                        columnNumber: 17\n                                    }, _this1);\n                                })\n                            }, void 0, false, {\n                                fileName: \"/home/gaurav/gitOffice/inventory-management-system/pages/NavBar.js\",\n                                lineNumber: 40,\n                                columnNumber: 13\n                            }, _this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/home/gaurav/gitOffice/inventory-management-system/pages/NavBar.js\",\n                        lineNumber: 29,\n                        columnNumber: 11\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material_Typography__WEBPACK_IMPORTED_MODULE_11__[\"default\"], {\n                        variant: \"h6\",\n                        noWrap: true,\n                        component: \"div\",\n                        sx: {\n                            flexGrow: 1,\n                            display: {\n                                xs: \"flex\",\n                                md: \"none\"\n                            }\n                        },\n                        children: \"IMS\"\n                    }, void 0, false, {\n                        fileName: \"/home/gaurav/gitOffice/inventory-management-system/pages/NavBar.js\",\n                        lineNumber: 67,\n                        columnNumber: 11\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material_Box__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n                        sx: {\n                            flexGrow: 1,\n                            display: {\n                                xs: \"none\",\n                                md: \"flex\"\n                            }\n                        },\n                        children: pages.map(function(page) {\n                            /*#__PURE__*/ return (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {\n                                href: page === \"Home\" ? \"/\" : \"/\".concat(page),\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material_Button__WEBPACK_IMPORTED_MODULE_12__[\"default\"], {\n                                    onClick: handleCloseNavMenu,\n                                    sx: {\n                                        my: 2,\n                                        color: \"white\",\n                                        display: \"block\"\n                                    },\n                                    children: page\n                                }, page, false, {\n                                    fileName: \"/home/gaurav/gitOffice/inventory-management-system/pages/NavBar.js\",\n                                    lineNumber: 78,\n                                    columnNumber: 17\n                                }, _this1)\n                            }, void 0, false, {\n                                fileName: \"/home/gaurav/gitOffice/inventory-management-system/pages/NavBar.js\",\n                                lineNumber: 77,\n                                columnNumber: 15\n                            }, _this1);\n                        })\n                    }, void 0, false, {\n                        fileName: \"/home/gaurav/gitOffice/inventory-management-system/pages/NavBar.js\",\n                        lineNumber: 75,\n                        columnNumber: 11\n                    }, _this)\n                ]\n            }, void 0, true, {\n                fileName: \"/home/gaurav/gitOffice/inventory-management-system/pages/NavBar.js\",\n                lineNumber: 28,\n                columnNumber: 9\n            }, _this)\n        }, void 0, false, {\n            fileName: \"/home/gaurav/gitOffice/inventory-management-system/pages/NavBar.js\",\n            lineNumber: 27,\n            columnNumber: 7\n        }, _this)\n    }, void 0, false, {\n        fileName: \"/home/gaurav/gitOffice/inventory-management-system/pages/NavBar.js\",\n        lineNumber: 26,\n        columnNumber: 5\n    }, _this));\n};\n_s(NavBar, \"ePvnpKc/xBhdzxOErjusXPUdwkI=\");\n_c = NavBar;\n/* harmony default export */ __webpack_exports__[\"default\"] = (NavBar);\nvar _c;\n$RefreshReg$(_c, \"NavBar\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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UUFBUSxFQUFFLENBQUM7NEJBQUVDLE9BQU8sRUFBRSxDQUFDO2dDQUFDQyxFQUFFLEVBQUUsQ0FBTTtnQ0FBRUMsRUFBRSxFQUFFLENBQU07NEJBQUMsQ0FBQzt3QkFBQyxDQUFDO2tDQUN6RCxDQUVEOzs7Ozs7Z0dBQ0MxQix5REFBRzt3QkFBQ3NCLEVBQUUsRUFBRSxDQUFDOzRCQUFDQyxRQUFRLEVBQUUsQ0FBQzs0QkFBRUMsT0FBTyxFQUFFLENBQUM7Z0NBQUNDLEVBQUUsRUFBRSxDQUFNO2dDQUFFQyxFQUFFLEVBQUUsQ0FBTTs0QkFBQyxDQUFDO3dCQUFDLENBQUM7a0NBQzFEaEIsS0FBSyxDQUFDaUMsR0FBRyxDQUFDLFFBQVEsQ0FBUEMsSUFBSTswQ0FDZCxNQUFNQyxDQUFBQSw2REFBQUEsQ0FBTHBDLGtEQUFJO2dDQUFDb0MsSUFBSSxFQUFFRCxJQUFJLEtBQUssQ0FBTSxRQUFJLENBQUMsS0FBSyxDQUFDLEdBQU8sT0FBTEEsSUFBSTtzSEFDekNyQyw2REFBTTtvQ0FFTHdCLE9BQU8sRUFBRWIsa0JBQWtCO29DQUMzQkksRUFBRSxFQUFFLENBQUM7d0NBQUM0QixFQUFFLEVBQUUsQ0FBQzt3Q0FBRWxCLEtBQUssRUFBRSxDQUFPO3dDQUFFUixPQUFPLEVBQUUsQ0FBTztvQ0FBQyxDQUFDOzhDQUU5Q29CLElBQUk7bUNBSkFBLElBQUk7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBYTNCLENBQUM7R0E1RUtqQyxNQUFNO0tBQU5BLE1BQU07QUE4RVosK0RBQWVBLE1BQU0sRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9OYXZCYXIuanM/NTg2OSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgQXBwQmFyIGZyb20gXCJAbXVpL21hdGVyaWFsL0FwcEJhclwiO1xuaW1wb3J0IEJveCBmcm9tIFwiQG11aS9tYXRlcmlhbC9Cb3hcIjtcbmltcG9ydCBUb29sYmFyIGZyb20gXCJAbXVpL21hdGVyaWFsL1Rvb2xiYXJcIjtcbmltcG9ydCBJY29uQnV0dG9uIGZyb20gXCJAbXVpL21hdGVyaWFsL0ljb25CdXR0b25cIjtcbmltcG9ydCBUeXBvZ3JhcGh5IGZyb20gXCJAbXVpL21hdGVyaWFsL1R5cG9ncmFwaHlcIjtcbmltcG9ydCBNZW51IGZyb20gXCJAbXVpL21hdGVyaWFsL01lbnVcIjtcbmltcG9ydCBNZW51SWNvbiBmcm9tIFwiQG11aS9pY29ucy1tYXRlcmlhbC9NZW51XCI7XG5pbXBvcnQgQ29udGFpbmVyIGZyb20gXCJAbXVpL21hdGVyaWFsL0NvbnRhaW5lclwiO1xuaW1wb3J0IEJ1dHRvbiBmcm9tIFwiQG11aS9tYXRlcmlhbC9CdXR0b25cIjtcbmltcG9ydCBNZW51SXRlbSBmcm9tIFwiQG11aS9tYXRlcmlhbC9NZW51SXRlbVwiO1xuaW1wb3J0IExpbmsgZnJvbSBcIm5leHQvbGlua1wiO1xuXG5jb25zdCBwYWdlcyA9IFtcIkhvbWVcIiwgXCJJbnZlbnRvcnlcIiwgXCJTdXBwbGllcnNcIl07XG5cbmNvbnN0IE5hdkJhciA9ICgpID0+IHtcbiAgY29uc3QgW2FuY2hvckVsTmF2LCBzZXRBbmNob3JFbE5hdl0gPSBSZWFjdC51c2VTdGF0ZShudWxsKTtcblxuICBjb25zdCBoYW5kbGVPcGVuTmF2TWVudSA9IChldmVudCkgPT4ge1xuICAgIHNldEFuY2hvckVsTmF2KGV2ZW50LmN1cnJlbnRUYXJnZXQpO1xuICB9O1xuICBjb25zdCBoYW5kbGVDbG9zZU5hdk1lbnUgPSAoKSA9PiB7XG4gICAgc2V0QW5jaG9yRWxOYXYobnVsbCk7XG4gIH07XG4gIHJldHVybiAoXG4gICAgPEFwcEJhciBwb3NpdGlvbj1cInN0YXRpY1wiPlxuICAgICAgPENvbnRhaW5lciBtYXhXaWR0aD1cInh4bFwiPlxuICAgICAgICA8VG9vbGJhciBkaXNhYmxlR3V0dGVycz5cbiAgICAgICAgICA8Qm94IHN4PXt7IGZsZXhHcm93OiAxLCBkaXNwbGF5OiB7IHhzOiBcImZsZXhcIiwgbWQ6IFwibm9uZVwiIH0gfX0+XG4gICAgICAgICAgICA8SWNvbkJ1dHRvblxuICAgICAgICAgICAgICBzaXplPVwibGFyZ2VcIlxuICAgICAgICAgICAgICBhcmlhLWxhYmVsPVwiYWNjb3VudCBvZiBjdXJyZW50IHVzZXJcIlxuICAgICAgICAgICAgICBhcmlhLWNvbnRyb2xzPVwibWVudS1hcHBiYXJcIlxuICAgICAgICAgICAgICBhcmlhLWhhc3BvcHVwPVwidHJ1ZVwiXG4gICAgICAgICAgICAgIG9uQ2xpY2s9e2hhbmRsZU9wZW5OYXZNZW51fVxuICAgICAgICAgICAgICBjb2xvcj1cImluaGVyaXRcIlxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICA8TWVudUljb24gLz5cbiAgICAgICAgICAgIDwvSWNvbkJ1dHRvbj5cbiAgICAgICAgICAgIDxNZW51XG4gICAgICAgICAgICAgIGlkPVwibWVudS1hcHBiYXJcIlxuICAgICAgICAgICAgICBhbmNob3JFbD17YW5jaG9yRWxOYXZ9XG4gICAgICAgICAgICAgIGFuY2hvck9yaWdpbj17e1xuICAgICAgICAgICAgICAgIHZlcnRpY2FsOiBcImJvdHRvbVwiLFxuICAgICAgICAgICAgICAgIGhvcml6b250YWw6IFwibGVmdFwiLFxuICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICBrZWVwTW91bnRlZFxuICAgICAgICAgICAgICB0cmFuc2Zvcm1PcmlnaW49e3tcbiAgICAgICAgICAgICAgICB2ZXJ0aWNhbDogXCJ0b3BcIixcbiAgICAgICAgICAgICAgICBob3Jpem9udGFsOiBcImxlZnRcIixcbiAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgb3Blbj17Qm9vbGVhbihhbmNob3JFbE5hdil9XG4gICAgICAgICAgICAgIG9uQ2xvc2U9e2hhbmRsZUNsb3NlTmF2TWVudX1cbiAgICAgICAgICAgICAgc3g9e3tcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiB7IHhzOiBcImJsb2NrXCIsIG1kOiBcIm5vbmVcIiB9LFxuICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICB7cGFnZXMubWFwKChwYWdlKSA9PiAoXG4gICAgICAgICAgICAgICAgPE1lbnVJdGVtIGtleT17cGFnZX0gb25DbGljaz17aGFuZGxlQ2xvc2VOYXZNZW51fT5cbiAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9e3BhZ2UgPT09IFwiSG9tZVwiID8gYC9gIDogYC8ke3BhZ2V9YH0+XG4gICAgICAgICAgICAgICAgICAgIDxUeXBvZ3JhcGh5IHRleHRBbGlnbj1cImNlbnRlclwiPntwYWdlfTwvVHlwb2dyYXBoeT5cbiAgICAgICAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgICAgICA8L01lbnVJdGVtPlxuICAgICAgICAgICAgICApKX1cbiAgICAgICAgICAgIDwvTWVudT5cbiAgICAgICAgICA8L0JveD5cbiAgICAgICAgICA8VHlwb2dyYXBoeVxuICAgICAgICAgICAgdmFyaWFudD1cImg2XCJcbiAgICAgICAgICAgIG5vV3JhcFxuICAgICAgICAgICAgY29tcG9uZW50PVwiZGl2XCJcbiAgICAgICAgICAgIHN4PXt7IGZsZXhHcm93OiAxLCBkaXNwbGF5OiB7IHhzOiBcImZsZXhcIiwgbWQ6IFwibm9uZVwiIH0gfX1cbiAgICAgICAgICA+XG4gICAgICAgICAgICBJTVNcbiAgICAgICAgICA8L1R5cG9ncmFwaHk+XG4gICAgICAgICAgPEJveCBzeD17eyBmbGV4R3JvdzogMSwgZGlzcGxheTogeyB4czogXCJub25lXCIsIG1kOiBcImZsZXhcIiB9IH19PlxuICAgICAgICAgICAge3BhZ2VzLm1hcCgocGFnZSkgPT4gKFxuICAgICAgICAgICAgICA8TGluayBocmVmPXtwYWdlID09PSBcIkhvbWVcIiA/IGAvYCA6IGAvJHtwYWdlfWB9PlxuICAgICAgICAgICAgICAgIDxCdXR0b25cbiAgICAgICAgICAgICAgICAgIGtleT17cGFnZX1cbiAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e2hhbmRsZUNsb3NlTmF2TWVudX1cbiAgICAgICAgICAgICAgICAgIHN4PXt7IG15OiAyLCBjb2xvcjogXCJ3aGl0ZVwiLCBkaXNwbGF5OiBcImJsb2NrXCIgfX1cbiAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICB7cGFnZX1cbiAgICAgICAgICAgICAgICA8L0J1dHRvbj5cbiAgICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICAgKSl9XG4gICAgICAgICAgPC9Cb3g+XG4gICAgICAgIDwvVG9vbGJhcj5cbiAgICAgIDwvQ29udGFpbmVyPlxuICAgIDwvQXBwQmFyPlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgTmF2QmFyO1xuIl0sIm5hbWVzIjpbIlJlYWN0IiwiQXBwQmFyIiwiQm94IiwiVG9vbGJhciIsIkljb25CdXR0b24iLCJUeXBvZ3JhcGh5IiwiTWVudSIsIk1lbnVJY29uIiwiQ29udGFpbmVyIiwiQnV0dG9uIiwiTWVudUl0ZW0iLCJMaW5rIiwicGFnZXMiLCJOYXZCYXIiLCJ1c2VTdGF0ZSIsImFuY2hvckVsTmF2Iiwic2V0QW5jaG9yRWxOYXYiLCJoYW5kbGVPcGVuTmF2TWVudSIsImV2ZW50IiwiY3VycmVudFRhcmdldCIsImhhbmRsZUNsb3NlTmF2TWVudSIsInBvc2l0aW9uIiwibWF4V2lkdGgiLCJkaXNhYmxlR3V0dGVycyIsInN4IiwiZmxleEdyb3ciLCJkaXNwbGF5IiwieHMiLCJtZCIsInNpemUiLCJhcmlhLWxhYmVsIiwiYXJpYS1jb250cm9scyIsImFyaWEtaGFzcG9wdXAiLCJvbkNsaWNrIiwiY29sb3IiLCJpZCIsImFuY2hvckVsIiwiYW5jaG9yT3JpZ2luIiwidmVydGljYWwiLCJob3Jpem9udGFsIiwia2VlcE1vdW50ZWQiLCJ0cmFuc2Zvcm1PcmlnaW4iLCJvcGVuIiwiQm9vbGVhbiIsIm9uQ2xvc2UiLCJtYXAiLCJwYWdlIiwiaHJlZiIsInRleHRBbGlnbiIsInZhcmlhbnQiLCJub1dyYXAiLCJjb21wb25lbnQiLCJteSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/NavBar.js\n");

/***/ })

});