import{A as S,b4 as L,B as A,f as y,r as C,w as T,o as D,N as d,O as s,R as f,S as x,P as p,D as _,E as t,G as E,I as o,F as B,c as r,J as c,K as u,M as i}from"./index-BqGG3amX.js";import{t as F}from"./formatting-C2HTBpvJ.js";import{g as v,h as G,i as w,k as M}from"./VCard-ybFokeQM.js";import{V as R}from"./VSwitch-CQrY30m3.js";import{a as g}from"./VInput-X0VGhynT.js";import"./VSelectionControl-Tx7MFcOq.js";const U={key:0,class:"v-row"},$=["src"],I={key:1,class:"v-row"},J={class:"text-caption"},K=i("h3",null,"Create a new wallet",-1),Z=S({__name:"index",setup(O){L();const a=A(),W=E(),h=y(()=>a.wallets),V=C({}),b=y(()=>a.selectedProvider);C([]);function N(){a.currentWallet=void 0,W.push("/wallets/new")}T(b,async l=>{console.log("Selected provider",l.name),l&&(await a.loadWallets(),await k())});async function k(){const l=a.dltApi();if(l)for(const m of h.value)V.value[m.address]=await l.walletBalance(m.address)}function P(l){a.currentWallet=l}return D(async()=>{await a.loadWallets(),await k()}),(l,m)=>(o(),d(f,null,[s(B)().length!=1||!s(a).selectedProvider?(o(),d("div",U,[(o(!0),d(f,null,x(s(B)(),e=>{var n;return o(),_(v,{key:e.info.uuid,class:"mt-2 ml-2",elevation:"3",onClick:j=>s(a).selectedProvider=e.info,color:((n=s(a).selectedProvider)==null?void 0:n.uuid)==e.info.uuid?"primary":void 0},{default:t(()=>[r(G,null,{default:t(()=>[c(u(e.info.name),1)]),_:2},1024),r(w,{class:"d-flex"},{default:t(()=>[i("img",{src:e.info.icon,alt:"p.info.rdns",height:"42px",class:"mx-auto"},null,8,$)]),_:2},1024)]),_:2},1032,["onClick","color"])}),128))])):p("",!0),s(a).selectedProvider?(o(),d("div",I,[(o(!0),d(f,null,x(h.value,e=>(o(),_(v,{key:e.address,class:"mt-2 ml-2",elevation:"3"},{default:t(()=>[r(w,null,{default:t(()=>[i("h3",null,[c(u(e.attributes.name)+" ",1),i("span",J,u(e.address),1)]),i("p",null,"Balance: "+u(s(F)(V.value[e.address]))+" GWei",1),r(R,{modelValue:e.attributes.passwordLess,"onUpdate:modelValue":n=>e.attributes.passwordLess=n,label:"Biometric wallet",color:"primary",readonly:""},null,8,["modelValue","onUpdate:modelValue"]),r(g,{color:"primary",onClick:n=>P(e.address),disabled:s(a).currentWallet===e.address},{default:t(()=>[c("Select")]),_:2},1032,["onClick","disabled"])]),_:2},1024)]),_:2},1024))),128)),s(a).selectedProvider.supportNew?(o(),_(v,{key:0,class:"mt-2 ml-2",elevation:"3"},{default:t(()=>[r(w,null,{default:t(()=>[K]),_:1}),r(M,null,{default:t(()=>[r(g,{color:"primary",onClick:N},{default:t(()=>[c("New")]),_:1})]),_:1})]),_:1})):p("",!0)])):p("",!0)],64))}});export{Z as default};