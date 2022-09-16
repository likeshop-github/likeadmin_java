import{_ as e}from"./u-search.939c3f7f.js";import{d as t,A as a,O as s,P as l,B as i,Q as o,o as n,c as u,w as r,G as d,h as c,p as f,q as h,R as v,k as p,T as b,U as m,b as g,m as y,V as x,K as w,W as _,r as k,a as C,e as S,f as T,g as F,l as O,t as z,F as I,X,Y as $,Z as j,i as B}from"./index.5ddae38f.js";import{_ as Y}from"./plugin-vue_export-helper.21dcd24c.js";import{a as N,_ as R}from"./tabbar.3ac4b4ec.js";import{g as W}from"./util.4ba637ba.js";import{_ as H}from"./news-card.cacc1bdf.js";import{_ as V}from"./z-paging.34848bf3.js";import{g as M,a as U}from"./news.7d996083.js";import"./u-icon.947d1557.js";import"./u-image.f03d2bad.js";import"./icon_visit.5f8ba9a3.js";var Z=Y(t({__name:"tab",props:{dot:{type:[Boolean,String],default:!1},name:{type:[Boolean,String],default:""},info:null},setup(e){const t=e,b=a(!1),m=a(!1),g=a(!1),y=a(void 0),x=s("updateTabs"),w=s("handleChange"),_=()=>{x&&x()},k=v();console.log(k),w(null==k?void 0:k.props,(e=>{y.value=y.value||e,b.value=e,g.value=y.value,m.value=e})),l((()=>{_()}));const C=i((()=>{const{dot:e,info:a}=t;return{dot:e,info:a}}));return o((()=>C.value),(()=>{_()})),o((()=>t.name),(e=>{_()})),(e,t)=>{const a=p;return n(),u(a,{class:f({active:b.value,inactive:!b.value,tab:!0}),style:h(m.value?"":"display: none;")},{default:r((()=>[g.value?d(e.$slots,"default",{key:0},void 0,!0):c("v-if",!0)])),_:3},8,["class","style"])}}}),[["__scopeId","data-v-9df85c86"]]);var G=Y({name:"u-sticky",emits:["fixed","unfixed"],props:{offsetTop:{type:[Number,String],default:0},index:{type:[Number,String],default:""},enable:{type:Boolean,default:!0},h5NavHeight:{type:[Number,String],default:44},bgColor:{type:String,default:"#ffffff"},zIndex:{type:[Number,String],default:""}},data(){return{fixed:!1,height:"auto",stickyTop:0,elClass:this.$u.guid(),left:0,width:"auto"}},watch:{offsetTop(e){this.initObserver()},enable(e){0==e?(this.fixed=!1,this.disconnectObserver("contentObserver")):this.initObserver()}},computed:{uZIndex(){return this.zIndex?this.zIndex:this.$u.zIndex.sticky}},mounted(){this.initObserver()},methods:{initObserver(){this.enable&&(this.stickyTop=0!=this.offsetTop?b(this.offsetTop)+this.h5NavHeight:this.h5NavHeight,this.disconnectObserver("contentObserver"),this.$uGetRect("."+this.elClass).then((e=>{this.height=e.height,this.left=e.left,this.width=e.width,this.$nextTick((()=>{this.observeContent()}))})))},observeContent(){this.disconnectObserver("contentObserver");const e=m(this,{thresholds:[.95,.98,1]});e.relativeToViewport({top:-this.stickyTop}),e.observe("."+this.elClass,(e=>{this.enable&&this.setFixed(e.boundingClientRect.top)})),this.contentObserver=e},setFixed(e){const t=e<this.stickyTop;t?this.$emit("fixed",this.index):this.fixed&&this.$emit("unfixed",this.index),this.fixed=t},disconnectObserver(e){const t=this[e];t&&t.disconnect()}},beforeUnmount(){this.disconnectObserver("contentObserver")}},[["render",function(e,t,a,s,l,i){const o=p;return n(),u(o,{class:""},{default:r((()=>[g(o,{class:f(["u-sticky-wrap",[l.elClass]]),style:h({height:l.fixed?l.height+"px":"auto",backgroundColor:a.bgColor})},{default:r((()=>[g(o,{class:"u-sticky",style:h({position:l.fixed?"fixed":"static",top:l.stickyTop+"px",left:l.left+"px",width:"auto"==l.width?"auto":l.width+"px",zIndex:i.uZIndex})},{default:r((()=>[d(e.$slots,"default",{},void 0,!0)])),_:3},8,["style"])])),_:3},8,["class","style"])])),_:3})}],["__scopeId","data-v-9059106a"]]);var Q=Y(t({__name:"tabs",props:{isScroll:{type:Boolean,default:!0},current:{default:0},height:{default:80},fontSize:{default:28},duration:{default:.3},activeColor:{default:"#2073F4"},inactiveColor:{default:"#333"},barWidth:{default:40},barHeight:{default:4},gutter:{default:30},bgColor:{default:"#FFFFFF"},name:{default:"name"},count:{default:"count"},offset:{default:[5,20]},bold:{type:Boolean,default:!0},activeItemStyle:{default:{}},showBar:{type:Boolean,default:!0},barStyle:{default:{}},itemWidth:{default:"auto"},isFixed:{type:Boolean,default:!1},top:{default:0},stickyBgColor:{default:"#FFFFFF"},swipeable:{type:Boolean,default:!0}},emits:["change"],setup(e,{emit:t}){const s=e,{touch:m,resetTouchStatus:$,touchStart:j,touchMove:B}=function(){const e=y({direction:"",deltaX:0,deltaY:0,offsetX:0,offsetY:0}),t=()=>{e.direction="",e.deltaX=0,e.deltaY=0,e.offsetX=0,e.offsetY=0};return{touch:e,resetTouchStatus:t,touchStart:a=>{t();const s=a.touches[0];e.startX=s.clientX,e.startY=s.clientY},touchMove:t=>{const a=t.touches[0];var s,l;e.deltaX=a.clientX-e.startX,e.deltaY=a.clientY-e.startY,e.offsetX=Math.abs(e.deltaX),e.offsetY=Math.abs(e.deltaY),e.direction=e.direction||((s=e.offsetX)>(l=e.offsetY)&&s>10?"horizontal":l>s&&l>10?"vertical":"")}}}(),Y=a([]),R=a([]),H=a(0),V=a([]),M=a(0),U=a(0),Z=a(0),Q=a("cu-tab"),q=a(s.current),A=a(!0),E=a(!1),K=v();o((()=>Y.value),(async(e,t)=>{A.value||e.length===t.length||(q.value=0),await x(),L()})),o((()=>s.current),((e,t)=>{x((()=>{q.value=e,te()}))}),{immediate:!0});const P=i((()=>{const e={width:s.barWidth+"rpx",transform:`translate(${U.value}px, -100%)`,"transition-duration":`${A.value?0:s.duration}s`,"background-color":s.activeColor,height:s.barHeight+"rpx",opacity:A.value?0:1,"border-radius":s.barHeight/2+"px"};return Object.assign(e,s.barStyle),e})),D=i((()=>e=>{let t={height:s.height+"rpx","line-height":s.height+"rpx","font-size":s.fontSize+"rpx",padding:s.isScroll?`0 ${s.gutter}rpx`:"",flex:s.isScroll?"auto":"1",width:`${s.itemWidth}rpx`};return e==q.value&&s.bold&&(t.fontWeight="bold"),e==q.value?(t.color=s.activeColor,t=Object.assign(t,s.activeItemStyle)):t.color=s.inactiveColor,t})),J=()=>{Y.value=R.value.map((e=>{const{name:t,dot:a,active:s,inited:l}=e.event,{updateRender:i}=e;return{name:t,dot:a,active:s,inited:l,updateRender:i}}))},L=async()=>{const e=await W("#"+Q.value,!1,K);Z.value=e.left,M.value=e.width,ee()},ee=()=>{const e=w().in(K);for(let t=0;t<Y.value.length;t++)e.select(`#tab-item-${t}`).fields({size:!0,rect:!0});e.exec((e=>{V.value=e,te()}))},te=()=>{const e=V.value[q.value];if(!e)return;const t=e.width,a=e.left-Z.value-(M.value-t)/2;H.value=a<0?0:a;const l=e.left+e.width/2-Z.value;U.value=l-b(s.barWidth)/2,1==A.value&&setTimeout((()=>{A.value=!1}),100),R.value.forEach(((e,t)=>{const a=t===q.value;a===e.event.active&&e.event.inited||e.updateRender(a)}))},ae=e=>{s.swipeable&&(E.value=!0,j(e))},se=e=>{s.swipeable&&E.value&&B(e)},le=()=>{if(!s.swipeable||!E.value)return;if("horizontal"===m.direction&&m.offsetX>=50){let e,a=Y.value.length,s=q.value;e=m.deltaX<=0?s>=a-1?0:s+1:s<=0?a-1:s-1,x((()=>{q.value=e,te()})),t("change",e)}E.value=!1};return l((()=>{J()})),_("handleChange",((e,t)=>{R.value.push({event:e,updateRender:t})})),_("updateTabs",J),(a,s)=>{const l=k(C("u-badge"),N),i=p,o=X,v=k(C("u-sticky"),G);return n(),u(i,{class:"tabs"},{default:r((()=>[g(v,{enable:e.isFixed,"bg-color":e.stickyBgColor,"offset-top":e.top,"h5-nav-height":0},{default:r((()=>[g(i,{id:Q.value,style:h({background:e.bgColor})},{default:r((()=>[g(o,{style:h({height:e.height+"rpx"}),"scroll-x":"",class:"scroll-view","scroll-left":H.value,"scroll-with-animation":""},{default:r((()=>[g(i,{class:f(["scroll-box",{"tabs-scorll-flex":!e.isScroll}])},{default:r((()=>[(n(!0),S(I,null,T(Y.value,((a,s)=>(n(),u(i,{class:"tab-item line1",id:"tab-item-"+s,key:s,onClick:e=>(e=>{e!=q.value&&(x((()=>{q.value=e,te()})),t("change",e))})(s),style:h([F(D)(s)])},{default:r((()=>[g(l,{count:a[e.count]||a.dot||0,offset:e.offset,size:"mini"},null,8,["count","offset"]),O(" "+z(a[e.name]||a.name),1)])),_:2},1032,["id","onClick","style"])))),128)),e.showBar?(n(),u(i,{key:0,class:"tab-bar",style:h([F(P)])},null,8,["style"])):c("v-if",!0)])),_:1},8,["class"])])),_:1},8,["style","scroll-left"])])),_:1},8,["id","style"])])),_:1},8,["enable","bg-color","offset-top"]),g(i,{class:"tab-content",onTouchstart:ae,onTouchmove:se,onTouchcancel:le,onTouchend:le},{default:r((()=>[c(' <view class="tab-track" :class="{\'tab-animated\': animated}" :style="[trackStyle]"> '),g(i,null,{default:r((()=>[d(a.$slots,"default",{},void 0,!0)])),_:3}),c(" </view> ")])),_:3})])),_:3})}}}),[["__scopeId","data-v-c1344dea"]]);const q=t({__name:"news-list",props:{cid:{default:0},i:null,index:null},setup(e){const t=e,s=$(null),l=a([]),i=a(!0);o((()=>t.index),(async()=>{var e;await x(),t.i==t.index&&i.value&&(i.value=!1,null==(e=s.value)||e.reload())}),{immediate:!0});const d=async(e,a)=>{try{const{lists:l}=await M({cid:t.cid,pageNo:e,pageSize:a});s.value.complete(l)}catch(l){console.log("报错=>",l),s.value.complete(!1)}};return(t,a)=>{const i=k(C("news-card"),H),o=k(C("z-paging"),V);return n(),u(o,{"auto-show-back-to-top":"",auto:e.i==e.index,ref_key:"paging",ref:s,modelValue:l.value,"onUpdate:modelValue":a[0]||(a[0]=e=>l.value=e),"data-key":e.i,onQuery:d,fixed:!1,height:"100%"},{default:r((()=>[(n(!0),S(I,null,T(l.value,((e,t)=>(n(),u(i,{key:t,item:e,newsId:e.id},null,8,["item","newsId"])))),128))])),_:1},8,["auto","modelValue","data-key"])}}});var A=Y(t({__name:"news",setup(t){const s=a([]),l=a(0),i=e=>{console.log(e),l.value=Number(e)};return j((e=>{(async()=>{const e=await U();s.value=[{name:"全部",id:0}].concat(e)})()})),(t,a)=>{const o=k(C("u-search"),e),d=B,f=p,h=k(C("tab"),Z),v=k(C("tabs"),Q),b=k(C("tabbar"),R);return n(),u(f,{class:"news"},{default:r((()=>[c(" 搜索 "),g(d,{class:"news-search px-[24rpx] py-[14rpx] bg-white",url:"/pages/search/search"},{default:r((()=>[g(o,{placeholder:"请输入关键词搜索",disabled:"","show-action":!1})])),_:1}),c(" 内容 "),g(v,{current:l.value,onChange:i,height:"80","bar-width":"60",barStyle:{bottom:"0"}},{default:r((()=>[(n(!0),S(I,null,T(s.value,((e,t)=>(n(),u(h,{key:t,name:e.name},{default:r((()=>[g(f,{class:"news-list pt-[20rpx]"},{default:r((()=>[g(q,{cid:e.id,i:t,index:l.value},null,8,["cid","i","index"])])),_:2},1024)])),_:2},1032,["name"])))),128))])),_:1},8,["current"]),g(b)])),_:1})}}}),[["__scopeId","data-v-edf55ed4"]]);export{A as default};
