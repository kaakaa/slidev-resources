function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/slidev/DrawingPreview-BvMsQerO.js","assets/modules/vue-rs_j7vSg.js","assets/index-DpiOxAr-.js","assets/modules/shiki-CLQSyIRm.js","assets/modules/shiki-BSchMNmt.css","assets/index-CwzCEilc.css","assets/slidev/bottom-DFom0uJo.js","assets/modules/unplugin-icons-Dwne0KFq.js","assets/slidev/context-CH5ZdSOI.js","assets/bottom-D6nO1RM7.css"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
import{d as m,y as l,M as E,Y as q,J as F,o as r,b as o,l as d,A as e,i as A,c as h,g as _,h as B,F as v,Z as M,e as w,f as V,C as j,_ as z}from"../modules/vue-rs_j7vSg.js";import{t as G}from"../modules/shiki-CLQSyIRm.js";import{G as W,S as D,a as I,w as O}from"./bottom-DFom0uJo.js";import{s as T,a as g,_ as H,c as S,i as J,g as K,b as f,u as y,d as $,C as X,e as N,f as k,p as Y,h as Z}from"../index-DpiOxAr-.js";import{P as Q}from"./PrintStyle-Bdzr_qu7.js";import"../modules/unplugin-icons-Dwne0KFq.js";import"./context-CH5ZdSOI.js";const U=["id"],ee=m({__name:"PrintSlideClick",props:{nav:{type:Object,required:!0}},setup(c){const{nav:t}=c,s=l(()=>t.currentSlideRoute.value),n=l(()=>({height:`${T.value}px`,width:`${g.value}px`})),a=E();H(()=>import("./DrawingPreview-BvMsQerO.js").then(i=>i.a),__vite__mapDeps([0,1,2,3,4,5,6,7,8,9])).then(i=>a.value=i.default);const u=l(()=>`${s.value.no.toString().padStart(3,"0")}-${(t.clicks.value+1).toString().padStart(2,"0")}`);return q(J,F({nav:t,configs:S,themeConfigs:l(()=>S.themeConfig)})),(i,C)=>(r(),o("div",{id:u.value,class:"print-slide-container",style:B(n.value)},[d(e(W)),d(D,{is:s.value.component,"clicks-context":i.nav.clicksContext.value,class:A(e(K)(s.value)),route:s.value},null,8,["is","clicks-context","class","route"]),a.value?(r(),h(e(a),{key:0,page:s.value.no},null,8,["page"])):_("v-if",!0),d(e(I))],12,U))}}),L=f(ee,[["__file","/home/runner/work/slidev-resources/slidev-resources/node_modules/@slidev/client/internals/PrintSlideClick.vue"]]),te=m({__name:"PrintSlide",props:{route:{type:null,required:!0}},setup(c){const{route:t}=c,{isPrintWithClicks:s}=y(),n=$(t,s.value?0:X);return(a,u)=>(r(),o(v,null,[d(L,{"clicks-context":e(n),nav:e(N)(a.route,e(n))},null,8,["clicks-context","nav"]),e(s)?(r(),o(v,{key:0},[_(`
      clicks0.total can be any number >=0 when rendering.
      So total-clicksStart can be negative in intermediate states.
    `),(r(!0),o(v,null,M(Math.max(0,e(n).total-e(n).clicksStart),i=>(r(),h(L,{key:i,nav:e(N)(a.route,e($)(a.route,i+e(n).clicksStart))},null,8,["nav"]))),128))],64)):_("v-if",!0)],64))}}),se=f(te,[["__file","/home/runner/work/slidev-resources/slidev-resources/node_modules/@slidev/client/internals/PrintSlide.vue"]]),ne={id:"print-content"},re=m({__name:"PrintContainer",props:{width:{type:Number,required:!0}},setup(c){const t=c,{slides:s,currentRoute:n}=y(),a=l(()=>t.width),u=l(()=>t.width/k.value),i=l(()=>a.value/u.value),C=l(()=>i.value<k.value?a.value/g.value:u.value*k.value/g.value);let p=s.value;n.value.query.range&&(p=Y(p.length,n.value.query.range).map(b=>p[b-1]));const R=l(()=>({"select-none":!S.selectable}));return q(Z,C),(P,b)=>(r(),o("div",{id:"print-container",class:A(R.value)},[w("div",ne,[(r(!0),o(v,null,M(e(p),x=>(r(),h(se,{key:x.no,route:x},null,8,["route"]))),128))]),V(P.$slots,"controls")],2))}}),ae=f(re,[["__file","/home/runner/work/slidev-resources/slidev-resources/node_modules/@slidev/client/internals/PrintContainer.vue"]]),ie={id:"page-root",class:"grid grid-cols-[1fr_max-content]"},le=w("div",{id:"twoslash-container"},null,-1),oe=m({__name:"print",setup(c){const{isPrintMode:t}=y();return j(()=>{t?document.body.parentNode.classList.add("print"):document.body.parentNode.classList.remove("print")}),z(()=>{G()}),(s,n)=>(r(),o(v,null,[e(t)?(r(),h(Q,{key:0})):_("v-if",!0),w("div",ie,[d(ae,{class:"w-full h-full",style:B({background:"var(--slidev-slide-container-background, black)"}),width:e(O).width.value},null,8,["style","width"]),le])],64))}}),he=f(oe,[["__file","/home/runner/work/slidev-resources/slidev-resources/node_modules/@slidev/client/pages/print.vue"]]);export{he as default};