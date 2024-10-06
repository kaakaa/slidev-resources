import{t as C,A as b,E as I,d as _t,a2 as Xt,a3 as Yt,a4 as j,o as N,b as K,e as Rt,f as bt,h as q,l as T,x as Pt,i as zt,g as ft,F as Zt,v as Qt,L as Jt,c as te,z as ee,a5 as se,N as ht,a6 as ne,U as re,y as ie,n as oe,O as ae}from"../modules/vue-BI9Yogb7.js";import{V as le,l as Ot,W as $t,X as Et,Q as Mt,R as Lt,i as ue,Y as he,_ as Z,d as yt,j as ce,h as de,f as fe,g as pe,e as me,c as pt,b as ge,Z as ve,$ as ct,a0 as Ct,a1 as _e,a2 as ye}from"../index-DRXpiHe_.js";import{F as xe,G as we,H as Se}from"../modules/unplugin-icons-Dssuleqo.js";import{u as be}from"./context-BBk7ap2K.js";function Pe(t){var e;return{info:C(((e=le(t))==null?void 0:e.meta.slide)??null),update:async()=>{}}}const dt={};function $s(t){function e(s){return dt[s]??(dt[s]=Pe(s))}return{info:b({get(){return e(I(t)).info.value},set(s){e(I(t)).info.value=s}}),update:async(s,n)=>{const r=e(n??I(t)),i=await r.update(s);return i&&(r.info.value=i),i}}}const $e=["id"],Ee=["id"],Me=_t({__name:"SlideContainer",props:{width:{type:Number},meta:{default:()=>({})},isMain:{type:Boolean,default:!1}},setup(t){const e=t,{isPrintMode:s}=Ot(),n=C(null),r=Xt(n),i=C(null),a=b(()=>e.width??r.width.value),o=b(()=>e.width?e.width/$t.value:r.height.value),l=b(()=>Et.value&&!s.value?+Et.value:Math.min(a.value/Mt.value,o.value/Lt.value)),p=b(()=>({height:`${Lt.value}px`,width:`${Mt.value}px`,transform:`translate(-50%, -50%) scale(${l.value})`,"--slidev-slide-scale":l.value})),v=b(()=>e.width?{width:`${e.width}px`,height:`${e.width/$t.value}px`}:{});return e.isMain&&Yt(b(()=>`:root { --slidev-slide-scale: ${l.value}; }`)),j(ue,l),j(he,i),(m,y)=>(N(),K("div",{id:t.isMain?"slide-container":void 0,ref_key:"container",ref:n,class:"slidev-slide-container",style:q(v.value)},[Rt("div",{id:t.isMain?"slide-content":void 0,ref_key:"slideElement",ref:i,class:"slidev-slide-content",style:q(p.value)},[bt(m.$slots,"default",{},void 0,!0)],12,Ee),bt(m.$slots,"controls",{},void 0,!0)],12,$e))}}),Es=Z(Me,[["__scopeId","data-v-580c1c79"]]),Le={inject:{$slidev:{from:yt}},props:{current:Number},data(){var s,n;const t=this.$slidev.configs.canvasWidth-20,e=((n=(s=this.$route)==null?void 0:s.query)==null?void 0:n.time)||10;return{left:0,intervalId:null,maxWidth:t,speed:t/(e*60*10)}},beforeUpdate(){this.current==1&&(this.left=0,this.intervalId&&(clearInterval(this.intervalId),this.intervalId=null)),!this.intervalId&&(this.intervalId=setInterval(()=>{this.left<this.maxWidth&&(this.left+=this.speed)},100))}};function Ce(t,e,s,n,r,i){const a=xe;return N(),K("div",{class:"rabtle-container",style:q({left:r.left+"px"})},[T(a,{class:"icon"})],4)}const Ie=Z(Le,[["render",Ce]]),It=60,ke=20,Ne={__name:"Rabbit",props:{current:Number},setup(t){var d,h;const{$slidev:e,$nav:s,$clicksContext:n,$clicks:r,$page:i,$renderContext:a,$frontmatter:o}=be(),l=e.nav.total,p=e.configs.canvasWidth,v=((h=(d=e.configs)==null?void 0:d.rabbit)==null?void 0:h.slideNum)??!1,m=t,y=b(()=>m.current>l/2),f=b(()=>{if(m.current===1||l===1)return 0;const P=p-ke-(y.value?It:0);return(m.current-1)*(P/(l-1))});return(P,R)=>{const L=we;return N(),K("div",{class:"rabtle-container",style:q({left:f.value+"px"})},[T(L,{class:"icon"}),Rt("div",{class:zt(["py-1 px-1 text-xs bg-white bg-opacity-20 rounded-md text-center",[y.value?"float-left":"float-right"]]),style:q({width:It+"px",display:I(v)?"block":"none"})},Pt(m.current)+" / "+Pt(I(l)),7)],4)}}},De={inject:{$slidev:{from:yt}},props:{left:Number}};function Ae(t,e,s,n,r,i){const a=Se;return N(),K("div",{class:"rabtle-container",style:q({left:s.left+"px"})},[T(a)],4)}const Fe=Z(De,[["render",Ae]]),je={inject:{$slidev:{from:yt}},data(){return{goalPosition:this.$slidev.configs.canvasWidth-20}}},Te={key:0,class:"rablte-container"};function Ke(t,e,s,n,r,i){const a=Fe,o=Ne,l=Ie;return N(),K(Zt,null,[ft(" when exporting, this footer isn't exported "),t.$route.query.print!==null&&t.$route.query.time?(N(),K("footer",Te,[T(a,{left:r.goalPosition},null,8,["left"]),T(o,{current:i.$slidev.nav.currentPage},null,8,["current"]),T(l,{current:i.$slidev.nav.currentPage},null,8,["current"])])):ft("v-if",!0)],2112)}const Re=Z(je,[["render",Ke]]),Ms={render:()=>[]},Ls={render:()=>[Qt(Re)]},ze={render:()=>[]},Oe={render:()=>[]},Ue=["data-slidev-no"],qe=_t({__name:"SlideWrapper",props:{clicksContext:{type:Object,required:!0},renderContext:{type:String,default:"slide"},route:{type:Object,required:!0}},setup(t){const e=t,s=b(()=>{var i,a;return((a=(i=e.route.meta)==null?void 0:i.slide)==null?void 0:a.frontmatter.zoom)??1});j(ce,e.route),j(de,e.route.meta.slide.frontmatter),j(fe,C(e.route.no)),j(pe,C(e.renderContext)),j(me,Jt(e,"clicksContext")),j(ge,s);const n=b(()=>s.value===1?void 0:{width:`${100/s.value}%`,height:`${100/s.value}%`,transformOrigin:"top left",transform:`scale(${s.value})`}),r=b(()=>({...n.value,"user-select":pt.selectable?void 0:"none"}));return(i,a)=>(N(),K("div",{"data-slidev-no":e.route.no,class:zt(I(ve)(t.route,["slide","presenter"].includes(e.renderContext)?"":"disable-view-transition")),style:q(r.value)},[T(I(Oe)),(N(),te(ee(e.route.component))),T(I(ze))],14,Ue))}}),Cs=Z(qe,[["__scopeId","data-v-ccd797cc"]]);var Ve=Object.defineProperty,kt=Object.getOwnPropertySymbols,Be=Object.prototype.hasOwnProperty,Ge=Object.prototype.propertyIsEnumerable,Nt=(t,e,s)=>e in t?Ve(t,e,{enumerable:!0,configurable:!0,writable:!0,value:s}):t[e]=s,mt=(t,e)=>{for(var s in e||(e={}))Be.call(e,s)&&Nt(t,s,e[s]);if(kt)for(var s of kt(e))Ge.call(e,s)&&Nt(t,s,e[s]);return t},He=()=>({emit(t,...e){for(let s=0,n=this.events[t]||[],r=n.length;s<r;s++)n[s](...e)},events:{},on(t,e){var s;return((s=this.events)[t]||(s[t]=[])).push(e),()=>{var n;this.events[t]=(n=this.events[t])==null?void 0:n.filter(r=>e!==r)}}});function Dt(t,e,s,n=r=>r){return t*n(.5-e*(.5-s))}function We(t){return[-t[0],-t[1]]}function M(t,e){return[t[0]+e[0],t[1]+e[1]]}function $(t,e){return[t[0]-e[0],t[1]-e[1]]}function E(t,e){return[t[0]*e,t[1]*e]}function Xe(t,e){return[t[0]/e,t[1]/e]}function W(t){return[t[1],-t[0]]}function At(t,e){return t[0]*e[0]+t[1]*e[1]}function Ye(t,e){return t[0]===e[0]&&t[1]===e[1]}function Ze(t){return Math.hypot(t[0],t[1])}function Qe(t){return t[0]*t[0]+t[1]*t[1]}function Ft(t,e){return Qe($(t,e))}function Ut(t){return Xe(t,Ze(t))}function Je(t,e){return Math.hypot(t[1]-e[1],t[0]-e[0])}function X(t,e,s){let n=Math.sin(s),r=Math.cos(s),i=t[0]-e[0],a=t[1]-e[1],o=i*r-a*n,l=i*n+a*r;return[o+e[0],l+e[1]]}function gt(t,e,s){return M(t,E($(e,t),s))}function jt(t,e,s){return M(t,E(e,s))}var{min:V,PI:ts}=Math,Tt=.275,Y=ts+1e-4;function es(t,e={}){let{size:s=16,smoothing:n=.5,thinning:r=.5,simulatePressure:i=!0,easing:a=c=>c,start:o={},end:l={},last:p=!1}=e,{cap:v=!0,easing:m=c=>c*(2-c)}=o,{cap:y=!0,easing:f=c=>--c*c*c+1}=l;if(t.length===0||s<=0)return[];let d=t[t.length-1].runningLength,h=o.taper===!1?0:o.taper===!0?Math.max(s,d):o.taper,P=l.taper===!1?0:l.taper===!0?Math.max(s,d):l.taper,R=Math.pow(s*n,2),L=[],u=[],x=t.slice(0,10).reduce((c,S)=>{let g=S.pressure;if(i){let _=V(1,S.distance/s),at=V(1,1-_);g=V(1,c+(at-c)*(_*Tt))}return(c+g)/2},t[0].pressure),w=Dt(s,r,t[t.length-1].pressure,a),nt,rt=t[0].vector,G=t[0].point,Q=G,z=G,O=Q,it=!1;for(let c=0;c<t.length;c++){let{pressure:S}=t[c],{point:g,vector:_,distance:at,runningLength:H}=t[c];if(c<t.length-1&&d-H<3)continue;if(r){if(i){let F=V(1,at/s),ut=V(1,1-F);S=V(1,x+(ut-x)*(F*Tt))}w=Dt(s,r,S,a)}else w=s/2;nt===void 0&&(nt=w);let Gt=H<h?m(H/h):1,Ht=d-H<P?f((d-H)/P):1;w=Math.max(.01,w*Math.min(Gt,Ht));let xt=(c<t.length-1?t[c+1]:t[c]).vector,lt=c<t.length-1?At(_,xt):1,Wt=At(_,rt)<0&&!it,wt=lt!==null&&lt<0;if(Wt||wt){let F=E(W(rt),w);for(let ut=1/13,tt=0;tt<=1;tt+=ut)z=X($(g,F),g,Y*tt),L.push(z),O=X(M(g,F),g,Y*-tt),u.push(O);G=z,Q=O,wt&&(it=!0);continue}if(it=!1,c===t.length-1){let F=E(W(_),w);L.push($(g,F)),u.push(M(g,F));continue}let St=E(W(gt(xt,_,lt)),w);z=$(g,St),(c<=1||Ft(G,z)>R)&&(L.push(z),G=z),O=M(g,St),(c<=1||Ft(Q,O)>R)&&(u.push(O),Q=O),x=S,rt=_}let D=t[0].point.slice(0,2),A=t.length>1?t[t.length-1].point.slice(0,2):M(t[0].point,[1,1]),ot=[],J=[];if(t.length===1){if(!(h||P)||p){let c=jt(D,Ut(W($(D,A))),-(nt||w)),S=[];for(let g=1/13,_=g;_<=1;_+=g)S.push(X(c,D,Y*2*_));return S}}else{if(!(h||P&&t.length===1))if(v)for(let S=1/13,g=S;g<=1;g+=S){let _=X(u[0],D,Y*g);ot.push(_)}else{let S=$(L[0],u[0]),g=E(S,.5),_=E(S,.51);ot.push($(D,g),$(D,_),M(D,_),M(D,g))}let c=W(We(t[t.length-1].vector));if(P||h&&t.length===1)J.push(A);else if(y){let S=jt(A,c,w);for(let g=1/29,_=g;_<1;_+=g)J.push(X(S,A,Y*3*_))}else J.push(M(A,E(c,w)),M(A,E(c,w*.99)),$(A,E(c,w*.99)),$(A,E(c,w)))}return L.concat(J,u.reverse(),ot)}function ss(t,e={}){var s;let{streamline:n=.5,size:r=16,last:i=!1}=e;if(t.length===0)return[];let a=.15+(1-n)*.85,o=Array.isArray(t[0])?t:t.map(({x:f,y:d,pressure:h=.5})=>[f,d,h]);if(o.length===2){let f=o[1];o=o.slice(0,-1);for(let d=1;d<5;d++)o.push(gt(o[0],f,d/4))}o.length===1&&(o=[...o,[...M(o[0],[1,1]),...o[0].slice(2)]]);let l=[{point:[o[0][0],o[0][1]],pressure:o[0][2]>=0?o[0][2]:.25,vector:[1,1],distance:0,runningLength:0}],p=!1,v=0,m=l[0],y=o.length-1;for(let f=1;f<o.length;f++){let d=i&&f===y?o[f].slice(0,2):gt(m.point,o[f],a);if(Ye(m.point,d))continue;let h=Je(d,m.point);if(v+=h,f<y&&!p){if(v<r)continue;p=!0}m={point:d,pressure:o[f][2]>=0?o[f][2]:.5,vector:Ut($(m.point,d)),distance:h,runningLength:v},l.push(m)}return l[0].vector=((s=l[1])==null?void 0:s.vector)||[0,0],l}function ns(t,e={}){return es(ss(t,e),e)}function et(t,e){return t-e}function rs(t){return t<0?-1:1}function st(t){return[Math.abs(t),rs(t)]}function qt(){const t=()=>((1+Math.random())*65536|0).toString(16).substring(1);return`${t()+t()}-${t()}-${t()}-${t()}-${t()}${t()}${t()}`}var is=2,k=is,B=class{constructor(t){this.drauu=t,this.event=void 0,this.point=void 0,this.start=void 0,this.el=null}onSelected(t){}onUnselected(){}onStart(t){}onMove(t){return!1}onEnd(t){}get brush(){return this.drauu.brush}get shiftPressed(){return this.drauu.shiftPressed}get altPressed(){return this.drauu.altPressed}get svgElement(){return this.drauu.el}getMousePosition(t){var e,s,n;const r=this.drauu.el,i=(e=this.drauu.options.coordinateScale)!=null?e:1,a=(s=this.drauu.options.offset)!=null?s:{x:0,y:0};if(this.drauu.options.coordinateTransform===!1){const o=this.drauu.el.getBoundingClientRect();return{x:(t.pageX-o.left+a.x)*i,y:(t.pageY-o.top+a.y)*i,pressure:t.pressure}}else{const o=this.drauu.svgPoint;o.x=t.clientX+a.x,o.y=t.clientY+a.y;const l=o.matrixTransform((n=r.getScreenCTM())==null?void 0:n.inverse());return{x:l.x*i,y:l.y*i,pressure:t.pressure}}}createElement(t,e){var s;const n=document.createElementNS("http://www.w3.org/2000/svg",t),r=e?mt(mt({},this.brush),e):this.brush;return n.setAttribute("fill",(s=r.fill)!=null?s:"transparent"),n.setAttribute("stroke",r.color),n.setAttribute("stroke-width",r.size.toString()),n.setAttribute("stroke-linecap","round"),r.dasharray&&n.setAttribute("stroke-dasharray",r.dasharray),n}attr(t,e){this.el.setAttribute(t,typeof e=="string"?e:e.toFixed(k))}_setEvent(t){this.event=t,this.point=this.getMousePosition(t)}_eventDown(t){return this._setEvent(t),this.start=this.point,this.onStart(this.point)}_eventMove(t){return this._setEvent(t),this.onMove(this.point)}_eventUp(t){return this._setEvent(t),this.onEnd(this.point)}},os=class Vt extends B{constructor(){super(...arguments),this.points=[]}onStart(e){return this.el=document.createElementNS("http://www.w3.org/2000/svg","path"),this.points=[e],this.attr("fill",this.brush.color),this.attr("d",this.getSvgData(this.points)),this.el}onMove(e){return this.el||this.onStart(e),this.points[this.points.length-1]!==e&&this.points.push(e),this.attr("d",this.getSvgData(this.points)),!0}onEnd(){const e=this.el;return this.el=null,!!e}getSvgData(e){return Vt.getSvgData(e,this.brush)}static getSvgData(e,s){const n=ns(e,mt({size:s.size,thinning:.9,simulatePressure:!1,start:{taper:5},end:{taper:5}},s.stylusOptions));if(!n.length)return"";const r=n.reduce((i,[a,o],l,p)=>{const[v,m]=p[(l+1)%p.length];return i.push(a,o,(a+v)/2,(o+m)/2),i},["M",...n[0],"Q"]);return r.push("Z"),r.map(i=>typeof i=="number"?i.toFixed(2):i).join(" ")}},as=class extends B{onStart(t){return this.el=this.createElement("ellipse"),this.attr("cx",t.x),this.attr("cy",t.y),this.el}onMove(t){if(!this.el||!this.start)return!1;let[e,s]=st(t.x-this.start.x),[n,r]=st(t.y-this.start.y);if(this.shiftPressed){const i=Math.min(e,n);e=i,n=i}if(this.altPressed)this.attr("cx",this.start.x),this.attr("cy",this.start.y),this.attr("rx",e),this.attr("ry",n);else{const[i,a]=[this.start.x,this.start.x+e*s].sort(et),[o,l]=[this.start.y,this.start.y+n*r].sort(et);this.attr("cx",(i+a)/2),this.attr("cy",(o+l)/2),this.attr("rx",(a-i)/2),this.attr("ry",(l-o)/2)}return!0}onEnd(){const t=this.el;return this.el=null,!(!t||!t.getTotalLength())}};function Bt(t,e){const s=document.createElementNS("http://www.w3.org/2000/svg","defs"),n=document.createElementNS("http://www.w3.org/2000/svg","marker"),r=document.createElementNS("http://www.w3.org/2000/svg","path");return r.setAttribute("fill",e),n.setAttribute("id",t),n.setAttribute("viewBox","0 -5 10 10"),n.setAttribute("refX","5"),n.setAttribute("refY","0"),n.setAttribute("markerWidth","4"),n.setAttribute("markerHeight","4"),n.setAttribute("orient","auto"),r.setAttribute("d","M0,-5L10,0L0,5"),n.appendChild(r),s.appendChild(n),s}var ls=class extends B{onStart(t){if(this.el=this.createElement("line",{fill:"transparent"}),this.attr("x1",t.x),this.attr("y1",t.y),this.attr("x2",t.x),this.attr("y2",t.y),this.brush.arrowEnd){const e=qt(),s=document.createElementNS("http://www.w3.org/2000/svg","g");return s.append(Bt(e,this.brush.color)),s.append(this.el),this.attr("marker-end",`url(#${e})`),s}return this.el}onMove(t){if(!this.el)return!1;let{x:e,y:s}=t;if(this.shiftPressed){const n=t.x-this.start.x,r=t.y-this.start.y;if(r!==0){let i=n/r;i=Math.round(i),Math.abs(i)<=1?(e=this.start.x+r*i,s=this.start.y+r):(e=this.start.x+n,s=this.start.y)}}return this.altPressed?(this.attr("x1",this.start.x*2-e),this.attr("y1",this.start.y*2-s),this.attr("x2",e),this.attr("y2",s)):(this.attr("x1",this.start.x),this.attr("y1",this.start.y),this.attr("x2",e),this.attr("y2",s)),!0}onEnd(){const t=this.el;return this.el=null,!(!t||t.getTotalLength()<5)}},us=class extends B{onStart(t){return this.el=this.createElement("rect"),this.brush.cornerRadius&&(this.attr("rx",this.brush.cornerRadius),this.attr("ry",this.brush.cornerRadius)),this.attr("x",t.x),this.attr("y",t.y),this.el}onMove(t){if(!this.el||!this.start)return!1;let[e,s]=st(t.x-this.start.x),[n,r]=st(t.y-this.start.y);if(this.shiftPressed){const i=Math.min(e,n);e=i,n=i}if(this.altPressed)this.attr("x",this.start.x-e),this.attr("y",this.start.y-n),this.attr("width",e*2),this.attr("height",n*2);else{const[i,a]=[this.start.x,this.start.x+e*s].sort(et),[o,l]=[this.start.y,this.start.y+n*r].sort(et);this.attr("x",i),this.attr("y",o),this.attr("width",a-i),this.attr("height",l-o)}return!0}onEnd(){const t=this.el;return this.el=null,!(!t||!t.getTotalLength())}};function hs(t,e){const s=t.x-e.x,n=t.y-e.y;return s*s+n*n}function cs(t,e,s){let n=e.x,r=e.y,i=s.x-n,a=s.y-r;if(i!==0||a!==0){const o=((t.x-n)*i+(t.y-r)*a)/(i*i+a*a);o>1?(n=s.x,r=s.y):o>0&&(n+=i*o,r+=a*o)}return i=t.x-n,a=t.y-r,i*i+a*a}function ds(t,e){let s=t[0];const n=[s];let r;for(let i=1,a=t.length;i<a;i++)r=t[i],hs(r,s)>e&&(n.push(r),s=r);return s!==r&&r&&n.push(r),n}function vt(t,e,s,n,r){let i=n,a=0;for(let o=e+1;o<s;o++){const l=cs(t[o],t[e],t[s]);l>i&&(a=o,i=l)}i>n&&(a-e>1&&vt(t,e,a,n,r),r.push(t[a]),s-a>1&&vt(t,a,s,n,r))}function fs(t,e){const s=t.length-1,n=[t[0]];return vt(t,0,s,e,n),n.push(t[s]),n}function Kt(t,e,s=!1){if(t.length<=2)return t;const n=e*e;return t=s?t:ds(t,n),t=fs(t,n),t}var ps=class U extends B{constructor(){super(...arguments),this.points=[],this.count=0}onStart(e){if(this.el=this.createElement("path",{fill:"transparent"}),this.points=[e],this.brush.arrowEnd){this.arrowId=qt();const s=Bt(this.arrowId,this.brush.color);this.el.appendChild(s)}return this.el}onMove(e){return this.el||this.onStart(e),this.points[this.points.length-1]!==e&&(this.points.push(e),this.count+=1),this.count>5&&(this.points=Kt(this.points,1,!0),this.count=0),this.attr("d",U.toSvgData(this.points)),!0}onEnd(){const e=this.el;if(this.el=null,!e)return!1;if(e.setAttribute("d",U.toSvgData(Kt(this.points,1,!0))),!e.getTotalLength()){const{x:s,y:n}=this.points[0],r=this.brush.size/2;e.setAttribute("d",`M ${s-r} ${n} a ${r},${r} 0 1,0 ${r*2},0 a ${r},${r} 0 1,0 ${-r*2},0`),e.setAttribute("fill",this.brush.color),e.setAttribute("stroke-width","0")}return!0}static line(e,s){const n=s.x-e.x,r=s.y-e.y;return{length:Math.sqrt(n**2+r**2),angle:Math.atan2(r,n)}}static controlPoint(e,s,n,r){const i=s||e,a=n||e,o=.2,l=U.line(i,a),p=l.angle+(r?Math.PI:0),v=l.length*o,m=e.x+Math.cos(p)*v,y=e.y+Math.sin(p)*v;return{x:m,y}}static bezierCommand(e,s,n){const r=U.controlPoint(n[s-1],n[s-2],e),i=U.controlPoint(e,n[s-1],n[s+1],!0);return`C ${r.x.toFixed(k)},${r.y.toFixed(k)} ${i.x.toFixed(k)},${i.y.toFixed(k)} ${e.x.toFixed(k)},${e.y.toFixed(k)}`}static toSvgData(e){return e.reduce((s,n,r,i)=>r===0?`M ${n.x.toFixed(k)},${n.y.toFixed(k)}`:`${s} ${U.bezierCommand(n,r,i)}`,"")}},ms=class extends B{constructor(){super(...arguments),this.pathSubFactor=20,this.pathFragments=[],this._erased=[]}onSelected(t){const e=(s,n)=>{if(s&&s.length)for(let r=0;r<s.length;r++){const i=s[r];if(i.getTotalLength){const a=i.getTotalLength();for(let o=0;o<this.pathSubFactor;o++){const l=i.getPointAtLength(a*o/this.pathSubFactor),p=i.getPointAtLength(a*(o+1)/this.pathSubFactor);this.pathFragments.push({x1:l.x,x2:p.x,y1:l.y,y2:p.y,segment:o,element:n||i})}}else i.children&&e(i.children,i)}};t&&e(t.children)}onUnselected(){this.pathFragments=[]}onStart(t){this.svgPointPrevious=this.svgElement.createSVGPoint(),this.svgPointPrevious.x=t.x,this.svgPointPrevious.y=t.y}onMove(t){this.svgPointCurrent=this.svgElement.createSVGPoint(),this.svgPointCurrent.x=t.x,this.svgPointCurrent.y=t.y;const e=this.checkAndEraseElement();return this.svgPointPrevious=this.svgPointCurrent,e}onEnd(){this.svgPointPrevious=void 0,this.svgPointCurrent=void 0;const t=this._erased;return this._erased=[],{undo:()=>t.forEach(e=>this.drauu._restoreNode(e)),redo:()=>t.forEach(e=>this.drauu._removeNode(e))}}checkAndEraseElement(){if(this.pathFragments.length)for(let t=0;t<this.pathFragments.length;t++){const e=this.pathFragments[t],s={x1:this.svgPointPrevious.x,x2:this.svgPointCurrent.x,y1:this.svgPointPrevious.y,y2:this.svgPointCurrent.y};this.lineLineIntersect(e,s)&&(this.drauu._removeNode(e.element),this._erased.push(e.element))}return this._erased.length&&(this.pathFragments=this.pathFragments.filter(t=>!this._erased.includes(t.element))),this._erased.length>0}lineLineIntersect(t,e){const s=t.x1,n=t.x2,r=e.x1,i=e.x2,a=t.y1,o=t.y2,l=e.y1,p=e.y2,v=(s-n)*(l-p)-(a-o)*(r-i),m=(s*o-a*n)*(r-i)-(s-n)*(r*p-l*i),y=(s*o-a*n)*(l-p)-(a-o)*(r*p-l*i),f=(d,h,P)=>d>=h&&d<=P?!0:d>=P&&d<=h;if(v===0)return!1;{const d={x:m/v,y:y/v};return f(d.x,s,n)&&f(d.y,a,o)&&f(d.x,r,i)&&f(d.y,l,p)}}};function gs(t){return{draw:new ps(t),stylus:new os(t),line:new ls(t),rectangle:new us(t),ellipse:new as(t),eraseLine:new ms(t)}}var vs=class{constructor(t={}){this.options=t,this.el=null,this.svgPoint=null,this.eventEl=null,this.shiftPressed=!1,this.altPressed=!1,this.drawing=!1,this._emitter=He(),this._originalPointerId=null,this._models=gs(this),this._opStack=[],this._opIndex=0,this._disposables=[],this._elements=[],this.options.brush||(this.options.brush={color:"black",size:3,mode:"stylus"}),t.el&&this.mount(t.el,t.eventTarget,t.window)}get model(){return this._models[this.mode]}get mounted(){return!!this.el}get mode(){return this.options.brush.mode||"stylus"}set mode(t){this._models[this.mode].onUnselected(),this.options.brush.mode=t,this.model.onSelected(this.el)}get brush(){return this.options.brush}set brush(t){this.options.brush=t}resolveSelector(t){return typeof t=="string"?document.querySelector(t):t||null}mount(t,e,s=window){if(this.el)throw new Error("[drauu] already mounted, unmount previous target first");if(this.el=this.resolveSelector(t),!this.el)throw new Error("[drauu] target element not found");if(this.el.tagName.toLocaleLowerCase()!=="svg")throw new Error("[drauu] can only mount to a SVG element");if(!this.el.createSVGPoint)throw new Error("[drauu] SVG element must be create by document.createElementNS('http://www.w3.org/2000/svg', 'svg')");this.svgPoint=this.el.createSVGPoint();const n=this.resolveSelector(e)||this.el,r=this.eventStart.bind(this),i=this.eventMove.bind(this),a=this.eventEnd.bind(this),o=this.eventKeyboard.bind(this);n.addEventListener("pointerdown",r,{passive:!1}),s.addEventListener("pointermove",i,{passive:!1}),s.addEventListener("pointerup",a,{passive:!1}),s.addEventListener("pointercancel",a,{passive:!1}),s.addEventListener("keydown",o,!1),s.addEventListener("keyup",o,!1),this._disposables.push(()=>{n.removeEventListener("pointerdown",r),s.removeEventListener("pointermove",i),s.removeEventListener("pointerup",a),s.removeEventListener("pointercancel",a),s.removeEventListener("keydown",o,!1),s.removeEventListener("keyup",o,!1)}),this._emitter.emit("mounted")}unmount(){this._disposables.forEach(t=>t()),this._disposables.length=0,this._elements.length=0,this.el=null,this._emitter.emit("unmounted")}on(t,e){return this._emitter.on(t,e)}undo(){return!this.canUndo()||this.drawing?!1:(this._opStack[--this._opIndex].undo(),this._emitter.emit("changed"),!0)}redo(){return!this.canRedo()||this.drawing?!1:(this._opStack[this._opIndex++].redo(),this._emitter.emit("changed"),!0)}canRedo(){return this._opIndex<this._opStack.length}canUndo(){return this._opIndex>0}eventMove(t){!this.acceptsInput(t)||!this.drawing||this.model._eventMove(t)&&(t.stopPropagation(),t.preventDefault(),this._emitter.emit("changed"))}eventStart(t){this.acceptsInput(t)&&(t.stopPropagation(),t.preventDefault(),this._currentNode&&this.cancel(),this.drawing=!0,this._originalPointerId=t.pointerId,this._emitter.emit("start"),this._currentNode=this.model._eventDown(t),this._currentNode&&this.mode!=="eraseLine"&&this.el.appendChild(this._currentNode),this._emitter.emit("changed"))}eventEnd(t){if(!this.acceptsInput(t)||!this.drawing)return;const e=this.model._eventUp(t);if(!e)this.cancel();else if(e===!0){const s=this._currentNode;this._appendNode(s),this.commit({undo:()=>this._removeNode(s),redo:()=>this._restoreNode(s)})}else this.commit(e);this.drawing=!1,this._emitter.emit("end"),this._emitter.emit("changed"),this._originalPointerId=null}acceptsInput(t){return(!this.options.acceptsInputTypes||this.options.acceptsInputTypes.includes(t.pointerType))&&!(this._originalPointerId&&this._originalPointerId!==t.pointerId)}eventKeyboard(t){this.shiftPressed===t.shiftKey&&this.altPressed===t.altKey||(this.shiftPressed=t.shiftKey,this.altPressed=t.altKey,this.model.point&&this.model.onMove(this.model.point)&&this._emitter.emit("changed"))}commit(t){this._opStack.length=this._opIndex,this._opStack.push(t),this._opIndex++;const e=this._currentNode;this._currentNode=void 0,this._emitter.emit("committed",e)}clear(){this._opStack.length=0,this._opIndex=0,this._elements=[],this.cancel(),this.el.innerHTML="",this._emitter.emit("changed")}cancel(){this._currentNode&&(this.el.removeChild(this._currentNode),this._currentNode=void 0,this._emitter.emit("canceled"))}dump(){return this.el.innerHTML}load(t){this.clear(),this.el.innerHTML=t}_appendNode(t){const e=this._elements.at(-1);e?e.after(t):this.el.append(t);const s=this._elements.push(t)-1;t.dataset.drauu_index=s.toString()}_removeNode(t){t.remove(),this._elements[+t.dataset.drauu_index]=null}_restoreNode(t){const e=+t.dataset.drauu_index;this._elements[e]=t;for(let s=e-1;s>=0;s--){const n=this._elements[s];if(n){n.after(t);return}}this.el.prepend(t)}};function _s(t){return new vs(t)}const ys=se(()=>{const{currentSlideNo:t,isPresenter:e}=Ot(),s=["#ff595e","#ffca3a","#8ac926","#1982c4","#6a4c93","#ffffff","#000000"],n=ht("slidev-drawing-enabled",!1),r=ht("slidev-drawing-pinned",!1),i=ne(ht("slidev-drawing-brush",{color:s[0],size:4,mode:"stylus"})),a=C(!1),o=C(!1),l=C(!1),p=C(!1),v=C("stylus"),m=b(()=>pt.drawings.syncAll||e.value);let y=!1;const f=b({get(){return v.value},set(u){v.value=u,u==="arrow"?(h.mode="line",i.arrowEnd=!0):(h.mode=u,i.arrowEnd=!1)}}),d=re({brush:i,acceptsInputTypes:b(()=>n.value&&(!pt.drawings.presenterOnly||e.value)?void 0:["pen"]),coordinateTransform:!1}),h=ie(_s(d));function P(){h.clear(),m.value&&Ct(t.value,"")}function R(){var u;l.value=h.canRedo(),o.value=h.canUndo(),p.value=!!((u=h.el)!=null&&u.children.length)}function L(u){y=!0;const x=ct[u||t.value];x!=null?h.load(x):h.clear(),R(),y=!1}return h.on("changed",()=>{if(R(),!y){const u=h.dump(),x=t.value;(ct[x]||"")!==u&&m.value&&Ct(x,h.dump())}}),_e(u=>{y=!0,u[t.value]!=null&&h.load(u[t.value]||""),y=!1,R()}),oe(()=>{ae(t,()=>{h.mounted&&L()},{immediate:!0})}),h.on("start",()=>a.value=!0),h.on("end",()=>a.value=!1),window.addEventListener("keydown",u=>{if(!n.value||ye.value)return;const x=!u.ctrlKey&&!u.altKey&&!u.shiftKey&&!u.metaKey;let w=!0;u.code==="KeyZ"&&(u.ctrlKey||u.metaKey)?u.shiftKey?h.redo():h.undo():u.code==="Escape"?n.value=!1:u.code==="KeyL"&&x?f.value="line":u.code==="KeyA"&&x?f.value="arrow":u.code==="KeyS"&&x?f.value="stylus":u.code==="KeyR"&&x?f.value="rectangle":u.code==="KeyE"&&x?f.value="ellipse":u.code==="KeyC"&&x?P():u.code.startsWith("Digit")&&x&&+u.code[5]<=s.length?i.color=s[+u.code[5]-1]:w=!1,w&&(u.preventDefault(),u.stopPropagation())},!1),{brush:i,brushColors:s,canClear:p,canRedo:l,canUndo:o,clear:P,drauu:h,drauuOptions:d,drawingEnabled:n,drawingMode:f,drawingPinned:r,drawingState:ct,isDrawing:a,loadCanvas:L}}),xs=["innerHTML"],Is=_t({__name:"DrawingPreview",props:{page:{}},setup(t){const{drawingState:e}=ys();return(s,n)=>I(e)[s.page]?(N(),K("svg",{key:0,class:"w-full h-full absolute top-0 pointer-events-none",innerHTML:I(e)[s.page]},null,8,xs)):ft("v-if",!0)}});export{Ls as G,Cs as S,Is as _,$s as a,Es as b,Pe as c,Ms as d,ys as u};
