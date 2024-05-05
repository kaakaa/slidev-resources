import{d as _,$ as u,y as h,b as a,e as t,x as s,A as c,F as v,Z as f,o as n,a0 as g,l as x,g as b}from"../modules/vue-rs_j7vSg.js";import{u as y,j as N,c as m,b as k}from"../index-DpiOxAr-.js";import{N as w}from"./NoteDisplay-x8grMnh1.js";import"../modules/shiki-CLQSyIRm.js";const L={id:"page-root"},T={class:"m-4"},V={class:"mb-10"},B={class:"text-4xl font-bold mt-2"},D={class:"opacity-50"},H={class:"text-lg"},S={class:"font-bold flex gap-2"},j={class:"opacity-50"},A=t("div",{class:"flex-auto"},null,-1),C={key:0,class:"border-main mb-8"},F=_({__name:"print",setup(M){const{slides:d,total:p}=y();u(`
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
`),N({title:`Notes - ${m.title}`});const r=h(()=>d.value.map(o=>{var l;return(l=o.meta)==null?void 0:l.slide}).filter(o=>o!==void 0&&o.noteHTML!==""));return(o,l)=>(n(),a("div",L,[t("div",T,[t("div",V,[t("h1",B,s(c(m).title),1),t("div",D,s(new Date().toLocaleString()),1)]),(n(!0),a(v,null,f(r.value,(e,i)=>(n(),a("div",{key:i,class:"flex flex-col gap-4 break-inside-avoid-page"},[t("div",null,[t("h2",H,[t("div",S,[t("div",j,s(e==null?void 0:e.no)+"/"+s(c(p)),1),g(" "+s(e==null?void 0:e.title)+" ",1),A])]),x(w,{"note-html":e.noteHTML,class:"max-w-full"},null,8,["note-html"])]),i<r.value.length-1?(n(),a("hr",C)):b("v-if",!0)]))),128))])]))}}),Z=k(F,[["__file","/home/runner/work/slidev-resources/slidev-resources/node_modules/@slidev/client/pages/presenter/print.vue"]]);export{Z as default};
