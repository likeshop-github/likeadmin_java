import{P as k}from"./index.f69f13bd.js";import{E as R}from"./element-plus.f5eb07a0.js";import{F as N,_ as B,a as M}from"./index.cbe8a236.js";import{u as O,d as Q,b as j}from"./index.1256601b.js";import{_ as q}from"./index.5d434689.js";import{D as G}from"./vuedraggable.5917840d.js";import{f as H}from"./@vueuse.724ed0af.js";import{d as J,r as i,a4 as K,e as S,w as W,D as z,n as X,a5 as U,o as Y,c as Z,V as n,a9 as x,M as p,a as s,Q as P,_ as I,O as ee,P as le,I as ae,$ as te,T as oe,b9 as se,b8 as ie}from"./@vue.cab01781.js";const ne=J({components:{Popup:k,Draggable:G,FileItem:N,Material:B,Preview:M},props:{modelValue:{type:[String,Array],default:()=>[]},type:{type:String,default:"image"},size:{type:String,default:"100px"},fileSize:{type:String,default:"100px"},limit:{type:Number,default:1},disabled:{type:Boolean,default:!1},hiddenUpload:{type:Boolean,default:!1},uploadClass:{type:String,default:""},excludeDomain:{type:Boolean,default:!1}},emits:["change","update:modelValue"],setup(e,{emit:t}){const h=i(),_=i(),g=i(""),w=i(!1),a=i([]),m=i([]),r=i(!0),c=i(-1),{disabled:y,limit:u,modelValue:C}=K(e),{getImageUrl:b}=O(),o=S(()=>{switch(e.type){case"image":return"\u56FE\u7247";case"video":return"\u89C6\u9891";default:return""}}),f=S(()=>e.limit-a.value.length>0),v=S(()=>r.value?u.value==-1?null:u.value-a.value.length:1),E=H(()=>{const l=m.value.map(d=>e.excludeDomain?d.path:d.uri);r.value?a.value=[...a.value,...l]:a.value.splice(c.value,1,l.shift()),V()},1e3,!1),A=l=>{var d;y.value||(l>=0?(r.value=!1,c.value=l):r.value=!0,(d=h.value)==null||d.open())},F=l=>{m.value=l},V=()=>{const l=u.value!=1?a.value:a.value[0]||"";t("update:modelValue",l),t("change",l),$()},T=l=>{a.value.splice(l,1),V()},L=l=>{g.value=l,w.value=!0},$=()=>{X(()=>{var l;e.hiddenUpload&&(a.value=[]),(l=_.value)==null||l.clearSelect()})};return W(C,l=>{a.value=Array.isArray(l)?l:l==""?[]:[l]},{immediate:!0}),z("limit",e.limit),z("hiddenUpload",e.hiddenUpload),{popupRef:h,materialRef:_,fileList:a,tipsText:o,handleConfirm:E,meterialLimit:v,showUpload:f,showPopup:A,selectChange:F,deleteImg:T,previewUrl:g,showPreview:w,handlePreview:L,handleClose:$,getImageUrl:b}}});const D=e=>(se("data-v-d1489be1"),e=e(),ie(),e),re={class:"material-select"},ue=["onClick"],de={class:"operation-btns text-xs text-center"},pe=D(()=>s("span",null,"\u4FEE\u6539",-1)),me=oe(" | "),ce=["onClick"],fe=D(()=>s("span",null,"\u6DFB\u52A0",-1)),ve={class:"material-wrap"};function he(e,t,h,_,g,w){const a=U("file-item"),m=q,r=U("draggable"),c=j,y=B,u=R,C=k,b=U("preview");return Y(),Z("div",re,[n(C,{ref:"popupRef",width:"830px","custom-class":"body-padding",title:`\u9009\u62E9${e.tipsText}`,onConfirm:e.handleConfirm,onClose:e.handleClose},x({default:p(()=>[n(u,null,{default:p(()=>[s("div",ve,[n(y,{ref:"materialRef",type:e.type,"file-size":e.fileSize,limit:e.meterialLimit,onChange:e.selectChange},null,8,["type","file-size","limit","onChange"])])]),_:1})]),_:2},[e.hiddenUpload?void 0:{name:"trigger",fn:p(()=>[s("div",{class:"material-select__trigger clearfix",onClick:t[2]||(t[2]=I(()=>{},["stop"]))},[n(r,{class:"draggable",modelValue:e.fileList,"onUpdate:modelValue":t[0]||(t[0]=o=>e.fileList=o),animation:"300","item-key":"id"},{item:p(({element:o,index:f})=>[s("div",{class:P(["material-preview",{"is-disabled":e.disabled,"is-one":e.limit==1}]),onClick:v=>e.showPopup(f)},[n(m,{onClose:v=>e.deleteImg(f)},{default:p(()=>[n(a,{uri:e.excludeDomain?e.getImageUrl(o):o,"file-size":e.size,type:e.type},null,8,["uri","file-size","type"])]),_:2},1032,["onClose"]),s("div",de,[pe,me,s("span",{onClick:I(v=>e.handlePreview(o),["stop"])},"\u67E5\u770B",8,ce)])],10,ue)]),_:1},8,["modelValue"]),ee(s("div",{class:P(["material-upload",{"is-disabled":e.disabled,"is-one":e.limit==1,[e.uploadClass]:!0}]),onClick:t[1]||(t[1]=o=>e.showPopup(-1))},[ae(e.$slots,"upload",{},()=>[s("div",{class:"upload-btn",style:te({width:e.size,height:e.size})},[n(c,{size:25,name:"el-icon-Plus"}),fe],4)],!0)],2),[[le,e.showUpload]])])])}]),1032,["title","onConfirm","onClose"]),n(b,{modelValue:e.showPreview,"onUpdate:modelValue":t[3]||(t[3]=o=>e.showPreview=o),url:e.previewUrl,type:e.type},null,8,["modelValue","url","type"])])}const Ve=Q(ne,[["render",he],["__scopeId","data-v-d1489be1"]]);export{Ve as _};