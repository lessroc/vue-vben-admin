import{a as d,d as m,b as p,c as i}from"./download.8de8b2e0.js";import{P as c}from"./index.cd06f31d.js";import{aw as v,a as y,ay as n,o as I,j as l,z as o,n as u,B as A}from"./index.290f5634.js";import{A as s}from"./index.e82bbdae.js";import"./base64Conver.08b9f4ec.js";import"./index.9ba58764.js";import"./index.9add6a18.js";import"./useSize.ccb35ed9.js";import"./eagerComputed.a1db4cba.js";import"./useWindowSizeFn.4d1fd368.js";import"./useContentViewHeight.a6e9310d.js";import"./ArrowLeftOutlined.6a1b248b.js";import"./index.1dcb7dbd.js";import"./transButton.4ae929c1.js";var U="data:image/png;base64,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";const f=y({components:{PageWrapper:c,[s.name]:s},setup(){function a(){d("text content","testName.txt")}function r(){m({url:"https://codeload.github.com/anncwb/vue-vben-admin-doc/zip/master",target:"_self"}),m({url:"https://vebn.oss-cn-beijing.aliyuncs.com/vben/logo.png",target:"_self"})}function j(){p(U,"logo.png")}function k(){i("https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/5944817f47b8408e9f1442ece49d68ca~tplv-k3u1fbpfcp-watermark.image","logo.png")}return{handleDownloadByUrl:r,handleDownByData:a,handleDownloadByBase64:j,handleDownloadByOnlineUrl:k}}});function F(a,r,j,k,g,B){const t=n("a-alert"),e=n("a-button"),K=n("PageWrapper");return I(),l(K,{title:"\u6587\u4EF6\u4E0B\u8F7D\u793A\u4F8B"},{default:o(()=>[u(t,{message:"\u6839\u636E\u540E\u53F0\u63A5\u53E3\u6587\u4EF6\u6D41\u4E0B\u8F7D"}),u(e,{type:"primary",class:"my-4",onClick:a.handleDownByData},{default:o(()=>[A(" \u6587\u4EF6\u6D41\u4E0B\u8F7D ")]),_:1},8,["onClick"]),u(t,{message:"\u6839\u636E\u6587\u4EF6\u5730\u5740\u4E0B\u8F7D\u6587\u4EF6"}),u(e,{type:"primary",class:"my-4",onClick:a.handleDownloadByUrl},{default:o(()=>[A(" \u6587\u4EF6\u5730\u5740\u4E0B\u8F7D ")]),_:1},8,["onClick"]),u(t,{message:"base64\u6D41\u4E0B\u8F7D"}),u(e,{type:"primary",class:"my-4",onClick:a.handleDownloadByBase64},{default:o(()=>[A(" base64\u6D41\u4E0B\u8F7D ")]),_:1},8,["onClick"]),u(t,{message:"\u56FE\u7247Url\u4E0B\u8F7D,\u5982\u679C\u6709\u8DE8\u57DF\u95EE\u9898\uFF0C\u9700\u8981\u5904\u7406\u56FE\u7247\u8DE8\u57DF"}),u(e,{type:"primary",class:"my-4",onClick:a.handleDownloadByOnlineUrl},{default:o(()=>[A(" \u56FE\u7247Url\u4E0B\u8F7D ")]),_:1},8,["onClick"])]),_:1})}var P=v(f,[["render",F]]);export{P as default};
