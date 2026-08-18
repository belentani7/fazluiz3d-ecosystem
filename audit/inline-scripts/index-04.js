
(function(){
  'use strict';
  
  var preloaderTimeout = setTimeout(function(){hidePreloader();showAllElements()},8000);
  
  function showAllElements(){
    document.querySelectorAll('.reveal,.col-card,.mat-card,.sector,.big-metric,.edu-card,.tl-item,.id-chip,.hero-tag,.hero-sub,.hero-actions,.hero-metrics,.hero-scroll,.nav,.word-inner,.hero-location,.showcase-content,.showcase-visual,.hero-printer,.printer-spec').forEach(function(el){
      el.style.opacity='1';el.style.transform='none';
    });
  }
  
  function hidePreloader(){
    clearTimeout(preloaderTimeout);
    var p=document.getElementById('preloader');
    if(p&&window.gsap){gsap.to(p,{yPercent:-100,duration:1.2,ease:'power4.inOut',onComplete:function(){p.style.display='none'}})}
    else if(p){p.style.display='none'}
  }
  
  if(typeof gsap==='undefined'||typeof ScrollTrigger==='undefined'){showAllElements();hidePreloader();return}
  
  gsap.registerPlugin(ScrollTrigger,ScrollToPlugin);
  gsap.ticker.lagSmoothing(0);
  
  /* ============ CURSOR ============ */
  var cursor=document.getElementById('cursor');
  var ring=document.getElementById('cursorRing');
  var glow=document.getElementById('mouseGlow');
  var mx=0,my=0,cx=0,cy=0,rx=0,ry=0,gx=0,gy=0;
  
  window.addEventListener('mousemove',function(e){mx=e.clientX;my=e.clientY});
  
  function cursorLoop(){
    cx+=(mx-cx)*0.4;cy+=(my-cy)*0.4;
    cursor.style.left=cx+'px';cursor.style.top=cy+'px';
    rx+=(mx-rx)*0.12;ry+=(my-ry)*0.12;
    ring.style.left=rx+'px';ring.style.top=ry+'px';
    gx+=(mx-gx)*0.06;gy+=(my-gy)*0.06;
    glow.style.left=gx+'px';glow.style.top=gy+'px';
    requestAnimationFrame(cursorLoop);
  }
  cursorLoop();
  
  document.querySelectorAll('[data-hover],a,button,input,textarea,select').forEach(function(el){
    el.addEventListener('mouseenter',function(){cursor.classList.add('hover');ring.classList.add('hover')});
    el.addEventListener('mouseleave',function(){cursor.classList.remove('hover');ring.classList.remove('hover')});
  });
  window.addEventListener('mousedown',function(){ring.classList.add('click')});
  window.addEventListener('mouseup',function(){ring.classList.remove('click')});
  
  /* ============ MAGNETIC ============ */
  document.querySelectorAll('[data-magnetic]').forEach(function(el){
    el.addEventListener('mousemove',function(e){
      var r=el.getBoundingClientRect();
      var x=e.clientX-r.left-r.width/2;
      var y=e.clientY-r.top-r.height/2;
      gsap.to(el,{x:x*0.25,y:y*0.35,duration:0.5,ease:'power3.out'});
    });
    el.addEventListener('mouseleave',function(){
      gsap.to(el,{x:0,y:0,duration:0.7,ease:'elastic.out(1,0.4)'});
    });
  });
  
  /* ============ TILT 3D ============ */
  document.querySelectorAll('[data-tilt]').forEach(function(card){
    card.addEventListener('mousemove',function(e){
      var r=card.getBoundingClientRect();
      var x=(e.clientX-r.left)/r.width;
      var y=(e.clientY-r.top)/r.height;
      card.style.setProperty('--mx',(x*100)+'%');
      card.style.setProperty('--my',(y*100)+'%');
      gsap.to(card,{rotationX:(y-0.5)*-6,rotationY:(x-0.5)*6,duration:0.6,ease:'power3.out',transformPerspective:1000});
    });
    card.addEventListener('mouseleave',function(){
      gsap.to(card,{rotationX:0,rotationY:0,duration:0.9,ease:'elastic.out(1,0.5)'});
    });
  });
  
  /* ============ PARTICLES ============ */
  var particlesContainer=document.getElementById('particles');
  if(particlesContainer){
    for(var p=0;p<30;p++){
      var part=document.createElement('div');
      part.className='particle';
      part.style.left=Math.random()*100+'%';
      part.style.top=Math.random()*100+'%';
      particlesContainer.appendChild(part);
      gsap.to(part,{
        y:'random(-100,-300)',x:'random(-50,50)',opacity:0.6,
        duration:'random(4,8)',repeat:-1,yoyo:true,ease:'sine.inOut',
        delay:Math.random()*3
      });
    }
  }
  
  /* ============ PRELOADER ============ */
  // Preloader layers animation
  var plLayers=document.getElementById('plLayers');
  for(var l=0;l<8;l++){
    var lay=document.createElement('div');
    lay.className='printer-layer';
    plLayers.appendChild(lay);
  }
  
  var plTl=gsap.timeline();
  var plObj={v:0};
  
  plTl
    .to('#plLogo',{opacity:1,duration:0.6,ease:'power2.out'})
    .to('#plMeta',{opacity:1,duration:0.4},'-=0.3')
    .to('#pl3d',{opacity:1,duration:0.6},'-=0.2')
    .to('#plBar',{opacity:1,duration:0.4},'-=0.2')
    .to('.printer-layer',{opacity:1,scaleX:1,duration:0.3,stagger:0.15,ease:'power2.out'},'-=0.3')
    .to(plObj,{
      v:100,duration:2.2,ease:'power3.inOut',
      onUpdate:function(){
        var val=Math.round(plObj.v);
        document.getElementById('plFill').style.transform='scaleX('+(val/100)+')';
        document.getElementById('plPercent').textContent=val+'%';
      }
    },'-=1')
    .to('#plLogo',{y:-20,opacity:0,duration:0.5},'+=0.2')
    .to('#plMeta',{y:-10,opacity:0,duration:0.4},'-=0.4')
    .to('#pl3d',{y:-10,opacity:0,duration:0.4,scale:0.8},'-=0.3')
    .to('#plBar',{y:-10,opacity:0,duration:0.4},'-=0.3')
    .call(hidePreloader)
    .call(startHeroAnimation);
  
  /* ============ HERO PRINT ANIMATION (3D PRINTER) ============ */
  function startHeroAnimation(){
    // Create print layers
    var stack=document.getElementById('printStack');
    for(var i=0;i<20;i++){
      var layer=document.createElement('div');
      layer.className='print-layer';
      stack.appendChild(layer);
    }
    
    var heroTl=gsap.timeline();
    
    heroTl
      .to('.hero-tag',{opacity:1,y:0,duration:0.9,ease:'power3.out'})
      .to('.hero-location',{opacity:1,y:0,duration:0.8,ease:'power3.out'},'-=0.5')
      .to('.hero h1 .word-inner',{y:0,duration:1.2,stagger:0.07,ease:'power4.out'},'-=0.5')
      .to('.hero-sub',{opacity:1,y:0,duration:0.9,ease:'power3.out'},'-=0.6')
      .to('.hero-actions',{opacity:1,y:0,duration:0.9,ease:'power3.out'},'-=0.7')
      .to('#heroPrinter',{opacity:1,y:0,duration:1.2,ease:'power3.out'},'-=1')
      .to('#heroMetrics',{opacity:1,y:0,duration:1,ease:'power3.out',onComplete:runHeroCounters},'-=0.6')
      .to('#heroScroll',{opacity:1,duration:0.8},'-=0.4')
      .add(function(){document.getElementById('nav').classList.add('visible')},'-=1')
      .call(startPrinterAnimation);
  }
  
  /* ============ CONTINUOUS PRINTER ANIMATION ============ */
  function startPrinterAnimation(){
    var head=document.getElementById('printerHead');
    var filament=document.getElementById('filament');
    var printGlow=document.getElementById('printGlow');
    var layers=document.querySelectorAll('.print-layer');
    var specs=document.querySelectorAll('.printer-spec');
    
    // Show specs
    gsap.to(specs,{opacity:1,duration:0.8,stagger:0.2,ease:'power2.out'});
    
    // Head moves left-right continuously
    gsap.to(head,{
      x:'+=140',duration:2,ease:'power1.inOut',yoyo:true,repeat:-1
    });
    
    // Show glow
    gsap.to(printGlow,{opacity:0.7,duration:1});
    gsap.to(printGlow,{
      x:'+=140',duration:2,ease:'power1.inOut',yoyo:true,repeat:-1
    });
    
    // Filament line follows head
    gsap.to(filament,{opacity:0.8,duration:0.5});
    
    // Animate filament position with head
    function updateFilament(){
      var headRect=head.getBoundingClientRect();
      var sceneRect=head.parentElement.getBoundingClientRect();
      var stackEl=document.getElementById('printStack');
      var stackRect=stackEl.getBoundingClientRect();
      
      var x=headRect.left-sceneRect.left+headRect.width/2;
      var yTop=headRect.top-sceneRect.top+headRect.height;
      var yBottom=stackRect.top-sceneRect.top;
      
      filament.style.left=x+'px';
      filament.style.top=yTop+'px';
      filament.style.height=Math.max(0,(yBottom-yTop))+'px';
      
      requestAnimationFrame(updateFilament);
    }
    updateFilament();
    
    // Print layers one by one, then reset
    function printCycle(){
      var tl=gsap.timeline({onComplete:function(){
        // Reset layers and repeat
        gsap.set(layers,{opacity:0,scaleX:0});
        setTimeout(printCycle,2000);
      }});
      
      layers.forEach(function(layer,i){
        tl.to(layer,{
          opacity:1,scaleX:1,duration:0.25,ease:'power2.out'
        },i*0.3);
      });
    }
    printCycle();
  }
  
  /* ============ SHOWCASE VASE PRINT ANIMATION ============ */
  ScrollTrigger.create({
    trigger:'.showcase',
    start:'top 70%',
    onEnter:function(){
      var outline=document.getElementById('vaseOutline');
      var layers=document.querySelectorAll('#layerGroup .layer-line');
      var nozzle=document.getElementById('nozzleDot');
      var fill=document.getElementById('vaseFill');
      var pct=document.getElementById('showcasePct');
      
      // Draw outline
      gsap.to(outline,{strokeDashoffset:0,duration:2,ease:'power2.inOut'});
      
      // Show nozzle
      gsap.to(nozzle,{opacity:1,duration:0.5,delay:1});
      
      // Draw layers one by one with nozzle following
      var layerTl=gsap.timeline({delay:1.5});
      layers.forEach(function(layer,i){
        var pathLen=layer.getTotalLength();
        layer.style.strokeDasharray=pathLen;
        layer.style.strokeDashoffset=pathLen;
        
        layerTl.to(layer,{strokeDashoffset:0,duration:0.4,ease:'power1.inOut'},i*0.25);
        layerTl.to(pct,{
          innerText:Math.round(((i+1)/layers.length)*100)+'%',
          duration:0.25,snap:{innerText:1}
        },i*0.25);
      });
      
      // Fade in fill at end
      layerTl.to(fill,{opacity:0.4,duration:1},'-=0.5');
      layerTl.to(nozzle,{opacity:0,duration:0.5});
    },
    once:true
  });
  
  /* ============ PARALLAX ============ */
  gsap.to('#orb1',{scrollTrigger:{trigger:'.hero',start:'top top',end:'bottom top',scrub:1},y:300,scale:1.3,ease:'none'});
  gsap.to('#orb2',{scrollTrigger:{trigger:'.hero',start:'top top',end:'bottom top',scrub:1.5},y:-200,scale:1.15,ease:'none'});
  gsap.to('#heroGrid',{scrollTrigger:{trigger:'.hero',start:'top top',end:'bottom top',scrub:0.5},y:100,ease:'none'});
  gsap.to('.hero-text',{scrollTrigger:{trigger:'.hero',start:'top top',end:'bottom top',scrub:1},y:150,opacity:0.3,ease:'none'});
  gsap.to('#heroPrinter',{scrollTrigger:{trigger:'.hero',start:'top top',end:'bottom top',scrub:0.8},y:80,rotateY:15,ease:'none'});
  
  /* ============ NAV ============ */
  var lastScroll=0;
  var nav=document.getElementById('nav');
  ScrollTrigger.create({
    start:100,
    onUpdate:function(){
      var s=window.scrollY;
      if(s>100) nav.classList.add('scrolled');
      else nav.classList.remove('scrolled');
      if(s>lastScroll&&s>300) nav.classList.remove('visible');
      else nav.classList.add('visible');
      lastScroll=s;
    }
  });
  
  /* ============ REVEAL ============ */
  gsap.utils.toArray('.reveal').forEach(function(el){
    gsap.to(el,{scrollTrigger:{trigger:el,start:'top 88%'},opacity:1,y:0,duration:1.1,ease:'power3.out'});
  });
  
  /* ============ COLLECTIONS ============ */
  gsap.utils.toArray('.col-card').forEach(function(card,i){
    gsap.from(card,{scrollTrigger:{trigger:card,start:'top 88%'},x:-40,opacity:0,duration:1.1,delay:i*0.12,ease:'power3.out'});
  });
  
  /* ============ TIMELINE ============ */
  ScrollTrigger.create({
    trigger:'.timeline',start:'top 70%',end:'bottom 70%',scrub:1,
    onUpdate:function(self){
      var f=document.getElementById('storyFill');
      if(f) f.style.height=(self.progress*100)+'%';
    }
  });
  gsap.utils.toArray('.tl-item').forEach(function(item,i){
    gsap.from(item,{scrollTrigger:{trigger:item,start:'top 85%'},y:50,opacity:0,duration:1.2,delay:i*0.05,ease:'power3.out'});
  });
  gsap.utils.toArray('.id-chip').forEach(function(chip,i){
    gsap.from(chip,{scrollTrigger:{trigger:chip,start:'top 90%'},y:20,opacity:0,duration:0.8,delay:i*0.06,ease:'power3.out'});
  });
  
  /* ============ EDUCATION ============ */
  gsap.utils.toArray('.edu-card').forEach(function(card,i){
    gsap.from(card,{scrollTrigger:{trigger:card,start:'top 88%'},y:40,opacity:0,duration:1,delay:i*0.08,ease:'power3.out'});
  });
  
  /* ============ HORIZONTAL ============ */
  if(window.innerWidth>900){
    var track=document.getElementById('processTrack');
    if(track){
      var getDist=function(){return track.scrollWidth-window.innerWidth};
      gsap.to(track,{x:function(){return -getDist()},ease:'none',scrollTrigger:{trigger:'.process',pin:true,scrub:1.2,end:function(){return '+='+getDist()},invalidateOnRefresh:true}});
      gsap.to('#processFill',{scaleX:1,ease:'none',scrollTrigger:{trigger:'.process',start:'top top',end:function(){return '+='+getDist()},scrub:1}});
    }
  }
  
  /* ============ MATERIALS ============ */
  gsap.utils.toArray('.mat-card').forEach(function(card,i){
    gsap.from(card,{scrollTrigger:{trigger:card,start:'top 88%'},y:50,opacity:0,duration:1,delay:(i%3)*0.08,ease:'power3.out',onStart:function(){setTimeout(function(){card.classList.add('in-view')},200)}});
  });
  
  /* ============ SECTORES ============ */
  gsap.utils.toArray('.sector').forEach(function(s,i){
    gsap.from(s,{scrollTrigger:{trigger:s,start:'top 85%'},y:60,opacity:0,duration:1.2,delay:i*0.15,ease:'power3.out'});
  });
  
  /* ============ MÉTRICAS ============ */
  gsap.utils.toArray('.big-metric').forEach(function(m,i){
    gsap.from(m,{scrollTrigger:{trigger:m,start:'top 88%'},y:40,opacity:0,duration:1.1,delay:i*0.1,ease:'power3.out',onComplete:function(){var c=m.querySelector('.counter');if(c)animateCounter(c)}});
  });
  
  /* ============ COUNTERS ============ */
  var heroCountersRan=false;
  function runHeroCounters(){
    if(heroCountersRan)return;
    heroCountersRan=true;
    document.querySelectorAll('.hero-metrics .counter').forEach(animateCounter);
  }
  function animateCounter(el){
    if(el.dataset.animated)return;
    el.dataset.animated='1';
    var target=parseFloat(el.getAttribute('data-count'));
    if(!target)return;
    var obj={v:0};
    gsap.to(obj,{v:target,duration:2.2,ease:'power3.out',onUpdate:function(){el.textContent=Math.round(obj.v)}});
  }
  
  /* ============ SMOOTH SCROLL ============ */
  document.querySelectorAll('a[href^="#"]').forEach(function(link){
    link.addEventListener('click',function(e){
      var href=link.getAttribute('href');
      if(href.length>1){
        var target=document.querySelector(href);
        if(target){
          e.preventDefault();
          gsap.to(window,{duration:1.4,scrollTo:{y:target,offsetY:80},ease:'power3.inOut'});
        }
      }
    });
  });
  
  
  /* ============ LANG ============ */
  var langBtn=document.getElementById('langSwitch');
  if(langBtn){
    langBtn.addEventListener('click',function(){
      langBtn.textContent=langBtn.textContent.trim()==='ES / EN'?'EN / ES':'ES / EN';
      toast('info','Idioma','Bilingüe activo');
    });
  }
  
  /* ============ TOAST ============ */
  function toast(type,title,msg){
    var container=document.getElementById('toastContainer');
    var el=document.createElement('div');
    el.className='toast '+type;
    el.innerHTML='<div class="title">'+title+'</div><div class="msg">'+msg+'</div>';
    container.appendChild(el);
    setTimeout(function(){el.classList.add('show')},10);
    setTimeout(function(){el.classList.remove('show');setTimeout(function(){el.remove()},600)},3500);
  }
  window.toast=toast;
  
  /* ============ FORM ============ */
  var form=document.getElementById('leadForm');
  var submitBtn=document.getElementById('submitBtn');
  var validators={
    name:function(v){return v&&v.trim().length>=2},
    email:function(v){return v&&/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v)},
    category:function(v){return v&&v.trim().length>0},
    message:function(v){return v&&v.trim().length>=10}
  };
  ['f_name','f_email','f_category','f_message'].forEach(function(id){
    var el=document.getElementById(id);
    var name=id.replace('f_','');
    el.addEventListener('blur',function(){validateField(el,name)});
    el.addEventListener('input',function(){if(el.parentElement.classList.contains('has-error'))validateField(el,name)});
  });
  function validateField(el,name){
    var field=el.parentElement;
    if(validators[name](el.value))field.classList.remove('has-error');
    else field.classList.add('has-error');
  }
  form.addEventListener('submit',function(e){
    e.preventDefault();
    var allValid=true;
    ['name','email','category','message'].forEach(function(name){
      var el=document.getElementById('f_'+name);
      if(!validateField(el,name))allValid=false;
    });
    if(!allValid){toast('error','Error','Complete todos los campos');return}
    submitBtn.classList.add('loading');submitBtn.disabled=true;
    var payload={
      name:document.getElementById('f_name').value.trim(),
      email:document.getElementById('f_email').value.trim(),
      phone:document.getElementById('f_phone').value.trim(),
      category:document.getElementById('f_category').value,
      message:document.getElementById('f_message').value.trim(),
      source:'fazluiz_web',timestamp:new Date().toISOString()
    };
    var leads=JSON.parse(localStorage.getItem('fazluiz_leads')||'[]');
    payload.id='fl_'+Date.now();
    leads.push(payload);
    localStorage.setItem('fazluiz_leads',JSON.stringify(leads));
    if(window.FazluizDB){window.FazluizDB.addLead(payload)}
    var mail='mailto:atelier@fazluiz.es?subject='+encodeURIComponent('[FAZLUIZ3D] '+payload.category+' — '+payload.name)+'&body='+encodeURIComponent('Nombre: '+payload.name+'\nEmail: '+payload.email+'\nTel: '+payload.phone+'\nCategoria: '+payload.category+'\n\n'+payload.message);
    setTimeout(function(){
      toast('success','Consulta recibida','Abriendo tu email para enviar…');
      window.location.href=mail;
      form.reset();submitBtn.classList.remove('loading');submitBtn.disabled=false;
    },800);
  });
  
  window.addEventListener('load',function(){setTimeout(function(){ScrollTrigger.refresh()},500)});
  window.addEventListener('resize',function(){ScrollTrigger.refresh()});
})();
