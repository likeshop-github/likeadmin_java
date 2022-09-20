import{_ as T}from"./index.52704a45.js";import{r as g,f as H,b as N,d as R}from"./index.7e85ebc5.js";import{O as z,P as L,D as O,F as $,I as q,w as G,C as J,J as K,K as M}from"./element-plus.151049e5.js";import{d as C,a0 as P,e as W,ag as j,o as i,c as p,V as e,M as t,a as o,O as E,L as F,W as Q,a8 as X,U as Y,u as Z,T as u,b9 as ee,b8 as te}from"./@vue.cab01781.js";import"./@vueuse.724ed0af.js";import"./lodash.b68d77aa.js";import"./axios.2d915936.js";import"./vue-router.5046cc50.js";import"./pinia.e85e8286.js";import"./vue-demi.bfae2336.js";import"./css-color-function.a8f9466d.js";import"./color.903ca10f.js";import"./clone.9d64bb7a.js";import"./color-convert.69e17089.js";import"./color-string.e356f5de.js";import"./color-name.e7a4e1d3.js";import"./@element-plus.92b4185f.js";import"./nprogress.a96d99f2.js";import"./vue-clipboard3.91d4fd5f.js";import"./clipboard.c0a70c0c.js";import"./echarts.6ad8c478.js";import"./zrender.f91f2f01.js";import"./highlight.js.4ebdf9a4.js";import"./@highlightjs.0ab41b7b.js";import"./lodash-es.29c53eac.js";import"./dayjs.66926594.js";import"./async-validator.fb49d0f5.js";import"./@ctrl.82a509e0.js";import"./@popperjs.36402333.js";import"./escape-html.e5dfadb9.js";import"./normalize-wheel-es.8aeb3683.js";function oe(){return g.get({url:"/setting/search/detail"})}function se(r){return g.post({url:"/setting/search/save",params:r})}const _=r=>(ee("data-v-b4577f10"),r=r(),te(),r),ae={class:"hot-search"},ne=u("\u5F00\u542F"),le=u("\u5173\u95ED"),re=_(()=>o("div",{class:"form-tips"},"\u9ED8\u8BA4\u5F00\u59CB\uFF0C\u5173\u95ED\u5219\u524D\u7AEF\u4E0D\u663E\u793A\u8BE5\u529F\u80FD",-1)),ce={class:"flex"},ie={class:"flex-1 w-3/5"},ue=u("\u6DFB\u52A0"),_e=u(" \u5220\u9664 "),de={class:"w-2/5 hot-search-phone"},me=_(()=>o("span",{class:"mb-4"},"- \u70ED\u641C\u9884\u89C8\u56FE -",-1)),pe={class:"hot-search-phone-content"},he={class:"search-com"},fe={class:"search-con flex items-center px-[15px]"},be=_(()=>o("span",{class:"ml-[5px]"},"\u8BF7\u8F93\u5165\u5173\u952E\u8BCD\u641C\u7D22",-1)),De=_(()=>o("div",{class:"hot-search-title"},"\u70ED\u95E8\u641C\u7D22",-1)),ve={class:"hot-search-text"},Ee=u("\u4FDD\u5B58"),Fe=C({name:"search"}),ge=C({...Fe,setup(r){const a=P({isHotSearch:1,list:[]}),x=W(()=>[...a.list].sort((n,l)=>l.sort-n.sort)),h=async()=>{try{const n=await oe();for(const l in a)a[l]=n[l]}catch(n){console.log("\u83B7\u53D6=>",n)}},B=()=>{a.list.push({name:"\u5173\u952E\u5B57",sort:0})},y=n=>{a.list.splice(n,1)},V=async()=>{try{await se(a),H.msgSuccess("\u64CD\u4F5C\u6210\u529F"),h()}catch(n){console.log("\u4FDD\u5B58=>",n)}};return h(),(n,l)=>{const f=z,w=L,S=O,k=$,b=q,d=G,D=J,m=K,I=M,U=N,A=T,v=j("perms");return i(),p("div",ae,[e(b,{class:"!border-none",shadow:"never"},{default:t(()=>[e(k,{ref:"formRef",model:a,"label-width":"100px"},{default:t(()=>[e(S,{label:"\u529F\u80FD\u72B6\u6001",style:{"margin-bottom":"0"}},{default:t(()=>[o("div",null,[e(w,{modelValue:a.isHotSearch,"onUpdate:modelValue":l[0]||(l[0]=s=>a.isHotSearch=s)},{default:t(()=>[e(f,{label:1},{default:t(()=>[ne]),_:1}),e(f,{label:0},{default:t(()=>[le]),_:1})]),_:1},8,["modelValue"]),re])]),_:1})]),_:1},8,["model"])]),_:1}),e(b,{class:"!border-none mt-4",shadow:"never"},{default:t(()=>[o("div",ce,[o("div",ie,[e(d,{type:"primary",class:"mb-4",onClick:B},{default:t(()=>[ue]),_:1}),e(I,{size:"large",data:a.list},{default:t(()=>[e(m,{label:"\u5173\u952E\u8BCD",prop:"describe","min-width":"160"},{default:t(({row:s})=>[e(D,{modelValue:s.name,"onUpdate:modelValue":c=>s.name=c,clearable:""},null,8,["modelValue","onUpdate:modelValue"])]),_:1}),e(m,{label:"\u6392\u5E8F",prop:"describe","min-width":"160"},{default:t(({row:s})=>[e(D,{modelValue:s.sort,"onUpdate:modelValue":c=>s.sort=c,type:"number"},null,8,["modelValue","onUpdate:modelValue"])]),_:1}),e(m,{label:"\u64CD\u4F5C","min-width":"80",fixed:"right"},{default:t(({$index:s})=>[E((i(),F(d,{type:"danger",link:"",onClick:c=>y(s)},{default:t(()=>[_e]),_:2},1032,["onClick"])),[[v,["setting:storage:edit"]]])]),_:1})]),_:1},8,["data"])]),o("div",de,[me,o("div",pe,[o("div",he,[o("div",fe,[e(U,{name:"el-icon-Search",size:17}),be])]),De,o("div",ve,[(i(!0),p(Q,null,X(Z(x),(s,c)=>(i(),p("span",{key:c},Y(s.name),1))),128))])])])])]),_:1}),E((i(),F(A,null,{default:t(()=>[e(d,{type:"primary",onClick:V},{default:t(()=>[Ee]),_:1})]),_:1})),[[v,["setting:search:save"]]])])}}});const et=R(ge,[["__scopeId","data-v-b4577f10"]]);export{et as default};
