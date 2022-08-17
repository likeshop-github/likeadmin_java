import{_ as b}from"./index.246dddc5.js";import{y as A,A as D,B as V,V as B,u as E}from"./element-plus.2e2d06fe.js";import{_ as w}from"./picker.73917572.js";import{a as k,b as h}from"./website.c2a5d01c.js";import{d as y,r as j,a0 as x,ae as q,o as s,c as U,V as t,M as u,a as i,O as N,L as I,T as R}from"./@vue.791b8507.js";import"./index.4a9ec79b.js";import"./@vueuse.f02d1475.js";import"./lodash.b68d77aa.js";import"./axios.2d915936.js";import"./vue-router.253c1a48.js";import"./pinia.4792d4cc.js";import"./vue-demi.bfae2336.js";import"./css-color-function.a8f9466d.js";import"./color.903ca10f.js";import"./clone.9d64bb7a.js";import"./color-convert.69e17089.js";import"./color-string.e356f5de.js";import"./color-name.e7a4e1d3.js";import"./@element-plus.501b100e.js";import"./nprogress.a96d99f2.js";import"./echarts.6ad8c478.js";import"./zrender.f91f2f01.js";import"./highlight.js.4ebdf9a4.js";import"./@highlightjs.47e0d2e4.js";import"./dayjs.66926594.js";import"./lodash-es.29c53eac.js";import"./async-validator.fb49d0f5.js";import"./@ctrl.82a509e0.js";import"./@popperjs.36402333.js";import"./escape-html.e5dfadb9.js";import"./normalize-wheel-es.8aeb3683.js";import"./index.16352aaf.js";import"./index.2a1a3be0.js";import"./usePaging.dcef87dc.js";import"./index.8243f710.js";import"./index.vue_vue_type_script_setup_true_lang.1f36493b.js";import"./vue3-video-play.897cd1af.js";import"./vuedraggable.82b0d187.js";import"./vue.c37e717a.js";import"./sortablejs.cd7e2c7e.js";const T={class:"website-information"},W={class:"w-80"},L=i("div",{class:"form-tips"},"\u5EFA\u8BAE\u5C3A\u5BF8\uFF1A100*100\u50CF\u7D20\uFF0C\u652F\u6301jpg\uFF0Cjpeg\uFF0Cpng\u683C\u5F0F",-1),M=i("div",{class:"form-tips"},"\u5EFA\u8BAE\u5C3A\u5BF8\uFF1A200*200\u50CF\u7D20\uFF0C\u652F\u6301jpg\uFF0Cjpeg\uFF0Cpng\u683C\u5F0F",-1),O=i("div",{class:"form-tips"},"\u5EFA\u8BAE\u5C3A\u5BF8\uFF1A400*400\u50CF\u7D20\uFF0C\u652F\u6301jpg\uFF0Cjpeg\uFF0Cpng\u683C\u5F0F",-1),S=R("\u4FDD\u5B58"),xo=y({__name:"information",setup(z){const n=j(),o=x({name:"",favicon:"",logo:"",backdrop:""}),d={name:[{required:!0,message:"\u8BF7\u8F93\u5165\u7F51\u7AD9\u540D\u79F0",trigger:["blur"]}]},p=async()=>{const a=await k();for(const e in o)o[e]=a[e]},F=async()=>{var a;await((a=n.value)==null?void 0:a.validate()),await h(o),p()};return p(),(a,e)=>{const _=A,l=D,m=w,c=V,f=B,g=E,C=b,v=q("perms");return s(),U("div",T,[t(f,{shadow:"never",class:"!border-none"},{default:u(()=>[t(c,{ref_key:"formRef",ref:n,rules:d,model:o,"label-width":"120px"},{default:u(()=>[t(l,{label:"\u7F51\u7AD9\u540D\u79F0",prop:"name"},{default:u(()=>[i("div",W,[t(_,{modelValue:o.name,"onUpdate:modelValue":e[0]||(e[0]=r=>o.name=r),placeholder:"\u8BF7\u8F93\u5165\u7F51\u7AD9\u540D\u79F0",maxlength:"30","show-word-limit":""},null,8,["modelValue"])])]),_:1}),t(l,{label:"\u7F51\u7AD9\u56FE\u6807",prop:"favicon",required:""},{default:u(()=>[i("div",null,[t(m,{modelValue:o.favicon,"onUpdate:modelValue":e[1]||(e[1]=r=>o.favicon=r),limit:1},null,8,["modelValue"]),L])]),_:1}),t(l,{label:"\u7F51\u7AD9logo",prop:"logo",required:""},{default:u(()=>[i("div",null,[t(m,{modelValue:o.logo,"onUpdate:modelValue":e[2]||(e[2]=r=>o.logo=r),limit:1},null,8,["modelValue"]),M])]),_:1}),t(l,{label:"\u767B\u5F55\u9875\u5E7F\u544A\u56FE",prop:"backdrop",required:""},{default:u(()=>[i("div",null,[t(m,{modelValue:o.backdrop,"onUpdate:modelValue":e[3]||(e[3]=r=>o.backdrop=r),limit:1},null,8,["modelValue"]),O])]),_:1})]),_:1},8,["model"])]),_:1}),N((s(),I(C,null,{default:u(()=>[t(g,{type:"primary",onClick:F},{default:u(()=>[S]),_:1})]),_:1})),[[v,["setting:website:save"]]])])}}});export{xo as default};