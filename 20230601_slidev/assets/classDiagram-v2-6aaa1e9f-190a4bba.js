import{p as _,d as k,s as M}from"./styles-123f2a17-4940b1c8.js";import{ay as p,as as n,ax as w,aK as G,aI as I,aG as C,aH as D,aE as R,aC as E}from"./index-3ac16ac6.js";import{G as B}from"./layout-3ff13c4c-f9c884d6.js";import{r as $}from"./index-c47ff54b-956f2a4e.js";import"./edges-17d4be60-530ad285.js";import"./createText-b0d5c0ec-8fe219f7.js";import"./svgDraw-dd61ddfa-672403bd.js";import"./line-fbe8f138-6676fab4.js";import"./array-b7dcf730-9f3ba611.js";import"./constant-b644328d-6af51708.js";const A=s=>E.sanitizeText(s,n());let S={dividerMargin:10,padding:5,textHeight:10,curve:void 0};const z=function(s,o,f,a){const e=Object.keys(s);p.info("keys:",e),p.info(s),e.forEach(function(i){var l,r;const t=s[i];let y="";t.cssClasses.length>0&&(y=y+" "+t.cssClasses.join(" "));const c={labelStyle:"",style:""},m=t.label??t.id,d=0,u="class_box",b={labelStyle:c.labelStyle,shape:u,labelText:A(m),classData:t,rx:d,ry:d,class:y,style:c.style,id:t.id,domId:t.domId,tooltip:a.db.getTooltip(t.id)||"",haveCallback:t.haveCallback,link:t.link,width:t.type==="group"?500:void 0,type:t.type,padding:((l=n().flowchart)==null?void 0:l.padding)??((r=n().class)==null?void 0:r.padding)};o.setNode(t.id,b),p.info("setNode",b)})},H=function(s,o,f,a){p.info(s),s.forEach(function(e,i){var l,r;const t=e,y="",c={labelStyle:"",style:""},m=t.text,d=0,u="note",b={labelStyle:c.labelStyle,shape:u,labelText:A(m),noteData:t,rx:d,ry:d,class:y,style:c.style,id:t.id,domId:t.id,tooltip:"",type:"note",padding:((l=n().flowchart)==null?void 0:l.padding)??((r=n().class)==null?void 0:r.padding)};if(o.setNode(t.id,b),p.info("setNode",b),!t.class||!(t.class in a))return;const v=f+i,g={id:`edgeNote${v}`,classes:"relation",pattern:"dotted",arrowhead:"none",startLabelRight:"",endLabelLeft:"",arrowTypeStart:"none",arrowTypeEnd:"none",style:"fill:none",labelStyle:"",curve:C(S.curve,D)};o.setEdge(t.id,t.class,g,v)})},q=function(s,o){const f=n().flowchart;let a=0;s.forEach(function(e){var i;a++;const l={classes:"relation",pattern:e.relation.lineType==1?"dashed":"solid",id:"id"+a,arrowhead:e.type==="arrow_open"?"none":"normal",startLabelRight:e.relationTitle1==="none"?"":e.relationTitle1,endLabelLeft:e.relationTitle2==="none"?"":e.relationTitle2,arrowTypeStart:L(e.relation.type1),arrowTypeEnd:L(e.relation.type2),style:"fill:none",labelStyle:"",curve:C(f==null?void 0:f.curve,D)};if(p.info(l,e),e.style!==void 0){const r=R(e.style);l.style=r.style,l.labelStyle=r.labelStyle}e.text=e.title,e.text===void 0?e.style!==void 0&&(l.arrowheadStyle="fill: #333"):(l.arrowheadStyle="fill: #333",l.labelpos="c",((i=n().flowchart)==null?void 0:i.htmlLabels)??n().htmlLabels?(l.labelType="html",l.label='<span class="edgeLabel">'+e.text+"</span>"):(l.labelType="text",l.label=e.text.replace(E.lineBreakRegex,`
`),e.style===void 0&&(l.style=l.style||"stroke: #333; stroke-width: 1.5px;fill:none"),l.labelStyle=l.labelStyle.replace("color:","fill:"))),o.setEdge(e.id1,e.id2,l,a)})},F=function(s){S={...S,...s}},K=function(s,o,f,a){p.info("Drawing class - ",o);const e=n().flowchart??n().class,i=n().securityLevel;p.info("config:",e);const l=(e==null?void 0:e.nodeSpacing)??50,r=(e==null?void 0:e.rankSpacing)??50,t=new B({multigraph:!0,compound:!0}).setGraph({rankdir:a.db.getDirection(),nodesep:l,ranksep:r,marginx:8,marginy:8}).setDefaultEdgeLabel(function(){return{}}),y=a.db.getClasses(),c=a.db.getRelations(),m=a.db.getNotes();p.info(c),z(y,t,o,a),q(c,t),H(m,t,c.length+1,y);let d;i==="sandbox"&&(d=w("#i"+o));const u=i==="sandbox"?w(d.nodes()[0].contentDocument.body):w("body"),b=u.select(`[id="${o}"]`),v=u.select("#"+o+" g");if($(v,t,["aggregation","extension","composition","dependency","lollipop"],"classDiagram",o),G.insertTitle(b,"classTitleText",(e==null?void 0:e.titleTopMargin)??5,a.db.getDiagramTitle()),I(t,b,e==null?void 0:e.diagramPadding,e==null?void 0:e.useMaxWidth),!(e!=null&&e.htmlLabels)){const g=i==="sandbox"?d.nodes()[0].contentDocument:document,N=g.querySelectorAll('[id="'+o+'"] .edgeLabel .label');for(const x of N){const T=x.getBBox(),h=g.createElementNS("http://www.w3.org/2000/svg","rect");h.setAttribute("rx",0),h.setAttribute("ry",0),h.setAttribute("width",T.width),h.setAttribute("height",T.height),x.insertBefore(h,x.firstChild)}}};function L(s){let o;switch(s){case 0:o="aggregation";break;case 1:o="extension";break;case 2:o="composition";break;case 3:o="dependency";break;case 4:o="lollipop";break;default:o="none"}return o}const P={setConf:F,draw:K},ee={parser:_,db:k,renderer:P,styles:M,init:s=>{s.class||(s.class={}),s.class.arrowMarkerAbsolute=s.arrowMarkerAbsolute,k.clear()}};export{ee as diagram};
