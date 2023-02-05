import{B as b}from"./TableImg.ee630e0c.js";import{l as C}from"./BasicForm.e647cf24.js";import{u as g}from"./useTable.06669d25.js";import{d as T}from"./system.83251b1a.js";import{u as w}from"./index.15cd01d6.js";import{M as D,c as _,s as S}from"./MenuDrawer.012dbd2c.js";import{aw as B,a as k,ay as t,o as h,h as F,n as m,z as p,B as y,j as M,l as A,al as E}from"./index.290f5634.js";import"./index.80aa09ab.js";import"./Checkbox.24694743.js";import"./index.b53680f2.js";import"./index.622dfb32.js";import"./eagerComputed.a1db4cba.js";import"./useForm.92c1784d.js";import"./index.cd06f31d.js";import"./index.9ba58764.js";import"./index.9add6a18.js";import"./useSize.ccb35ed9.js";import"./useWindowSizeFn.4d1fd368.js";import"./useContentViewHeight.a6e9310d.js";import"./ArrowLeftOutlined.6a1b248b.js";import"./index.1dcb7dbd.js";import"./transButton.4ae929c1.js";import"./index.1eda9b03.js";import"./index.9fd615cf.js";import"./index.d03dcc0b.js";import"./uuid.2b29000c.js";import"./index.0e229460.js";import"./_baseIteratee.4bf70c36.js";import"./get.3a0d4513.js";import"./DeleteOutlined.5e79bf7d.js";import"./index.723d3072.js";import"./useRefs.8433c4b1.js";import"./Form.5e428f6e.js";import"./Col.bf449693.js";import"./useFlexGapSupport.a067baf2.js";import"./index.cf8e8d1f.js";import"./FullscreenOutlined.bf61e80b.js";import"./index.01daf0fc.js";import"./sortable.esm.2632adaa.js";import"./RedoOutlined.a76eb684.js";import"./index.517aef61.js";import"./fromPairs.84aabb58.js";import"./scrollTo.e9a523f8.js";import"./index.4dd9bdbc.js";/* empty css              *//* empty css              */import"./index.72e68832.js";import"./index.592c24d4.js";import"./index.e82bbdae.js";import"./download.8de8b2e0.js";import"./base64Conver.08b9f4ec.js";import"./index.f77c3f4e.js";import"./index.54a4df8a.js";import"./uniqBy.c0488570.js";import"./index.a395b2a1.js";const R=k({name:"MenuManagement",components:{BasicTable:b,MenuDrawer:D,TableAction:C},setup(){const[e,{openDrawer:r}]=w(),[c,{reload:l,expandAll:u}]=g({title:"\u83DC\u5355\u5217\u8868",api:T,columns:_,formConfig:{labelWidth:120,schemas:S},isTreeTable:!0,pagination:!1,striped:!1,useSearchForm:!0,showTableSetting:!0,bordered:!0,showIndexColumn:!1,canResize:!1,actionColumn:{width:80,title:"\u64CD\u4F5C",dataIndex:"action",fixed:void 0}});function d(){r(!0,{isUpdate:!1})}function i(o){r(!0,{record:o,isUpdate:!0})}function n(o){}function a(){l()}function s(){E(u)}return{registerTable:c,registerDrawer:e,handleCreate:d,handleEdit:i,handleDelete:n,handleSuccess:a,onFetchSuccess:s}}});function v(e,r,c,l,u,d){const i=t("a-button"),n=t("TableAction"),a=t("BasicTable"),s=t("MenuDrawer");return h(),F("div",null,[m(a,{onRegister:e.registerTable,onFetchSuccess:e.onFetchSuccess},{toolbar:p(()=>[m(i,{type:"primary",onClick:e.handleCreate},{default:p(()=>[y(" \u65B0\u589E\u83DC\u5355 ")]),_:1},8,["onClick"])]),bodyCell:p(({column:o,record:f})=>[o.key==="action"?(h(),M(n,{key:0,actions:[{icon:"clarity:note-edit-line",onClick:e.handleEdit.bind(null,f)},{icon:"ant-design:delete-outlined",color:"error",popConfirm:{title:"\u662F\u5426\u786E\u8BA4\u5220\u9664",placement:"left",confirm:e.handleDelete.bind(null,f)}}]},null,8,["actions"])):A("",!0)]),_:1},8,["onRegister","onFetchSuccess"]),m(s,{onRegister:e.registerDrawer,onSuccess:e.handleSuccess},null,8,["onRegister","onSuccess"])])}var $e=B(R,[["render",v]]);export{$e as default};
