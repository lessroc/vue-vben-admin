import{aw as f,a as g,cD as C,v as _,bH as u,ay as n,o as k,j as w,z as o,n as t,B as r,t as F,i as y}from"./index.290f5634.js";import{P as S}from"./index.cd06f31d.js";import"./index.9ba58764.js";import"./index.9add6a18.js";import"./useSize.ccb35ed9.js";import"./eagerComputed.a1db4cba.js";import"./useWindowSizeFn.4d1fd368.js";import"./useContentViewHeight.a6e9310d.js";import"./ArrowLeftOutlined.6a1b248b.js";import"./index.1dcb7dbd.js";import"./transButton.4ae929c1.js";const h=g({components:{CollapseContainer:C,PageWrapper:S},setup(){const e=_(null),{enter:a,toggle:s,exit:i,isFullscreen:c}=u(),{toggle:m}=u(e);return{enter:a,toggleDom:m,toggle:s,isFullscreen:c,exit:i,domRef:e}}}),D={ref:"domRef",class:"flex items-center justify-center w-1/2 h-64 mx-auto mt-10 bg-white rounded-md"};function W(e,a,s,i,c,m){const l=n("a-button"),p=n("CollapseContainer"),d=n("PageWrapper");return k(),w(d,{title:"\u5168\u5C4F\u793A\u4F8B"},{default:o(()=>[t(p,{class:"w-full h-32 bg-white rounded-md",title:"Window Full Screen"},{default:o(()=>[t(l,{type:"primary",onClick:e.enter,class:"mr-2"},{default:o(()=>[r(" Enter Window Full Screen ")]),_:1},8,["onClick"]),t(l,{color:"success",onClick:e.toggle,class:"mr-2"},{default:o(()=>[r(" Toggle Window Full Screen ")]),_:1},8,["onClick"]),t(l,{color:"error",onClick:e.exit,class:"mr-2"},{default:o(()=>[r(" Exit Window Full Screen ")]),_:1},8,["onClick"]),r(" Current State: "+F(e.isFullscreen),1)]),_:1}),t(p,{class:"w-full mt-5 bg-white rounded-md",title:"Dom Full Screen"},{default:o(()=>[t(l,{type:"primary",onClick:e.toggleDom,class:"mr-2"},{default:o(()=>[r(" Enter Dom Full Screen ")]),_:1},8,["onClick"])]),_:1}),y("div",D,[t(l,{type:"primary",onClick:e.toggleDom,class:"mr-2"},{default:o(()=>[r(" Exit Dom Full Screen ")]),_:1},8,["onClick"])],512)]),_:1})}var T=f(h,[["render",W]]);export{T as default};
