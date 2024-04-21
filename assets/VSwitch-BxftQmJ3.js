import{m as G,e as M,u as $,V,f as k,r as j,s as q}from"./VInput-CG2HN8lq.js";import{C as E,f as H,V as J,L as K}from"./VCard-DZhx9bsj.js";import{p as O,g as Q,u as g,G as W,c as w,a as X,b as Y,f as Z,d as t,m as y,F as ee}from"./index-C230S9Ee.js";const te=O({indeterminate:Boolean,inset:Boolean,flat:Boolean,loading:{type:[Boolean,String],default:!1},...G(),...M()},"VSwitch"),oe=Q()({name:"VSwitch",inheritAttrs:!1,props:te(),emits:{"update:focused":e=>!0,"update:modelValue":e=>!0,"update:indeterminate":e=>!0},setup(e,C){let{attrs:b,slots:a}=C;const n=g(e,"indeterminate"),s=g(e,"modelValue"),{loaderClasses:S}=E(e),{isFocused:P,focus:_,blur:x}=$(e),m=W(),F=w(()=>typeof e.loading=="string"&&e.loading!==""?e.loading:e.color),I=X(),p=w(()=>e.id||`switch-${I}`);function A(){n.value&&(n.value=!1)}function B(i){var u,r;i.stopPropagation(),i.preventDefault(),(r=(u=m.value)==null?void 0:u.input)==null||r.click()}return Y(()=>{const[i,u]=Z(b),r=V.filterProps(e),z=k.filterProps(e);return t(V,y({class:["v-switch",{"v-switch--flat":e.flat},{"v-switch--inset":e.inset},{"v-switch--indeterminate":n.value},S.value,e.class]},i,r,{modelValue:s.value,"onUpdate:modelValue":c=>s.value=c,id:p.value,focused:P.value,style:e.style}),{...a,default:c=>{let{id:D,messagesId:L,isDisabled:U,isReadonly:N,isValid:h}=c;const d={model:s,isValid:h};return t(k,y({ref:m},z,{modelValue:s.value,"onUpdate:modelValue":[o=>s.value=o,A],id:D.value,"aria-describedby":L.value,type:"checkbox","aria-checked":n.value?"mixed":void 0,disabled:U.value,readonly:N.value,onFocus:_,onBlur:x},u),{...a,default:o=>{let{backgroundColorClasses:f,backgroundColorStyles:l}=o;return t("div",{class:["v-switch__track",...f.value],style:l.value,onClick:B},[a["track-true"]&&t("div",{key:"prepend",class:"v-switch__track-true"},[a["track-true"](d)]),a["track-false"]&&t("div",{key:"append",class:"v-switch__track-false"},[a["track-false"](d)])])},input:o=>{let{inputNode:f,icon:l,backgroundColorClasses:R,backgroundColorStyles:T}=o;return t(ee,null,[f,t("div",{class:["v-switch__thumb",{"v-switch__thumb--filled":l||e.loading},e.inset?void 0:R.value],style:e.inset?void 0:T.value},[a.thumb?t(H,{defaults:{VIcon:{icon:l,size:"x-small"}}},{default:()=>[a.thumb({...d,icon:l})]}):t(j,null,{default:()=>[e.loading?t(K,{name:"v-switch",active:!0,color:h.value===!1?void 0:F.value},{default:v=>a.loader?a.loader(v):t(q,{active:v.isActive,color:v.color,indeterminate:!0,size:"16",width:"2"},null)}):l&&t(J,{key:String(l),icon:l,size:"x-small"},null)]})])])}})}})}),{}}});export{oe as V};
