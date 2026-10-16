const toggle=document.querySelector(".menu-toggle");const nav=document.querySelector("#site-nav");if(toggle&&nav){toggle.addEventListener("click",()=>{const open=nav.classList.toggle("open");toggle.setAttribute("aria-expanded",String(open));toggle.setAttribute("aria-label",open?"Stäng menyn":"Öppna menyn")});nav.querySelectorAll("a").forEach(link=>link.addEventListener("click",()=>{nav.classList.remove("open");toggle.setAttribute("aria-expanded","false")}));}
// Reveal project cards as they enter the viewport; leave content visible without JS.
if('IntersectionObserver' in window && !window.matchMedia('(prefers-reduced-motion: reduce)').matches){
 const cards=[...document.querySelectorAll('#work .project-card')];
 if(cards.length){
  document.documentElement.classList.add('has-scroll-reveal');
  const observer=new IntersectionObserver((entries)=>{for(const entry of entries){if(entry.isIntersecting){entry.target.classList.add('is-visible');observer.unobserve(entry.target)}}},{threshold:.12,rootMargin:'0px 0px -24px 0px'});
  cards.forEach(card=>observer.observe(card));
 }
}
