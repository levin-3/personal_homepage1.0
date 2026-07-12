(function(){
  const nav=document.querySelector(".nav"), menu=document.querySelector("[data-menu]"), links=document.querySelector("[data-links]");
  if(menu&&nav){menu.addEventListener("click",()=>{nav.classList.toggle("open");menu.textContent=nav.classList.contains("open")?"Close":"Menu";});}
  if(links&&nav){links.addEventListener("click",e=>{if(e.target.tagName==="A"){nav.classList.remove("open"); if(menu) menu.textContent="Menu";}});}
  document.querySelectorAll("[data-year]").forEach(n=>n.textContent=new Date().getFullYear());
  const observer=new IntersectionObserver(entries=>{entries.forEach(e=>{if(e.isIntersecting)e.target.classList.add("in");});},{threshold:.12});
  document.querySelectorAll(".reveal").forEach(n=>observer.observe(n));
})();
