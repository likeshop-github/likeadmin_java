import{d as e,V as a,z as s,o as t,c as r,w as l,b as o,e as d,f as u,F as c,k as p,r as i,a as m,l as n,t as f}from"./index.a5551c62.js";import{_ as g}from"./z-paging.014297cd.js";import{b as _}from"./recharge.243013a8.js";import"./plugin-vue_export-helper.21dcd24c.js";const x=e({__name:"recharge_record",setup(e){const x=a(),b=s([]),h=async(e,a)=>{try{const s=await _({page_no:e,page_size:a});x.value.complete(s.lists)}catch(s){x.value.complete(!1)}};return(e,a)=>{const s=p,_=i(m("z-paging"),g);return t(),r(_,{ref_key:"paging",ref:x,modelValue:b.value,"onUpdate:modelValue":a[0]||(a[0]=e=>b.value=e),onQuery:h,"show-loading-more-when-reload":!0},{default:l((()=>[o(s,{class:"pt-2.5"},{default:l((()=>[(t(!0),d(c,null,u(b.value,(e=>(t(),r(s,{key:e.id,class:"bg-white border-solid border-b border-0 border-light px-[26rpx] py-[24rpx]"},{default:l((()=>[o(s,{class:"flex justify-between"},{default:l((()=>[o(s,{class:"mr-2"},{default:l((()=>[n(f(e.tips),1)])),_:2},1024),o(s,{class:"text-lg text-primary"},{default:l((()=>[n(" +"+f(e.orderAmount),1)])),_:2},1024)])),_:2},1024),o(s,{class:"text-sm text-muted mr-1"},{default:l((()=>[n(f(e.createTime),1)])),_:2},1024)])),_:2},1024)))),128))])),_:1})])),_:1},8,["modelValue"])}}});export{x as default};
