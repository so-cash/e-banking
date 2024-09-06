import{_ as C,V as x}from"./account-header.vue_vue_type_script_setup_true_lang-Dm1aKYCy.js";import{A as B,f as d,r as i,w as N,o as g,N as v,c as a,D as I,F as l,R as S,G as h,H as L,I as m,J as V,K as f,P as T,C as D}from"./index-IHWIFeWN.js";import{u as E}from"./accounts-DNWMhuiC.js";import{g as F,i as R,k as U}from"./VCard-DmPXIXLH.js";import{V as _}from"./VTextField-3hYE36TE.js";import{V as H,a as W,b as $}from"./VListItem-BST5nH38.js";import{a as j}from"./VInput-B3Gjru1x.js";import"./formatting-C2HTBpvJ.js";const G={key:1,class:"d-flex justify-center"},J={key:0},Z=B({__name:"transfer",setup(K){const s=E();d(()=>D().params.address.toString());const A=d(()=>s.selectedAccount),r=d(()=>{var e;return(e=s.selectedAccount)==null?void 0:e.account});d(()=>{var e;return((e=s.selectedAccount)==null?void 0:e.transactions)||[]});const c=i(),u=i(""),p=i(""),o=i(),w=h();async function y(){if(!r.value)throw new Error("Account not found");if(c.value<=0)throw new Error("Need a positive amount to transfer");if(!u.value)throw new Error("Account not found");await s.transfer(r.value,u.value,c.value,p.value),w.push(`/accounts/${r.value.address}`)}return N(u,async e=>{if(e){if(e.startsWith("FR")){const t=await s.decodeIBAN(r.value,e);console.log("decoded IBAN",t),o.value=t}else if(e.startsWith("0x")){const t=await s.loadAccount(e);console.log("decoded account",t),o.value=t}}}),g(async()=>{}),(e,t)=>{const b=C,k=L("v-list-item-content");return m(),v(S,null,[a(b,{selected:A.value},null,8,["selected"]),r.value?(m(),v("div",G,[a(F,{elevation:"3",class:"mt-3 w-100 w-md-50 w-lg-33"},{default:l(()=>[a(R,null,{default:l(()=>[a(_,{type:"number",modelValue:c.value,"onUpdate:modelValue":t[0]||(t[0]=n=>c.value=n),label:"transfer amount"},null,8,["modelValue"]),a(_,{modelValue:u.value,"onUpdate:modelValue":t[1]||(t[1]=n=>u.value=n),label:"transfer to (address or IBAN)"},null,8,["modelValue"]),o.value?(m(),v("div",J,[a(H,null,{default:l(()=>[a(k,null,{default:l(()=>[a(W,null,{default:l(()=>[V("Beneficiary "+f(o.value.iban),1)]),_:1}),a($,null,{default:l(()=>{var n;return[V(f(o.value.name)+". "+f((n=o.value.bank.info)==null?void 0:n.name)+". "+f(o.value.bank.bic),1)]}),_:1})]),_:1})]),_:1})])):T("",!0),a(_,{modelValue:p.value,"onUpdate:modelValue":t[2]||(t[2]=n=>p.value=n),label:"Label your payment"},null,8,["modelValue"])]),_:1}),a(U,null,{default:l(()=>[a(j,{color:"primary",onClick:y,disabled:!o.value},{default:l(()=>[V("Transfer")]),_:1},8,["disabled"])]),_:1})]),_:1})])):(m(),I(x,{key:0,elevation:3,type:"card"}))],64)}}});export{Z as default};