(()=>{"use strict";function t(){const t=document.createElement("header");t.classList.add("header"),t.innerHTML='\n        <div class="title">\n            <h1>Mou´s pizza</h1>\n            <i class="fas fa-pizza-slice"></i>\n        </div>\n    ';const n=function(){const t=document.createElement("nav");t.classList.add("nav");const n=document.createElement("button");n.textContent="Home",n.addEventListener("click",(t=>{t.target.classList.contains("active")||(e(n),function(){const t=document.getElementById("main");t.textContent="";const e=document.createElement("div");e.classList.add("home"),e.appendChild(function(){const t=document.createElement("div");t.classList.add("titleHome");const e=document.createElement("h2");return e.textContent="Si tienes hambre y quieres comer una deliciosa pizza, Mou´s pizza es la mejor opción. ",t.appendChild(e),t}()),t.appendChild(e)}())}));const c=document.createElement("button");c.textContent="Content",c.addEventListener("click",(t=>{t.target.classList.contains("active")||(e(c),function(){const t=document.getElementById("main");t.textContent="";const e=document.createElement("div");e.style.backgroundColor="green",e.style.width="100%",e.style.height="100%",t.appendChild(e)}())}));const i=document.createElement("button");return i.textContent="About",i.addEventListener("click",(t=>{t.target.classList.contains("active")||(e(i),function(){const t=document.getElementById("main");t.textContent="";const e=document.createElement("div");e.style.width="100%",e.style.height="100%",t.appendChild(e)}())})),t.appendChild(n),t.appendChild(c),t.appendChild(i),t}();return t.appendChild(n),t}function e(t){document.querySelectorAll(".nav button").forEach((t=>{t!==this&&t.classList.remove("active")})),t.classList.add("active")}!function(){const e=document.getElementById("content");e.appendChild(t()),e.appendChild(function(){const t=document.createElement("div");return t.id="main",t.classList.add("main"),t}())}()})();