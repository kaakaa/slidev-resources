import{c as K,p as sn}from"./constant-b644328d-6af51708.js";import{bJ as en,bK as y,b7 as ln,bL as Q,bM as P,bN as z,bO as k,bP as rn,bQ as un,bR as t,bS as an,bT as on,bU as tn}from"./index-306ba0ff.js";function fn(l){return l.innerRadius}function cn(l){return l.outerRadius}function yn(l){return l.startAngle}function gn(l){return l.endAngle}function mn(l){return l&&l.padAngle}function pn(l,x,q,O,h,v,L,r){var s=q-l,n=O-x,m=L-h,i=r-v,u=i*s-m*n;if(!(u*u<y))return u=(m*(x-v)-i*(l-h))/u,[l+u*s,x+u*n]}function H(l,x,q,O,h,v,L){var r=l-q,s=x-O,n=(L?v:-v)/z(r*r+s*s),m=n*s,i=-n*r,u=l+m,f=x+i,c=q+m,w=O+i,o=(u+c)/2,D=(f+w)/2,p=c-u,g=w-f,R=p*p+g*g,E=h-v,T=u*w-c*f,I=(g<0?-1:1)*z(tn(0,E*E*R-T*T)),J=(T*g-p*I)/R,d=(-T*p-g*I)/R,A=(T*g+p*I)/R,b=(-T*p+g*I)/R,e=J-o,a=d-D,M=A-o,N=b-D;return e*e+a*a>M*M+N*N&&(J=A,d=b),{cx:J,cy:d,x01:-m,y01:-i,x11:J*(h/E-1),y11:d*(h/E-1)}}function hn(){var l=fn,x=cn,q=K(0),O=null,h=yn,v=gn,L=mn,r=null;function s(){var n,m,i=+l.apply(this,arguments),u=+x.apply(this,arguments),f=h.apply(this,arguments)-en,c=v.apply(this,arguments)-en,w=rn(c-f),o=c>f;if(r||(r=n=sn()),u<i&&(m=u,u=i,i=m),!(u>y))r.moveTo(0,0);else if(w>ln-y)r.moveTo(u*Q(f),u*P(f)),r.arc(0,0,u,f,c,!o),i>y&&(r.moveTo(i*Q(c),i*P(c)),r.arc(0,0,i,c,f,o));else{var D=f,p=c,g=f,R=c,E=w,T=w,I=L.apply(this,arguments)/2,J=I>y&&(O?+O.apply(this,arguments):z(i*i+u*u)),d=k(rn(u-i)/2,+q.apply(this,arguments)),A=d,b=d,e,a;if(J>y){var M=an(J/i*P(I)),N=an(J/u*P(I));(E-=M*2)>y?(M*=o?1:-1,g+=M,R-=M):(E=0,g=R=(f+c)/2),(T-=N*2)>y?(N*=o?1:-1,D+=N,p-=N):(T=0,D=p=(f+c)/2)}var U=u*Q(D),j=u*P(D),B=i*Q(R),C=i*P(R);if(d>y){var F=u*Q(p),G=u*P(p),V=i*Q(g),W=i*P(g),S;if(w<un&&(S=pn(U,j,V,W,F,G,B,C))){var X=U-S[0],Y=j-S[1],Z=F-S[0],$=G-S[1],_=1/P(on((X*Z+Y*$)/(z(X*X+Y*Y)*z(Z*Z+$*$)))/2),nn=z(S[0]*S[0]+S[1]*S[1]);A=k(d,(i-nn)/(_-1)),b=k(d,(u-nn)/(_+1))}}T>y?b>y?(e=H(V,W,U,j,u,b,o),a=H(F,G,B,C,u,b,o),r.moveTo(e.cx+e.x01,e.cy+e.y01),b<d?r.arc(e.cx,e.cy,b,t(e.y01,e.x01),t(a.y01,a.x01),!o):(r.arc(e.cx,e.cy,b,t(e.y01,e.x01),t(e.y11,e.x11),!o),r.arc(0,0,u,t(e.cy+e.y11,e.cx+e.x11),t(a.cy+a.y11,a.cx+a.x11),!o),r.arc(a.cx,a.cy,b,t(a.y11,a.x11),t(a.y01,a.x01),!o))):(r.moveTo(U,j),r.arc(0,0,u,D,p,!o)):r.moveTo(U,j),!(i>y)||!(E>y)?r.lineTo(B,C):A>y?(e=H(B,C,F,G,i,-A,o),a=H(U,j,V,W,i,-A,o),r.lineTo(e.cx+e.x01,e.cy+e.y01),A<d?r.arc(e.cx,e.cy,A,t(e.y01,e.x01),t(a.y01,a.x01),!o):(r.arc(e.cx,e.cy,A,t(e.y01,e.x01),t(e.y11,e.x11),!o),r.arc(0,0,i,t(e.cy+e.y11,e.cx+e.x11),t(a.cy+a.y11,a.cx+a.x11),o),r.arc(a.cx,a.cy,A,t(a.y11,a.x11),t(a.y01,a.x01),!o))):r.arc(0,0,i,R,g,o)}if(r.closePath(),n)return r=null,n+""||null}return s.centroid=function(){var n=(+l.apply(this,arguments)+ +x.apply(this,arguments))/2,m=(+h.apply(this,arguments)+ +v.apply(this,arguments))/2-un/2;return[Q(m)*n,P(m)*n]},s.innerRadius=function(n){return arguments.length?(l=typeof n=="function"?n:K(+n),s):l},s.outerRadius=function(n){return arguments.length?(x=typeof n=="function"?n:K(+n),s):x},s.cornerRadius=function(n){return arguments.length?(q=typeof n=="function"?n:K(+n),s):q},s.padRadius=function(n){return arguments.length?(O=n==null?null:typeof n=="function"?n:K(+n),s):O},s.startAngle=function(n){return arguments.length?(h=typeof n=="function"?n:K(+n),s):h},s.endAngle=function(n){return arguments.length?(v=typeof n=="function"?n:K(+n),s):v},s.padAngle=function(n){return arguments.length?(L=typeof n=="function"?n:K(+n),s):L},s.context=function(n){return arguments.length?(r=n??null,s):r},s}export{hn as d};
