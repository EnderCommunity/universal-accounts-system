import{p as m,u,i as x,a as h,b as _,g,s as $,t as C}from"./index.da86e54e.js";import{g as k}from"./FlexContainer.7e597a32.js";const w=C('<div><input type="checkbox"><label></label></div>');function A(e){let a=m(e,k.checkBoxContainer),i;if(typeof e.id!="string")throw new Error("<CheckBox> must always have an ID!");if(typeof e.onInactive!="function"||typeof e.onActive!="function")throw new Error("<CheckBox> must have 'active' and 'inactive' functions!");let y=(()=>{const n=w.cloneNode(!0),c=n.firstChild,o=c.nextSibling,v=e.ref;typeof v=="function"?u(v,n):e.ref=n;const f=i;return typeof f=="function"?u(f,c):i=c,x(o,()=>e.label),h(t=>{const r=a.class,b=a.style,s=e.id,d=k.checkBox,l=e.id;return r!==t._v$&&_(n,t._v$=r),t._v$2=g(n,b,t._v$2),s!==t._v$3&&$(c,"id",t._v$3=s),d!==t._v$4&&_(c,t._v$4=d),l!==t._v$5&&$(o,"for",t._v$5=l),t},{_v$:void 0,_v$2:void 0,_v$3:void 0,_v$4:void 0,_v$5:void 0}),h(()=>c.checked=e.checked),n})();return i.checked,i.addEventListener("change",function(){i.checked?e.onActive():e.onInactive()}),y}export{A as C};
