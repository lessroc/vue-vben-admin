import{o as c,B as l}from"./BasicForm.e647cf24.js";import{aw as d,a as g,ay as r,o as f,j as B,z as F,n as t,E as _}from"./index.290f5634.js";import{u as A}from"./useForm.92c1784d.js";import{P as C}from"./index.cd06f31d.js";import{A as a}from"./index.e82bbdae.js";import{u as m}from"./upload.6338c3c5.js";/* empty css              *//* empty css              */import"./index.01daf0fc.js";import"./index.80aa09ab.js";import"./Checkbox.24694743.js";import"./index.b53680f2.js";import"./index.d03dcc0b.js";import"./index.1eda9b03.js";import"./index.9fd615cf.js";import"./index.72e68832.js";import"./get.3a0d4513.js";import"./index.622dfb32.js";import"./eagerComputed.a1db4cba.js";import"./index.0e229460.js";import"./_baseIteratee.4bf70c36.js";import"./DeleteOutlined.5e79bf7d.js";import"./index.723d3072.js";import"./useRefs.8433c4b1.js";import"./Form.5e428f6e.js";import"./Col.bf449693.js";import"./useFlexGapSupport.a067baf2.js";import"./useSize.ccb35ed9.js";import"./transButton.4ae929c1.js";import"./index.592c24d4.js";import"./index.cf8e8d1f.js";import"./useWindowSizeFn.4d1fd368.js";import"./FullscreenOutlined.bf61e80b.js";import"./index.517aef61.js";import"./uuid.2b29000c.js";import"./download.8de8b2e0.js";import"./base64Conver.08b9f4ec.js";import"./index.f77c3f4e.js";import"./index.54a4df8a.js";import"./uniqBy.c0488570.js";import"./index.9ba58764.js";import"./index.9add6a18.js";import"./useContentViewHeight.a6e9310d.js";import"./ArrowLeftOutlined.6a1b248b.js";import"./index.1dcb7dbd.js";const h=[{field:"field1",component:"Upload",label:"\u5B57\u6BB51",colProps:{span:8},rules:[{required:!0,message:"\u8BF7\u9009\u62E9\u4E0A\u4F20\u6587\u4EF6"}],componentProps:{api:m}}],E=g({components:{BasicUpload:c,BasicForm:l,PageWrapper:C,[a.name]:a},setup(){const{createMessage:o}=_(),[e]=A({labelWidth:120,schemas:h,actionColOptions:{span:16}});return{handleChange:p=>{o.info(`\u5DF2\u4E0A\u4F20\u6587\u4EF6${JSON.stringify(p)}`)},uploadApi:m,register:e}}});function P(o,e,p,$,x,y){const i=r("a-alert"),s=r("BasicUpload"),n=r("BasicForm"),u=r("PageWrapper");return f(),B(u,{title:"\u4E0A\u4F20\u7EC4\u4EF6\u793A\u4F8B"},{default:F(()=>[t(i,{message:"\u57FA\u7840\u793A\u4F8B"}),t(s,{maxSize:20,maxNumber:10,onChange:o.handleChange,api:o.uploadApi,class:"my-5",accept:["image/*"]},null,8,["onChange","api"]),t(i,{message:"\u5D4C\u5165\u8868\u5355,\u52A0\u5165\u8868\u5355\u6821\u9A8C"}),t(n,{onRegister:o.register,class:"my-5"},null,8,["onRegister"])]),_:1})}var Ao=d(E,[["render",P]]);export{Ao as default};
