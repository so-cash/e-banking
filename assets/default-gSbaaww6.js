import{m as K,a as Q,b as ee,u as te,c as ae,d as le,e as oe,V as me,f as H,g as ge,h as he,i as pe,j as be,k as Ve,l as ye}from"./VCard-DpUKK_NB.js";import{p as C,o as _e,g as P,u as W,a as Se,c as h,b as T,f as ke,d as o,m as I,e as U,h as se,i as j,j as ne,k as re,t as R,s as k,l as xe,n as ue,q as A,r as z,v as F,w as M,x as p,y as Ce,F as Pe,z as Te,A as L,B as S,C as N,D as we,E as Be,G as V,H as x,I as O,J as Ie,K as Ee,L as Le,M as q,N as ie,O as Ae,P as Re,Q as Fe,R as He,S as Ne,T as De,U as Ue,V as je,W as Y,X as ze,Y as Me,Z as $e,_ as We}from"./index-D_cL5hxC.js";import{m as Oe,u as qe,V as Z,a as Ye,b as D,c as Ze}from"./VInput-DFLXbOz7.js";import{f as Ge,V as G}from"./VTextField-BhhzUg8Y.js";import{m as Xe,V as X,a as Je,b as Ke,u as Qe,c as $,d as et}from"./VOverlay-Bt00MQ3Z.js";const tt=C({...Oe(),..._e(Xe(),["inline"])},"VCheckbox"),at=P()({name:"VCheckbox",inheritAttrs:!1,props:tt(),emits:{"update:modelValue":e=>!0,"update:focused":e=>!0},setup(e,d){let{attrs:t,slots:s}=d;const a=W(e,"modelValue"),{isFocused:l,focus:f,blur:m}=qe(e),n=Se(),u=h(()=>e.id||`checkbox-${n}`);return T(()=>{const[v,r]=ke(t),i=Z.filterProps(e),c=X.filterProps(e);return o(Z,I({class:["v-checkbox",e.class]},v,i,{modelValue:a.value,"onUpdate:modelValue":b=>a.value=b,id:u.value,focused:l.value,style:e.style}),{...s,default:b=>{let{id:y,messagesId:E,isDisabled:g,isReadonly:_,isValid:w}=b;return o(X,I(c,{id:y.value,"aria-describedby":E.value,disabled:g.value,readonly:_.value},r,{error:w.value===!1,modelValue:a.value,"onUpdate:modelValue":B=>a.value=B,onFocus:f,onBlur:m}),s)}})}),{}}}),lt=C({app:Boolean,color:String,height:{type:[Number,String],default:"auto"},...K(),...U(),...Q(),...se(),...ee(),...j({tag:"footer"}),...ne()},"VFooter"),ot=P()({name:"VFooter",props:lt(),setup(e,d){let{slots:t}=d;const{themeClasses:s}=re(e),{backgroundColorClasses:a,backgroundColorStyles:l}=te(R(e,"color")),{borderClasses:f}=ae(e),{elevationClasses:m}=le(e),{roundedClasses:n}=oe(e),u=k(32),{resizeRef:v}=xe(c=>{c.length&&(u.value=c[0].target.clientHeight)}),r=h(()=>e.height==="auto"?u.value:parseInt(e.height,10)),{layoutItemStyles:i}=ue({id:e.name,order:h(()=>parseInt(e.order,10)),position:h(()=>"bottom"),layoutSize:r,elementSize:h(()=>e.height==="auto"?void 0:r.value),active:h(()=>e.app),absolute:R(e,"absolute")});return T(()=>o(e.tag,{ref:v,class:["v-footer",s.value,a.value,f.value,m.value,n.value,e.class],style:[l.value,e.app?i.value:{height:A(e.height)},e.style]},t)),{}}}),ce=e=>(we("data-v-0f9170e1"),e=e(),Be(),e),st=["href","title"],nt={class:"text-caption text-disabled",style:{position:"absolute",right:"16px"}},rt=ce(()=>L("span",{class:"d-none d-sm-inline-block"},"Vuetify, LLC",-1)),ut=ce(()=>L("a",{class:"text-decoration-none on-surface",href:"https://vuetifyjs.com/about/licensing/",rel:"noopener noreferrer",target:"_blank"}," MIT License ",-1)),it=z({__name:"AppFooter",setup(e){const d=[{title:"Vuetify Documentation",icon:"$vuetify",href:"https://vuetifyjs.com/"},{title:"Vuetify Support",icon:"mdi-shield-star-outline",href:"https://support.vuetifyjs.com/"},{title:"Vuetify X",icon:"svg:M2.04875 3.00002L9.77052 13.3248L1.99998 21.7192H3.74882L10.5519 14.3697L16.0486 21.7192H22L13.8437 10.8137L21.0765 3.00002H19.3277L13.0624 9.76874L8.0001 3.00002H2.04875ZM4.62054 4.28821H7.35461L19.4278 20.4308H16.6937L4.62054 4.28821Z",href:"https://x.com/vuetifyjs"},{title:"Vuetify GitHub",icon:"mdi-github",href:"https://github.com/vuetifyjs/vuetify"},{title:"Vuetify Discord",icon:"mdi-discord",href:"https://community.vuetifyjs.com/"},{title:"Vuetify Reddit",icon:"mdi-reddit",href:"https://reddit.com/r/vuetifyjs"}];return(t,s)=>(F(),M(ot,{height:"40",app:""},{default:p(()=>[(F(),Ce(Pe,null,Te(d,a=>L("a",{key:a.title,href:a.href,title:a.title,class:"d-inline-block mx-2 social-link",rel:"noopener noreferrer",target:"_blank"},[o(me,{icon:a.icon,size:a.icon==="$vuetify"?24:16},null,8,["icon","size"])],8,st)),64)),L("div",nt,[S(" © 2016-"+N(new Date().getFullYear())+" ",1),rt,S(" — "),ut])]),_:1}))}}),ct=(e,d)=>{const t=e.__vccOpts||e;for(const[s,a]of d)t[s]=a;return t},dt=ct(it,[["__scopeId","data-v-0f9170e1"]]),vt=z({__name:"CircularProgress",props:{modelValue:{type:Boolean}},setup(e){const d=e,t=V(0),s=V(0),a=V(!0),l=V(0),f=Math.floor(100*100/(4*1e3)),m=Math.floor(100*360/(4*1e3));function n(){setTimeout(()=>{d.modelValue&&(a.value?(t.value+=f,s.value=0):(s.value+=m,t.value=100*(360-s.value)/360),l.value+=100,t.value>100&&(a.value=!1,s.value=0),s.value>360&&(a.value=!0,t.value=0),d.modelValue&&n())},100)}return x(()=>d.modelValue,u=>{console.log("actionInProgress",u),u?n():(t.value=0,l.value=0,s.value=0,a.value=!0)}),O(()=>{d.modelValue&&n()}),(u,v)=>(F(),M(Ye,{color:"primary",size:"64",width:"12","model-value":t.value,rotate:s.value},null,8,["model-value","rotate"]))}}),ft="/e-banking/assets/so-cash-C1dCN6j5.png",mt=C({fullscreen:Boolean,retainFocus:{type:Boolean,default:!0},scrollable:Boolean,...Je({origin:"center center",scrollStrategy:"block",transition:{component:Ke},zIndex:2400})},"VDialog"),gt=P()({name:"VDialog",props:mt(),emits:{"click:outside":e=>!0,"update:modelValue":e=>!0,afterLeave:()=>!0},setup(e,d){let{slots:t}=d;const s=W(e,"modelValue"),{scopeId:a}=Qe(),l=V();function f(n){var r,i;const u=n.relatedTarget,v=n.target;if(u!==v&&((r=l.value)!=null&&r.contentEl)&&((i=l.value)!=null&&i.globalTop)&&![document,l.value.contentEl].includes(v)&&!l.value.contentEl.contains(v)){const c=Le(l.value.contentEl);if(!c.length)return;const b=c[0],y=c[c.length-1];u===b?y.focus():b.focus()}}Ie&&x(()=>s.value&&e.retainFocus,n=>{n?document.addEventListener("focusin",f):document.removeEventListener("focusin",f)},{immediate:!0});function m(){var n;(n=l.value)!=null&&n.contentEl&&!l.value.contentEl.contains(document.activeElement)&&l.value.contentEl.focus({preventScroll:!0})}return x(s,async n=>{var u;n||(await Ee(),(u=l.value.activatorEl)==null||u.focus({preventScroll:!0}))}),T(()=>{const n=$.filterProps(e),u=I({"aria-haspopup":"dialog","aria-expanded":String(s.value)},e.activatorProps),v=I({tabindex:-1},e.contentProps);return o($,I({ref:l,class:["v-dialog",{"v-dialog--fullscreen":e.fullscreen,"v-dialog--scrollable":e.scrollable},e.class],style:e.style},n,{modelValue:s.value,"onUpdate:modelValue":r=>s.value=r,"aria-modal":"true",activatorProps:u,contentProps:v,role:"dialog",onAfterEnter:m},a),{activator:t.activator,default:function(){for(var r=arguments.length,i=new Array(r),c=0;c<r;c++)i[c]=arguments[c];return o(H,{root:"VDialog"},{default:()=>{var b;return[(b=t.default)==null?void 0:b.call(t,...i)]}})}})}),Ge({},l)}}),ht=z({__name:"WalletPassword",setup(e,{expose:d}){const t=V(""),s=V(""),a=V(""),l=V(!1),f=V(!1);let m=()=>{},n=()=>{};async function u(v,r){return t.value=v,s.value=r,a.value="",l.value=!1,f.value=!0,await new Promise(i=>{m=()=>{f.value=!1,i({address:r,password:a.value,ok:!0,saveSession:l.value})},n=()=>{f.value=!1,i({address:r,ok:!1,saveSession:!1})}})}return d({requestPassword:u}),(v,r)=>(F(),M(gt,{permanent:"",modelValue:f.value,"onUpdate:modelValue":r[3]||(r[3]=i=>f.value=i)},{default:p(()=>[o(be,null,{default:p(()=>[o(ge,null,{default:p(()=>[S("Sign the transaction for "+N(s.value),1)]),_:1}),o(he,null,{default:p(()=>[L("div",null,"Name: "+N(t.value),1),o(G,{modelValue:t.value,"onUpdate:modelValue":r[0]||(r[0]=i=>t.value=i),style:{display:"none"},autocomplete:"username"},null,8,["modelValue"]),o(G,{modelValue:a.value,"onUpdate:modelValue":r[1]||(r[1]=i=>a.value=i),label:"Password",type:"password",autocomplete:"current-password"},null,8,["modelValue"]),o(at,{modelValue:l.value,"onUpdate:modelValue":r[2]||(r[2]=i=>l.value=i),label:"Save session"},null,8,["modelValue"])]),_:1}),o(pe,null,{default:p(()=>[o(D,{color:"primary",onClick:q(m)},{default:p(()=>[S("Confirm")]),_:1},8,["onClick"]),o(D,{color:"secondary",onClick:q(n)},{default:p(()=>[S("Cancel")]),_:1},8,["onClick"])]),_:1})]),_:1})]),_:1},8,["modelValue"]))}}),de=C({text:String,...U(),...j()},"VToolbarTitle"),ve=P()({name:"VToolbarTitle",props:de(),setup(e,d){let{slots:t}=d;return T(()=>{const s=!!(t.default||t.text||e.text);return o(e.tag,{class:["v-toolbar-title",e.class],style:e.style},{default:()=>{var a;return[s&&o("div",{class:"v-toolbar-title__placeholder"},[t.text?t.text():e.text,(a=t.default)==null?void 0:a.call(t)])]}})}),{}}}),pt=[null,"prominent","default","comfortable","compact"],fe=C({absolute:Boolean,collapse:Boolean,color:String,density:{type:String,default:"default",validator:e=>pt.includes(e)},extended:Boolean,extensionHeight:{type:[Number,String],default:48},flat:Boolean,floating:Boolean,height:{type:[Number,String],default:64},image:String,title:String,...K(),...U(),...Q(),...ee(),...j({tag:"header"}),...ne()},"VToolbar"),J=P()({name:"VToolbar",props:fe(),setup(e,d){var c;let{slots:t}=d;const{backgroundColorClasses:s,backgroundColorStyles:a}=te(R(e,"color")),{borderClasses:l}=ae(e),{elevationClasses:f}=le(e),{roundedClasses:m}=oe(e),{themeClasses:n}=re(e),{rtlClasses:u}=ie(),v=k(!!(e.extended||(c=t.extension)!=null&&c.call(t))),r=h(()=>parseInt(Number(e.height)+(e.density==="prominent"?Number(e.height):0)-(e.density==="comfortable"?8:0)-(e.density==="compact"?16:0),10)),i=h(()=>v.value?parseInt(Number(e.extensionHeight)+(e.density==="prominent"?Number(e.extensionHeight):0)-(e.density==="comfortable"?4:0)-(e.density==="compact"?8:0),10):0);return Ae({VBtn:{variant:"text"}}),T(()=>{var g;const b=!!(e.title||t.title),y=!!(t.image||e.image),E=(g=t.extension)==null?void 0:g.call(t);return v.value=!!(e.extended||E),o(e.tag,{class:["v-toolbar",{"v-toolbar--absolute":e.absolute,"v-toolbar--collapse":e.collapse,"v-toolbar--flat":e.flat,"v-toolbar--floating":e.floating,[`v-toolbar--density-${e.density}`]:!0},s.value,l.value,f.value,m.value,n.value,u.value,e.class],style:[a.value,e.style]},{default:()=>[y&&o("div",{key:"image",class:"v-toolbar__image"},[t.image?o(H,{key:"image-defaults",disabled:!e.image,defaults:{VImg:{cover:!0,src:e.image}}},t.image):o(Ve,{key:"image-img",cover:!0,src:e.image},null)]),o(H,{defaults:{VTabs:{height:A(r.value)}}},{default:()=>{var _,w,B;return[o("div",{class:"v-toolbar__content",style:{height:A(r.value)}},[t.prepend&&o("div",{class:"v-toolbar__prepend"},[(_=t.prepend)==null?void 0:_.call(t)]),b&&o(ve,{key:"title",text:e.title},{text:t.title}),(w=t.default)==null?void 0:w.call(t),t.append&&o("div",{class:"v-toolbar__append"},[(B=t.append)==null?void 0:B.call(t)])])]}}),o(H,{defaults:{VTabs:{height:A(i.value)}}},{default:()=>[o(Ze,null,{default:()=>[v.value&&o("div",{class:"v-toolbar__extension",style:{height:A(i.value)}},[E])]})]})]})}),{contentHeight:r,extensionHeight:i}}}),bt=C({scrollTarget:{type:String},scrollThreshold:{type:[String,Number],default:300}},"scroll");function Vt(e){let d=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{canScroll:t}=d;let s=0;const a=V(null),l=k(0),f=k(0),m=k(0),n=k(!1),u=k(!1),v=h(()=>Number(e.scrollThreshold)),r=h(()=>Re((v.value-l.value)/v.value||0)),i=()=>{const c=a.value;!c||t&&!t.value||(s=l.value,l.value="window"in c?c.pageYOffset:c.scrollTop,u.value=l.value<s,m.value=Math.abs(l.value-v.value))};return x(u,()=>{f.value=f.value||l.value}),x(n,()=>{f.value=0}),O(()=>{x(()=>e.scrollTarget,c=>{var y;const b=c?document.querySelector(c):window;b&&b!==a.value&&((y=a.value)==null||y.removeEventListener("scroll",i),a.value=b,a.value.addEventListener("scroll",i,{passive:!0}))},{immediate:!0})}),Fe(()=>{var c;(c=a.value)==null||c.removeEventListener("scroll",i)}),t&&x(t,i,{immediate:!0}),{scrollThreshold:v,currentScroll:l,currentThreshold:m,isScrollActive:n,scrollRatio:r,isScrollingUp:u,savedScroll:f}}const yt=C({scrollBehavior:String,modelValue:{type:Boolean,default:!0},location:{type:String,default:"top",validator:e=>["top","bottom"].includes(e)},...fe(),...se(),...bt(),height:{type:[Number,String],default:64}},"VAppBar"),_t=P()({name:"VAppBar",props:yt(),emits:{"update:modelValue":e=>!0},setup(e,d){let{slots:t}=d;const s=V(),a=W(e,"modelValue"),l=h(()=>{var _;const g=new Set(((_=e.scrollBehavior)==null?void 0:_.split(" "))??[]);return{hide:g.has("hide"),inverted:g.has("inverted"),collapse:g.has("collapse"),elevate:g.has("elevate"),fadeImage:g.has("fade-image")}}),f=h(()=>{const g=l.value;return g.hide||g.inverted||g.collapse||g.elevate||g.fadeImage||!a.value}),{currentScroll:m,scrollThreshold:n,isScrollingUp:u,scrollRatio:v}=Vt(e,{canScroll:f}),r=h(()=>e.collapse||l.value.collapse&&(l.value.inverted?v.value>0:v.value===0)),i=h(()=>e.flat||l.value.elevate&&(l.value.inverted?m.value>0:m.value===0)),c=h(()=>l.value.fadeImage?l.value.inverted?1-v.value:v.value:void 0),b=h(()=>{var w,B;if(l.value.hide&&l.value.inverted)return 0;const g=((w=s.value)==null?void 0:w.contentHeight)??0,_=((B=s.value)==null?void 0:B.extensionHeight)??0;return g+_});He(h(()=>!!e.scrollBehavior),()=>{De(()=>{l.value.hide?l.value.inverted?a.value=m.value>n.value:a.value=u.value||m.value<n.value:a.value=!0})});const{ssrBootStyles:y}=Ne(),{layoutItemStyles:E}=ue({id:e.name,order:h(()=>parseInt(e.order,10)),position:R(e,"location"),layoutSize:b,elementSize:k(void 0),active:a,absolute:R(e,"absolute")});return T(()=>{const g=J.filterProps(e);return o(J,I({ref:s,class:["v-app-bar",{"v-app-bar--bottom":e.location==="bottom"},e.class],style:[{...E.value,"--v-toolbar-image-opacity":c.value,height:void 0,...y.value},e.style]},g,{collapse:r.value,flat:i.value}),t)}),{}}}),St=P()({name:"VAppBarTitle",props:de(),setup(e,d){let{slots:t}=d;return T(()=>o(ve,I(e,{class:"v-app-bar-title"}),t)),{}}}),kt=C({fluid:{type:Boolean,default:!1},...U(),...j()},"VContainer"),xt=P()({name:"VContainer",props:kt(),setup(e,d){let{slots:t}=d;const{rtlClasses:s}=ie();return T(()=>o(e.tag,{class:["v-container",{"v-container--fluid":e.fluid},s.value,e.class],style:e.style},t)),{}}}),Ct=ye("v-spacer","div","VSpacer"),Pt=L("img",{src:ft,height:"70%"},null,-1),Lt=z({__name:"default",setup(e){const d=Ue();je();const t=h(()=>d.currentWallet),s=V(0),a=V(0);V(!1);const l=Me(),f=V(null);function m(n){l.push(n)}return x(()=>d.currentWallet,async n=>{const u=Y.get();n&&(s.value=await u.walletBalance(n)),console.log("wallet balance",s.value)}),O(async()=>{const n=Y.get();n.setProcessingCallback(async(u,v,r,i,c)=>(c?a.value--:a.value++,!0)),t.value?s.value=await n.walletBalance(t.value):m("/wallets/new"),f.value&&(d.walletPasswordComponent=f.value)}),(n,u)=>{const v=vt,r=$e("RouterView"),i=dt;return F(),M(ze,null,{default:p(()=>[o(_t,{elevation:2,app:""},{prepend:p(()=>[Pt]),default:p(()=>[o(St,null,{default:p(()=>[S(" e-banking")]),_:1}),o(D,{onClick:u[0]||(u[0]=c=>m("/"))},{default:p(()=>[S("Home")]),_:1}),o(Ct),o(D,{onClick:u[1]||(u[1]=c=>m("/wallets"))},{default:p(()=>[S("Wallets")]),_:1}),o(et,{color:s.value==0?"red":"primary"},{default:p(()=>[S(N(t.value||"no wallet created"),1)]),_:1},8,["color"])]),_:1}),o(ht,{ref_key:"walletPassword",ref:f},null,512),o($,{"model-value":a.value>0,class:"align-center justify-center",persistent:""},{default:p(()=>[o(v,{"model-value":a.value>0},null,8,["model-value"])]),_:1},8,["model-value"]),o(We,null,{default:p(()=>[o(xt,{fluid:"","ma-0":"","pa-0":"","fill-height":""},{default:p(()=>[o(r)]),_:1})]),_:1}),o(i)]),_:1})}}});export{Lt as default};
