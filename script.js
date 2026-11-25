/* JexCore Drilling — public-safe demonstration website.
   Editorial content is embedded in index.html; update translations here.
   This build deliberately contains NO live positions, client project coordinates, or private documents. */
(() => {
  'use strict';
  const en = {
    skip:'Skip to content',topLeft:'DRILLING · HSE · DIGITAL OPERATIONS',topRight:'KAZAKHSTAN · 2026 → 2028',
    navAbout:'Company',navServices:'Capabilities',navHse:'HSE',navDigital:'Digital',navStrategy:'Roadmap',navUpdates:'Updates',navContact:'Contact ↗',
    heroEyebrow:'EST. 2025 · DRILLING COMPANY · KAZAKHSTAN',heroTitle1:'Your trusted partner in',heroTitle2:'mineral exploration.',
    heroLede:'JexCore Drilling is a full-service drilling company founded by experienced drillers to deliver exploration projects of varying complexity.',
    heroPrimary:'Explore JexCore',heroSecondary:'Our HSE approach',heroPartner:'IN PARTNERSHIP WITH',heroCaption:'FALCON ZQ-2000T · JEXCORE FIELD OPERATIONS',heroBottom:'FROM THE GROUND UP · BUILT FOR THE FIELD',scroll:'SCROLL TO EXPLORE',
    metricLead:'2026 / EXECUTION & PROGRESS',metric1:'drilled metres across 2026 operations*',metric2:'controlled HSE documents and operational tools',metric3:'connected layers: site base, rigs and field vehicles',metric4:'roadmap for digitalisation and energy efficiency',
    metricNote:'*2026 figure as reported by company management; subject to final production reporting.',
    clientCaption:'Clients and strategic partners',clientRole1:'Client',clientRole2:'Client',clientRole3:'Strategic partner',aboutEyebrow:'OUR COMPANY',aboutTitle:'Today, JexCore is more than a fleet of drilling rigs.',aboutLead:'We are building an operating platform where engineering, safety, quality control and digital connectivity work as one system.',
    aboutBody:'In 2026, the JexCore team delivered drilling work for Mogotes Metals, began a programme with Pallas Resources and implemented a corporate HSE management system. The next phase is to scale this standard across new projects.',aboutLink:'Explore our roadmap',
    progress1Title:'Field execution',progress1Text:'Drilling programmes, mobilisation, winter operations, core handling and end-to-end field support.',
    progress2Title:'Documented safety',progress2Text:'A unified procedures framework, risk-based training, engineering safeguards and emergency readiness.',
    progress3Title:'Digital visibility',progress3Text:'Starlink and GPS already support field connectivity. We are moving toward a unified operations map and remote monitoring tools.',
    serviceEyebrow:'OUR CAPABILITIES',serviceTitle:'From mobilisation to the final metre.',serviceIntro:'Integrated drilling programmes delivered with a consistent standard of quality, operational discipline and HSE.',
    service1Title:'Diamond core drilling',service1Text:'HQ / NQ / BQ exploration drilling and programmes with tailored diameter, depth and core recovery requirements.',service1Tag:'CORE SERVICE · ACTIVE',
    service2Title:'Full-cycle project delivery',service2Text:'Mobilisation, logistics, field camps, technical support, core handling and daily operational reporting.',service2Tag:'EXISTING CAPABILITY',
    service3Title:'Reverse circulation drilling',service3Text:'Building our RC offering: selecting a rig and configuration for client programmes targeted for 2027.',service3Tag:'PLANNED CAPABILITY',
    fleetTitle:'A fleet for different drilling challenges',fleetNote:'Models shown represent rigs within or being considered for the operating fleet. Availability and exact configuration are confirmed per project.',
    hseTitle1:'Safety is not a slogan.',hseTitle2:'It is a system.',hseIntro:'In 2026, JexCore developed, approved and implemented a structured occupational, industrial and environmental safety framework. We communicate its scope without disclosing internal procedures.',
    hseStatMain:'controlled HSE documents and practical operational tools',statusImplemented:'IMPLEMENTED IN 2026',hseS1:'procedures',hseS2:'plans',hseS3:'programmes',hseS4:'registers',
    hseP1:'Risk management',hseP1Body:'Approved rules, document control, job preparation and risk-based workforce training.',
    hseP2:'Rig safeguards',hseP2Body:'Guard interlocks, hoist limit controls and onboard fire suppression on equipped rigs. Fleet-wide standardisation is the next step.',
    hseP3:'Emergency readiness',hseP3Body:'Medical support, first aid, backup communications and defined incident escalation.',
    hseFooter:'The operational HSE framework is in place. Further standardisation of rig safeguards and equipment is part of the 2027 plan.',hseCta:'Request an HSE prequalification overview',
    digitalEyebrow:'CONNECTED FIELD OPERATIONS',digitalTitle:'Greater visibility. Better decisions.',digitalLead:'Starlink and Garmin GPS provide a connected foundation in the field. Next: a unified interface for sites, fleet, communications and reporting.',
    digital1T:'CONNECTED',digital1B:'Satellite connectivity across base, drilling rigs and field vehicles.',
    digital2T:'VISIBLE',digital2B:'GPS, routes and a unified operational map — to be developed in stages.',
    digital3T:'TRANSPARENT',digital3B:'Documented processes and clear client reporting in an agreed format.',digitalDisclaimer:'Illustrative field-site scheme with Starlink, GPS and a water-truck route. No real coordinates or client information.',
    opsDemo:'STARLINK + GPS',opsTabScheme:'Site scheme',opsTabVideo:'Map recording',opsSwitchAria:'View mode',schemeTitle:'Scheme of a JexCore field site',schemeDesc:'Base, rig and water source connected via Starlink; the water truck and crew vehicle tracked by GPS. No real coordinates.',schemeRouteWater:'water truck route',schemeWater:'Water source',schemeRig:'Drilling rig',schemeBase:'Base camp',schemeLegendSat:'Starlink: base, rig, vehicles',schemeLegendGps:'GPS: water truck and crew vehicle',schemeBadge:'SCHEME · NO COORDINATES',opsConcept:'ILLUSTRATIVE VIEW · NO LIVE DATA',tabSites:'Sites',tabFleet:'Fleet',tabReports:'Reports',mapSiteCaption:'Illustrative sites · no real coordinates',mapNotLive:'NOT LIVE DATA',
    opsIndicator:'WHAT YOU SEE',opsState:'Base, rig and vehicles connected; vehicles tracked by GPS',opsPhase:'2026 / IN USE ON SITE',opsAria:'Scheme of a JexCore field site: Starlink and GPS',opsVideoAria:'Recording of the JexCore operations map: sites, vehicles, photos and drilling reports',demoSiteState:'Site visibility · concept',opsNext:'PHASE',demoSitePhase:'2027 / PLANNED',
    strategyEyebrow:'STRATEGY / 2026–2028',strategyTitle:'The next generation of field operations.',strategyIntro:'Six principles, one direction: make remote projects more controllable, safer and more resource-efficient.',
    statusPlanned:'PLANNED',statusPilot:'PILOT',statusGoal:'TARGET',
    roadmap1Title:'Foundation: HSE and connectivity',roadmap1Text:'HSE documentation, workforce training, technical safeguards, Starlink and Garmin GPS in field operations.',
    roadmap2Title:'Visibility and measurement',roadmap2Text:'Operations map, site GPS, one on-demand camera and baselines for fuel and generator running hours.',
    roadmap3Title:'Energy efficiency pilot',roadmap3Text:'Camp load profiling, smart metering and a hybrid power pilot for essential auxiliary loads, retaining diesel as backup.',
    roadmap4Title:'Validate and scale',roadmap4Text:'Standardise proven solutions: connected sites, measurable efficiency and lower emissions intensity.',
    governanceEyebrow:'GOVERNANCE / TRANSPARENCY',governanceTitle:'Transparency is a practice, not a promise.',
    governanceLead:'We are strengthening corporate governance through documented field procedures, HSE standards and regular reporting to clients.',governanceField:'Transparency starts on site: the client sees the rig, the camp, the first-aid room and the vehicles as they are, and gets drilling figures after every shift.',reelAria:'Footage from site: rig, base camp, water truck, vehicles, dusk and night shift',reelCaption:'FROM SITE · NOVEMBER 2026',videoPause:'Pause',
    governanceBody:'Independent financial statement audits and publication of verified disclosures are being considered as a next development stage. Unaudited financial results are not published here.',
    governanceBadge:'PUBLICATION OF AUDITED FINANCIAL STATEMENTS — PLANNED',
    updatesEyebrow:'INSIGHTS / COMPANY UPDATES',updatesTitle:'Building forward.',updatesIntro:'Selected milestones in our operational development. News items require approval before official publication.',
    newsDate1:'2026 · OPERATIONS',news1Title:'15,000+ metres: progress in field operations',news1Text:'Growing drilling operations and deeper relationships with international clients.',
    newsDate2:'2026 · HSE SYSTEM',news2Title:'110+ controlled items. One operating standard.',news2Text:'Completion of a major implementation phase of our corporate HSE framework.',
    newsDate3:'2027–2028 · ROADMAP',news3Title:'Connected. Visible. Safe. Efficient.',news3Text:'Developing a unified operations map and an energy-efficient field camp pilot.',
    newsDisclaimer:'This section contains editorial drafts. Content and client references require approval before appearing on the live website.',
    contactEyebrow:"LET'S WORK TOGETHER",contactTitle:'The next programme starts with a conversation.',contactIntro:'Discuss your drilling scope, rig availability, HSE requirements and mobilisation readiness.',contactButton:'Send an enquiry',
    contactEmailLabel:'EMAIL',contactPhoneLabel:'PHONE',contactLocationLabel:'OFFICE',contactAddress:'29th Floor, Office 338, 7k5a Al-Farabi Avenue, Almaty, Kazakhstan',
    footerTag:'ENGINEERED TO DELIVER · KAZAKHSTAN',hsePhoto1:'JexCore safety culture · illustrative visual',hsePhoto2:'Drilling rig at a field site',hsePhoto3:'Fire point at the drill pad',hsePhoto4:'Drilling site in the evening',newsAlt1:'Drilling rig in the evening',newsAlt2:'HSE board with the JexCore sign in the camp office',newsAlt3:'Illustrative digital operations map',footerPartner:'IN PARTNERSHIP WITH',footerTop:'BACK TO TOP ↑'
  };
  const originals = new Map();
  document.querySelectorAll('[data-i18n]').forEach(el => originals.set(el, el.textContent));
  const origAttr = new Map();
  document.querySelectorAll('[data-i18n-alt],[data-i18n-aria]').forEach(el => origAttr.set(el, { alt: el.getAttribute('alt'), aria: el.getAttribute('aria-label') }));
  let lang = (() => { try { return localStorage.getItem('jexcore_lang') === 'en' ? 'en' : 'ru'; } catch (_) { return 'ru'; } })();
  const $ = id => document.getElementById(id);
  function setLanguage(value) {
    lang=value;
    try { localStorage.setItem('jexcore_lang',value); } catch (_) { /* file preview without persistent storage */ }
    document.documentElement.lang=value;
    document.querySelectorAll('[data-i18n]').forEach(el => {
      const key=el.dataset.i18n;
      if(value==='en' && Object.prototype.hasOwnProperty.call(en,key)) el.textContent=en[key];
      else if (originals.has(el)) el.textContent=originals.get(el);
    });
    const toggle=$('languageSwitch');
    toggle.innerHTML=value==='ru' ? '<span class="lang-active">RU</span><span class="lang-divider">/</span><span class="lang-inactive">EN</span>' : '<span class="lang-inactive">RU</span><span class="lang-divider">/</span><span class="lang-active">EN</span>';
    document.title=value==='en'?'JexCore Drilling — Your trusted partner in mineral exploration':'JexCore Drilling — Ваш надёжный партнёр в геологоразведке';
    document.querySelectorAll('[data-i18n-alt]').forEach(el => { const k=el.dataset.i18nAlt; el.setAttribute('alt', value==='en' && en[k] ? en[k] : origAttr.get(el).alt); });
    document.querySelectorAll('[data-i18n-aria]').forEach(el => { const k=el.dataset.i18nAria; el.setAttribute('aria-label', value==='en' && en[k] ? en[k] : origAttr.get(el).aria); });
    syncToggle();
  }
  // Videos: load and play only while on screen; never autoplay for reduced-motion users; the field reel has a pause button.
  const reduceMotion = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const videos = [...document.querySelectorAll('video.auto-video')];
  const heldByUser = new WeakSet();
  const reelToggle = document.querySelector('.video-toggle');
  const reel = reelToggle && reelToggle.parentElement.querySelector('video');
  function syncToggle(){
    if(!reelToggle||!reel) return;
    const playing=!reel.paused;
    reelToggle.classList.toggle('is-paused',!playing);
    reelToggle.setAttribute('aria-label', playing ? (lang==='en'?'Pause':'Пауза') : (lang==='en'?'Play':'Воспроизвести'));
  }
  if(reelToggle&&reel){
    reelToggle.addEventListener('click',()=>{ if(reel.paused){ heldByUser.delete(reel); reel.play().catch(()=>{}); } else { heldByUser.add(reel); reel.pause(); } });
    reel.addEventListener('play',syncToggle); reel.addEventListener('pause',syncToggle);
  }
  if('IntersectionObserver' in window){
    const vo=new IntersectionObserver(entries=>entries.forEach(entry=>{
      const v=entry.target;
      if(entry.isIntersecting){ if(v.preload==='none') v.preload='auto'; if(!reduceMotion&&!heldByUser.has(v)) v.play().catch(()=>{}); }
      else if(!v.paused) v.pause();
    }),{threshold:.35});
    videos.forEach(v=>vo.observe(v));
  }
  $('languageSwitch').addEventListener('click',()=>setLanguage(lang==='ru'?'en':'ru'));
  $('menuToggle').addEventListener('click',()=>{
    const expanded=$('menuToggle').getAttribute('aria-expanded')==='true';
    $('menuToggle').setAttribute('aria-expanded',String(!expanded));$('mobileNav').classList.toggle('open',!expanded);
  });
  document.querySelectorAll('.mobile-nav a').forEach(link=>link.addEventListener('click',()=>{$('mobileNav').classList.remove('open');$('menuToggle').setAttribute('aria-expanded','false');}));
  if('IntersectionObserver' in window){
    const observer=new IntersectionObserver(entries=>entries.forEach(entry=>{if(entry.isIntersecting){entry.target.classList.add('visible');observer.unobserve(entry.target);}}),{threshold:.12});
    document.querySelectorAll('.reveal').forEach(el=>observer.observe(el));
  } else document.querySelectorAll('.reveal').forEach(el=>el.classList.add('visible'));
  // Numbers are stated company figures; no artificially incrementing live production counter.
  setLanguage(lang);
})();
