let e;const n={};(function(t,r){if(!r||0===r.length)return t();if(void 0===e){const n=document.createElement("link").relList;e=n&&n.supports&&n.supports("modulepreload")?"modulepreload":"preload"}return Promise.all(r.map((t=>{if((t=`/${t}`)in n)return;n[t]=!0;const r=t.endsWith(".css"),o=r?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${t}"]${o}`))return;const s=document.createElement("link");return s.rel=r?"stylesheet":e,r||(s.as="script",s.crossOrigin=""),s.href=t,document.head.appendChild(s),r?new Promise(((e,n)=>{s.addEventListener("load",e),s.addEventListener("error",n)})):void 0}))).then((()=>t()))})((()=>import("./myskills.ee3211d0.js")),[]).then((({html:e})=>{const n=document.querySelector("#app");n&&(n.innerHTML=`\n      <div class="markdown-body">\n        ${e}\n      </div>\n    `)}));