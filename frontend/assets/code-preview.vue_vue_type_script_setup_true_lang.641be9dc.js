import{E as w,u as y,v as B,w as D,O as T}from"./element-plus.33d6376e.js";import{f as r,b as N}from"./index.258cd804.js";import{u as S}from"./vue-clipboard3.91d4fd5f.js";import{d as U,r as $,e as j,a4 as F,o as s,c as i,U as o,L as t,V as L,a8 as K,K as O,a as m,u as P,k as R,S as q}from"./@vue.230e89ba.js";const z={class:"code-preview"},A={class:"flex",style:{height:"50vh"}},G=q(" \u590D\u5236 "),W=U({__name:"code-preview",props:{modelValue:{type:Boolean},code:null},emits:["update:modelValue"],setup(u,{emit:p}){const _=u,{toClipboard:f}=S(),c=$("index0"),b=async l=>{try{await f(l),r.msgSuccess("\u590D\u5236\u6210\u529F")}catch{r.msgError("\u590D\u5236\u5931\u8D25")}},n=j({get(){return _.modelValue},set(l){p("update:modelValue",l)}});return(l,a)=>{const h=F("highlightjs"),V=w,v=N,g=y,C=B,E=D,x=T;return s(),i("div",z,[o(x,{modelValue:P(n),"onUpdate:modelValue":a[1]||(a[1]=e=>R(n)?n.value=e:null),width:"900px",title:"\u4EE3\u7801\u9884\u89C8"},{default:t(()=>[o(E,{modelValue:c.value,"onUpdate:modelValue":a[0]||(a[0]=e=>c.value=e)},{default:t(()=>[(s(!0),i(L,null,K(u.code,(e,d,k)=>(s(),O(C,{label:d,name:`index${k}`,key:d},{default:t(()=>[m("div",A,[o(V,{class:"flex-1"},{default:t(()=>[o(h,{autodetect:"",code:e},null,8,["code"])]),_:2},1024),m("div",null,[o(g,{onClick:H=>b(e),type:"primary",link:""},{icon:t(()=>[o(v,{name:"el-icon-CopyDocument"})]),default:t(()=>[G]),_:2},1032,["onClick"])])])]),_:2},1032,["label","name"]))),128))]),_:1},8,["modelValue"])]),_:1},8,["modelValue"])])}}});export{W as _};
