(function(t){function e(e){for(var o,u,l=e[0],s=e[1],a=e[2],d=0,p=[];d<l.length;d++)u=l[d],r[u]&&p.push(r[u][0]),r[u]=0;for(o in s)Object.prototype.hasOwnProperty.call(s,o)&&(t[o]=s[o]);c&&c(e);while(p.length)p.shift()();return i.push.apply(i,a||[]),n()}function n(){for(var t,e=0;e<i.length;e++){for(var n=i[e],o=!0,l=1;l<n.length;l++){var s=n[l];0!==r[s]&&(o=!1)}o&&(i.splice(e--,1),t=u(u.s=n[0]))}return t}var o={},r={app:0},i=[];function u(e){if(o[e])return o[e].exports;var n=o[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,u),n.l=!0,n.exports}u.m=t,u.c=o,u.d=function(t,e,n){u.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},u.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},u.t=function(t,e){if(1&e&&(t=u(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(u.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)u.d(n,o,function(e){return t[e]}.bind(null,o));return n},u.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return u.d(e,"a",e),e},u.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},u.p="/";var l=window["webpackJsonp"]=window["webpackJsonp"]||[],s=l.push.bind(l);l.push=e,l=l.slice();for(var a=0;a<l.length;a++)e(l[a]);var c=s;i.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},1666:function(t,e,n){},"56d7":function(t,e,n){"use strict";n.r(e);n("cadf"),n("551c"),n("f751"),n("097d");var o=n("2b0e"),r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("h1",[t._v("My Todo App!")]),n("TodoList")],1)},i=[],u=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("BaseInputText",{attrs:{placeholder:"New todo"},on:{keydown:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.addTodo(e)}},model:{value:t.newTodoText,callback:function(e){t.newTodoText="string"===typeof e?e.trim():e},expression:"newTodoText"}}),t.todos.length?n("ul",t._l(t.todos,function(e){return n("TodoListItem",{key:e.id,attrs:{todo:e},on:{remove:t.removeTodo}})}),1):n("p",[t._v("\n        Nothing left in the list. Add a new todo in the input above.\n    ")])],1)},l=[],s=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("input",t._g({staticClass:"input",attrs:{type:"text"},domProps:{value:t.value}},t.listeners))},a=[],c=n("cebc"),d={props:{value:{type:String,default:""}},computed:{listeners:function(){var t=this;return Object(c["a"])({},this.$listeners,{input:function(e){return t.$emit("input",e.target.value)}})}}},p=d,f=(n("e8a5"),n("2877")),v=Object(f["a"])(p,s,a,!1,null,"0506189d",null),h=v.exports,b=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("li",[t._v("\n    "+t._s(t.todo.text)+"\n    "),n("button",{on:{click:function(e){return t.$emit("remove",t.todo.id)}}},[t._v("\n        X\n    ")])])},m=[],x={props:{todo:{type:Object,required:!0}}},y=x,T=Object(f["a"])(y,b,m,!1,null,null,null),_=T.exports,g=1,w={components:{BaseInputText:h,TodoListItem:_},data:function(){return{newTodoText:"",todos:[{id:g++,text:"Learn Vue"},{id:g++,text:"Learn about single-file components"},{id:g++,text:"Fall in love"}]}},methods:{addTodo:function(){var t=this.newTodoText;t&&(this.todos.push({id:g++,text:t}),this.newTodoText="")},removeTodo:function(t){this.todos=this.todos.filter(function(e){return e.id!==t})}}},O=w,j=Object(f["a"])(O,u,l,!1,null,null,null),k=j.exports,$={components:{TodoList:k}},P=$,L=(n("5c0b"),Object(f["a"])(P,r,i,!1,null,null,null)),S=L.exports;o["a"].config.productionTip=!1,new o["a"]({render:function(t){return t(S)}}).$mount("#app")},"5c0b":function(t,e,n){"use strict";var o=n("5e27"),r=n.n(o);r.a},"5e27":function(t,e,n){},e8a5:function(t,e,n){"use strict";var o=n("1666"),r=n.n(o);r.a}});
//# sourceMappingURL=app.47dbd952.js.map