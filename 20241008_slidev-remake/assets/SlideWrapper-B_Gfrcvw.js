import{o as c,b as u,l as i,h as m,A as p,e as B,x as C,J as _,i as k,g as j,F as P,v as R,d as z,a7 as d,t as S,P as F,c as O,N as G}from"./modules/vue-BxkSfgn6.js";import{_ as v,c as h,h as T,g as V,e as D,f as J,d as L,b as A,J as E}from"./index-DDHR5GS5.js";import{c as M}from"./monaco/bundled-types-DfaZohK2.js";import{M as U,N as Z,O as H}from"./modules/unplugin-icons-hJOaby8D.js";import{u as K}from"./slidev/context-CtAL68qA.js";const Q={inject:{$slidev:{from:h}},props:{current:Number},data(){var n,r;const t=this.$slidev.configs.canvasWidth-20,e=((r=(n=this.$route)==null?void 0:n.query)==null?void 0:r.time)||10;return{left:0,intervalId:null,maxWidth:t,speed:t/(e*60*10)}},beforeUpdate(){this.current==1&&(this.left=0,this.intervalId&&(clearInterval(this.intervalId),this.intervalId=null)),!this.intervalId&&(this.intervalId=setInterval(()=>{this.left<this.maxWidth&&(this.left+=this.speed)},100))}};function X(t,e,n,r,a,s){const o=U;return c(),u("div",{class:"rabtle-container",style:m({left:a.left+"px"})},[i(o,{class:"icon"})],4)}const Y=v(Q,[["render",X]]),W=60,ee=20,te={__name:"Rabbit",props:{current:Number},setup(t){var x,b;const{$slidev:e,$nav:n,$clicksContext:r,$clicks:a,$page:s,$renderContext:o,$frontmatter:$}=K(),l=e.nav.total,N=e.configs.canvasWidth,I=((b=(x=e.configs)==null?void 0:x.rabbit)==null?void 0:b.slideNum)??!1,f=t,g=p(()=>f.current>l/2),w=p(()=>{if(f.current===1||l===1)return 0;const y=N-ee-(g.value?W:0);return(f.current-1)*(y/(l-1))});return(y,_e)=>{const q=Z;return c(),u("div",{class:"rabtle-container",style:m({left:w.value+"px"})},[i(q,{class:"icon"}),B("div",{class:k(["py-1 px-1 text-xs bg-white bg-opacity-20 rounded-md text-center",[g.value?"float-left":"float-right"]]),style:m({width:W+"px",display:_(I)?"block":"none"})},C(f.current)+" / "+C(_(l)),7)],4)}}},ne={inject:{$slidev:{from:h}},props:{left:Number}};function oe(t,e,n,r,a,s){const o=H;return c(),u("div",{class:"rabtle-container",style:m({left:n.left+"px"})},[i(o)],4)}const se=v(ne,[["render",oe]]),re={inject:{$slidev:{from:h}},data(){return{goalPosition:this.$slidev.configs.canvasWidth-20}}},ie={key:0,class:"rablte-container"};function ae(t,e,n,r,a,s){const o=se,$=te,l=Y;return c(),u(P,null,[j(" when exporting, this footer isn't exported "),t.$route.query.print!==null&&t.$route.query.time?(c(),u("footer",ie,[i(o,{left:a.goalPosition},null,8,["left"]),i($,{current:s.$slidev.nav.currentPage},null,8,["current"]),i(l,{current:s.$slidev.nav.currentPage},null,8,["current"])])):j("v-if",!0)],2112)}const ce=v(re,[["render",ae]]),ge={render:()=>[]},xe={render:()=>[R(ce)]},le={render:()=>[]},de={render:()=>[]},ue=["data-slidev-no"],pe=z({__name:"SlideWrapper",props:{clicksContext:{type:Object,required:!0},renderContext:{type:String,default:"slide"},route:{type:Object,required:!0}},setup(t){const e=t,n=p(()=>{var s,o;return((o=(s=e.route.meta)==null?void 0:s.slide)==null?void 0:o.frontmatter.zoom)??1});d(T,e.route),d(V,e.route.meta.slide.frontmatter),d(D,S(e.route.no)),d(J,S(e.renderContext)),d(L,F(e,"clicksContext")),d(A,n);const r=p(()=>n.value===1?void 0:{width:`${100/n.value}%`,height:`${100/n.value}%`,transformOrigin:"top left",transform:`scale(${n.value})`}),a=p(()=>({...r.value,"user-select":M.selectable?void 0:"none"}));return(s,o)=>(c(),u("div",{"data-slidev-no":e.route.no,class:k(_(E)(t.route,["slide","presenter"].includes(e.renderContext)?"":"disable-view-transition")),style:m(a.value)},[i(_(de)),(c(),O(G(e.route.component))),i(_(le))],14,ue))}}),be=v(pe,[["__scopeId","data-v-ccd797cc"]]);export{xe as G,be as S,ge as a};
