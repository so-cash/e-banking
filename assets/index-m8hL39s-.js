import{A as S,aY as L,B as A,f as k,r as y,w as T,o as D,M as d,N as s,Q as f,R as x,O as p,C as _,D as t,F as E,H as o,E as B,c as r,I as c,J as u,L as i}from"./index-sYn4zpRH.js";import{t as F}from"./formatting-B24v2g9C.js";import{g as v,h as M,i as w,k as R}from"./VCard-DVcoeF_5.js";import{V as U}from"./VSwitch-Ca3Myffx.js";import{a as g}from"./VInput-CHHdvrRo.js";const $={key:0,class:"v-row"},G=["src"],H={key:1,class:"v-row"},I={class:"text-caption"},J=i("h3",null,"Create a new wallet",-1),X=S({__name:"index",setup(O){L();const a=A(),W=E(),h=k(()=>a.wallets),C=y({}),N=k(()=>a.selectedProvider);y([]);function b(){a.currentWallet=void 0,W.push("/wallets/new")}T(N,async l=>{console.log("Selected provider",l.name),l&&(await a.loadWallets(),await V())});async function V(){const l=a.dltApi();if(l)for(const m of h.value)C.value[m.address]=await l.walletBalance(m.address)}function P(l){a.currentWallet=l}return D(async()=>{await a.loadWallets(),await V()}),(l,m)=>(o(),d(f,null,[s(B)().length!=1||!s(a).selectedProvider?(o(),d("div",$,[(o(!0),d(f,null,x(s(B)(),e=>{var n;return o(),_(v,{key:e.info.uuid,class:"mt-2 ml-2",elevation:"3",onClick:Q=>s(a).selectedProvider=e.info,color:((n=s(a).selectedProvider)==null?void 0:n.uuid)==e.info.uuid?"primary":void 0},{default:t(()=>[r(M,null,{default:t(()=>[c(u(e.info.name),1)]),_:2},1024),r(w,{class:"d-flex"},{default:t(()=>[i("img",{src:e.info.icon,alt:"p.info.rdns",height:"42px",class:"mx-auto"},null,8,G)]),_:2},1024)]),_:2},1032,["onClick","color"])}),128))])):p("",!0),s(a).selectedProvider?(o(),d("div",H,[(o(!0),d(f,null,x(h.value,e=>(o(),_(v,{key:e.address,class:"mt-2 ml-2",elevation:"3"},{default:t(()=>[r(w,null,{default:t(()=>[i("h3",null,[c(u(e.attributes.name)+" ",1),i("span",I,u(e.address),1)]),i("p",null,"Balance: "+u(s(F)(C.value[e.address]))+" GWei",1),r(U,{modelValue:e.attributes.passwordLess,"onUpdate:modelValue":n=>e.attributes.passwordLess=n,label:"Biometric wallet",color:"primary",readonly:""},null,8,["modelValue","onUpdate:modelValue"]),r(g,{color:"primary",onClick:n=>P(e.address),disabled:s(a).currentWallet===e.address},{default:t(()=>[c("Select")]),_:2},1032,["onClick","disabled"])]),_:2},1024)]),_:2},1024))),128)),s(a).selectedProvider.supportNew?(o(),_(v,{key:0,class:"mt-2 ml-2",elevation:"3"},{default:t(()=>[r(w,null,{default:t(()=>[J]),_:1}),r(R,null,{default:t(()=>[r(g,{color:"primary",onClick:b},{default:t(()=>[c("New")]),_:1})]),_:1})]),_:1})):p("",!0)])):p("",!0)],64))}});export{X as default};