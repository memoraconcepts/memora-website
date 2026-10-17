// Mo, the Memora website assistant. Shown on every page.
// Answers common questions from the rules below. When a visitor leaves their details,
// Mo sends them straight to the team as a Netlify form ("mo-lead"), which emails info@memoraconcepts.com.
// Visitors can also jump to a live chat on WhatsApp or write an email at any point.
(function(){
  var WA='256784215671', MAIL='info@memoraconcepts.com';
  function wa(t){return 'https://wa.me/'+WA+'?text='+encodeURIComponent(t)}
  function mail(subj,body){return 'mailto:'+MAIL+'?subject='+encodeURIComponent(subj)+'&body='+encodeURIComponent(body)}
  function contactActs(t){return [{l:'WhatsApp us',h:wa(t||'Hello Memora, I found you on your website.'),c:'wa'},{l:'Email us',h:mail('Enquiry from the Memora website',t||'Hello Memora,\n\n')}]}

  // ---- markup
  var fab=document.createElement('button');
  fab.className='mo-fab';fab.id='moFab';fab.type='button';fab.setAttribute('aria-expanded','false');fab.setAttribute('aria-controls','mo');
  fab.innerHTML='<span class="dot"><img src="/img/mark_colour.png" alt=""></span>Ask Mo';
  var panel=document.createElement('div');
  panel.className='mo';panel.id='mo';panel.setAttribute('role','dialog');panel.setAttribute('aria-label','Ask Mo, the Memora assistant');panel.hidden=true;
  panel.innerHTML='<div class="mo-head"><img src="/img/mark_colour.png" alt=""><div><b>Mo · Memora</b><span>Quick answers, and a real person on WhatsApp or email</span></div><button class="x" type="button">Close</button></div>'+
    '<div class="mo-log" aria-live="polite"></div><div class="mo-chips"></div>'+
    '<form class="mo-form"><input autocomplete="off" placeholder="Ask about prices, activations, timing…" aria-label="Message Mo"><button type="submit">Send</button></form>'+
    '<p class="mo-foot">Mo is Memora\'s assistant. A person from the team follows up on every enquiry.</p>';
  document.body.appendChild(fab);document.body.appendChild(panel);
  var log=panel.querySelector('.mo-log'),chips=panel.querySelector('.mo-chips'),form=panel.querySelector('.mo-form'),inp=form.querySelector('input');
  var history=[];

  function esc(s){return String(s).replace(/[&<>"]/g,function(c){return{'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;'}[c]})}
  function say(text,who,acts){
    var d=document.createElement('div');d.className='msg '+(who||'bot');d.innerHTML=esc(text);
    if(acts&&acts.length){var a=document.createElement('div');a.className='acts';acts.forEach(function(x){var l=document.createElement('a');l.href=x.h;l.textContent=x.l;if(x.c)l.className=x.c;if(/^https?:/.test(x.h)){l.target='_blank';l.rel='noopener'}a.appendChild(l)});d.appendChild(a)}
    log.appendChild(d);log.scrollTop=log.scrollHeight;
    history.push((who==='me'?'Visitor: ':'Mo: ')+text);return d}
  function setChips(list){chips.innerHTML='';list.forEach(function(c){var b=document.createElement('button');b.type='button';b.textContent=c;b.onclick=function(){handle(c)};chips.appendChild(b)})}
  var MAIN=['What do you do?','Get a quote','Founding offer','Activations & events','AFCON 2027 kit','Talk to a person'];

  // ---- answers (most specific first)
  var A=[
    [/discount|offer|promo|founding|deal|half/i,'Our founding offer: the first 10 clients get 50% off their first month on any monthly plan, and their price is locked for life. Brand teams also get a free activation idea and 3D render. Tap "Get a quote" to claim a spot.'],
    [/afcon|football|fan zone|viewing|match/i,'AFCON 2027 starts on 19 June 2027, with matches in Kampala, Hoima and Lira. Our AFCON kit covers fan-zone design, viewing-party packs for bars and hotels, match-day content and merchandise. We are booking briefs now.'],
    [/logo|identity|rebrand|guideline|profile|brand kit/i,'We design logos, brand kits, guidelines, packaging and company profiles. Every job is quoted to your brief: tap "Get a quote" and I\'ll pass your details to the team.'],
    [/deck|presentation|pitch/i,'We design pitch decks and presentations, and agencies can use our design desk for decks under their own name. Tap "Get a quote" for a quotation.'],
    [/activation|event|booth|stand|backdrop|launch|experien|roadshow|expo|conference|photo booth/i,'Experiential is our signature: concept, 3D design, production through vetted partners, on-site set-up and a recap report. Every activation is quoted to your brief, and brand teams can ask for a free activation idea and 3D render.'],
    [/tiktok|video|reel|social|content|influenc|creator/i,'We make TikTok-first short video, social content calendars and creator campaigns. TikTok is now Uganda\'s biggest social app, so short vertical video is built into our Growth plan.'],
    [/oil|gas|energy|hse|safety|tender|construction|solar/i,'Our energy comms pack covers tender-ready company profiles, HSE campaign identities, safety signage and community engagement events, for contractors and suppliers in the sector.'],
    [/agency|subcontract|white.?label|overflow|nda/i,'Agencies use us as a design desk: key visuals, adaptations, 3D renders and decks under your name, with a fixed rate card and an NDA as standard. Ask us for the rate card.'],
    [/price|cost|how much|budget|rate|charge|fee|plan|subscription|monthly|quot/i,'Every job is quoted to your brief, so you only pay for what you need. Tap "Get a quote" and I\'ll pass your details to the team, or send your brief on WhatsApp. Our first 10 clients also get 50% off the first month on any monthly plan.'],
    [/pay|momo|mobile money|airtel|bank|deposit/i,'You can pay by MTN MoMo, Airtel Money or bank transfer. Monthly plans are paid in advance, and projects take a 50% deposit.'],
    [/where|location|office|address|namugongo|visit/i,'Our studio is in Namugongo, Kampala. The full address is coming soon, so message us to arrange a visit.'],
    [/long|turnaround|fast|deadline|how soon|when/i,'You get a reply within 2 working hours and a first draft within 48 hours on plan work. Event timelines depend on the package and the build.'],
    [/work|portfolio|example|brands|clients/i,'Our team has designed for brands like Tusker Lite, MTN Pulse, Smirnoff, Toyota and Guinness, much of it with partner agencies. The Work page at memoraconcepts.com/work has the details.'],
    [/what do you do|who are you|about/i,'We\'re Memora, a branding and experiential agency in Namugongo, Kampala. We do activations and events, brand identity, and content including TikTok-first video. In short: we make brands memorable.']
  ];
  function answer(q){for(var i=0;i<A.length;i++){if(A[i][0].test(q))return A[i][1]}return null}

  // ---- lead capture, sent to the team's inbox
  var lead=null,step=null;
  function startLead(){lead={};step='name';say('Great. I\'ll pass your details to the team for a quotation. What\'s your name?');setChips([])}
  function leadStep(t){
    if(step==='name'){lead.name=t;step='contact';say('Thanks, '+t.split(' ')[0]+'. What phone number (WhatsApp) or email should we use?');return}
    if(step==='contact'){
      var isMail=/@/.test(t),isPhone=/\d{7,}/.test(t.replace(/[\s()+-]/g,''));
      if(!isMail&&!isPhone){say('That doesn\'t look like a phone number or email. Could you type it again?');return}
      lead.contact=t;step='need';say('And what do you need?');
      setChips(['An activation or event','Brand identity','Monthly content','Short video / TikTok','Company profile or deck','Agency design support','AFCON 2027 kit']);return}
    if(step==='need'){lead.need=t;step='notes';say('Anything else we should know, like dates, location or budget? Type it, or tap Skip.');setChips(['Skip']);return}
    if(step==='notes'){lead.notes=/^skip$/i.test(t)?'':t;step=null;setChips([]);sendLead();return}
  }
  function sendLead(){
    var L=lead;lead=null;
    var sending=say('Sending to the team…');
    var body=new URLSearchParams({
      'form-name':'mo-lead','subject':'New lead from Mo on memoraconcepts.com',
      'name':L.name,'contact':L.contact,'email':/@/.test(L.contact)?L.contact.trim():'',
      'need':L.need,'notes':L.notes,'page':location.pathname,'conversation':history.slice(-30).join('\n')
    });
    var text='Hello Memora, I\'m '+L.name+'. I need: '+L.need+(L.notes?'. '+L.notes:'')+'. Reach me on '+L.contact+'.';
    fetch('/',{method:'POST',headers:{'Content-Type':'application/x-www-form-urlencoded'},body:body.toString()})
      .then(function(r){if(!r.ok)throw new Error(r.status);
        sending.remove();
        say('Done, '+L.name.split(' ')[0]+'. Your details are with the team now, and we\'ll reply within 2 working hours. Want to talk right away? Chat with us live:',null,contactActs(text));
        setChips(MAIN)})
      .catch(function(){sending.remove();
        say('I couldn\'t send that just now. Please send it to us directly, it only takes a tap:',null,contactActs(text));setChips(MAIN)});
  }

  function handle(t){
    t=String(t).trim();if(!t)return;
    say(t,'me');
    if(step){leadStep(t);return}
    if(/^(leave my details|book a free brand check|start a project|get a quote|request a quote|claim a spot)$/i.test(t)||/\b(quote|book|sign me up|call me|contact me)\b/i.test(t)){startLead();return}
    if(/^talk to a person$|human|real person|speak to|talk to/i.test(t)){say('You can chat with the team live on WhatsApp, or send an email to '+MAIL+'. Phone: +256 784 215 671 or +256 751 500 952.',null,contactActs('Hello Memora, I\'d like to talk to someone.'));return}
    var a=answer(t);
    if(a){say(a);return}
    say('Good question. A person from the team can answer that properly. Leave your details and they\'ll get back to you, or message them now:',null,contactActs('Hello Memora, '+t));
    setChips(['Get a quote','What do you do?'])
  }
  form.addEventListener('submit',function(e){e.preventDefault();var v=inp.value;inp.value='';handle(v)});

  var opened=false;
  function open(){panel.hidden=false;fab.setAttribute('aria-expanded','true');
    if(!opened){opened=true;say('Hi, I\'m Mo from Memora. I can tell you about our services and timing, or pass your details to the team for a quote. What are you working on?');setChips(MAIN)}
    inp.focus()}
  function close(){panel.hidden=true;fab.setAttribute('aria-expanded','false');fab.focus()}
  fab.addEventListener('click',function(){panel.hidden?open():close()});
  panel.querySelector('.x').addEventListener('click',close);
  document.addEventListener('keydown',function(e){if(e.key==='Escape'&&!panel.hidden)close()});
})();
