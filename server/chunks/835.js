exports.id = 835;
exports.ids = [835];
exports.modules = {

/***/ 2342:
/***/ ((module) => {

// Exports
module.exports = {
	"heading": "Login_heading__ddCmr",
	"image": "Login_image__NMZAz",
	"app": "Login_app__Fr_rT",
	"a": "Login_a__403Ed",
	"para": "Login_para__noQaN",
	"light": "Login_light__7LQDt",
	"bg": "Login_bg__K81bQ",
	"loginform": "Login_loginform__OshHV",
	"header": "Login_header__uVn15",
	"error": "Login_error__aOZP3",
	"input": "Login_input__r_1vS",
	"inputs": "Login_inputs__4U5Q3",
	"footer": "Login_footer__8HgK7",
	"button": "Login_button__ejJ5H"
};


/***/ }),

/***/ 463:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2167);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);

const serverApi = axios__WEBPACK_IMPORTED_MODULE_0___default().create({
    baseURL: "https://tasker-01.herokuapp.com/api"
});
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (serverApi);


/***/ }),

/***/ 4936:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const types = {
    USER_DETAILS: 'USER_DETAILS',
    JOB_DETAILS: "JOB_DETAILS"
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (types);


/***/ }),

/***/ 5585:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "X": () => (/* binding */ setUserDetails)
/* harmony export */ });
/* harmony import */ var _actionTypes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(4936);

const setUserDetails = (data)=>(dispatch)=>{
        dispatch({
            type: _actionTypes__WEBPACK_IMPORTED_MODULE_0__/* ["default"].USER_DETAILS */ .Z.USER_DETAILS,
            payload: data
        });
    }
;


/***/ })

};
;