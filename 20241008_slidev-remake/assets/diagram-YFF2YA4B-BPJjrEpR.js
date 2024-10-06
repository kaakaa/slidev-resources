import{p as w}from"./chunk-K2ZEYYM2-Bb_4VIJ7.js";import{p as B}from"./gitGraph-YCYPL57B-RWHQZFFZ-Clslc_is.js";import{aq as S,s as F,g as z,q as P,t as W,c as T,d as D,_ as i,l as x,ar as v,as as _,x as A,aS as E,m as N}from"./md-_xwabfk6.js";import"./chunk-TZBO7MLI-CRa-JL_c.js";import"./monaco/bundled-types-DfaZohK2.js";import"./modules/vue-BxkSfgn6.js";import"./modules/file-saver-igGfcqei.js";import"./slidev/CodeBlockWrapper.vue_vue_type_script_setup_true_lang-C9Ksl4Bt.js";import"./modules/unplugin-icons-hJOaby8D.js";import"./index-DDHR5GS5.js";import"./modules/shiki-B0Vi0BHB.js";import"./slidev/context-CtAL68qA.js";import"./lz-string-7V7f_eN4.js";import"./slidev/two-cols.vue_vue_type_script_setup_true_lang-CQj7yD6F.js";var C={packet:[]},h=structuredClone(C),L=S.packet,Y=i(()=>{const t=v({...L,..._().packet});return t.showBits&&(t.paddingY+=10),t},"getConfig"),q=i(()=>h.packet,"getPacket"),I=i(t=>{t.length>0&&h.packet.push(t)},"pushWord"),M=i(()=>{A(),h=structuredClone(C)},"clear"),u={pushWord:I,getPacket:q,getConfig:Y,clear:M,setAccTitle:F,getAccTitle:z,setDiagramTitle:P,getDiagramTitle:W,getAccDescription:T,setAccDescription:D},O=1e4,G=i(t=>{w(t,u);let e=-1,o=[],n=1;const{bitsPerRow:s}=u.getConfig();for(let{start:a,end:r,label:p}of t.blocks){if(r&&r<a)throw new Error(`Packet block ${a} - ${r} is invalid. End must be greater than start.`);if(a!==e+1)throw new Error(`Packet block ${a} - ${r??a} is not contiguous. It should start from ${e+1}.`);for(e=r??a,x.debug(`Packet block ${a} - ${e} with label ${p}`);o.length<=s+1&&u.getPacket().length<O;){const[m,c]=H({start:a,end:r,label:p},n,s);if(o.push(m),m.end+1===n*s&&(u.pushWord(o),o=[],n++),!c)break;({start:a,end:r,label:p}=c)}}u.pushWord(o)},"populate"),H=i((t,e,o)=>{if(t.end===void 0&&(t.end=t.start),t.start>t.end)throw new Error(`Block start ${t.start} is greater than block end ${t.end}.`);return t.end+1<=e*o?[t,void 0]:[{start:t.start,end:e*o-1,label:t.label},{start:e*o,end:t.end,label:t.label}]},"getNextFittingBlock"),K={parse:i(async t=>{const e=await B("packet",t);x.debug(e),G(e)},"parse")},R=i((t,e,o,n)=>{const s=n.db,a=s.getConfig(),{rowHeight:r,paddingY:p,bitWidth:m,bitsPerRow:c}=a,b=s.getPacket(),l=s.getDiagramTitle(),g=r+p,d=g*(b.length+1)-(l?0:r),k=m*c+2,f=E(e);f.attr("viewbox",`0 0 ${k} ${d}`),N(f,d,k,a.useMaxWidth);for(const[$,y]of b.entries())U(f,y,$,a);f.append("text").text(l).attr("x",k/2).attr("y",d-g/2).attr("dominant-baseline","middle").attr("text-anchor","middle").attr("class","packetTitle")},"draw"),U=i((t,e,o,{rowHeight:n,paddingX:s,paddingY:a,bitWidth:r,bitsPerRow:p,showBits:m})=>{const c=t.append("g"),b=o*(n+a)+a;for(const l of e){const g=l.start%p*r+1,d=(l.end-l.start+1)*r-s;if(c.append("rect").attr("x",g).attr("y",b).attr("width",d).attr("height",n).attr("class","packetBlock"),c.append("text").attr("x",g+d/2).attr("y",b+n/2).attr("class","packetLabel").attr("dominant-baseline","middle").attr("text-anchor","middle").text(l.label),!m)continue;const k=l.end===l.start,f=b-2;c.append("text").attr("x",g+(k?d/2:0)).attr("y",f).attr("class","packetByte start").attr("dominant-baseline","auto").attr("text-anchor",k?"middle":"start").text(l.start),k||c.append("text").attr("x",g+d).attr("y",f).attr("class","packetByte end").attr("dominant-baseline","auto").attr("text-anchor","end").text(l.end)}},"drawWord"),X={draw:R},j={byteFontSize:"10px",startByteColor:"black",endByteColor:"black",labelColor:"black",labelFontSize:"12px",titleColor:"black",titleFontSize:"14px",blockStrokeColor:"black",blockStrokeWidth:"1",blockFillColor:"#efefef"},J=i(({packet:t}={})=>{const e=v(j,t);return`
	.packetByte {
		font-size: ${e.byteFontSize};
	}
	.packetByte.start {
		fill: ${e.startByteColor};
	}
	.packetByte.end {
		fill: ${e.endByteColor};
	}
	.packetLabel {
		fill: ${e.labelColor};
		font-size: ${e.labelFontSize};
	}
	.packetTitle {
		fill: ${e.titleColor};
		font-size: ${e.titleFontSize};
	}
	.packetBlock {
		stroke: ${e.blockStrokeColor};
		stroke-width: ${e.blockStrokeWidth};
		fill: ${e.blockFillColor};
	}
	`},"styles"),pt={parser:K,db:u,renderer:X,styles:J};export{pt as diagram};
