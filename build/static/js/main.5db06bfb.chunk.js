(this.webpackJsonpphonebook=this.webpackJsonpphonebook||[]).push([[0],{18:function(e,n,t){e.exports=t(40)},40:function(e,n,t){"use strict";t.r(n);var a=t(0),r=t.n(a),u=t(16),c=t.n(u),o=t(17),l=t(2),i=t(4),m=t.n(i),d="/api/persons",s=function(){return m.a.get(d).then((function(e){return e.data}))},f=function(e){return m.a.post(d,e).then((function(e){return e.data}))},h=function(e){return m.a.delete("".concat(d,"/").concat(e)).then((function(e){return e.data}))},b=function(e,n){return m.a.put("".concat(d,"/").concat(e),n).then((function(e){return e.data}))},p=function(e){var n=e.onChange,t=e.value;return r.a.createElement("div",null,"filter shown with"," ",r.a.createElement("input",{type:"text",onChange:n,value:t}))},v=function(e){var n=e.nameChange,t=e.numberChange,a=e.nameValue,u=e.numberValue,c=e.handleClick;return r.a.createElement("form",null,r.a.createElement("div",null,"name: ",r.a.createElement("input",{type:"text",onChange:n,value:a})),r.a.createElement("div",null,"number: ",r.a.createElement("input",{type:"tel",onChange:t,value:u})),r.a.createElement("div",null,r.a.createElement("button",{onClick:c,type:"submit"},"add")))},g=function(e){var n=e.name,t=e.number,a=e.id,u=e.handleClick;return r.a.createElement("p",null,n," ",t," ",r.a.createElement("button",{onClick:function(e){return u(e,a,n)}},"delete"))},E=function(e){var n=e.persons,t=e.handleClick;return n.map((function(e){return r.a.createElement(g,{id:e.id,key:e.id,name:e.name,number:e.number,handleClick:t})}))},C=t(6),k={color:"green",width:"95%",background:"whitesmoke",margin:"2 auto",padding:"5px",border:"green 3px solid",borderRadius:5},j=Object(C.a)(Object(C.a)({},k),{},{color:"red",border:"red 3px solid"}),O=function(e){var n=e.message;return null===n?null:n.isPositive?r.a.createElement("h2",{style:k},n.message):r.a.createElement("h2",{style:j},n.message)},w=function(){var e=Object(a.useState)([]),n=Object(l.a)(e,2),t=n[0],u=n[1],c=Object(a.useState)(""),i=Object(l.a)(c,2),m=i[0],d=i[1],g=Object(a.useState)(""),C=Object(l.a)(g,2),k=C[0],j=C[1],w=Object(a.useState)(""),y=Object(l.a)(w,2),x=y[0],S=y[1],V=Object(a.useState)(null),P=Object(l.a)(V,2),T=P[0],D=P[1];Object(a.useEffect)((function(){s().then((function(e){return u(e)}))}),[]);var I=function(e,n,t){D({message:e,isPositive:t}),setTimeout((function(){return D(null)}),n)};return r.a.createElement("div",null,r.a.createElement("h2",null,"Phonebook"),r.a.createElement(O,{message:T}),r.a.createElement(p,{onChange:function(e){S(e.target.value)},value:x}),r.a.createElement("h2",null,"Add a new"),r.a.createElement(v,{nameChange:function(e){d(e.target.value)},numberChange:function(e){j(e.target.value)},nameValue:m,numberValue:k,handleClick:function(e){if(e.preventDefault(),0!==m.length){if(t.some((function(e){return e.name===m}))){if(!window.confirm("".concat(m," is already in the phonebook. Replace the old number with the new one?")))return;var n=t.find((function(e){return e.name===m})),a={name:m,number:k,id:n.id};return console.log(a),void b(n.id,a).then((function(e){var r=t.findIndex((function(e){return e.id===n.id})),c=Object(o.a)(t);c[r]=a,u(c),I("The number  of ".concat(e.name," has been replaced."),2e3,!0)})).catch((function(e){I(e.response.data,2e3,!1)}))}var r=t,c={name:m,number:k};f(c).then((function(e){return u(r.concat(c))})).catch((function(e){I(e.response.data,2e3,!1)})).then(I("".concat(m," has been added to the list."),2e3,!0)),d(""),j("")}}}),r.a.createElement("h2",null,"Numbers"),r.a.createElement(E,{persons:function(e,n){return n.filter((function(n){return n.name.toLowerCase().includes(e.toLowerCase())}))}(x,t),handleClick:function(e,n,a){e.preventDefault(),h(n).then((function(e){I("".concat(a," has been deleted from the list."),2e3,!0);var r=t.filter((function(e){return e.id!==n}));u(r),console.log(e)})).catch((function(e){return I("The entry of \"".concat(a,"\" has been already deleted"),2e3,!1)}))}}))};c.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(w,null)),document.getElementById("root"))}},[[18,1,2]]]);
//# sourceMappingURL=main.5db06bfb.chunk.js.map