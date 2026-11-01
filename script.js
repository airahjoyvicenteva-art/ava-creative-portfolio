// AVA Creative: mobile nav, graceful image placeholders and subtle scroll reveals.
// Upload YOUR ORIGINAL files at assets/images/ava-logo.png and airah-portrait.jpg.
document.documentElement.classList.add('js-ready');
const menuButton=document.querySelector('.menu-toggle');
const nav=document.querySelector('.primary-nav');
function closeMenu(){nav.classList.remove('open');menuButton.setAttribute('aria-expanded','false');menuButton.setAttribute('aria-label','Open menu');}
menuButton.addEventListener('click',()=>{const open=menuButton.getAttribute('aria-expanded')!=='true';nav.classList.toggle('open',open);menuButton.setAttribute('aria-expanded',String(open));menuButton.setAttribute('aria-label',open?'Close menu':'Open menu');});
nav.querySelectorAll('a').forEach(link=>link.addEventListener('click',closeMenu));
document.addEventListener('keydown',event=>{if(event.key==='Escape')closeMenu();});
// Missing original images deliberately show labelled placeholders, never broken image icons.
document.querySelectorAll('img[data-optional-image]').forEach(img=>{
  const setLoaded=()=>{if(img.naturalWidth>0)img.classList.add('loaded');};
  img.addEventListener('load',setLoaded);
  img.addEventListener('error',()=>img.classList.remove('loaded'));
  if(img.complete)setLoaded();
});
if('IntersectionObserver' in window && !window.matchMedia('(prefers-reduced-motion: reduce)').matches){
 const observer=new IntersectionObserver(entries=>{entries.forEach(entry=>{if(entry.isIntersecting){entry.target.classList.add('visible');observer.unobserve(entry.target);}});},{threshold:.07,rootMargin:'0px 0px -25px 0px'});
 document.querySelectorAll('.reveal').forEach(el=>observer.observe(el));
}else{document.querySelectorAll('.reveal').forEach(el=>el.classList.add('visible'));}
document.getElementById('year').textContent=new Date().getFullYear();
