"use strict";
exports.id = 618;
exports.ids = [618];
exports.modules = {

/***/ 6618:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_bootstrap_Pagination__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(4883);
/* harmony import */ var react_bootstrap_Pagination__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap_Pagination__WEBPACK_IMPORTED_MODULE_2__);



const PaginationComponent = ({ total =0 , itemsPerPage =10 , currentPage =1 , onPageChange  })=>{
    const { 0: totalPages , 1: setTotalPages  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0);
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        if (total > 0 && itemsPerPage > 0) setTotalPages(Math.ceil(total / itemsPerPage));
    }, [
        total,
        itemsPerPage
    ]);
    const paginationItems = (0,react__WEBPACK_IMPORTED_MODULE_1__.useMemo)(()=>{
        const pages = [];
        for(let i = 1; i <= totalPages; i++){
            pages.push(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((react_bootstrap_Pagination__WEBPACK_IMPORTED_MODULE_2___default().Item), {
                active: i === currentPage,
                onClick: ()=>onPageChange(i)
                ,
                children: i
            }, i));
        }
        return pages;
    }, [
        totalPages,
        currentPage
    ]);
    if (totalPages === 0) return null;
    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((react_bootstrap_Pagination__WEBPACK_IMPORTED_MODULE_2___default()), {
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((react_bootstrap_Pagination__WEBPACK_IMPORTED_MODULE_2___default().Prev), {
                onClick: ()=>onPageChange(currentPage - 1)
                ,
                disabled: currentPage === 1
            }),
            paginationItems,
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((react_bootstrap_Pagination__WEBPACK_IMPORTED_MODULE_2___default().Next), {
                onClick: ()=>onPageChange(currentPage + 1)
                ,
                disabled: currentPage === totalPages
            })
        ]
    }));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (PaginationComponent);


/***/ })

};
;