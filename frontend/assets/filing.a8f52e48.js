import{_ as V}from"./index.246dddc5.js";import{y as k,A as y,u as A,B as x,V as U}from"./element-plus.2e2d06fe.js";import{f as _,b as N}from"./index.4a9ec79b.js";import{_ as I}from"./index.8243f710.js";import{g as L,s as S}from"./website.c2a5d01c.js";import{d as T,r as $,ae as M,o as u,c as d,V as e,M as o,W as O,a9 as P,L as f,a as t,O as W,T as F}from"./@vue.791b8507.js";import"./@vueuse.f02d1475.js";import"./dayjs.66926594.js";import"./axios.2d915936.js";import"./@element-plus.501b100e.js";import"./lodash-es.29c53eac.js";import"./async-validator.fb49d0f5.js";import"./@ctrl.82a509e0.js";import"./@popperjs.36402333.js";import"./escape-html.e5dfadb9.js";import"./normalize-wheel-es.8aeb3683.js";import"./lodash.b68d77aa.js";import"./vue-router.253c1a48.js";import"./pinia.4792d4cc.js";import"./vue-demi.bfae2336.js";import"./css-color-function.a8f9466d.js";import"./color.903ca10f.js";import"./clone.9d64bb7a.js";import"./color-convert.69e17089.js";import"./color-string.e356f5de.js";import"./color-name.e7a4e1d3.js";import"./nprogress.a96d99f2.js";import"./echarts.6ad8c478.js";import"./zrender.f91f2f01.js";import"./highlight.js.4ebdf9a4.js";import"./@highlightjs.47e0d2e4.js";const j={class:"website-filing"},q=t("div",{class:"mb-5"},"\u5E95\u90E8\u7248\u6743\u8BBE\u7F6E",-1),z={class:"bg-page py-4"},G={class:"w-80"},H={class:"w-80"},J=t("div",{class:"form-tips"},"\u8DF3\u8F6C\u94FE\u63A5\u4E0D\u8BBE\u7F6E\uFF0C\u5219\u4E0D\u8DF3\u8F6C",-1),K=F(" \u6DFB\u52A0 "),Q=F("\u4FDD\u5B58"),Ae=T({__name:"filing",setup(R){const a=$([{name:"",link:""}]),r=async()=>{const n=await L();!n.length||(a.value=n)},h=()=>{a.value.push({name:"",link:""})},v=n=>{if(a.value.length<=1)return _.msgError("\u81F3\u5C11\u4FDD\u7559\u4E00\u4E2A");a.value.splice(n,1)},E=async()=>{await S(a.value),_.msgSuccess("\u64CD\u4F5C\u6210\u529F"),r()};return r(),(n,X)=>{const i=k,m=y,g=I,D=N,p=A,C=x,w=U,B=V,b=M("perms");return u(),d("div",j,[e(w,{shadow:"never",class:"!border-none"},{default:o(()=>[q,e(C,{ref:"form",class:"ls-form","label-width":"100px"},{default:o(()=>[(u(!0),d(O,null,P(a.value,(s,c)=>(u(),f(g,{class:"mb-4",key:c,"show-close":a.value.length>1,onClose:l=>v(c)},{default:o(()=>[t("div",z,[e(m,{label:"\u663E\u793A\u540D\u79F0",prop:"name"},{default:o(()=>[t("div",G,[t("div",null,[e(i,{modelValue:s.name,"onUpdate:modelValue":l=>s.name=l,placeholder:"\u8BF7\u8F93\u5165\u540D\u79F0"},null,8,["modelValue","onUpdate:modelValue"])])])]),_:2},1024),e(m,{label:"\u8DF3\u8F6C\u94FE\u63A5",prop:"link"},{default:o(()=>[t("div",H,[t("div",null,[e(i,{modelValue:s.link,"onUpdate:modelValue":l=>s.link=l,placeholder:"\u8BF7\u8F93\u5165\u94FE\u63A5\uFF0C\u4F8B\u5982\uFF1Ahttp://www.beian.gov.cn"},null,8,["modelValue","onUpdate:modelValue"])]),J])]),_:2},1024)])]),_:2},1032,["show-close","onClose"]))),128)),t("div",null,[e(p,{type:"primary",onClick:h},{default:o(()=>[e(D,{name:"el-icon-Plus"}),K]),_:1})])]),_:1},512)]),_:1}),W((u(),f(B,null,{default:o(()=>[e(p,{type:"primary",onClick:E},{default:o(()=>[Q]),_:1})]),_:1})),[[b,["setting:copyright:save"]]])])}}});export{Ae as default};