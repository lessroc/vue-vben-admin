import{a as j,J as I,c6 as _,n as i,T as k,G as A,cF as $,cG as U,Q as D,b7 as E,O as z,Y as G,a0 as V,S as w,X as J}from"./index.290f5634.js";var K=globalThis&&globalThis.__rest||function(a,e){var o={};for(var r in a)Object.prototype.hasOwnProperty.call(a,r)&&e.indexOf(r)<0&&(o[r]=a[r]);if(a!=null&&typeof Object.getOwnPropertySymbols=="function")for(var t=0,r=Object.getOwnPropertySymbols(a);t<r.length;t++)e.indexOf(r[t])<0&&Object.prototype.propertyIsEnumerable.call(a,r[t])&&(o[r[t]]=a[r[t]]);return o},L=function(){return{prefixCls:String,href:String,separator:A.any,overlay:A.any,onClick:Function}},B=j({name:"ABreadcrumbItem",inheritAttrs:!1,__ANT_BREADCRUMB_ITEM:!0,props:L(),slots:["separator","overlay"],setup:function(e,o){var r=o.slots,t=o.attrs,b=I("breadcrumb",e),d=b.prefixCls,v=function(p,l){var n=_(r,e,"overlay");return n?i(U,{overlay:n,placement:"bottom"},{default:function(){return[i("span",{class:"".concat(l,"-overlay-link")},[p,i($,null,null)])]}}):p};return function(){var y,p=(y=_(r,e,"separator"))!==null&&y!==void 0?y:"/",l=_(r,e),n=t.class,c=t.style,s=K(t,["class","style"]),u;return e.href!==void 0?u=i("a",k({class:"".concat(d.value,"-link"),onClick:e.onClick},s),[l]):u=i("span",k({class:"".concat(d.value,"-link"),onClick:e.onClick},s),[l]),u=v(u,d.value),l?i("span",{class:n,style:c},[u,p&&i("span",{class:"".concat(d.value,"-separator")},[p])]):null}}}),Q=function(){return{prefixCls:String,routes:{type:Array},params:A.any,separator:A.any,itemRender:{type:Function}}};function X(a,e){if(!a.breadcrumbName)return null;var o=Object.keys(e).join("|"),r=a.breadcrumbName.replace(new RegExp(":(".concat(o,")"),"g"),function(t,b){return e[b]||t});return r}function M(a){var e=a.route,o=a.params,r=a.routes,t=a.paths,b=r.indexOf(e)===r.length-1,d=X(e,o);return b?i("span",null,[d]):i("a",{href:"#/".concat(t.join("/"))},[d])}var C=j({name:"ABreadcrumb",props:Q(),slots:["separator","itemRender"],setup:function(e,o){var r=o.slots,t=I("breadcrumb",e),b=t.prefixCls,d=t.direction,v=function(n,c){return n=(n||"").replace(/^\//,""),Object.keys(c).forEach(function(s){n=n.replace(":".concat(s),c[s])}),n},y=function(n,c,s){var u=J(n),f=v(c||"",s);return f&&u.push(f),u},p=function(n){var c=n.routes,s=c===void 0?[]:c,u=n.params,f=u===void 0?{}:u,x=n.separator,h=n.itemRender,O=h===void 0?M:h,R=[];return s.map(function(m){var g=v(m.path,f);g&&R.push(g);var N=[].concat(R),T=null;return m.children&&m.children.length&&(T=i(E,null,{default:function(){return[m.children.map(function(P){return i(E.Item,{key:P.path||P.breadcrumbName},{default:function(){return[O({route:P,params:f,routes:s,paths:y(N,P.path,f)})]}})})]}})),i(B,{overlay:T,separator:x,key:g||m.breadcrumbName},{default:function(){return[O({route:m,params:f,routes:s,paths:N})]}})})};return function(){var l,n,c,s=e.routes,u=e.params,f=u===void 0?{}:u,x=D(_(r,e)),h=(n=_(r,e,"separator"))!==null&&n!==void 0?n:"/",O=e.itemRender||r.itemRender||M;s&&s.length>0?c=p({routes:s,params:f,separator:h,itemRender:O}):x.length&&(c=x.map(function(m,g){return z(G(m.type)==="object"&&(m.type.__ANT_BREADCRUMB_ITEM||m.type.__ANT_BREADCRUMB_SEPARATOR),"Breadcrumb","Only accepts Breadcrumb.Item and Breadcrumb.Separator as it's children"),V(m,{separator:h,key:g})}));var R=(l={},w(l,b.value,!0),w(l,"".concat(b.value,"-rtl"),d.value==="rtl"),l);return i("div",{class:R},[c])}}}),Y=globalThis&&globalThis.__rest||function(a,e){var o={};for(var r in a)Object.prototype.hasOwnProperty.call(a,r)&&e.indexOf(r)<0&&(o[r]=a[r]);if(a!=null&&typeof Object.getOwnPropertySymbols=="function")for(var t=0,r=Object.getOwnPropertySymbols(a);t<r.length;t++)e.indexOf(r[t])<0&&Object.prototype.propertyIsEnumerable.call(a,r[t])&&(o[r[t]]=a[r[t]]);return o},q=function(){return{prefixCls:String}},S=j({name:"ABreadcrumbSeparator",__ANT_BREADCRUMB_SEPARATOR:!0,inheritAttrs:!1,props:q(),setup:function(e,o){var r=o.slots,t=o.attrs,b=I("breadcrumb",e),d=b.prefixCls;return function(){var v;t.separator;var y=t.class,p=Y(t,["separator","class"]),l=D((v=r.default)===null||v===void 0?void 0:v.call(r));return i("span",k({class:["".concat(d.value,"-separator"),y]},p),[l.length>0?l:"/"])}}});C.Item=B;C.Separator=S;C.install=function(a){return a.component(C.name,C),a.component(B.name,B),a.component(S.name,S),a};export{C as B};
