import{x as f,G as h,H as g,I as v}from"../modules/unplugin-icons-Dwne0KFq.js";import{d as b,y as k,o as p,b as x,f as y,h as S,c as w,k as B,e as t,l as n,a0 as r,q as C,s as $,A as c}from"../modules/vue-rs_j7vSg.js";import{b as d,I as _}from"../index-DpiOxAr-.js";import{p as I,u as z,f as P}from"./context-CH5ZdSOI.js";import"../modules/shiki-CLQSyIRm.js";function u(e){return e.startsWith("/")?"/slidev-resources/20240509_web-diff"+e.slice(1):e}function A(e,a=!1,i="cover"){const o=e&&(e[0]==="#"||e.startsWith("rgb")),s={background:o?e:void 0,color:e&&!o?"white":void 0,backgroundImage:o?void 0:e?a?`linear-gradient(#0005, #0008), url(${u(e)})`:`url("${u(e)}")`:void 0,backgroundRepeat:"no-repeat",backgroundPosition:"center",backgroundSize:i};return s.background||delete s.background,s}const N=b({__name:"image",props:{image:{type:String},backgroundSize:{type:String,default:"cover"}},setup(e){const a=e,i=k(()=>A(a.image,!1,a.backgroundSize));return(o,s)=>(p(),x("div",{class:"slidev-layout w-full h-full",style:S(i.value)},[y(o.$slots,"default")],4))}}),T=d(N,[["__file","/home/runner/work/slidev-resources/slidev-resources/node_modules/@slidev/client/layouts/image.vue"]]),V=t("p",null,"Candidates",-1),W={href:"https://github.com/bbc/wraith?tab=readme-ov-file",target:"_blank",rel:"noopener"},D=t("p",null,"🇬🇧 英BBCのOSS",-1),L=t("b",null,"ImageMagick",-1),R={__name:"3",setup(e){return I(_),z(),(a,i)=>{const o=f,s=h,l=g,m=v;return p(),w(T,C($(c(P)(c(_),2))),{default:B(()=>[t("h1",null,[n(o),r(" Screen Diff Tool")]),V,t("h3",null,[t("a",W,[n(s),r(" bbc/wraith: Wraith — A responsive screenshot comparison tool")])]),D,t("p",null,[n(l,{class:"text-pink-700"}),r(" 最終コミットが5年前で開発停止中")]),t("p",null,[n(l,{class:"text-pink-700"}),r(" ドキュメントもDeadLink "),n(m)]),t("p",null,[n(l,{class:"text-pink-700"}),r(" 内部的に"),L,r("を使っているため環境構築が重そう")])]),_:1},16)}}},H=d(R,[["__file","/@slidev/slides/3.md"]]);export{H as default};