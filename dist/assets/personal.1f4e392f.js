import{e as L,a as G,k as t,q as C,o as S,c as l,i as P,B as M,t as o,f as A}from"./index.f85b29b8.js";import{T as O}from"./Title.a581f7e6.js";import{c as U,a as J,I as N,N as k,B as q,n as z,s as i,t as R,r as B}from"./register.0f846eb2.js";import{S as _}from"./Select.52bd353c.js";import{M as T,F}from"./FlexContainer.7563198b.js";const V=o("<h1>Let's get personal!</h1>"),Z=o("<br>"),j=o("<h3>Enter your <!>!</h3>"),H=o('<option value="1">January</option>'),K=o('<option value="2">February</option>'),Q=o('<option value="3">March</option>'),W=o('<option value="4">April</option>'),X=o('<option value="5">May</option>'),E=o('<option value="6">June</option>'),ee=o('<option value="7">July</option>'),ne=o('<option value="8">August</option>'),te=o('<option value="9">September</option>'),oe=o('<option value="10">October</option>'),le=o('<option value="11">November</option>'),ae=o('<option value="12">December</option>'),re=o('<option value="male">Male</option>'),ie=o('<option value="female">Female</option>'),ue=o('<option value="unknown">Prefer not to say</option>'),de=o('<option value="custom">Custom</option>'),ce=o('<option value="1">he/him</option>'),se=o('<option value="2">she/her</option>'),pe=o('<option value="0">they/them</option>');function be($){let b=L(),v,u,y,c,m,r,s,I=function(){document.getElementById("gender").value!="custom"?s.style.display!="none"&&(s.style.display="none",r.style.display="none",document.getElementById("custom-gender-pronouns").selectedIndex=1,document.getElementById("custom-gender-name").value="FILL"):(document.getElementById("custom-gender-pronouns").selectedIndex=0,document.getElementById("custom-gender-name").value="",s.style.display=null,r.style.display=null)};return G(()=>{t.birthdate.day!=null&&(u.children[0].children[0].value=t.birthdate.day),t.birthdate.month!=null&&(y.children[0].children[0].value=t.birthdate.month),t.birthdate.year!=null&&(c.children[0].children[0].value=t.birthdate.year),t.gender!=null&&(t.gender=="Male"&&t.pronounce==1||t.gender=="Female"&&t.pronounce==2||t.gender=="Unknown"&&t.pronounce==0?m.children[0].children[0].value=t.gender.toLowerCase():(m.children[0].children[0].value="custom",I(),r.children[0].children[0].value=t.gender)),t.pronounce!=null&&(s.children[0].children[0].value=t.pronounce),U(v,"birthday_month","birthday_day","birthday_year","gender","custom-gender-name","custom-gender-pronouns"),C(3,function(e){e?B(b):$.pageLoaded()})}),S(()=>{$.pageUnloading()}),[l(O,{children:"Sign Up"}),V.cloneNode(!0),Z.cloneNode(!0),(()=>{const e=j.cloneNode(!0),n=e.firstChild,d=n.nextSibling;return d.nextSibling,P(e,l(T,{children:"personal details"}),d),e})(),l(F,{space:"around",style:{width:"400px"},get children(){return[l(J,{get children(){return[l(F,{horozontal:!0,style:{margin:0},get children(){return[l(_,{ref(e){const n=y;typeof n=="function"?n(e):y=e},id:"birthday_month",label:"Month",style:{"min-width":"40%","margin-bottom":"auto"},get children(){return[H.cloneNode(!0),K.cloneNode(!0),Q.cloneNode(!0),W.cloneNode(!0),X.cloneNode(!0),E.cloneNode(!0),ee.cloneNode(!0),ne.cloneNode(!0),te.cloneNode(!0),oe.cloneNode(!0),le.cloneNode(!0),ae.cloneNode(!0)]}}),l(N,{ref(e){const n=u;typeof n=="function"?n(e):u=e},id:"birthday_day",type:"number",label:"Day",autocomplete:"bday-day",style:{"margin-bottom":"auto"}}),l(N,{ref(e){const n=c;typeof n=="function"?n(e):c=e},id:"birthday_year",type:"number",label:"Year",autocomplete:"bday-year",style:{"margin-bottom":"auto","min-width":"calc(28% + 8px)"}})]}}),l(k,{smaller:!0,children:"Enter your birthday"}),l(_,{ref(e){const n=m;typeof n=="function"?n(e):m=e},id:"gender",label:"Gender",style:{width:"calc(100% - 8px)"},onChange:I,get children(){return[re.cloneNode(!0),ie.cloneNode(!0),ue.cloneNode(!0),de.cloneNode(!0)]}}),l(N,{ref(e){const n=r;typeof n=="function"?n(e):r=e},id:"custom-gender-name",type:"text",label:"Gender name",style:{width:"calc(100% - 8px)",display:"none"},value:"FILL"}),l(_,{ref(e){const n=s;typeof n=="function"?n(e):s=e},id:"custom-gender-pronouns",label:"Prefered pronouns",style:{width:"calc(100% - 8px)",display:"none"},selectedIndex:1,get children(){return[ce.cloneNode(!0),se.cloneNode(!0),pe.cloneNode(!0)]}})]}}),l(k,{children:"Make sure to use your real date of birth. You can create a Ciel account as long as you are 13+ years old! (access to external services will be limited depending on your age)"}),l(q,{get children(){return[l(M,{type:"action",function:function(){history.back()},children:"Go back"}),l(M,{ref(e){const n=v;typeof n=="function"?n(e):v=e},type:"action",function:function(){z(v,function(e,n,d){let h=u.children[0].children[0],g=c.children[0].children[0],a=y.children[0].children[0],D=m.children[0].children[0],f=r.children[0].children[0],w=new Date().getFullYear();if((Number(g.value)<w-120||Number(g.value)>w)&&(i(c,!1,"Invalid year!"),e()),Number(h.value)<1||Number(h.value)>31)i(u,!1,"Invalid day!"),e();else if(a.value=="1"||a.value=="3"||a.value=="5"||a.value=="7"||a.value=="8"||a.value=="10"||a.value=="12")Number(h.value)>31&&(i(u,!1,"Invalid day!"),e());else if(a.value=="4"||a.value=="6"||a.value=="9"||a.value=="11")Number(h.value)>30&&(i(u,!1,"Invalid day!"),e());else{let p=Number(g.value),x=p%4==0&&p%100!=0||p%400==0?29:28;Number(h.value)>x&&(i(u,!1,"Invalid day!"),e())}if(!d[0]){let p=new Date-new Date(`${g.value}-${a.value}-${h.value}`);Math.floor(p/1e3/60/60/24/365)<13&&(A("Cannot create an account!","You cannot use Ciel or any of its affiliated services when you're under the age of 13.",[["Ok",function(me,Y){i(c,!1,""),Y()}]]),e())}D.value=="custom"?(/^[a-zA-Z\s]+$/.test(f.value)?f.value[0]==" "||f.value[f.value.length-1]==" "?(i(r,!1,"Can't start or end with whitespace!"),e()):f.value.indexOf("  ")!=-1&&(i(r,!1,"Can't contain consecutive whitespaces!"),e()):(i(r,!1,"Can only contain letters and whitespaces!"),e()),R(f.value).then(function(p){p&&(i(r,!1,"Profanity not allow!"),e()),n()})):n()},function(){t.birthdate.day=Number(u.children[0].children[0].value),t.birthdate.month=Number(y.children[0].children[0].value),t.birthdate.year=Number(c.children[0].children[0].value);let e=m.children[0].children[0].value,n=d=>d.charAt(0).toUpperCase()+d.slice(1).toLowerCase();e=="custom"?(t.gender=n(r.children[0].children[0].value),t.pronounce=Number(s.children[0].children[0].value)):(t.gender=n(e),t.gender=="Male"?t.pronounce=1:t.gender=="Female"?t.pronounce=2:t.pronounce=0),C(4,function(d){d?B(b):b("/user/register/security-questions")})})},primary:!0,children:"Next"})]}})]}})]}export{be as default};
