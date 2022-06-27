var V=Object.defineProperty;var F=Object.getOwnPropertySymbols;var y=Object.prototype.hasOwnProperty,D=Object.prototype.propertyIsEnumerable;var v=(t,l,o)=>l in t?V(t,l,{enumerable:!0,configurable:!0,writable:!0,value:o}):t[l]=o,w=(t,l)=>{for(var o in l||(l={}))y.call(l,o)&&v(t,o,l[o]);if(F)for(var o of F(l))D.call(l,o)&&v(t,o,l[o]);return t};import{m as b}from"./index.2f4cfc4d.js";import{F as h}from"./index.fe633e30.js";import{u as k,F as U,G as M}from"./index.b9e467ba.js";import{d as x,y as _,X as S,A as q,r as i,a as z,i as a,w as r,o as I,_ as N,k as R,E as d}from"./vendor.26ab8f26.js";import"./index.d307e561.js";import"./pages.de166038.js";import"./index.fd9bc456.js";const G={class:"personal-data"},T=R("\u4FDD\u5B58"),P=x({setup(t){const{store:l}=k(),o=_(),e=_({avatar:"",username:"",nickname:"",password_old:"",password:"",password_confirm:""}),B=S({avatar:[{required:!0,message:"\u5934\u50CF\u4E0D\u80FD\u4E3A\u7A7A",trigger:["change"]}],nickname:[{required:!0,message:"\u8BF7\u8F93\u5165\u540D\u79F0",trigger:["blur"]}]}),f=async()=>{let n=await U();e.value=n==null?void 0:n.user},c=async()=>{if(e.value.password_old||e.value.password||e.value.password_confirm){if(!e.value.password_old)return d({type:"error",message:"\u8BF7\u8F93\u5165\u5F53\u524D\u5BC6\u7801"});if(!e.value.password)return d({type:"error",message:"\u8BF7\u8F93\u5165\u65B0\u7684\u5BC6\u7801"});if(!e.value.password_confirm)return d({type:"error",message:"\u8BF7\u8F93\u5165\u786E\u5B9A\u5BC6\u7801"});if(e.value.password_confirm!=e.value.password)return d({type:"error",message:"\u4E24\u6B21\u8F93\u5165\u7684\u5BC6\u7801\u4E0D\u4E00\u6837"})}if(e.value.password_old&&e.value.password&&e.value.password_confirm){if(e.value.password_old.length<6||e.value.password_old.length>32)return d({type:"error",message:"\u5BC6\u7801\u957F\u5EA6\u57286\u523032\u4E4B\u95F4"});if(e.value.password.length<6||e.value.password.length>32)return d({type:"error",message:"\u5BC6\u7801\u957F\u5EA6\u57286\u523032\u4E4B\u95F4"});if(e.value.password_confirm.length<6||e.value.password_confirm.length>32)return d({type:"error",message:"\u5BC6\u7801\u957F\u5EA6\u57286\u523032\u4E4B\u95F4"})}await M(w({},e.value)),f(),l.dispatch("user/getUser")},E=n=>{!n||n.validate(u=>{if(!u)return!1;d({type:"success",message:"\u4FDD\u5B58\u6210\u529F"}),c()})};return q(()=>{f()}),(n,u)=>{const p=i("el-form-item"),m=i("el-input"),A=i("el-form"),C=i("el-card"),g=i("el-button");return I(),z("div",G,[a(C,{class:"m-t-15",shadow:"never"},{default:r(()=>[a(A,{ref_key:"formRefs",ref:o,class:"ls-form",model:e.value,rules:N(B),"label-width":"150px",size:"small"},{default:r(()=>[a(p,{label:"\u5934\u50CF\uFF1A",prop:"avatar"},{default:r(()=>[a(b,{modelValue:e.value.avatar,"onUpdate:modelValue":u[0]||(u[0]=s=>e.value.avatar=s),limit:1},null,8,["modelValue"])]),_:1}),a(p,{label:"\u8D26\u53F7\uFF1A",prop:"username"},{default:r(()=>[a(m,{modelValue:e.value.username,"onUpdate:modelValue":u[1]||(u[1]=s=>e.value.username=s),placeholder:"",disabled:""},null,8,["modelValue"])]),_:1}),a(p,{label:"\u540D\u79F0\uFF1A",prop:"nickname"},{default:r(()=>[a(m,{modelValue:e.value.nickname,"onUpdate:modelValue":u[2]||(u[2]=s=>e.value.nickname=s),placeholder:"\u8BF7\u8F93\u5165\u540D\u79F0"},null,8,["modelValue"])]),_:1}),a(p,{label:"\u5F53\u524D\u5BC6\u7801\uFF1A",prop:"password_old"},{default:r(()=>[a(m,{modelValue:e.value.password_old,"onUpdate:modelValue":u[3]||(u[3]=s=>e.value.password_old=s),modelModifiers:{trim:!0},placeholder:"\u4FEE\u6539\u5BC6\u7801\u65F6\u5FC5\u586B, \u4E0D\u4FEE\u6539\u5BC6\u7801\u65F6\u7559\u7A7A",type:"password","show-password":""},null,8,["modelValue"])]),_:1}),a(p,{label:"\u65B0\u7684\u5BC6\u7801\uFF1A",prop:"password"},{default:r(()=>[a(m,{modelValue:e.value.password,"onUpdate:modelValue":u[4]||(u[4]=s=>e.value.password=s),modelModifiers:{trim:!0},placeholder:"\u4FEE\u6539\u5BC6\u7801\u65F6\u5FC5\u586B, \u4E0D\u4FEE\u6539\u5BC6\u7801\u65F6\u7559\u7A7A",type:"password","show-password":""},null,8,["modelValue"])]),_:1}),a(p,{label:"\u786E\u5B9A\u5BC6\u7801\uFF1A",prop:"password_confirm"},{default:r(()=>[a(m,{modelValue:e.value.password_confirm,"onUpdate:modelValue":u[5]||(u[5]=s=>e.value.password_confirm=s),modelModifiers:{trim:!0},placeholder:"\u4FEE\u6539\u5BC6\u7801\u65F6\u5FC5\u586B, \u4E0D\u4FEE\u6539\u5BC6\u7801\u65F6\u7559\u7A7A",type:"password","show-password":""},null,8,["modelValue"])]),_:1})]),_:1},8,["model","rules"])]),_:1}),a(h,null,{default:r(()=>[a(g,{type:"primary",size:"small",onClick:u[6]||(u[6]=s=>E(o.value))},{default:r(()=>[T]),_:1})]),_:1})])}}});export{P as default};
