exports.id = 10;
exports.ids = [10];
exports.modules = {

/***/ 3802:
/***/ ((module) => {

// Exports
module.exports = {
	"navbar": "Navbar_navbar__66x_3",
	"scrollDown": "Navbar_scrollDown__z76ie",
	"slide-in-top": "Navbar_slide-in-top__WYPq_",
	"scrollUp": "Navbar_scrollUp__dSjlc",
	"slide-out-top": "Navbar_slide-out-top__v4VOt",
	"scrollTop": "Navbar_scrollTop__AaEwi",
	"link": "Navbar_link__b0OQz"
};


/***/ }),

/***/ 3010:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(358);
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_bootstrap_Container__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(4678);
/* harmony import */ var react_bootstrap_Container__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap_Container__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_bootstrap_NavbarToggle__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1856);
/* harmony import */ var react_bootstrap_NavbarToggle__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap_NavbarToggle__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_bootstrap_Nav__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(2540);
/* harmony import */ var react_bootstrap_Nav__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap_Nav__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react_bootstrap_Navbar__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(4934);
/* harmony import */ var react_bootstrap_Navbar__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap_Navbar__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _styles_Navbar_module_css__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(3802);
/* harmony import */ var _styles_Navbar_module_css__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_styles_Navbar_module_css__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var react_scroll__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(3094);
/* harmony import */ var react_scroll__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_scroll__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var aos__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(9783);
/* harmony import */ var aos__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(aos__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var aos_dist_aos_css__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(1759);
/* harmony import */ var aos_dist_aos_css__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(aos_dist_aos_css__WEBPACK_IMPORTED_MODULE_9__);











const navBar = ()=>{
    const [scrollDirection, setScrollDirection] = (0,react__WEBPACK_IMPORTED_MODULE_7__.useState)("none");
    const [scrollTop, setScrollTop] = (0,react__WEBPACK_IMPORTED_MODULE_7__.useState)(0);
    (0,react__WEBPACK_IMPORTED_MODULE_7__.useEffect)(()=>{
        aos__WEBPACK_IMPORTED_MODULE_8___default().init();
        const handleScroll = ()=>{
            const newScrollTop = window.scrollY;
            if (newScrollTop < 10) {
                setScrollDirection("top");
            }
            if (newScrollTop > scrollTop) {
                setScrollDirection("down");
            } else setScrollTop(newScrollTop);
        };
        window.addEventListener("scroll", handleScroll);
        return ()=>{
            window.removeEventListener("scroll", handleScroll);
        };
    }, [
        scrollTop
    ]);
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((react_bootstrap_Navbar__WEBPACK_IMPORTED_MODULE_5___default()), {
            className: `
                  ${(_styles_Navbar_module_css__WEBPACK_IMPORTED_MODULE_10___default().navbar)}
                  ${scrollDirection === "down" ? (_styles_Navbar_module_css__WEBPACK_IMPORTED_MODULE_10___default().scrollDown) : ""}
                  ${scrollDirection === "up" ? (_styles_Navbar_module_css__WEBPACK_IMPORTED_MODULE_10___default().scrollUp) : ""}
                  ${scrollDirection === "top" ? (_styles_Navbar_module_css__WEBPACK_IMPORTED_MODULE_10___default().scrollTop) : ""}

                `,
            expand: "md",
            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((react_bootstrap_Container__WEBPACK_IMPORTED_MODULE_2___default()), {
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((react_bootstrap_NavbarToggle__WEBPACK_IMPORTED_MODULE_3___default()), {
                        "aria-controls": "basic-navbar-nav"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__.NavbarBrand, {
                        href: "/",
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                            className: "logo",
                            src: "/favicon.ico"
                        })
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "text-dark"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((react_bootstrap_Navbar__WEBPACK_IMPORTED_MODULE_5___default().Collapse), {
                        className: "justify-content-end",
                        id: "basic-navbar-nav",
                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((react_bootstrap_Nav__WEBPACK_IMPORTED_MODULE_4___default()), {
                            className: "text-dark bg-lightgreen",
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_scroll__WEBPACK_IMPORTED_MODULE_6__.Link, {
                                    className: (_styles_Navbar_module_css__WEBPACK_IMPORTED_MODULE_10___default().link) + " nav-link rounded",
                                    to: "home",
                                    smooth: true,
                                    children: "Home"
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_scroll__WEBPACK_IMPORTED_MODULE_6__.Link, {
                                    className: (_styles_Navbar_module_css__WEBPACK_IMPORTED_MODULE_10___default().link) + " nav-link rounded",
                                    to: "proyectos",
                                    smooth: true,
                                    children: "Proyectos"
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_scroll__WEBPACK_IMPORTED_MODULE_6__.Link, {
                                    className: (_styles_Navbar_module_css__WEBPACK_IMPORTED_MODULE_10___default().link) + " nav-link rounded",
                                    to: "nosotros",
                                    smooth: true,
                                    children: "Nosotros"
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_scroll__WEBPACK_IMPORTED_MODULE_6__.Link, {
                                    className: (_styles_Navbar_module_css__WEBPACK_IMPORTED_MODULE_10___default().link) + " nav-link rounded",
                                    to: "servicios",
                                    smooth: true,
                                    children: "Servicios"
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_scroll__WEBPACK_IMPORTED_MODULE_6__.Link, {
                                    className: (_styles_Navbar_module_css__WEBPACK_IMPORTED_MODULE_10___default().link) + " nav-link rounded",
                                    to: "clientes",
                                    smooth: true,
                                    children: "Clientes"
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_scroll__WEBPACK_IMPORTED_MODULE_6__.Link, {
                                    className: (_styles_Navbar_module_css__WEBPACK_IMPORTED_MODULE_10___default().link) + " nav-link rounded",
                                    to: "precios",
                                    smooth: true,
                                    children: "Precios"
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_scroll__WEBPACK_IMPORTED_MODULE_6__.Link, {
                                    className: (_styles_Navbar_module_css__WEBPACK_IMPORTED_MODULE_10___default().link) + " nav-link rounded",
                                    to: "contacto",
                                    smooth: true,
                                    children: "Contacto"
                                })
                            ]
                        })
                    })
                ]
            })
        })
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (navBar);


/***/ }),

/***/ 1759:
/***/ (() => {



/***/ })

};
;