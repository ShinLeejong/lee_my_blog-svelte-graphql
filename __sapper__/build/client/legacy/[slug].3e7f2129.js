import{B as t,_ as n,a as e,b as r,c as s,i as a,d as o,S as c,s as u,e as i,f,t as l,q as h,g as p,h as v,j as m,k as d,l as y,m as x,n as R,o as b,u as g,z as j,v as w}from"./client.1e263856.js";function k(t,n,e,r,s,a,o){try{var c=t[a](o),u=c.value}catch(t){return void e(t)}c.done?n(u):Promise.resolve(u).then(r,s)}function B(t){return function(){var n=this,e=arguments;return new Promise((function(r,s){var a=t.apply(n,e);function o(t){k(a,r,s,o,c,"next",t)}function c(t){k(a,r,s,o,c,"throw",t)}o(void 0)}))}}function E(t){var n=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}();return function(){var s,a=e(t);if(n){var o=e(this).constructor;s=Reflect.construct(a,arguments,o)}else s=a.apply(this,arguments);return r(this,s)}}function H(t){var n,e,r,s,a,o,c=t[0].title+"",u=t[0].html+"";return document.title=n=t[0].title,{c:function(){e=i(),r=f("h1"),s=l(c),a=i(),o=f("div"),this.h()},l:function(t){h('[data-svelte="svelte-1uty71u"]',document.head).forEach(p),e=v(t),r=m(t,"H1",{});var n=d(r);s=y(n,c),n.forEach(p),a=v(t),o=m(t,"DIV",{class:!0}),d(o).forEach(p),this.h()},h:function(){x(o,"class","content svelte-emm3f3")},m:function(t,n){R(t,e,n),R(t,r,n),b(r,s),R(t,a,n),R(t,o,n),o.innerHTML=u},p:function(t,e){var r=g(e,1)[0];1&r&&n!==(n=t[0].title)&&(document.title=n),1&r&&c!==(c=t[0].title+"")&&j(s,c),1&r&&u!==(u=t[0].html+"")&&(o.innerHTML=u)},i:w,o:w,d:function(t){t&&p(e),t&&p(r),t&&p(a),t&&p(o)}}}function P(t){return L.apply(this,arguments)}function L(){return(L=B(t.mark((function n(e){var r,s,a;return t.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r=e.params,t.next=3,this.fetch("blog/".concat(r.slug,".json"));case 3:return s=t.sent,t.next=6,s.json();case 6:if(a=t.sent,200!==s.status){t.next=11;break}return t.abrupt("return",{post:a});case 11:this.error(s.status,a.message);case 12:case"end":return t.stop()}}),n,this)})))).apply(this,arguments)}function M(t,n,e){var r=n.post;return t.$$set=function(t){"post"in t&&e(0,r=t.post)},[r]}var T=function(t){n(r,c);var e=E(r);function r(t){var n;return s(this,r),n=e.call(this),a(o(n),t,M,H,u,{post:0}),n}return r}();export default T;export{P as preload};
