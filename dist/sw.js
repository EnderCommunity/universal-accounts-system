if(!self.define){let s,e={};const l=(l,i)=>(l=new URL(l+".js",i).href,e[l]||new Promise((e=>{if("document"in self){const s=document.createElement("script");s.src=l,s.onload=e,document.head.appendChild(s)}else s=l,importScripts(l),e()})).then((()=>{let s=e[l];if(!s)throw new Error(`Module ${l} didn’t register its module`);return s})));self.define=(i,n)=>{const r=s||("document"in self?document.currentScript.src:"")||location.href;if(e[r])return;let u={};const t=s=>l(s,r),o={module:{uri:r},exports:u,require:t};e[r]=Promise.all(i.map((s=>o[s]||t(s)))).then((s=>(n(...s),u)))}}define(["./workbox-3ea082d2"],(function(s){"use strict";self.skipWaiting(),s.clientsClaim(),s.precacheAndRoute([{url:"assets/404.8a3bfbf0.js",revision:null},{url:"assets/accounts.5552f8fa.js",revision:null},{url:"assets/agreement.5c7257bd.css",revision:null},{url:"assets/agreement.e4bcd70d.js",revision:null},{url:"assets/challenge.beb65ed1.js",revision:null},{url:"assets/challenge.f5bbd37a.css",revision:null},{url:"assets/CheckBox.1047a1f9.js",revision:null},{url:"assets/CustomElements.6d72416f.js",revision:null},{url:"assets/FlexContainer.7563198b.js",revision:null},{url:"assets/home.e39ab31e.js",revision:null},{url:"assets/index.1b8e8d25.css",revision:null},{url:"assets/index.f85b29b8.js",revision:null},{url:"assets/login.5023edbd.js",revision:null},{url:"assets/new.3f1458cd.js",revision:null},{url:"assets/new.e3b0c442.css",revision:null},{url:"assets/password.21f2ec8e.js",revision:null},{url:"assets/password.75cb96a3.js",revision:null},{url:"assets/personal.1f4e392f.js",revision:null},{url:"assets/quick-settings.0f93ee94.js",revision:null},{url:"assets/quick-settings.33d828ec.css",revision:null},{url:"assets/register.0f846eb2.js",revision:null},{url:"assets/register.774f2f98.css",revision:null},{url:"assets/review.e3f871fe.css",revision:null},{url:"assets/review.f3eb47b3.js",revision:null},{url:"assets/security-questions.8b400fe5.js",revision:null},{url:"assets/securityQuestions.81697a5d.js",revision:null},{url:"assets/Select.52bd353c.js",revision:null},{url:"assets/Title.a581f7e6.js",revision:null},{url:"assets/username.11f9616e.js",revision:null},{url:"index.html",revision:"bc1665902102d96308b74cd0cd5692d5"},{url:"libraries/aes.js",revision:"4ff108e4584780dce15d610c142c3e62"},{url:"registerSW.js",revision:"1872c500de691dce40960bb85481de07"},{url:"images/icon-192.png",revision:"4104946a7f751ac60c0304d123063543"},{url:"images/icon-512.png",revision:"092f201c00b035dd97ff5a2c00d95c22"},{url:"manifest.webmanifest",revision:"d86b82704be066635a39f3dffc6757f9"}],{}),s.cleanupOutdatedCaches(),s.registerRoute(new s.NavigationRoute(s.createHandlerBoundToURL("index.html")))}));
