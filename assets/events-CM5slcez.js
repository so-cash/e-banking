import{_ as g,V as k}from"./filter-CJ8vjxkn.js";import{A as y,f as n,o as h,N as l,c as s,D as C,F as c,R as D,I as r,J as u,K as a,O as m,M as T,P as b,a2 as N,a3 as S,C as B}from"./index-CjOFXEkW.js";import{u as j}from"./accounts-CDDCG86r.js";import{b as M,c as P}from"./formatting-CrmIf10V.js";import{g as R,i as $}from"./VCard-B3Oprnt7.js";import{V as w,a as E}from"./VHover-DMpG539J.js";import"./VInput-CZnSWQNW.js";import"./VSelect-omC-gu8C.js";import"./VTextField-BeZf-9lP.js";import"./VChip-Bl0RUETQ.js";const F={key:1,class:"d-flex justify-center"},H={key:0,class:"text-caption"},X=y({__name:"events",setup(L){const o=j();n(()=>B().params.address.toString());const d=n(()=>o.selectedAccount),i=n(()=>{var e;return(e=o.selectedAccount)==null?void 0:e.account}),p=n(()=>{var e;return((e=o.selectedAccount)==null?void 0:e.events)||[]});h(async()=>{if(d.value){const e=await o.loadAccountEvents(i.value.address);o.selectedAccount.events=e.reverse()}});const f=[{title:"Date",value:"date"},{title:"Action",value:"action"}];return(e,O)=>{const v=g;return r(),l(D,null,[s(v,{selected:d.value},null,8,["selected"]),i.value?(r(),l("div",F,[s(R,{elevation:"3",class:"mt-3 flex-lg-0-0 flex-sm-fill"},{default:c(()=>[s($,null,{default:c(()=>[s(w,{items:p.value,headers:f},{"item.date":c(({item:t})=>[u(a(m(M)(t.date.getTime()))+" "+a(m(P)(t.date.getTime())),1)]),"item.action":c(({item:t})=>[s(E,{"open-delay":"1000","close-delay":"3000"},{default:c(({isHovering:_,props:x})=>[T("div",N(S(x)),[u(a(t.method)+"("+a(Object.entries(t.params).map(([V,A])=>`${V}=${A}`).join(", "))+") ",1),_?(r(),l("div",H," block: "+a(t.block)+", log: "+a(t.index)+", hash: "+a(t.tx),1)):b("",!0)],16)]),_:2},1024)]),_:1},8,["items"])]),_:1})]),_:1})])):(r(),C(k,{key:0,elevation:3,type:"card"}))],64)}}});export{X as default};
