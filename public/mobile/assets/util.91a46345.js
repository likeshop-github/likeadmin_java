import{G as e,H as n,J as t,K as o}from"./index.2197fbbc.js";const s=(n,t=!1,o)=>new Promise(((s,c)=>{let r=e();o&&(r=e().in(o)),r[t?"selectAll":"select"](n).boundingClientRect((function(e){return t&&Array.isArray(e)&&e.length||!t&&e?s(e):void c("找不到元素")})).exec()}));function c(e,s="navigateTo"){const c=e.query?`${e.path}?${function(e){let n="";for(const t of Object.keys(e)){const s=e[t],c=encodeURIComponent(t)+"=";if(!r(s))if(console.log(encodeURIComponent(t),o(s)),o(s)){for(const e of Object.keys(s))if(!r(s[e])){n+=encodeURIComponent(t+"["+e+"]")+"="+encodeURIComponent(s[e])+"&"}}else n+=c+encodeURIComponent(s)+"&"}return n.slice(0,-1)}(e.query)}`:e.path;"navigateTo"==s&&n({url:c}),"reLaunch"==s&&t({url:c})}const r=e=>null==e&&void 0===e;function i({price:e,take:n="all",prec:t}){let[o,s=""]=(e+"").split(".");if(void 0!==t){for(let e=t-s.length;e>0;--e)s+="0";s=s.substr(0,t)}switch(n){case"int":return o;case"dec":return s;case"all":return o+"."+s}}function a(...e){return function(){return new Promise(((n,t)=>{const o=e.values(),s=e=>{const c=o.next();c.done?n(e):Promise.resolve(c.value(e)).then(s).catch(t)};s()}))}}const l=(e,n="rpx")=>Object.is(Number(e),NaN)?e:`${e}${n}`;export{l as a,i as f,s as g,c as n,a as s};
