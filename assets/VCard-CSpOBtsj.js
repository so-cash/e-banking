import{g as k,m as b,B as H,h as f,i as n,p as S,N as u,F as A,b as W,c as G,d as J,e as h,V as K,W as Q}from"./index-DLwZTpqW.js";import{s as I,i as x,r as p,V as P,g,m as U,z as X,a as Y,x as Z,A as $,B as ee,b as ae,j as te,h as ne,R as de,c as ie,l as le,n as se,C as ce,d as re,w as ue,D as ve,E as oe,e as me,p as ye,f as ge,L as ke,q as be}from"./index-wcK1yG6x.js";const fe=k()({name:"VCardActions",props:b(),setup(e,i){let{slots:t}=i;return H({VBtn:{slim:!0,variant:"text"}}),f(()=>{var a;return n("div",{class:["v-card-actions",e.class],style:e.style},[(a=t.default)==null?void 0:a.call(t)])}),{}}}),Ie=I("v-card-subtitle"),Ce=I("v-card-title"),Ve=S({appendAvatar:String,appendIcon:u,prependAvatar:String,prependIcon:u,subtitle:[String,Number],title:[String,Number],...b(),...x()},"VCardItem"),Ae=k()({name:"VCardItem",props:Ve(),setup(e,i){let{slots:t}=i;return f(()=>{var s;const a=!!(e.prependAvatar||e.prependIcon),v=!!(a||t.prepend),l=!!(e.appendAvatar||e.appendIcon),o=!!(l||t.append),m=!!(e.title!=null||t.title),y=!!(e.subtitle!=null||t.subtitle);return n("div",{class:["v-card-item",e.class],style:e.style},[v&&n("div",{key:"prepend",class:"v-card-item__prepend"},[t.prepend?n(g,{key:"prepend-defaults",disabled:!a,defaults:{VAvatar:{density:e.density,image:e.prependAvatar},VIcon:{density:e.density,icon:e.prependIcon}}},t.prepend):n(A,null,[e.prependAvatar&&n(p,{key:"prepend-avatar",density:e.density,image:e.prependAvatar},null),e.prependIcon&&n(P,{key:"prepend-icon",density:e.density,icon:e.prependIcon},null)])]),n("div",{class:"v-card-item__content"},[m&&n(Ce,{key:"title"},{default:()=>{var d;return[((d=t.title)==null?void 0:d.call(t))??e.title]}}),y&&n(Ie,{key:"subtitle"},{default:()=>{var d;return[((d=t.subtitle)==null?void 0:d.call(t))??e.subtitle]}}),(s=t.default)==null?void 0:s.call(t)]),o&&n("div",{key:"append",class:"v-card-item__append"},[t.append?n(g,{key:"append-defaults",disabled:!l,defaults:{VAvatar:{density:e.density,image:e.appendAvatar},VIcon:{density:e.density,icon:e.appendIcon}}},t.append):n(A,null,[e.appendIcon&&n(P,{key:"append-icon",density:e.density,icon:e.appendIcon},null),e.appendAvatar&&n(p,{key:"append-avatar",density:e.density,image:e.appendAvatar},null)])])])}),{}}}),he=I("v-card-text"),pe=S({appendAvatar:String,appendIcon:u,disabled:Boolean,flat:Boolean,hover:Boolean,image:String,link:{type:Boolean,default:void 0},prependAvatar:String,prependIcon:u,ripple:{type:[Boolean,Object],default:!0},subtitle:[String,Number],text:[String,Number],title:[String,Number],...U(),...b(),...x(),...X(),...Y(),...Z(),...$(),...ee(),...ae(),...te(),...W(),...G(),...ne({variant:"elevated"})},"VCard"),xe=k()({name:"VCard",directives:{Ripple:de},props:pe(),setup(e,i){let{attrs:t,slots:a}=i;const{themeClasses:v}=J(e),{borderClasses:l}=ie(e),{colorClasses:o,colorStyles:m,variantClasses:y}=le(e),{densityClasses:s}=se(e),{dimensionStyles:d}=ce(e),{elevationClasses:B}=re(e),{loaderClasses:D}=ue(e),{locationStyles:L}=ve(e),{positionClasses:T}=oe(e),{roundedClasses:_}=me(e),c=ye(e,t),N=h(()=>e.link!==!1&&c.isLink.value),r=h(()=>!e.disabled&&e.link!==!1&&(e.link||c.isClickable.value));return f(()=>{const R=N.value?"a":e.tag,F=!!(a.title||e.title!=null),E=!!(a.subtitle||e.subtitle!=null),j=F||E,w=!!(a.append||e.appendAvatar||e.appendIcon),M=!!(a.prepend||e.prependAvatar||e.prependIcon),O=!!(a.image||e.image),q=j||M||w,z=!!(a.text||e.text!=null);return K(n(R,{class:["v-card",{"v-card--disabled":e.disabled,"v-card--flat":e.flat,"v-card--hover":e.hover&&!(e.disabled||e.flat),"v-card--link":r.value},v.value,l.value,o.value,s.value,B.value,D.value,T.value,_.value,y.value,e.class],style:[m.value,d.value,L.value,e.style],href:c.href.value,onClick:r.value&&c.navigate,tabindex:e.disabled?-1:void 0},{default:()=>{var C;return[O&&n("div",{key:"image",class:"v-card__image"},[a.image?n(g,{key:"image-defaults",disabled:!e.image,defaults:{VImg:{cover:!0,src:e.image}}},a.image):n(ge,{key:"image-img",cover:!0,src:e.image},null)]),n(ke,{name:"v-card",active:!!e.loading,color:typeof e.loading=="boolean"?void 0:e.loading},{default:a.loader}),q&&n(Ae,{key:"item",prependAvatar:e.prependAvatar,prependIcon:e.prependIcon,title:e.title,subtitle:e.subtitle,appendAvatar:e.appendAvatar,appendIcon:e.appendIcon},{default:a.item,prepend:a.prepend,title:a.title,subtitle:a.subtitle,append:a.append}),z&&n(he,{key:"text"},{default:()=>{var V;return[((V=a.text)==null?void 0:V.call(a))??e.text]}}),(C=a.default)==null?void 0:C.call(a),a.actions&&n(fe,null,{default:a.actions}),be(r.value,"v-card")]}}),[[Q("ripple"),r.value&&e.ripple]])}),{}}});export{Ce as V,xe as a,he as b,fe as c};
