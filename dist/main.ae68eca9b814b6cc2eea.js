!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define("WhatsappWidget",[],t):"object"==typeof exports?exports.WhatsappWidget=t():e.WhatsappWidget=t()}(self,(function(){return function(){"use strict";var e,t={8724:function(e,t,n){var r=n(7294),o=n(3935),a=(n(4916),n(4765),n(7042),n(1539),n(1038),n(8783),n(2526),n(1817),n(2165),n(6992),n(3948),n(285),n(5893));function i(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var r,o,a=[],i=!0,u=!1;try{for(n=n.call(e);!(i=(r=n.next()).done)&&(a.push(r.value),!t||a.length!==t);i=!0);}catch(e){u=!0,o=e}finally{try{i||null==n.return||n.return()}finally{if(u)throw o}}return a}}(e,t)||function(e,t){if(e){if("string"==typeof e)return u(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?u(e,t):void 0}}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function u(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}var s=(0,r.createContext)(),c=function(e){var t=e.children,n=i((0,r.useState)(!1),2),o=n[0],u=n[1],c=i((0,r.useState)({}),2),l=c[0],f=c[1],p={whatsappOpen:o,openWhatsapp:function(){u(!o)},utms:l,processUtms:function(e){var t=new URLSearchParams(e),n={source:t.get("utm_source"),medium:t.get("utm_medium"),campaign:t.get("utm_campaign"),content:t.get("utm_content"),segment:t.get("utm_segment")};f(n)}};return(0,a.jsx)(s.Provider,{value:p,children:t})},l=function(){var e,t=(0,r.useContext)(s),n=t.whatsappOpen,o=t.openWhatsapp;return(0,a.jsx)("div",{className:(e=n,e?"boton close":"boton"),id:"initial-button",children:(0,a.jsx)("button",{id:"boton-inicial",onClick:function(){return o()},children:"Chatea con nosotrossss"})})};function f(e,t,n,r,o,a,i){try{var u=e[a](i),s=u.value}catch(e){return void n(e)}u.done?t(s):Promise.resolve(s).then(r,o)}function p(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var r,o,a=[],i=!0,u=!1;try{for(n=n.call(e);!(i=(r=n.next()).done)&&(a.push(r.value),!t||a.length!==t);i=!0);}catch(e){u=!0,o=e}finally{try{i||null==n.return||n.return()}finally{if(u)throw o}}return a}}(e,t)||function(e,t){if(e){if("string"==typeof e)return d(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?d(e,t):void 0}}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function d(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}n(5666),n(7941),n(7327),n(5003),n(4747),n(9337),n(8674);var h=(0,r.createContext)(),m=function(e){var t=e.children,n=p((0,r.useState)(sessionStorage.getItem("whatsappWidgetToken")),2),o=n[0],i=n[1],u=p((0,r.useState)(""),2),s=(u[0],u[1]),c=function(){var e,t=(e=regeneratorRuntime.mark((function e(){var t,n,r;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return console.log("empezando la funcion fetchToken"),t={method:"POST",headers:{"Content-Type":"application/x-www-form-urlencoded"},body:JSON.stringify("grant_type=&username=localhost&password=Olvidala249ever24**85&scope=&client_id=&client_secret=")},console.log("voy a hacer la peticion de fetchToken"),e.next=5,fetch("http://127.0.0.1:8000/marcas/token",t);case 5:return n=e.sent,e.next=8,n.json();case 8:r=e.sent,console.log("ya hice la peticion de fetchToken y hubo una respuesta"),n.ok?(i(r.access_token),sessionStorage.setItem("whatsappWidgetToken",r.access_token)):s(r.detail);case 11:case"end":return e.stop()}}),e)})),function(){var t=this,n=arguments;return new Promise((function(r,o){var a=e.apply(t,n);function i(e){f(a,r,o,i,u,"next",e)}function u(e){f(a,r,o,i,u,"throw",e)}i(void 0)}))});return function(){return t.apply(this,arguments)}}(),l={token:o,setToken:i,fetchToken:c};return(0,a.jsx)(h.Provider,{value:l,children:t})};function v(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function y(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?v(Object(n),!0).forEach((function(t){g(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):v(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function g(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function b(e,t,n,r,o,a,i){try{var u=e[a](i),s=u.value}catch(e){return void n(e)}u.done?t(s):Promise.resolve(s).then(r,o)}function x(e){return function(){var t=this,n=arguments;return new Promise((function(r,o){var a=e.apply(t,n);function i(e){b(a,r,o,i,u,"next",e)}function u(e){b(a,r,o,i,u,"throw",e)}i(void 0)}))}}function j(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var r,o,a=[],i=!0,u=!1;try{for(n=n.call(e);!(i=(r=n.next()).done)&&(a.push(r.value),!t||a.length!==t);i=!0);}catch(e){u=!0,o=e}finally{try{i||null==n.return||n.return()}finally{if(u)throw o}}return a}}(e,t)||function(e,t){if(e){if("string"==typeof e)return w(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?w(e,t):void 0}}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function w(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}var O=function(){var e,t=(0,r.useContext)(s),n=t.whatsappOpen,o=t.openWhatsapp,i=t.utms,u=(0,r.useContext)(h),c=(u.token,u.fetchToken),l=j((0,r.useState)(""),2),f=l[0],p=l[1],d=j((0,r.useState)(""),2),m=d[0],v=d[1],g=j((0,r.useState)(""),2),b=g[0],w=g[1],O=j((0,r.useState)(""),2),S=(O[0],O[1]),k=j((0,r.useState)(!1),2),C=(k[0],k[1]),P=function(){var e=x(regeneratorRuntime.mark((function e(){var t,n,r,o;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return console.log("empezando la funcion de sendWhatsappData"),e.next=3,c();case 3:return e.sent,t=sessionStorage.getItem("whatsappWidgetToken"),n={method:"POST",headers:{"Content-Type":"application/json",Authorization:"Bearer "+t},body:JSON.stringify(y({nombre:f,celular:m,tipo_contacto:b},i))},console.log("voy a hacer la peticion de sendWhatsappData"),e.next=9,fetch("http://127.0.0.1:8000/prospectos",n);case 9:return r=e.sent,console.log("ya hice la peticion de sendWhatsappData"),e.next=13,r.json();case 13:o=e.sent,r.ok?C(!0):S(o.detail);case 15:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),T=function(){var e=x(regeneratorRuntime.mark((function e(t){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:console.log("empezando la funcion de handleSubmit"),t.preventDefault(),P(),window.open("https://api.whatsapp.com/send?phone=3102430382&text="+b,"_blank").focus();case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return(0,a.jsx)("form",{className:"form-whatsapp",onSubmit:T,children:(0,a.jsxs)("div",{className:(e=n,e?"formulario open":"formulario"),id:"form-global",children:[(0,a.jsxs)("div",{className:"row",children:[(0,a.jsx)("h3",{children:"¿Quieres contactar un asesor?"}),(0,a.jsx)("span",{id:"boton-close",onClick:function(){return o()},children:(0,a.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",height:"24px",viewBox:"0 0 24 24",width:"24px",fill:"#000000",children:[(0,a.jsx)("path",{d:"M0 0h24v24H0V0z",fill:"none"}),(0,a.jsx)("path",{d:"M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12 19 6.41z"})]})})]}),(0,a.jsx)("p",{children:"Completa tus datos y te contactaremos un un experto"}),(0,a.jsx)("label",{htmlFor:"text_field",children:"Tu Nombre"}),(0,a.jsx)("input",{type:"text",id:"text_field",onChange:function(e){return p(e.target.value)}}),(0,a.jsx)("label",{htmlFor:"number_field",children:"Tu Celular"}),(0,a.jsx)("input",{type:"text",id:"number_field",onChange:function(e){return v(e.target.value)}}),(0,a.jsx)("label",{htmlFor:"select_field",children:"Quieres ayuda de un asesor para:"}),(0,a.jsxs)("select",{id:"select_field",onChange:function(e){return w(e.target.value)},children:[(0,a.jsx)("option",{children:"Para hacer mi compra"}),(0,a.jsx)("option",{children:"Informacion sobre un peddio realizado"})]}),(0,a.jsx)("button",{children:"Contactar un asesor"})]})})},S=function(){var e=(0,r.useContext)(s),t=(e.utms,e.processUtms);return(0,r.useEffect)((function(){if(sessionStorage.getItem("utmsConcatenated")){var e=sessionStorage.getItem("utmsConcatenated");t(e)}else{var n=window.location.search;sessionStorage.setItem("utmsConcatenated",n),t(n)}}),[]),(0,a.jsxs)("div",{className:"container",children:[(0,a.jsx)(O,{}),(0,a.jsx)(l,{})]})};o.render((0,a.jsx)(r.StrictMode,{children:(0,a.jsx)(m,{children:(0,a.jsx)(c,{children:(0,a.jsx)(S,{})})})}),document.getElementById("root"))}},n={};function r(e){var o=n[e];if(void 0!==o)return o.exports;var a=n[e]={exports:{}};return t[e](a,a.exports,r),a.exports}r.m=t,e=[],r.O=function(t,n,o,a){if(!n){var i=1/0;for(l=0;l<e.length;l++){n=e[l][0],o=e[l][1],a=e[l][2];for(var u=!0,s=0;s<n.length;s++)(!1&a||i>=a)&&Object.keys(r.O).every((function(e){return r.O[e](n[s])}))?n.splice(s--,1):(u=!1,a<i&&(i=a));if(u){e.splice(l--,1);var c=o();void 0!==c&&(t=c)}}return t}a=a||0;for(var l=e.length;l>0&&e[l-1][2]>a;l--)e[l]=e[l-1];e[l]=[n,o,a]},r.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},function(){var e={179:0};r.O.j=function(t){return 0===e[t]};var t=function(t,n){var o,a,i=n[0],u=n[1],s=n[2],c=0;if(i.some((function(t){return 0!==e[t]}))){for(o in u)r.o(u,o)&&(r.m[o]=u[o]);if(s)var l=s(r)}for(t&&t(n);c<i.length;c++)a=i[c],r.o(e,a)&&e[a]&&e[a][0](),e[i[c]]=0;return r.O(l)},n=self.webpackChunkWhatsappWidget=self.webpackChunkWhatsappWidget||[];n.forEach(t.bind(null,0)),n.push=t.bind(null,n.push.bind(n))}();var o=r.O(void 0,[227],(function(){return r(8724)}));return(o=r.O(o)).default}()}));