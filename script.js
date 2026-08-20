const menuToggle=document.querySelector(".menu-toggle");
const nav=document.querySelector(".nav");
menuToggle?.addEventListener("click",()=>{const open=nav.classList.toggle("open");menuToggle.setAttribute("aria-expanded",open)});
document.querySelectorAll(".nav a").forEach(a=>a.addEventListener("click",()=>nav.classList.remove("open")));

const observer=new IntersectionObserver(entries=>{
  entries.forEach(entry=>{if(entry.isIntersecting){entry.target.classList.add("visible");observer.unobserve(entry.target)}})
},{threshold:.12});
document.querySelectorAll(".reveal").forEach(el=>observer.observe(el));

document.getElementById("year").textContent=new Date().getFullYear();

document.getElementById("contactForm")?.addEventListener("submit",e=>{
  e.preventDefault();
  const data=new FormData(e.currentTarget);
  const name=data.get("name"),phone=data.get("phone"),service=data.get("service"),message=data.get("message");
  const text=`Hello Rithvika Infotech,%0A%0AName: ${encodeURIComponent(name)}%0APhone: ${encodeURIComponent(phone)}%0AService: ${encodeURIComponent(service)}%0AMessage: ${encodeURIComponent(message||"No additional message")}`;
  window.open(`https://wa.me/918300766570?text=${text}`,"_blank");
});
