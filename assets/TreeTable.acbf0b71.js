import{B as l}from"./TableImg.ee630e0c.js";import"./BasicForm.e647cf24.js";import{u as n}from"./useTable.06669d25.js";import{getBasicColumns as c,getTreeTableData as d}from"./tableData.5928ef4a.js";import{aw as _,a as b,ay as a,o as f,h as C,n as t,z as r,B as s}from"./index.290f5634.js";import"./index.80aa09ab.js";import"./Checkbox.24694743.js";import"./index.b53680f2.js";import"./index.622dfb32.js";import"./eagerComputed.a1db4cba.js";import"./useForm.92c1784d.js";import"./index.cd06f31d.js";import"./index.9ba58764.js";import"./index.9add6a18.js";import"./useSize.ccb35ed9.js";import"./useWindowSizeFn.4d1fd368.js";import"./useContentViewHeight.a6e9310d.js";import"./ArrowLeftOutlined.6a1b248b.js";import"./index.1dcb7dbd.js";import"./transButton.4ae929c1.js";import"./index.1eda9b03.js";import"./index.9fd615cf.js";import"./index.d03dcc0b.js";import"./uuid.2b29000c.js";import"./index.0e229460.js";import"./_baseIteratee.4bf70c36.js";import"./get.3a0d4513.js";import"./DeleteOutlined.5e79bf7d.js";import"./index.723d3072.js";import"./useRefs.8433c4b1.js";import"./Form.5e428f6e.js";import"./Col.bf449693.js";import"./useFlexGapSupport.a067baf2.js";import"./index.cf8e8d1f.js";import"./FullscreenOutlined.bf61e80b.js";import"./index.01daf0fc.js";import"./sortable.esm.2632adaa.js";import"./RedoOutlined.a76eb684.js";import"./index.517aef61.js";import"./fromPairs.84aabb58.js";import"./scrollTo.e9a523f8.js";import"./index.4dd9bdbc.js";/* empty css              *//* empty css              */import"./index.72e68832.js";import"./index.592c24d4.js";import"./index.e82bbdae.js";import"./download.8de8b2e0.js";import"./base64Conver.08b9f4ec.js";import"./index.f77c3f4e.js";import"./index.54a4df8a.js";import"./uniqBy.c0488570.js";import"./select.a63b7aca.js";const T=b({components:{BasicTable:l},setup(){const[o,{expandAll:e,collapseAll:i}]=n({title:"\u6811\u5F62\u8868\u683C",isTreeTable:!0,rowSelection:{type:"checkbox",getCheckboxProps(p){return p.id==="0"?{disabled:!0}:{disabled:!1}}},titleHelpMessage:"\u6811\u5F62\u7EC4\u4EF6\u4E0D\u80FD\u548C\u5E8F\u5217\u53F7\u5217\u540C\u65F6\u5B58\u5728",columns:c(),dataSource:d(),rowKey:"id"});return{register:o,expandAll:e,collapseAll:i}}}),B={class:"p-4"};function g(o,e,i,p,k,E){const m=a("a-button"),u=a("BasicTable");return f(),C("div",B,[t(u,{onRegister:o.register},{toolbar:r(()=>[t(m,{type:"primary",onClick:o.expandAll},{default:r(()=>[s("\u5C55\u5F00\u5168\u90E8")]),_:1},8,["onClick"]),t(m,{type:"primary",onClick:o.collapseAll},{default:r(()=>[s("\u6298\u53E0\u5168\u90E8")]),_:1},8,["onClick"])]),_:1},8,["onRegister"])])}var Fo=_(T,[["render",g]]);export{Fo as default};
