import{p as I,g as S,i as b,a as p,b as f,e as _,s as R,t as h,h as D,o as E,l as C,c as e,B as N,m as P,u as G,j as L}from"./index.bded2c97.js";import{T as M}from"./Title.a581f7e6.js";import{D as T}from"./CustomElements.28fc67d6.js";import{r as a,I as A,B as O,n as Q,c as F,a as Y}from"./register.8c5929c8.js";import{M as H,F as U}from"./FlexContainer.b673b36f.js";import{N as j}from"./Notice.f20458a6.js";const V=h('<div><input type="radio"><label></label></div>');function z(t,r){let c=document.getElementsByName(t);if(c.length<2)throw new Error("Insufficient radio group!");c.forEach(function(i){i.addEventListener("change",r)})}function s(t){try{return document.querySelector(`input[type="radio"][name="${t}"]:checked`).value}catch{return}}function J(t){let r=I(t,S.radio);if(typeof t.id!="string")throw new Error("<Radio> must always have an ID!");if(typeof t.name!="string")throw new Error("<Radio> must always have a name attribute!");return(()=>{const c=V.cloneNode(!0),i=c.firstChild,o=i.nextSibling;return b(o,()=>t.children),p(n=>{const u=S.radioContainer,l=t.id,v=r.class,m=t.name,$=r.style,y=S.radioLabel,w=t.id;return u!==n._v$&&f(c,n._v$=u),l!==n._v$2&&_(i,"id",n._v$2=l),v!==n._v$3&&f(i,n._v$3=v),m!==n._v$4&&_(i,"name",n._v$4=m),n._v$5=R(i,$,n._v$5),y!==n._v$6&&f(o,n._v$6=y),w!==n._v$7&&_(o,"for",n._v$7=w),n},{_v$:void 0,_v$2:void 0,_v$3:void 0,_v$4:void 0,_v$5:void 0,_v$6:void 0,_v$7:void 0}),p(()=>i.value=t.value),p(()=>i.checked=t.checked),c})()}const K="_quickSettingContainer_mdv7g_13",W="_title_mdv7g_29",X="_description_mdv7g_43",Z="_contentContainer_mdv7g_59",ee="_sectionTitle_mdv7g_67",g={quickSettingContainer:K,title:W,description:X,contentContainer:Z,sectionTitle:ee},te=h("<div><text></text><text></text><div></div></div>"),ie=h("<h4></h4>"),ne=h("<h1>Quick Settings</h1>"),re=h("<br>"),oe=h("<h3>Choose the settings that suit your <!>!</h3>");function d(t){return e(J,P(t,{get children(){return t.children}}))}function k(t){let r;return E(()=>{r.innerHTML=t.description}),(()=>{const c=te.cloneNode(!0),i=c.firstChild,o=i.nextSibling,n=o.nextSibling;b(i,()=>t.title);const u=r;return typeof u=="function"?G(u,o):r=o,b(n,()=>t.children),p(l=>{const v=g.quickSettingContainer,m=g.title,$=g.description,y=g.contentContainer;return v!==l._v$&&f(c,l._v$=v),m!==l._v$2&&_(i,"class",l._v$2=m),$!==l._v$3&&_(o,"class",l._v$3=$),y!==l._v$4&&f(n,l._v$4=y),l},{_v$:void 0,_v$2:void 0,_v$3:void 0,_v$4:void 0}),c})()}function q(t){return[(()=>{const r=ie.cloneNode(!0);return b(r,()=>t.children),p(()=>f(r,g.sectionTitle)),r})(),e(T,{})]}function B(){return e(T,{style:{opacity:.1,margin:"28px 8px"}})}function x(){return"&nbsp;&nbsp;&#x2022;&nbsp;&nbsp;"}function fe(t){let r,c=D();return E(()=>{a.quickSettings.profile!=null&&(document.getElementById("profile-"+a.quickSettings.profile).checked=!0),a.quickSettings.activity!=null&&(document.getElementById("activity-"+a.quickSettings.activity).checked=!0),a.quickSettings.location!=null&&(document.getElementById("location-"+a.quickSettings.location).checked=!0),a.quickSettings.colorScheme!=null&&(document.getElementById("color-scheme-"+a.quickSettings.colorScheme).checked=!0),z("color-scheme",function(){C(Number(s("color-scheme")))}),C(Number(s("color-scheme")))}),t.report(),[e(M,{children:"Sign Up"}),ne.cloneNode(!0),re.cloneNode(!0),(()=>{const i=oe.cloneNode(!0),o=i.firstChild,n=o.nextSibling;return n.nextSibling,b(i,e(H,{children:"personal preferences"}),n),i})(),e(U,{space:"around",style:{width:"400px"},get children(){return[e(A,{get children(){return[e(q,{children:"Privacy"}),e(k,{title:"Public profile",description:"All Ciel users have a public Ciel profile. Ciel profiles include basic public information like the user's profile picture, username, and registration date. Rich profiles can include more data!<br><br>(Note that some of your information might be public on third-party services, no matter the status of your public profile)",get children(){return[e(d,{id:"profile-1",name:"profile",value:1,checked:!0,children:"Show profile with rich data"}),e(d,{id:"profile-2",name:"profile",value:2,children:"Show profile with limited data"}),e(d,{id:"profile-3",name:"profile",value:3,children:"Hide profile"})]}}),e(B,{}),e(k,{title:"Activity history",get description(){return`The activity history can only be accessed by the owner of this account. It cannot be shared with any of your connected third-party services or any external servers.<br/><br/>
                    There are three types of activity records:<br/>
                    ${x()} Ciel records: your login activity, settings modifications, new connections, and other similar information.<br/>
                    ${x()} Ciel-affiliated services records: data from Ciel-affiliated official services. (e.g. 0x0C services)<br/>
                    ${x()} Third-party records: data from your connected third-party services. (You can review and modify the reported data on your first connection to each third-party service)`},get children(){return[e(d,{id:"activity-1",name:"activity",value:1,checked:!0,children:"Collect data from Ciel, its official affiliated services, and connected third-party services"}),e(d,{id:"activity-2",name:"activity",value:2,children:"Collect data from Ciel and its official affiliated services"}),e(d,{id:"activity-3",name:"activity",value:3,children:"Collect data only from the Ciel service"})]}}),e(B,{}),e(k,{title:"Location data",description:"Your location data can help us keep your Ciel account secure. More precise location data can help us keep track of your login activity better and make it hard for people to impersonate you.<br/><br/> (If you choose the precise data option, you won't be allowed to access your Ciel account on devices with no GPS access)",get children(){return[e(d,{id:"location-1",name:"location",value:1,checked:!0,children:"Collect approximate location data"}),e(d,{id:"location-2",name:"location",value:2,children:"Collect precise location data"})]}}),e(q,{children:"Extra"}),e(k,{title:"Colour Scheme",description:"Select your prefered colour scheme. (Synced across devices)",get children(){return[e(d,{id:"color-scheme-0",name:"color-scheme",value:0,checked:!0,children:"Auto (System preference)"}),e(d,{id:"color-scheme-1",name:"color-scheme",value:1,children:"Light"}),e(d,{id:"color-scheme-2",name:"color-scheme",value:2,children:"Dark"})]}})]}}),e(j,{children:"You can always change your account's settings and privacy preferences using your account's control panel!"}),e(O,{get children(){return[e(N,{type:"action",function:function(){a.quickSettings.colorScheme==null&&C(0),history.back()},children:"Go back"}),e(N,{ref(i){const o=r;typeof o=="function"?o(i):r=i},type:"action",function:function(){Q(r,function(i,o){(s("profile")==null||s("activity")==null||s("location")==null||s("color-scheme")==null)&&(L("Unexpected error!","The required data is incomplete.",[["Ok",function(n,u){u()}]]),i()),o()},function(){a.quickSettings.profile=Number(s("profile")),a.quickSettings.activity=Number(s("activity")),a.quickSettings.location=Number(s("location")),a.quickSettings.colorScheme=Number(s("color-scheme")),F(6,function(i){i?Y(c):c("/user/register/agreement")})})},primary:!0,children:"Next"})]}})]}})]}export{fe as default};
