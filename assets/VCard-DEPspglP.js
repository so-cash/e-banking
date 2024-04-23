import{b6 as U,g as I,ar as at,b3 as it,m as P,b2 as Te,p as y,b4 as z,e as v,b7 as O,az as Ve,b8 as be,b9 as st,ba as rt,bb as lt,j as b,a1 as j,b as Q,c as Z,A as ue,d as ee,bc as ot,t as Y,h as B,bd as ut,be as ct,i as r,s as A,bf as ce,Q as Pe,B as X,F as K,M as ye,bg as dt,O as Le,E as vt,N as Ee,ay as Be,bh as mt,a9 as de,bi as Ce,ag as ft,J as gt,K as $e,al as ht,bj as bt,bk as Se,I as ze,b1 as yt,b5 as Ct,ab as ie,af as Ne,ac as St}from"./index-DSVT_0pq.js";const Re=["top","bottom"],_t=["start","end","left","right"];function pt(e,t){let[n,a]=e.split(" ");return a||(a=U(Re,n)?"start":U(_t,n)?"top":"center"),{side:_e(n,t),align:_e(a,t)}}function _e(e,t){return e==="start"?t?"right":"left":e==="end"?t?"left":"right":e}function fn(e){return{side:{center:"center",top:"bottom",bottom:"top",left:"right",right:"left"}[e.side],align:e.align}}function gn(e){return{side:e.side,align:{center:"center",top:"bottom",bottom:"top",left:"right",right:"left"}[e.align]}}function hn(e){return{side:e.align,align:e.side}}function bn(e){return U(Re,e.side)?"y":"x"}function ve(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:"div",n=arguments.length>2?arguments[2]:void 0;return I()({name:n??at(it(e.replace(/__/g,"-"))),props:{tag:{type:String,default:t},...P()},setup(a,s){let{slots:i}=s;return()=>{var l;return Te(a.tag,{class:[e,a.class],style:a.style},(l=i.default)==null?void 0:l.call(i))}}})}const kt=y({border:[Boolean,Number,String]},"border");function wt(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:z();return{borderClasses:v(()=>{const a=O(e)?e.value:e.border,s=[];if(a===!0||a==="")s.push(`${t}--border`);else if(typeof a=="string"||a===0)for(const i of String(a).split(" "))s.push(`border-${i}`);return s})}}function me(e){return Ve(()=>{const t=[],n={};if(e.value.background)if(be(e.value.background)){if(n.backgroundColor=e.value.background,!e.value.text&&st(e.value.background)){const a=rt(e.value.background);if(a.a==null||a.a===1){const s=lt(a);n.color=s,n.caretColor=s}}}else t.push(`bg-${e.value.background}`);return e.value.text&&(be(e.value.text)?(n.color=e.value.text,n.caretColor=e.value.text):t.push(`text-${e.value.text}`)),{colorClasses:t,colorStyles:n}})}function Ae(e,t){const n=v(()=>({text:O(e)?e.value:t?e[t]:null})),{colorClasses:a,colorStyles:s}=me(n);return{textColorClasses:a,textColorStyles:s}}function se(e,t){const n=v(()=>({background:O(e)?e.value:t?e[t]:null})),{colorClasses:a,colorStyles:s}=me(n);return{backgroundColorClasses:a,backgroundColorStyles:s}}const xt=y({elevation:{type:[Number,String],validator(e){const t=parseInt(e);return!isNaN(t)&&t>=0&&t<=24}}},"elevation");function It(e){return{elevationClasses:v(()=>{const n=O(e)?e.value:e.elevation,a=[];return n==null||a.push(`elevation-${n}`),a})}}const te=y({rounded:{type:[Boolean,Number,String],default:void 0},tile:Boolean},"rounded");function ne(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:z();return{roundedClasses:v(()=>{const a=O(e)?e.value:e.rounded,s=O(e)?e.value:e.tile,i=[];if(a===!0||a==="")i.push(`${t}--rounded`);else if(typeof a=="string"||a===0)for(const l of String(a).split(" "))i.push(`rounded-${l}`);else(s||a===!1)&&i.push("rounded-0");return i})}}const Tt=["x-small","small","default","large","x-large"],Oe=y({size:{type:[String,Number],default:"default"}},"size");function je(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:z();return Ve(()=>{let n,a;return U(Tt,e.size)?n=`${t}--size-${e.size}`:e.size&&(a={width:b(e.size),height:b(e.size)}),{sizeClasses:n,sizeStyles:a}})}const Vt=y({color:String,disabled:Boolean,start:Boolean,end:Boolean,icon:j,...P(),...Oe(),...Q({tag:"i"}),...Z()},"VIcon"),re=I()({name:"VIcon",props:Vt(),setup(e,t){let{attrs:n,slots:a}=t;const s=ue(),{themeClasses:i}=ee(e),{iconData:l}=ot(v(()=>s.value||e.icon)),{sizeClasses:o}=je(e),{textColorClasses:u,textColorStyles:d}=Ae(Y(e,"color"));return B(()=>{var h,g;const c=(h=a.default)==null?void 0:h.call(a);c&&(s.value=(g=ut(c).filter(S=>S.type===ct&&S.children&&typeof S.children=="string")[0])==null?void 0:g.children);const m=!!(n.onClick||n.onClickOnce);return r(l.value.component,{tag:e.tag,icon:l.value.icon,class:["v-icon","notranslate",i.value,o.value,u.value,{"v-icon--clickable":m,"v-icon--disabled":e.disabled,"v-icon--start":e.start,"v-icon--end":e.end},e.class],style:[o.value?void 0:{fontSize:b(e.size),height:b(e.size),width:b(e.size)},d.value,e.style],role:m?"button":void 0,"aria-hidden":!m,tabindex:m?e.disabled?-1:0:void 0},{default:()=>[c]})}),{}}});function Pt(e,t){const n=ue(),a=A(!1);if(ce){const s=new IntersectionObserver(i=>{e==null||e(i,s),a.value=!!i.find(l=>l.isIntersecting)},t);Pe(()=>{s.disconnect()}),X(n,(i,l)=>{l&&(s.unobserve(l),a.value=!1),i&&s.observe(i)},{flush:"post"})}return{intersectionRef:n,isIntersecting:a}}const Lt=[null,"default","comfortable","compact"],fe=y({density:{type:String,default:"default",validator:e=>Lt.includes(e)}},"density");function He(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:z();return{densityClasses:v(()=>`${t}--density-${e.density}`)}}const Et=["elevated","flat","tonal","outlined","text","plain"];function De(e,t){return r(K,null,[e&&r("span",{key:"overlay",class:`${t}__overlay`},null),r("span",{key:"underlay",class:`${t}__underlay`},null)])}const We=y({color:String,variant:{type:String,default:"elevated",validator:e=>Et.includes(e)}},"variant");function Fe(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:z();const n=v(()=>{const{variant:i}=ye(e);return`${t}--variant-${i}`}),{colorClasses:a,colorStyles:s}=me(v(()=>{const{variant:i,color:l}=ye(e);return{[["elevated","flat"].includes(i)?"background":"text"]:l}}));return{colorClasses:a,colorStyles:s,variantClasses:n}}const Bt=y({defaults:Object,disabled:Boolean,reset:[Number,String],root:[Boolean,String],scoped:Boolean},"VDefaultsProvider"),G=I(!1)({name:"VDefaultsProvider",props:Bt(),setup(e,t){let{slots:n}=t;const{defaults:a,disabled:s,reset:i,root:l,scoped:o}=dt(e);return Le(a,{reset:i,root:l,scoped:o,disabled:s}),()=>{var u;return(u=n.default)==null?void 0:u.call(n)}}}),Me=y({height:[Number,String],maxHeight:[Number,String],maxWidth:[Number,String],minHeight:[Number,String],minWidth:[Number,String],width:[Number,String]},"dimension");function qe(e){return{dimensionStyles:v(()=>({height:b(e.height),maxHeight:b(e.maxHeight),maxWidth:b(e.maxWidth),minHeight:b(e.minHeight),minWidth:b(e.minWidth),width:b(e.width)}))}}const $t=y({absolute:Boolean,active:{type:Boolean,default:!0},bgColor:String,bgOpacity:[Number,String],bufferValue:{type:[Number,String],default:0},clickable:Boolean,color:String,height:{type:[Number,String],default:4},indeterminate:Boolean,max:{type:[Number,String],default:100},modelValue:{type:[Number,String],default:0},reverse:Boolean,stream:Boolean,striped:Boolean,roundedBar:Boolean,...P(),...te(),...Q(),...Z()},"VProgressLinear"),zt=I()({name:"VProgressLinear",props:$t(),emits:{"update:modelValue":e=>!0},setup(e,t){let{slots:n}=t;const a=vt(e,"modelValue"),{isRtl:s,rtlClasses:i}=Ee(),{themeClasses:l}=ee(e),{textColorClasses:o,textColorStyles:u}=Ae(e,"color"),{backgroundColorClasses:d,backgroundColorStyles:c}=se(v(()=>e.bgColor||e.color)),{backgroundColorClasses:m,backgroundColorStyles:h}=se(e,"color"),{roundedClasses:g}=ne(e),{intersectionRef:S,isIntersecting:$}=Pt(),k=v(()=>parseInt(e.max,10)),w=v(()=>parseInt(e.height,10)),x=v(()=>parseFloat(e.bufferValue)/k.value*100),T=v(()=>parseFloat(a.value)/k.value*100),p=v(()=>s.value!==e.reverse),N=v(()=>e.indeterminate?"fade-transition":"slide-x-transition"),R=v(()=>e.bgOpacity==null?e.bgOpacity:parseFloat(e.bgOpacity));function H(V){if(!S.value)return;const{left:D,right:W,width:L}=S.value.getBoundingClientRect(),f=p.value?L-V.clientX+(W-L):V.clientX-D;a.value=Math.round(f/L*k.value)}return B(()=>r(e.tag,{ref:S,class:["v-progress-linear",{"v-progress-linear--absolute":e.absolute,"v-progress-linear--active":e.active&&$.value,"v-progress-linear--reverse":p.value,"v-progress-linear--rounded":e.rounded,"v-progress-linear--rounded-bar":e.roundedBar,"v-progress-linear--striped":e.striped},g.value,l.value,i.value,e.class],style:[{height:e.active?b(w.value):0,"--v-progress-linear-height":b(w.value)},e.style],role:"progressbar","aria-hidden":e.active?"false":"true","aria-valuemin":"0","aria-valuemax":e.max,"aria-valuenow":e.indeterminate?void 0:T.value,onClick:e.clickable&&H},{default:()=>[e.stream&&r("div",{key:"stream",class:["v-progress-linear__stream",o.value],style:{...u.value,[p.value?"left":"right"]:b(-w.value),borderTop:`${b(w.value/2)} dotted`,opacity:R.value,top:`calc(50% - ${b(w.value/4)})`,width:b(100-x.value,"%"),"--v-progress-linear-stream-to":b(w.value*(p.value?1:-1))}},null),r("div",{class:["v-progress-linear__background",d.value],style:[c.value,{opacity:R.value,width:b(e.stream?x.value:100,"%")}]},null),r(Be,{name:N.value},{default:()=>[e.indeterminate?r("div",{class:"v-progress-linear__indeterminate"},[["long","short"].map(V=>r("div",{key:V,class:["v-progress-linear__indeterminate",V,m.value],style:h.value},null))]):r("div",{class:["v-progress-linear__determinate",m.value],style:[h.value,{width:b(T.value,"%")}]},null)]}),n.default&&r("div",{class:"v-progress-linear__content"},[n.default({value:T.value,buffer:x.value})])]})),{}}}),Nt=y({loading:[Boolean,String]},"loader");function Rt(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:z();return{loaderClasses:v(()=>({[`${t}--loading`]:e.loading}))}}function At(e,t){var a;let{slots:n}=t;return r("div",{class:`${e.name}__loader`},[((a=n.default)==null?void 0:a.call(n,{color:e.color,isActive:e.active}))||r(zt,{absolute:e.absolute,active:e.active,color:e.color,height:"2",indeterminate:!0},null)])}const pe={center:"center",top:"bottom",bottom:"top",left:"right",right:"left"},Ot=y({location:String},"location");function jt(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1,n=arguments.length>2?arguments[2]:void 0;const{isRtl:a}=Ee();return{locationStyles:v(()=>{if(!e.location)return{};const{side:i,align:l}=pt(e.location.split(" ").length>1?e.location:`${e.location} center`,a.value);function o(d){return n?n(d):0}const u={};return i!=="center"&&(t?u[pe[i]]=`calc(100% - ${o(i)}px)`:u[i]=0),l!=="center"?t?u[pe[l]]=`calc(100% - ${o(l)}px)`:u[l]=0:(i==="center"?u.top=u.left="50%":u[{top:"left",bottom:"left",left:"top",right:"top"}[i]]="50%",u.transform={top:"translateX(-50%)",bottom:"translateX(-50%)",left:"translateY(-50%)",right:"translateY(-50%)",center:"translate(-50%, -50%)"}[i]),u})}}const Ht=["static","relative","fixed","absolute","sticky"],Dt=y({position:{type:String,validator:e=>Ht.includes(e)}},"position");function Wt(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:z();return{positionClasses:v(()=>e.position?`${t}--${e.position}`:void 0)}}function Ft(){const e=de("useRoute");return v(()=>{var t;return(t=e==null?void 0:e.proxy)==null?void 0:t.$route})}function yn(){var e,t;return(t=(e=de("useRouter"))==null?void 0:e.proxy)==null?void 0:t.$router}function Mt(e,t){var d,c;const n=mt("RouterLink"),a=v(()=>!!(e.href||e.to)),s=v(()=>(a==null?void 0:a.value)||Ce(t,"click")||Ce(e,"click"));if(typeof n=="string"||!("useLink"in n))return{isLink:a,isClickable:s,href:Y(e,"href")};const i=v(()=>({...e,to:Y(()=>e.to||"")})),l=n.useLink(i.value),o=v(()=>e.to?l:void 0),u=Ft();return{isLink:a,isClickable:s,route:(d=o.value)==null?void 0:d.route,navigate:(c=o.value)==null?void 0:c.navigate,isActive:v(()=>{var m,h,g;return o.value?e.exact?u.value?((g=o.value.isExactActive)==null?void 0:g.value)&&ft(o.value.route.value.query,u.value.query):((h=o.value.isExactActive)==null?void 0:h.value)??!1:((m=o.value.isActive)==null?void 0:m.value)??!1:!1}),href:v(()=>{var m;return e.to?(m=o.value)==null?void 0:m.route.value.href:e.href})}}const qt=y({href:String,replace:Boolean,to:[String,Object],exact:Boolean},"router");let ae=!1;function Cn(e,t){let n=!1,a,s;gt&&($e(()=>{window.addEventListener("popstate",i),a=e==null?void 0:e.beforeEach((l,o,u)=>{ae?n?t(u):u():setTimeout(()=>n?t(u):u()),ae=!0}),s=e==null?void 0:e.afterEach(()=>{ae=!1})}),ht(()=>{window.removeEventListener("popstate",i),a==null||a(),s==null||s()}));function i(l){var o;(o=l.state)!=null&&o.replaced||(n=!0,setTimeout(()=>n=!1))}}const le=Symbol("rippleStop"),Xt=80;function ke(e,t){e.style.transform=t,e.style.webkitTransform=t}function oe(e){return e.constructor.name==="TouchEvent"}function Xe(e){return e.constructor.name==="KeyboardEvent"}const Ut=function(e,t){var m;let n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},a=0,s=0;if(!Xe(e)){const h=t.getBoundingClientRect(),g=oe(e)?e.touches[e.touches.length-1]:e;a=g.clientX-h.left,s=g.clientY-h.top}let i=0,l=.3;(m=t._ripple)!=null&&m.circle?(l=.15,i=t.clientWidth/2,i=n.center?i:i+Math.sqrt((a-i)**2+(s-i)**2)/4):i=Math.sqrt(t.clientWidth**2+t.clientHeight**2)/2;const o=`${(t.clientWidth-i*2)/2}px`,u=`${(t.clientHeight-i*2)/2}px`,d=n.center?o:`${a-i}px`,c=n.center?u:`${s-i}px`;return{radius:i,scale:l,x:d,y:c,centerX:o,centerY:u}},J={show(e,t){var g;let n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};if(!((g=t==null?void 0:t._ripple)!=null&&g.enabled))return;const a=document.createElement("span"),s=document.createElement("span");a.appendChild(s),a.className="v-ripple__container",n.class&&(a.className+=` ${n.class}`);const{radius:i,scale:l,x:o,y:u,centerX:d,centerY:c}=Ut(e,t,n),m=`${i*2}px`;s.className="v-ripple__animation",s.style.width=m,s.style.height=m,t.appendChild(a);const h=window.getComputedStyle(t);h&&h.position==="static"&&(t.style.position="relative",t.dataset.previousPosition="static"),s.classList.add("v-ripple__animation--enter"),s.classList.add("v-ripple__animation--visible"),ke(s,`translate(${o}, ${u}) scale3d(${l},${l},${l})`),s.dataset.activated=String(performance.now()),setTimeout(()=>{s.classList.remove("v-ripple__animation--enter"),s.classList.add("v-ripple__animation--in"),ke(s,`translate(${d}, ${c}) scale3d(1,1,1)`)},0)},hide(e){var i;if(!((i=e==null?void 0:e._ripple)!=null&&i.enabled))return;const t=e.getElementsByClassName("v-ripple__animation");if(t.length===0)return;const n=t[t.length-1];if(n.dataset.isHiding)return;n.dataset.isHiding="true";const a=performance.now()-Number(n.dataset.activated),s=Math.max(250-a,0);setTimeout(()=>{n.classList.remove("v-ripple__animation--in"),n.classList.add("v-ripple__animation--out"),setTimeout(()=>{var o;e.getElementsByClassName("v-ripple__animation").length===1&&e.dataset.previousPosition&&(e.style.position=e.dataset.previousPosition,delete e.dataset.previousPosition),((o=n.parentNode)==null?void 0:o.parentNode)===e&&e.removeChild(n.parentNode)},300)},s)}};function Ue(e){return typeof e>"u"||!!e}function F(e){const t={},n=e.currentTarget;if(!(!(n!=null&&n._ripple)||n._ripple.touched||e[le])){if(e[le]=!0,oe(e))n._ripple.touched=!0,n._ripple.isTouch=!0;else if(n._ripple.isTouch)return;if(t.center=n._ripple.centered||Xe(e),n._ripple.class&&(t.class=n._ripple.class),oe(e)){if(n._ripple.showTimerCommit)return;n._ripple.showTimerCommit=()=>{J.show(e,n,t)},n._ripple.showTimer=window.setTimeout(()=>{var a;(a=n==null?void 0:n._ripple)!=null&&a.showTimerCommit&&(n._ripple.showTimerCommit(),n._ripple.showTimerCommit=null)},Xt)}else J.show(e,n,t)}}function we(e){e[le]=!0}function _(e){const t=e.currentTarget;if(t!=null&&t._ripple){if(window.clearTimeout(t._ripple.showTimer),e.type==="touchend"&&t._ripple.showTimerCommit){t._ripple.showTimerCommit(),t._ripple.showTimerCommit=null,t._ripple.showTimer=window.setTimeout(()=>{_(e)});return}window.setTimeout(()=>{t._ripple&&(t._ripple.touched=!1)}),J.hide(t)}}function Ye(e){const t=e.currentTarget;t!=null&&t._ripple&&(t._ripple.showTimerCommit&&(t._ripple.showTimerCommit=null),window.clearTimeout(t._ripple.showTimer))}let M=!1;function Ke(e){!M&&(e.keyCode===Se.enter||e.keyCode===Se.space)&&(M=!0,F(e))}function Ge(e){M=!1,_(e)}function Je(e){M&&(M=!1,_(e))}function Qe(e,t,n){const{value:a,modifiers:s}=t,i=Ue(a);if(i||J.hide(e),e._ripple=e._ripple??{},e._ripple.enabled=i,e._ripple.centered=s.center,e._ripple.circle=s.circle,bt(a)&&a.class&&(e._ripple.class=a.class),i&&!n){if(s.stop){e.addEventListener("touchstart",we,{passive:!0}),e.addEventListener("mousedown",we);return}e.addEventListener("touchstart",F,{passive:!0}),e.addEventListener("touchend",_,{passive:!0}),e.addEventListener("touchmove",Ye,{passive:!0}),e.addEventListener("touchcancel",_),e.addEventListener("mousedown",F),e.addEventListener("mouseup",_),e.addEventListener("mouseleave",_),e.addEventListener("keydown",Ke),e.addEventListener("keyup",Ge),e.addEventListener("blur",Je),e.addEventListener("dragstart",_,{passive:!0})}else!i&&n&&Ze(e)}function Ze(e){e.removeEventListener("mousedown",F),e.removeEventListener("touchstart",F),e.removeEventListener("touchend",_),e.removeEventListener("touchmove",Ye),e.removeEventListener("touchcancel",_),e.removeEventListener("mouseup",_),e.removeEventListener("mouseleave",_),e.removeEventListener("keydown",Ke),e.removeEventListener("keyup",Ge),e.removeEventListener("dragstart",_),e.removeEventListener("blur",Je)}function Yt(e,t){Qe(e,t,!1)}function Kt(e){delete e._ripple,Ze(e)}function Gt(e,t){if(t.value===t.oldValue)return;const n=Ue(t.oldValue);Qe(e,t,n)}const Jt={mounted:Yt,unmounted:Kt,updated:Gt},Qt=I()({name:"VCardActions",props:P(),setup(e,t){let{slots:n}=t;return Le({VBtn:{slim:!0,variant:"text"}}),B(()=>{var a;return r("div",{class:["v-card-actions",e.class],style:e.style},[(a=n.default)==null?void 0:a.call(n)])}),{}}}),Zt=ve("v-card-subtitle"),en=ve("v-card-title");function tn(e){return{aspectStyles:v(()=>{const t=Number(e.aspectRatio);return t?{paddingBottom:String(1/t*100)+"%"}:void 0})}}const et=y({aspectRatio:[String,Number],contentClass:String,inline:Boolean,...P(),...Me()},"VResponsive"),xe=I()({name:"VResponsive",props:et(),setup(e,t){let{slots:n}=t;const{aspectStyles:a}=tn(e),{dimensionStyles:s}=qe(e);return B(()=>{var i;return r("div",{class:["v-responsive",{"v-responsive--inline":e.inline},e.class],style:[s.value,e.style]},[r("div",{class:"v-responsive__sizer",style:a.value},null),(i=n.additional)==null?void 0:i.call(n),n.default&&r("div",{class:["v-responsive__content",e.contentClass]},[n.default()])])}),{}}}),nn=y({transition:{type:[Boolean,String,Object],default:"fade-transition",validator:e=>e!==!0}},"transition"),q=(e,t)=>{let{slots:n}=t;const{transition:a,disabled:s,group:i,...l}=e,{component:o=i?yt:Be,...u}=typeof a=="object"?a:{};return Te(o,ze(typeof a=="string"?{name:s?"":a}:u,typeof a=="string"?{}:Object.fromEntries(Object.entries({disabled:s,group:i}).filter(d=>{let[c,m]=d;return m!==void 0})),l),n)};function an(e,t){if(!ce)return;const n=t.modifiers||{},a=t.value,{handler:s,options:i}=typeof a=="object"?a:{handler:a,options:{}},l=new IntersectionObserver(function(){var m;let o=arguments.length>0&&arguments[0]!==void 0?arguments[0]:[],u=arguments.length>1?arguments[1]:void 0;const d=(m=e._observe)==null?void 0:m[t.instance.$.uid];if(!d)return;const c=o.some(h=>h.isIntersecting);s&&(!n.quiet||d.init)&&(!n.once||c||d.init)&&s(c,o,u),c&&n.once?tt(e,t):d.init=!0},i);e._observe=Object(e._observe),e._observe[t.instance.$.uid]={init:!1,observer:l},l.observe(e)}function tt(e,t){var a;const n=(a=e._observe)==null?void 0:a[t.instance.$.uid];n&&(n.observer.unobserve(e),delete e._observe[t.instance.$.uid])}const sn={mounted:an,unmounted:tt},rn=sn,ln=y({alt:String,cover:Boolean,color:String,draggable:{type:[Boolean,String],default:void 0},eager:Boolean,gradient:String,lazySrc:String,options:{type:Object,default:()=>({root:void 0,rootMargin:void 0,threshold:void 0})},sizes:String,src:{type:[String,Object],default:""},crossorigin:String,referrerpolicy:String,srcset:String,position:String,...et(),...P(),...te(),...nn()},"VImg"),nt=I()({name:"VImg",directives:{intersect:rn},props:ln(),emits:{loadstart:e=>!0,load:e=>!0,error:e=>!0},setup(e,t){let{emit:n,slots:a}=t;const{backgroundColorClasses:s,backgroundColorStyles:i}=se(Y(e,"color")),{roundedClasses:l}=ne(e),o=de("VImg"),u=A(""),d=ue(),c=A(e.eager?"loading":"idle"),m=A(),h=A(),g=v(()=>e.src&&typeof e.src=="object"?{src:e.src.src,srcset:e.srcset||e.src.srcset,lazySrc:e.lazySrc||e.src.lazySrc,aspect:Number(e.aspectRatio||e.src.aspect||0)}:{src:e.src,srcset:e.srcset,lazySrc:e.lazySrc,aspect:Number(e.aspectRatio||0)}),S=v(()=>g.value.aspect||m.value/h.value||0);X(()=>e.src,()=>{$(c.value!=="idle")}),X(S,(f,C)=>{!f&&C&&d.value&&p(d.value)}),Ct(()=>$());function $(f){if(!(e.eager&&f)&&!(ce&&!f&&!e.eager)){if(c.value="loading",g.value.lazySrc){const C=new Image;C.src=g.value.lazySrc,p(C,null)}g.value.src&&$e(()=>{var C;n("loadstart",((C=d.value)==null?void 0:C.currentSrc)||g.value.src),setTimeout(()=>{var E;if(!o.isUnmounted)if((E=d.value)!=null&&E.complete){if(d.value.naturalWidth||w(),c.value==="error")return;S.value||p(d.value,null),c.value==="loading"&&k()}else S.value||p(d.value),x()})})}}function k(){var f;o.isUnmounted||(x(),p(d.value),c.value="loaded",n("load",((f=d.value)==null?void 0:f.currentSrc)||g.value.src))}function w(){var f;o.isUnmounted||(c.value="error",n("error",((f=d.value)==null?void 0:f.currentSrc)||g.value.src))}function x(){const f=d.value;f&&(u.value=f.currentSrc||f.src)}let T=-1;Pe(()=>{clearTimeout(T)});function p(f){let C=arguments.length>1&&arguments[1]!==void 0?arguments[1]:100;const E=()=>{if(clearTimeout(T),o.isUnmounted)return;const{naturalHeight:ge,naturalWidth:he}=f;ge||he?(m.value=he,h.value=ge):!f.complete&&c.value==="loading"&&C!=null?T=window.setTimeout(E,C):(f.currentSrc.endsWith(".svg")||f.currentSrc.startsWith("data:image/svg+xml"))&&(m.value=1,h.value=1)};E()}const N=v(()=>({"v-img__img--cover":e.cover,"v-img__img--contain":!e.cover})),R=()=>{var E;if(!g.value.src||c.value==="idle")return null;const f=r("img",{class:["v-img__img",N.value],style:{objectPosition:e.position},src:g.value.src,srcset:g.value.srcset,alt:e.alt,crossorigin:e.crossorigin,referrerpolicy:e.referrerpolicy,draggable:e.draggable,sizes:e.sizes,ref:d,onLoad:k,onError:w},null),C=(E=a.sources)==null?void 0:E.call(a);return r(q,{transition:e.transition,appear:!0},{default:()=>[ie(C?r("picture",{class:"v-img__picture"},[C,f]):f,[[St,c.value==="loaded"]])]})},H=()=>r(q,{transition:e.transition},{default:()=>[g.value.lazySrc&&c.value!=="loaded"&&r("img",{class:["v-img__img","v-img__img--preload",N.value],style:{objectPosition:e.position},src:g.value.lazySrc,alt:e.alt,crossorigin:e.crossorigin,referrerpolicy:e.referrerpolicy,draggable:e.draggable},null)]}),V=()=>a.placeholder?r(q,{transition:e.transition,appear:!0},{default:()=>[(c.value==="loading"||c.value==="error"&&!a.error)&&r("div",{class:"v-img__placeholder"},[a.placeholder()])]}):null,D=()=>a.error?r(q,{transition:e.transition,appear:!0},{default:()=>[c.value==="error"&&r("div",{class:"v-img__error"},[a.error()])]}):null,W=()=>e.gradient?r("div",{class:"v-img__gradient",style:{backgroundImage:`linear-gradient(${e.gradient})`}},null):null,L=A(!1);{const f=X(S,C=>{C&&(requestAnimationFrame(()=>{requestAnimationFrame(()=>{L.value=!0})}),f())})}return B(()=>{const f=xe.filterProps(e);return ie(r(xe,ze({class:["v-img",{"v-img--booting":!L.value},s.value,l.value,e.class],style:[{width:b(e.width==="auto"?m.value:e.width)},i.value,e.style]},f,{aspectRatio:S.value,"aria-label":e.alt,role:e.alt?"img":void 0}),{additional:()=>r(K,null,[r(R,null,null),r(H,null,null),r(W,null,null),r(V,null,null),r(D,null,null)]),default:a.default}),[[Ne("intersect"),{handler:$,options:e.options},null,{once:!0}]])}),{currentSrc:u,image:d,state:c,naturalWidth:m,naturalHeight:h}}}),on=y({start:Boolean,end:Boolean,icon:j,image:String,text:String,...P(),...fe(),...te(),...Oe(),...Q(),...Z(),...We({variant:"flat"})},"VAvatar"),Ie=I()({name:"VAvatar",props:on(),setup(e,t){let{slots:n}=t;const{themeClasses:a}=ee(e),{colorClasses:s,colorStyles:i,variantClasses:l}=Fe(e),{densityClasses:o}=He(e),{roundedClasses:u}=ne(e),{sizeClasses:d,sizeStyles:c}=je(e);return B(()=>r(e.tag,{class:["v-avatar",{"v-avatar--start":e.start,"v-avatar--end":e.end},a.value,s.value,o.value,u.value,d.value,l.value,e.class],style:[i.value,c.value,e.style]},{default:()=>[n.default?r(G,{key:"content-defaults",defaults:{VImg:{cover:!0,image:e.image},VIcon:{icon:e.icon}}},{default:()=>[n.default()]}):e.image?r(nt,{key:"image",src:e.image,alt:"",cover:!0},null):e.icon?r(re,{key:"icon",icon:e.icon},null):e.text,De(!1,"v-avatar")]})),{}}}),un=y({appendAvatar:String,appendIcon:j,prependAvatar:String,prependIcon:j,subtitle:[String,Number],title:[String,Number],...P(),...fe()},"VCardItem"),cn=I()({name:"VCardItem",props:un(),setup(e,t){let{slots:n}=t;return B(()=>{var d;const a=!!(e.prependAvatar||e.prependIcon),s=!!(a||n.prepend),i=!!(e.appendAvatar||e.appendIcon),l=!!(i||n.append),o=!!(e.title!=null||n.title),u=!!(e.subtitle!=null||n.subtitle);return r("div",{class:["v-card-item",e.class],style:e.style},[s&&r("div",{key:"prepend",class:"v-card-item__prepend"},[n.prepend?r(G,{key:"prepend-defaults",disabled:!a,defaults:{VAvatar:{density:e.density,image:e.prependAvatar},VIcon:{density:e.density,icon:e.prependIcon}}},n.prepend):r(K,null,[e.prependAvatar&&r(Ie,{key:"prepend-avatar",density:e.density,image:e.prependAvatar},null),e.prependIcon&&r(re,{key:"prepend-icon",density:e.density,icon:e.prependIcon},null)])]),r("div",{class:"v-card-item__content"},[o&&r(en,{key:"title"},{default:()=>{var c;return[((c=n.title)==null?void 0:c.call(n))??e.title]}}),u&&r(Zt,{key:"subtitle"},{default:()=>{var c;return[((c=n.subtitle)==null?void 0:c.call(n))??e.subtitle]}}),(d=n.default)==null?void 0:d.call(n)]),l&&r("div",{key:"append",class:"v-card-item__append"},[n.append?r(G,{key:"append-defaults",disabled:!i,defaults:{VAvatar:{density:e.density,image:e.appendAvatar},VIcon:{density:e.density,icon:e.appendIcon}}},n.append):r(K,null,[e.appendIcon&&r(re,{key:"append-icon",density:e.density,icon:e.appendIcon},null),e.appendAvatar&&r(Ie,{key:"append-avatar",density:e.density,image:e.appendAvatar},null)])])])}),{}}}),dn=ve("v-card-text"),vn=y({appendAvatar:String,appendIcon:j,disabled:Boolean,flat:Boolean,hover:Boolean,image:String,link:{type:Boolean,default:void 0},prependAvatar:String,prependIcon:j,ripple:{type:[Boolean,Object],default:!0},subtitle:[String,Number],text:[String,Number],title:[String,Number],...kt(),...P(),...fe(),...Me(),...xt(),...Nt(),...Ot(),...Dt(),...te(),...qt(),...Q(),...Z(),...We({variant:"elevated"})},"VCard"),Sn=I()({name:"VCard",directives:{Ripple:Jt},props:vn(),setup(e,t){let{attrs:n,slots:a}=t;const{themeClasses:s}=ee(e),{borderClasses:i}=wt(e),{colorClasses:l,colorStyles:o,variantClasses:u}=Fe(e),{densityClasses:d}=He(e),{dimensionStyles:c}=qe(e),{elevationClasses:m}=It(e),{loaderClasses:h}=Rt(e),{locationStyles:g}=jt(e),{positionClasses:S}=Wt(e),{roundedClasses:$}=ne(e),k=Mt(e,n),w=v(()=>e.link!==!1&&k.isLink.value),x=v(()=>!e.disabled&&e.link!==!1&&(e.link||k.isClickable.value));return B(()=>{const T=w.value?"a":e.tag,p=!!(a.title||e.title!=null),N=!!(a.subtitle||e.subtitle!=null),R=p||N,H=!!(a.append||e.appendAvatar||e.appendIcon),V=!!(a.prepend||e.prependAvatar||e.prependIcon),D=!!(a.image||e.image),W=R||V||H,L=!!(a.text||e.text!=null);return ie(r(T,{class:["v-card",{"v-card--disabled":e.disabled,"v-card--flat":e.flat,"v-card--hover":e.hover&&!(e.disabled||e.flat),"v-card--link":x.value},s.value,i.value,l.value,d.value,m.value,h.value,S.value,$.value,u.value,e.class],style:[o.value,c.value,g.value,e.style],href:k.href.value,onClick:x.value&&k.navigate,tabindex:e.disabled?-1:void 0},{default:()=>{var f;return[D&&r("div",{key:"image",class:"v-card__image"},[a.image?r(G,{key:"image-defaults",disabled:!e.image,defaults:{VImg:{cover:!0,src:e.image}}},a.image):r(nt,{key:"image-img",cover:!0,src:e.image},null)]),r(At,{name:"v-card",active:!!e.loading,color:typeof e.loading=="boolean"?void 0:e.loading},{default:a.loader}),W&&r(cn,{key:"item",prependAvatar:e.prependAvatar,prependIcon:e.prependIcon,title:e.title,subtitle:e.subtitle,appendAvatar:e.appendAvatar,appendIcon:e.appendIcon},{default:a.item,prepend:a.prepend,title:a.title,subtitle:a.subtitle,append:a.append}),L&&r(dn,{key:"text"},{default:()=>{var C;return[((C=a.text)==null?void 0:C.call(a))??e.text]}}),(f=a.default)==null?void 0:f.call(a),a.actions&&r(Qt,null,{default:a.actions}),De(x.value,"v-card")]}}),[[Ne("ripple"),x.value&&e.ripple]])}),{}}});export{nn as A,Nt as B,Rt as C,pt as D,fn as E,gn as F,hn as G,bn as H,yn as I,Cn as J,je as K,At as L,q as M,rn as N,Pt as O,Ot as P,Dt as Q,Jt as R,jt as S,Wt as T,re as V,xt as a,te as b,wt as c,It as d,ne as e,G as f,en as g,dn as h,Qt as i,Sn as j,nt as k,ve as l,kt as m,fe as n,Oe as o,We as p,Me as q,qt as r,Mt as s,Fe as t,se as u,He as v,qe as w,De as x,Ie as y,Ae as z};
