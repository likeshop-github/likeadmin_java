import{z as a}from"./index.a5551c62.js";function t(t){const c=a(!1);return{isLock:c,lockFn:async(...a)=>{if(!c.value){c.value=!0;try{const n=await t(...a);return c.value=!1,n}catch(n){throw c.value=!1,n}}}}}export{t as u};
