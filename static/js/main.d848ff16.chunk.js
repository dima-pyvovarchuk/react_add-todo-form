(this["webpackJsonpreact_add-todo-form"]=this["webpackJsonpreact_add-todo-form"]||[]).push([[0],{14:function(e,t,a){},16:function(e,t,a){"use strict";a.r(t);var n=a(7),i=a.n(n),s=a(9),r=a(2),c=a(6),o=a(1),l=(a(14),[{id:1,name:"Leanne Graham",username:"Bret",email:"Sincere@april.biz"},{id:2,name:"Ervin Howell",username:"Antonette",email:"Shanna@melissa.tv"},{id:3,name:"Clementine Bauch",username:"Samantha",email:"Nathan@yesenia.net"},{id:4,name:"Patricia Lebsack",username:"Karianne",email:"Julianne.OConner@kory.org"},{id:5,name:"Chelsey Dietrich",username:"Kamren",email:"Lucio_Hettinger@annie.ca"},{id:6,name:"Mrs. Dennis Schulist",username:"Leopoldo_Corkery",email:"Karley_Dach@jasper.info"},{id:7,name:"Kurtis Weissnat",username:"Elwyn.Skiles",email:"Telly.Hoeger@billy.biz"},{id:8,name:"Nicholas Runolfsdottir V",username:"Maxime_Nienow",email:"Sherwood@rosamond.me"},{id:9,name:"Glenna Reichert",username:"Delphine",email:"Chaim_McDermott@dana.io"},{id:10,name:"Clementina DuBuque",username:"Moriah.Stanton",email:"Rey.Padberg@karina.biz"}]),u=a(8),d=a.n(u),m=a(0),j=function(e){var t=e.user;return Object(m.jsx)("a",{className:"UserInfo",href:"mailto:".concat(null===t||void 0===t?void 0:t.email),children:null===t||void 0===t?void 0:t.name})},b=function(e){var t=e.todo;return Object(m.jsxs)("article",{"data-id":t.id,className:d()("TodoInfo",{"TodoInfo--completed":t.completed}),children:[Object(m.jsx)("h2",{className:"TodoInfo__title",children:t.title}),Object(m.jsx)(j,{user:t.user})]})},h=function(e){var t=e.todos;return Object(m.jsx)("section",{className:"TodoList",children:t.map((function(e){return Object(m.jsx)(b,{todo:e},e.id)}))})},f=[{id:1,title:"delectus aut autem",completed:!0,userId:1},{id:15,title:"delectus aut autem",completed:!0,userId:1},{id:2,title:"quis ut nam facilis et officia qui",completed:!1,userId:4}].map((function(e){return Object(c.a)(Object(c.a)({},e),{},{user:l.find((function(t){return t.id===e.userId||null}))})})),O=function(){var e=Object(o.useState)(f),t=Object(r.a)(e,2),a=t[0],n=t[1],i=Object(o.useState)(""),c=Object(r.a)(i,2),u=c[0],d=c[1],j=Object(o.useState)(""),b=Object(r.a)(j,2),O=b[0],p=b[1],v=Object(o.useState)(!1),x=Object(r.a)(v,2),y=x[0],N=x[1],S=Object(o.useState)(!1),I=Object(r.a)(S,2),g=I[0],C=I[1];return Object(m.jsxs)("div",{className:"App",children:[Object(m.jsxs)("form",{action:"/api/users",method:"POST",onSubmit:function(e){e.preventDefault();var t=l.find((function(e){return e.name===O}))||null,i=0;t&&(i=t.id);var r={id:a[a.length-1].id+1,title:u,userId:i,completed:!1,user:t};if(!O||!u)return C(!O),void N(!u);n((function(e){return[].concat(Object(s.a)(e),[r])})),d(""),p("")},children:[Object(m.jsxs)("div",{className:"field",children:[Object(m.jsx)("input",{type:"text","data-cy":"titleInput",className:"input",placeholder:"Enter a title",value:u,onChange:function(e){d(e.target.value),N(!1)}}),y&&Object(m.jsx)("span",{className:"error",children:"Please enter a title"})]}),Object(m.jsxs)("div",{className:"field",children:[Object(m.jsxs)("select",{"data-cy":"userSelect",className:"select",value:O,onChange:function(e){p(e.target.value),C(!1)},children:[Object(m.jsx)("option",{value:"",disabled:!0,children:"Choose a user"}),l.map((function(e){return Object(m.jsx)("option",{value:e.name,children:e.name},e.id)}))]}),g&&Object(m.jsx)("span",{className:"error",children:"Please choose a user"})]}),Object(m.jsx)("button",{type:"submit","data-cy":"submitButton",className:"button is-dark",children:"Add"})]}),Object(m.jsx)(h,{todos:a})]})};i.a.render(Object(m.jsx)(O,{}),document.getElementById("root"))}},[[16,1,2]]]);
//# sourceMappingURL=main.d848ff16.chunk.js.map