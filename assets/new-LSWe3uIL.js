import{k as g,U as h,e as i,A as v,n as k,x as S,l as m,w as o,o as u,i as n,v as c,aY as U}from"./index-DSVT_0pq.js";import{j as _,g as B,h as P,i as T}from"./VCard-DEPspglP.js";import{V as y}from"./VTextField-Dvdkpkqr.js";import{V as N}from"./VSwitch-Dhv1Zs9O.js";import{b as W}from"./VInput-BS2eDNCp.js";const Y={key:0},E=g({__name:"new",setup(q){const t=h(),w=i(()=>t.currentWallet),x=i(()=>t.webauthnSupported),r=v(""),d=v(""),s=v(!1),V=[a=>!!a||"Password is required",a=>a&&a.length>=8||"Password must be at least 8 characters"],f=[a=>!!a||"Username is required"],p=i(()=>f.every(a=>a(r.value)===!0)),b=i(()=>V.every(a=>a(d.value)===!0));async function C(a){if(!p.value){console.log("Username is not valid");return}let e;if(a)if(b.value)e=await t.createWallet(r.value,d.value),t.currentWallet=e;else{console.log("Password is not valid");return}else e=await t.createWallet(r.value),t.currentWallet=e}return(a,e)=>(u(),k("div",null,[w.value?(u(),k("h2",Y,"You are using the wallet "+S(w.value),1)):(u(),m(_,{key:1,elevation:"0"},{default:o(()=>[n(B,null,{default:o(()=>[c("You do not have a wallet. Create one here")]),_:1}),n(P,null,{default:o(()=>[n(y,{type:"text",label:"wallet name",autocomplete:s.value?"webauthn":"username",modelValue:r.value,"onUpdate:modelValue":e[0]||(e[0]=l=>r.value=l),rules:f},null,8,["autocomplete","modelValue"]),n(N,{label:"Biometric wallet",modelValue:s.value,"onUpdate:modelValue":e[1]||(e[1]=l=>s.value=l),disabled:!x.value},null,8,["modelValue","disabled"]),s.value?U("",!0):(u(),m(y,{key:0,dense:"",type:"password",label:"password",autocomplete:s.value?"webauthn":"new-password",modelValue:d.value,"onUpdate:modelValue":e[2]||(e[2]=l=>d.value=l),rules:V},null,8,["autocomplete","modelValue"]))]),_:1}),n(T,null,{default:o(()=>[s.value?(u(),m(W,{key:1,onClick:e[4]||(e[4]=l=>C(!1)),disabled:!p.value},{default:o(()=>[c("Create biometric Wallet")]),_:1},8,["disabled"])):(u(),m(W,{key:0,onClick:e[3]||(e[3]=l=>C(!0)),disabled:!p.value||!b.value},{default:o(()=>[c("Create Wallet with Password")]),_:1},8,["disabled"]))]),_:1})]),_:1}))]))}});export{E as default};
