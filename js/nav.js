// Site header: Menu button on phones, Services dropdown on desktop.
(function(){
  var btn=document.querySelector('.menu-btn'),nav=document.getElementById('site-nav');
  if(!btn||!nav)return;
  var dd=nav.querySelector('.dd'),ddBtn=dd&&dd.querySelector('.dd-btn');
  var mobile=window.matchMedia('(max-width:980px)');
  function setMenu(open){nav.classList.toggle('open',open);btn.setAttribute('aria-expanded',open?'true':'false');btn.textContent=open?'Close':'Menu'}
  function setDd(open){if(!dd)return;dd.classList.toggle('open',open);ddBtn.setAttribute('aria-expanded',open?'true':'false')}
  btn.addEventListener('click',function(e){e.stopPropagation();setMenu(!nav.classList.contains('open'))});
  if(ddBtn)ddBtn.addEventListener('click',function(e){if(mobile.matches)return;e.stopPropagation();setDd(!dd.classList.contains('open'))});
  nav.querySelectorAll('a').forEach(function(a){a.addEventListener('click',function(){setMenu(false);setDd(false)})});
  document.addEventListener('click',function(e){if(!nav.contains(e.target)){setMenu(false);setDd(false)}});
  document.addEventListener('keydown',function(e){if(e.key==='Escape'){if(dd&&dd.classList.contains('open')){setDd(false);ddBtn.focus()}if(nav.classList.contains('open')){setMenu(false);btn.focus()}}});
  if(dd)dd.addEventListener('focusout',function(e){if(!dd.contains(e.relatedTarget))setDd(false)});
  mobile.addEventListener&&mobile.addEventListener('change',function(){setMenu(false);setDd(false)});
})();
