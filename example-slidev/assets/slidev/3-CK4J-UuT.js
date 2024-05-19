import{d as v,r as A,A as d,o,c as k,k as f,f as T,b as c,y as _,F as N,ad as q,i as S,l as h,g as b,h as B,m as $,q as P,s as I,e as t}from"../modules/vue-eYp9yqjX.js";import{a as F,_ as m,a9 as C,aa as D}from"../index-CiZG1xl7.js";import{T as M}from"./title-renderer-D12A-HvL.js";import{u as L,p as w,f as E}from"./context-BsqX8tPy.js";import{_ as H}from"./CodeBlockWrapper-vHOn4i-I.js";import{I as R}from"./default-BwJAuAf2.js";import"../modules/shiki-qo2uR1I0.js";import"../modules/unplugin-icons-D5BLTZol.js";const V=["href","innerHTML"],z=["href"],O=v({__name:"Link",props:{to:{type:[Number,String],required:!0},title:{type:String,required:!1}},setup(p){const{isPrintMode:n}=F();return(s,a)=>{const i=A("RouterLink");return!d(n)&&s.title?(o(),k(i,{key:0,to:String(s.to),onClick:a[0]||(a[0]=u=>u.target.blur()),innerHTML:s.title},null,8,["to","innerHTML"])):!d(n)&&!s.title?(o(),k(i,{key:1,to:String(s.to),onClick:a[1]||(a[1]=u=>u.target.blur())},{default:f(()=>[T(s.$slots,"default")]),_:3},8,["to"])):d(n)&&s.title?(o(),c("a",{key:2,href:`#${s.to}`,innerHTML:s.title},null,8,V)):(o(),c("a",{key:3,href:`#${s.to}`},[T(s.$slots,"default")],8,z))}}}),j=m(O,[["__file","/home/runner/work/slidev-resources/slidev-resources/node_modules/@slidev/client/builtin/Link.vue"]]),W=["start"],Y=v({__name:"TocList",props:{level:{type:Number,required:!0,default:1},start:{type:Number,required:!1},listStyle:{type:[String,Array],required:!1},list:{type:Array,required:!0},listClass:{type:[String,Array],required:!1}},setup(p){const n=p,s=_(()=>[...C(n.listClass||[]),"slidev-toc-list",`slidev-toc-list-level-${n.level}`]),a=_(()=>[...C(n.listStyle||[])]);return(i,u)=>{const y=j,r=A("TocList",!0);return i.list&&i.list.length>0?(o(),c("ol",{key:0,class:S(s.value),start:i.level===1?i.start:void 0,style:B(a.value.length>=i.level?`list-style:${a.value[i.level-1]}`:void 0)},[(o(!0),c(N,null,q(i.list,e=>(o(),c("li",{key:e.path,class:S(["slidev-toc-item",[{"slidev-toc-item-active":e.active},{"slidev-toc-item-parent-active":e.activeParent}]])},[h(y,{to:e.path},{default:f(()=>[h(d(M),{no:e.no},null,8,["no"])]),_:2},1032,["to"]),e.children.length>0?(o(),k(r,{key:0,level:i.level+1,"list-style":i.listStyle,list:e.children,"list-class":i.listClass},null,8,["level","list-style","list","list-class"])):b("v-if",!0)],2))),128))],14,W)):b("v-if",!0)}}}),G=m(Y,[["__file","/home/runner/work/slidev-resources/slidev-resources/node_modules/@slidev/client/builtin/TocList.vue"]]),J=v({__name:"Toc",props:{columns:{type:[String,Number],required:!1,default:1},listClass:{type:[String,Array],required:!1,default:""},start:{type:[String,Number],required:!1,default:1},listStyle:{type:[String,Array],required:!1,default:""},maxDepth:{type:[String,Number],required:!1,default:Number.POSITIVE_INFINITY},minDepth:{type:[String,Number],required:!1,default:1},mode:{type:String,required:!1,default:"all"}},setup(p){const n=p,{$slidev:s}=L();function a(r,e=1){if(e>Number(n.maxDepth))return[];if(e<Number(n.minDepth)){const l=r.find(g=>g.active||g.activeParent);return l?a(l.children,e+1):[]}return r.map(l=>({...l,children:a(l.children,e+1)}))}function i(r){return r.filter(e=>e.active||e.activeParent||e.hasActiveParent).map(e=>({...e,children:i(e.children)}))}function u(r){const e=r.some(l=>l.active||l.activeParent||l.hasActiveParent);return r.filter(()=>e).map(l=>({...l,children:u(l.children)}))}const y=_(()=>{const r=s==null?void 0:s.nav.tocTree;if(!r)return[];let e=a(r);return n.mode==="onlyCurrentTree"?e=i(e):n.mode==="onlySiblings"&&(e=u(e)),e});return(r,e)=>{const l=G;return o(),c("div",{class:"slidev-toc",style:B(`column-count:${r.columns}`)},[h(l,{level:1,start:r.start,"list-style":r.listStyle,list:y.value,"list-class":r.listClass},null,8,["start","list-style","list","list-class"])],4)}}}),K=m(J,[["__file","/home/runner/work/slidev-resources/slidev-resources/node_modules/@slidev/client/builtin/Toc.vue"]]),Q=t("h1",null,"Table of contents",-1),U=t("pre",{class:"shiki shiki-themes vitesse-dark vitesse-light slidev-code",style:{"--shiki-dark":"#dbd7caee","--shiki-light":"#393a34","--shiki-dark-bg":"#121212","--shiki-light-bg":"#ffffff"}},[t("code",{class:"language-html"},[t("span",{class:"line"},[t("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}},"<"),t("span",{style:{"--shiki-dark":"#FDAEB7","--shiki-light":"#B31D28"}},"Toc"),t("span",{style:{"--shiki-dark":"#BD976A","--shiki-light":"#B07D48"}}," minDepth"),t("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}},"="),t("span",{style:{"--shiki-dark":"#C98A7D99","--shiki-light":"#B5695999"}},'"'),t("span",{style:{"--shiki-dark":"#C98A7D","--shiki-light":"#B56959"}},"1"),t("span",{style:{"--shiki-dark":"#C98A7D99","--shiki-light":"#B5695999"}},'"'),t("span",{style:{"--shiki-dark":"#BD976A","--shiki-light":"#B07D48"}}," maxDepth"),t("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}},"="),t("span",{style:{"--shiki-dark":"#C98A7D99","--shiki-light":"#B5695999"}},'"'),t("span",{style:{"--shiki-dark":"#C98A7D","--shiki-light":"#B56959"}},"1"),t("span",{style:{"--shiki-dark":"#C98A7D99","--shiki-light":"#B5695999"}},'"'),t("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}},"></"),t("span",{style:{"--shiki-dark":"#FDAEB7","--shiki-light":"#B31D28"}},"Toc"),t("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}},">")])])],-1),X={__name:"3",setup(p){return w(D),L(),(n,s)=>{const a=H,i=K;return o(),k(R,P(I(d(E)(d(D),2))),{default:f(()=>[Q,h(a,$({},{ranges:[]}),{default:f(()=>[U]),_:1},16),h(i,{maxDepth:"1"})]),_:1},16)}}},ne=m(X,[["__file","/@slidev/slides/3.md"]]);export{ne as default};
