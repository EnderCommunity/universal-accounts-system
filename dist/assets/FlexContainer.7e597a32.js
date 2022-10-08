import{p as h,i as _,a as u,b as d,d as C,e as y,c as x,m as w,L as g,f as L,u as m,s as B,g as v,h as N,t as k}from"./index.da86e54e.js";const I="_button_k5eom_19",D="_primarybutton_k5eom_71",E="_lightButton_k5eom_81",A="_iconButton_k5eom_195",H="_buttonIcon_k5eom_209",z="_iconButtonText_k5eom_265",T="_inputFieldContainer_k5eom_283",G="_selectContainer_k5eom_285",P="_inputFieldLabel_k5eom_305",M="_selectLabel_k5eom_307",S="_inputField_k5eom_283",R="_selectHint_k5eom_383",j="_inputFieldHint_k5eom_385",q="_selectDataContainer_k5eom_405",J="_selectField_k5eom_407",K="_inputFieldDataContainer_k5eom_409",O="_selectFieldArrow_k5eom_479",Q="_inputErrorIcon_k5eom_561",U="_invalidData_k5eom_581",V="_notice_k5eom_639",W="_smallerNotice_k5eom_657",X="_mark_k5eom_675",Y="_flexContainer_k5eom_691",Z="_spaceBetween_k5eom_725",p="_spaceAround_k5eom_733",ee="_horozontal_k5eom_741",ne="_noFlexGrow_k5eom_755",te="_link_k5eom_769",oe="_checkBoxContainer_k5eom_791",ie="_checkBox_k5eom_791",ce="_radioContainer_k5eom_973",re="_radio_k5eom_973",le="_radioLabel_k5eom_1077",ae="_divider_k5eom_1091",c={button:I,primarybutton:D,lightButton:E,iconButton:A,buttonIcon:H,iconButtonText:z,inputFieldContainer:T,selectContainer:G,inputFieldLabel:P,selectLabel:M,inputField:S,selectHint:R,inputFieldHint:j,selectDataContainer:q,selectField:J,inputFieldDataContainer:K,selectFieldArrow:O,inputErrorIcon:Q,invalidData:U,notice:V,smallerNotice:W,mark:X,flexContainer:Y,spaceBetween:Z,spaceAround:p,horozontal:ee,noFlexGrow:ne,link:te,checkBoxContainer:oe,checkBox:ie,radioContainer:ce,radio:re,radioLabel:le,divider:ae},b=k("<div></div>"),F=k("<button></button>");function se(e){let r=h(e,c.button,e.primary?c.primarybutton:void 0,e.light?c.lightButton:void 0,e.icon?c.iconButton:void 0),t=e.icon?(()=>{const n=b.cloneNode(!0);return _(n,()=>e.icon),u(()=>d(n,c.buttonIcon)),n})():"";const[a,i]=C(e.icon?(()=>{const n=b.cloneNode(!0);return _(n,()=>e.children),u(()=>d(n,c.iconButtonText)),n})():e.children);if(y(()=>{i(e.icon?(()=>{const n=b.cloneNode(!0);return _(n,()=>e.children),u(()=>d(n,c.iconButtonText)),n})():e.children)}),e.type=="link")return x(g,{ref(n){const l=e.ref;typeof l=="function"?l(n):e.ref=n},get href(){return e.href},get class(){return r.class},get id(){return e.id},get style(){return r.style},get children(){return[t,w(()=>a())]}});if(e.type=="action"){if(typeof e.function!="function")throw new Error("Invalid <Button> action!");return(()=>{const n=F.cloneNode(!0);L(n,"click",e.function,!0);const l=e.ref;return typeof l=="function"?m(l,n):e.ref=n,_(n,t,null),_(n,a,null),u(o=>{const s=r.class,f=e.id,$=r.style;return s!==o._v$&&d(n,o._v$=s),f!==o._v$2&&B(n,"id",o._v$2=f),o._v$3=v(n,$,o._v$3),o},{_v$:void 0,_v$2:void 0,_v$3:void 0}),n})()}else{if(e.type!=null)throw new Error("Invalid <Button> type!");return console.warn("It's always better to attach an action to a button!"),(()=>{const n=F.cloneNode(!0),l=e.ref;return typeof l=="function"?m(l,n):e.ref=n,_(n,t,null),_(n,a,null),u(o=>{const s=r.class,f=e.id,$=r.style;return s!==o._v$4&&d(n,o._v$4=s),f!==o._v$5&&B(n,"id",o._v$5=f),o._v$6=v(n,$,o._v$6),o},{_v$4:void 0,_v$5:void 0,_v$6:void 0}),n})()}}N(["click"]);const _e=k("<div></div>");function fe(e){let r=h(e,c.mark);return(()=>{const t=_e.cloneNode(!0),a=e.ref;return typeof a=="function"?m(a,t):e.ref=t,_(t,()=>e.children),u(i=>{const n=r.class,l=r.style;return n!==i._v$&&d(t,i._v$=n),i._v$2=v(t,l,i._v$2),i},{_v$:void 0,_v$2:void 0}),t})()}const ue=k("<div></div>");function me(e){let r=h(e,c.flexContainer,e.space=="around"?c.spaceAround:void 0,e.space=="between"?c.spaceBetween:void 0,e.horozontal?c.horozontal:void 0,e["no-grow"]?c.noFlexGrow:void 0);return(()=>{const t=ue.cloneNode(!0),a=e.ref;return typeof a=="function"?m(a,t):e.ref=t,_(t,()=>e.children),u(i=>{const n=r.class,l=r.style;return n!==i._v$&&d(t,i._v$=n),i._v$2=v(t,l,i._v$2),i},{_v$:void 0,_v$2:void 0}),t})()}export{se as B,me as F,fe as M,c as g};
