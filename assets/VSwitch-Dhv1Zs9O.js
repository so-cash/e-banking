import{m as E,e as G,u as H,a as V,f as k,r as M,V as $}from"./VInput-BS2eDNCp.js";import{C as j,f as q,V as J,L as K}from"./VCard-DEPspglP.js";import{p as O,g as Q,E as g,A as W,e as w,G as X,h as Y,H as Z,i as t,I as y,F as ee}from"./index-DSVT_0pq.js";const te=O({indeterminate:Boolean,inset:Boolean,flat:Boolean,loading:{type:[Boolean,String],default:!1},...E(),...G()},"VSwitch"),oe=Q()({name:"VSwitch",inheritAttrs:!1,props:te(),emits:{"update:focused":e=>!0,"update:modelValue":e=>!0,"update:indeterminate":e=>!0},setup(e,C){let{attrs:b,slots:a}=C;const n=g(e,"indeterminate"),s=g(e,"modelValue"),{loaderClasses:S}=j(e),{isFocused:P,focus:_,blur:I}=H(e),m=W(),x=w(()=>typeof e.loading=="string"&&e.loading!==""?e.loading:e.color),A=X(),F=w(()=>e.id||`switch-${A}`);function p(){n.value&&(n.value=!1)}function B(i){var u,r;i.stopPropagation(),i.preventDefault(),(r=(u=m.value)==null?void 0:u.input)==null||r.click()}return Y(()=>{const[i,u]=Z(b),r=V.filterProps(e),z=k.filterProps(e);return t(V,y({class:["v-switch",{"v-switch--flat":e.flat},{"v-switch--inset":e.inset},{"v-switch--indeterminate":n.value},S.value,e.class]},i,r,{modelValue:s.value,"onUpdate:modelValue":c=>s.value=c,id:F.value,focused:P.value,style:e.style}),{...a,default:c=>{let{id:D,messagesId:L,isDisabled:U,isReadonly:N,isValid:h}=c;const d={model:s,isValid:h};return t(k,y({ref:m},z,{modelValue:s.value,"onUpdate:modelValue":[o=>s.value=o,p],id:D.value,"aria-describedby":L.value,type:"checkbox","aria-checked":n.value?"mixed":void 0,disabled:U.value,readonly:N.value,onFocus:_,onBlur:I},u),{...a,default:o=>{let{backgroundColorClasses:v,backgroundColorStyles:l}=o;return t("div",{class:["v-switch__track",...v.value],style:l.value,onClick:B},[a["track-true"]&&t("div",{key:"prepend",class:"v-switch__track-true"},[a["track-true"](d)]),a["track-false"]&&t("div",{key:"append",class:"v-switch__track-false"},[a["track-false"](d)])])},input:o=>{let{inputNode:v,icon:l,backgroundColorClasses:R,backgroundColorStyles:T}=o;return t(ee,null,[v,t("div",{class:["v-switch__thumb",{"v-switch__thumb--filled":l||e.loading},e.inset?void 0:R.value],style:e.inset?void 0:T.value},[a.thumb?t(q,{defaults:{VIcon:{icon:l,size:"x-small"}}},{default:()=>[a.thumb({...d,icon:l})]}):t(M,null,{default:()=>[e.loading?t(K,{name:"v-switch",active:!0,color:h.value===!1?void 0:x.value},{default:f=>a.loader?a.loader(f):t($,{active:f.isActive,color:f.color,indeterminate:!0,size:"16",width:"2"},null)}):l&&t(J,{key:String(l),icon:l,size:"x-small"},null)]})])])}})}})}),{}}});export{oe as V};