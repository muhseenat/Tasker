"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[491],{3491:function(e,s,a){a.r(s),a.d(s,{default:function(){return b}});var n=a(5893),i=a(7294),r=a(4184),t=a.n(r),l=a(6792),c=a(1546);const d=i.forwardRef((({active:e,disabled:s,className:a,style:i,activeLabel:r,children:l,...d},u)=>{const o=e||s?"span":c.Z;return(0,n.jsx)("li",{ref:u,style:i,className:t()(a,"page-item",{active:e,disabled:s}),children:(0,n.jsxs)(o,{className:"page-link",disabled:s,...d,children:[l,e&&r&&(0,n.jsx)("span",{className:"visually-hidden",children:r})]})})}));d.defaultProps={active:!1,disabled:!1,activeLabel:"(current)"},d.displayName="PageItem";var u=d;function o(e,s,a=e){function i({children:e,...i}){return(0,n.jsxs)(d,{...i,children:[(0,n.jsx)("span",{"aria-hidden":"true",children:e||s}),(0,n.jsx)("span",{className:"visually-hidden",children:a})]})}return i.displayName=e,i}const f=o("First","\xab"),v=o("Prev","\u2039","Previous"),h=o("Ellipsis","\u2026","More"),p=o("Next","\u203a"),m=o("Last","\xbb"),x=i.forwardRef((({bsPrefix:e,className:s,size:a,...i},r)=>{const c=(0,l.vE)(e,"pagination");return(0,n.jsx)("ul",{ref:r,...i,className:t()(s,c,a&&`${c}-${a}`)})}));x.displayName="Pagination";var N=Object.assign(x,{First:f,Prev:v,Ellipsis:h,Item:u,Next:p,Last:m}),b=function(e){var s=e.total,a=void 0===s?0:s,r=e.itemsPerPage,t=void 0===r?10:r,l=e.currentPage,c=void 0===l?1:l,d=e.onPageChange,u=(0,i.useState)(0),o=u[0],f=u[1];(0,i.useEffect)((function(){a>0&&t>0&&f(Math.ceil(a/t))}),[a,t]);var v=(0,i.useMemo)((function(){for(var e=function(e){s.push((0,n.jsx)(N.Item,{active:e===c,onClick:function(){return d(e)},children:e},e))},s=[],a=1;a<=o;a++)e(a);return s}),[o,c]);return 0===o?null:(0,n.jsxs)(N,{children:[(0,n.jsx)(N.Prev,{onClick:function(){return d(c-1)},disabled:1===c}),v,(0,n.jsx)(N.Next,{onClick:function(){return d(c+1)},disabled:c===o})]})}}}]);