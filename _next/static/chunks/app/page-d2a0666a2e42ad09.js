(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[931],{3908:function(e,t,n){Promise.resolve().then(n.bind(n,6840)),Promise.resolve().then(n.bind(n,3612)),Promise.resolve().then(n.bind(n,5406)),Promise.resolve().then(n.t.bind(n,6834,23))},3313:function(e,t){"use strict";let n;Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var n in t)Object.defineProperty(e,n,{enumerable:!0,get:t[n]})}(t,{DOMAttributeNames:function(){return r},isEqualNode:function(){return i},default:function(){return a}});let r={acceptCharset:"accept-charset",className:"class",htmlFor:"for",httpEquiv:"http-equiv",noModule:"noModule"};function s(e){let{type:t,props:n}=e,s=document.createElement(t);for(let e in n){if(!n.hasOwnProperty(e)||"children"===e||"dangerouslySetInnerHTML"===e||void 0===n[e])continue;let i=r[e]||e.toLowerCase();"script"===t&&("async"===i||"defer"===i||"noModule"===i)?s[i]=!!n[e]:s.setAttribute(i,n[e])}let{children:i,dangerouslySetInnerHTML:a}=n;return a?s.innerHTML=a.__html||"":i&&(s.textContent="string"==typeof i?i:Array.isArray(i)?i.join(""):""),s}function i(e,t){if(e instanceof HTMLElement&&t instanceof HTMLElement){let n=t.getAttribute("nonce");if(n&&!e.getAttribute("nonce")){let r=t.cloneNode(!0);return r.setAttribute("nonce",""),r.nonce=n,n===e.nonce&&e.isEqualNode(r)}}return e.isEqualNode(t)}function a(){return{mountedInstances:new Set,updateHead:e=>{let t={};e.forEach(e=>{if("link"===e.type&&e.props["data-optimized-fonts"]){if(document.querySelector('style[data-href="'+e.props["data-href"]+'"]'))return;e.props.href=e.props["data-href"],e.props["data-href"]=void 0}let n=t[e.type]||[];n.push(e),t[e.type]=n});let r=t.title?t.title[0]:null,s="";if(r){let{children:e}=r.props;s="string"==typeof e?e:Array.isArray(e)?e.join(""):""}s!==document.title&&(document.title=s),["meta","base","link","style","script"].forEach(e=>{n(e,t[e]||[])})}}}n=(e,t)=>{let n=document.getElementsByTagName("head")[0],r=n.querySelector("meta[name=next-head-count]"),a=Number(r.content),l=[];for(let t=0,n=r.previousElementSibling;t<a;t++,n=(null==n?void 0:n.previousElementSibling)||null){var o;(null==n?void 0:null==(o=n.tagName)?void 0:o.toLowerCase())===e&&l.push(n)}let c=t.map(s).filter(e=>{for(let t=0,n=l.length;t<n;t++)if(i(l[t],e))return l.splice(t,1),!1;return!0});l.forEach(e=>{var t;return null==(t=e.parentNode)?void 0:t.removeChild(e)}),c.forEach(e=>n.insertBefore(e,r)),r.content=(a-l.length+c.length).toString()},("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},5935:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var n in t)Object.defineProperty(e,n,{enumerable:!0,get:t[n]})}(t,{handleClientScriptLoad:function(){return y},initScriptLoader:function(){return j},default:function(){return b}});let r=n(6921),s=n(1884),i=n(7437),a=r._(n(4887)),l=s._(n(2265)),o=n(7484),c=n(3313),d=n(2185),u=new Map,f=new Set,p=["onLoad","onReady","dangerouslySetInnerHTML","children","onError","strategy","stylesheets"],h=e=>{if(a.default.preinit){e.forEach(e=>{a.default.preinit(e,{as:"style"})});return}if("undefined"!=typeof window){let t=document.head;e.forEach(e=>{let n=document.createElement("link");n.type="text/css",n.rel="stylesheet",n.href=e,t.appendChild(n)})}},m=e=>{let{src:t,id:n,onLoad:r=()=>{},onReady:s=null,dangerouslySetInnerHTML:i,children:a="",strategy:l="afterInteractive",onError:o,stylesheets:d}=e,m=n||t;if(m&&f.has(m))return;if(u.has(t)){f.add(m),u.get(t).then(r,o);return}let y=()=>{s&&s(),f.add(m)},j=document.createElement("script"),v=new Promise((e,t)=>{j.addEventListener("load",function(t){e(),r&&r.call(this,t),y()}),j.addEventListener("error",function(e){t(e)})}).catch(function(e){o&&o(e)});for(let[n,r]of(i?(j.innerHTML=i.__html||"",y()):a?(j.textContent="string"==typeof a?a:Array.isArray(a)?a.join(""):"",y()):t&&(j.src=t,u.set(t,v)),Object.entries(e))){if(void 0===r||p.includes(n))continue;let e=c.DOMAttributeNames[n]||n.toLowerCase();j.setAttribute(e,r)}"worker"===l&&j.setAttribute("type","text/partytown"),j.setAttribute("data-nscript",l),d&&h(d),document.body.appendChild(j)};function y(e){let{strategy:t="afterInteractive"}=e;"lazyOnload"===t?window.addEventListener("load",()=>{(0,d.requestIdleCallback)(()=>m(e))}):m(e)}function j(e){e.forEach(y),[...document.querySelectorAll('[data-nscript="beforeInteractive"]'),...document.querySelectorAll('[data-nscript="beforePageRender"]')].forEach(e=>{let t=e.id||e.getAttribute("src");f.add(t)})}function v(e){let{id:t,src:n="",onLoad:r=()=>{},onReady:s=null,strategy:c="afterInteractive",onError:u,stylesheets:p,...h}=e,{updateScripts:y,scripts:j,getIsSsr:v,appDir:b,nonce:g}=(0,l.useContext)(o.HeadManagerContext),x=(0,l.useRef)(!1);(0,l.useEffect)(()=>{let e=t||n;x.current||(s&&e&&f.has(e)&&s(),x.current=!0)},[s,t,n]);let _=(0,l.useRef)(!1);if((0,l.useEffect)(()=>{!_.current&&("afterInteractive"===c?m(e):"lazyOnload"===c&&("complete"===document.readyState?(0,d.requestIdleCallback)(()=>m(e)):window.addEventListener("load",()=>{(0,d.requestIdleCallback)(()=>m(e))})),_.current=!0)},[e,c]),("beforeInteractive"===c||"worker"===c)&&(y?(j[c]=(j[c]||[]).concat([{id:t,src:n,onLoad:r,onReady:s,onError:u,...h}]),y(j)):v&&v()?f.add(t||n):v&&!v()&&m(e)),b){if(p&&p.forEach(e=>{a.default.preinit(e,{as:"style"})}),"beforeInteractive"===c)return n?(a.default.preload(n,h.integrity?{as:"script",integrity:h.integrity}:{as:"script"}),(0,i.jsx)("script",{nonce:g,dangerouslySetInnerHTML:{__html:"(self.__next_s=self.__next_s||[]).push("+JSON.stringify([n,{...h,id:t}])+")"}})):(h.dangerouslySetInnerHTML&&(h.children=h.dangerouslySetInnerHTML.__html,delete h.dangerouslySetInnerHTML),(0,i.jsx)("script",{nonce:g,dangerouslySetInnerHTML:{__html:"(self.__next_s=self.__next_s||[]).push("+JSON.stringify([0,{...h,id:t}])+")"}}));"afterInteractive"===c&&n&&a.default.preload(n,h.integrity?{as:"script",integrity:h.integrity}:{as:"script"})}return null}Object.defineProperty(v,"__nextScript",{value:!0});let b=v;("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},6840:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return f}});var r=n(7437),s=n(5250),i=n.n(s);function a(){if("undefined"!=typeof document){let e=setInterval(function(){document.querySelectorAll("body > main > div.container-projects.container-gradient > div.sub-container-project > div > div > spline-viewer").forEach(e=>{let t=e.shadowRoot.querySelector("#logo");t&&(t.style.opacity=0,console.log("Logo removed"))}),clearInterval(e)},500)}}var l=n(5935),o=n.n(l);function c(e){let{color:t,src:n,name:s,category:l,link:c}=e;return(0,r.jsxs)("div",{style:{background:"".concat(t," linear-gradient(140deg, rgba(255,255,255,0) 35%, rgba(255,255,255,.1) 50%, rgba(255,255,255,0) 65%)")},className:"project-block-card",children:[(0,r.jsxs)("div",{className:"project-block-info",children:[(0,r.jsx)("p",{children:l}),(0,r.jsx)("h2",{children:s})]}),(0,r.jsx)(o(),{type:"module",src:"https://unpkg.com/@splinetool/viewer@1.0.75/build/spline-viewer.js"}),(0,r.jsx)("spline-viewer",{width:"50%","loading-anim-type":"spinner-big-light",url:n}),(0,r.jsx)(a,{}),(0,r.jsx)(i(),{href:c,id:"homeLink",className:"project-block-link",children:"Apercu"})]})}n(1681);var d=n(5414);n(5094);var u=n(2265);function f(){let[e,t]=(0,u.useState)(0),n=n=>{"left"===n?t(e+332):t(e-332)};return(0,r.jsxs)("div",{className:"container-projects container-gradient ",children:[(0,r.jsxs)("div",{className:"project-navigation",children:[(0,r.jsx)("h2",{children:"Mes R\xe9alisations"}),(0,r.jsxs)("div",{className:"arrows",children:[(0,r.jsx)("span",{className:"material-symbols-rounded",onClick:()=>n("left"),children:"arrow_back"}),(0,r.jsx)("span",{className:"material-symbols-rounded",onClick:()=>n("right"),children:"arrow_forward"})]})]}),(0,r.jsx)(d.Z,{size:"40px"}),(0,r.jsx)("div",{className:"sub-container-project",children:(0,r.jsxs)("div",{style:{display:"flex",gap:"20px",justifyContent:"space-between",alignItems:"center",transform:"translateX(".concat(e,"px)"),transition:"transform 0.25s cubic-bezier(0.5, 0, 0.75, 0);"},children:[(0,r.jsx)(c,{name:"Jobbble",category:"Application",link:"test",color:"#493AA5",src:"https://prod.spline.design/DyEVZo2SwrKM8e4i/scene.splinecode"}),(0,r.jsx)(c,{name:"Inocess",category:"Website",link:"test",color:"#151926",src:"https://prod.spline.design/AusI2Fx39uktFECj/scene.splinecode"}),(0,r.jsx)(c,{name:"GreenBull",category:"User Interface",link:"test",color:"rgb(89 104 223)",src:"https://prod.spline.design/iZ5vrb4ktYbP8RhN/scene.splinecode"})]})})]})}},3612:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return i}});var r=n(7437),s=n(5414);function i(){return(0,r.jsxs)("div",{className:"container-wide container-innershadow",children:[(0,r.jsx)(s.Z,{size:"header"}),(0,r.jsxs)("div",{className:"teaching-cards-container",children:[(0,r.jsxs)("div",{className:"teaching-card",children:[(0,r.jsx)("span",{className:"material-symbols-rounded",children:"code"}),(0,r.jsx)("h2",{children:"HTML"})]}),(0,r.jsxs)("div",{className:"teaching-card",children:[(0,r.jsx)("span",{className:"material-symbols-rounded",children:"style"}),(0,r.jsx)("h2",{children:"CSS"})]}),(0,r.jsxs)("div",{className:"teaching-card",children:[(0,r.jsx)("span",{className:"material-symbols-rounded",children:"data_object"}),(0,r.jsx)("h2",{children:"JavaScript"})]}),(0,r.jsxs)("div",{className:"teaching-card",children:[(0,r.jsx)("span",{className:"material-symbols-rounded",children:"architecture"}),(0,r.jsxs)("h2",{children:["Conception",(0,r.jsx)("br",{}),"d’interface"]})]}),(0,r.jsxs)("div",{className:"teaching-card",children:[(0,r.jsx)("span",{className:"material-symbols-rounded",children:"robot"}),(0,r.jsxs)("h2",{children:["Intelligence",(0,r.jsx)("br",{}),"Artificielle"]})]}),(0,r.jsxs)("div",{className:"teaching-card",children:[(0,r.jsx)("span",{className:"material-symbols-rounded",children:"brush"}),(0,r.jsxs)("h2",{children:["Suite",(0,r.jsx)("br",{}),"Adobe"]})]})]}),(0,r.jsx)(s.Z,{size:"header"})]})}n(4450)},5406:function(e,t,n){"use strict";n.r(t);var r=n(7437);n(3971),t.default=function(){return(0,r.jsx)("div",{className:"overflow",children:(0,r.jsx)("div",{className:"title-container",children:(0,r.jsxs)("h2",{children:["DESIGNER ",(0,r.jsx)("span",{children:"☞"})," UI ✹ UX ✹ PRINT ✳︎ & ✳︎ TEACHER ",(0,r.jsx)("span",{children:"☞"})," HTML ✹ CSS ✹ JAVASCRIPT"]})})})}},5414:function(e,t,n){"use strict";n.d(t,{Z:function(){return s}});var r=n(7437);function s(e){let{size:t}=e;return"header"===t?(0,r.jsx)("div",{className:"margin-header"}):t?(0,r.jsx)("div",{style:{height:"".concat(t)}}):(0,r.jsx)("div",{className:"margin-top"})}n(6834)},1681:function(){},5094:function(){},4450:function(){},3971:function(){},6834:function(){}},function(e){e.O(0,[250,971,69,744],function(){return e(e.s=3908)}),_N_E=e.O()}]);