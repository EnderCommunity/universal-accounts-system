if(!self.define){let s,e={};const l=(l,i)=>(l=new URL(l+".js",i).href,e[l]||new Promise((e=>{if("document"in self){const s=document.createElement("script");s.src=l,s.onload=e,document.head.appendChild(s)}else s=l,importScripts(l),e()})).then((()=>{let s=e[l];if(!s)throw new Error(`Module ${l} didn’t register its module`);return s})));self.define=(i,n)=>{const r=s||("document"in self?document.currentScript.src:"")||location.href;if(e[r])return;let u={};const t=s=>l(s,r),o={module:{uri:r},exports:u,require:t};e[r]=Promise.all(i.map((s=>o[s]||t(s)))).then((s=>(n(...s),u)))}}define(["./workbox-3ea082d2"],(function(s){"use strict";self.skipWaiting(),s.clientsClaim(),s.precacheAndRoute([{url:"assets/404.a16b884f.js",revision:null},{url:"assets/agreement.5c7257bd.css",revision:null},{url:"assets/agreement.654f317e.js",revision:null},{url:"assets/challenge.1ae100af.js",revision:null},{url:"assets/challenge.f5bbd37a.css",revision:null},{url:"assets/CheckBox.751ea3fd.js",revision:null},{url:"assets/CustomElements.a11a0136.js",revision:null},{url:"assets/FlexContainer.fa3c3365.js",revision:null},{url:"assets/home.dd391cca.js",revision:null},{url:"assets/index.366b58d7.css",revision:null},{url:"assets/index.6258ef7c.js",revision:null},{url:"assets/login.45c4ed34.js",revision:null},{url:"assets/new.e3b0c442.css",revision:null},{url:"assets/new.f6a64e64.js",revision:null},{url:"assets/Notice.103470b8.js",revision:null},{url:"assets/password.574e8266.js",revision:null},{url:"assets/password.c7c317a6.js",revision:null},{url:"assets/personal.69de0e14.js",revision:null},{url:"assets/quick-settings.33d828ec.css",revision:null},{url:"assets/quick-settings.c7daa31f.js",revision:null},{url:"assets/register.1be48539.js",revision:null},{url:"assets/register.774f2f98.css",revision:null},{url:"assets/security-questions.239850af.js",revision:null},{url:"assets/Select.bc862341.js",revision:null},{url:"assets/Title.a581f7e6.js",revision:null},{url:"assets/username.b5355845.js",revision:null},{url:"index.html",revision:"4dbe6b16997beef58a2282b2db42e735"},{url:"libraries/aes.js",revision:"4ff108e4584780dce15d610c142c3e62"},{url:"registerSW.js",revision:"1872c500de691dce40960bb85481de07"},{url:"images/icon-192.png",revision:"4104946a7f751ac60c0304d123063543"},{url:"images/icon-512.png",revision:"092f201c00b035dd97ff5a2c00d95c22"},{url:"manifest.webmanifest",revision:"d86b82704be066635a39f3dffc6757f9"}],{}),s.cleanupOutdatedCaches(),s.registerRoute(new s.NavigationRoute(s.createHandlerBoundToURL("index.html")))}));
