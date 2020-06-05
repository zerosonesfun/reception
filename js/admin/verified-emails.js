parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"fcMS":[function(require,module,exports) {
function n(n,o){if(!(n instanceof o))throw new TypeError("Cannot call a class as a function")}module.exports=n;
},{}],"P8NW":[function(require,module,exports) {
function e(e,r){for(var n=0;n<r.length;n++){var t=r[n];t.enumerable=t.enumerable||!1,t.configurable=!0,"value"in t&&(t.writable=!0),Object.defineProperty(e,t.key,t)}}function r(r,n,t){return n&&e(r.prototype,n),t&&e(r,t),r}module.exports=r;
},{}],"AkAO":[function(require,module,exports) {
function t(o,e){return module.exports=t=Object.setPrototypeOf||function(t,o){return t.__proto__=o,t},t(o,e)}module.exports=t;
},{}],"d4H2":[function(require,module,exports) {
var e=require("./setPrototypeOf");function r(r,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");r.prototype=Object.create(t&&t.prototype,{constructor:{value:r,writable:!0,configurable:!0}}),t&&e(r,t)}module.exports=r;
},{"./setPrototypeOf":"AkAO"}],"b9XL":[function(require,module,exports) {
function o(t){return"function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?module.exports=o=function(o){return typeof o}:module.exports=o=function(o){return o&&"function"==typeof Symbol&&o.constructor===Symbol&&o!==Symbol.prototype?"symbol":typeof o},o(t)}module.exports=o;
},{}],"E7HD":[function(require,module,exports) {
function e(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}module.exports=e;
},{}],"pxk2":[function(require,module,exports) {
var e=require("../helpers/typeof"),r=require("./assertThisInitialized");function t(t,i){return!i||"object"!==e(i)&&"function"!=typeof i?r(t):i}module.exports=t;
},{"../helpers/typeof":"b9XL","./assertThisInitialized":"E7HD"}],"UJE0":[function(require,module,exports) {
function t(e){return module.exports=t=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)},t(e)}module.exports=t;
},{}],"alvg":[function(require,module,exports) {
"use strict";var e=s(require("@babel/runtime/helpers/classCallCheck")),t=s(require("@babel/runtime/helpers/createClass")),a=s(require("@babel/runtime/helpers/inherits")),n=s(require("@babel/runtime/helpers/possibleConstructorReturn")),r=s(require("@babel/runtime/helpers/getPrototypeOf"));function s(e){return e&&e.__esModule?e:{default:e}}function i(e){var t=o();return function(){var a,s=(0,r.default)(e);if(t){var i=(0,r.default)(this).constructor;a=Reflect.construct(s,arguments,i)}else a=s.apply(this,arguments);return(0,n.default)(this,a)}}function o(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],function(){})),!0}catch(e){return!1}}var c=wp.element,l=c.Component,u=c.render,m=c.createElement,p=c.Fragment,d=wp.components,f=d.TextControl,h=d.Button,b=d.Notice,v=wp,g=v.apiFetch,y=wp.url.isEmail,k=wp.i18n.__,N=wp.date.dateI18n,S=function(n){(0,a.default)(s,n);var r=i(s);function s(){var t;return(0,e.default)(this,s),(t=r.apply(this,arguments)).state={email:"",entry:[],feedback:{},searching:!1,spamming:!1,deleting:!1},t}return(0,t.default)(s,[{key:"lookupEmail",value:function(e){var t=this;e.preventDefault();var a=this.state,n=a.email,r=a.searching;y(n)?!1===r&&(this.setState({searching:!0,entry:[],feedback:{}}),g({path:"/reception/v1/email/?email="+n,method:"GET"}).then(function(e){t.setState({entry:e}),e.length||t.setState({feedback:{status:"info",text:k("Aucun élément ne correspond à votre recherche","reception")}})},function(e){t.setState({feedback:{status:"error",text:e.message}})}).then(function(){t.setState({searching:!1})})):this.setState({feedback:{status:"error",text:k("Merci de renseigner un e-mail valide.","reception")}})}},{key:"spamUnspam",value:function(e){var t=this;e.preventDefault();var a=this.state,n=a.entry;!1===a.spamming&&(this.setState({spamming:!0,feedback:{}}),g({path:"/reception/v1/email/"+n[0].id,method:"PUT",data:{spam:!n[0].spam}}).then(function(e){t.setState({entry:[e]})},function(e){t.setState({feedback:{status:"error",text:e.message}})}).then(function(){t.setState({spamming:!1})}))}},{key:"deleteEntry",value:function(e){var t=this;e.preventDefault();var a=this.state,n=a.entry;!1===a.deleting&&(this.setState({deleting:!0,feedback:{}}),g({path:"/reception/v1/email/"+n[0].id,method:"DELETE"}).then(function(){t.setState({entry:[]}),t.setState({feedback:{status:"success",text:k("L’e-mail vérifié a bien été supprimé.")}})},function(e){t.setState({feedback:{status:"error",text:e.message}})}).then(function(){t.setState({deleting:!1})}))}},{key:"getHeadFoot",value:function(e){return m("tr",null,m("td",{id:"cb",className:"manage-column column-cb check-column"}),m("th",{scope:"col",id:"comment-"+e,className:"manage-column column-comment"},k("Code de confirmation","reception")),m("th",{scope:"col",id:"status-"+e,className:"manage-column column-response"},k("Statut","reception")),m("th",{scope:"col",id:"date-confirmed-"+e,className:"manage-column column-date"},k("Code confirmé le","reception")),m("th",{scope:"col",id:"date-last-use-"+e,className:"manage-column column-date"},k("Dernier envoi le","reception")))}},{key:"render",value:function(){var e,t=this,a=this.state,n=a.email,r=a.feedback,s=a.entry;return s.length>=1&&(e=s.map(function(e){var a=!0===e.spam;return m("tr",{key:"item-"+e.id,id:"item-"+e.id,className:a?"comment byuser depth-1 unapproved":"comment byuser depth-1 approved"},m("th",{scope:"row",className:"check-column"}),m("td",{className:"comment column-comment has-row-actions column-primary"},m("strong",null,e.code),m("div",{className:"row-actions"},!a&&m("span",{className:"spam"},m("a",{href:"#markspam",onClick:function(e){return t.spamUnspam(e)},"aria-label":k("Marquer comme indésirable","reception"),role:"button"},k("Indésirable","reception"))),a&&m("span",{className:"unspam approve"},m("a",{href:"#markham",onClick:function(e){return t.spamUnspam(e)},"aria-label":k("Marquer comme non indésirable","reception"),role:"button"},k("Non Indésirable","reception")))," | ",m("span",{className:"trash"},m("a",{href:"#delete",onClick:function(e){return t.deleteEntry(e)},"aria-label":k("Supprimer cette entrée","reception"),role:"button",className:"delete"},k("Supprimer","reception"))))),m("td",{className:"response column-response"},!e.confirmed&&!e.spam&&m("span",null,k("En attente de validation du code","reception")),e.confirmed&&!e.spam&&m("span",null,k("Confirmé","reception")),e.spam&&m("span",null,k("Indésirable","reception"))),m("td",{className:"date column-date"},m("div",{className:"submitted-on"}," ",sprintf(k("%s à %s","risk-ops"),N("d/m/Y",e.confirmation_date),N("H:i",e.confirmation_date)))),m("td",{className:"date column-date"},m("div",{className:"submitted-on"}," ",sprintf(k("%s à %s","risk-ops"),N("d/m/Y",e.last_use_date),N("H:i",e.last_use_date)))))})),m(p,null,m("div",{className:"wp-privacy-request-form-field"},m(f,{className:"regular-text",label:k("Adresse de messagerie","reception"),type:"search",value:n,onChange:function(e){return t.setState({email:e})}}),m(h,{isSecondary:!0,onClick:function(e){return t.lookupEmail(e)},className:"button"},k("Charger les informations","reception"))),m("hr",null),r&&r.status&&m(b,{status:r.status,onRemove:function(){return t.setState({feedback:{}})}},m("p",null,r.text)),s.length>=1&&m("table",{className:"wp-list-table widefat striped comments"},m("thead",null,this.getHeadFoot(1)),m("tbody",{id:"the-comment-list"},e),m("tfoot",null,this.getHeadFoot(2))))}}]),s}(l);u(m(S,null),document.querySelector("#reception-verified-emails"));
},{"@babel/runtime/helpers/classCallCheck":"fcMS","@babel/runtime/helpers/createClass":"P8NW","@babel/runtime/helpers/inherits":"d4H2","@babel/runtime/helpers/possibleConstructorReturn":"pxk2","@babel/runtime/helpers/getPrototypeOf":"UJE0"}]},{},["alvg"], null)
//# sourceMappingURL=/admin/verified-emails.js.map