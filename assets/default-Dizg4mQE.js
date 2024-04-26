import{_ as W,V as z,a as j,b as q,c as O}from"./VContainer-DWECXwI-.js";import{p as C,m as H,a as L,g as P,u as I,c as a,b as G,t as R,d as J,e as K,s as _,f as m,h as Y,i as k,r as S,j as Q,w as B,o as D,k as X,l as Z,n as ee,q as te,v as ae,x as le,y as $,z as oe,A as se,B as ne,C as re,D as p,V as ie,E as ue,F as ce,G as de,H as ve,I as A,J as me,K as fe,L as ge}from"./index-BM4827qe.js";import{V as he,a as be}from"./VInput-Itdv4raA.js";import{V as pe}from"./VSpacer-Dj1D5w-H.js";import{V as ye,a as _e}from"./VChip-BRNZ0QEs.js";import{m as Ve,a as Se,b as Te,u as xe,c as Be,d as we,e as ke,V as Ce,f as N}from"./VCard-DO0BZtUi.js";import"./VTextField-CFevf7Dy.js";const F=C({text:String,...H(),...L()},"VToolbarTitle"),M=P()({name:"VToolbarTitle",props:F(),setup(e,u){let{slots:t}=u;return I(()=>{const c=!!(t.default||t.text||e.text);return a(e.tag,{class:["v-toolbar-title",e.class],style:e.style},{default:()=>{var s;return[c&&a("div",{class:"v-toolbar-title__placeholder"},[t.text?t.text():e.text,(s=t.default)==null?void 0:s.call(t)])]}})}),{}}}),Pe=[null,"prominent","default","comfortable","compact"],U=C({absolute:Boolean,collapse:Boolean,color:String,density:{type:String,default:"default",validator:e=>Pe.includes(e)},extended:Boolean,extensionHeight:{type:[Number,String],default:48},flat:Boolean,floating:Boolean,height:{type:[Number,String],default:64},image:String,title:String,...Ve(),...H(),...Se(),...Te(),...L({tag:"header"}),...G()},"VToolbar"),E=P()({name:"VToolbar",props:U(),setup(e,u){var n;let{slots:t}=u;const{backgroundColorClasses:c,backgroundColorStyles:s}=xe(R(e,"color")),{borderClasses:o}=Be(e),{elevationClasses:f}=we(e),{roundedClasses:d}=ke(e),{themeClasses:g}=J(e),{rtlClasses:i}=K(),l=_(!!(e.extended||(n=t.extension)!=null&&n.call(t))),h=m(()=>parseInt(Number(e.height)+(e.density==="prominent"?Number(e.height):0)-(e.density==="comfortable"?8:0)-(e.density==="compact"?16:0),10)),v=m(()=>l.value?parseInt(Number(e.extensionHeight)+(e.density==="prominent"?Number(e.extensionHeight):0)-(e.density==="comfortable"?4:0)-(e.density==="compact"?8:0),10):0);return Y({VBtn:{variant:"text"}}),I(()=>{var r;const b=!!(e.title||t.title),V=!!(t.image||e.image),w=(r=t.extension)==null?void 0:r.call(t);return l.value=!!(e.extended||w),a(e.tag,{class:["v-toolbar",{"v-toolbar--absolute":e.absolute,"v-toolbar--collapse":e.collapse,"v-toolbar--flat":e.flat,"v-toolbar--floating":e.floating,[`v-toolbar--density-${e.density}`]:!0},c.value,o.value,f.value,d.value,g.value,i.value,e.class],style:[s.value,e.style]},{default:()=>[V&&a("div",{key:"image",class:"v-toolbar__image"},[t.image?a(N,{key:"image-defaults",disabled:!e.image,defaults:{VImg:{cover:!0,src:e.image}}},t.image):a(Ce,{key:"image-img",cover:!0,src:e.image},null)]),a(N,{defaults:{VTabs:{height:k(h.value)}}},{default:()=>{var y,T,x;return[a("div",{class:"v-toolbar__content",style:{height:k(h.value)}},[t.prepend&&a("div",{class:"v-toolbar__prepend"},[(y=t.prepend)==null?void 0:y.call(t)]),b&&a(M,{key:"title",text:e.title},{text:t.title}),(T=t.default)==null?void 0:T.call(t),t.append&&a("div",{class:"v-toolbar__append"},[(x=t.append)==null?void 0:x.call(t)])])]}}),a(N,{defaults:{VTabs:{height:k(v.value)}}},{default:()=>[a(he,null,{default:()=>[l.value&&a("div",{class:"v-toolbar__extension",style:{height:k(v.value)}},[w])]})]})]})}),{contentHeight:h,extensionHeight:v}}}),Ie=C({scrollTarget:{type:String},scrollThreshold:{type:[String,Number],default:300}},"scroll");function Ae(e){let u=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{canScroll:t}=u;let c=0;const s=S(null),o=_(0),f=_(0),d=_(0),g=_(!1),i=_(!1),l=m(()=>Number(e.scrollThreshold)),h=m(()=>Q((l.value-o.value)/l.value||0)),v=()=>{const n=s.value;!n||t&&!t.value||(c=o.value,o.value="window"in n?n.pageYOffset:n.scrollTop,i.value=o.value<c,d.value=Math.abs(o.value-l.value))};return B(i,()=>{f.value=f.value||o.value}),B(g,()=>{f.value=0}),D(()=>{B(()=>e.scrollTarget,n=>{var V;const b=n?document.querySelector(n):window;b&&b!==s.value&&((V=s.value)==null||V.removeEventListener("scroll",v),s.value=b,s.value.addEventListener("scroll",v,{passive:!0}))},{immediate:!0})}),X(()=>{var n;(n=s.value)==null||n.removeEventListener("scroll",v)}),t&&B(t,v,{immediate:!0}),{scrollThreshold:l,currentScroll:o,currentThreshold:d,isScrollActive:g,scrollRatio:h,isScrollingUp:i,savedScroll:f}}const Ne=C({scrollBehavior:String,modelValue:{type:Boolean,default:!0},location:{type:String,default:"top",validator:e=>["top","bottom"].includes(e)},...U(),...Z(),...Ie(),height:{type:[Number,String],default:64}},"VAppBar"),Re=P()({name:"VAppBar",props:Ne(),emits:{"update:modelValue":e=>!0},setup(e,u){let{slots:t}=u;const c=S(),s=ee(e,"modelValue"),o=m(()=>{var y;const r=new Set(((y=e.scrollBehavior)==null?void 0:y.split(" "))??[]);return{hide:r.has("hide"),inverted:r.has("inverted"),collapse:r.has("collapse"),elevate:r.has("elevate"),fadeImage:r.has("fade-image")}}),f=m(()=>{const r=o.value;return r.hide||r.inverted||r.collapse||r.elevate||r.fadeImage||!s.value}),{currentScroll:d,scrollThreshold:g,isScrollingUp:i,scrollRatio:l}=Ae(e,{canScroll:f}),h=m(()=>e.collapse||o.value.collapse&&(o.value.inverted?l.value>0:l.value===0)),v=m(()=>e.flat||o.value.elevate&&(o.value.inverted?d.value>0:d.value===0)),n=m(()=>o.value.fadeImage?o.value.inverted?1-l.value:l.value:void 0),b=m(()=>{var T,x;if(o.value.hide&&o.value.inverted)return 0;const r=((T=c.value)==null?void 0:T.contentHeight)??0,y=((x=c.value)==null?void 0:x.extensionHeight)??0;return r+y});te(m(()=>!!e.scrollBehavior),()=>{oe(()=>{o.value.hide?o.value.inverted?s.value=d.value>g.value:s.value=i.value||d.value<g.value:s.value=!0})});const{ssrBootStyles:V}=ae(),{layoutItemStyles:w}=le({id:e.name,order:m(()=>parseInt(e.order,10)),position:R(e,"location"),layoutSize:b,elementSize:_(void 0),active:s,absolute:R(e,"absolute")});return I(()=>{const r=E.filterProps(e);return a(E,$({ref:c,class:["v-app-bar",{"v-app-bar--bottom":e.location==="bottom"},e.class],style:[{...w.value,"--v-toolbar-image-opacity":n.value,height:void 0,...V.value},e.style]},r,{collapse:h.value,flat:v.value}),t)}),{}}}),Ee=P()({name:"VAppBarTitle",props:F(),setup(e,u){let{slots:t}=u;return I(()=>a(M,$(e,{class:"v-app-bar-title"}),t)),{}}}),He=ge("img",{src:j,height:"70%"},null,-1),ze=se({__name:"default",setup(e){const u=ne(),t=m(()=>u.currentWallet),c=S(0),s=S(0);S(!1);const o=ce(),f=S(null);function d(i){o.push(i)}const g=async(i,l,h,v,n)=>(n?s.value--:s.value++,!0);return B(()=>u.currentWallet,async i=>{const l=u.dltApi();l&&i&&(l.setProcessingCallback(g),c.value=await l.walletBalance(i),console.log("wallet balance",c.value))}),D(async()=>{const i=ue();i.length==1&&(u.selectedProvider=i[0].info);const l=u.dltApi();if(!l){d("/wallets");return}l.setProcessingCallback(g),t.value?c.value=await l.walletBalance(t.value):d("/wallets"),f.value&&(u.walletPasswordComponent=f.value)}),(i,l)=>{const h=q,v=de("RouterView"),n=O;return ve(),re(ie,null,{default:p(()=>[a(Re,{elevation:2,app:""},{prepend:p(()=>[He]),default:p(()=>[a(Ee,null,{default:p(()=>[A(" e-banking")]),_:1}),a(be,{onClick:l[0]||(l[0]=b=>d("/"))},{default:p(()=>[A("Home")]),_:1}),a(pe),a(ye,{color:c.value==0?"red":"primary",onClick:l[1]||(l[1]=b=>d("/wallets"))},{default:p(()=>[A(me(t.value||"no wallet created"),1)]),_:1},8,["color"])]),_:1}),a(W,{ref_key:"walletPassword",ref:f},null,512),a(_e,{"model-value":s.value>0,class:"align-center justify-center",persistent:""},{default:p(()=>[a(h,{"model-value":s.value>0},null,8,["model-value"])]),_:1},8,["model-value"]),a(fe,null,{default:p(()=>[a(z,{fluid:"","ma-0":"","pa-0":"","fill-height":""},{default:p(()=>[a(v)]),_:1})]),_:1}),a(n)]),_:1})}}});export{ze as default};
