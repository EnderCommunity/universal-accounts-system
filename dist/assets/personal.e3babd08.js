import{h as Y,o as S,c as l,i as G,B as w,t as o,j as C}from"./index.bded2c97.js";import{T as L}from"./Title.a581f7e6.js";import{I as b,N as M,s as u}from"./Notice.f20458a6.js";import{S as N}from"./Select.a46034b1.js";import{M as O,F as k}from"./FlexContainer.b673b36f.js";import{r as t,b as P,I as A,B as J,n as z,c as R,a as T}from"./register.8c5929c8.js";const j=o("<h1>Let's get personal!</h1>"),q=o("<br>"),U=o("<h3>Enter your <!>!</h3>"),V=o('<option value="1">January</option>'),Z=o('<option value="2">February</option>'),H=o('<option value="3">March</option>'),K=o('<option value="4">April</option>'),Q=o('<option value="5">May</option>'),W=o('<option value="6">June</option>'),X=o('<option value="7">July</option>'),E=o('<option value="8">August</option>'),ee=o('<option value="9">September</option>'),ne=o('<option value="10">October</option>'),te=o('<option value="11">November</option>'),oe=o('<option value="12">December</option>'),le=o('<option value="male">Male</option>'),ae=o('<option value="female">Female</option>'),re=o('<option value="unknown">Prefer not to say</option>'),ie=o('<option value="custom">Custom</option>'),ue=o('<option value="1">he/him</option>'),de=o('<option value="2">she/her</option>'),ce=o('<option value="0">they/them</option>');function ge(B){let _=Y(),y,i,m,d,s,r,c,I=function(){document.getElementById("gender").value!="custom"?c.style.display!="none"&&(c.style.display="none",r.style.display="none",document.getElementById("custom-gender-pronouns").selectedIndex=1,document.getElementById("custom-gender-name").value="FILL"):(document.getElementById("custom-gender-pronouns").selectedIndex=0,document.getElementById("custom-gender-name").value="",c.style.display=null,r.style.display=null)};return S(()=>{t.birthdate.day!=null&&(i.children[0].children[0].value=t.birthdate.day),t.birthdate.month!=null&&(m.children[0].children[0].value=t.birthdate.month),t.birthdate.year!=null&&(d.children[0].children[0].value=t.birthdate.year),t.gender!=null&&(t.gender=="male"||t.gender=="female"||t.gender=="unknown"?s.children[0].children[0].value=t.gender:(s.children[0].children[0].value="custom",I(),r.children[0].children[0].value=t.gender)),t.pronounce!=null&&(c.children[0].children[0].value=t.pronounce),P(y,"birthday_month","birthday_day","birthday_year","gender","custom-gender-name","custom-gender-pronouns")}),B.report(),[l(L,{children:"Sign Up"}),j.cloneNode(!0),q.cloneNode(!0),(()=>{const e=U.cloneNode(!0),n=e.firstChild,v=n.nextSibling;return v.nextSibling,G(e,l(O,{children:"personal details"}),v),e})(),l(k,{space:"around",style:{width:"400px"},get children(){return[l(A,{get children(){return[l(k,{horozontal:!0,style:{margin:0},get children(){return[l(N,{ref(e){const n=m;typeof n=="function"?n(e):m=e},id:"birthday_month",label:"Month",style:{"min-width":"40%","margin-bottom":"auto"},get children(){return[V.cloneNode(!0),Z.cloneNode(!0),H.cloneNode(!0),K.cloneNode(!0),Q.cloneNode(!0),W.cloneNode(!0),X.cloneNode(!0),E.cloneNode(!0),ee.cloneNode(!0),ne.cloneNode(!0),te.cloneNode(!0),oe.cloneNode(!0)]}}),l(b,{ref(e){const n=i;typeof n=="function"?n(e):i=e},id:"birthday_day",type:"number",label:"Day",autocomplete:"bday-day",style:{"margin-bottom":"auto"}}),l(b,{ref(e){const n=d;typeof n=="function"?n(e):d=e},id:"birthday_year",type:"number",label:"Year",autocomplete:"bday-year",style:{"margin-bottom":"auto","min-width":"calc(28% + 8px)"}})]}}),l(M,{smaller:!0,children:"Enter your birthday"}),l(N,{ref(e){const n=s;typeof n=="function"?n(e):s=e},id:"gender",label:"Gender",style:{width:"calc(100% - 8px)"},onChange:I,get children(){return[le.cloneNode(!0),ae.cloneNode(!0),re.cloneNode(!0),ie.cloneNode(!0)]}}),l(b,{ref(e){const n=r;typeof n=="function"?n(e):r=e},id:"custom-gender-name",type:"text",label:"Gender name",style:{width:"calc(100% - 8px)",display:"none"},value:"FILL"}),l(N,{ref(e){const n=c;typeof n=="function"?n(e):c=e},id:"custom-gender-pronouns",label:"Prefered pronouns",style:{width:"calc(100% - 8px)",display:"none"},selectedIndex:1,get children(){return[ue.cloneNode(!0),de.cloneNode(!0),ce.cloneNode(!0)]}})]}}),l(M,{children:"Make sure to use your real date of birth. You can create a Ciel account as long as you are 13+ years old! (access to external services will be limited depending on your age)"}),l(J,{get children(){return[l(w,{type:"action",function:function(){history.back()},children:"Go back"}),l(w,{ref(e){const n=y;typeof n=="function"?n(e):y=e},type:"action",function:function(){z(y,function(e,n,v){let p=i.children[0].children[0],g=d.children[0].children[0],a=m.children[0].children[0],D=s.children[0].children[0],h=r.children[0].children[0],$=new Date().getFullYear();if((Number(g.value)<$-120||Number(g.value)>$)&&(u(d,!1,"Invalid year!"),e()),Number(p.value)<1||Number(p.value)>31)u(i,!1,"Invalid day!"),e();else if(a.value=="1"||a.value=="3"||a.value=="5"||a.value=="7"||a.value=="8"||a.value=="10"||a.value=="12")Number(p.value)>31&&(u(i,!1,"Invalid day!"),e());else if(a.value=="4"||a.value=="6"||a.value=="9"||a.value=="11")Number(p.value)>30&&(u(i,!1,"Invalid day!"),e());else{let f=Number(g.value),x=f%4==0&&f%100!=0||f%400==0?29:28;Number(p.value)>x&&(u(i,!1,"Invalid day!"),e())}if(!v[0]){let f=new Date-new Date(`${g.value}-${a.value}-${p.value}`);Math.floor(f/1e3/60/60/24/365)<13&&(C("Cannot create an account!","You cannot use Ciel or any of its affiliated services when you're under the age of 13.",[["Ok",function(se,F){u(d,!1,""),F()}]]),e())}D.value=="custom"&&(/^[a-zA-Z\s]+$/.test(h.value)?h.value[0]==" "||h.value[h.value.length-1]==" "?(u(r,!1,"Can't start or end with whitespace!"),e()):h.value.indexOf("  ")!=-1&&(u(r,!1,"Can't contain consecutive whitespaces!"),e()):(u(r,!1,"Can only contain letters and whitespaces!"),e())),C("Caution!","No profanity check for 'custom_gender_name'"),n()},function(){t.birthdate.day=Number(i.children[0].children[0].value),t.birthdate.month=Number(m.children[0].children[0].value),t.birthdate.year=Number(d.children[0].children[0].value);let e=s.children[0].children[0].value;e=="custom"?(t.gender=r.children[0].children[0].value,t.pronounce=Number(c.children[0].children[0].value)):(t.gender=e,e=="male"?t.pronounce=1:e=="female"?t.pronounce=2:t.pronounce=0),R(4,function(n){n?T(_):_("/user/register/security-questions")})})},primary:!0,children:"Next"})]}})]}})]}export{ge as default};
