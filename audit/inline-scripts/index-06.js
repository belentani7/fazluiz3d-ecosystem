
(function(){
  function showAll(){document.querySelectorAll('.print-reveal').forEach(function(e){e.style.clipPath='none'});}
  if(!(window.gsap&&window.ScrollTrigger)){showAll();return;}
  gsap.registerPlugin(ScrollTrigger);
  ScrollTrigger.normalizeScroll(true);
  var hi=document.getElementById('heroImg');
  if(hi){gsap.to(hi,{yPercent:14,ease:'none',scrollTrigger:{trigger:'.hero',start:'top top',end:'bottom top',scrub:1}});}
  gsap.utils.toArray('.print-reveal').forEach(function(el){
    ScrollTrigger.create({trigger:el,start:'top 85%',once:true,onEnter:function(){el.classList.add('printed');}});
  });
  gsap.utils.toArray('#galeria figure, .tl-item figure').forEach(function(el){
    gsap.from(el,{scrollTrigger:{trigger:el,start:'top 80%',end:'bottom 20%',toggleActions:'play none none reverse'},y:60,opacity:0,duration:1,ease:'power3.out'});
  });
  ScrollTrigger.getAll().forEach(function(st){if(st.pin)st.vars.anticipatePin=1;});
  ScrollTrigger.refresh();
  setTimeout(function(){document.querySelectorAll('.print-reveal:not(.printed)').forEach(function(e){
    if(e.getBoundingClientRect().top<innerHeight)e.classList.add('printed');});},3000);
})();
