parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"ypwD":[function(require,module,exports) {
var e=wp.blocks.registerBlockType,t=wp.element,r=t.createElement,i=t.Fragment,o=wp.components,n=o.Disabled,l=o.PanelBody,c=o.TextControl,a=wp.blockEditor.InspectorControls,p=wp.editor.ServerSideRender,s=wp.i18n.__;e("reception/member-bio",{title:s("Présentation du membre","reception"),description:s("Ce bloc permet aux membres de votre communauté de partager leurs informations de présentation ou biographiques.","reception"),icon:"id-alt",category:"widgets",attributes:{blockTitle:{type:"string",default:s("À propos","reception")}},edit:function(e){var t=e.attributes,o=e.setAttributes,u=t.blockTitle;return r(i,null,r(a,null,r(l,{title:s("Réglages","reception"),initialOpen:!0},r(c,{label:s("Titre du bloc","reception"),value:u,onChange:function(e){o({blockTitle:e})},help:s("Pour masquer le titre du bloc, laisser ce champ vide.","reception")}))),r(n,null,r(p,{block:"reception/member-bio",attributes:t})))}});
},{}]},{},["ypwD"], null)
//# sourceMappingURL=/blocks/member-bio.js.map