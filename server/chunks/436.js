"use strict";
exports.id = 436;
exports.ids = [436];
exports.modules = {

/***/ 463:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

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

/***/ 4436:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9816);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _axios__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(463);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_4__);





const Category = ({ categories , button  })=>{
    // const [categories, setCategories] = useState([])
    const { push  } = (0,next_router__WEBPACK_IMPORTED_MODULE_4__.useRouter)();
    // useEffect(() => {
    //     axios.get('/admin/get/category').then((resp) => {
    //       console.log(resp);
    //       setCategories(resp?.data.slice(0,4))
    //     }).catch(err => console.log(err))
    //   }, [])
    const onSearch = (search)=>{
        push(`/jobs?search=${search}`);
    };
    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("section", {
                className: "jsx-8e498524a736d6d4" + " " + 'ceta py-5',
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: "jsx-8e498524a736d6d4" + " " + 'container-fluid py-5 text-center',
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h1", {
                            className: "jsx-8e498524a736d6d4",
                            children: "Browse Top Catagories"
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: "jsx-8e498524a736d6d4" + " " + 'row py-5',
                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: "jsx-8e498524a736d6d4" + " " + 'col-lg-11 m-auto pt-3',
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        className: "jsx-8e498524a736d6d4" + " " + 'row py-5',
                                        children: categories.map((i, index)=>{
                                            /*#__PURE__*/ return react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                onClick: ()=>{
                                                    return onSearch(i === null || i === void 0 ? void 0 : i.name);
                                                },
                                                className: "jsx-8e498524a736d6d4" + " " + 'col-lg-3 mt-5',
                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                    className: "jsx-8e498524a736d6d4" + " " + 'card py-3',
                                                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                        className: "jsx-8e498524a736d6d4" + " " + 'card-body',
                                                        children: [
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                                                src: "https://jqlacorte.com/wp-content/uploads/2015/09/jql-job-seekers.png?format=auto&height=80&version=1592223909&width=80",
                                                                className: "jsx-8e498524a736d6d4" + " " + 'img-fluid'
                                                            }),
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h6", {
                                                                className: "jsx-8e498524a736d6d4",
                                                                children: i.name
                                                            })
                                                        ]
                                                    })
                                                })
                                            }, index);
                                        })
                                    }),
                                    button && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        className: "jsx-8e498524a736d6d4" + " " + "row",
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                            className: "jsx-8e498524a736d6d4" + " " + "col-lg-12",
                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                className: "jsx-8e498524a736d6d4" + " " + "browse-btn2 text-center mt-50",
                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                                    className: "jsx-8e498524a736d6d4" + " " + 'btn2',
                                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                                        href: "#",
                                                        onClick: (e)=>push('/categories')
                                                        ,
                                                        className: "jsx-8e498524a736d6d4" + " " + "border-btn2 ",
                                                        children: "Browse All Sectors"
                                                    })
                                                })
                                            })
                                        })
                                    })
                                ]
                            })
                        })
                    ]
                })
            }),
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default()), {
                id: "8e498524a736d6d4",
                children: ".red.jsx-8e498524a736d6d4{color:red}\n.ceta.jsx-8e498524a736d6d4 h1.jsx-8e498524a736d6d4{font-size:3.5rem;\ncolor:rgb(7, 7, 78)}\n.ceta.jsx-8e498524a736d6d4 .card.jsx-8e498524a736d6d4:hover{color:red;\ncursor:pointer;\n-webkit-transition:all .3s;\ntransition:all .3s;\nbox-shadow:-2px 2px 22px -11px rgba(0, 0, 0, 0.75);\n-webkit-box-shadow:-2px 2px 22px -11px rgba(0, 0, 0, 0.75);\n-moz-box-shadow:-2px 2px 22px -11px rgba(0, 0, 0, 0.75)}\n.btn2.jsx-8e498524a736d6d4{height:70px;\nwidth:20%;\nborder:1px solid rgb(130, 130, 231);\nbackground:transparent;\nborder-radius:5px;\ncolor:rgb(130, 130, 231);\n-webkit-transition:all 0.4s;\ntransition:all 0.4s}\n.btn2.jsx-8e498524a736d6d4:hover{background:rgb(102, 102, 214);\ncolor:white\n                border:none;\noutline:none;\n-webkit-transition:all 0.4s;\ntransition:all 0.4s}\na.jsx-8e498524a736d6d4{-webkit-text-decoration:none;\ntext-decoration:none;\ncolor:rgb(130, 130, 231)}\na.jsx-8e498524a736d6d4:hover{color:white}"
            })
        ]
    }));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Category);


/***/ })

};
;