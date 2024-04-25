import{p as P,m as U,l as X,a as j,b as Y,g as C,d as q,t as w,s as G,P as J,f as h,x as Q,u as x,c,i as K,A as E,H as _,C as B,D as g,M as ee,Q as te,R as ae,L as k,I as y,J as I,S as oe,T as se,r as p,w as L,o as le,U as ne,n as z,W as re,X as ue,y as b,Y as ie,Z as ce,_ as de,N as F,e as fe}from"./index-sYn4zpRH.js";import{m as me,a as ve,b as pe,u as Ve,c as ge,d as he,e as ye,j as be,f as ke,h as _e,i as Pe,k as Ce,g as xe,l as Se}from"./VCard-DVcoeF_5.js";import{b as Ie,m as Le,u as Ee,c as T,a as R}from"./VInput-CHHdvrRo.js";import{f as Be,V as D}from"./VTextField-tELjM1Q6.js";import{m as we,b as A,c as Fe,d as Te,u as Re,a as H}from"./VChip-ClBnAa4N.js";const De=P({app:Boolean,color:String,height:{type:[Number,String],default:"auto"},...me(),...U(),...ve(),...X(),...pe(),...j({tag:"footer"}),...Y()},"VFooter"),Ae=C()({name:"VFooter",props:De(),setup(e,u){let{slots:t}=u;const{themeClasses:a}=q(e),{backgroundColorClasses:o,backgroundColorStyles:l}=Ve(w(e,"color")),{borderClasses:d}=ge(e),{elevationClasses:v}=he(e),{roundedClasses:n}=ye(e),i=G(32),{resizeRef:m}=J(f=>{f.length&&(i.value=f[0].target.clientHeight)}),s=h(()=>e.height==="auto"?i.value:parseInt(e.height,10)),{layoutItemStyles:r}=Q({id:e.name,order:h(()=>parseInt(e.order,10)),position:h(()=>"bottom"),layoutSize:s,elementSize:h(()=>e.height==="auto"?void 0:s.value),active:h(()=>e.app),absolute:w(e,"absolute")});return x(()=>c(e.tag,{ref:m,class:["v-footer",a.value,o.value,d.value,v.value,n.value,e.class],style:[l.value,e.app?r.value:{height:K(e.height)},e.style]},t)),{}}}),M=e=>(oe("data-v-0f9170e1"),e=e(),se(),e),He=["href","title"],Ue={class:"text-caption text-disabled",style:{position:"absolute",right:"16px"}},je=M(()=>k("span",{class:"d-none d-sm-inline-block"},"Vuetify, LLC",-1)),ze=M(()=>k("a",{class:"text-decoration-none on-surface",href:"https://vuetifyjs.com/about/licensing/",rel:"noopener noreferrer",target:"_blank"}," MIT License ",-1)),Me=E({__name:"AppFooter",setup(e){const u=[{title:"Vuetify Documentation",icon:"$vuetify",href:"https://vuetifyjs.com/"},{title:"Vuetify Support",icon:"mdi-shield-star-outline",href:"https://support.vuetifyjs.com/"},{title:"Vuetify X",icon:"svg:M2.04875 3.00002L9.77052 13.3248L1.99998 21.7192H3.74882L10.5519 14.3697L16.0486 21.7192H22L13.8437 10.8137L21.0765 3.00002H19.3277L13.0624 9.76874L8.0001 3.00002H2.04875ZM4.62054 4.28821H7.35461L19.4278 20.4308H16.6937L4.62054 4.28821Z",href:"https://x.com/vuetifyjs"},{title:"Vuetify GitHub",icon:"mdi-github",href:"https://github.com/vuetifyjs/vuetify"},{title:"Vuetify Discord",icon:"mdi-discord",href:"https://community.vuetifyjs.com/"},{title:"Vuetify Reddit",icon:"mdi-reddit",href:"https://reddit.com/r/vuetifyjs"}];return(t,a)=>(_(),B(Ae,{height:"40",app:""},{default:g(()=>[(_(),ee(te,null,ae(u,o=>k("a",{key:o.title,href:o.href,title:o.title,class:"d-inline-block mx-2 social-link",rel:"noopener noreferrer",target:"_blank"},[c(be,{icon:o.icon,size:o.icon==="$vuetify"?24:16},null,8,["icon","size"])],8,He)),64)),k("div",Ue,[y(" © 2016-"+I(new Date().getFullYear())+" ",1),je,y(" — "),ze])]),_:1}))}}),Ne=(e,u)=>{const t=e.__vccOpts||e;for(const[a,o]of u)t[a]=o;return t},Ke=Ne(Me,[["__scopeId","data-v-0f9170e1"]]),et=E({__name:"CircularProgress",props:{modelValue:{type:Boolean}},setup(e){const u=e,t=p(0),a=p(0),o=p(!0),l=p(0),d=Math.floor(100*100/(4*1e3)),v=Math.floor(100*360/(4*1e3));function n(){setTimeout(()=>{u.modelValue&&(o.value?(t.value+=d,a.value=0):(a.value+=v,t.value=100*(360-a.value)/360),l.value+=100,t.value>100&&(o.value=!1,a.value=0),a.value>360&&(o.value=!0,t.value=0),u.modelValue&&n())},100)}return L(()=>u.modelValue,i=>{console.log("actionInProgress",i),i?n():(t.value=0,l.value=0,a.value=0,o.value=!0)}),le(()=>{u.modelValue&&n()}),(i,m)=>(_(),B(Ie,{color:"primary",size:"64",width:"12","model-value":t.value,rotate:a.value},null,8,["model-value","rotate"]))}}),tt="/e-banking/assets/so-cash-C1dCN6j5.png",Oe=P({...Le(),...ne(we(),["inline"])},"VCheckbox"),$e=C()({name:"VCheckbox",inheritAttrs:!1,props:Oe(),emits:{"update:modelValue":e=>!0,"update:focused":e=>!0},setup(e,u){let{attrs:t,slots:a}=u;const o=z(e,"modelValue"),{isFocused:l,focus:d,blur:v}=Ee(e),n=re(),i=h(()=>e.id||`checkbox-${n}`);return x(()=>{const[m,s]=ue(t),r=T.filterProps(e),f=A.filterProps(e);return c(T,b({class:["v-checkbox",e.class]},m,r,{modelValue:o.value,"onUpdate:modelValue":V=>o.value=V,id:i.value,focused:l.value,style:e.style}),{...a,default:V=>{let{id:S,messagesId:N,isDisabled:O,isReadonly:$,isValid:W}=V;return c(A,b(f,{id:S.value,"aria-describedby":N.value,disabled:O.value,readonly:$.value},s,{error:W.value===!1,modelValue:o.value,"onUpdate:modelValue":Z=>o.value=Z,onFocus:d,onBlur:v}),a)}})}),{}}}),We=P({fullscreen:Boolean,retainFocus:{type:Boolean,default:!0},scrollable:Boolean,...Fe({origin:"center center",scrollStrategy:"block",transition:{component:Te},zIndex:2400})},"VDialog"),Ze=C()({name:"VDialog",props:We(),emits:{"click:outside":e=>!0,"update:modelValue":e=>!0,afterLeave:()=>!0},setup(e,u){let{slots:t}=u;const a=z(e,"modelValue"),{scopeId:o}=Re(),l=p();function d(n){var s,r;const i=n.relatedTarget,m=n.target;if(i!==m&&((s=l.value)!=null&&s.contentEl)&&((r=l.value)!=null&&r.globalTop)&&![document,l.value.contentEl].includes(m)&&!l.value.contentEl.contains(m)){const f=de(l.value.contentEl);if(!f.length)return;const V=f[0],S=f[f.length-1];i===V?S.focus():V.focus()}}ie&&L(()=>a.value&&e.retainFocus,n=>{n?document.addEventListener("focusin",d):document.removeEventListener("focusin",d)},{immediate:!0});function v(){var n;(n=l.value)!=null&&n.contentEl&&!l.value.contentEl.contains(document.activeElement)&&l.value.contentEl.focus({preventScroll:!0})}return L(a,async n=>{var i;n||(await ce(),(i=l.value.activatorEl)==null||i.focus({preventScroll:!0}))}),x(()=>{const n=H.filterProps(e),i=b({"aria-haspopup":"dialog","aria-expanded":String(a.value)},e.activatorProps),m=b({tabindex:-1},e.contentProps);return c(H,b({ref:l,class:["v-dialog",{"v-dialog--fullscreen":e.fullscreen,"v-dialog--scrollable":e.scrollable},e.class],style:e.style},n,{modelValue:a.value,"onUpdate:modelValue":s=>a.value=s,"aria-modal":"true",activatorProps:i,contentProps:m,role:"dialog",onAfterEnter:v},o),{activator:t.activator,default:function(){for(var s=arguments.length,r=new Array(s),f=0;f<s;f++)r[f]=arguments[f];return c(ke,{root:"VDialog"},{default:()=>{var V;return[(V=t.default)==null?void 0:V.call(t,...r)]}})}})}),Be({},l)}}),at=E({__name:"WalletPassword",setup(e,{expose:u}){const t=p(""),a=p(""),o=p(""),l=p(!1),d=p(!1);let v=()=>{},n=()=>{};async function i(m,s){return t.value=m,a.value=s,o.value="",l.value=!1,d.value=!0,await new Promise(r=>{v=()=>{d.value=!1,r({address:s,password:o.value,ok:!0,saveSession:l.value})},n=()=>{d.value=!1,r({address:s,ok:!1,saveSession:!1})}})}return u({requestPassword:i}),(m,s)=>(_(),B(Ze,{permanent:"",modelValue:d.value,"onUpdate:modelValue":s[3]||(s[3]=r=>d.value=r)},{default:g(()=>[c(xe,null,{default:g(()=>[c(_e,null,{default:g(()=>[y("Sign the transaction for "+I(a.value),1)]),_:1}),c(Pe,null,{default:g(()=>[k("div",null,"Name: "+I(t.value),1),c(D,{modelValue:t.value,"onUpdate:modelValue":s[0]||(s[0]=r=>t.value=r),style:{display:"none"},autocomplete:"username"},null,8,["modelValue"]),c(D,{modelValue:o.value,"onUpdate:modelValue":s[1]||(s[1]=r=>o.value=r),label:"Password",type:"password",autocomplete:"current-password"},null,8,["modelValue"]),c($e,{modelValue:l.value,"onUpdate:modelValue":s[2]||(s[2]=r=>l.value=r),label:"Save session"},null,8,["modelValue"])]),_:1}),c(Ce,null,{default:g(()=>[c(R,{color:"primary",onClick:F(v)},{default:g(()=>[y("Confirm")]),_:1},8,["onClick"]),c(R,{color:"secondary",onClick:F(n)},{default:g(()=>[y("Cancel")]),_:1},8,["onClick"])]),_:1})]),_:1})]),_:1},8,["modelValue"]))}}),Xe=P({fluid:{type:Boolean,default:!1},...U(),...j()},"VContainer"),ot=C()({name:"VContainer",props:Xe(),setup(e,u){let{slots:t}=u;const{rtlClasses:a}=fe();return x(()=>c(e.tag,{class:["v-container",{"v-container--fluid":e.fluid},a.value,e.class],style:e.style},t)),{}}}),st=Se("v-spacer","div","VSpacer");export{st as V,at as _,ot as a,tt as b,et as c,Ke as d};