(function(e){function t(t){for(var a,c,s=t[0],i=t[1],u=t[2],l=0,d=[];l<s.length;l++)c=s[l],Object.prototype.hasOwnProperty.call(o,c)&&o[c]&&d.push(o[c][0]),o[c]=0;for(a in i)Object.prototype.hasOwnProperty.call(i,a)&&(e[a]=i[a]);f&&f(t);while(d.length)d.shift()();return r.push.apply(r,u||[]),n()}function n(){for(var e,t=0;t<r.length;t++){for(var n=r[t],a=!0,c=1;c<n.length;c++){var s=n[c];0!==o[s]&&(a=!1)}a&&(r.splice(t--,1),e=i(i.s=n[0]))}return e}var a={},c={app:0},o={app:0},r=[];function s(e){return i.p+"js/"+({}[e]||e)+"."+{"chunk-018751d8":"51b02a40","chunk-07d8a6c1":"78b5bd6d","chunk-0c22cf4c":"bf16a9d0","chunk-1e9a3b16":"fd3b06e2","chunk-2d0ddfad":"b8c3b656","chunk-2d0e2114":"cad3c16d","chunk-2d208323":"3188f854","chunk-2d225a26":"86b3c109","chunk-38574ad1":"bd4f5bc6","chunk-7e0ddd46":"009c4329","chunk-7e83b5f0":"b3db46b1","chunk-a66a929c":"a70f8904","chunk-da5ff72c":"92397c63"}[e]+".js"}function i(t){if(a[t])return a[t].exports;var n=a[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.e=function(e){var t=[],n={"chunk-38574ad1":1};c[e]?t.push(c[e]):0!==c[e]&&n[e]&&t.push(c[e]=new Promise((function(t,n){for(var a="css/"+({}[e]||e)+"."+{"chunk-018751d8":"31d6cfe0","chunk-07d8a6c1":"31d6cfe0","chunk-0c22cf4c":"31d6cfe0","chunk-1e9a3b16":"31d6cfe0","chunk-2d0ddfad":"31d6cfe0","chunk-2d0e2114":"31d6cfe0","chunk-2d208323":"31d6cfe0","chunk-2d225a26":"31d6cfe0","chunk-38574ad1":"1283a38f","chunk-7e0ddd46":"31d6cfe0","chunk-7e83b5f0":"31d6cfe0","chunk-a66a929c":"31d6cfe0","chunk-da5ff72c":"31d6cfe0"}[e]+".css",o=i.p+a,r=document.getElementsByTagName("link"),s=0;s<r.length;s++){var u=r[s],l=u.getAttribute("data-href")||u.getAttribute("href");if("stylesheet"===u.rel&&(l===a||l===o))return t()}var d=document.getElementsByTagName("style");for(s=0;s<d.length;s++){u=d[s],l=u.getAttribute("data-href");if(l===a||l===o)return t()}var f=document.createElement("link");f.rel="stylesheet",f.type="text/css",f.onload=t,f.onerror=function(t){var a=t&&t.target&&t.target.src||o,r=new Error("Loading CSS chunk "+e+" failed.\n("+a+")");r.code="CSS_CHUNK_LOAD_FAILED",r.request=a,delete c[e],f.parentNode.removeChild(f),n(r)},f.href=o;var b=document.getElementsByTagName("head")[0];b.appendChild(f)})).then((function(){c[e]=0})));var a=o[e];if(0!==a)if(a)t.push(a[2]);else{var r=new Promise((function(t,n){a=o[e]=[t,n]}));t.push(a[2]=r);var u,l=document.createElement("script");l.charset="utf-8",l.timeout=120,i.nc&&l.setAttribute("nonce",i.nc),l.src=s(e);var d=new Error;u=function(t){l.onerror=l.onload=null,clearTimeout(f);var n=o[e];if(0!==n){if(n){var a=t&&("load"===t.type?"missing":t.type),c=t&&t.target&&t.target.src;d.message="Loading chunk "+e+" failed.\n("+a+": "+c+")",d.name="ChunkLoadError",d.type=a,d.request=c,n[1](d)}o[e]=void 0}};var f=setTimeout((function(){u({type:"timeout",target:l})}),12e4);l.onerror=l.onload=u,document.head.appendChild(l)}return Promise.all(t)},i.m=e,i.c=a,i.d=function(e,t,n){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)i.d(n,a,function(t){return e[t]}.bind(null,a));return n},i.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="/diving-shop/",i.oe=function(e){throw console.error(e),e};var u=window["webpackJsonp"]=window["webpackJsonp"]||[],l=u.push.bind(u);u.push=t,u=u.slice();for(var d=0;d<u.length;d++)t(u[d]);var f=l;r.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"2e63":function(e,t,n){},"56a6":function(e,t,n){"use strict";var a=n("7a23"),c={class:"message-alert"},o=Object(a["createVNode"])("i",{class:"fas fa-window-close"},null,-1);function r(e,t,n,r,s,i){return Object(a["openBlock"])(),Object(a["createBlock"])("div",c,[(Object(a["openBlock"])(!0),Object(a["createBlock"])(a["Fragment"],null,Object(a["renderList"])(s.messages,(function(e,t){return Object(a["openBlock"])(),Object(a["createBlock"])("div",{class:["alert","alert-"+e.status],key:t},[Object(a["createTextVNode"])(Object(a["toDisplayString"])(e.message)+" ",1),Object(a["createVNode"])("button",{type:"button",class:"btn",onClick:function(e){return i.removeMessage(t)},"aria-label":"Close"},[o],8,["onClick"])],2)})),128))])}var s=n("2909"),i=(n("a434"),n("159b"),{name:"Navbar",data:function(){return{messages:[]}},methods:{updateMessage:function(e,t){var n=Math.floor(new Date/1e3);this.messages.push({message:e,status:t,timestamp:n}),this.removeMessageWithTiming(n)},removeMessage:function(e){this.messages.splice(e,1)},removeMessageWithTiming:function(e){var t=this;setTimeout((function(){t.messages.forEach((function(n,a){n.timestamp===e&&t.messages.splice(a,1)}))}),5e3)}},watch:{getMessage:function(){this.updateMessage.apply(this,Object(s["a"])(this.getMessage))}},computed:{getMessage:function(){return this.$store.state.message}}});n("d173");i.render=r;t["a"]=i},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var a=n("7a23");function c(e,t){var n=Object(a["resolveComponent"])("router-view");return Object(a["openBlock"])(),Object(a["createBlock"])(n)}n("f7b3");const o={};o.render=c;var r=o,s=(n("d3b7"),n("3ca3"),n("ddb0"),n("6c02")),i=Object(a["createVNode"])("div",{class:"web-background"},[Object(a["createVNode"])("div",{class:"web-img"})],-1);function u(e,t,n,c,o,r){var s=Object(a["resolveComponent"])("Navbar"),u=Object(a["resolveComponent"])("Alert"),l=Object(a["resolveComponent"])("router-view"),d=Object(a["resolveComponent"])("Footer");return Object(a["openBlock"])(),Object(a["createBlock"])(a["Fragment"],null,[Object(a["createVNode"])("div",null,[Object(a["createVNode"])(s),Object(a["createVNode"])(u),i]),Object(a["createVNode"])(l),Object(a["createVNode"])(d)],64)}var l=n("d178"),d=n("fd2d"),f=n("56a6"),b={name:"Home",components:{Navbar:l["a"],Footer:d["a"],Alert:f["a"]}};b.render=u;var h=b,p=[{path:"/login",name:"Login",component:function(){return n.e("chunk-38574ad1").then(n.bind(null,"a55b"))}},{path:"/admin",name:"StaffPage",component:function(){return n.e("chunk-a66a929c").then(n.bind(null,"1de3"))},children:[{path:"staffproducts",name:"StaffProducts",component:function(){return n.e("chunk-7e83b5f0").then(n.bind(null,"f388"))},meta:{requiresAuth:!0}},{path:"staffcoupon",name:"StaffCoupon",component:function(){return n.e("chunk-018751d8").then(n.bind(null,"aeb9"))},meta:{requiresAuth:!0}},{path:"stafforder",name:"StaffOrder",component:function(){return n.e("chunk-07d8a6c1").then(n.bind(null,"341b"))},meta:{requiresAuth:!0}}]},{path:"/",name:"Home",component:h,children:[{path:"products",name:"Products",component:function(){return n.e("chunk-1e9a3b16").then(n.bind(null,"7079"))}},{path:"",name:"Introduce",component:function(){return n.e("chunk-da5ff72c").then(n.bind(null,"8f47"))}},{path:"product",name:"Product",component:function(){return n.e("chunk-2d0ddfad").then(n.bind(null,"8461"))}}]},{path:"/checkout",name:"Checkout",component:function(){return n.e("chunk-2d0e2114").then(n.bind(null,"7cb4"))},children:[{path:"",name:"CostomInfo",component:function(){return n.e("chunk-0c22cf4c").then(n.bind(null,"22b2"))}},{path:"custom_checkout/:orderId",name:"CustomCheckout",component:function(){return n.e("chunk-2d208323").then(n.bind(null,"a482"))}},{path:"finish/:orderId",name:"Finish",component:function(){return n.e("chunk-2d225a26").then(n.bind(null,"e4de"))}}]},{path:"/favorite",name:"Favorite",component:function(){return n.e("chunk-7e0ddd46").then(n.bind(null,"a09f"))}}],m=Object(s["a"])({history:Object(s["b"])(),routes:p}),g=m,v=n("bc3a"),O=n.n(v),j=n("2106"),k=n.n(j),N=(n("7b17"),n("9062")),V=n.n(N),y=(n("e40d"),n("99af"),n("5502")),x=Object(y["a"])({state:{cart:[],leng:"",orderMod:1,message:[],favoriteList:[],productId:""},mutations:{setCart:function(e,t){e.cart=t},setLeng:function(e,t){e.leng=t},setMod:function(e,t){e.orderMod=t},setMessage:function(e,t){e.message=t},setFavorite:function(e,t){e.favoriteList=t},setProductId:function(e,t){e.productId=t}},actions:{getCart:function(e){var t="".concat("https://vue-course-api.hexschool.io","/api/").concat("didameath","/cart");O.a.get(t).then((function(t){console.log(t.data),e.commit("setCart",t.data.data),e.commit("setLeng",t.data.data.carts.length)}))}},moduals:{}}),C=n("77ed"),w=n.n(C),S=Object(a["createApp"])(r);S.use(k.a,O.a),S.use(g),S.component("Loading",V.a),S.use(x),S.use(w.a),S.mount("#app"),g.beforeEach((function(e,t,n){if(e.meta.requiresAuth){console.log("需驗證");var a="".concat("https://vue-course-api.hexschool.io","/api/user/check");O.a.post(a).then((function(e){console.log(e.data),e.data.success?n():n({path:"/login"})}))}else n()}))},d173:function(e,t,n){"use strict";n("2e63")},d178:function(e,t,n){"use strict";var a=n("7a23"),c={class:"navbar navbar-expand-lg navbar-light"},o={class:"container-fluid"},r=Object(a["createVNode"])("a",{class:"navbar-brand text-light",href:"#"},"小林潛水",-1),s=Object(a["createVNode"])("button",{class:"navbar-toggler",type:"button","data-bs-toggle":"collapse","data-bs-target":"#navbarTogglerDemo02","aria-controls":"navbarTogglerDemo02","aria-expanded":"false","aria-label":"Toggle navigation"},[Object(a["createVNode"])("span",{class:"navbar-toggler-icon"})],-1),i={class:"collapse navbar-collapse",id:"navbarTogglerDemo02"},u={class:"navbar-nav me-auto mb-2 mb-lg-0"},l={class:"nav-item"},d=Object(a["createVNode"])("i",{class:"fas fa-swimmer"},null,-1),f=Object(a["createTextVNode"])("預約潛水"),b={class:"nav-item"},h=Object(a["createVNode"])("i",{class:"fas fa-heart"},null,-1),p=Object(a["createTextVNode"])("喜愛的旅程"),m={class:"nav-item"},g=Object(a["createVNode"])("i",{class:"fas fa-sign-in-alt"},null,-1),v=Object(a["createTextVNode"])("員工登入 "),O={class:"cart btn topic-color",type:"button","data-bs-toggle":"offcanvas","data-bs-target":"#offcanvasRight","aria-controls":"offcanvasRight"},j=Object(a["createVNode"])("i",{class:"fas fa-cart-arrow-down"},null,-1),k={class:"badge bg-danger"},N={class:"offcanvas text-light offcanvas-end",tabindex:"-1",id:"offcanvasRight","aria-labelledby":"offcanvasRightLabel"},V=Object(a["createVNode"])("div",{class:"offcanvas-header"},[Object(a["createVNode"])("h5",{id:"offcanvasRightLabel"},"購物車"),Object(a["createVNode"])("button",{type:"button",class:"btn-close text-reset","data-bs-dismiss":"offcanvas","aria-label":"Close"})],-1),y=Object(a["createVNode"])("hr",null,null,-1),x={class:"offcanvas-body"},C=Object(a["createVNode"])("i",{class:"fas fa-trash-alt"},null,-1),w=Object(a["createVNode"])("hr",null,null,-1),S={class:"offcanvas-footer"},B=Object(a["createTextVNode"])(" 結帳去 ");function M(e,t,n,M,T,_){var L=Object(a["resolveComponent"])("router-link");return Object(a["openBlock"])(),Object(a["createBlock"])(a["Fragment"],null,[Object(a["createVNode"])("nav",c,[Object(a["createVNode"])("div",o,[r,s,Object(a["createVNode"])("div",i,[Object(a["createVNode"])("ul",u,[Object(a["createVNode"])("li",l,[Object(a["createVNode"])(L,{class:"nav-link text-decoration-none text-light",to:"/products"},{default:Object(a["withCtx"])((function(){return[d,f]})),_:1})]),Object(a["createVNode"])("li",b,[Object(a["createVNode"])(L,{class:"nav-link text-decoration-none text-light",to:"/favorite"},{default:Object(a["withCtx"])((function(){return[h,p]})),_:1})]),Object(a["createVNode"])("li",m,[Object(a["createVNode"])(L,{class:"nav-link text-decoration-none text-light",to:"/login"},{default:Object(a["withCtx"])((function(){return[g,v]})),_:1})])])])])]),Object(a["createVNode"])("button",O,[j,Object(a["createVNode"])("span",k,Object(a["toDisplayString"])(_.leng),1)]),Object(a["createVNode"])("div",N,[V,y,Object(a["createVNode"])("div",x,[(Object(a["openBlock"])(!0),Object(a["createBlock"])(a["Fragment"],null,Object(a["renderList"])(_.getCart.carts,(function(e){return Object(a["openBlock"])(),Object(a["createBlock"])("div",{class:"cart-item",key:e.id},[Object(a["createVNode"])("button",{onClick:Object(a["withModifiers"])((function(t){return _.removeCartItem(e.id)}),["prevent"])},[C],8,["onClick"]),Object(a["createVNode"])("h5",null,Object(a["toDisplayString"])(e.product.title),1),Object(a["createVNode"])("div",null,Object(a["toDisplayString"])(e.qty)+"/"+Object(a["toDisplayString"])(e.product.unit),1),Object(a["createVNode"])("div",null,Object(a["toDisplayString"])(e.final_total)+"$",1),w])})),128)),Object(a["createVNode"])("div",S,[Object(a["createVNode"])("h5",null,"購買"+Object(a["toDisplayString"])(_.leng)+"項方案",1),Object(a["createVNode"])("h3",null,"總共:"+Object(a["toDisplayString"])(_.getCart.final_total),1),Object(a["createVNode"])(L,{class:"btn btn-primary btn-lg w-100",to:"/checkout"},{default:Object(a["withCtx"])((function(){return[B]})),_:1})])])])],64)}n("99af");var T={computed:{getCart:function(){return this.$store.state.cart},leng:function(){return this.$store.state.leng}},methods:{removeCartItem:function(e){var t=this,n="".concat("https://vue-course-api.hexschool.io","/api/").concat("didameath","/cart/").concat(e);this.$http.delete(n).then((function(e){console.log(e.data),t.$store.dispatch("getCart")}))}},created:function(){this.$store.dispatch("getCart")}};T.render=M;t["a"]=T},e584:function(e,t,n){},f7b3:function(e,t,n){"use strict";n("e584")},fd2d:function(e,t,n){"use strict";var a=n("7a23"),c={class:"footer text-center bg-dark py-5 mt-5"},o=Object(a["createStaticVNode"])('<div class="text-white mb-3">個人作品非商業用途用</div><div class="icon"><i class="fab fa-facebook fa-lg text-white mx-3"></i><i class="fab fa-line fa-lg text-white mx-3"></i><i class="fab fa-instagram fa-lg text-white mx-3"></i><i class="fas fa-phone-alt fa-lg text-white mx-3">0911-XXX-XXX</i></div>',2);function r(e,t){return Object(a["openBlock"])(),Object(a["createBlock"])("div",c,[o])}const s={};s.render=r;t["a"]=s}});
//# sourceMappingURL=app.b2ba8653.js.map