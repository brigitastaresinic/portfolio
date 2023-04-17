import{B as b,e as s,Z as d,b as k,C as S,v as z,M as w,i as x,k as B,o as u,l as m,R as p,w as y,$ as N,a0 as $,c as q,a1 as h,a2 as I}from"./entry.d91c5668.js";import{_ as A}from"./nuxt-link.2b62de77.js";import C from"./ContentList.5e94ba22.js";/* empty css                         */const L=()=>b().$img,O={src:{type:String,required:!0},format:{type:String,default:void 0},quality:{type:[Number,String],default:void 0},background:{type:String,default:void 0},fit:{type:String,default:void 0},modifiers:{type:Object,default:void 0},preset:{type:String,default:void 0},provider:{type:String,default:void 0},sizes:{type:[Object,String],default:void 0},preload:{type:Boolean,default:void 0},width:{type:[String,Number],default:void 0},height:{type:[String,Number],default:void 0},alt:{type:String,default:void 0},referrerpolicy:{type:String,default:void 0},usemap:{type:String,default:void 0},longdesc:{type:String,default:void 0},ismap:{type:Boolean,default:void 0},loading:{type:String,default:void 0},crossorigin:{type:[Boolean,String],default:void 0,validator:e=>["anonymous","use-credentials","",!0,!1].includes(e)},decoding:{type:String,default:void 0,validator:e=>["async","auto","sync"].includes(e)}},E=e=>{const l=s(()=>({provider:e.provider,preset:e.preset})),o=s(()=>({width:d(e.width),height:d(e.height),alt:e.alt,referrerpolicy:e.referrerpolicy,usemap:e.usemap,longdesc:e.longdesc,ismap:e.ismap,crossorigin:e.crossorigin===!0?"anonymous":e.crossorigin||void 0,loading:e.loading,decoding:e.decoding})),i=s(()=>({...e.modifiers,width:d(e.width),height:d(e.height),format:e.format,quality:e.quality,background:e.background,fit:e.fit}));return{options:l,attrs:o,modifiers:i}},M={...O,placeholder:{type:[Boolean,String,Number,Array],default:void 0}},P=k({name:"NuxtImg",props:M,emits:["load"],setup:(e,l)=>{const o=L(),i=E(e),c=S(!1),a=s(()=>o.getSizes(e.src,{...i.options.value,sizes:e.sizes,modifiers:{...i.modifiers.value,width:d(e.width),height:d(e.height)}})),n=s(()=>{const t={...i.attrs.value,"data-nuxt-img":""};return e.sizes&&(t.sizes=a.value.sizes,t.srcset=a.value.srcset),t}),v=s(()=>{let t=e.placeholder;if(t===""&&(t=!0),!t||c.value)return!1;if(typeof t=="string")return t;const r=Array.isArray(t)?t:typeof t=="number"?[t,t]:[10,10];return o(e.src,{...i.modifiers.value,width:r[0],height:r[1],quality:r[2]||50},i.options.value)}),f=s(()=>e.sizes?a.value.src:o(e.src,i.modifiers.value,i.options.value)),g=s(()=>v.value?v.value:f.value);if(e.preload){const t=Object.values(a.value).every(r=>r);z({link:[{rel:"preload",as:"image",...t?{href:a.value.src,imagesizes:a.value.sizes,imagesrcset:a.value.srcset}:{href:g.value}}]})}const _=S();return w(()=>{if(v.value){const t=new Image;t.src=f.value,t.onload=r=>{_.value.src=f.value,c.value=!0,l.emit("load",r)}}else _.value.onload=t=>{l.emit("load",t)}}),()=>x("img",{ref:_,key:g.value,src:g.value,...n.value,...l.attrs})}}),R={},V={class:"container"},j={key:1,class:"fallback-placeholder"},D=h("div",{class:"container__item__overlay_fade"},null,-1),F={class:"container__item__overlay"},H=h("p",null,"No projects found.",-1);function Z(e,l){const o=P,i=A,c=C;return u(),m("div",V,[p(c,{path:"/projects"},{default:y(({list:a})=>[(u(!0),m(N,null,$(a,n=>(u(),m("div",{key:n._path,class:"container__item"},[p(i,{to:n._path},{default:y(()=>[n.image?(u(),q(o,{key:0,src:n.image,sizes:"sm:100vw md:50vw lg:300px"},null,8,["src"])):(u(),m("div",j)),D,h("div",F,I(n.title),1)]),_:2},1032,["to"])]))),128))]),"not-found":y(()=>[H]),_:1})])}const T=B(R,[["render",Z]]);export{T as _};
