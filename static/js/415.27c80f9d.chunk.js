"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[415],{288:function(n,t,e){e.d(t,{Df:function(){return f},IR:function(){return p},M1:function(){return v},Pg:function(){return l},b1:function(){return s},tx:function(){return h}});var r=e(861),a=e(757),c=e.n(a),u=e(44),i="https://api.themoviedb.org/3/",o="e3f9ac8b4c25ea958657e460a35663f5",s="https://image.tmdb.org/t/p/w342",f=function(){var n=(0,r.Z)(c().mark((function n(){var t,e;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return t="".concat(i,"trending/movie/day?api_key=").concat(o),n.next=3,u.ZP.get(t);case 3:return e=n.sent,n.abrupt("return",e);case 5:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}(),p=function(){var n=(0,r.Z)(c().mark((function n(t){var e,r;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return e="".concat(i,"search/movie?api_key=").concat(o,"&language=en-US&query=").concat(t,"&include_adult=false"),n.next=3,u.ZP.get(e);case 3:return r=n.sent,n.abrupt("return",r);case 5:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),l=function(){var n=(0,r.Z)(c().mark((function n(t){var e,r;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return e="".concat(i,"movie/").concat(t,"?api_key=").concat(o,"&language=en-US"),n.next=3,u.ZP.get(e);case 3:return r=n.sent,n.abrupt("return",r);case 5:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),v=function(){var n=(0,r.Z)(c().mark((function n(t){var e,r;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return e="".concat(i,"movie/").concat(t,"/credits?api_key=").concat(o,"&language=en-US"),n.next=3,u.ZP.get(e);case 3:return r=n.sent,n.abrupt("return",r);case 5:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),h=function(){var n=(0,r.Z)(c().mark((function n(t){var e,r;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return e="".concat(i,"movie/").concat(t,"/reviews?api_key=").concat(o,"&language=en-US"),n.next=3,u.ZP.get(e);case 3:return r=n.sent,n.abrupt("return",r);case 5:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}()},368:function(n,t,e){var r=e(731),a=e(184);t.Z=function(n){var t=n.movies,e=n.state;return(0,a.jsx)("ul",{children:t.map((function(n){var t=n.id,c=n.title;return(0,a.jsx)("li",{children:(0,a.jsx)(r.rU,{to:"/movies/".concat(t),state:e,children:c})},t)}))})}},415:function(n,t,e){e.r(t);var r=e(885),a=e(791),c=e(288),u=e(739),i=e(368),o=e(184);t.default=function(){var n=(0,a.useState)([]),t=(0,r.Z)(n,2),e=t[0],s=t[1],f=(0,a.useState)(!1),p=(0,r.Z)(f,2),l=p[0],v=p[1],h=(0,a.useState)(null),d=(0,r.Z)(h,2),m=d[0],g=d[1],x=(0,u.TH)();return(0,a.useEffect)((function(){v(!0),(0,c.Df)().then((function(n){var t=n.data;s(t.results)})).catch((function(n){g(n.message)})).finally(v(!1))}),[]),(0,o.jsxs)("main",{children:[(0,o.jsx)("h1",{children:"Trending today"}),l&&(0,o.jsx)("p",{children:"Loading..."}),m&&(0,o.jsx)("p",{children:'"Please try again later..."'}),e.length>0&&(0,o.jsx)(i.Z,{movies:e,state:{from:x}})]})}}}]);
//# sourceMappingURL=415.27c80f9d.chunk.js.map