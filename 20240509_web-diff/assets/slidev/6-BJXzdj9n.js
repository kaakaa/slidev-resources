import{_ as p}from"./CodeBlockWrapper-CcnYr83p.js";import{y as r}from"../modules/unplugin-icons-Dwne0KFq.js";import{o as d,c as g,k as a,e as i,l as h,m as t,a0 as s,q as y,s as o,A as l}from"../modules/vue-rs_j7vSg.js";import{I as D}from"./two-cols-g7Z59hOW.js";import{b as A,L as e}from"../index-DpiOxAr-.js";import{p as c,u as B,f}from"./context-CH5ZdSOI.js";import"../modules/shiki-CLQSyIRm.js";const m=i("p",null,[i("a",{href:"https://github.com/moshensky/pdf-visual-diff",target:"_blank",rel:"noopener"},"moshensky/pdf-visual-diff")],-1),_=i("p",null,[s("関数 "),i("b",{class:"underline decoration-sky-500 text-pink-500"},[i("code",null,"comparePdfToSnapshot()")]),s(" か"),i("br"),s(" Jest Matcher "),i("span",{class:"underline decoration-sky-500"},[i("code",null,"toMatchPdfSnapshot()")]),s(" を使う。")],-1),u=i("pre",{class:"shiki shiki-themes vitesse-dark vitesse-light slidev-code",style:{"--shiki-dark":"#dbd7caee","--shiki-light":"#393a34","--shiki-dark-bg":"#121212","--shiki-light-bg":"#ffffff"}},[i("code",{class:"language-js"},[i("span",{class:"line"},[i("span",{style:{"--shiki-dark":"#758575DD","--shiki-light":"#A0ADA0"}},"// test/index.test.js")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-dark":"#4D9375","--shiki-light":"#1E754F"}},"import"),i("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}}," {"),i("span",{style:{"--shiki-dark":"#BD976A","--shiki-light":"#B07D48"}}," comparePdfToSnapshot"),i("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}}," }"),i("span",{style:{"--shiki-dark":"#4D9375","--shiki-light":"#1E754F"}}," from"),i("span",{style:{"--shiki-dark":"#C98A7D99","--shiki-light":"#B5695999"}}," '"),i("span",{style:{"--shiki-dark":"#C98A7D","--shiki-light":"#B56959"}},"pdf-visual-diff"),i("span",{style:{"--shiki-dark":"#C98A7D99","--shiki-light":"#B5695999"}},"'"),i("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}},";")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-dark":"#4D9375","--shiki-light":"#1E754F"}},"import"),i("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}}," {"),i("span",{style:{"--shiki-dark":"#BD976A","--shiki-light":"#B07D48"}}," expect"),i("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}}," }"),i("span",{style:{"--shiki-dark":"#4D9375","--shiki-light":"#1E754F"}}," from"),i("span",{style:{"--shiki-dark":"#C98A7D99","--shiki-light":"#B5695999"}}," '"),i("span",{style:{"--shiki-dark":"#C98A7D","--shiki-light":"#B56959"}},"chai"),i("span",{style:{"--shiki-dark":"#C98A7D99","--shiki-light":"#B5695999"}},"'"),i("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}},";")]),s(`
`),i("span",{class:"line"}),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-dark":"#80A665","--shiki-light":"#59873A"}},"describe"),i("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}},"("),i("span",{style:{"--shiki-dark":"#C98A7D99","--shiki-light":"#B5695999"}},"'"),i("span",{style:{"--shiki-dark":"#C98A7D","--shiki-light":"#B56959"}},"test pdf diff"),i("span",{style:{"--shiki-dark":"#C98A7D99","--shiki-light":"#B5695999"}},"'"),i("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}},","),i("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}}," ()"),i("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}}," =>"),i("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}}," {")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-dark":"#CB7676","--shiki-light":"#AB5959"}},"    const"),i("span",{style:{"--shiki-dark":"#BD976A","--shiki-light":"#B07D48"}}," pathToPdf"),i("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}}," ="),i("span",{style:{"--shiki-dark":"#C98A7D99","--shiki-light":"#B5695999"}}," '"),i("span",{style:{"--shiki-dark":"#C98A7D","--shiki-light":"#B56959"}},"testdata/sample.pdf"),i("span",{style:{"--shiki-dark":"#C98A7D99","--shiki-light":"#B5695999"}},"'"),i("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}},";")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-dark":"#80A665","--shiki-light":"#59873A"}},"    it"),i("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}},"("),i("span",{style:{"--shiki-dark":"#C98A7D99","--shiki-light":"#B5695999"}},"'"),i("span",{style:{"--shiki-dark":"#C98A7D","--shiki-light":"#B56959"}},"should pass"),i("span",{style:{"--shiki-dark":"#C98A7D99","--shiki-light":"#B5695999"}},"'"),i("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}},","),i("span",{style:{"--shiki-dark":"#CB7676","--shiki-light":"#AB5959"}}," async"),i("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}}," ()"),i("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}}," =>"),i("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}}," {")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-dark":"#CB7676","--shiki-light":"#AB5959"}},"        const"),i("span",{style:{"--shiki-dark":"#BD976A","--shiki-light":"#B07D48"}}," ret"),i("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}}," ="),i("span",{style:{"--shiki-dark":"#4D9375","--shiki-light":"#1E754F"}}," await"),i("span",{style:{"--shiki-dark":"#80A665","--shiki-light":"#59873A"}}," comparePdfToSnapshot"),i("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}},"(")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-dark":"#BD976A","--shiki-light":"#B07D48"}},"            pathToPdf"),i("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}},",")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-dark":"#C98A7D99","--shiki-light":"#B5695999"}},'            "'),i("span",{style:{"--shiki-dark":"#C98A7D","--shiki-light":"#B56959"}},"."),i("span",{style:{"--shiki-dark":"#C98A7D99","--shiki-light":"#B5695999"}},'"'),i("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}},",")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-dark":"#C98A7D99","--shiki-light":"#B5695999"}},"            '"),i("span",{style:{"--shiki-dark":"#C98A7D","--shiki-light":"#B56959"}},"sample.pdf"),i("span",{style:{"--shiki-dark":"#C98A7D99","--shiki-light":"#B5695999"}},"'")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}},"        );")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-dark":"#80A665","--shiki-light":"#59873A"}},"        expect"),i("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}},"("),i("span",{style:{"--shiki-dark":"#BD976A","--shiki-light":"#B07D48"}},"ret"),i("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}},")."),i("span",{style:{"--shiki-dark":"#BD976A","--shiki-light":"#B07D48"}},"to"),i("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}},"."),i("span",{style:{"--shiki-dark":"#BD976A","--shiki-light":"#B07D48"}},"be"),i("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}},"."),i("span",{style:{"--shiki-dark":"#BD976A","--shiki-light":"#B07D48"}},"true"),i("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}},";")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}},"    })")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}},"})")])])],-1),C={class:"mt-40 ml-3"},E=i("pre",{class:"shiki shiki-themes vitesse-dark vitesse-light slidev-code",style:{"--shiki-dark":"#dbd7caee","--shiki-light":"#393a34","--shiki-dark-bg":"#121212","--shiki-light-bg":"#ffffff"}},[i("code",{class:"language-js"},[i("span",{class:"line"},[i("span",{style:{"--shiki-dark":"#758575DD","--shiki-light":"#A0ADA0"}},"/**")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-dark":"#758575DD","--shiki-light":"#A0ADA0"}}," * Compare pdf to persisted snapshot. If one does not exist it is created")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-dark":"#758575DD","--shiki-light":"#A0ADA0"}}," * "),i("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}},"@"),i("span",{style:{"--shiki-dark":"#4D9375","--shiki-light":"#1E754F"}},"param"),i("span",{style:{"--shiki-dark":"#BD976A","--shiki-light":"#B07D48"}}," pdf"),i("span",{style:{"--shiki-dark":"#758575DD","--shiki-light":"#A0ADA0"}}," - path to pdf file or pdf loaded as Buffer")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-dark":"#758575DD","--shiki-light":"#A0ADA0"}}," * "),i("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}},"@"),i("span",{style:{"--shiki-dark":"#4D9375","--shiki-light":"#1E754F"}},"param"),i("span",{style:{"--shiki-dark":"#BD976A","--shiki-light":"#B07D48"}}," snapshotDir"),i("span",{style:{"--shiki-dark":"#758575DD","--shiki-light":"#A0ADA0"}}," - path to a directory where __snapshots__ folder is going to be created")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-dark":"#758575DD","--shiki-light":"#A0ADA0"}}," * "),i("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}},"@"),i("span",{style:{"--shiki-dark":"#4D9375","--shiki-light":"#1E754F"}},"param"),i("span",{style:{"--shiki-dark":"#BD976A","--shiki-light":"#B07D48"}}," snapshotName"),i("span",{style:{"--shiki-dark":"#758575DD","--shiki-light":"#A0ADA0"}}," - uniq name of a snapshot in the above path")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-dark":"#758575DD","--shiki-light":"#A0ADA0"}}," * "),i("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}},"@"),i("span",{style:{"--shiki-dark":"#4D9375","--shiki-light":"#1E754F"}},"param"),i("span",{style:{"--shiki-dark":"#BD976A","--shiki-light":"#B07D48"}}," compareOptions"),i("span",{style:{"--shiki-dark":"#758575DD","--shiki-light":"#A0ADA0"}}," - image comparison options")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-dark":"#758575DD","--shiki-light":"#A0ADA0"}}," * "),i("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}},"@"),i("span",{style:{"--shiki-dark":"#4D9375","--shiki-light":"#1E754F"}},"param"),i("span",{style:{"--shiki-dark":"#BD976A","--shiki-light":"#B07D48"}}," compareOptions.tolerance"),i("span",{style:{"--shiki-dark":"#758575DD","--shiki-light":"#A0ADA0"}}," - ...")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-dark":"#758575DD","--shiki-light":"#A0ADA0"}}," * "),i("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}},"@"),i("span",{style:{"--shiki-dark":"#4D9375","--shiki-light":"#1E754F"}},"param"),i("span",{style:{"--shiki-dark":"#BD976A","--shiki-light":"#B07D48"}}," compareOptions.maskRegions"),i("span",{style:{"--shiki-dark":"#758575DD","--shiki-light":"#A0ADA0"}}," - ...")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-dark":"#758575DD","--shiki-light":"#A0ADA0"}}," */")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-dark":"#CB7676","--shiki-light":"#AB5959"}},"type"),i("span",{style:{"--shiki-dark":"#5DA994","--shiki-light":"#2E8F82"}}," ComparePdfToSnapshot"),i("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}}," ="),i("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}}," (")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-dark":"#BD976A","--shiki-light":"#B07D48"}},"  pdf"),i("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}},": "),i("span",{style:{"--shiki-dark":"#5DA994","--shiki-light":"#2E8F82"}},"string"),i("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}}," | "),i("span",{style:{"--shiki-dark":"#5DA994","--shiki-light":"#2E8F82"}},"Buffer"),i("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}},",")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-dark":"#BD976A","--shiki-light":"#B07D48"}},"  snapshotDir"),i("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}},": "),i("span",{style:{"--shiki-dark":"#5DA994","--shiki-light":"#2E8F82"}},"string"),i("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}},",")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-dark":"#BD976A","--shiki-light":"#B07D48"}},"  snapshotName"),i("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}},": "),i("span",{style:{"--shiki-dark":"#5DA994","--shiki-light":"#2E8F82"}},"string"),i("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}},",")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-dark":"#BD976A","--shiki-light":"#B07D48"}},"  compareImageOpts"),i("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}},": "),i("span",{style:{"--shiki-dark":"#5DA994","--shiki-light":"#2E8F82"}},"Partial"),i("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}},"<"),i("span",{style:{"--shiki-dark":"#5DA994","--shiki-light":"#2E8F82"}},"CompareOptions"),i("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}},"> "),i("span",{style:{"--shiki-dark":"#DBD7CAEE","--shiki-light":"#393A34"}},"= "),i("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}},"{},")]),s(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}},")"),i("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}}," =>"),i("span",{style:{"--shiki-dark":"#5DA994","--shiki-light":"#2E8F82"}}," Promise"),i("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}},"<"),i("span",{style:{"--shiki-dark":"#5DA994","--shiki-light":"#2E8F82"}},"boolean"),i("span",{style:{"--shiki-dark":"#666666","--shiki-light":"#999999"}},">")])])],-1),F={__name:"6",setup(b){return c(e),B(),(v,P)=>{const n=r,k=p;return d(),g(D,y(o(l(f)(l(e),5))),{right:a(x=>[i("div",C,[h(k,t({},{ranges:[]}),{default:a(()=>[E]),_:1},16)])]),default:a(()=>[i("h1",null,[h(n),s(" How to use")]),m,_,h(k,t({},{ranges:["all","2,6,8-12"]}),{default:a(()=>[u]),_:1},16)]),_:1},16)}}},V=A(F,[["__file","/@slidev/slides/6.md"]]);export{V as default};