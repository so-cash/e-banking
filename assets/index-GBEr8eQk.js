import{u as c}from"./accounts-WnJbYwxL.js";import{A as m,f,o as p,N as t,R as _,S as k,G as b,I as s,D as C,E as n,c as l,J as V,K as a,O as h,M as v,P as x}from"./index-BqGG3amX.js";import{t as N}from"./formatting-C2HTBpvJ.js";import{h as S,l as g,g as B}from"./VCard-ybFokeQM.js";const y={key:0},w=m({__name:"index",setup(A){const r=c(),i=f(()=>r.accounts),u=b();function d(o){u.push(o)}return p(()=>{r.loadAccounts()}),(o,T)=>(s(),t("div",null,[(s(!0),t(_,null,k(i.value,e=>(s(),C(B,{ref_for:!0,ref:e.address,elevation:"3",onClick:D=>d(`/accounts/${e.address}`)},{default:n(()=>[l(S,null,{default:n(()=>[V(a(e.name)+" "+a(h(N)(e.balance,e.bank.decimals))+" "+a(e.bank.currency),1)]),_:2},1024),l(g,{class:"mb-2"},{default:n(()=>[v("span",null,a(e.iban)+" / "+a(e.bank.bic),1),e.bank.info?(s(),t("span",y," ("+a(e.bank.info.name)+")",1)):x("",!0)]),_:2},1024)]),_:2},1032,["onClick"]))),256))]))}});export{w as default};
