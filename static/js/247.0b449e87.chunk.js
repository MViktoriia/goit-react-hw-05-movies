"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[247],{288:function(n,t,e){e.d(t,{Df:function(){return p},IR:function(){return f},M1:function(){return l},Pg:function(){return h},b1:function(){return s},tx:function(){return d}});var r=e(861),a=e(757),c=e.n(a),u=e(44),i="https://api.themoviedb.org/3/",o="e3f9ac8b4c25ea958657e460a35663f5",s="https://image.tmdb.org/t/p/w342",p=function(){var n=(0,r.Z)(c().mark((function n(){var t,e;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return t="".concat(i,"trending/movie/day?api_key=").concat(o),n.next=3,u.ZP.get(t);case 3:return e=n.sent,n.abrupt("return",e);case 5:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}(),f=function(){var n=(0,r.Z)(c().mark((function n(t){var e,r;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return e="".concat(i,"search/movie?api_key=").concat(o,"&language=en-US&query=").concat(t,"&include_adult=false"),n.next=3,u.ZP.get(e);case 3:return r=n.sent,n.abrupt("return",r);case 5:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),h=function(){var n=(0,r.Z)(c().mark((function n(t){var e,r;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return e="".concat(i,"movie/").concat(t,"?api_key=").concat(o,"&language=en-US"),n.next=3,u.ZP.get(e);case 3:return r=n.sent,n.abrupt("return",r);case 5:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),l=function(){var n=(0,r.Z)(c().mark((function n(t){var e,r;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return e="".concat(i,"movie/").concat(t,"/credits?api_key=").concat(o,"&language=en-US"),n.next=3,u.ZP.get(e);case 3:return r=n.sent,n.abrupt("return",r);case 5:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),d=function(){var n=(0,r.Z)(c().mark((function n(t){var e,r;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return e="".concat(i,"movie/").concat(t,"/reviews?api_key=").concat(o,"&language=en-US"),n.next=3,u.ZP.get(e);case 3:return r=n.sent,n.abrupt("return",r);case 5:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}()},247:function(n,t,e){e.r(t),e.d(t,{default:function(){return o}});var r=e(885),a=e(288),c=e(791),u=e(739),i=e(184);function o(){var n=(0,c.useState)(null),t=(0,r.Z)(n,2),e=t[0],o=t[1],s=(0,c.useState)(!1),p=(0,r.Z)(s,2),f=p[0],h=p[1],l=(0,c.useState)(null),d=(0,r.Z)(l,2),m=d[0],g=d[1],v=(0,u.UO)().id;if((0,c.useEffect)((function(){h(!0),(0,a.M1)(v).then((function(n){var t=n.data;o(t.cast)})).catch((function(n){return g(n)})).finally(h(!1))}),[v]),e)return(0,i.jsxs)(i.Fragment,{children:[f&&(0,i.jsx)("p",{children:"Loading..."}),m&&(0,i.jsx)("p",{children:"Ops, something whent wrong..."}),0===e.length?(0,i.jsx)("p",{children:"There is no cast information"}):(0,i.jsx)("ul",{children:e.map((function(n){var t=n.id,e=n.character,r=n.name,c=n.profile_path;return(0,i.jsxs)("li",{children:[null===c?(0,i.jsx)("img",{src:"http://dummyimage.com/100x150",alt:"foto"}):(0,i.jsx)("img",{src:a.b1+c,alt:r,height:"150px"}),(0,i.jsx)("p",{children:r}),(0,i.jsxs)("p",{children:["Character: ",e]})]},t)}))})]})}}}]);
//# sourceMappingURL=247.0b449e87.chunk.js.map