import{k as h,o as g,c as t,i as f,t as e}from"./index.da86e54e.js";import{T as _}from"./Title.a581f7e6.js";import{M as b,F as i,B as c}from"./FlexContainer.7e597a32.js";import{I as u,N as s}from"./Notice.169fd8f5.js";import{S as d}from"./Select.b54d0c89.js";import{clientDataCheck as v,InputFieldsContainer as N,nextCheck as $}from"./register.eec2cf91.js";const x=e("<h1>Let's get personal!</h1>"),I=e("<br>"),w=e("<h3>Enter your <!>!</h3>"),C=e('<option value="1">January</option>'),k=e('<option value="2">February</option>'),B=e('<option value="3">March</option>'),E=e('<option value="4">April</option>'),M=e('<option value="5">May</option>'),F=e('<option value="6">June</option>'),S=e('<option value="7">July</option>'),G=e('<option value="8">August</option>'),L=e('<option value="9">September</option>'),D=e('<option value="10">October</option>'),P=e('<option value="11">November</option>'),J=e('<option value="12">December</option>'),z=e('<option value="male">Male</option>'),A=e('<option value="female">Female</option>'),T=e('<option value="unknown">Prefer not to say</option>'),Y=e('<option value="custom">Custom</option>'),q=e('<option value="he">he/him</option>'),O=e('<option value="she">she/her</option>'),R=e('<option value="they">they/them</option>');function W(m){let y=h(),r,a,l;return g(()=>{v(r,"birthday_month","birthday_day","birthday_year","gender","custom-gender-name","custom-gender-pronouns")}),m.report(),[t(_,{children:"Sign Up"}),x.cloneNode(!0),I.cloneNode(!0),(()=>{const o=w.cloneNode(!0),n=o.firstChild,p=n.nextSibling;return p.nextSibling,f(o,t(b,{children:"personal details"}),p),o})(),t(i,{space:"around",style:{width:"400px"},get children(){return[t(N,{get children(){return[t(i,{horozontal:!0,style:{margin:0},get children(){return[t(d,{id:"birthday_month",label:"Month",style:{"min-width":"40%","margin-bottom":"auto"},get children(){return[C.cloneNode(!0),k.cloneNode(!0),B.cloneNode(!0),E.cloneNode(!0),M.cloneNode(!0),F.cloneNode(!0),S.cloneNode(!0),G.cloneNode(!0),L.cloneNode(!0),D.cloneNode(!0),P.cloneNode(!0),J.cloneNode(!0)]}}),t(u,{id:"birthday_day",type:"number",label:"Day",autocomplete:"bday-day",style:{"margin-bottom":"auto"}}),t(u,{id:"birthday_year",type:"number",label:"Year",autocomplete:"bday-year",style:{"margin-bottom":"auto"}})]}}),t(s,{smaller:!0,children:"Enter your birthday"}),t(d,{id:"gender",label:"Gender",style:{width:"calc(100% - 8px)"},onChange:function(){document.getElementById("gender").value!="custom"?l.style.display!="none"&&(l.style.display="none",a.style.display="none",document.getElementById("custom-gender-pronouns").selectedIndex=1,document.getElementById("custom-gender-name").value="FILL"):(document.getElementById("custom-gender-pronouns").selectedIndex=0,document.getElementById("custom-gender-name").value="",l.style.display=null,a.style.display=null)},get children(){return[z.cloneNode(!0),A.cloneNode(!0),T.cloneNode(!0),Y.cloneNode(!0)]}}),t(u,{ref(o){const n=a;typeof n=="function"?n(o):a=o},id:"custom-gender-name",type:"text",label:"Gender name",style:{width:"calc(100% - 8px)",display:"none"},value:"FILL"}),t(d,{ref(o){const n=l;typeof n=="function"?n(o):l=o},id:"custom-gender-pronouns",label:"Prefered pronouns",style:{width:"calc(100% - 8px)",display:"none"},selectedIndex:1,get children(){return[q.cloneNode(!0),O.cloneNode(!0),R.cloneNode(!0)]}})]}}),t(s,{children:"Make sure to use your real date of birth. You can create a Ciel account as long as you are 13+ years old! (access to external services will be limited depending on your age)"}),t(i,{space:"between",horozontal:!0,"no-grow":!0,get children(){return[t(c,{type:"action",function:function(){history.back()},children:"Go back"}),t(c,{ref(o){const n=r;typeof n=="function"?n(o):r=o},type:"action",function:function(){$(r,function(o,n){},function(){y("/user/register/security-questions")})},primary:!0,children:"Next"})]}})]}})]}export{W as default};
