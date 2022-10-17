import{p as D,g as S,i as b,b as p,d as f,j as _,s as L,t as h,e as P,a as I,k as a,z as C,q,o as G,c as e,B as N,n as M,u as A,f as O}from"./index.f85b29b8.js";import{T as Q}from"./Title.a581f7e6.js";import{D as R}from"./CustomElements.6d72416f.js";import{a as F,N as U,B as Y,n as H,r as B}from"./register.0f846eb2.js";import{M as j,F as z}from"./FlexContainer.7563198b.js";const V=h('<div><input type="radio"><label></label></div>');function J(i,r){let c=document.getElementsByName(i);if(c.length<2)throw new Error("Insufficient radio group!");c.forEach(function(t){t.addEventListener("change",r)})}function s(i){try{return document.querySelector(`input[type="radio"][name="${i}"]:checked`).value}catch{return}}function K(i){let r=D(i,S.radio);if(typeof i.id!="string")throw new Error("<Radio> must always have an ID!");if(typeof i.name!="string")throw new Error("<Radio> must always have a name attribute!");return(()=>{const c=V.cloneNode(!0),t=c.firstChild,o=t.nextSibling;return b(o,()=>i.children),p(n=>{const u=S.radioContainer,l=i.id,v=r.class,m=i.name,$=r.style,y=S.radioLabel,w=i.id;return u!==n._v$&&f(c,n._v$=u),l!==n._v$2&&_(t,"id",n._v$2=l),v!==n._v$3&&f(t,n._v$3=v),m!==n._v$4&&_(t,"name",n._v$4=m),n._v$5=L(t,$,n._v$5),y!==n._v$6&&f(o,n._v$6=y),w!==n._v$7&&_(o,"for",n._v$7=w),n},{_v$:void 0,_v$2:void 0,_v$3:void 0,_v$4:void 0,_v$5:void 0,_v$6:void 0,_v$7:void 0}),p(()=>t.value=i.value),p(()=>t.checked=i.checked),c})()}const W="_quickSettingContainer_mdv7g_13",X="_title_mdv7g_29",Z="_description_mdv7g_43",ee="_contentContainer_mdv7g_59",te="_sectionTitle_mdv7g_67",g={quickSettingContainer:W,title:X,description:Z,contentContainer:ee,sectionTitle:te},ie=h("<div><text></text><text></text><div></div></div>"),ne=h("<h4></h4>"),re=h("<h1>Quick Settings</h1>"),oe=h("<br>"),ce=h("<h3>Choose the settings that suit your <!>!</h3>");function d(i){return e(K,M(i,{get children(){return i.children}}))}function k(i){let r;return I(()=>{r.innerHTML=i.description}),(()=>{const c=ie.cloneNode(!0),t=c.firstChild,o=t.nextSibling,n=o.nextSibling;b(t,()=>i.title);const u=r;return typeof u=="function"?A(u,o):r=o,b(n,()=>i.children),p(l=>{const v=g.quickSettingContainer,m=g.title,$=g.description,y=g.contentContainer;return v!==l._v$&&f(c,l._v$=v),m!==l._v$2&&_(t,"class",l._v$2=m),$!==l._v$3&&_(o,"class",l._v$3=$),y!==l._v$4&&f(n,l._v$4=y),l},{_v$:void 0,_v$2:void 0,_v$3:void 0,_v$4:void 0}),c})()}function E(i){return[(()=>{const r=ne.cloneNode(!0);return b(r,()=>i.children),p(()=>f(r,g.sectionTitle)),r})(),e(R,{})]}function T(){return e(R,{style:{opacity:.1,margin:"28px 8px"}})}function x(){return"&nbsp;&nbsp;&#x2022;&nbsp;&nbsp;"}function fe(i){let r,c=P();return I(()=>{a.quickSettings.profile!=null&&(document.getElementById("profile-"+a.quickSettings.profile).checked=!0),a.quickSettings.activity!=null&&(document.getElementById("activity-"+a.quickSettings.activity).checked=!0),a.quickSettings.location!=null&&(document.getElementById("location-"+a.quickSettings.location).checked=!0),a.quickSettings.colorScheme!=null&&(document.getElementById("color-scheme-"+a.quickSettings.colorScheme).checked=!0),J("color-scheme",function(){C(Number(s("color-scheme")))}),C(Number(s("color-scheme"))),q(5,function(t){t?B(c):i.pageLoaded()})}),G(()=>{i.pageUnloading()}),[e(Q,{children:"Sign Up"}),re.cloneNode(!0),oe.cloneNode(!0),(()=>{const t=ce.cloneNode(!0),o=t.firstChild,n=o.nextSibling;return n.nextSibling,b(t,e(j,{children:"personal preferences"}),n),t})(),e(z,{space:"around",style:{width:"400px"},get children(){return[e(F,{get children(){return[e(E,{children:"Privacy"}),e(k,{title:"Public profile",description:"All Ciel users have a public Ciel profile. Ciel profiles include basic public information like the user's profile picture, username, and registration date. Rich profiles can include more data!<br><br>(Note that some of your information might be public on third-party services, no matter the status of your public profile)",get children(){return[e(d,{id:"profile-1",name:"profile",value:1,checked:!0,children:"Show profile with rich data"}),e(d,{id:"profile-2",name:"profile",value:2,children:"Show profile with limited data"}),e(d,{id:"profile-3",name:"profile",value:3,children:"Hide profile"})]}}),e(T,{}),e(k,{title:"Activity history",get description(){return`The activity history can only be accessed by the owner of this account. It cannot be shared with any of your connected third-party services or any external servers.<br/><br/>
                    There are three types of activity records:<br/>
                    ${x()} Ciel records: your login activity, settings modifications, new connections, and other similar information.<br/>
                    ${x()} Ciel-affiliated services records: data from Ciel-affiliated official services. (e.g. 0x0C services)<br/>
                    ${x()} Third-party records: data from your connected third-party services. (You can review and modify the reported data on your first connection to each third-party service)`},get children(){return[e(d,{id:"activity-1",name:"activity",value:1,checked:!0,children:"Collect data from Ciel, its official affiliated services, and connected third-party services"}),e(d,{id:"activity-2",name:"activity",value:2,children:"Collect data from Ciel and its official affiliated services"}),e(d,{id:"activity-3",name:"activity",value:3,children:"Collect data only from the Ciel service"})]}}),e(T,{}),e(k,{title:"Location data",description:"Your location data can help us keep your Ciel account secure. More precise location data can help us keep track of your login activity better and make it hard for people to impersonate you.<br/><br/> (If you choose the precise data option, you won't be allowed to access your Ciel account on devices with no GPS access)",get children(){return[e(d,{id:"location-1",name:"location",value:1,checked:!0,children:"Collect approximate location data"}),e(d,{id:"location-2",name:"location",value:2,children:"Collect precise location data"})]}}),e(E,{children:"Extra"}),e(k,{title:"Colour Scheme",description:"Select your prefered colour scheme. (Synced across devices)",get children(){return[e(d,{id:"color-scheme-0",name:"color-scheme",value:0,checked:!0,children:"Auto (System preference)"}),e(d,{id:"color-scheme-1",name:"color-scheme",value:1,children:"Light"}),e(d,{id:"color-scheme-2",name:"color-scheme",value:2,children:"Dark"})]}})]}}),e(U,{children:"You can always change your account's settings and privacy preferences using your account's control panel!"}),e(Y,{get children(){return[e(N,{type:"action",function:function(){a.quickSettings.colorScheme==null&&C(0),history.back()},children:"Go back"}),e(N,{ref(t){const o=r;typeof o=="function"?o(t):r=t},type:"action",function:function(){H(r,function(t,o){(s("profile")==null||s("activity")==null||s("location")==null||s("color-scheme")==null)&&(O("Unexpected error!","The required data is incomplete.",[["Ok",function(n,u){u()}]]),t()),o()},function(){a.quickSettings.profile=Number(s("profile")),a.quickSettings.activity=Number(s("activity")),a.quickSettings.location=Number(s("location")),a.quickSettings.colorScheme=Number(s("color-scheme")),q(6,function(t){t?B(c):c("/user/register/agreement")})})},primary:!0,children:"Next"})]}})]}})]}export{fe as default};
