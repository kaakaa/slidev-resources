import{R as B,S as E}from"../modules/unplugin-icons-Dwne0KFq.js";import{d as N,t as I,au as q,C as v,_ as V,y as C,av as $,o as i,b as k,f as M,A as d,c as b,g as R,i as z,h as D}from"../modules/vue-rs_j7vSg.js";import{c as S,a3 as W,a4 as K,a5 as U,b as j}from"../index-DpiOxAr-.js";import{u as F}from"./context-CH5ZdSOI.js";const G=["title"],J=N({__name:"CodeBlockWrapper",props:{ranges:{type:Array,default:()=>[]},finally:{type:[String,Number],default:"last"},startLine:{type:Number,default:1},lines:{type:Boolean,default:S.lineNumbers},at:{type:[String,Number],default:"+1"},maxHeight:{type:String,default:void 0}},setup(x){const e=x,{$clicksContext:r}=F(),o=I(),p=W();q(()=>{r.unregister(p)}),v(()=>{var t;(t=o.value)==null||t.classList.toggle("slidev-code-line-numbers",e.lines)}),V(()=>{var h;if(!r||!((h=e.ranges)!=null&&h.length))return;const{start:t,end:s,delta:l}=r.resolve(e.at,e.ranges.length-1);r.register(p,{max:s,delta:l});const a=C(()=>Math.max(0,r.current-t+1)),c=C(()=>e.finally==="last"?e.ranges.at(-1):e.finally.toString());v(()=>{if(!o.value)return;let u=e.ranges[a.value]??c.value;const m=u==="hide";o.value.classList.toggle(K,m),m&&(u=e.ranges[a.value+1]??c.value);const f=o.value.querySelector(".shiki"),_=Array.from(f.querySelectorAll("code > .line")),A=_.length;if(U(u,A,e.startLine,n=>[_[n]]),e.maxHeight){const n=Array.from(f.querySelectorAll(".line.highlighted"));n.reduce((y,L)=>L.offsetHeight+y,0)>o.value.offsetHeight?n[0].scrollIntoView({behavior:"smooth",block:"start"}):n.length>0&&n[Math.round((n.length-1)/2)].scrollIntoView({behavior:"smooth",block:"center"})}})});const{copied:g,copy:w}=$();function H(){var s,l;const t=(l=(s=o.value)==null?void 0:s.querySelector(".slidev-code"))==null?void 0:l.textContent;t&&w(t)}return(t,s)=>{const l=B,a=E;return i(),k("div",{ref_key:"el",ref:o,class:z(["slidev-code-wrapper relative group",{"slidev-code-line-numbers":e.lines}]),style:D({"max-height":e.maxHeight,"overflow-y":e.maxHeight?"scroll":void 0,"--start":e.startLine})},[M(t.$slots,"default"),d(S).codeCopy?(i(),k("button",{key:0,class:"slidev-code-copy absolute top-0 right-0 transition opacity-0 group-hover:opacity-20 hover:!opacity-100",title:d(g)?"Copied":"Copy",onClick:s[0]||(s[0]=c=>H())},[d(g)?(i(),b(l,{key:0,class:"p-2 w-8 h-8"})):(i(),b(a,{key:1,class:"p-2 w-8 h-8"}))],8,G)):R("v-if",!0)],6)}}}),Y=j(J,[["__file","/home/runner/work/slidev-resources/slidev-resources/node_modules/@slidev/client/builtin/CodeBlockWrapper.vue"]]);export{Y as _};
