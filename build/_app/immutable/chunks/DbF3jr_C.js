import{b as C,h as g,d as y,E as H,H as M,e as z,r as F,s as G,f as L,g as D,i as N,p as q,U as K,j as Z,k as $,m as j,L as V,n as w,o as J,P as Q,q as p,t as W,v as X,w as x,x as k,a as Y,y as ee,S as re,z as ae,l as ne,A as se,B as te,C as ue}from"./Dh0rO8MZ.js";function _e(e,r,[s,n]=[0,0]){g&&s===0&&y();var c=e,t=null,u=null,d=K,P=s>0?H:0,f=!1;const A=(i,l=!0)=>{f=!0,o(l,i)},o=(i,l)=>{if(d===(d=i))return;let I=!1;if(g&&n!==-1){if(s===0){const _=c.data;_===M?n=0:_===z?n=1/0:(n=parseInt(_.substring(1)),n!==n&&(n=d?1/0:-1))}const S=n>s;!!d===S&&(c=F(),G(c),L(!1),I=!0,n=-1)}d?(t?D(t):l&&(t=N(()=>l(c))),u&&q(u,()=>{u=null})):(u?D(u):l&&(u=N(()=>l(c,[s+1,n]))),t&&q(t,()=>{t=null})),I&&L(!0)};C(()=>{f=!1,r(A),f||o(null,null)},P),g&&(c=Z)}let m=!1;function ie(e){var r=m;try{return m=!1,[e(),m]}finally{m=r}}const fe={get(e,r){if(!e.exclude.includes(r))return e.props[r]},set(e,r){return!1},getOwnPropertyDescriptor(e,r){if(!e.exclude.includes(r)&&r in e.props)return{enumerable:!0,configurable:!0,value:e.props[r]}},has(e,r){return e.exclude.includes(r)?!1:r in e.props},ownKeys(e){return Reflect.ownKeys(e.props).filter(r=>!e.exclude.includes(r))}};function ce(e,r,s){return new Proxy({props:e,exclude:r},fe)}function B(e){var r;return((r=e.ctx)==null?void 0:r.d)??!1}function ve(e,r,s,n){var O;var c=(s&te)!==0,t=!ne||(s&se)!==0,u=(s&ee)!==0,d=(s&ue)!==0,P=!1,f;u?[f,P]=ie(()=>e[r]):f=e[r];var A=re in e||ae in e,o=u&&(((O=$(e,r))==null?void 0:O.set)??(A&&r in e&&(a=>e[r]=a)))||void 0,i=n,l=!0,I=!1,S=()=>(I=!0,l&&(l=!1,d?i=Y(n):i=n),i);f===void 0&&n!==void 0&&(o&&t&&j(),f=S(),o&&o(f));var _;if(t)_=()=>{var a=e[r];return a===void 0?S():(l=!0,I=!1,a)};else{var h=(c?w:J)(()=>e[r]);h.f|=V,_=()=>{var a=p(h);return a!==void 0&&(i=void 0),a===void 0?i:a}}if((s&Q)===0)return _;if(o){var U=e.$$legacy;return function(a,b){return arguments.length>0?((!t||!b||U||P)&&o(b?_():a),a):_()}}var E=!1,R=k(f),v=w(()=>{var a=_(),b=p(R);return E?(E=!1,b):R.v=a});return u&&p(v),c||(v.equals=W),function(a,b){if(arguments.length>0){const T=b?p(v):t&&u?X(a):a;if(!v.equals(T)){if(E=!0,x(R,T),I&&i!==void 0&&(i=T),B(v))return a;Y(()=>p(v))}return a}return B(v)?v.v:p(v)}}export{_e as i,ve as p,ce as r};
