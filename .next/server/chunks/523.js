"use strict";
exports.id = 523;
exports.ids = [523];
exports.modules = {

/***/ 7523:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_bootstrap_Button__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1937);
/* harmony import */ var react_bootstrap_Button__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap_Button__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_bootstrap_Card__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6810);
/* harmony import */ var react_bootstrap_Card__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap_Card__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _modal__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(7375);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_modal__WEBPACK_IMPORTED_MODULE_3__]);
_modal__WEBPACK_IMPORTED_MODULE_3__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];




const Carta = ({ header , titulo , contenido , tituloModal , descripcionModal , ocultar  })=>{
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((react_bootstrap_Card__WEBPACK_IMPORTED_MODULE_2___default()), {
        className: "position-static shadow-lg bg-transparente text-dark text-center h-100 w-100",
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((react_bootstrap_Card__WEBPACK_IMPORTED_MODULE_2___default().Header), {
                className: "bg-primary text-white",
                children: header
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((react_bootstrap_Card__WEBPACK_IMPORTED_MODULE_2___default().Body), {
                className: "d-flex flex-column h-100",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((react_bootstrap_Card__WEBPACK_IMPORTED_MODULE_2___default().Title), {
                        children: titulo
                    }),
                    contenido,
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_modal__WEBPACK_IMPORTED_MODULE_3__["default"], {
                        titulo: tituloModal,
                        descripcion: descripcionModal,
                        ocultarModal: ocultar
                    })
                ]
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Carta);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ })

};
;