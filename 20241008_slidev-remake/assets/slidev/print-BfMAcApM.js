import{d as _,R as u,A as h,o as n,b as l,e as t,x as s,J as c,F as f,S as g,I as v,l as x,g as b}from"../modules/vue-BxkSfgn6.js";import{k,j as y}from"../index-DDHR5GS5.js";import{c as m}from"../monaco/bundled-types-DfaZohK2.js";import{_ as N}from"./NoteDisplay.vue_vue_type_style_index_0_lang-3QQzNSJm.js";import"../modules/shiki-B0Vi0BHB.js";import"../modules/file-saver-igGfcqei.js";const w={id:"page-root"},L={class:"m-4"},S={class:"mb-10"},T={class:"text-4xl font-bold mt-2"},V={class:"opacity-50"},B={class:"text-lg"},H={class:"font-bold flex gap-2"},j={class:"opacity-50"},A={key:0,class:"border-main mb-8"},I=_({__name:"print",setup(C){const{slides:p,total:d}=k();u(`
@page {
  size: A4;
  margin-top: 1.5cm;
  margin-bottom: 1cm;
}
* {
  -webkit-print-color-adjust: exact;
}
html,
html body,
html #app,
html #page-root {
  height: auto;
  overflow: auto !important;
}
`),y({title:`Notes - ${m.title}`});const i=h(()=>p.value.map(e=>{var a;return(a=e.meta)==null?void 0:a.slide}).filter(e=>e!==void 0&&e.noteHTML!==""));return(e,a)=>(n(),l("div",w,[t("div",L,[t("div",S,[t("h1",T,s(c(m).title),1),t("div",V,s(new Date().toLocaleString()),1)]),(n(!0),l(f,null,g(i.value,(o,r)=>(n(),l("div",{key:r,class:"flex flex-col gap-4 break-inside-avoid-page"},[t("div",null,[t("h2",B,[t("div",H,[t("div",j,s(o==null?void 0:o.no)+"/"+s(c(d)),1),v(" "+s(o==null?void 0:o.title)+" ",1),a[0]||(a[0]=t("div",{class:"flex-auto"},null,-1))])]),x(N,{"note-html":o.noteHTML,class:"max-w-full"},null,8,["note-html"])]),r<i.value.length-1?(n(),l("hr",A)):b("v-if",!0)]))),128))])]))}});export{I as default};
