import{B as d}from"./TableImg.ee630e0c.js";import"./BasicForm.e647cf24.js";import{u as F}from"./useTable.06669d25.js";import{getBasicColumns as h,getFormConfig as _}from"./tableData.5928ef4a.js";import{aw as k,a as y,v as B,ay as m,o as p,j as b,z as t,B as s,n as a,h as c,F as C,i as E,t as T}from"./index.290f5634.js";import{A}from"./index.e82bbdae.js";import{d as D}from"./table.714fc794.js";import"./index.80aa09ab.js";import"./Checkbox.24694743.js";import"./index.b53680f2.js";import"./index.622dfb32.js";import"./eagerComputed.a1db4cba.js";import"./useForm.92c1784d.js";import"./index.cd06f31d.js";import"./index.9ba58764.js";import"./index.9add6a18.js";import"./useSize.ccb35ed9.js";import"./useWindowSizeFn.4d1fd368.js";import"./useContentViewHeight.a6e9310d.js";import"./ArrowLeftOutlined.6a1b248b.js";import"./index.1dcb7dbd.js";import"./transButton.4ae929c1.js";import"./index.1eda9b03.js";import"./index.9fd615cf.js";import"./index.d03dcc0b.js";import"./uuid.2b29000c.js";import"./index.0e229460.js";import"./_baseIteratee.4bf70c36.js";import"./get.3a0d4513.js";import"./DeleteOutlined.5e79bf7d.js";import"./index.723d3072.js";import"./useRefs.8433c4b1.js";import"./Form.5e428f6e.js";import"./Col.bf449693.js";import"./useFlexGapSupport.a067baf2.js";import"./index.cf8e8d1f.js";import"./FullscreenOutlined.bf61e80b.js";import"./index.01daf0fc.js";import"./sortable.esm.2632adaa.js";import"./RedoOutlined.a76eb684.js";import"./index.517aef61.js";import"./fromPairs.84aabb58.js";import"./scrollTo.e9a523f8.js";import"./index.4dd9bdbc.js";/* empty css              *//* empty css              */import"./index.72e68832.js";import"./index.592c24d4.js";import"./download.8de8b2e0.js";import"./base64Conver.08b9f4ec.js";import"./index.f77c3f4e.js";import"./index.54a4df8a.js";import"./uniqBy.c0488570.js";import"./select.a63b7aca.js";const w=y({components:{BasicTable:d,AAlert:A},setup(){const o=B([]),[e,{getForm:n}]=F({title:"\u5F00\u542F\u641C\u7D22\u533A\u57DF",api:D,columns:h(),useSearchForm:!0,formConfig:_(),showTableSetting:!0,tableSetting:{fullScreen:!0},showIndexColumn:!1,rowKey:"id",rowSelection:{type:"checkbox",selectedRowKeys:o,onChange:r}});function u(){n().getFieldsValue()}function r(i){o.value=i}return{registerTable:e,getFormValues:u,checkedKeys:o,onSelectChange:r}}}),S={key:1};function V(o,e,n,u,r,i){const l=m("a-button"),f=m("a-alert"),g=m("BasicTable");return p(),b(g,{onRegister:o.registerTable},{"form-custom":t(()=>[s(" custom-slot ")]),headerTop:t(()=>[a(f,{type:"info","show-icon":""},{message:t(()=>[o.checkedKeys.length>0?(p(),c(C,{key:0},[E("span",null,"\u5DF2\u9009\u4E2D"+T(o.checkedKeys.length)+"\u6761\u8BB0\u5F55(\u53EF\u8DE8\u9875)",1),a(l,{type:"link",onClick:e[0]||(e[0]=v=>o.checkedKeys=[]),size:"small"},{default:t(()=>[s("\u6E05\u7A7A")]),_:1})],64)):(p(),c("span",S,"\u672A\u9009\u4E2D\u4EFB\u4F55\u9879\u76EE"))]),_:1})]),toolbar:t(()=>[a(l,{type:"primary",onClick:o.getFormValues},{default:t(()=>[s("\u83B7\u53D6\u8868\u5355\u6570\u636E")]),_:1},8,["onClick"])]),_:1},8,["onRegister"])}var $o=k(w,[["render",V]]);export{$o as default};
