(this["webpackJsonpprojekt-routing"]=this["webpackJsonpprojekt-routing"]||[]).push([[0],[,,,,,,,,,,function(e,t,a){e.exports=a.p+"static/media/header1.70e6670e.jpg"},function(e,t,a){e.exports=a.p+"static/media/header2.33eca35f.jpg"},,,,,,function(e,t,a){e.exports=a.p+"static/media/header3.d9d36b65.jpg"},,,,,,function(e,t,a){e.exports=a(39)},,,,,function(e,t,a){},function(e,t,a){},function(e,t,a){},,,,,,function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(16),l=a.n(c),i=(a(28),a(29),a(5)),u=a(10),o=a.n(u),m=a(11),s=a.n(m),p=a(17),d=a.n(p),E=(a(30),a(1)),h=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(E.e,null,r.a.createElement(E.c,{path:"/",exact:!0,render:function(){return r.a.createElement("img",{src:o.a,alt:"city"})}}),r.a.createElement(E.c,{path:"/products",render:function(){return r.a.createElement("img",{src:s.a,alt:"city"})}}),r.a.createElement(E.c,{path:"/contact",render:function(){return r.a.createElement("img",{src:d.a,alt:"city"})}}),r.a.createElement(E.c,{path:"/admin-panel",render:function(){return r.a.createElement("img",{src:s.a,alt:"city"})}}),r.a.createElement(E.c,{render:function(){return r.a.createElement("img",{src:o.a,alt:"city"})}})))},f=(a(36),[{name:"start",exact:!0,path:"/"},{name:"products",path:"/products"},{name:"contact",path:"/contact"},{name:"admin-panel",path:"/admin-panel"}]),g=function(){var e=f.map((function(e){return r.a.createElement("li",{key:e.name},r.a.createElement(i.c,{to:e.path,exact:e.exact},e.name))}));return r.a.createElement("div",null,r.a.createElement("nav",null,r.a.createElement("ul",null,e)))},b=(a(37),function(e){return r.a.createElement("article",null,r.a.createElement("h3",null,e.title),r.a.createElement("span",null,e.author),r.a.createElement("p",null,e.text))}),v=[{id:1,title:"Czym jest teoria strun?",author:"Jan Nowak",text:"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nostrum nulla accusantium, quis quaerat quisquam fugiat distinctio id quidem eos vero, quibusdam perspiciatis, beatae ipsam nesciunt itaque dolor officia iusto similique?"},{id:2,title:"Czym jest paradoks Fermiego?",author:"Anna Kwiatkowska",text:"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nostrum nulla accusantium, quis quaerat quisquam fugiat distinctio id quidem eos vero, quibusdam perspiciatis, beatae ipsam nesciunt itaque dolor officia iusto similique?"},{id:3,title:"Ciemna materia, a ciemna energia",author:"Jan Kowalski",text:"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nostrum nulla accusantium, quis quaerat quisquam fugiat distinctio id quidem eos vero, quibusdam perspiciatis, beatae ipsam nesciunt itaque dolor officia iusto similique?"}],y=function(){var e=v.map((function(e){return r.a.createElement(b,Object.assign({key:e.id},e))}));return r.a.createElement("div",{className:"home"},e)},q=function(e){return r.a.createElement("article",{className:"product"},r.a.createElement("h1",null,e.id))},k=function(e){return r.a.createElement(r.a.Fragment,null,r.a.createElement(q,{id:e.match.params.id}),r.a.createElement(i.b,{to:"/products"},"Back to products list"))},x=["car","bike","motorbike"],j=function(){var e=x.map((function(e){return r.a.createElement("li",{key:e},r.a.createElement(i.b,{to:"/products/".concat(e)},e))}));return r.a.createElement("div",{className:"products"},r.a.createElement("h2",null,"Product List:"),r.a.createElement("div",null,r.a.createElement("ul",null,e)))},w=a(19),N=a(20),C=a(22),S=a(21),F=(a(38),function(e){Object(C.a)(a,e);var t=Object(S.a)(a);function a(){var e;Object(w.a)(this,a);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={value:""},e.handleChange=function(t){e.setState({value:t.target.value})},e.handleSubmit=function(t){t.preventDefault(),e.setState({value:""})},e}return Object(N.a)(a,[{key:"render",value:function(){return r.a.createElement("div",{className:"contact"},r.a.createElement("form",{onSubmit:this.handleSubmit},r.a.createElement("h3",null,"Write to us"),r.a.createElement("textarea",{value:this.state.value,placeholder:"Your message",onChange:this.handleChange}),r.a.createElement("button",null,"Send")),r.a.createElement(E.a,{when:this.state.value,message:"Are you sure, you want to leave this page?"}))}}]),a}(r.a.Component)),L=function(){return r.a.createElement(E.c,{render:function(){return r.a.createElement(E.b,{to:"/login"})}})},O=function(){return r.a.createElement("div",null,r.a.createElement("label",{htmlFor:""},"Login: ",r.a.createElement("input",{style:{display:"block"},type:"text"})),r.a.createElement("label",{htmlFor:""},"Password: ",r.a.createElement("input",{style:{display:"block"},type:"password"})),r.a.createElement("button",{style:{marginTop:6,display:"block"}},"Log in"))},J=function(){return r.a.createElement("p",null,"Site does not exist. Check your webpath.")},A=function(){return r.a.createElement(E.e,null,r.a.createElement(E.c,{path:"/",exact:!0,component:y}),r.a.createElement(E.c,{path:"/products",exact:!0,component:j}),r.a.createElement(E.c,{path:"/products/:id",component:k}),r.a.createElement(E.c,{path:"/contact",component:F}),r.a.createElement(E.c,{path:"/admin-panel",component:L}),r.a.createElement(E.c,{path:"/login",component:O}),r.a.createElement(E.c,{component:J}))},z=function(){return r.a.createElement("div",null,"Footer")};var B=function(){return r.a.createElement(i.a,null,r.a.createElement("div",{className:"app"},r.a.createElement("header",null,r.a.createElement(h,null)),r.a.createElement("main",null,r.a.createElement("aside",null,r.a.createElement(g,null)),r.a.createElement("section",{className:"page"},r.a.createElement(A,null))),r.a.createElement("footer",null,r.a.createElement(z,null))))};l.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(B,null)),document.getElementById("root"))}],[[23,1,2]]]);
//# sourceMappingURL=main.0fe39760.chunk.js.map