import{f as He,m as St,V as Be}from"./VTextField-tELjM1Q6.js";import{a8 as de,s as N,a6 as ve,al as q,r as E,W as Ke,f as S,k as je,p as H,n as se,a7 as Ue,t as B,am as bt,a1 as ne,m as le,a as ge,g as Y,v as wt,u as Z,c as m,an as $e,ao as kt,ah as De,b as Ve,w as X,d as Ce,ap as Vt,aq as Ct,Q as ae,i as oe,y as G,ac as Pt,ai as Q,U as ye,h as It,ar as Se,as as At,Z as Pe,_ as Me,at as xt,P as Ge,a3 as Tt,z as Ee,au as qe,j as he,av as Lt,Y as ze,q as Ot,o as Bt,a2 as Dt,aw as Mt,I as Et,ax as Fe,ad as Ft}from"./index-sYn4zpRH.js";import{V as Rt,d as _t}from"./VInput-CHHdvrRo.js";import{f as re,M as Nt,l as We,m as Ye,n as Qe,t as Ie,a as Xe,b as Ze,v as Ht,p as Je,R as Kt,w as jt,c as et,x as Ut,s as tt,y as Ae,d as nt,e as at,z as $t,A as be,j as fe,B as lt,u as Gt,C as qt}from"./VCard-DVcoeF_5.js";import{c as zt,d as it,u as Wt,e as Re,a as _e,g as Yt,b as Qt,V as Xt}from"./VChip-ClBnAa4N.js";const we=Symbol.for("vuetify:list");function ot(){const e=de(we,{hasPrepend:N(!1),updateHasPrepend:()=>null}),i={hasPrepend:N(!1),updateHasPrepend:t=>{t&&(i.hasPrepend.value=t)}};return ve(we,i),e}function st(){return de(we,null)}const xe=e=>{const i={activate:t=>{let{id:n,value:l,activated:a}=t;return n=q(n),e&&!l&&a.size===1&&a.has(n)||(l?a.add(n):a.delete(n)),a},in:(t,n,l)=>{let a=new Set;for(const s of t||[])a=i.activate({id:s,value:!0,activated:new Set(a),children:n,parents:l});return a},out:t=>Array.from(t)};return i},ut=e=>{const i=xe(e);return{activate:n=>{let{activated:l,id:a,...s}=n;a=q(a);const o=l.has(a)?new Set([a]):new Set;return i.activate({...s,id:a,activated:o})},in:(n,l,a)=>{let s=new Set;return n!=null&&n.length&&(s=i.in(n.slice(0,1),l,a)),s},out:(n,l,a)=>i.out(n,l,a)}},Zt=e=>{const i=xe(e);return{activate:n=>{let{id:l,activated:a,children:s,...o}=n;return l=q(l),s.has(l)?a:i.activate({id:l,activated:a,children:s,...o})},in:i.in,out:i.out}},Jt=e=>{const i=ut(e);return{activate:n=>{let{id:l,activated:a,children:s,...o}=n;return l=q(l),s.has(l)?a:i.activate({id:l,activated:a,children:s,...o})},in:i.in,out:i.out}},en={open:e=>{let{id:i,value:t,opened:n,parents:l}=e;if(t){const a=new Set;a.add(i);let s=l.get(i);for(;s!=null;)a.add(s),s=l.get(s);return a}else return n.delete(i),n},select:()=>null},rt={open:e=>{let{id:i,value:t,opened:n,parents:l}=e;if(t){let a=l.get(i);for(n.add(i);a!=null&&a!==i;)n.add(a),a=l.get(a);return n}else n.delete(i);return n},select:()=>null},tn={open:rt.open,select:e=>{let{id:i,value:t,opened:n,parents:l}=e;if(!t)return n;const a=[];let s=l.get(i);for(;s!=null;)a.push(s),s=l.get(s);return new Set(a)}},Te=e=>{const i={select:t=>{let{id:n,value:l,selected:a}=t;if(n=q(n),e&&!l){const s=Array.from(a.entries()).reduce((o,c)=>{let[p,b]=c;return b==="on"&&o.push(p),o},[]);if(s.length===1&&s[0]===n)return a}return a.set(n,l?"on":"off"),a},in:(t,n,l)=>{let a=new Map;for(const s of t||[])a=i.select({id:s,value:!0,selected:new Map(a),children:n,parents:l});return a},out:t=>{const n=[];for(const[l,a]of t.entries())a==="on"&&n.push(l);return n}};return i},ct=e=>{const i=Te(e);return{select:n=>{let{selected:l,id:a,...s}=n;a=q(a);const o=l.has(a)?new Map([[a,l.get(a)]]):new Map;return i.select({...s,id:a,selected:o})},in:(n,l,a)=>{let s=new Map;return n!=null&&n.length&&(s=i.in(n.slice(0,1),l,a)),s},out:(n,l,a)=>i.out(n,l,a)}},nn=e=>{const i=Te(e);return{select:n=>{let{id:l,selected:a,children:s,...o}=n;return l=q(l),s.has(l)?a:i.select({id:l,selected:a,children:s,...o})},in:i.in,out:i.out}},an=e=>{const i=ct(e);return{select:n=>{let{id:l,selected:a,children:s,...o}=n;return l=q(l),s.has(l)?a:i.select({id:l,selected:a,children:s,...o})},in:i.in,out:i.out}},ln=e=>{const i={select:t=>{let{id:n,value:l,selected:a,children:s,parents:o}=t;n=q(n);const c=new Map(a),p=[n];for(;p.length;){const k=p.shift();a.set(k,l?"on":"off"),s.has(k)&&p.push(...s.get(k))}let b=o.get(n);for(;b;){const k=s.get(b),h=k.every(d=>a.get(d)==="on"),r=k.every(d=>!a.has(d)||a.get(d)==="off");a.set(b,h?"on":r?"off":"indeterminate"),b=o.get(b)}return e&&!l&&Array.from(a.entries()).reduce((h,r)=>{let[d,u]=r;return u==="on"&&h.push(d),h},[]).length===0?c:a},in:(t,n,l)=>{let a=new Map;for(const s of t||[])a=i.select({id:s,value:!0,selected:new Map(a),children:n,parents:l});return a},out:(t,n)=>{const l=[];for(const[a,s]of t.entries())s==="on"&&!n.has(a)&&l.push(a);return l}};return i},ce=Symbol.for("vuetify:nested"),dt={id:N(),root:{register:()=>null,unregister:()=>null,parents:E(new Map),children:E(new Map),open:()=>null,openOnSelect:()=>null,activate:()=>null,select:()=>null,activatable:E(!1),selectable:E(!1),opened:E(new Set),activated:E(new Set),selected:E(new Map),selectedValues:E([])}},on=H({activatable:Boolean,selectable:Boolean,activeStrategy:[String,Function],selectStrategy:[String,Function],openStrategy:[String,Object],opened:Array,activated:Array,selected:Array,mandatory:Boolean},"nested"),sn=e=>{let i=!1;const t=E(new Map),n=E(new Map),l=se(e,"opened",e.opened,r=>new Set(r),r=>[...r.values()]),a=S(()=>{if(typeof e.activeStrategy=="object")return e.activeStrategy;switch(e.activeStrategy){case"leaf":return Zt(e.mandatory);case"single-leaf":return Jt(e.mandatory);case"independent":return xe(e.mandatory);case"single-independent":default:return ut(e.mandatory)}}),s=S(()=>{if(typeof e.selectStrategy=="object")return e.selectStrategy;switch(e.selectStrategy){case"single-leaf":return an(e.mandatory);case"leaf":return nn(e.mandatory);case"independent":return Te(e.mandatory);case"single-independent":return ct(e.mandatory);case"classic":default:return ln(e.mandatory)}}),o=S(()=>{if(typeof e.openStrategy=="object")return e.openStrategy;switch(e.openStrategy){case"list":return tn;case"single":return en;case"multiple":default:return rt}}),c=se(e,"activated",e.activated,r=>a.value.in(r,t.value,n.value),r=>a.value.out(r,t.value,n.value)),p=se(e,"selected",e.selected,r=>s.value.in(r,t.value,n.value),r=>s.value.out(r,t.value,n.value));je(()=>{i=!0});function b(r){const d=[];let u=r;for(;u!=null;)d.unshift(u),u=n.value.get(u);return d}const k=Ue("nested"),h={id:N(),root:{opened:l,activatable:B(e,"activatable"),selectable:B(e,"selectable"),activated:c,selected:p,selectedValues:S(()=>{const r=[];for(const[d,u]of p.value.entries())u==="on"&&r.push(d);return r}),register:(r,d,u)=>{d&&r!==d&&n.value.set(r,d),u&&t.value.set(r,[]),d!=null&&t.value.set(d,[...t.value.get(d)||[],r])},unregister:r=>{if(i)return;t.value.delete(r);const d=n.value.get(r);if(d){const u=t.value.get(d)??[];t.value.set(d,u.filter(v=>v!==r))}n.value.delete(r),l.value.delete(r)},open:(r,d,u)=>{k.emit("click:open",{id:r,value:d,path:b(r),event:u});const v=o.value.open({id:r,value:d,opened:new Set(l.value),children:t.value,parents:n.value,event:u});v&&(l.value=v)},openOnSelect:(r,d,u)=>{const v=o.value.select({id:r,value:d,selected:new Map(p.value),opened:new Set(l.value),children:t.value,parents:n.value,event:u});v&&(l.value=v)},select:(r,d,u)=>{k.emit("click:select",{id:r,value:d,path:b(r),event:u});const v=s.value.select({id:r,value:d,selected:new Map(p.value),children:t.value,parents:n.value,event:u});v&&(p.value=v),h.root.openOnSelect(r,d,u)},activate:(r,d,u)=>{if(!e.activatable)return h.root.select(r,!0,u);k.emit("click:activate",{id:r,value:d,path:b(r),event:u});const v=a.value.activate({id:r,value:d,activated:new Set(c.value),children:t.value,parents:n.value,event:u});v&&(c.value=v)},children:t,parents:n}};return ve(ce,h),h.root},vt=(e,i)=>{const t=de(ce,dt),n=Symbol(Ke()),l=S(()=>e.value!==void 0?e.value:n),a={...t,id:l,open:(s,o)=>t.root.open(l.value,s,o),openOnSelect:(s,o)=>t.root.openOnSelect(l.value,s,o),isOpen:S(()=>t.root.opened.value.has(l.value)),parent:S(()=>t.root.parents.value.get(l.value)),activate:(s,o)=>t.root.activate(l.value,s,o),isActivated:S(()=>t.root.activated.value.has(q(l.value))),select:(s,o)=>t.root.select(l.value,s,o),isSelected:S(()=>t.root.selected.value.get(q(l.value))==="on"),isIndeterminate:S(()=>t.root.selected.value.get(l.value)==="indeterminate"),isLeaf:S(()=>!t.root.children.value.get(l.value)),isGroupActivator:t.isGroupActivator};return!t.isGroupActivator&&t.root.register(l.value,t.id.value,i),je(()=>{!t.isGroupActivator&&t.root.unregister(l.value)}),i&&ve(ce,a),a},un=()=>{const e=de(ce,dt);ve(ce,{...e,isGroupActivator:!0})},rn=bt({name:"VListGroupActivator",setup(e,i){let{slots:t}=i;return un(),()=>{var n;return(n=t.default)==null?void 0:n.call(t)}}}),cn=H({activeColor:String,baseColor:String,color:String,collapseIcon:{type:ne,default:"$collapse"},expandIcon:{type:ne,default:"$expand"},prependIcon:ne,appendIcon:ne,fluid:Boolean,subgroup:Boolean,title:String,value:null,...le(),...ge()},"VListGroup"),Ne=Y()({name:"VListGroup",props:cn(),setup(e,i){let{slots:t}=i;const{isOpen:n,open:l,id:a}=vt(B(e,"value"),!0),s=S(()=>`v-list-group--id-${String(a.value)}`),o=st(),{isBooted:c}=wt();function p(r){l(!n.value,r)}const b=S(()=>({onClick:p,class:"v-list-group__header",id:s.value})),k=S(()=>n.value?e.collapseIcon:e.expandIcon),h=S(()=>({VListItem:{active:n.value,activeColor:e.activeColor,baseColor:e.baseColor,color:e.color,prependIcon:e.prependIcon||e.subgroup&&k.value,appendIcon:e.appendIcon||!e.subgroup&&k.value,title:e.title,value:e.value}}));return Z(()=>m(e.tag,{class:["v-list-group",{"v-list-group--prepend":o==null?void 0:o.hasPrepend.value,"v-list-group--fluid":e.fluid,"v-list-group--subgroup":e.subgroup,"v-list-group--open":n.value},e.class],style:e.style},{default:()=>[t.activator&&m(re,{defaults:h.value},{default:()=>[m(rn,null,{default:()=>[t.activator({props:b.value,isOpen:n.value})]})]}),m(Nt,{transition:{component:Rt},disabled:!c.value},{default:()=>{var r;return[$e(m("div",{class:"v-list-group__items",role:"group","aria-labelledby":s.value},[(r=t.default)==null?void 0:r.call(t)]),[[kt,n.value]])]}})]})),{isOpen:n}}}),dn=We("v-list-item-subtitle"),vn=We("v-list-item-title"),fn=H({active:{type:Boolean,default:void 0},activeClass:String,activeColor:String,appendAvatar:String,appendIcon:ne,baseColor:String,disabled:Boolean,lines:String,link:{type:Boolean,default:void 0},nav:Boolean,prependAvatar:String,prependIcon:ne,ripple:{type:[Boolean,Object],default:!0},slim:Boolean,subtitle:[String,Number],title:[String,Number],value:null,onClick:De(),onClickOnce:De(),...Ye(),...le(),...Qe(),...Ie(),...Xe(),...Ze(),...Ht(),...ge(),...Ve(),...Je({variant:"text"})},"VListItem"),me=Y()({name:"VListItem",directives:{Ripple:Kt},props:fn(),emits:{click:e=>!0},setup(e,i){let{attrs:t,slots:n,emit:l}=i;const a=jt(e,t),s=S(()=>e.value===void 0?a.href.value:e.value),{activate:o,isActivated:c,select:p,isSelected:b,isIndeterminate:k,isGroupActivator:h,root:r,parent:d,openOnSelect:u}=vt(s,!1),v=st(),w=S(()=>{var g;return e.active!==!1&&(e.active||((g=a.isActive)==null?void 0:g.value)||(r.activatable.value?c.value:b.value))}),C=S(()=>e.link!==!1&&a.isLink.value),x=S(()=>!e.disabled&&e.link!==!1&&(e.link||a.isClickable.value||!!v&&(r.selectable.value||r.activatable.value||e.value!=null))),P=S(()=>e.rounded||e.nav),K=S(()=>e.color??e.activeColor),te=S(()=>({color:w.value?K.value??e.baseColor:e.baseColor,variant:e.variant}));X(()=>{var g;return(g=a.isActive)==null?void 0:g.value},g=>{g&&d.value!=null&&r.open(d.value,!0),g&&u(g)},{immediate:!0});const{themeClasses:D}=Ce(e),{borderClasses:J}=et(e),{colorClasses:z,colorStyles:U,variantClasses:_}=Ut(te),{densityClasses:O}=tt(e),{dimensionStyles:$}=Ae(e),{elevationClasses:ie}=nt(e),{roundedClasses:W}=at(P),ue=S(()=>e.lines?`v-list-item--${e.lines}-line`:void 0),ee=S(()=>({isActive:w.value,select:p,isSelected:b.value,isIndeterminate:k.value}));function y(g){var I;l("click",g),!(h||!x.value)&&((I=a.navigate)==null||I.call(a,g),r.activatable.value?o(!c.value,g):(r.selectable.value||e.value!=null)&&p(!b.value,g))}function f(g){(g.key==="Enter"||g.key===" ")&&(g.preventDefault(),y(g))}return Z(()=>{const g=C.value?"a":e.tag,I=n.title||e.title!=null,T=n.subtitle||e.subtitle!=null,V=!!(e.appendAvatar||e.appendIcon),L=!!(V||n.append),A=!!(e.prependAvatar||e.prependIcon),R=!!(A||n.prepend);return v==null||v.updateHasPrepend(R),e.activeColor&&Vt("active-color",["color","base-color"]),$e(m(g,{class:["v-list-item",{"v-list-item--active":w.value,"v-list-item--disabled":e.disabled,"v-list-item--link":x.value,"v-list-item--nav":e.nav,"v-list-item--prepend":!R&&(v==null?void 0:v.hasPrepend.value),"v-list-item--slim":e.slim,[`${e.activeClass}`]:e.activeClass&&w.value},D.value,J.value,z.value,O.value,ie.value,ue.value,W.value,_.value,e.class],style:[U.value,$.value,e.style],href:a.href.value,tabindex:x.value?v?-2:0:void 0,onClick:y,onKeydown:x.value&&!C.value&&f},{default:()=>{var F;return[$t(x.value||w.value,"v-list-item"),R&&m("div",{key:"prepend",class:"v-list-item__prepend"},[n.prepend?m(re,{key:"prepend-defaults",disabled:!A,defaults:{VAvatar:{density:e.density,image:e.prependAvatar},VIcon:{density:e.density,icon:e.prependIcon},VListItemAction:{start:!0}}},{default:()=>{var M;return[(M=n.prepend)==null?void 0:M.call(n,ee.value)]}}):m(ae,null,[e.prependAvatar&&m(be,{key:"prepend-avatar",density:e.density,image:e.prependAvatar},null),e.prependIcon&&m(fe,{key:"prepend-icon",density:e.density,icon:e.prependIcon},null)]),m("div",{class:"v-list-item__spacer"},null)]),m("div",{class:"v-list-item__content","data-no-activator":""},[I&&m(vn,{key:"title"},{default:()=>{var M;return[((M=n.title)==null?void 0:M.call(n,{title:e.title}))??e.title]}}),T&&m(dn,{key:"subtitle"},{default:()=>{var M;return[((M=n.subtitle)==null?void 0:M.call(n,{subtitle:e.subtitle}))??e.subtitle]}}),(F=n.default)==null?void 0:F.call(n,ee.value)]),L&&m("div",{key:"append",class:"v-list-item__append"},[n.append?m(re,{key:"append-defaults",disabled:!V,defaults:{VAvatar:{density:e.density,image:e.appendAvatar},VIcon:{density:e.density,icon:e.appendIcon},VListItemAction:{end:!0}}},{default:()=>{var M;return[(M=n.append)==null?void 0:M.call(n,ee.value)]}}):m(ae,null,[e.appendIcon&&m(fe,{key:"append-icon",density:e.density,icon:e.appendIcon},null),e.appendAvatar&&m(be,{key:"append-avatar",density:e.density,image:e.appendAvatar},null)]),m("div",{class:"v-list-item__spacer"},null)])]}}),[[Ct("ripple"),x.value&&e.ripple]])}),{isGroupActivator:h,isSelected:b,list:v,select:p}}}),mn=H({color:String,inset:Boolean,sticky:Boolean,title:String,...le(),...ge()},"VListSubheader"),gn=Y()({name:"VListSubheader",props:mn(),setup(e,i){let{slots:t}=i;const{textColorClasses:n,textColorStyles:l}=lt(B(e,"color"));return Z(()=>{const a=!!(t.default||e.title);return m(e.tag,{class:["v-list-subheader",{"v-list-subheader--inset":e.inset,"v-list-subheader--sticky":e.sticky},n.value,e.class],style:[{textColorStyles:l},e.style]},{default:()=>{var s;return[a&&m("div",{class:"v-list-subheader__text"},[((s=t.default)==null?void 0:s.call(t))??e.title])]}})}),{}}}),yn=H({color:String,inset:Boolean,length:[Number,String],thickness:[Number,String],vertical:Boolean,...le(),...Ve()},"VDivider"),hn=Y()({name:"VDivider",props:yn(),setup(e,i){let{attrs:t}=i;const{themeClasses:n}=Ce(e),{textColorClasses:l,textColorStyles:a}=lt(B(e,"color")),s=S(()=>{const o={};return e.length&&(o[e.vertical?"maxHeight":"maxWidth"]=oe(e.length)),e.thickness&&(o[e.vertical?"borderRightWidth":"borderTopWidth"]=oe(e.thickness)),o});return Z(()=>m("hr",{class:[{"v-divider":!0,"v-divider--inset":e.inset,"v-divider--vertical":e.vertical},n.value,l.value,e.class],style:[s.value,a.value,e.style],"aria-orientation":!t.role||t.role==="separator"?e.vertical?"vertical":"horizontal":void 0,role:`${t.role||"separator"}`},null)),{}}}),pn=H({items:Array,returnObject:Boolean},"VListChildren"),ft=Y()({name:"VListChildren",props:pn(),setup(e,i){let{slots:t}=i;return ot(),()=>{var n,l;return((n=t.default)==null?void 0:n.call(t))??((l=e.items)==null?void 0:l.map(a=>{var h,r;let{children:s,props:o,type:c,raw:p}=a;if(c==="divider")return((h=t.divider)==null?void 0:h.call(t,{props:o}))??m(hn,o,null);if(c==="subheader")return((r=t.subheader)==null?void 0:r.call(t,{props:o}))??m(gn,o,null);const b={subtitle:t.subtitle?d=>{var u;return(u=t.subtitle)==null?void 0:u.call(t,{...d,item:p})}:void 0,prepend:t.prepend?d=>{var u;return(u=t.prepend)==null?void 0:u.call(t,{...d,item:p})}:void 0,append:t.append?d=>{var u;return(u=t.append)==null?void 0:u.call(t,{...d,item:p})}:void 0,title:t.title?d=>{var u;return(u=t.title)==null?void 0:u.call(t,{...d,item:p})}:void 0},k=Ne.filterProps(o);return s?m(Ne,G({value:o==null?void 0:o.value},k),{activator:d=>{let{props:u}=d;const v={...o,...u,value:e.returnObject?p:o.value};return t.header?t.header({props:v}):m(me,v,b)},default:()=>m(ft,{items:s},t)}):t.item?t.item({props:o}):m(me,G(o,{value:e.returnObject?p:o.value}),b)}))}}}),mt=H({items:{type:Array,default:()=>[]},itemTitle:{type:[String,Array,Function],default:"title"},itemValue:{type:[String,Array,Function],default:"value"},itemChildren:{type:[Boolean,String,Array,Function],default:"children"},itemProps:{type:[Boolean,String,Array,Function],default:"props"},returnObject:Boolean,valueComparator:{type:Function,default:Pt}},"list-items");function ke(e,i){const t=Q(i,e.itemTitle,i),n=Q(i,e.itemValue,t),l=Q(i,e.itemChildren),a=e.itemProps===!0?typeof i=="object"&&i!=null&&!Array.isArray(i)?"children"in i?ye(i,["children"]):i:void 0:Q(i,e.itemProps),s={title:t,value:n,...a};return{title:String(s.title??""),value:s.value,props:s,children:Array.isArray(l)?gt(e,l):void 0,raw:i}}function gt(e,i){const t=[];for(const n of i)t.push(ke(e,n));return t}function Sn(e){const i=S(()=>gt(e,e.items)),t=S(()=>i.value.some(a=>a.value===null));function n(a){return t.value||(a=a.filter(s=>s!==null)),a.map(s=>e.returnObject&&typeof s=="string"?ke(e,s):i.value.find(o=>e.valueComparator(s,o.value))||ke(e,s))}function l(a){return e.returnObject?a.map(s=>{let{raw:o}=s;return o}):a.map(s=>{let{value:o}=s;return o})}return{items:i,transformIn:n,transformOut:l}}function bn(e){return typeof e=="string"||typeof e=="number"||typeof e=="boolean"}function wn(e,i){const t=Q(i,e.itemType,"item"),n=bn(i)?i:Q(i,e.itemTitle),l=Q(i,e.itemValue,void 0),a=Q(i,e.itemChildren),s=e.itemProps===!0?ye(i,["children"]):Q(i,e.itemProps),o={title:n,value:l,...s};return{type:t,title:o.title,value:o.value,props:o,children:t==="item"&&a?yt(e,a):void 0,raw:i}}function yt(e,i){const t=[];for(const n of i)t.push(wn(e,n));return t}function kn(e){return{items:S(()=>yt(e,e.items))}}const Vn=H({baseColor:String,activeColor:String,activeClass:String,bgColor:String,disabled:Boolean,expandIcon:String,collapseIcon:String,lines:{type:[Boolean,String],default:"one"},slim:Boolean,nav:Boolean,...on({selectStrategy:"single-leaf",openStrategy:"list"}),...Ye(),...le(),...Qe(),...Ie(),...Xe(),itemType:{type:String,default:"type"},...mt(),...Ze(),...ge(),...Ve(),...Je({variant:"text"})},"VList"),Cn=Y()({name:"VList",props:Vn(),emits:{"update:selected":e=>!0,"update:activated":e=>!0,"update:opened":e=>!0,"click:open":e=>!0,"click:activate":e=>!0,"click:select":e=>!0},setup(e,i){let{slots:t}=i;const{items:n}=kn(e),{themeClasses:l}=Ce(e),{backgroundColorClasses:a,backgroundColorStyles:s}=Gt(B(e,"bgColor")),{borderClasses:o}=et(e),{densityClasses:c}=tt(e),{dimensionStyles:p}=Ae(e),{elevationClasses:b}=nt(e),{roundedClasses:k}=at(e),{children:h,open:r,parents:d,select:u}=sn(e),v=S(()=>e.lines?`v-list--${e.lines}-line`:void 0),w=B(e,"activeColor"),C=B(e,"baseColor"),x=B(e,"color");ot(),It({VListGroup:{activeColor:w,baseColor:C,color:x,expandIcon:B(e,"expandIcon"),collapseIcon:B(e,"collapseIcon")},VListItem:{activeClass:B(e,"activeClass"),activeColor:w,baseColor:C,color:x,density:B(e,"density"),disabled:B(e,"disabled"),lines:B(e,"lines"),nav:B(e,"nav"),slim:B(e,"slim"),variant:B(e,"variant")}});const P=N(!1),K=E();function te(O){P.value=!0}function D(O){P.value=!1}function J(O){var $;!P.value&&!(O.relatedTarget&&(($=K.value)!=null&&$.contains(O.relatedTarget)))&&_()}function z(O){if(K.value){if(O.key==="ArrowDown")_("next");else if(O.key==="ArrowUp")_("prev");else if(O.key==="Home")_("first");else if(O.key==="End")_("last");else return;O.preventDefault()}}function U(O){P.value=!0}function _(O){if(K.value)return Se(K.value,O)}return Z(()=>m(e.tag,{ref:K,class:["v-list",{"v-list--disabled":e.disabled,"v-list--nav":e.nav,"v-list--slim":e.slim},l.value,a.value,o.value,c.value,b.value,v.value,k.value,e.class],style:[s.value,p.value,e.style],tabindex:e.disabled||P.value?-1:0,role:"listbox","aria-activedescendant":void 0,onFocusin:te,onFocusout:D,onFocus:J,onKeydown:z,onMousedown:U},{default:()=>[m(ft,{items:n.value,returnObject:e.returnObject},t)]})),{open:r,select:u,focus:_,children:h,parents:d}}}),Pn=H({id:String,...ye(zt({closeDelay:250,closeOnContentClick:!0,locationStrategy:"connected",openDelay:300,scrim:!1,scrollStrategy:"reposition",transition:{component:it}}),["absolute"])},"VMenu"),In=Y()({name:"VMenu",props:Pn(),emits:{"update:modelValue":e=>!0},setup(e,i){let{slots:t}=i;const n=se(e,"modelValue"),{scopeId:l}=Wt(),a=Ke(),s=S(()=>e.id||`v-menu-${a}`),o=E(),c=de(Re,null),p=N(0);ve(Re,{register(){++p.value},unregister(){--p.value},closeParents(u){setTimeout(()=>{!p.value&&(u==null||u&&!At(u,o.value.contentEl))&&(n.value=!1,c==null||c.closeParents())},40)}});async function b(u){var C,x,P;const v=u.relatedTarget,w=u.target;await Pe(),n.value&&v!==w&&((C=o.value)!=null&&C.contentEl)&&((x=o.value)!=null&&x.globalTop)&&![document,o.value.contentEl].includes(w)&&!o.value.contentEl.contains(w)&&((P=Me(o.value.contentEl)[0])==null||P.focus())}X(n,u=>{u?(c==null||c.register(),document.addEventListener("focusin",b,{once:!0})):(c==null||c.unregister(),document.removeEventListener("focusin",b))});function k(u){c==null||c.closeParents(u)}function h(u){var v,w,C;e.disabled||(u.key==="Tab"||u.key==="Enter"&&!e.closeOnContentClick?(u.key==="Enter"&&u.preventDefault(),xt(Me((v=o.value)==null?void 0:v.contentEl,!1),u.shiftKey?"prev":"next",P=>P.tabIndex>=0)||(n.value=!1,(C=(w=o.value)==null?void 0:w.activatorEl)==null||C.focus())):["Enter"," "].includes(u.key)&&e.closeOnContentClick&&(n.value=!1,c==null||c.closeParents()))}function r(u){var w;if(e.disabled)return;const v=(w=o.value)==null?void 0:w.contentEl;v&&n.value?u.key==="ArrowDown"?(u.preventDefault(),Se(v,"next")):u.key==="ArrowUp"&&(u.preventDefault(),Se(v,"prev")):["ArrowDown","ArrowUp"].includes(u.key)&&(n.value=!0,u.preventDefault(),setTimeout(()=>setTimeout(()=>r(u))))}const d=S(()=>G({"aria-haspopup":"menu","aria-expanded":String(n.value),"aria-owns":s.value,onKeydown:r},e.activatorProps));return Z(()=>{const u=_e.filterProps(e);return m(_e,G({ref:o,id:s.value,class:["v-menu",e.class],style:e.style},u,{modelValue:n.value,"onUpdate:modelValue":v=>n.value=v,absolute:!0,activatorProps:d.value,"onClick:outside":k,onKeydown:h},l),{activator:t.activator,default:function(){for(var v=arguments.length,w=new Array(v),C=0;C<v;C++)w[C]=arguments[C];return m(re,{root:"VMenu"},{default:()=>{var x;return[(x=t.default)==null?void 0:x.call(t,...w)]}})}})}),He({id:s,ΨopenChildren:p},o)}}),An=H({renderless:Boolean,...le()},"VVirtualScrollItem"),xn=Y()({name:"VVirtualScrollItem",inheritAttrs:!1,props:An(),emits:{"update:height":e=>!0},setup(e,i){let{attrs:t,emit:n,slots:l}=i;const{resizeRef:a,contentRect:s}=Ge(void 0,"border");X(()=>{var o;return(o=s.value)==null?void 0:o.height},o=>{o!=null&&n("update:height",o)}),Z(()=>{var o,c;return e.renderless?m(ae,null,[(o=l.default)==null?void 0:o.call(l,{itemRef:a})]):m("div",G({ref:a,class:["v-virtual-scroll__item",e.class],style:e.style},t),[(c=l.default)==null?void 0:c.call(l)])})}}),Tn=-1,Ln=1,pe=100,On=H({itemHeight:{type:[Number,String],default:null},height:[Number,String]},"virtual");function Bn(e,i){const t=Tt(),n=N(0);Ee(()=>{n.value=parseFloat(e.itemHeight||0)});const l=N(0),a=N(Math.ceil((parseInt(e.height)||t.height.value)/(n.value||16))||1),s=N(0),o=N(0),c=E(),p=E();let b=0;const{resizeRef:k,contentRect:h}=Ge();Ee(()=>{k.value=c.value});const r=S(()=>{var f;return c.value===document.documentElement?t.height.value:((f=h.value)==null?void 0:f.height)||parseInt(e.height)||0}),d=S(()=>!!(c.value&&p.value&&r.value&&n.value));let u=Array.from({length:i.value.length}),v=Array.from({length:i.value.length});const w=N(0);let C=-1;function x(f){return u[f]||n.value}const P=Lt(()=>{const f=performance.now();v[0]=0;const g=i.value.length;for(let I=1;I<=g-1;I++)v[I]=(v[I-1]||0)+x(I-1);w.value=Math.max(w.value,performance.now()-f)},w),K=X(d,f=>{f&&(K(),b=p.value.offsetTop,P.immediate(),W(),~C&&Pe(()=>{ze&&window.requestAnimationFrame(()=>{ee(C),C=-1})}))});qe(()=>{P.clear()});function te(f,g){const I=u[f],T=n.value;n.value=T?Math.min(n.value,g):g,(I!==g||T!==n.value)&&(u[f]=g,P())}function D(f){return f=he(f,0,i.value.length-1),v[f]||0}function J(f){return Dn(v,f)}let z=0,U=0,_=0;X(r,(f,g)=>{g&&(W(),f<g&&requestAnimationFrame(()=>{U=0,W()}))});function O(){if(!c.value||!p.value)return;const f=c.value.scrollTop,g=performance.now();g-_>500?(U=Math.sign(f-z),b=p.value.offsetTop):U=f-z,z=f,_=g,W()}function $(){!c.value||!p.value||(U=0,_=0,W())}let ie=-1;function W(){cancelAnimationFrame(ie),ie=requestAnimationFrame(ue)}function ue(){if(!c.value||!r.value)return;const f=z-b,g=Math.sign(U),I=Math.max(0,f-pe),T=he(J(I),0,i.value.length),V=f+r.value+pe,L=he(J(V)+1,T+1,i.value.length);if((g!==Tn||T<l.value)&&(g!==Ln||L>a.value)){const A=D(l.value)-D(T),R=D(L)-D(a.value);Math.max(A,R)>pe?(l.value=T,a.value=L):(T<=0&&(l.value=T),L>=i.value.length&&(a.value=L))}s.value=D(l.value),o.value=D(i.value.length)-D(a.value)}function ee(f){const g=D(f);!c.value||f&&!g?C=f:c.value.scrollTop=g}const y=S(()=>i.value.slice(l.value,a.value).map((f,g)=>({raw:f,index:g+l.value})));return X(i,()=>{u=Array.from({length:i.value.length}),v=Array.from({length:i.value.length}),P.immediate(),W()},{deep:!0}),{containerRef:c,markerRef:p,computedItems:y,paddingTop:s,paddingBottom:o,scrollToIndex:ee,handleScroll:O,handleScrollend:$,handleItemResize:te}}function Dn(e,i){let t=e.length-1,n=0,l=0,a=null,s=-1;if(e[t]<i)return t;for(;n<=t;)if(l=n+t>>1,a=e[l],a>i)t=l-1;else if(a<i)s=l,n=l+1;else return a===i?l:n;return s}const Mn=H({items:{type:Array,default:()=>[]},renderless:Boolean,...On(),...le(),...Ie()},"VVirtualScroll"),En=Y()({name:"VVirtualScroll",props:Mn(),setup(e,i){let{slots:t}=i;const n=Ue("VVirtualScroll"),{dimensionStyles:l}=Ae(e),{containerRef:a,markerRef:s,handleScroll:o,handleScrollend:c,handleItemResize:p,scrollToIndex:b,paddingTop:k,paddingBottom:h,computedItems:r}=Bn(e,B(e,"items"));return Ot(()=>e.renderless,()=>{function d(){var w,C;const v=(arguments.length>0&&arguments[0]!==void 0?arguments[0]:!1)?"addEventListener":"removeEventListener";a.value===document.documentElement?(document[v]("scroll",o,{passive:!0}),document[v]("scrollend",c)):((w=a.value)==null||w[v]("scroll",o,{passive:!0}),(C=a.value)==null||C[v]("scrollend",c))}Bt(()=>{a.value=Yt(n.vnode.el,!0),d(!0)}),qe(d)}),Z(()=>{const d=r.value.map(u=>m(xn,{key:u.index,renderless:e.renderless,"onUpdate:height":v=>p(u.index,v)},{default:v=>{var w;return(w=t.default)==null?void 0:w.call(t,{item:u.raw,index:u.index,...v})}}));return e.renderless?m(ae,null,[m("div",{ref:s,class:"v-virtual-scroll__spacer",style:{paddingTop:oe(k.value)}},null),d,m("div",{class:"v-virtual-scroll__spacer",style:{paddingBottom:oe(h.value)}},null)]):m("div",{ref:a,class:["v-virtual-scroll",e.class],onScrollPassive:o,onScrollend:c,style:[l.value,e.style]},[m("div",{ref:s,class:"v-virtual-scroll__container",style:{paddingTop:oe(k.value),paddingBottom:oe(h.value)}},[d])])}),{scrollToIndex:b}}});function Fn(e,i){const t=N(!1);let n;function l(o){cancelAnimationFrame(n),t.value=!0,n=requestAnimationFrame(()=>{n=requestAnimationFrame(()=>{t.value=!1})})}async function a(){await new Promise(o=>requestAnimationFrame(o)),await new Promise(o=>requestAnimationFrame(o)),await new Promise(o=>requestAnimationFrame(o)),await new Promise(o=>{if(t.value){const c=X(t,()=>{c(),o()})}else o()})}async function s(o){var b,k;if(o.key==="Tab"&&((b=i.value)==null||b.focus()),!["PageDown","PageUp","Home","End"].includes(o.key))return;const c=(k=e.value)==null?void 0:k.$el;if(!c)return;(o.key==="Home"||o.key==="End")&&c.scrollTo({top:o.key==="Home"?0:c.scrollHeight,behavior:"smooth"}),await a();const p=c.querySelectorAll(":scope > :not(.v-virtual-scroll__spacer)");if(o.key==="PageDown"||o.key==="Home"){const h=c.getBoundingClientRect().top;for(const r of p)if(r.getBoundingClientRect().top>=h){r.focus();break}}else{const h=c.getBoundingClientRect().bottom;for(const r of[...p].reverse())if(r.getBoundingClientRect().bottom<=h){r.focus();break}}}return{onListScroll:l,onListKeydown:s}}const Rn=H({chips:Boolean,closableChips:Boolean,closeText:{type:String,default:"$vuetify.close"},openText:{type:String,default:"$vuetify.open"},eager:Boolean,hideNoData:Boolean,hideSelected:Boolean,listProps:{type:Object},menu:Boolean,menuIcon:{type:ne,default:"$dropdown"},menuProps:{type:Object},multiple:Boolean,noDataText:{type:String,default:"$vuetify.noDataText"},openOnClear:Boolean,itemColor:String,...mt({itemChildren:!1})},"Select"),_n=H({...Rn(),...ye(St({modelValue:null,role:"combobox"}),["validationValue","dirty","appendInnerIcon"]),...qt({transition:{component:it}})},"VSelect"),$n=Y()({name:"VSelect",props:_n(),emits:{"update:focused":e=>!0,"update:modelValue":e=>!0,"update:menu":e=>!0},setup(e,i){let{slots:t}=i;const{t:n}=Dt(),l=E(),a=E(),s=E(),o=se(e,"menu"),c=S({get:()=>o.value,set:y=>{var f;o.value&&!y&&((f=a.value)!=null&&f.ΨopenChildren)||(o.value=y)}}),{items:p,transformIn:b,transformOut:k}=Sn(e),h=se(e,"modelValue",[],y=>b(y===null?[null]:Ft(y)),y=>{const f=k(y);return e.multiple?f:f[0]??null}),r=S(()=>typeof e.counterValue=="function"?e.counterValue(h.value):typeof e.counterValue=="number"?e.counterValue:h.value.length),d=_t(),u=S(()=>h.value.map(y=>y.value)),v=N(!1),w=S(()=>c.value?e.closeText:e.openText);let C="",x;const P=S(()=>e.hideSelected?p.value.filter(y=>!h.value.some(f=>f===y)):p.value),K=S(()=>e.hideNoData&&!P.value.length||e.readonly||(d==null?void 0:d.isReadonly.value)),te=S(()=>{var y;return{...e.menuProps,activatorProps:{...((y=e.menuProps)==null?void 0:y.activatorProps)||{},"aria-haspopup":"listbox"}}}),D=E(),{onListScroll:J,onListKeydown:z}=Fn(D,l);function U(y){e.openOnClear&&(c.value=!0)}function _(){K.value||(c.value=!c.value)}function O(y){var V,L;if(!y.key||e.readonly||d!=null&&d.isReadonly.value)return;["Enter"," ","ArrowDown","ArrowUp","Home","End"].includes(y.key)&&y.preventDefault(),["Enter","ArrowDown"," "].includes(y.key)&&(c.value=!0),["Escape","Tab"].includes(y.key)&&(c.value=!1),y.key==="Home"?(V=D.value)==null||V.focus("first"):y.key==="End"&&((L=D.value)==null||L.focus("last"));const f=1e3;function g(A){const R=A.key.length===1,F=!A.ctrlKey&&!A.metaKey&&!A.altKey;return R&&F}if(e.multiple||!g(y))return;const I=performance.now();I-x>f&&(C=""),C+=y.key.toLowerCase(),x=I;const T=p.value.find(A=>A.title.toLowerCase().startsWith(C));T!==void 0&&(h.value=[T])}function $(y){let f=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;if(!y.props.disabled)if(e.multiple){const g=h.value.findIndex(T=>e.valueComparator(T.value,y.value)),I=f??!~g;if(~g){const T=I?[...h.value,y]:[...h.value];T.splice(g,1),h.value=T}else I&&(h.value=[...h.value,y])}else{const g=f!==!1;h.value=g?[y]:[],Pe(()=>{c.value=!1})}}function ie(y){var f;(f=D.value)!=null&&f.$el.contains(y.relatedTarget)||(c.value=!1)}function W(){var y;v.value&&((y=l.value)==null||y.focus())}function ue(y){v.value=!0}function ee(y){if(y==null)h.value=[];else if(Fe(l.value,":autofill")||Fe(l.value,":-webkit-autofill")){const f=p.value.find(g=>g.title===y);f&&$(f)}else l.value&&(l.value.value="")}return X([c,h],()=>{if(!e.hideSelected&&c.value&&h.value.length){const y=P.value.findIndex(f=>h.value.some(g=>e.valueComparator(g.value,f.value)));ze&&window.requestAnimationFrame(()=>{var f;y>=0&&((f=s.value)==null||f.scrollToIndex(y))})}}),X(()=>e.items,(y,f)=>{c.value||v.value&&!f.length&&y.length&&(c.value=!0)}),Z(()=>{const y=!!(e.chips||t.chip),f=!!(!e.hideNoData||P.value.length||t["prepend-item"]||t["append-item"]||t["no-data"]),g=h.value.length>0,I=Be.filterProps(e),T=g||!v.value&&e.label&&!e.persistentPlaceholder?void 0:e.placeholder;return m(Be,G({ref:l},I,{modelValue:h.value.map(V=>V.props.value).join(", "),"onUpdate:modelValue":ee,focused:v.value,"onUpdate:focused":V=>v.value=V,validationValue:h.externalValue,counterValue:r.value,dirty:g,class:["v-select",{"v-select--active-menu":c.value,"v-select--chips":!!e.chips,[`v-select--${e.multiple?"multiple":"single"}`]:!0,"v-select--selected":h.value.length,"v-select--selection-slot":!!t.selection},e.class],style:e.style,inputmode:"none",placeholder:T,"onClick:clear":U,"onMousedown:control":_,onBlur:ie,onKeydown:O,"aria-label":n(w.value),title:n(w.value)}),{...t,default:()=>m(ae,null,[m(In,G({ref:a,modelValue:c.value,"onUpdate:modelValue":V=>c.value=V,activator:"parent",contentClass:"v-select__content",disabled:K.value,eager:e.eager,maxHeight:310,openOnClick:!1,closeOnContentClick:!1,transition:e.transition,onAfterLeave:W},te.value),{default:()=>[f&&m(Cn,G({ref:D,selected:u.value,selectStrategy:e.multiple?"independent":"single-independent",onMousedown:V=>V.preventDefault(),onKeydown:z,onFocusin:ue,onScrollPassive:J,tabindex:"-1","aria-live":"polite",color:e.itemColor??e.color},e.listProps),{default:()=>{var V,L,A;return[(V=t["prepend-item"])==null?void 0:V.call(t),!P.value.length&&!e.hideNoData&&(((L=t["no-data"])==null?void 0:L.call(t))??m(me,{title:n(e.noDataText)},null)),m(En,{ref:s,renderless:!0,items:P.value},{default:R=>{var Oe;let{item:F,index:M,itemRef:j}=R;const Le=G(F.props,{ref:j,key:M,onClick:()=>$(F,null)});return((Oe=t.item)==null?void 0:Oe.call(t,{item:F,index:M,props:Le}))??m(me,G(Le,{role:"option"}),{prepend:ht=>{let{isSelected:pt}=ht;return m(ae,null,[e.multiple&&!e.hideSelected?m(Qt,{key:F.value,modelValue:pt,ripple:!1,tabindex:"-1"},null):void 0,F.props.prependAvatar&&m(be,{image:F.props.prependAvatar},null),F.props.prependIcon&&m(fe,{icon:F.props.prependIcon},null)])}})}}),(A=t["append-item"])==null?void 0:A.call(t)]}})]}),h.value.map((V,L)=>{function A(j){j.stopPropagation(),j.preventDefault(),$(V,!1)}const R={"onClick:close":A,onKeydown(j){j.key!=="Enter"&&j.key!==" "||(j.preventDefault(),j.stopPropagation(),A(j))},onMousedown(j){j.preventDefault(),j.stopPropagation()},modelValue:!0,"onUpdate:modelValue":void 0},F=y?!!t.chip:!!t.selection,M=F?Mt(y?t.chip({item:V,index:L,props:R}):t.selection({item:V,index:L})):void 0;if(!(F&&!M))return m("div",{key:V.value,class:"v-select__selection"},[y?t.chip?m(re,{key:"chip-defaults",defaults:{VChip:{closable:e.closableChips,size:"small",text:V.title}}},{default:()=>[M]}):m(Xt,G({key:"chip",closable:e.closableChips,size:"small",text:V.title,disabled:V.props.disabled},R),null):M??m("span",{class:"v-select__selection-text"},[V.title,e.multiple&&L<h.value.length-1&&m("span",{class:"v-select__selection-comma"},[Et(",")])])])})]),"append-inner":function(){var R;for(var V=arguments.length,L=new Array(V),A=0;A<V;A++)L[A]=arguments[A];return m(ae,null,[(R=t["append-inner"])==null?void 0:R.call(t,...L),e.menuIcon?m(fe,{class:"v-select__menu-icon",icon:e.menuIcon},null):void 0])}})}),He({isFocused:v,menu:c,select:$},l)}});export{me as V,$n as a,hn as b};
