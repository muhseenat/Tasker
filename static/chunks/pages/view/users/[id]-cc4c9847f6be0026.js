(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[42],{8601:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/view/users/[id]",function(){return t(4955)}])},463:function(e,n,t){"use strict";var l=t(9669),i=t.n(l)().create({baseURL:"https://tasker-01.herokuapp.com/api"});n.Z=i},4955:function(e,n,t){"use strict";t.r(n);var l=t(5893),i=t(5783),o=t(1163),a=t(463),r=t(5152),s=t(5617),d=t(4015),u=t(5796),c=t(7294),f=(0,r.default)((function(){return Promise.all([t.e(814),t.e(636)]).then(t.bind(t,8636))}),{loadableGenerated:{webpack:function(){return[8636]}}}),v=(0,r.default)((function(){return t.e(491).then(t.bind(t,3491))}),{loadableGenerated:{webpack:function(){return[3491]}}}),h=(0,r.default)((function(){return t.e(15).then(t.bind(t,15))}),{loadableGenerated:{webpack:function(){return[15]}}});n.default=function(){var e=(0,c.useState)([]),n=e[0],t=e[1],r=(0,c.useState)(0),m=r[0],p=r[1],b=(0,c.useState)(1),j=b[0],x=b[1],w=(0,c.useState)(!1),g=w[0],_=w[1],N=(0,c.useState)(""),P=N[0],k=N[1],S=(0,c.useState)({field:"",order:""}),C=S[0],E=S[1],L=((0,s.v9)((function(e){return e.user.userData})),(0,o.useRouter)().query.id),Z=["Pending","Approved","Done"];(0,c.useEffect)((function(){a.Z.get("job/applied/user/".concat(L)).then((function(e){var n;console.log(null===e||void 0===e?void 0:e.data),t(null===e||void 0===e?void 0:e.data),0==(null===e||void 0===e||null===(n=e.data)||void 0===n?void 0:n.length)&&_(!0)})).catch((function(e){return console.log(e)}))}),[]),console.log(n,"this is comments");var D=(0,c.useMemo)((function(){var e=n;if(P&&(e=e.filter((function(e){return e.applied_jobs[0].job_name.toLowerCase().includes(P.toLowerCase())||e.applied_jobs[0].city.toLowerCase().includes(P.toLowerCase())}))),p(e.length),C.field){var t="asc"===C.order?1:-1;e=e.sort((function(e,n){return t*e[C.field].localeCompare(n[C.field])}))}return e.slice(3*(j-1),3*(j-1)+3)}),[n,j,P,C]);return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(i.Z,{}),(0,l.jsxs)("div",{className:"container mt-5",children:[(0,l.jsx)("h3",{className:"text-center",children:"Applied Users"}),(0,l.jsx)("div",{className:"row w-100",children:(0,l.jsxs)("div",{className:"col mb-3 col-12 text-center",children:[(0,l.jsxs)("div",{className:"row",children:[(0,l.jsx)("div",{className:"col-md-6",children:(0,l.jsx)(v,{total:m,itemsPerPage:3,currentPage:j,onPageChange:function(e){return x(e)}})}),(0,l.jsx)("div",{className:"col-md-6 d-flex flex-row-reverse",children:(0,l.jsx)(h,{onSearch:function(e){k(e),x(1)}})})]}),(0,l.jsxs)("table",{className:"table table-striped",children:[(0,l.jsx)(f,{headers:[{name:"Name",field:"name",sortable:!0},{name:"Email",field:"pay",sortable:!0},{name:"Place",field:"place",sortable:!0},{name:"Details",field:"details",sortable:!1},{name:"Status",field:"status",sortable:!1}],onSorting:function(e,n){return E({field:e,order:n})}}),g&&(0,l.jsx)("h3",{className:"mt-5",children:"NO JOBS  APPLIEDYET..."}),(0,l.jsx)("tbody",{children:D.map((function(e,n){return(0,l.jsxs)("tr",{children:[(0,l.jsx)("th",{scope:"row",children:null===e||void 0===e?void 0:e.name}),(0,l.jsx)("td",{children:null===e||void 0===e?void 0:e.email}),(0,l.jsx)("td",{children:null===e||void 0===e?void 0:e.place}),(0,l.jsxs)("td",{children:[null===e||void 0===e?void 0:e.qualification,",",null===e||void 0===e?void 0:e.skill,",",null===e||void 0===e?void 0:e.experience]}),(0,l.jsx)("td",{children:"Done"===(null===e||void 0===e?void 0:e.status)?null===e||void 0===e?void 0:e.status:(0,l.jsx)(d.Z,{labelId:"demo-multiple-name-label",id:"demo-multiple-name",defaultValue:null===e||void 0===e?void 0:e.status,onChange:function(n){!function(e,n,t,l){var i={sts:e.target.value,id:n,userId:t,jobId:l};a.Z.put("/change/status",i).then((function(e){console.log(e)})).catch((function(e){return console.log(e)}))}(n,null===e||void 0===e?void 0:e._id,null===e||void 0===e?void 0:e.user_id,null===e||void 0===e?void 0:e.job_id)},children:Z.map((function(e,n){return(0,l.jsx)(u.Z,{value:e,children:e},n)}))})})]},n)}))})]})]})})]})]})}}},function(e){e.O(0,[669,401,774,888,179],(function(){return n=8601,e(e.s=n);var n}));var n=e.O();_N_E=n}]);