import{aw as n,ar as r,t as u,y as j,Y as $,ax as v}from"../modules/vue-rs_j7vSg.js";import{h as p,F as x,a8 as l,i as C,E as S,A as E,B as F,z as R,a9 as T,aa as k}from"../index-DpiOxAr-.js";function g(){const t=n(C),s=r(t,"nav"),a=n(S).value,e=r(a,"current"),i=n(E),c=n(F),o=n(l,{}),d=n(R,void 0),m=n(p,u(1)),f=n(x,j(()=>1));return{$slidev:t,$nav:s,$clicksContext:a,$clicks:e,$page:i,$route:d,$renderContext:c,$frontmatter:o,$scale:m,$zoom:f}}function O(t){var i,c;$(l,t);const{$slidev:s,$page:a}=g(),e=s.nav.slides.find(o=>o.no===a.value);if((c=(i=e==null?void 0:e.meta)==null?void 0:i.slide)!=null&&c.frontmatter){for(const o of Object.keys(e.meta.slide.frontmatter))o in t||delete e.meta.slide.frontmatter[o];Object.assign(e.meta.slide.frontmatter,t)}}function b(t,s){return{...v(t,s===0?T:k),frontmatter:t}}export{b as f,O as p,g as u};
