if(!self.define){let e,s={};const i=(i,n)=>(i=new URL(i+".js",n).href,s[i]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=i,e.onload=s,document.head.appendChild(e)}else e=i,importScripts(i),s()})).then((()=>{let e=s[i];if(!e)throw new Error(`Module ${i} didn’t register its module`);return e})));self.define=(n,r)=>{const l=e||("document"in self?document.currentScript.src:"")||location.href;if(s[l])return;let t={};const o=e=>i(e,l),c={module:{uri:l},exports:t,require:o};s[l]=Promise.all(n.map((e=>c[e]||o(e)))).then((e=>(r(...e),t)))}}define(["./workbox-3ea082d2"],(function(e){"use strict";self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"assets/404.c8dc3251.js",revision:null},{url:"assets/home.0264cafc.js",revision:null},{url:"assets/index.b675437e.css",revision:null},{url:"assets/index.e924a38e.js",revision:null},{url:"assets/login.f30209e8.js",revision:null},{url:"assets/new.8e4bf3c8.css",revision:null},{url:"assets/new.a7a45adb.js",revision:null},{url:"assets/register.df65a514.js",revision:null},{url:"assets/Title.a581f7e6.js",revision:null},{url:"index.html",revision:"02a5482a066b389b7966c4eafbcaaaa5"},{url:"registerSW.js",revision:"1872c500de691dce40960bb85481de07"},{url:"images/icon-192.png",revision:"c24d6677881cde42e8cae9adbee78444"},{url:"images/icon-512.png",revision:"bc541660a40c002c85ba22cfc20ed4ce"},{url:"manifest.webmanifest",revision:"6c9c5d6fbf93ac4aa0893710697955c4"}],{}),e.cleanupOutdatedCaches(),e.registerRoute(new e.NavigationRoute(e.createHandlerBoundToURL("index.html")))}));
