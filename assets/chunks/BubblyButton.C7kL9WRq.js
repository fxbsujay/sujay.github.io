import{_ as o,S as c,o as l,c as u,p as i,q as b,l as r}from"./framework.C3TvUUho.js";const _=e=>(i("data-v-f1378a7f"),e=e(),b(),e),d={class:"bubbly-button-box"},m=_(()=>r("button",{class:"bubbly-button"},"冒泡按钮",-1)),p=[m],f={__name:"BubblyButton",setup(e){let s=null;const a=function(t){clearInterval(s),s=null,t.preventDefault,n(t.target)},n=function(t){t.classList.remove("animate"),t.classList.add("animate"),setTimeout(function(){t.classList.remove("animate")},750)};return c(()=>{const t=document.getElementsByClassName("bubbly-button");t.length>=1&&(t[0].addEventListener("click",a,!1),s=setInterval(function(){n(t[0])},1e3))}),(t,B)=>(l(),u("div",d,p))}},h=o(f,[["__scopeId","data-v-f1378a7f"]]);export{h as default};
