import{d as e,V as a,z as o,m as l,o as s,c as t,w as r,b as d,l as u,s as m,t as i,ak as p,al as c,aw as f,ai as n,k as b,r as _,a as x,y as w}from"./index.2197fbbc.js";import{a as V,_ as h}from"./u-form-item.3fbe7e70.js";import{_ as v}from"./u-verification-code.f550fc49.js";import{_ as y}from"./u-form.50322a8f.js";import{_ as g}from"./u-button.3c5095f3.js";import{_ as j}from"./plugin-vue_export-helper.21dcd24c.js";import"./u-icon.da63fc7c.js";import"./emitter.5b880544.js";var $=j(e({__name:"forget_pwd",setup(e){const j=a(),$=o(""),k=l({mobile:"",code:"",password:"",password2:""}),B=e=>{$.value=e},C=async()=>{var e,a;k.mobile&&(null==(e=j.value)?void 0:e.canGetCode)&&(await p({scene:c.FIND_PASSWORD,mobile:k.mobile}),uni.$u.toast("发送成功"),null==(a=j.value)||a.start())},U=async()=>k.mobile?k.password?k.password2?k.password!=k.password2?uni.$u.toast("两次输入的密码不一致"):(await f(k),uni.$u.toast("操作成功"),void setTimeout((()=>{n()}),1e3)):uni.$u.toast("请输入确认密码"):uni.$u.toast("请输入密码"):uni.$u.toast("请输入手机号码");return(e,a)=>{const o=b,l=_(x("u-input"),V),p=_(x("u-form-item"),h),c=_(x("u-verification-code"),v),f=w,n=_(x("u-form"),y),D=_(x("u-button"),g);return s(),t(o,{class:"register bg-white min-h-full flex flex-col items-center px-[40rpx] pt-[100rpx] box-border"},{default:r((()=>[d(o,{class:"w-full"},{default:r((()=>[d(o,{class:"text-2xl font-medium mb-[60rpx]"},{default:r((()=>[u("忘记登录密码")])),_:1}),d(n,{borderBottom:"","label-width":150},{default:r((()=>[d(p,{label:"手机号",borderBottom:""},{default:r((()=>[d(l,{class:"flex-1",modelValue:k.mobile,"onUpdate:modelValue":a[0]||(a[0]=e=>k.mobile=e),border:!1,placeholder:"请输入手机号码"},null,8,["modelValue"])])),_:1}),d(p,{label:"验证码",borderBottom:""},{default:r((()=>[d(l,{class:"flex-1",modelValue:k.code,"onUpdate:modelValue":a[1]||(a[1]=e=>k.code=e),placeholder:"请输入验证码",border:!1},null,8,["modelValue"]),d(o,{class:"border-l border-solid border-0 border-light pl-3 text-muted leading-4 ml-3 w-[180rpx]",onClick:C},{default:r((()=>[d(c,{ref_key:"uCodeRef",ref:j,seconds:60,onChange:B,"change-text":"x秒"},null,512),d(f,{class:m(k.mobile?"text-primary":"text-muted")},{default:r((()=>[u(i($.value),1)])),_:1},8,["class"])])),_:1})])),_:1}),d(p,{label:"新密码",borderBottom:""},{default:r((()=>[d(l,{class:"flex-1",type:"password",modelValue:k.password,"onUpdate:modelValue":a[2]||(a[2]=e=>k.password=e),placeholder:"6-20位数字+字母或符号组合",border:!1},null,8,["modelValue"])])),_:1}),d(p,{label:"确认密码",borderBottom:""},{default:r((()=>[d(l,{class:"flex-1",type:"password",modelValue:k.password2,"onUpdate:modelValue":a[3]||(a[3]=e=>k.password2=e),placeholder:"再次输入新密码",border:!1},null,8,["modelValue"])])),_:1})])),_:1}),d(o,{class:"mt-[100rpx]"},{default:r((()=>[d(D,{type:"primary",shape:"circle",onClick:U},{default:r((()=>[u(" 确定 ")])),_:1})])),_:1})])),_:1})])),_:1})}}}),[["__scopeId","data-v-d7bacc08"]]);export{$ as default};
