import{p as B}from"./chunk-K2ZEYYM2-Bb_4VIJ7.js";import{p as U}from"./gitGraph-YCYPL57B-RWHQZFFZ-Clslc_is.js";import{aq as q,q as V,t as X,s as Z,g as j,d as H,c as J,_ as i,l as C,x as K,e as Q,ar as Y,aS as tt,aU as et,aV as z,aW as at,m as rt,aX as it}from"./md-_xwabfk6.js";import"./chunk-TZBO7MLI-CRa-JL_c.js";import"./monaco/bundled-types-DfaZohK2.js";import"./modules/vue-BxkSfgn6.js";import"./modules/file-saver-igGfcqei.js";import"./slidev/CodeBlockWrapper.vue_vue_type_script_setup_true_lang-C9Ksl4Bt.js";import"./modules/unplugin-icons-hJOaby8D.js";import"./index-DDHR5GS5.js";import"./modules/shiki-B0Vi0BHB.js";import"./slidev/context-CtAL68qA.js";import"./lz-string-7V7f_eN4.js";import"./slidev/two-cols.vue_vue_type_script_setup_true_lang-CQj7yD6F.js";var W=q.pie,D={sections:new Map,showData:!1,config:W},f=D.sections,w=D.showData,st=structuredClone(W),ot=i(()=>structuredClone(st),"getConfig"),nt=i(()=>{f=new Map,w=D.showData,K()},"clear"),lt=i(({label:t,value:a})=>{f.has(t)||(f.set(t,a),C.debug(`added new section: ${t}, with value: ${a}`))},"addSection"),ct=i(()=>f,"getSections"),pt=i(t=>{w=t},"setShowData"),dt=i(()=>w,"getShowData"),F={getConfig:ot,clear:nt,setDiagramTitle:V,getDiagramTitle:X,setAccTitle:Z,getAccTitle:j,setAccDescription:H,getAccDescription:J,addSection:lt,getSections:ct,setShowData:pt,getShowData:dt},gt=i((t,a)=>{B(t,a),a.setShowData(t.showData),t.sections.map(a.addSection)},"populateDb"),ut={parse:i(async t=>{const a=await U("pie",t);C.debug(a),gt(a,F)},"parse")},mt=i(t=>`
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
`,"getStyles"),ft=mt,ht=i(t=>{const a=[...t.entries()].map(s=>({label:s[0],value:s[1]})).sort((s,n)=>n.value-s.value);return it().value(s=>s.value)(a)},"createPieArcs"),St=i((t,a,G,s)=>{C.debug(`rendering pie chart
`+t);const n=s.db,y=Q(),T=Y(n.getConfig(),y.pie),$=40,o=18,d=4,l=450,h=l,S=tt(a),c=S.append("g");c.attr("transform","translate("+h/2+","+l/2+")");const{themeVariables:r}=y;let[A]=et(r.pieOuterStrokeWidth);A??(A=2);const _=T.textPosition,g=Math.min(h,l)/2-$,M=z().innerRadius(0).outerRadius(g),O=z().innerRadius(g*_).outerRadius(g*_);c.append("circle").attr("cx",0).attr("cy",0).attr("r",g+A/2).attr("class","pieOuterCircle");const E=n.getSections(),v=ht(E),P=[r.pie1,r.pie2,r.pie3,r.pie4,r.pie5,r.pie6,r.pie7,r.pie8,r.pie9,r.pie10,r.pie11,r.pie12],p=at(P);c.selectAll("mySlices").data(v).enter().append("path").attr("d",M).attr("fill",e=>p(e.data.label)).attr("class","pieCircle");let b=0;E.forEach(e=>{b+=e}),c.selectAll("mySlices").data(v).enter().append("text").text(e=>(e.data.value/b*100).toFixed(0)+"%").attr("transform",e=>"translate("+O.centroid(e)+")").style("text-anchor","middle").attr("class","slice"),c.append("text").text(n.getDiagramTitle()).attr("x",0).attr("y",-(l-50)/2).attr("class","pieTitleText");const x=c.selectAll(".legend").data(p.domain()).enter().append("g").attr("class","legend").attr("transform",(e,u)=>{const m=o+d,I=m*p.domain().length/2,L=12*o,N=u*m-I;return"translate("+L+","+N+")"});x.append("rect").attr("width",o).attr("height",o).style("fill",p).style("stroke",p),x.data(v).append("text").attr("x",o+d).attr("y",o-d).text(e=>{const{label:u,value:m}=e.data;return n.getShowData()?`${u} [${m}]`:u});const R=Math.max(...x.selectAll("text").nodes().map(e=>(e==null?void 0:e.getBoundingClientRect().width)??0)),k=h+$+o+d+R;S.attr("viewBox",`0 0 ${k} ${l}`),rt(S,l,k,T.useMaxWidth)},"draw"),vt={draw:St},Ft={parser:ut,db:F,renderer:vt,styles:ft};export{Ft as diagram};
