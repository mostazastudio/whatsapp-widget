!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define("WhatsappWidget",[],t):"object"==typeof exports?exports.WhatsappWidget=t():e.WhatsappWidget=t()}(self,(function(){return function(){"use strict";var e,t={8724:function(e,t,n){var r=n(7294),o=n(3935),a=(n(4916),n(4765),n(7042),n(1539),n(1038),n(8783),n(2526),n(1817),n(2165),n(6992),n(3948),n(285),n(5893));function i(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var r,o,a=[],i=!0,s=!1;try{for(n=n.call(e);!(i=(r=n.next()).done)&&(a.push(r.value),!t||a.length!==t);i=!0);}catch(e){s=!0,o=e}finally{try{i||null==n.return||n.return()}finally{if(s)throw o}}return a}}(e,t)||function(e,t){if(e){if("string"==typeof e)return s(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?s(e,t):void 0}}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function s(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}var u=(0,r.createContext)(),l=function(e){var t=e.children,n=i((0,r.useState)(!1),2),o=n[0],s=n[1],l=i((0,r.useState)({}),2),c=l[0],f=l[1],d={whatsappOpen:o,openWhatsapp:function(){s(!o)},utms:c,processUtms:function(e){var t=new URLSearchParams(e),n={source:t.get("utm_source"),medium:t.get("utm_medium"),campaing:t.get("utm_campaign"),content:t.get("utm_content"),segment:t.get("utm_segment")};f(n)}};return(0,a.jsx)(u.Provider,{value:d,children:t})},c=function(){var e,t=(0,r.useContext)(u),n=t.whatsappOpen,o=t.openWhatsapp;return(0,a.jsx)("div",{className:(e=n,e?"boton close":"boton"),id:"initial-button",children:(0,a.jsx)("button",{id:"boton-inicial",onClick:function(){return o()},children:"Chatea con nosotrossss"})})},f=function(){var e,t=(0,r.useContext)(u),n=t.whatsappOpen,o=t.openWhatsapp;return(0,a.jsx)("form",{className:"form-whatsapp",children:(0,a.jsxs)("div",{className:(e=n,e?"formulario open":"formulario"),id:"form-global",children:[(0,a.jsxs)("div",{className:"row",children:[(0,a.jsx)("h3",{children:"¿Quieres contactar un asesor?"}),(0,a.jsx)("span",{id:"boton-close",onClick:function(){return o()},children:(0,a.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",height:"24px",viewBox:"0 0 24 24",width:"24px",fill:"#000000",children:[(0,a.jsx)("path",{d:"M0 0h24v24H0V0z",fill:"none"}),(0,a.jsx)("path",{d:"M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12 19 6.41z"})]})})]}),(0,a.jsx)("p",{children:"Completa tus datos y te contactaremos un un experto"}),(0,a.jsx)("label",{htmlFor:"text_field",children:"Tu Nombre"}),(0,a.jsx)("input",{type:"text",id:"text_field"}),(0,a.jsx)("label",{htmlFor:"number_field",children:"Tu Celular"}),(0,a.jsx)("input",{type:"text",id:"number_field"}),(0,a.jsx)("label",{htmlFor:"select_field",children:"Quieres ayuda de un asesor para:"}),(0,a.jsxs)("select",{id:"select_field",children:[(0,a.jsx)("option",{children:"Para hacer mi compra"}),(0,a.jsx)("option",{children:"Informacion sobre un peddio realizado"})]}),(0,a.jsx)("button",{children:"Contactar un asesor"})]})})},d=function(){var e=(0,r.useContext)(u),t=e.utms,n=e.processUtms;return(0,r.useEffect)((function(){if(console.log("primera antes del if"),console.log(t),sessionStorage.getItem("utmsConcatenated")){console.log("segunda en el IF verdadero"),console.log(t);var e=sessionStorage.getItem("utmsConcatenated");n(e)}else{console.log("segunda en el IF falso"),console.log(t);var r=window.location.search;sessionStorage.setItem("utmsConcatenated",r),n(r)}}),[]),console.log(t),(0,a.jsxs)("div",{className:"container",children:[(0,a.jsx)(f,{}),(0,a.jsx)(c,{})]})};function p(e,t,n,r,o,a,i){try{var s=e[a](i),u=s.value}catch(e){return void n(e)}s.done?t(u):Promise.resolve(u).then(r,o)}function h(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}n(5666),n(8674);var m=(0,r.createContext)(),v=function(e){var t,n,o=e.children,i=(t=(0,r.useState)(localStorage.getItem("whatsappWidgetToken")),n=2,function(e){if(Array.isArray(e))return e}(t)||function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var r,o,a=[],i=!0,s=!1;try{for(n=n.call(e);!(i=(r=n.next()).done)&&(a.push(r.value),!t||a.length!==t);i=!0);}catch(e){s=!0,o=e}finally{try{i||null==n.return||n.return()}finally{if(s)throw o}}return a}}(t,n)||function(e,t){if(e){if("string"==typeof e)return h(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?h(e,t):void 0}}(t,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()),s=i[0],u=i[1];return(0,r.useEffect)((function(){var e=function(){var e,t=(e=regeneratorRuntime.mark((function e(){var t;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t={method:"GET",headers:{"Content-Type":"application/json",Authorization:"Bearer "+s}},e.next=3,fetch("http://127.0.0.1:8000/marcas/me",t);case 3:e.sent.ok||u(null),localStorage.setItem("whatsappWidgetToken",s);case 6:case"end":return e.stop()}}),e)})),function(){var t=this,n=arguments;return new Promise((function(r,o){var a=e.apply(t,n);function i(e){p(a,r,o,i,s,"next",e)}function s(e){p(a,r,o,i,s,"throw",e)}i(void 0)}))});return function(){return t.apply(this,arguments)}}();e()}),[s]),data={token:s,setToken:u},(0,a.jsx)(m.Provider,{value:data,children:o})};o.render((0,a.jsx)(r.StrictMode,{children:(0,a.jsx)(v,{children:(0,a.jsx)(l,{children:(0,a.jsx)(d,{})})})}),document.getElementById("root"))}},n={};function r(e){var o=n[e];if(void 0!==o)return o.exports;var a=n[e]={exports:{}};return t[e](a,a.exports,r),a.exports}r.m=t,e=[],r.O=function(t,n,o,a){if(!n){var i=1/0;for(c=0;c<e.length;c++){n=e[c][0],o=e[c][1],a=e[c][2];for(var s=!0,u=0;u<n.length;u++)(!1&a||i>=a)&&Object.keys(r.O).every((function(e){return r.O[e](n[u])}))?n.splice(u--,1):(s=!1,a<i&&(i=a));if(s){e.splice(c--,1);var l=o();void 0!==l&&(t=l)}}return t}a=a||0;for(var c=e.length;c>0&&e[c-1][2]>a;c--)e[c]=e[c-1];e[c]=[n,o,a]},r.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},function(){var e={179:0};r.O.j=function(t){return 0===e[t]};var t=function(t,n){var o,a,i=n[0],s=n[1],u=n[2],l=0;if(i.some((function(t){return 0!==e[t]}))){for(o in s)r.o(s,o)&&(r.m[o]=s[o]);if(u)var c=u(r)}for(t&&t(n);l<i.length;l++)a=i[l],r.o(e,a)&&e[a]&&e[a][0](),e[i[l]]=0;return r.O(c)},n=self.webpackChunkWhatsappWidget=self.webpackChunkWhatsappWidget||[];n.forEach(t.bind(null,0)),n.push=t.bind(null,n.push.bind(n))}();var o=r.O(void 0,[227],(function(){return r(8724)}));return(o=r.O(o)).default}()}));