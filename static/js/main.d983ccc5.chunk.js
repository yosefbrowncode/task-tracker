(this["webpackJsonptask-tracker"]=this["webpackJsonptask-tracker"]||[]).push([[0],{14:function(e,t,n){},16:function(e,t,n){"use strict";n.r(t);var c=n(1),r=n.n(c),a=n(7),o=n.n(a),s=(n(14),n(9)),i=n(5),l=n(2),d=n(0),j=function(e){var t=e.color,n=e.text,c=e.onClick;return Object(d.jsx)("button",{onClick:c,style:{backgroundColor:t},className:"btn",children:n})},u=function(e){var t=e.title,n=e.onAdd,c=e.showAdd;return Object(d.jsxs)("header",{className:"header",children:[Object(d.jsx)("h1",{children:t}),Object(d.jsx)(j,{color:c?"#525452":"#0f8d9a",text:c?"Close":"Add",onClick:n})]})};u.defaultProps={title:"Avodas Hashem"};var b=u,h=n(8),O=function(e){var t=e.task,n=e.onDelete,c=e.onToggle;return Object(d.jsxs)("div",{className:"task ".concat(t.reminder?"reminder":" "),onDoubleClick:function(){return c(t.id)},children:[Object(d.jsxs)("h3",{children:[t.text," "," ",Object(d.jsx)(h.a,{style:{color:"red",cursor:"pointer"},onClick:function(){return n(t.id)}})]}),Object(d.jsxs)("p",{style:{textIndent:"10px"},children:["-",t.day]})]})},x=function(e){var t=e.tasks,n=e.onDelete,c=e.onToggle;return Object(d.jsx)(d.Fragment,{children:t.map((function(e){return Object(d.jsx)(O,{task:e,onDelete:n,onToggle:c},e.id)}))})},f=function(e){var t=e.onAdd,n=Object(c.useState)(" "),r=Object(l.a)(n,2),a=r[0],o=r[1],s=Object(c.useState)(" "),i=Object(l.a)(s,2),j=i[0],u=i[1],b=Object(c.useState)(!1),h=Object(l.a)(b,2),O=h[0],x=h[1];return Object(d.jsxs)("form",{className:"add-form",onSubmit:function(e){e.preventDefault(),a?(t({text:a,day:j,reminder:O}),o(""),u(""),x(!1)):alert("Please Add Avodah")},children:[Object(d.jsxs)("div",{className:"form-control",children:[Object(d.jsx)("label",{children:"Avodah"}),Object(d.jsx)("input",{type:"text",placeholder:"New Avodah",value:a,onChange:function(e){return o(e.target.value)}})]}),Object(d.jsxs)("div",{className:"form-control ",children:[Object(d.jsx)("label",{children:"Day & Time"}),Object(d.jsx)("input",{type:"text",placeholder:"Day & Time",value:j,onChange:function(e){return u(e.target.value)}})]}),Object(d.jsxs)("div",{className:"form-control form-control-check",children:[Object(d.jsx)("label",{children:"Set Reminder"}),Object(d.jsx)("input",{type:"checkbox",checked:O,value:O,onChange:function(e){return x(e.currentTarget.checked)}})]}),Object(d.jsx)("input",{type:"submit",value:"save-task",className:"btn btn-block"})]})};var m=function(){var e=Object(c.useState)(!1),t=Object(l.a)(e,2),n=t[0],r=t[1],a=Object(c.useState)([]),o=Object(l.a)(a,2),j=o[0],u=o[1];return Object(d.jsxs)("div",{className:"container",children:[Object(d.jsx)(b,{onAdd:function(){return r(!n)},showAdd:n}),n&&Object(d.jsx)(f,{onAdd:function(e){var t=Math.floor(1e4*Math.random())+1,n=Object(i.a)({id:t},e);u([].concat(Object(s.a)(j),[n]))}}),j.length>0?Object(d.jsx)(x,{tasks:j,onDelete:function(e){u(j.filter((function(t){return t.id!==e})))},onToggle:function(e){u(j.map((function(t){return t.id===e?Object(i.a)(Object(i.a)({},t),{},{reminder:!t.reminder}):t})))}}):"Add A New Avodah"]})},v=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,17)).then((function(t){var n=t.getCLS,c=t.getFID,r=t.getFCP,a=t.getLCP,o=t.getTTFB;n(e),c(e),r(e),a(e),o(e)}))};o.a.render(Object(d.jsx)(r.a.StrictMode,{children:Object(d.jsx)(m,{})}),document.getElementById("root")),v()}},[[16,1,2]]]);
//# sourceMappingURL=main.d983ccc5.chunk.js.map