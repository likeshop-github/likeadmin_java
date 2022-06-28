var w=Object.defineProperty,I=Object.defineProperties;var Y=Object.getOwnPropertyDescriptors;var S=Object.getOwnPropertySymbols;var R=Object.prototype.hasOwnProperty,Q=Object.prototype.propertyIsEnumerable;var v=(t,l,n)=>l in t?w(t,l,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[l]=n,V=(t,l)=>{for(var n in l||(l={}))R.call(l,n)&&v(t,n,l[n]);if(S)for(var n of S(l))Q.call(l,n)&&v(t,n,l[n]);return t},h=(t,l)=>I(t,Y(l));import{u as x}from"./index.195d4b6e.js";import{F as T}from"./index.cd7b3ca1.js";import{a as $,b as z}from"./setting.948668ec.js";import{d as G,y as C,A as M,r as c,a as p,i as e,w as a,_ as u,b as A,e as F,o as i,$ as j,f as K,k as D}from"./vendor.26ab8f26.js";var m=(t=>(t.LOCAL="local",t.QINIU="qiniu",t.ALIYUN="aliyun",t.QCLOUD="qcloud",t))(m||{});const H={class:"storage-setting"},J={class:"card-content m-t-24"},P={key:0},W={key:1},X={key:2},Z={key:3},uu={key:4,class:"muted xs m-r-16"},eu={key:0},tu=K("div",{class:"muted xs m-r-16"}," \u8BF7\u8865\u5168http://\u6216https://\uFF0C\u4F8B\u5982https://static.cloud.com ",-1),lu=D("\u505C\u7528"),ou=D("\u542F\u7528"),au=D("\u4FDD\u5B58"),Fu=G({setup(t){const{route:l,router:n}=x();let s=C(""),r=C({bucket:"",accessKey:"",secretKey:"",domain:"",region:"",status:0}),O=C({bucket:[{required:!0,message:"\u8BF7\u8F93\u5165\u5B58\u50A8\u7A7A\u95F4\u540D\u79F0",trigger:"blur"}],accessKey:[{required:!0,message:"\u8BF7\u8F93\u5165ACCESS_KEY",trigger:"blur"}],secretKey:[{required:!0,message:"\u8BF7\u8F93\u5165SECRET_KEY",trigger:"blur"}],domain:[{required:!0,message:"\u8BF7\u8F93\u5165\u7A7A\u95F4\u57DF\u540D",trigger:"blur"}],region:[{required:!0,message:"\u8BF7\u8F93\u5165REGION",trigger:"blur"}]});const b=C(null),U=()=>{var B;(B=b.value)==null||B.validate(o=>{!o||z(h(V({},r.value),{alias:s.value})).then(f=>{setTimeout(()=>n.back(),500)}).catch(f=>{console.log("err",f)})})},L=async()=>{r.value=await $({alias:s.value})};return M(async()=>{l.query.alias&&(console.log("route.query.alias",l.query.alias),s.value=l.query.alias,console.log("alias.value",s.value)),await L()}),(B,o)=>{const f=c("el-page-header"),y=c("el-card"),g=c("el-alert"),_=c("el-form-item"),E=c("el-input"),k=c("el-radio"),N=c("el-radio-group"),q=c("el-button");return i(),p("div",H,[e(y,{shadow:"never"},{default:a(()=>[e(f,{onBack:o[0]||(o[0]=d=>B.$router.go(-1)),content:"\u5B58\u50A8\u8BBE\u7F6E"})]),_:1}),u(s)!==u(m).LOCAL?(i(),A(y,{key:0,shadow:"never",class:"m-t-15"},{default:a(()=>[u(s)==u(m).QINIU?(i(),A(g,{key:0,title:"\u6E29\u99A8\u63D0\u793A\uFF1A\u5207\u6362\u4E03\u725B\u4E91\u5B58\u50A8\u540E\uFF0C\u7D20\u6750\u5E93\u9700\u8981\u91CD\u65B0\u4E0A\u4F20\u81F3\u4E03\u725B\u4E91\u3002",type:"primary",closable:!1,"show-icon":""})):F("",!0),u(s)==u(m).ALIYUN?(i(),A(g,{key:1,title:"\u6E29\u99A8\u63D0\u793A\uFF1A\u5207\u6362\u963F\u91CC\u4E91OSS\u540E\uFF0C\u7D20\u6750\u5E93\u9700\u8981\u91CD\u65B0\u4E0A\u4F20\u81F3\u963F\u91CC\u4E91OSS\u3002",type:"primary",closable:!1,"show-icon":""})):F("",!0),u(s)==u(m).QCLOUD?(i(),A(g,{key:2,title:"\u6E29\u99A8\u63D0\u793A\uFF1A\u5207\u6362\u817E\u8BAF\u4E91OSS\u540E\uFF0C\u7D20\u6750\u5E93\u9700\u8981\u91CD\u65B0\u4E0A\u4F20\u81F3\u817E\u8BAF\u4E91OSS\u3002",type:"primary",closable:!1,"show-icon":""})):F("",!0)]),_:1})):F("",!0),e(y,{shadow:"never",class:"m-t-15"},{default:a(()=>[e(u(j),{ref_key:"formRef",ref:b,model:u(r),rules:u(O),"label-width":"240px",size:"small",class:"ls-form"},{default:a(()=>[K("div",J,[e(_,{label:"\u5B58\u50A8\u65B9\u5F0F"},{default:a(()=>[u(s)===u(m).LOCAL?(i(),p("div",P,"\u672C\u5730\u5B58\u50A8")):F("",!0),u(s)===u(m).QINIU?(i(),p("div",W,"\u4E03\u725B\u4E91\u5B58\u50A8")):F("",!0),u(s)===u(m).ALIYUN?(i(),p("div",X,"\u963F\u91CC\u4E91OSS")):F("",!0),u(s)===u(m).QCLOUD?(i(),p("div",Z,"\u817E\u8BAF\u4E91OSS")):F("",!0),u(s)===u(m).LOCAL?(i(),p("div",uu," \u672C\u5730\u5B58\u50A8\u65B9\u5F0F\u4E0D\u9700\u8981\u914D\u7F6E\u5176\u4ED6\u53C2\u6570 ")):F("",!0)]),_:1})]),u(s)!=="local"?(i(),p("div",eu,[e(_,{label:" \u5B58\u50A8\u7A7A\u95F4\u540D\u79F0(Bucket)",prop:"bucket"},{default:a(()=>[e(E,{modelValue:u(r).bucket,"onUpdate:modelValue":o[1]||(o[1]=d=>u(r).bucket=d),placeholder:"\u8BF7\u8F93\u5165\u5B58\u50A8\u7A7A\u95F4\u540D\u79F0(Bucket)"},null,8,["modelValue"])]),_:1}),e(_,{label:"ACCESS_KEY\uFF08AK\uFF09",prop:"accessKey"},{default:a(()=>[e(E,{modelValue:u(r).accessKey,"onUpdate:modelValue":o[2]||(o[2]=d=>u(r).accessKey=d),placeholder:"\u8BF7\u8F93\u5165ACCESS_KEY"},null,8,["modelValue"])]),_:1}),e(_,{label:"SECRET_KEY\uFF08SK\uFF09",prop:"secretKey"},{default:a(()=>[e(E,{modelValue:u(r).secretKey,"onUpdate:modelValue":o[3]||(o[3]=d=>u(r).secretKey=d),placeholder:"\u8BF7\u8F93\u5165SECRET_KEY"},null,8,["modelValue"])]),_:1}),e(_,{label:"\u7A7A\u95F4\u57DF\u540D\uFF08Domain\uFF09",prop:"domain"},{default:a(()=>[e(E,{modelValue:u(r).domain,"onUpdate:modelValue":o[4]||(o[4]=d=>u(r).domain=d),placeholder:"\u8BF7\u8F93\u5165\u7A7A\u95F4\u57DF\u540D"},null,8,["modelValue"]),tu]),_:1}),u(s)==u(m).QCLOUD?(i(),A(_,{key:0,label:"REGION",prop:"region"},{default:a(()=>[e(E,{modelValue:u(r).region,"onUpdate:modelValue":o[5]||(o[5]=d=>u(r).region=d),placeholder:"\u8BF7\u8F93\u5165region"},null,8,["modelValue"])]),_:1})):F("",!0)])):F("",!0),e(_,{label:"\u72B6\u6001",prop:"status"},{default:a(()=>[e(N,{class:"m-r-16",modelValue:u(r).status,"onUpdate:modelValue":o[6]||(o[6]=d=>u(r).status=d)},{default:a(()=>[e(k,{label:0},{default:a(()=>[lu]),_:1}),e(k,{label:1},{default:a(()=>[ou]),_:1})]),_:1},8,["modelValue"])]),_:1})]),_:1},8,["model","rules"])]),_:1}),e(T,null,{default:a(()=>[e(q,{type:"primary",size:"small",onClick:U},{default:a(()=>[au]),_:1})]),_:1})])}}});export{Fu as default};
