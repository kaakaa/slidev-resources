import{p as B}from"./chunk-K2ZEYYM2-BHKSz2KD.js";import{p as U}from"./gitGraph-YCYPL57B-RWHQZFFZ-Ga86YJ-n.js";import{F as q,p as V,q as Z,s as j,g as H,d as J,c as K,_ as i,l as C,v as Q,e as X,G as Y,a7 as tt,a9 as et,aa as z,ab as at,m as rt,ac as it}from"./md-NxCrRVDs.js";import"./chunk-TZBO7MLI-CZCdFItz.js";import"./index-DRXpiHe_.js";import"./modules/vue-BI9Yogb7.js";import"./modules/shiki-CBkopGoQ.js";import"./modules/file-saver-LUhfcczZ.js";import"./slidev/default-CJSgZmFR.js";import"./slidev/context-BBk7ap2K.js";var F=q.pie,D={sections:new Map,showData:!1,config:F},m=D.sections,w=D.showData,st=structuredClone(F),ot=i(()=>structuredClone(st),"getConfig"),nt=i(()=>{m=new Map,w=D.showData,Q()},"clear"),lt=i(({label:t,value:a})=>{m.has(t)||(m.set(t,a),C.debug(`added new section: ${t}, with value: ${a}`))},"addSection"),ct=i(()=>m,"getSections"),pt=i(t=>{w=t},"setShowData"),dt=i(()=>w,"getShowData"),G={getConfig:ot,clear:nt,setDiagramTitle:V,getDiagramTitle:Z,setAccTitle:j,getAccTitle:H,setAccDescription:J,getAccDescription:K,addSection:lt,getSections:ct,setShowData:pt,getShowData:dt},gt=i((t,a)=>{B(t,a),a.setShowData(t.showData),t.sections.map(a.addSection)},"populateDb"),ut={parse:i(async t=>{const a=await U("pie",t);C.debug(a),gt(a,G)},"parse")},ft=i(t=>`
  .pieCircle{
    stroke: ${t.pieStrokeColor};
    stroke-width : ${t.pieStrokeWidth};
    opacity : ${t.pieOpacity};
  }
  .pieOuterCircle{
    stroke: ${t.pieOuterStrokeColor};
    stroke-width: ${t.pieOuterStrokeWidth};
    fill: none;
  }
  .pieTitleText {
    text-anchor: middle;
    font-size: ${t.pieTitleTextSize};
    fill: ${t.pieTitleTextColor};
    font-family: ${t.fontFamily};
  }
  .slice {
    font-family: ${t.fontFamily};
    fill: ${t.pieSectionTextColor};
    font-size:${t.pieSectionTextSize};
    // fill: white;
  }
  .legend text {
    fill: ${t.pieLegendTextColor};
    font-family: ${t.fontFamily};
    font-size: ${t.pieLegendTextSize};
  }
`,"getStyles"),mt=ft,ht=i(t=>{const a=[...t.entries()].map(s=>({label:s[0],value:s[1]})).sort((s,n)=>n.value-s.value);return it().value(s=>s.value)(a)},"createPieArcs"),vt=i((t,a,W,s)=>{C.debug(`rendering pie chart
`+t);const n=s.db,y=X(),T=Y(n.getConfig(),y.pie),$=40,o=18,d=4,l=450,h=l,v=tt(a),c=v.append("g");c.attr("transform","translate("+h/2+","+l/2+")");const{themeVariables:r}=y;let[A]=et(r.pieOuterStrokeWidth);A??(A=2);const _=T.textPosition,g=Math.min(h,l)/2-$,M=z().innerRadius(0).outerRadius(g),O=z().innerRadius(g*_).outerRadius(g*_);c.append("circle").attr("cx",0).attr("cy",0).attr("r",g+A/2).attr("class","pieOuterCircle");const b=n.getSections(),S=ht(b),P=[r.pie1,r.pie2,r.pie3,r.pie4,r.pie5,r.pie6,r.pie7,r.pie8,r.pie9,r.pie10,r.pie11,r.pie12],p=at(P);c.selectAll("mySlices").data(S).enter().append("path").attr("d",M).attr("fill",e=>p(e.data.label)).attr("class","pieCircle");let E=0;b.forEach(e=>{E+=e}),c.selectAll("mySlices").data(S).enter().append("text").text(e=>(e.data.value/E*100).toFixed(0)+"%").attr("transform",e=>"translate("+O.centroid(e)+")").style("text-anchor","middle").attr("class","slice"),c.append("text").text(n.getDiagramTitle()).attr("x",0).attr("y",-(l-50)/2).attr("class","pieTitleText");const x=c.selectAll(".legend").data(p.domain()).enter().append("g").attr("class","legend").attr("transform",(e,u)=>{const f=o+d,I=f*p.domain().length/2,L=12*o,N=u*f-I;return"translate("+L+","+N+")"});x.append("rect").attr("width",o).attr("height",o).style("fill",p).style("stroke",p),x.data(S).append("text").attr("x",o+d).attr("y",o-d).text(e=>{const{label:u,value:f}=e.data;return n.getShowData()?`${u} [${f}]`:u});const R=Math.max(...x.selectAll("text").nodes().map(e=>(e==null?void 0:e.getBoundingClientRect().width)??0)),k=h+$+o+d+R;v.attr("viewBox",`0 0 ${k} ${l}`),rt(v,l,k,T.useMaxWidth)},"draw"),St={draw:vt},Et={parser:ut,db:G,renderer:St,styles:mt};export{Et as diagram};
