import{d as e,z as a,aR as t,m as s,A as r,W as l,o as u,e as i,h as c,b as o,w as d,g as n,l as m,t as _,c as f,F as p,J as g,ai as x,r as y,a as h,y as v,k as w}from"./index.c21c4016.js";import{g as b,_ as j,a as k}from"./pay.8c1601a0.js";import{_ as R}from"./u-image.28bd5588.js";import{_ as O}from"./u-button.c1f56f61.js";import{_ as A}from"./plugin-vue_export-helper.21dcd24c.js";import"./u-icon.8be8eecc.js";var C=A(e({__name:"payment_result",setup(e){const A={succeed:{text:"支付成功",image:"/static/images/payment/icon_succeed.png"},waiting:{text:"等待支付",image:"/static/images/payment/icon_waiting.png"}},C=a(t.LOADING),E=a({id:"",from:""}),I=s({order:{}}),L=r((()=>{const e=!!I.pay_status;return A[e?"succeed":"waiting"]})),N=()=>{g({url:"/pages/index/index"})},z=()=>{if("recharge"===E.value.from)x()};return l((async e=>{try{if(!e.id)throw new Error("订单不存在");E.value=e,await new Promise(((e,a)=>{b({order_id:E.value.id,from:E.value.from}).then((a=>{Object.assign(I,a),e(a)})).catch((e=>{a(e)}))})),C.value=t.NORMAL}catch(a){console.log(a),C.value=t.ERROR}})),(e,a)=>{const t=y(h("u-empty"),j),s=y(h("u-image"),R),r=v,l=w,g=y(h("u-button"),O),x=y(h("page-status"),k);return u(),i(p,null,[c(" 页面状态 "),o(x,{status:C.value},{error:d((()=>[o(t,{text:"订单不存在",mode:"order"})])),default:d((()=>[o(l,{class:"payment-result p-[20rpx]"},{default:d((()=>[o(l,{class:"result bg-white p-[20rpx] rounded-md"},{default:d((()=>[o(l,{class:"flex flex-col items-center my-[40rpx]"},{default:d((()=>[c(" 支付状态图片 "),o(s,{class:"status-image",src:n(L).image,width:"100",height:"100",shape:"circle"},null,8,["src"]),c(" 支付状态文字 "),o(r,{class:"text-2xl font-medium mt-[20rpx]"},{default:d((()=>[m(_(n(L).text),1)])),_:1}),o(l,{class:"text-3xl font-medium mt-[20rpx]"},{default:d((()=>[m(" ¥ "+_(I.order.order_amount),1)])),_:1})])),_:1}),c(" 支付信息 "),o(l,{class:"result-info"},{default:d((()=>[o(l,{class:"result-info__item"},{default:d((()=>[o(r,null,{default:d((()=>[m("订单编号")])),_:1}),o(r,null,{default:d((()=>[m(_(I.order.order_sn),1)])),_:1})])),_:1}),o(l,{class:"result-info__item"},{default:d((()=>[o(r,null,{default:d((()=>[m("付款时间")])),_:1}),o(r,null,{default:d((()=>[m(_(I.order.pay_time),1)])),_:1})])),_:1}),o(l,{class:"result-info__item"},{default:d((()=>[o(r,null,{default:d((()=>[m("支付方式")])),_:1}),I.pay_status?(u(),f(r,{key:0},{default:d((()=>[m(_(I.order.pay_way||"-"),1)])),_:1})):(u(),f(r,{key:1},{default:d((()=>[m("未支付")])),_:1}))])),_:1})])),_:1})])),_:1}),o(l,{class:"mt-[40rpx]"},{default:d((()=>[o(l,{class:"mb-[20rpx]"},{default:d((()=>["recharge"==E.value.from?(u(),f(g,{key:0,type:"primary",shape:"circle","hover-class":"none",onClick:z},{default:d((()=>[m(" 继续充值 ")])),_:1})):c("v-if",!0)])),_:1}),o(l,{class:"mb-[20rpx]"},{default:d((()=>[o(g,{type:"primary",plain:"",shape:"circle","hover-class":"none",onClick:N},{default:d((()=>[m(" 返回首页 ")])),_:1})])),_:1})])),_:1})])),_:1})])),_:1},8,["status"])],2112)}}}),[["__scopeId","data-v-424b78a4"]]);export{C as default};
