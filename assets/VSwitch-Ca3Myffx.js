import{m as j,e as M,u as Q,c as k,f as g,r as W,b as X}from"./VInput-CHHdvrRo.js";import{r as $,f as q,j as E,L as G}from"./VCard-DVcoeF_5.js";import{p as H,g as J,n as V,r as K,f as y,W as O,u as Y,X as Z,c as t,y as w,Q as ee}from"./index-sYn4zpRH.js";const te=H({indeterminate:Boolean,inset:Boolean,flat:Boolean,loading:{type:[Boolean,String],default:!1},...j(),...M()},"VSwitch"),oe=J()({name:"VSwitch",inheritAttrs:!1,props:te(),emits:{"update:focused":e=>!0,"update:modelValue":e=>!0,"update:indeterminate":e=>!0},setup(e,b){let{attrs:C,slots:a}=b;const n=V(e,"indeterminate"),s=V(e,"modelValue"),{loaderClasses:S}=$(e),{isFocused:P,focus:_,blur:x}=Q(e),m=K(),I=y(()=>typeof e.loading=="string"&&e.loading!==""?e.loading:e.color),p=O(),A=y(()=>e.id||`switch-${p}`);function B(){n.value&&(n.value=!1)}function F(i){var u,r;i.stopPropagation(),i.preventDefault(),(r=(u=m.value)==null?void 0:u.input)==null||r.click()}return Y(()=>{const[i,u]=Z(C),r=k.filterProps(e),z=g.filterProps(e);return t(k,w({class:["v-switch",{"v-switch--flat":e.flat},{"v-switch--inset":e.inset},{"v-switch--indeterminate":n.value},S.value,e.class]},i,r,{modelValue:s.value,"onUpdate:modelValue":c=>s.value=c,id:A.value,focused:P.value,style:e.style}),{...a,default:c=>{let{id:D,messagesId:L,isDisabled:U,isReadonly:N,isValid:h}=c;const d={model:s,isValid:h};return t(g,w({ref:m},z,{modelValue:s.value,"onUpdate:modelValue":[o=>s.value=o,B],id:D.value,"aria-describedby":L.value,type:"checkbox","aria-checked":n.value?"mixed":void 0,disabled:U.value,readonly:N.value,onFocus:_,onBlur:x},u),{...a,default:o=>{let{backgroundColorClasses:f,backgroundColorStyles:l}=o;return t("div",{class:["v-switch__track",...f.value],style:l.value,onClick:F},[a["track-true"]&&t("div",{key:"prepend",class:"v-switch__track-true"},[a["track-true"](d)]),a["track-false"]&&t("div",{key:"append",class:"v-switch__track-false"},[a["track-false"](d)])])},input:o=>{let{inputNode:f,icon:l,backgroundColorClasses:R,backgroundColorStyles:T}=o;return t(ee,null,[f,t("div",{class:["v-switch__thumb",{"v-switch__thumb--filled":l||e.loading},e.inset?void 0:R.value],style:e.inset?void 0:T.value},[a.thumb?t(q,{defaults:{VIcon:{icon:l,size:"x-small"}}},{default:()=>[a.thumb({...d,icon:l})]}):t(W,null,{default:()=>[e.loading?t(G,{name:"v-switch",active:!0,color:h.value===!1?void 0:I.value},{default:v=>a.loader?a.loader(v):t(X,{active:v.isActive,color:v.color,indeterminate:!0,size:"16",width:"2"},null)}):l&&t(E,{key:String(l),icon:l,size:"x-small"},null)]})])])}})}})}),{}}});export{oe as V};
