(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-558ec6c7"],{"107c":function(e,t,n){var r=n("d039");e.exports=r((function(){var e=RegExp("(?<a>b)","string".charAt(5));return"b"!==e.exec("b").groups.a||"bc"!=="b".replace(e,"$<a>c")}))},1276:function(e,t,n){"use strict";var r=n("d784"),a=n("44e7"),c=n("825a"),i=n("1d80"),o=n("4840"),l=n("8aa5"),u=n("50c4"),s=n("14c3"),d=n("9263"),p=n("9f7f"),g=n("d039"),b=p.UNSUPPORTED_Y,f=[].push,h=Math.min,v=4294967295,O=!g((function(){var e=/(?:)/,t=e.exec;e.exec=function(){return t.apply(this,arguments)};var n="ab".split(e);return 2!==n.length||"a"!==n[0]||"b"!==n[1]}));r("split",(function(e,t,n){var r;return r="c"=="abbc".split(/(b)*/)[1]||4!="test".split(/(?:)/,-1).length||2!="ab".split(/(?:ab)*/).length||4!=".".split(/(.?)(.?)/).length||".".split(/()()/).length>1||"".split(/.?/).length?function(e,n){var r=String(i(this)),c=void 0===n?v:n>>>0;if(0===c)return[];if(void 0===e)return[r];if(!a(e))return t.call(r,e,c);var o,l,u,s=[],p=(e.ignoreCase?"i":"")+(e.multiline?"m":"")+(e.unicode?"u":"")+(e.sticky?"y":""),g=0,b=new RegExp(e.source,p+"g");while(o=d.call(b,r)){if(l=b.lastIndex,l>g&&(s.push(r.slice(g,o.index)),o.length>1&&o.index<r.length&&f.apply(s,o.slice(1)),u=o[0].length,g=l,s.length>=c))break;b.lastIndex===o.index&&b.lastIndex++}return g===r.length?!u&&b.test("")||s.push(""):s.push(r.slice(g)),s.length>c?s.slice(0,c):s}:"0".split(void 0,0).length?function(e,n){return void 0===e&&0===n?[]:t.call(this,e,n)}:t,[function(t,n){var a=i(this),c=void 0==t?void 0:t[e];return void 0!==c?c.call(t,a,n):r.call(String(a),t,n)},function(e,a){var i=n(r,this,e,a,r!==t);if(i.done)return i.value;var d=c(this),p=String(e),g=o(d,RegExp),f=d.unicode,O=(d.ignoreCase?"i":"")+(d.multiline?"m":"")+(d.unicode?"u":"")+(b?"g":"y"),x=new g(b?"^(?:"+d.source+")":d,O),j=void 0===a?v:a>>>0;if(0===j)return[];if(0===p.length)return null===s(x,p)?[p]:[];var m=0,N=0,k=[];while(N<p.length){x.lastIndex=b?0:N;var y,V=s(x,b?p.slice(N):p);if(null===V||(y=h(u(x.lastIndex+(b?N:0)),p.length))===m)N=l(p,N,f);else{if(k.push(p.slice(m,N)),k.length===j)return k;for(var I=1;I<=V.length-1;I++)if(k.push(V[I]),k.length===j)return k;N=m=y}}return k.push(p.slice(m)),k}]}),!O,b)},"14c3":function(e,t,n){var r=n("c6b6"),a=n("9263");e.exports=function(e,t){var n=e.exec;if("function"===typeof n){var c=n.call(e,t);if("object"!==typeof c)throw TypeError("RegExp exec method returned something other than an Object or null");return c}if("RegExp"!==r(e))throw TypeError("RegExp#exec called on incompatible receiver");return a.call(e,t)}},1799:function(e,t,n){"use strict";var r=n("7a23"),a={"aria-label":"Page navigation example"},c={class:"pagination"},i=Object(r["createVNode"])("span",{"aria-hidden":"true"},"«",-1),o=Object(r["createVNode"])("a",{class:"page-link",href:"#","aria-label":"Next"},[Object(r["createVNode"])("span",{"aria-hidden":"true"},"»")],-1);function l(e,t,n,l,u,s){return Object(r["openBlock"])(),Object(r["createBlock"])("div",null,[Object(r["createVNode"])("nav",a,[Object(r["createVNode"])("ul",c,[Object(r["createVNode"])("li",{class:["page-item",{disable:!n.pagination.has_pre}]},[Object(r["createVNode"])("a",{class:"page-link",href:"#","aria-label":"Previous",onClick:t[1]||(t[1]=Object(r["withModifiers"])((function(e){return s.emitGetItems(n.pagination.current_page-1)}),["prevent"]))},[i])],2),(Object(r["openBlock"])(!0),Object(r["createBlock"])(r["Fragment"],null,Object(r["renderList"])(n.pagination.total_pages,(function(e){return Object(r["openBlock"])(),Object(r["createBlock"])("li",{class:["page-item",{active:n.pagination.current_page===e}],key:e},[Object(r["createVNode"])("a",{class:"page-link",href:"#",onClick:Object(r["withModifiers"])((function(t){return s.emitGetItems(e)}),["prevent"])},Object(r["toDisplayString"])(e),9,["onClick"])],2)})),128)),Object(r["createVNode"])("li",{class:["page-item",{disable:!n.pagination.has_next}],onClick:t[2]||(t[2]=Object(r["withModifiers"])((function(e){return s.emitGetItems(n.pagination.current_page+1)}),["prevent"]))},[o],2)])])])}var u={props:["pagination"],methods:{emitGetItems:function(e){this.$emit("getPage",e)}}};u.render=l;t["a"]=u},"341b":function(e,t,n){"use strict";n.r(t);var r=n("7a23"),a={class:"table mt-4"},c=Object(r["createVNode"])("thead",null,[Object(r["createVNode"])("tr",null,[Object(r["createVNode"])("th",{width:"120"},"購買時間"),Object(r["createVNode"])("th",{width:"150"},"Email"),Object(r["createVNode"])("th",null,"購買款項"),Object(r["createVNode"])("th",{width:"120"},"應付金額"),Object(r["createVNode"])("th",{width:"100"},"是否付款")])],-1),i={key:0};function o(e,t,n,o,l,u){var s=Object(r["resolveComponent"])("loading"),d=Object(r["resolveComponent"])("Pagination");return Object(r["openBlock"])(),Object(r["createBlock"])("div",null,[Object(r["createVNode"])(s,{active:l.isLoading,"onUpdate:active":t[1]||(t[1]=function(e){return l.isLoading=e})},null,8,["active"]),Object(r["createVNode"])("table",a,[c,Object(r["createVNode"])("tbody",null,[(Object(r["openBlock"])(!0),Object(r["createBlock"])(r["Fragment"],null,Object(r["renderList"])(l.orders,(function(e){return Object(r["openBlock"])(),Object(r["createBlock"])("tr",{key:e.id},[Object(r["createVNode"])("td",null,[Object(r["createVNode"])("div",null,Object(r["toDisplayString"])(u.unix(e.create_at)[0]),1),Object(r["createVNode"])("div",null,Object(r["toDisplayString"])(u.unix(e.create_at)[1]),1)]),Object(r["createVNode"])("td",null,Object(r["toDisplayString"])(e.user.email),1),Object(r["createVNode"])("td",null,[(Object(r["openBlock"])(!0),Object(r["createBlock"])(r["Fragment"],null,Object(r["renderList"])(e.products,(function(e,t){return Object(r["openBlock"])(),Object(r["createBlock"])("li",{key:t},[Object(r["createVNode"])("ul",null," 項目:"+Object(r["toDisplayString"])(e.product.title),1),Object(r["createVNode"])("ul",null," 人數:"+Object(r["toDisplayString"])(e.product.num)+Object(r["toDisplayString"])(e.product.unit),1),e.coupon?(Object(r["openBlock"])(),Object(r["createBlock"])("ul",i," 使用優惠卷:"+Object(r["toDisplayString"])(e.coupon.title),1)):Object(r["createCommentVNode"])("",!0),Object(r["createVNode"])("ul",null," 價錢:"+Object(r["toDisplayString"])(e.final_total),1)])})),128))]),Object(r["createVNode"])("td",null,Object(r["toDisplayString"])(e.total),1),Object(r["createVNode"])("td",null,Object(r["toDisplayString"])(e.is_paid),1)])})),128))])]),Object(r["createVNode"])(d,{pagination:l.pagination,onGetPage:u.getOrders},null,8,["pagination","onGetPage"])])}n("99af"),n("ac1f"),n("1276");var l=n("1799"),u={components:{Pagination:l["a"]},data:function(){return{isLoading:!1,orders:[],pagination:{}}},methods:{getOrders:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1,t="".concat("https://vue-course-api.hexschool.io","/api/").concat("didameath","/orders?page=").concat(e),n=this;n.isLoading=!0,this.$http.get(t).then((function(e){console.log(e.data),n.orders=e.data.orders,n.isLoading=!1,n.pagination=e.data.pagination}))},unix:function(e){var t=new Date(1e3*e).toISOString().split("T");return t}},mounted:function(){this.getOrders()}};u.render=o;t["default"]=u},"44e7":function(e,t,n){var r=n("861d"),a=n("c6b6"),c=n("b622"),i=c("match");e.exports=function(e){var t;return r(e)&&(void 0!==(t=e[i])?!!t:"RegExp"==a(e))}},"8aa5":function(e,t,n){"use strict";var r=n("6547").charAt;e.exports=function(e,t,n){return t+(n?r(e,t).length:1)}},9263:function(e,t,n){"use strict";var r=n("ad6d"),a=n("9f7f"),c=n("5692"),i=n("7c73"),o=n("69f3").get,l=n("fce3"),u=n("107c"),s=RegExp.prototype.exec,d=c("native-string-replace",String.prototype.replace),p=s,g=function(){var e=/a/,t=/b*/g;return s.call(e,"a"),s.call(t,"a"),0!==e.lastIndex||0!==t.lastIndex}(),b=a.UNSUPPORTED_Y||a.BROKEN_CARET,f=void 0!==/()??/.exec("")[1],h=g||f||b||l||u;h&&(p=function(e){var t,n,a,c,l,u,h,v=this,O=o(v),x=O.raw;if(x)return x.lastIndex=v.lastIndex,t=p.call(x,e),v.lastIndex=x.lastIndex,t;var j=O.groups,m=b&&v.sticky,N=r.call(v),k=v.source,y=0,V=e;if(m&&(N=N.replace("y",""),-1===N.indexOf("g")&&(N+="g"),V=String(e).slice(v.lastIndex),v.lastIndex>0&&(!v.multiline||v.multiline&&"\n"!==e[v.lastIndex-1])&&(k="(?: "+k+")",V=" "+V,y++),n=new RegExp("^(?:"+k+")",N)),f&&(n=new RegExp("^"+k+"$(?!\\s)",N)),g&&(a=v.lastIndex),c=s.call(m?n:v,V),m?c?(c.input=c.input.slice(y),c[0]=c[0].slice(y),c.index=v.lastIndex,v.lastIndex+=c[0].length):v.lastIndex=0:g&&c&&(v.lastIndex=v.global?c.index+c[0].length:a),f&&c&&c.length>1&&d.call(c[0],n,(function(){for(l=1;l<arguments.length-2;l++)void 0===arguments[l]&&(c[l]=void 0)})),c&&j)for(c.groups=u=i(null),l=0;l<j.length;l++)h=j[l],u[h[0]]=c[h[1]];return c}),e.exports=p},"9f7f":function(e,t,n){var r=n("d039"),a=function(e,t){return RegExp(e,t)};t.UNSUPPORTED_Y=r((function(){var e=a("a","y");return e.lastIndex=2,null!=e.exec("abcd")})),t.BROKEN_CARET=r((function(){var e=a("^r","gy");return e.lastIndex=2,null!=e.exec("str")}))},ac1f:function(e,t,n){"use strict";var r=n("23e7"),a=n("9263");r({target:"RegExp",proto:!0,forced:/./.exec!==a},{exec:a})},ad6d:function(e,t,n){"use strict";var r=n("825a");e.exports=function(){var e=r(this),t="";return e.global&&(t+="g"),e.ignoreCase&&(t+="i"),e.multiline&&(t+="m"),e.dotAll&&(t+="s"),e.unicode&&(t+="u"),e.sticky&&(t+="y"),t}},d784:function(e,t,n){"use strict";n("ac1f");var r=n("6eeb"),a=n("9263"),c=n("d039"),i=n("b622"),o=n("9112"),l=i("species"),u=RegExp.prototype;e.exports=function(e,t,n,s){var d=i(e),p=!c((function(){var t={};return t[d]=function(){return 7},7!=""[e](t)})),g=p&&!c((function(){var t=!1,n=/a/;return"split"===e&&(n={},n.constructor={},n.constructor[l]=function(){return n},n.flags="",n[d]=/./[d]),n.exec=function(){return t=!0,null},n[d](""),!t}));if(!p||!g||n){var b=/./[d],f=t(d,""[e],(function(e,t,n,r,c){var i=t.exec;return i===a||i===u.exec?p&&!c?{done:!0,value:b.call(t,n,r)}:{done:!0,value:e.call(n,t,r)}:{done:!1}}));r(String.prototype,e,f[0]),r(u,d,f[1])}s&&o(u[d],"sham",!0)}},fce3:function(e,t,n){var r=n("d039");e.exports=r((function(){var e=RegExp(".","string".charAt(0));return!(e.dotAll&&e.exec("\n")&&"s"===e.flags)}))}}]);
//# sourceMappingURL=chunk-558ec6c7.d5af0d75.js.map