exports.id = 755;
exports.ids = [755];
exports.modules = {

/***/ 8754:
/***/ ((module) => {

// Exports
module.exports = {
	"sidebar": "Sidebar_sidebar__gyKt1"
};


/***/ }),

/***/ 1612:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_icons_ai__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(9847);
/* harmony import */ var react_icons_ai__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_icons_ai__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _styles_Sidebar_module_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(8754);
/* harmony import */ var _styles_Sidebar_module_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_styles_Sidebar_module_css__WEBPACK_IMPORTED_MODULE_3__);




function sidebar() {
    const handleClick = ()=>{
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    };
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        id: "sidebar",
        className: (_styles_Sidebar_module_css__WEBPACK_IMPORTED_MODULE_3___default().sidebar) + " rounded-circle",
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h3", {
            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_icons_ai__WEBPACK_IMPORTED_MODULE_2__.AiOutlineArrowUp, {
                className: "position-absolute ",
                onClick: handleClick
            })
        })
    });
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (sidebar);


/***/ }),

/***/ 2755:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _footer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(154);
/* harmony import */ var _nav__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(3010);
/* harmony import */ var _sidebar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(1612);





const Template = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.forwardRef)(({ children  }, ref)=>{
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: "container-fluid p-0 d-flex flex-column",
        style: {
            display: "flex",
            flexDirection: "column",
            minHeight: "100vh"
        },
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_nav__WEBPACK_IMPORTED_MODULE_3__["default"], {}),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_sidebar__WEBPACK_IMPORTED_MODULE_4__["default"], {
                className: ""
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "containerPage align-items-center bg-pasto text-dark d-flex flex-column",
                style: {
                    flex: 1
                },
                children: children
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_footer__WEBPACK_IMPORTED_MODULE_2__["default"], {})
        ]
    });
});
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Template);


/***/ })

};
;