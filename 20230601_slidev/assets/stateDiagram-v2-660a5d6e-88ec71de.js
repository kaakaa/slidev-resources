import{p as Q,d as B,s as X,D as H,a as Z,S as F,b as j,c as I}from"./styles-a8f89eec-a815a3c6.js";import{G as tt}from"./layout-3ff13c4c-f7cbd47b.js";import{ay as a,as as g,ax as $,aK as et,az as ot,aC as G}from"./index-226abd6a.js";import{r as st}from"./index-c47ff54b-0c96dac9.js";import"./edges-17d4be60-f72f9d9e.js";import"./createText-b0d5c0ec-e79a5a39.js";import"./svgDraw-dd61ddfa-6b7dec4b.js";import"./line-fbe8f138-0eb4a76a.js";import"./array-b7dcf730-9f3ba611.js";import"./constant-b644328d-6af51708.js";const h="rect",C="rectWithTitle",nt="start",ct="end",it="divider",rt="roundedWithTitle",at="note",lt="noteGroup",_="statediagram",dt="state",Et=`${_}-${dt}`,U="transition",St="note",Tt="note-edge",pt=`${U} ${Tt}`,_t=`${_}-${St}`,ut="cluster",Dt=`${_}-${ut}`,ft="cluster-alt",bt=`${_}-${ft}`,V="parent",Y="note",At="state",N="----",ht=`${N}${Y}`,M=`${N}${V}`,z="fill:none",W="fill: #333",K="c",m="text",q="normal";let y={},E=0;const yt=function(t){const n=Object.keys(t);for(const e of n)t[e]},gt=function(t,n){a.trace("Extracting classes"),n.db.clear();try{return n.parser.parse(t),n.db.extract(n.db.getRootDocV2()),n.db.getClasses()}catch(e){return e}};function xt(t){return t==null?"":t.classes?t.classes.join(" "):""}function R(t="",n=0,e="",c=N){const i=e!==null&&e.length>0?`${c}${e}`:"";return`${At}-${t}${i}-${n}`}const A=(t,n,e,c,i,r)=>{const o=e.id,u=xt(c[o]);if(o!=="root"){let T=h;e.start===!0&&(T=nt),e.start===!1&&(T=ct),e.type!==H&&(T=e.type),y[o]||(y[o]={id:o,shape:T,description:G.sanitizeText(o,g()),classes:`${u} ${Et}`});const s=y[o];e.description&&(Array.isArray(s.description)?(s.shape=C,s.description.push(e.description)):s.description.length>0?(s.shape=C,s.description===o?s.description=[e.description]:s.description=[s.description,e.description]):(s.shape=h,s.description=e.description),s.description=G.sanitizeTextOrArray(s.description,g())),s.description.length===1&&s.shape===C&&(s.shape=h),!s.type&&e.doc&&(a.info("Setting cluster for ",o,w(e)),s.type="group",s.dir=w(e),s.shape=e.type===Z?it:rt,s.classes=s.classes+" "+Dt+" "+(r?bt:""));const p={labelStyle:"",shape:s.shape,labelText:s.description,classes:s.classes,style:"",id:o,dir:s.dir,domId:R(o,E),type:s.type,padding:15};if(p.centerLabel=!0,e.note){const l={labelStyle:"",shape:at,labelText:e.note.text,classes:_t,style:"",id:o+ht+"-"+E,domId:R(o,E,Y),type:s.type,padding:15},d={labelStyle:"",shape:lt,labelText:e.note.text,classes:s.classes,style:"",id:o+M,domId:R(o,E,V),type:"group",padding:0};E++;const D=o+M;t.setNode(D,d),t.setNode(l.id,l),t.setNode(o,p),t.setParent(o,D),t.setParent(l.id,D);let S=o,f=l.id;e.note.position==="left of"&&(S=l.id,f=o),t.setEdge(S,f,{arrowhead:"none",arrowType:"",style:z,labelStyle:"",classes:pt,arrowheadStyle:W,labelpos:K,labelType:m,thickness:q})}else t.setNode(o,p)}n&&n.id!=="root"&&(a.trace("Setting node ",o," to be child of its parent ",n.id),t.setParent(o,n.id)),e.doc&&(a.trace("Adding nodes children "),$t(t,e,e.doc,c,i,!r))},$t=(t,n,e,c,i,r)=>{a.trace("items",e),e.forEach(o=>{switch(o.stmt){case j:A(t,n,o,c,i,r);break;case H:A(t,n,o,c,i,r);break;case F:{A(t,n,o.state1,c,i,r),A(t,n,o.state2,c,i,r);const u={id:"edge"+E,arrowhead:"normal",arrowTypeEnd:"arrow_barb",style:z,labelStyle:"",label:G.sanitizeText(o.description,g()),arrowheadStyle:W,labelpos:K,labelType:m,thickness:q,classes:U};t.setEdge(o.state1.id,o.state2.id,u,E),E++}break}})},w=(t,n=I)=>{let e=n;if(t.doc)for(let c=0;c<t.doc.length;c++){const i=t.doc[c];i.stmt==="dir"&&(e=i.value)}return e},Ct=function(t,n,e,c){a.info("Drawing state diagram (v2)",n),y={},c.db.getDirection();const{securityLevel:i,state:r}=g(),o=r.nodeSpacing||50,u=r.rankSpacing||50;a.info(c.db.getRootDocV2()),c.db.extract(c.db.getRootDocV2()),a.info(c.db.getRootDocV2());const T=c.db.getStates(),s=new tt({multigraph:!0,compound:!0}).setGraph({rankdir:w(c.db.getRootDocV2()),nodesep:o,ranksep:u,marginx:8,marginy:8}).setDefaultEdgeLabel(function(){return{}});A(s,void 0,c.db.getRootDocV2(),T,c.db,!0);let p;i==="sandbox"&&(p=$("#i"+n));const l=i==="sandbox"?$(p.nodes()[0].contentDocument.body):$("body"),d=l.select(`[id="${n}"]`),D=l.select("#"+n+" g");st(D,s,["barb"],_,n);const S=8;et.insertTitle(d,"statediagramTitleText",r.titleTopMargin,c.db.getDiagramTitle());const f=d.node().getBBox(),L=f.width+S*2,P=f.height+S*2;d.attr("class",_);const k=d.node().getBBox();ot(d,P,L,r.useMaxWidth);const v=`${k.x-S} ${k.y-S} ${L} ${P}`;a.debug(`viewBox ${v}`),d.attr("viewBox",v);const J=document.querySelectorAll('[id="'+n+'"] .edgeLabel .label');for(const x of J){const O=x.getBBox(),b=document.createElementNS("http://www.w3.org/2000/svg",h);b.setAttribute("rx",0),b.setAttribute("ry",0),b.setAttribute("width",O.width),b.setAttribute("height",O.height),x.insertBefore(b,x.firstChild)}},Rt={setConf:yt,getClasses:gt,draw:Ct},Ht={parser:Q,db:B,renderer:Rt,styles:X,init:t=>{t.state||(t.state={}),t.state.arrowMarkerAbsolute=t.arrowMarkerAbsolute,B.clear()}};export{Ht as diagram};
