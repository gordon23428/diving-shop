(function(e){function t(t){for(var c,a,s=t[0],i=t[1],u=t[2],d=0,l=[];d<s.length;d++)a=s[d],Object.prototype.hasOwnProperty.call(o,a)&&o[a]&&l.push(o[a][0]),o[a]=0;for(c in i)Object.prototype.hasOwnProperty.call(i,c)&&(e[c]=i[c]);f&&f(t);while(l.length)l.shift()();return r.push.apply(r,u||[]),n()}function n(){for(var e,t=0;t<r.length;t++){for(var n=r[t],c=!0,a=1;a<n.length;a++){var s=n[a];0!==o[s]&&(c=!1)}c&&(r.splice(t--,1),e=i(i.s=n[0]))}return e}var c={},a={app:0},o={app:0},r=[];function s(e){return i.p+"js/"+({}[e]||e)+"."+{"chunk-018751d8":"51b02a40","chunk-07d8a6c1":"78b5bd6d","chunk-0c22cf4c":"bf16a9d0","chunk-1e9a3b16":"863caa94","chunk-2d0e2114":"cad3c16d","chunk-2d208323":"3188f854","chunk-2d225a26":"86b3c109","chunk-38574ad1":"bd4f5bc6","chunk-7e0ddd46":"009c4329","chunk-7e83b5f0":"b3db46b1","chunk-a66a929c":"a70f8904","chunk-da5ff72c":"590670a5"}[e]+".js"}function i(t){if(c[t])return c[t].exports;var n=c[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.e=function(e){var t=[],n={"chunk-38574ad1":1};a[e]?t.push(a[e]):0!==a[e]&&n[e]&&t.push(a[e]=new Promise((function(t,n){for(var c="css/"+({}[e]||e)+"."+{"chunk-018751d8":"31d6cfe0","chunk-07d8a6c1":"31d6cfe0","chunk-0c22cf4c":"31d6cfe0","chunk-1e9a3b16":"31d6cfe0","chunk-2d0e2114":"31d6cfe0","chunk-2d208323":"31d6cfe0","chunk-2d225a26":"31d6cfe0","chunk-38574ad1":"1283a38f","chunk-7e0ddd46":"31d6cfe0","chunk-7e83b5f0":"31d6cfe0","chunk-a66a929c":"31d6cfe0","chunk-da5ff72c":"31d6cfe0"}[e]+".css",o=i.p+c,r=document.getElementsByTagName("link"),s=0;s<r.length;s++){var u=r[s],d=u.getAttribute("data-href")||u.getAttribute("href");if("stylesheet"===u.rel&&(d===c||d===o))return t()}var l=document.getElementsByTagName("style");for(s=0;s<l.length;s++){u=l[s],d=u.getAttribute("data-href");if(d===c||d===o)return t()}var f=document.createElement("link");f.rel="stylesheet",f.type="text/css",f.onload=t,f.onerror=function(t){var c=t&&t.target&&t.target.src||o,r=new Error("Loading CSS chunk "+e+" failed.\n("+c+")");r.code="CSS_CHUNK_LOAD_FAILED",r.request=c,delete a[e],f.parentNode.removeChild(f),n(r)},f.href=o;var b=document.getElementsByTagName("head")[0];b.appendChild(f)})).then((function(){a[e]=0})));var c=o[e];if(0!==c)if(c)t.push(c[2]);else{var r=new Promise((function(t,n){c=o[e]=[t,n]}));t.push(c[2]=r);var u,d=document.createElement("script");d.charset="utf-8",d.timeout=120,i.nc&&d.setAttribute("nonce",i.nc),d.src=s(e);var l=new Error;u=function(t){d.onerror=d.onload=null,clearTimeout(f);var n=o[e];if(0!==n){if(n){var c=t&&("load"===t.type?"missing":t.type),a=t&&t.target&&t.target.src;l.message="Loading chunk "+e+" failed.\n("+c+": "+a+")",l.name="ChunkLoadError",l.type=c,l.request=a,n[1](l)}o[e]=void 0}};var f=setTimeout((function(){u({type:"timeout",target:d})}),12e4);d.onerror=d.onload=u,document.head.appendChild(d)}return Promise.all(t)},i.m=e,i.c=c,i.d=function(e,t,n){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var c in e)i.d(n,c,function(t){return e[t]}.bind(null,c));return n},i.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="/diving-shop/",i.oe=function(e){throw console.error(e),e};var u=window["webpackJsonp"]=window["webpackJsonp"]||[],d=u.push.bind(u);u.push=t,u=u.slice();for(var l=0;l<u.length;l++)t(u[l]);var f=d;r.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"2e63":function(e,t,n){},"56a6":function(e,t,n){"use strict";var c=n("7a23"),a={class:"message-alert"},o=Object(c["createVNode"])("i",{class:"fas fa-window-close"},null,-1);function r(e,t,n,r,s,i){return Object(c["openBlock"])(),Object(c["createBlock"])("div",a,[(Object(c["openBlock"])(!0),Object(c["createBlock"])(c["Fragment"],null,Object(c["renderList"])(s.messages,(function(e,t){return Object(c["openBlock"])(),Object(c["createBlock"])("div",{class:["alert","alert-"+e.status],key:t},[Object(c["createTextVNode"])(Object(c["toDisplayString"])(e.message)+" ",1),Object(c["createVNode"])("button",{type:"button",class:"btn",onClick:function(e){return i.removeMessage(t)},"aria-label":"Close"},[o],8,["onClick"])],2)})),128))])}var s=n("2909"),i=(n("a434"),n("159b"),{name:"Navbar",data:function(){return{messages:[]}},methods:{updateMessage:function(e,t){var n=Math.floor(new Date/1e3);this.messages.push({message:e,status:t,timestamp:n}),this.removeMessageWithTiming(n)},removeMessage:function(e){this.messages.splice(e,1)},removeMessageWithTiming:function(e){var t=this;setTimeout((function(){t.messages.forEach((function(n,c){n.timestamp===e&&t.messages.splice(c,1)}))}),5e3)}},watch:{getMessage:function(){this.updateMessage.apply(this,Object(s["a"])(this.getMessage))}},computed:{getMessage:function(){return this.$store.state.message}}});n("d173");i.render=r;t["a"]=i},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var c=n("7a23");function a(e,t){var n=Object(c["resolveComponent"])("router-view");return Object(c["openBlock"])(),Object(c["createBlock"])(n)}n("f7b3");const o={};o.render=a;var r=o,s=(n("d3b7"),n("3ca3"),n("ddb0"),n("6c02")),i=Object(c["createVNode"])("div",{class:"web-background position-fixed top-0"},[Object(c["createVNode"])("div",{class:"web-img"})],-1);function u(e,t,n,a,o,r){var s=Object(c["resolveComponent"])("Navbar"),u=Object(c["resolveComponent"])("Alert"),d=Object(c["resolveComponent"])("router-view"),l=Object(c["resolveComponent"])("Footer");return Object(c["openBlock"])(),Object(c["createBlock"])(c["Fragment"],null,[Object(c["createVNode"])("div",null,[Object(c["createVNode"])(s),Object(c["createVNode"])(u),i]),Object(c["createVNode"])(d),Object(c["createVNode"])(l)],64)}var d=n("d178"),l=n("fd2d"),f=n("56a6"),b={name:"Home",components:{Navbar:d["a"],Footer:l["a"],Alert:f["a"]}};b.render=u;var h=b,p=[{path:"/login",name:"Login",component:function(){return n.e("chunk-38574ad1").then(n.bind(null,"a55b"))}},{path:"/admin",name:"StaffPage",component:function(){return n.e("chunk-a66a929c").then(n.bind(null,"1de3"))},children:[{path:"staffproducts",name:"StaffProducts",component:function(){return n.e("chunk-7e83b5f0").then(n.bind(null,"f388"))},meta:{requiresAuth:!0}},{path:"staffcoupon",name:"StaffCoupon",component:function(){return n.e("chunk-018751d8").then(n.bind(null,"aeb9"))},meta:{requiresAuth:!0}},{path:"stafforder",name:"StaffOrder",component:function(){return n.e("chunk-07d8a6c1").then(n.bind(null,"341b"))},meta:{requiresAuth:!0}}]},{path:"/",name:"Home",component:h,children:[{path:"products",name:"Products",component:function(){return n.e("chunk-1e9a3b16").then(n.bind(null,"7079"))}},{path:"",name:"Introduce",component:function(){return n.e("chunk-da5ff72c").then(n.bind(null,"8f47"))}}]},{path:"/checkout",name:"Checkout",component:function(){return n.e("chunk-2d0e2114").then(n.bind(null,"7cb4"))},children:[{path:"",name:"CostomInfo",component:function(){return n.e("chunk-0c22cf4c").then(n.bind(null,"22b2"))}},{path:"custom_checkout/:orderId",name:"CustomCheckout",component:function(){return n.e("chunk-2d208323").then(n.bind(null,"a482"))}},{path:"finish/:orderId",name:"Finish",component:function(){return n.e("chunk-2d225a26").then(n.bind(null,"e4de"))}}]},{path:"/favorite",name:"Favorite",component:function(){return n.e("chunk-7e0ddd46").then(n.bind(null,"a09f"))}}],m=Object(s["a"])({history:Object(s["b"])(),routes:p}),g=m,O=n("bc3a"),j=n.n(O),v=n("2106"),k=n.n(v),N=(n("7b17"),n("9062")),V=n.n(N),y=(n("e40d"),n("99af"),n("5502")),w=Object(y["a"])({state:{cart:[],leng:"",orderMod:1,message:[],favoriteList:[],productId:""},mutations:{setCart:function(e,t){e.cart=t},setLeng:function(e,t){e.leng=t},setMod:function(e,t){e.orderMod=t},setMessage:function(e,t){e.message=t},setFavorite:function(e,t){e.favoriteList=t}},actions:{getCart:function(e){var t="".concat("https://vue-course-api.hexschool.io","/api/").concat("didameath","/cart");j.a.get(t).then((function(t){e.commit("setCart",t.data.data),e.commit("setLeng",t.data.data.carts.length)}))}},moduals:{}}),x=n("77ed"),C=n.n(x),B=Object(c["createApp"])(r);B.use(k.a,j.a),B.use(g),B.component("Loading",V.a),B.use(w),B.use(C.a),B.mount("#app"),g.beforeEach((function(e,t,n){if(e.meta.requiresAuth){console.log("需驗證");var c="".concat("https://vue-course-api.hexschool.io","/api/user/check");j.a.post(c).then((function(e){console.log(e.data),e.data.success?n():n({path:"/login"})}))}else n()}))},d173:function(e,t,n){"use strict";n("2e63")},d178:function(e,t,n){"use strict";var c=n("7a23"),a={class:"navbar navbar-light flex-nowrap"},o={class:"d-inline"},r=Object(c["createVNode"])("a",{class:"navbar-brand text-light ",href:"#"},"小林潛水",-1),s={class:"d-inline"},i=Object(c["createVNode"])("i",{class:"fas fa-swimmer"},null,-1),u=Object(c["createTextVNode"])("預約潛水"),d={class:"d-inline mx-3"},l=Object(c["createVNode"])("i",{class:"fas fa-heart"},null,-1),f=Object(c["createTextVNode"])("喜愛的旅程"),b={class:"d-flex align-items-center"},h={class:"mx-3"},p=Object(c["createVNode"])("i",{class:"fas fa-sign-in-alt"},null,-1),m=Object(c["createTextVNode"])(" 員工登入 "),g={class:"dropdown"},O={class:"btn btn-secondary dropdown-toggle","data-bs-display":"static",type:"button",id:"dropdownMenuButton1","data-bs-toggle":"dropdown","data-bs-auto-close":"outside","aria-expanded":"false"},j=Object(c["createTextVNode"])(" 購物車 "),v=Object(c["createVNode"])("i",{class:"fas fa-cart-arrow-down"},null,-1),k={class:"badge bg-danger"},N={class:"dropdown-menu p-4 dropdown-menu-end"},V={class:"table mb-3"},y=Object(c["createVNode"])("thead",null,[Object(c["createVNode"])("tr",null,[Object(c["createVNode"])("th",{scope:"col"},"項目"),Object(c["createVNode"])("th",{scope:"col"},"數量"),Object(c["createVNode"])("th",{scope:"col"},"價錢")])],-1),w=Object(c["createVNode"])("i",{class:"fas fa-trash-alt"},null,-1),x=Object(c["createTextVNode"])(" 結帳去 ");function C(e,t,n,C,B,M){var S=Object(c["resolveComponent"])("router-link");return Object(c["openBlock"])(),Object(c["createBlock"])("nav",a,[Object(c["createVNode"])("div",o,[r,Object(c["createVNode"])("div",s,[i,Object(c["createVNode"])(S,{class:"text-decoration-none text-light",to:"/products"},{default:Object(c["withCtx"])((function(){return[u]})),_:1})]),Object(c["createVNode"])("div",d,[l,Object(c["createVNode"])(S,{class:"text-decoration-none text-light",to:"/favorite"},{default:Object(c["withCtx"])((function(){return[f]})),_:1})])]),Object(c["createVNode"])("div",b,[Object(c["createVNode"])("div",h,[p,Object(c["createVNode"])(S,{class:"",to:"/login"},{default:Object(c["withCtx"])((function(){return[m]})),_:1})]),Object(c["createVNode"])("div",g,[Object(c["createVNode"])("button",O,[j,v,Object(c["createVNode"])("span",k,Object(c["toDisplayString"])(M.leng),1)]),Object(c["createVNode"])("form",N,[Object(c["createVNode"])("table",V,[y,Object(c["createVNode"])("tbody",null,[(Object(c["openBlock"])(!0),Object(c["createBlock"])(c["Fragment"],null,Object(c["renderList"])(M.getCart.carts,(function(e){return Object(c["openBlock"])(),Object(c["createBlock"])("tr",{key:e.id},[Object(c["createVNode"])("td",null,Object(c["toDisplayString"])(e.product.title),1),Object(c["createVNode"])("td",null,Object(c["toDisplayString"])(e.qty)+"/"+Object(c["toDisplayString"])(e.product.unit),1),Object(c["createVNode"])("td",null,Object(c["toDisplayString"])(e.final_total)+"$",1),Object(c["createVNode"])("td",null,[Object(c["createVNode"])("button",{onClick:Object(c["withModifiers"])((function(t){return M.removeCartItem(e.id)}),["prevent"])},[w],8,["onClick"])])])})),128))])]),Object(c["createVNode"])(S,{class:"btn btn-primary",to:"/checkout"},{default:Object(c["withCtx"])((function(){return[x]})),_:1})])])])])}n("99af");var B={computed:{getCart:function(){return this.$store.state.cart},leng:function(){return this.$store.state.leng}},methods:{removeCartItem:function(e){var t=this,n="".concat("https://vue-course-api.hexschool.io","/api/").concat("didameath","/cart/").concat(e);this.$http.delete(n).then((function(e){console.log(e.data),t.$store.dispatch("getCart")}))}},created:function(){this.$store.dispatch("getCart")}};B.render=C;t["a"]=B},e584:function(e,t,n){},f7b3:function(e,t,n){"use strict";n("e584")},fd2d:function(e,t,n){"use strict";var c=n("7a23"),a={class:"footer text-center bg-dark py-5 mt-5"},o=Object(c["createStaticVNode"])('<div class="text-white mb-3">個人作品非商業用途用</div><div class="icon"><i class="fab fa-facebook fa-lg text-white mx-3"></i><i class="fab fa-line fa-lg text-white mx-3"></i><i class="fab fa-instagram fa-lg text-white mx-3"></i><i class="fas fa-phone-alt fa-lg text-white mx-3">0911-XXX-XXX</i></div>',2);function r(e,t){return Object(c["openBlock"])(),Object(c["createBlock"])("div",a,[o])}const s={};s.render=r;t["a"]=s}});
//# sourceMappingURL=app.5c3c8aa9.js.map