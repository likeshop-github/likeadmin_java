import{T as y,E as b}from"./@wangeditor.988960a0.js";import{_ as V}from"./picker.6a412a5d.js";import{g as m}from"./index.53063276.js";import{d as w,s as f,r as x,e as c,E as k,o as E,c as U,V as i,u as t,k as B,$ as R}from"./@vue.cab01781.js";const F=w({__name:"index",props:{modelValue:{default:""},mode:{default:"default"},height:{default:"100%"},width:{default:"auto"},toolbarConfig:{default:()=>({})}},emits:["update:modelValue"],setup(l,{emit:p}){const a=l,d=f(),n=f(),r=x("");let s;const g={MENU_CONF:{uploadImage:{customBrowseAndUpload(e){var o;r.value="image",(o=n.value)==null||o.showPopup(-1),s=e}},uploadVideo:{customBrowseAndUpload(e){var o;r.value="video",(o=n.value)==null||o.showPopup(-1),s=e}}}},h=c(()=>({height:m(a.height),width:m(a.width)})),u=c({get(){return a.modelValue},set(e){p("update:modelValue",e)}}),v=e=>{e.forEach(o=>{s(o)})};k(()=>{const e=d.value;e!=null&&e.destroy()});const _=e=>{d.value=e};return(e,o)=>(E(),U("div",{class:"border border-br flex flex-col",style:R(t(h))},[i(t(y),{class:"border-b border-br",editor:t(d),defaultConfig:l.toolbarConfig,mode:l.mode},null,8,["editor","defaultConfig","mode"]),i(t(b),{class:"overflow-y-auto flex-1",modelValue:t(u),"onUpdate:modelValue":o[0]||(o[0]=C=>B(u)?u.value=C:null),defaultConfig:g,mode:l.mode,onOnCreated:_},null,8,["modelValue","mode"]),i(V,{ref_key:"materialPickerRef",ref:n,type:r.value,limit:-1,"hidden-upload":"",onChange:v},null,8,["type"])],4))}});export{F as _};
