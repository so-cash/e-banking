import{m as j,e as M,u as X,c as k,f as g,r as Y,b as $}from"./VInput-CZnSWQNW.js";import{r as q,f as E,j as G,L as H}from"./VCard-B3Oprnt7.js";import{p as J,g as K,n as V,r as O,f as y,X as Q,u as W,Y as Z,c as t,y as w,R as ee}from"./index-CjOFXEkW.js";const te=J({indeterminate:Boolean,inset:Boolean,flat:Boolean,loading:{type:[Boolean,String],default:!1},...j(),...M()},"VSwitch"),oe=K()({name:"VSwitch",inheritAttrs:!1,props:te(),emits:{"update:focused":e=>!0,"update:modelValue":e=>!0,"update:indeterminate":e=>!0},setup(e,b){let{attrs:C,slots:a}=b;const n=V(e,"indeterminate"),s=V(e,"modelValue"),{loaderClasses:S}=q(e),{isFocused:P,focus:_,blur:x}=X(e),m=O(),I=y(()=>typeof e.loading=="string"&&e.loading!==""?e.loading:e.color),p=Q(),A=y(()=>e.id||`switch-${p}`);function B(){n.value&&(n.value=!1)}function F(i){var u,r;i.stopPropagation(),i.preventDefault(),(r=(u=m.value)==null?void 0:u.input)==null||r.click()}return W(()=>{const[i,u]=Z(C),r=k.filterProps(e),z=g.filterProps(e);return t(k,w({class:["v-switch",{"v-switch--flat":e.flat},{"v-switch--inset":e.inset},{"v-switch--indeterminate":n.value},S.value,e.class]},i,r,{modelValue:s.value,"onUpdate:modelValue":c=>s.value=c,id:A.value,focused:P.value,style:e.style}),{...a,default:c=>{let{id:D,messagesId:L,isDisabled:R,isReadonly:U,isValid:h}=c;const d={model:s,isValid:h};return t(g,w({ref:m},z,{modelValue:s.value,"onUpdate:modelValue":[o=>s.value=o,B],id:D.value,"aria-describedby":L.value,type:"checkbox","aria-checked":n.value?"mixed":void 0,disabled:R.value,readonly:U.value,onFocus:_,onBlur:x},u),{...a,default:o=>{let{backgroundColorClasses:f,backgroundColorStyles:l}=o;return t("div",{class:["v-switch__track",...f.value],style:l.value,onClick:F},[a["track-true"]&&t("div",{key:"prepend",class:"v-switch__track-true"},[a["track-true"](d)]),a["track-false"]&&t("div",{key:"append",class:"v-switch__track-false"},[a["track-false"](d)])])},input:o=>{let{inputNode:f,icon:l,backgroundColorClasses:N,backgroundColorStyles:T}=o;return t(ee,null,[f,t("div",{class:["v-switch__thumb",{"v-switch__thumb--filled":l||e.loading},e.inset?void 0:N.value],style:e.inset?void 0:T.value},[a.thumb?t(E,{defaults:{VIcon:{icon:l,size:"x-small"}}},{default:()=>[a.thumb({...d,icon:l})]}):t(Y,null,{default:()=>[e.loading?t(H,{name:"v-switch",active:!0,color:h.value===!1?void 0:I.value},{default:v=>a.loader?a.loader(v):t($,{active:v.isActive,color:v.color,indeterminate:!0,size:"16",width:"2"},null)}):l&&t(G,{key:String(l),icon:l,size:"x-small"},null)]})])])}})}})}),{}}});export{oe as V};
