module.exports=function(e){var t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}return n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(r,o,function(t){return e[t]}.bind(null,o));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=5)}([function(e,t){e.exports=window.wp.element},function(e,t){e.exports=window.wp.components},function(e){e.exports=JSON.parse('{"b":"wp-block-toolkit","a":"wpbt"}')},function(e,t){e.exports=window.wp.i18n},function(e,t){e.exports=window.wp.data},function(e,t,n){"use strict";n.r(t),n.d(t,"InlineNotice",(function(){return c})),n.d(t,"PostControl",(function(){return u})),n.d(t,"RequireBlocks",(function(){return p})),n.d(t,"TaxonomyControl",(function(){return m})),n.d(t,"useAllPosts",(function(){return j})),n.d(t,"useRequiredBlocks",(function(){return b}));var r=n(0);const o={warning:"#fef8ee",error:"#fce8e9"},l={warning:"#f0b849",error:"#c72629"};var c=({children:e,level:t="warning"})=>Object(r.createElement)("div",{style:{padding:20,backgroundColor:o[t],borderStyle:"dashed",borderWidth:2,borderColor:l[t],width:"100%"}},e),a=n(1),u=({label:e,posts:t,value:n,onChange:o,valueKey:l="id"})=>{const[c,u]=Object(r.useState)([]),[s,d]=Object(r.useState)([]);return Object(r.useEffect)(()=>{u(i(t,l))},[t,l]),Object(r.useEffect)(()=>{d(c)},[c]),null===typeof t?Object(r.createElement)(a.Spinner,null):Object(r.createElement)(a.ComboboxControl,{label:e,value:n,onChange:o,options:s,onInputChange:e=>d(c.filter(t=>t.label.toLowerCase().startsWith(e.toLowerCase()))),onFilterValueChange:()=>{}})};const i=(e,t="id")=>e&&e.length?e.map(e=>({label:e.title.rendered,value:e[t]})):[];var s=n(3),d=n(4);function b(e){const t=Object(d.useSelect)(e=>e("core/blocks").getBlockTypes().map(e=>e.name),[]),n=e.filter(e=>!t.includes(e));return{missingBlocks:n,hasRequiredBlocks:!n.length}}var f=n(2),p=({children:e,blocks:t})=>{const{hasRequiredBlocks:n,missingBlocks:o}=b(t);return Object(r.createElement)(r.Fragment,null,n?e:Object(r.createElement)(c,{level:"error"},Object(s.__)("Couldn't find all the required blocks. Please install and activate the following blocks: ",f.b),Object(r.createElement)("strong",null,o.join(", "))))},m=({label:e,taxonomies:t,value:n,onChange:o})=>{const[l,c]=Object(r.useState)(""),[u,i]=Object(r.useState)(t);return Object(r.useEffect)(()=>{if(t){const e=l?t.filter(({name:e})=>e.toLowerCase().startsWith(l.toLowerCase())):t;i(e)}},[t,l]),null===typeof t?Object(r.createElement)(a.Spinner,null):Object(r.createElement)(a.BaseControl,{label:e},Object(r.createElement)(g,{value:l,onChange:e=>c(e.target.value)}),Object(r.createElement)(h,null,u.map(({id:e,name:t})=>Object(r.createElement)(a.CheckboxControl,{key:e,label:t,checked:n.includes(e),onChange:t=>((e,t)=>{o(t?[...n,e]:n.filter(t=>t!==e))})(e,t)}))))};const g=({value:e,onChange:t})=>Object(r.createElement)("div",{style:{display:"block",marginTop:5,marginBottom:10}},Object(r.createElement)("input",{type:"text",placeholder:Object(s.__)("Search",f.b),value:e,onChange:t,style:{width:"100%"}})),h=({children:e})=>Object(r.createElement)("div",{className:f.a+"-checkbox-wrapper",style:{height:200,overflow:"auto",paddingLeft:4}},e);function j(e){return Object(d.useSelect)(t=>t("core").getEntityRecords("postType",e,{per_page:-1,orderby:"title",order:"asc",status:"publish"}),[e])}}]);