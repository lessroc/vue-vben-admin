import{aw as m,a as S,cV as _,eG as f,eH as T,eI as x,eJ as h,eK as R,eL as X,eM as y,eN as b,eO as w,eP as Y,eQ as g,eR as B,eS as C,v as n,ay as o,o as r,j as i,z as t,i as l,n as p,B as E,aI as k,x as F,y as P}from"./index.290f5634.js";import{P as $}from"./index.cd06f31d.js";import"./index.9ba58764.js";import"./index.9add6a18.js";import"./useSize.ccb35ed9.js";import"./eagerComputed.a1db4cba.js";import"./useWindowSizeFn.4d1fd368.js";import"./useContentViewHeight.a6e9310d.js";import"./ArrowLeftOutlined.6a1b248b.js";import"./index.1dcb7dbd.js";import"./transButton.4ae929c1.js";const N=["Fade","Scale","SlideY","ScrollY","SlideYReverse","ScrollYReverse","SlideX","ScrollX","SlideXReverse","ScrollXReverse","ScaleRotate","ExpandX","Expand"],V=N.map(e=>({label:e,value:e,key:e})),A=S({components:{Select:_,PageWrapper:$,FadeTransition:f,ScaleTransition:T,SlideYTransition:x,ScrollYTransition:h,SlideYReverseTransition:R,ScrollYReverseTransition:X,SlideXTransition:y,ScrollXTransition:b,SlideXReverseTransition:w,ScrollXReverseTransition:Y,ScaleRotateTransition:g,ExpandXTransition:B,ExpandTransition:C},setup(){const e=n("Fade"),a=n(!0);function s(){a.value=!1,setTimeout(()=>{a.value=!0},300)}return{options:V,value:e,start:s,show:a}}}),I={class:"flex"},W={class:"box"};function D(e,a,s,L,j,z){const c=o("Select"),d=o("a-button"),u=o("PageWrapper");return r(),i(u,{title:"\u52A8\u753B\u7EC4\u4EF6\u793A\u4F8B"},{default:t(()=>[l("div",I,[p(c,{options:e.options,value:e.value,"onUpdate:value":a[0]||(a[0]=v=>e.value=v),placeholder:"\u9009\u62E9\u52A8\u753B",style:{width:"150px"}},null,8,["options","value"]),p(d,{type:"primary",class:"ml-4",onClick:e.start},{default:t(()=>[E(" start ")]),_:1},8,["onClick"])]),(r(),i(k(`${e.value}Transition`),null,{default:t(()=>[F(l("div",W,null,512),[[P,e.show]])]),_:1}))]),_:1})}var ae=m(A,[["render",D],["__scopeId","data-v-45b1f032"]]);export{ae as default};
