(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-38574ad1"],{a55b:function(e,t,a){"use strict";a.r(t);var o=a("7a23"),c=Object(o["withScopeId"])("data-v-7ba81d55");Object(o["pushScopeId"])("data-v-7ba81d55");var n=Object(o["createVNode"])("h1",{class:"h3 mb-3 fw-normal"},"請先登入",-1),r={class:"form-floating"},s=Object(o["createVNode"])("label",{for:"floatingInput"},"Email address",-1),i={class:"form-floating"},d=Object(o["createVNode"])("label",{for:"floatingPassword"},"Password",-1),l=Object(o["createVNode"])("div",{class:"checkbox mb-3"},[Object(o["createVNode"])("label",null,[Object(o["createVNode"])("input",{type:"checkbox",value:"remember-me"}),Object(o["createTextVNode"])(" Remember me ")])],-1),u=Object(o["createVNode"])("button",{class:"w-100 btn btn-lg btn-primary",type:"submit"},"Sign in",-1),b=Object(o["createVNode"])("p",{class:"mt-5 mb-3 text-muted"},"© 2017–2021",-1);Object(o["popScopeId"])();var p=c((function(e,t,a,c,p,m){return Object(o["openBlock"])(),Object(o["createBlock"])("div",null,[Object(o["createVNode"])("form",{class:"form-signin",onSubmit:t[3]||(t[3]=Object(o["withModifiers"])((function(){return m.signin&&m.signin.apply(m,arguments)}),["prevent"]))},[n,Object(o["createVNode"])("div",r,[Object(o["withDirectives"])(Object(o["createVNode"])("input",{type:"email",class:"form-control",id:"floatingInput",placeholder:"name@example.com","onUpdate:modelValue":t[1]||(t[1]=function(e){return p.user.username=e})},null,512),[[o["vModelText"],p.user.username]]),s]),Object(o["createVNode"])("div",i,[Object(o["withDirectives"])(Object(o["createVNode"])("input",{type:"password",class:"form-control",id:"floatingPassword",placeholder:"Password","onUpdate:modelValue":t[2]||(t[2]=function(e){return p.user.password=e})},null,512),[[o["vModelText"],p.user.password]]),d]),l,u,b],32)])})),m=(a("99af"),{name:"Login",data:function(){return{user:{username:"",password:""}}},methods:{signin:function(){var e=this,t="".concat("https://vue-course-api.hexschool.io","/admin/signin");this.$http.post(t,this.user).then((function(t){if(console.log(t),t.data.success){var a=t.data.token,o=t.data.expired;document.cookie="hexToken=".concat(a,"; expires=").concat(new Date(o),";"),e.$router.push("/admin/staffproducts")}}))}}});a("f894");m.render=p,m.__scopeId="data-v-7ba81d55";t["default"]=m},f894:function(e,t,a){"use strict";a("f967")},f967:function(e,t,a){}}]);
//# sourceMappingURL=chunk-38574ad1.bd4f5bc6.js.map