(()=>{var e={16:()=>{let e=document.querySelector(".header__dark-mode"),t=document.querySelector("body"),a=localStorage.getItem("mode")?localStorage.getItem("mode"):null;a&&t.classList.add("dark-mode"),e.addEventListener("click",(()=>{t.classList.toggle("dark-mode"),a?localStorage.setItem("mode",""):localStorage.setItem("mode","black")}))}},t={};function a(n){var o=t[n];if(void 0!==o)return o.exports;var l=t[n]={exports:{}};return e[n](l,l.exports,a),l.exports}(()=>{"use strict";const e=async e=>{let t=await fetch(e);return await t.json()};let t=document.querySelector(".cards"),n=e=>{t.innerHTML="",e.forEach((e=>{let a=e.name.common,n=e.population,o=e.region,l=e.capital?e.capital[0]:"No Capital",r=e.flags.svg,c=document.createElement("li");c.classList.add("cards__item"),c.innerHTML=`<a href="./about.html?state=/name/${a}">\n    <img\n      src=${r}\n      alt="algeria-flag"\n      width="267"\n      height="160"\n    />\n    <div class="cards__item-inner">\n      <h3 class="cards__title">${a}</h3>\n      <p class="population">Population: <span>${n}</span></p>\n      <p class="region">Region: <span>${o}</span></p>\n      <p class="capital">Capital: <span>${l}</span></p>\n    </div>\n  </a> `,t.appendChild(c)}))};document.querySelector(".country-info");let o=document.querySelector(".search");o.search.addEventListener("input",(()=>{let e=o.search.value.toLowerCase(),t=document.querySelectorAll(".cards__item");document.querySelectorAll(".cards__title").forEach(((a,n)=>{a.textContent.toLowerCase().includes(e)?t[n].style.display="block":t[n].style.display="none"}))}));let l=document.querySelectorAll(".search__select-list li "),r=document.querySelector(".search__select span");l.forEach((t=>{t.addEventListener("click",(()=>{let a;r.textContent=t.textContent,a="All"==t.textContent?"https://restcountries.com/v3.1/all":`https://restcountries.com/v3.1/region/${t.textContent} `,e(a).then((e=>{n(e)})).catch((e=>{console.error(e)}))}))})),a(16),e("https://restcountries.com/v3.1/all").then((e=>{n(e)})).catch((e=>{console.log(e)}))})()})();