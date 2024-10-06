import{d as g,r as B,E as c,o,c as m,k as v,f as _,b as d,A as y,F as S,W as b,i as C,l as p,g as D,h as $,e,m as P,q as I,s as N}from"../modules/vue-BI9Yogb7.js";import{u as A,f as M}from"./context-BBk7ap2K.js";import{l as E,M as T}from"../index-DRXpiHe_.js";import{_ as F}from"./title-renderer.md_vue_type_script_setup_true_lang-BITSwZfw.js";import{_ as H}from"./CodeBlockWrapper.vue_vue_type_script_setup_true_lang-CDx5Qnor.js";import{I as V}from"./default-CJSgZmFR.js";import"../modules/shiki-CBkopGoQ.js";import"../modules/unplugin-icons-Dssuleqo.js";const z=["href","innerHTML"],O=["href"],R=g({__name:"Link",props:{to:{},title:{}},setup(u){const{isPrintMode:a}=E();return(i,r)=>{const l=B("RouterLink");return!c(a)&&i.title?(o(),m(l,{key:0,to:String(i.to),onClick:r[0]||(r[0]=h=>h.target.blur()),innerHTML:i.title},null,8,["to","innerHTML"])):!c(a)&&!i.title?(o(),m(l,{key:1,to:String(i.to),onClick:r[1]||(r[1]=h=>h.target.blur())},{default:v(()=>[_(i.$slots,"default")]),_:3},8,["to"])):c(a)&&i.title?(o(),d("a",{key:2,href:`#${i.to}`,innerHTML:i.title},null,8,z)):(o(),d("a",{key:3,href:`#${i.to}`},[_(i.$slots,"default")],8,O))}}}),W=["start"],j=g({__name:"TocList",props:{level:{default:1},start:{},listStyle:{},list:{},listClass:{}},setup(u){const a=u,i=y(()=>[...T(a.listClass||[]),"slidev-toc-list",`slidev-toc-list-level-${a.level}`]),r=y(()=>[...T(a.listStyle||[])]);return(l,h)=>{const k=R,s=B("TocList",!0);return l.list&&l.list.length>0?(o(),d("ol",{key:0,class:C(i.value),start:l.level===1?l.start:void 0,style:$(r.value.length>=l.level?`list-style:${r.value[l.level-1]}`:void 0)},[(o(!0),d(S,null,b(l.list,t=>(o(),d("li",{key:t.path,class:C(["slidev-toc-item",[{"slidev-toc-item-active":t.active},{"slidev-toc-item-parent-active":t.activeParent}]])},[p(k,{to:t.path},{default:v(()=>[p(c(F),{no:t.no},null,8,["no"])]),_:2},1032,["to"]),t.children.length>0?(o(),m(s,{key:0,level:l.level+1,"list-style":l.listStyle,list:t.children,"list-class":l.listClass},null,8,["level","list-style","list","list-class"])):D("v-if",!0)],2))),128))],14,W)):D("v-if",!0)}}}),q=g({__name:"Toc",props:{columns:{default:1},listClass:{default:""},start:{default:1},listStyle:{default:""},maxDepth:{default:Number.POSITIVE_INFINITY},minDepth:{default:1},mode:{default:"all"}},setup(u){const a=u,{$slidev:i}=A();function r(s,t=1){if(t>Number(a.maxDepth))return[];if(t<Number(a.minDepth)){const n=s.find(f=>f.active||f.activeParent);return n?r(n.children,t+1):[]}return s.map(n=>({...n,children:r(n.children,t+1)}))}function l(s){return s.filter(t=>t.active||t.activeParent||t.hasActiveParent).map(t=>({...t,children:l(t.children)}))}function h(s){const t=s.some(n=>n.active||n.activeParent||n.hasActiveParent);return s.filter(()=>t).map(n=>({...n,children:h(n.children)}))}const k=y(()=>{const s=i==null?void 0:i.nav.tocTree;if(!s)return[];let t=r(s);return a.mode==="onlyCurrentTree"?t=l(t):a.mode==="onlySiblings"&&(t=h(t)),t});return(s,t)=>(o(),d("div",{class:"slidev-toc",style:$(`column-count:${s.columns}`)},[p(j,{level:1,start:s.start,"list-style":s.listStyle,list:k.value,"list-class":s.listClass},null,8,["start","list-style","list","list-class"])],4))}}),Z={__name:"slides.md__slidev_3",setup(u){const{$slidev:a,$nav:i,$clicksContext:r,$clicks:l,$page:h,$renderContext:k,$frontmatter:s}=A();return r.setup(),(t,n)=>{const f=H,L=q;return o(),m(V,I(N(c(M)(c(s),2))),{default:v(()=>[n[1]||(n[1]=e("h1",null,"Table of contents",-1)),p(f,P({},{ranges:[]}),{default:v(()=>n[0]||(n[0]=[e("pre",{class:"shiki shiki-themes vitesse-dark vitesse-light slidev-code",style:{"--shiki-dark":"#dbd7caee","--shiki-light":"#393a34","--shiki-dark-bg":"#121212","--shiki-light-bg":"#ffffff"}},[e("code",{class:"language-html"},[e("span",{class:"line"},[e("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}},"<"),e("span",{style:{"--shiki-dark":"#FDAEB7","--shiki-light":"#B31D28"}},"Toc"),e("span",{style:{"--shiki-dark":"#BD976A","--shiki-light":"#B07D48"}}," minDepth"),e("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}},"="),e("span",{style:{"--shiki-dark":"#C98A7D77","--shiki-light":"#B5695977"}},'"'),e("span",{style:{"--shiki-dark":"#C98A7D","--shiki-light":"#B56959"}},"1"),e("span",{style:{"--shiki-dark":"#C98A7D77","--shiki-light":"#B5695977"}},'"'),e("span",{style:{"--shiki-dark":"#BD976A","--shiki-light":"#B07D48"}}," maxDepth"),e("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}},"="),e("span",{style:{"--shiki-dark":"#C98A7D77","--shiki-light":"#B5695977"}},'"'),e("span",{style:{"--shiki-dark":"#C98A7D","--shiki-light":"#B56959"}},"1"),e("span",{style:{"--shiki-dark":"#C98A7D77","--shiki-light":"#B5695977"}},'"'),e("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}},"></"),e("span",{style:{"--shiki-dark":"#FDAEB7","--shiki-light":"#B31D28"}},"Toc"),e("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}},">")])])],-1)])),_:1},16),p(L,{maxDepth:"1"})]),_:1},16)}}};export{Z as default};