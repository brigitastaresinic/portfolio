import{q as f,h as p,e as v,j as d,u as l}from"./query.39edfb98.js";import{a as _,_ as g,b as h,t as y,e as w,f as C,h as $,i as r}from"./entry.d91c5668.js";import{_ as N}from"./nuxt-link.2b62de77.js";import{w as m,s as P,u as j,a as T}from"./utils.470f7971.js";/* empty css                         *//* empty css                      */const b=async n=>{const{content:t}=_().public;typeof(n==null?void 0:n.params)!="function"&&(n=f(n));const a=n.params(),s=t.experimental.stripQueryParameters?m(`/navigation/${`${p(a)}.${t.integrity}`}/${v(a)}.json`):m(`/navigation/${p(a)}.${t.integrity}.json`);if(P())return(await g(()=>import("./client-db.898de64e.js"),["./client-db.898de64e.js","./entry.d91c5668.js","./entry.5a4579be.css","./utils.470f7971.js","./query.39edfb98.js","./index.a6ef77ff.js"],import.meta.url).then(o=>o.generateNavigation))(a);const e=await $fetch(s,{method:"GET",responseType:"json",params:t.experimental.stripQueryParameters?void 0:{_params:d(a),previewToken:j("previewToken").value}});if(typeof e=="string"&&e.startsWith("<!DOCTYPE html>"))throw new Error("Not found");return e};const R=h({name:"ContentNavigation",props:{query:{type:Object,required:!1,default:void 0}},async setup(n){const{query:t}=y(n),a=w(()=>{var e;return typeof((e=t.value)==null?void 0:e.params)=="function"?t.value.params():t.value});if(!a.value&&C("dd-navigation").value){const{navigation:e}=T();return{navigation:e}}const{data:s}=await l(`content-navigation-${p(a.value)}`,()=>b(a.value));return{navigation:s}},render(n){const t=$(),{navigation:a}=n,s=o=>r(N,{to:o._path},()=>o.title),e=(o,u)=>r("ul",u?{"data-level":u}:null,o.map(i=>i.children?r("li",null,[s(i),e(i.children,u+1)]):r("li",null,s(i)))),c=o=>e(o,0);return t!=null&&t.default?t.default({navigation:a,...this.$attrs}):c(a)}});export{R as default};
