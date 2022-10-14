import{d as N,t as u,h as B,o as I,c as e,i as c,B as h,u as M,a as A,b as k,e as y,j as S}from"./index.6258ef7c.js";import{T}from"./Title.a581f7e6.js";import{N as D}from"./Notice.103470b8.js";import{M as $,F as E}from"./FlexContainer.fa3c3365.js";import{c as w,I as H,B as P,n as R,a as C,r as b}from"./register.1be48539.js";const j="_agreementItem_13o09_13",F="_titleContainer_13o09_23",O="_title_13o09_23",U="_description_13o09_63",W="_button_13o09_85",d={agreementItem:j,titleContainer:F,title:O,description:U,button:W},q=u('<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M18 3a3 3 0 0 1 3 3v2.143c0 .334 0 .501-.077.623a.5.5 0 0 1-.157.157C20.644 9 20.477 9 20.143 9H15m3-6a3 3 0 0 0-3 3v3m3-6H7c-1.886 0-2.828 0-3.414.586C3 4.172 3 5.114 3 7v14l3-1 3 1 3-1 3 1V9" stroke="var(--svg-color)" stroke-width="2"></path><path d="M7 7h4M8 11H7M7 15h3" stroke="var(--svg-color)" stroke-width="2" stroke-linecap="round"></path></svg>'),f=(r={})=>(()=>{const n=q.cloneNode(!0);return N(n,r,!0,!0),n})(),G=u('<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M10.5 12H12v4h2m-2-8h.01m1.553 12.863a9 9 0 1 0-3.126-17.726 9 9 0 0 0 3.126 17.726Z" stroke="var(--svg-color)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path></svg>'),x=(r={})=>(()=>{const n=G.cloneNode(!0);return N(n,r,!0,!0),n})(),L=u("<div><div><text></text></div><text></text></div>"),V=u("<h1>User agreement</h1>"),Y=u("<br>"),Z=u("<h3>To create a <!> you must <!> to the following:</h3>");function l(r){let n;return I(()=>{r.description==null&&n.remove()}),(()=>{const a=L.cloneNode(!0),t=a.firstChild,i=t.firstChild,s=t.nextSibling;c(t,()=>r.icon,i),c(i,()=>r.title);const g=n;return typeof g=="function"?M(g,s):n=s,c(s,()=>r.description),c(a,function(){if(r.link!=null)return e(h,{get class(){return d.button},type:"action",function:function(){},light:!0,small:!0,disabled:!0,children:"Read more"})},null),A(o=>{const m=d.agreementItem,v=d.titleContainer,p=d.title,_=d.description;return m!==o._v$&&k(a,o._v$=m),v!==o._v$2&&k(t,o._v$2=v),p!==o._v$3&&y(i,"class",o._v$3=p),_!==o._v$4&&y(s,"class",o._v$4=_),o},{_v$:void 0,_v$2:void 0,_v$3:void 0,_v$4:void 0}),a})()}function ee(r){let n=B(),a;return I(()=>{w(6,function(t){t&&C(n)})}),r.report(),[e(T,{children:"Sign Up"}),V.cloneNode(!0),Y.cloneNode(!0),(()=>{const t=Z.cloneNode(!0),i=t.firstChild,s=i.nextSibling,g=s.nextSibling,o=g.nextSibling;return o.nextSibling,c(t,e($,{children:"Ciel account"}),s),c(t,e($,{children:"agree"}),o),t})(),e(E,{space:"around",style:{width:"400px"},get children(){return[e(H,{get children(){return[e(l,{link:0,title:"Terms and Conditions",get icon(){return e(f,{})}}),e(l,{link:0,title:"Privacy Policy",get icon(){return e(f,{})}}),e(l,{link:0,title:"Disclaimer",get icon(){return e(f,{})}}),e(l,{link:0,title:"Cookies Policy",get icon(){return e(f,{})},description:"Applies to the Ciel website and all login/permission prompts."}),e(l,{link:0,title:"End-user license agreement (EULA)",get icon(){return e(f,{})},description:"Applies when using software created by, or officially affiliated with, Ciel."}),e(l,{title:"Cookie Consent",get icon(){return e(x,{})},description:"Ciel requires the use of cookies in order to function as intended. We use cookies to keep track of your ongoing sessions, analyse our website's traffic, and understand where our visitors are coming from."}),e(l,{title:"Notice",get icon(){return e(x,{})},description:"This is an experimental project. We do NOT hold responsibility for any data loss, data leaks, or any misuse of this service at the hand of third-party developers."})]}}),e(D,{children:"Note that all of the provided legal content above could change at any time. You will be notified one month prior to any change."}),e(P,{get children(){return[e(h,{type:"action",function:function(){history.back()},children:"Go back"}),e(h,{ref(t){const i=a;typeof i=="function"?i(t):a=t},type:"action",function:function(){R(a,function(t,i){i()},function(){b.agreement=!0,w(7,function(t){t?C(n):S("Notice","If you agree to create an account, you are effectively agreeing to the yet-to-be-written legal documents that are missing from this page!",[["Ok",function(i,s){n("/user/register/review"),s()}],["Cancel",function(i,s){b.agreement=!1,s()}]])})})},primary:!0,children:"I agree"})]}})]}})]}export{ee as default};
