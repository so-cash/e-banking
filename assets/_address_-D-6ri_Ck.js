import{k as c,e as u,C as t,G as r,n as l,x as d,o as i,a1 as p}from"./index-BghGak4P.js";import{u as m}from"./accounts-CEaEo-sB.js";const x=c({__name:"[address]",setup(v){const e=m(),o=u(()=>p().params.address.toString()),a=t(),n=t([]),s=t([]);return r(async()=>{if(a.value=await e.loadAccount(o.value),!a.value)throw new Error("Account not found");n.value=await e.loadTransactions(a.value,{from:new Date(Date.now()-1e3*3600*24*30)}),s.value=await e.loadAccountEvents(a.value.address)}),(f,_)=>(i(),l("div",null,"Account page "+d(o.value),1))}});export{x as default};