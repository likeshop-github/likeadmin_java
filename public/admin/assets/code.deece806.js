import{r as n}from"./index.1256601b.js";function r(e){return n.get({url:"/gen/list",params:e})}function a(e){return n.get({url:"/gen/db",params:e})}function l(){return n.get({url:"/gen/dbAll"})}function o(e){return n.post({url:"/gen/importTable",params:e},{isParamsToData:!1})}function s(e){return n.get({url:"/gen/detail",params:e})}function u(e){return n.post({url:"/gen/syncTable",params:e},{isParamsToData:!1})}function g(e){return n.post({url:"/gen/delTable",params:e})}function i(e){return n.post({url:"/gen/editTable",params:e})}function d(e){return n.get({url:"/gen/previewCode",params:e})}function f(e){return n.get({url:"/gen/genCode",params:e})}function c(e){return n.get({responseType:"blob",url:"/gen/downloadCode",params:e},{isTransformResponse:!1})}export{g as a,d as b,c,l as d,f as e,r as f,i as g,o as h,a as i,u as s,s as t};