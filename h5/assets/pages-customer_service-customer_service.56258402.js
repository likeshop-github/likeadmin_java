import{d as e,u as t,r as s,a,o as n,c,w as r,b as o,g as l,l as u,t as i,h as m,a9 as p,k as f,m as d,e as x,f as y,F as _}from"./index.a0d3e9bc.js";import{_ as b}from"./u-image.9e55ab2c.js";import{_ as g}from"./u-button.ed70d790.js";import{a as h}from"./shop.eb8c200c.js";import"./u-icon.c61604db.js";import"./plugin-vue_export-helper.21dcd24c.js";async function v(e){if(!e)return uni.$u.toast("图片错误");uni.$u.toast("长按图片保存")}const j=e({__name:"customer-service",props:{content:{type:Object,default:()=>({})},styles:{type:Object,default:()=>({})}},setup(e){const{getImageUrl:d}=t();return(t,x)=>{const y=s(a("u-image"),b),_=f,h=s(a("u-button"),g);return n(),c(_,{class:"customer-service bg-white flex flex-col justify-center items-center mx-[36rpx] mt-[20rpx] rounded-lg px-[110rpx] pt-[100rpx] pb-[160rpx]"},{default:r((()=>[o(y,{width:"280",height:"280",src:l(d)(e.content.qrcode)},null,8,["src"]),e.content.title?(n(),c(_,{key:0,class:"text-lg mt-[14rpx] font-medium"},{default:r((()=>[u(i(e.content.title),1)])),_:1})):m("v-if",!0),e.content.time?(n(),c(_,{key:1,class:"text-content mt-[40rpx]"},{default:r((()=>[u("服务时间："+i(e.content.time),1)])),_:1})):m("v-if",!0),e.content.mobile?(n(),c(_,{key:2,class:"text-content mt-[14rpx] flex flex-wrap"},{default:r((()=>[u(" 客服电话："+i(e.content.mobile)+" ",1),p("a",{class:"ml-[10rpx] phone text-muted underline",href:"tel:"+e.content.mobile}," 拨打 ",8,["href"])])),_:1})):m("v-if",!0),o(_,{class:"mt-[100rpx] w-full"},{default:r((()=>[o(h,{type:"primary",shape:"circle",onClick:x[0]||(x[0]=t=>l(v)(l(d)(e.content.qrcode)))},{default:r((()=>[u(" 保存二维码图片 ")])),_:1})])),_:1})])),_:1})}}}),k=e({__name:"customer_service",setup(e){const t=d({pages:[]});return(async()=>{const e=await h({id:3});t.pages=JSON.parse(e.pages)})(),(e,o)=>{const l=s(a("w-customer-service"),j),u=f;return n(),c(u,{class:"customer-service"},{default:r((()=>[(n(!0),x(_,null,y(t.pages,((e,t)=>(n(),c(u,{key:t},{default:r((()=>["customer-service"==e.name?(n(),c(l,{key:0,content:e.content,styles:e.styles},null,8,["content","styles"])):m("v-if",!0)])),_:2},1024)))),128))])),_:1})}}});export{k as default};
