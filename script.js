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


document.querySelectorAll('.image-frame img, .guide-img img').forEach(img=>{
  img.style.cursor='zoom-in';
  img.addEventListener('click',()=>{
    const overlay=document.createElement('div');
    overlay.className='image-lightbox';
    overlay.innerHTML=`<button aria-label="Close image">×</button><img src="${img.src}" alt="${img.alt}">`;
    document.body.appendChild(overlay);
    overlay.addEventListener('click',e=>{if(e.target===overlay||e.target.tagName==='BUTTON')overlay.remove()});
  });
});


// Lottie: self-contained software/network pulse animation with CSS fallback.
(function initSoftwareLottie(){
  const container=document.getElementById('softwareLottie');
  if(!container || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
  const start=()=>{
    if(!window.lottie) return;
    try{
      window.lottie.loadAnimation({container,renderer:'svg',loop:true,autoplay:true,path:'assets/software-network-pulse.json',name:'Rithvika Software Network Pulse'});
    }catch(err){ container.setAttribute('data-animation-error','true'); }
  };
  if(window.lottie) start(); else window.addEventListener('load',start,{once:true});
})();

// Lightweight parallax for the software motion panel.
(function systemParallax(){
  const panel=document.querySelector('.lottie-shell');
  if(!panel || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
  let raf=0;
  window.addEventListener('scroll',()=>{
    if(raf) return;
    raf=requestAnimationFrame(()=>{
      const rect=panel.getBoundingClientRect();
      const offset=(window.innerHeight/2-(rect.top+rect.height/2))*0.035;
      panel.style.setProperty('--motion-y',`${Math.max(-18,Math.min(18,offset))}px`);
      raf=0;
    });
  },{passive:true});
})();
