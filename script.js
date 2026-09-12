const root = document.documentElement;
const cursor = document.querySelector('.cursor');

const mykoRow=document.querySelector('.project[href="#myko"]');
const mykoPanel=document.querySelector('details#myko');
if(mykoRow&&mykoPanel){
  mykoRow.querySelector('h3').textContent='MYKO';
  mykoRow.querySelector('.project-question').textContent='Ett spelbart skogsäventyr med fokus på rörelse, onboarding och tydlig återkoppling.';
  mykoPanel.querySelector(':scope>summary').textContent='MYKO';
  mykoPanel.querySelector('.game-design-intro')?.remove();
  const grannRow=mykoRow.cloneNode(true);
  grannRow.href='#grannfejden';
  grannRow.querySelector('.project-no').textContent='14';
  grannRow.querySelector('h3').textContent='Grannfejden';
  grannRow.querySelector('.project-title p').textContent='3D · Interaction Design · Game Systems';
  grannRow.querySelector('.project-question').textContent='Ett bostadskvarter som blir en social spelplats genom rumslig tydlighet och levande respons.';
  mykoRow.insertAdjacentElement('afterend',grannRow);
  const grannPanel=document.createElement('details');
  grannPanel.className='case-card';
  grannPanel.id='grannfejden';
  grannPanel.innerHTML=`<summary>Grannfejden</summary><div class="case-content"><section class="grannfejden-case" aria-labelledby="grannfejden-title"><div class="grannfejden-head"><span>SPEL 02 / GRUPPROJEKT / 3D</span><div><h3 id="grannfejden-title">Grannfejden.</h3><p>Ett spelprojekt där ett bostadskvarter blir en social spelplats. Mitt arbete låg i mötet mellan visuell gestaltning, rumslig struktur och interaktion, från tidiga idéer till en fungerande 3D-miljö.</p><a class="grannfejden-link" href="https://grannfejden.elmerlion.chatgpt.site/" target="_blank" rel="noopener noreferrer">SPELA GRANNFEJDEN ↗</a></div></div><figure class="grannfejden-hero-visual"><img loading="lazy" decoding="async" src="assets/cases/grannfejden-hero.png" alt="Grannfejdens startskärm med kvarteret Björkbacken och lobbyval"><figcaption><span>01 / ENTRÉ</span>Spelets första möte sätter tonen och gör vägen in i kvarteret tydlig.</figcaption></figure><div class="grannfejden-role"><p><span>MIN ROLL</span>Visuell och interaktiv utveckling</p><p><span>FOKUS</span>3D-miljö, systemlogik och spelarrespons</p><p><span>ARBETSSÄTT</span>Skiss, modellering och iteration i fungerande miljö</p></div><div class="grannfejden-gallery"><figure class="is-wide"><img loading="lazy" decoding="async" src="assets/cases/grannfejden-gameplay.png" alt="Kortval i Grannfejden med resurser, handlingar och guide"><figcaption><span>02 / SPELSYSTEM</span>Kort, resurser och omedelbar återkoppling gör konsekvenserna av spelarens val synliga.</figcaption></figure><figure><img loading="lazy" decoding="async" src="assets/cases/grannfejden-onboarding.png" alt="Grannfejdens snabbguide för spelets tre huvudmoment"><figcaption><span>03 / ONBOARDING</span>Tre steg introducerar spelets loop utan att bryta berättelsens ton.</figcaption></figure></div><div class="grannfejden-contribution"><article><span>01 / KONCEPT</span><h4>Från idé till spelvärld.</h4><p>Jag tog en drivande roll i idéarbetet och var med och satte ton, inramning och känsla för kvarteret Björkbacken.</p></article><article><span>02 / RUMSLIG STRUKTUR</span><h4>En miljö som går att läsa.</h4><p>Jag planerade spelytans tomter och objektplacering för att skapa en balanserad miljö där spelaren enkelt kan orientera sig.</p></article><article><span>03 / VISUELL FORM</span><h4>Ett sammanhållet uttryck.</h4><p>Jag samordnade spelets visuella stil och skapade 3D-objekt som byggde upp atmosfär och ett tydligt formspråk.</p></article><article><span>04 / SYSTEM</span><h4>Modulärt utan kollisioner.</h4><p>Jag utvecklade logiken för hur husdelar och uppgraderingar kan byggas på under spelets gång utan att krocka med tomtens övriga objekt.</p></article><article><span>05 / INTERAKTION</span><h4>Små svar som skapar närvaro.</h4><p>Jag formgav föreningsmötet och utvecklade detaljer där karaktärernas huvuden följer spelarens musrörelser. Jag animerade även fåglar med naturliga flygmönster.</p></article></div><div class="grannfejden-cards" aria-label="Exempel på spelkort"><figure><img loading="lazy" decoding="async" src="assets/cases/grannfejden-card-upgrade.webp" alt="Illustration för ett uppgraderingskort"></figure><figure><img loading="lazy" decoding="async" src="assets/cases/grannfejden-card-event.webp" alt="Illustration för ett händelsekort"></figure><figure><img loading="lazy" decoding="async" src="assets/cases/grannfejden-card-sabotage.webp" alt="Illustration för ett sabotagekort"></figure><p><span>04 / VISUELLT SYSTEM</span>Kortfamiljerna använder samma varma illustrationsstil men skiljs åt genom funktion, färg och innehåll.</p></div><div class="grannfejden-learning"><span>VAD JAG TAR VIDARE</span><p>Projektet visade hur tydliga ramar och lekfull respons behöver fungera tillsammans. Genom att testa skisser direkt i 3D-miljön kunde vi snabbt se vad som fungerade, och hur subtil visuell återkoppling hjälper spelaren att känna sig närvarande.</p></div></section></div>`;
  const roleSummary=grannPanel.querySelector('.grannfejden-role');
  if(roleSummary){
    roleSummary.insertAdjacentHTML('afterend',`<section class="grannfejden-social" aria-labelledby="grannfejden-social-title"><span>02 / SOCIAL NÄRVARO</span><div><h4 id="grannfejden-social-title">Från brädspel till digital gemenskap.</h4><p>Att översätta känslan av ett brädspel till en digital värld handlar om närvaro och gemenskap. Röstchatt och interaktiva element skapar den sociala närhet som annars uppstår när människor sitter mitt emot varandra.</p><p>Processen balanserade tydliga strukturer för spelytan med lekfulla, responsiva animationer. Genom tidig iteration mellan skisser och 3D-modeller såg vi snabbt hur visuell respons hjälper spelaren att förstå vad som händer och vilja stanna kvar.</p><div class="grannfejden-modes"><span><b>ONLINE</b>Spela tillsammans med integrerad röstchatt.</span><span><b>OFFLINE</b>Möt AI-spelare med tydliga och trovärdiga beteenden.</span></div></div></section>`);
  }
  const formerCardArt=grannPanel.querySelector('.grannfejden-cards');
  if(formerCardArt){
    formerCardArt.className='grannfejden-models';
    formerCardArt.setAttribute('aria-label','Kodbyggda 3D-modeller från Grannfejden');
    formerCardArt.innerHTML=`<div class="grannfejden-model-stage"><figure><canvas data-grann-model data-model="coop" role="img" aria-label="Roterande kodbyggd 3D-modell av ett hönshus"></canvas><figcaption><span>HÖNSHUSET</span>Byggt med kod för spelets modulära tomter.</figcaption></figure><figure><canvas data-grann-model data-model="pool" role="img" aria-label="Roterande kodbyggd 3D-modell av en pool"></canvas><figcaption><span>POOLEN</span>En läsbar uppgradering med egen form och skala.</figcaption></figure><figure><canvas data-grann-model data-model="playhouse" role="img" aria-label="Roterande kodbyggd 3D-modell av ett lekhus"></canvas><figcaption><span>LEKHUSET</span>En kompakt modell skapad för flexibel placering.</figcaption></figure></div><p><span>04 / KODBYGGDA OBJEKT</span>Hönshuset, poolen och lekhuset är modeller jag byggde direkt med kod. Dra över ett objekt för att rotera det själv.</p>`;
  }
  mykoPanel.insertAdjacentElement('afterend',grannPanel);
  const loadGrannfejdenModels=()=>{
    if(document.querySelector('script[data-grann-models]'))return;
    const modelRenderer=document.createElement('script');
    modelRenderer.type='module';
    modelRenderer.src='assets/grannfejden-runtime/viewer.js';
    modelRenderer.dataset.grannModels='';
    document.head.appendChild(modelRenderer);
  };
  grannPanel.addEventListener('toggle',()=>{if(grannPanel.open)loadGrannfejdenModels()});
}

const mykoIframe=mykoPanel?.querySelector('.myko-frame iframe[data-src]');
const loadMykoGame=()=>{
  if(!mykoIframe||mykoIframe.hasAttribute('src'))return;
  const frame=mykoIframe.closest('.myko-frame');
  frame?.setAttribute('aria-busy','true');
  mykoIframe.addEventListener('load',()=>frame?.removeAttribute('aria-busy'),{once:true});
  mykoIframe.src=mykoIframe.dataset.src;
};
mykoPanel?.addEventListener('toggle',()=>{if(mykoPanel.open)loadMykoGame()});
if(location.hash==='#myko'){
  mykoPanel.open=true;
  loadMykoGame();
}
const depths = [...document.querySelectorAll('[data-depth]')];
let tx=0,ty=0,cx=0,cy=0;
window.addEventListener('pointermove',e=>{ tx=(e.clientX/innerWidth-.5)*2; ty=(e.clientY/innerHeight-.5)*2; cursor.style.left=e.clientX+'px'; cursor.style.top=e.clientY+'px'; });
function frame(){ cx+=(tx-cx)*.06; cy+=(ty-cy)*.06; depths.forEach(el=>{ const d=Number(el.dataset.depth); el.style.setProperty('--mx',`${cx*d*75}px`); el.style.setProperty('--my',`${cy*d*42}px`); }); requestAnimationFrame(frame); } frame();
document.querySelectorAll('.project').forEach(el=>{el.addEventListener('mouseenter',()=>cursor.classList.add('active'));el.addEventListener('mouseleave',()=>cursor.classList.remove('active'))});
const observer=new IntersectionObserver(entries=>entries.forEach(e=>{if(e.isIntersecting)e.target.classList.add('seen')}),{threshold:.12}); document.querySelectorAll('.project,.section-head,.project-lens>div,.lens-controls button,.project-more,.aether-head,.aether-body article,.aether-film,.aether-outcomes,.about h2,.about-grid,.skills-intro,.skills-grid article,.tools,.experience-proof,.music-copy,.spotify-player').forEach((el,i)=>{el.style.setProperty('--delay',`${(i%4)*70}ms`);observer.observe(el)});
const progress=document.querySelector('.scroll-progress');
const character=document.querySelector('.character');
window.addEventListener('scroll',()=>{const max=document.documentElement.scrollHeight-innerHeight;progress.style.transform=`scaleX(${max?scrollY/max:0})`},{passive:true});
document.querySelectorAll('.project').forEach(card=>card.addEventListener('pointermove',e=>{const r=card.getBoundingClientRect();card.style.setProperty('--px',`${(e.clientX-r.left)/r.width*100}%`);card.style.setProperty('--py',`${(e.clientY-r.top)/r.height*100}%`)}));
const labToggle=document.querySelector('.lab-toggle');
const aetherCase=document.querySelector('#aether');
const aetherClose=document.querySelector('.aether-close');
function setAether(open,{move=true}={}){
  if(!labToggle||!aetherCase)return;
  labToggle.setAttribute('aria-expanded',String(open));
  aetherCase.setAttribute('aria-hidden',String(!open));
  aetherCase.classList.toggle('is-collapsed',!open);
  if(move){(open?aetherCase:labToggle).scrollIntoView({behavior:'smooth',block:'start'});}
}
labToggle?.addEventListener('click',event=>{event.preventDefault();setAether(labToggle.getAttribute('aria-expanded')!=='true');});
aetherClose?.addEventListener('click',()=>setAether(false));
if(location.hash==='#aether')setAether(true,{move:false});
document.querySelectorAll('.case-card').forEach(card=>card.addEventListener('toggle',()=>{
  if(!card.open)return;
  document.querySelectorAll('.case-card[open]').forEach(other=>{if(other!==card)other.open=false;});
}));
document.querySelectorAll('.project[href^="#"]:not(.lab-toggle)').forEach(link=>link.addEventListener('click',event=>{
  const target=document.querySelector(link.getAttribute('href'));
  if(!(target instanceof HTMLDetailsElement))return;
  event.preventDefault();
  target.open=true;
  target.scrollIntoView({behavior:'smooth',block:'start'});
}));
const projectSources={
  duro:[['Presentation','Grupp 6 presentation Duro.pdf'],['Grupprapport','Grupprapport - Grupp 6 - EXD25.pdf'],['Individuellt bidrag','individuella.docx']],
  kommunal:[['Testanalys','Document 6 (1).pdf'],['UI-reflektion','Individuell inlämning - UI  Pontus Joelsson (2).docx'],['Prototyping-reflektion','Inviduell- Pontus Joelsson (2).pdf'],['Presentation','Presentation Prototyping Del 2 (3).pdf'],['Testplan','Grupp 4 - User Testing Kunskapskontroll B.pdf']],
  academedia:[['Grupprapport','Projekt 2 - Grupprapport 1 (2).pdf'],['Individuellt bidrag','inviduella projekt 2 (1).docx']],
  foodora:[['Grupprapport','Service Design - Grupp 4 (1).pdf'],['Individuell analys','Tjänstedesign Foodora Pontus J (1).pdf']],
  gamecraft:[['Strategipresentation','visionary_vanguards_pdf_gruppuppgift_final (1) (1).pdf'],['Individuell analys','Individuell inlämningsuppgift-Pontus Joelsson (1).docx']],
  analytics:[['Analyticsrapport','Analytics & Statistik.pdf']],
  storyapp:[['Grupprapport','Gruppinlämning - Grupp 7.pdf'],['Individuellt designbidrag','Document 4 (2) (1).pdf']],
  wmg:[['Grupprapport','Grupprapport (2).docx'],['Individuell reflektion','Uppgift C - Individuell skriftlig inlämning.docx']],
  cinema:[['Kundresa & presentation','Kundresa_Grupp1_ (1) (1) (1).pdf']],
  parking:[['Researchpresentation','UserResearch_Uppgift1_ Grupp1 (1).pdf']],
  webportfolio:[['Grupprapport','Grupprapport - Programering.pdf']],
  aether:[['Projektlogg','Projektlogg - Grupp 1.pdf'],['Mitt bidrag & portfoliomaterial','Individuellt projektbidrag & Portfoliomaterial Pontus Joelsson.docx']]
};
Object.entries({}).forEach(([id,files])=>{
  const host=document.getElementById(id)?.querySelector('.case-content')||document.getElementById(id);
  if(!host)return;
  const nav=document.createElement('nav');nav.className=id==='aether'?'aether-files':'case-files';
  nav.innerHTML='<b>PROJEKTUNDERLAG</b>'+files.map(([label,file])=>`<a href="file:///C:/Users/Ekensberg/Downloads/alla%20arbeteten/${encodeURIComponent(file)}" target="_blank">${label} ↗</a>`).join('');
  const meta=host.querySelector('.case-meta');meta?host.insertBefore(nav,meta):host.appendChild(nav);
});
const workSection=document.querySelector('.work');
const aboutSection=document.querySelector('.about');
const aboutClosing=document.querySelector('.about-closing');
if(aboutClosing)aboutClosing.textContent='Det är så jag tar mig an design: förstå problemet, skapa struktur och bygga en lösning som fungerar i verkligheten.';
const lensSection=document.querySelector('.project-lens');
if(lensSection&&aboutSection)lensSection.before(aboutSection);
else if(workSection&&aboutSection)workSection.before(aboutSection);
const musicSection=document.querySelector('.music');
const pageFooter=document.querySelector('body>footer');
const contactSection=document.querySelector('.contact-form-section');
if(musicSection)(contactSection||pageFooter)?.before(musicSection);
const skillsKicker=document.querySelector('#skills .section-kicker');
const musicKicker=document.querySelector('#music .section-kicker');
const contactKicker=document.querySelector('#contact .contact-kicker');
if(skillsKicker)skillsKicker.textContent='03 / KOMPETENSER';
const skillsHeading=document.querySelector('#skills .skills-intro h2');
const skillsSummary=document.querySelector('#skills .skills-intro>p:last-child');
if(skillsHeading)skillsHeading.innerHTML='Det jag använder.<br><span>I arbetet.</span>';
if(skillsSummary){skillsSummary.classList.add('skills-summary');skillsSummary.textContent='Research, struktur, samarbete och AI är fyra kompetensområden som återkommer genom mina projekt.';}
const toolsList=document.querySelector('.tools');
if(toolsList)toolsList.innerHTML='<span>FIGMA</span><span>MIRO</span><span>USER TESTING</span><span>ADOBE</span><span>AI &amp; PROMPTING</span><span>CHATGPT / CODEX</span><span>GEMINI</span><span>LOGIC PRO</span><span>HTML / CSS</span>';
if(musicKicker)musicKicker.textContent='04 / MUSIK / UTANFÖR DESIGNEN';
if(contactKicker)contactKicker.textContent='05 / KONTAKT';
const projectRows=[...document.querySelectorAll('.work>.project')];
// Keep one clear project surface: heading, filters, result summary, projects.
const workFilterAnchor=workSection?.querySelector('.work-filter-feedback');
if(lensSection&&workSection&&workFilterAnchor)workSection.insertBefore(lensSection,workFilterAnchor);
document.querySelectorAll('.case-files,.aether-files').forEach(files=>files.remove());
projectRows.forEach((row,index)=>{
  row.classList.toggle('is-primary',index<3);
  row.classList.toggle('is-extra',index>=3);
});
const projectConceptImages={duro:'assets/cases/duro-process.webp',academedia:'assets/cases/academedia-hero.webp',kommunal:'assets/cases/academedia-decisions.webp'};
if(character) character.src='assets/hero-character-clean.webp';

const projectKinds={duro:'VERKLIG UPPDRAGSGIVARE',academedia:'VERKLIG UPPDRAGSGIVARE',storyapp:'VERKLIG UPPDRAGSGIVARE',myko:'SPELBART PROJEKT'};
const aetherLead=document.querySelector('#aether .aether-lead');
if(aetherLead&&!document.querySelector('#aether .aether-quickfacts')){
  const quickfacts=document.createElement('div');
  quickfacts.className='aether-quickfacts';
  quickfacts.innerHTML='<p><span>PROJEKTTYP</span>LAB och grupprojekt inom speculative design.</p><p><span>MITT ANSVAR</span>Idéutveckling, visuellt språk, prompting och att forma delarna till en sammanhängande upplevelse.</p><p><span>LEVERANS</span>Ett framtidskoncept gestaltat genom prototyper, film, ljud och kritisk reflektion.</p>';
  aetherLead.insertAdjacentElement('afterend',quickfacts);
}
projectRows.forEach(row=>{
  const id=row.getAttribute('href')?.slice(1);
  const meta=row.querySelector('.project-title p');
  if(meta&&!meta.querySelector('.project-kind')){
    const kind=document.createElement('span');kind.className='project-kind';
    kind.textContent=projectKinds[id]||'SKOLCASE / KONCEPT';
    meta.appendChild(kind);
  }
});
const projectPreview=document.createElement('aside');
projectPreview.className='project-preview';
projectPreview.setAttribute('aria-hidden','true');
projectPreview.innerHTML='<div class="preview-visual"><img alt=""><span></span><span></span><i></i></div><div class="preview-copy"><small></small><strong></strong><p></p></div>';
document.body.appendChild(projectPreview);
projectRows.forEach((row,index)=>{
  row.addEventListener('pointerenter',()=>{
    if(row.classList.contains('lens-muted'))return;
    const concept=projectConceptImages[row.getAttribute('href')?.slice(1)];
    const previewImage=projectPreview.querySelector('.preview-visual img');
    previewImage.src=concept||'';
    projectPreview.classList.toggle('has-concept',Boolean(concept));
    projectPreview.dataset.tone=String(index%6);
    projectPreview.querySelector('small').textContent=`${row.querySelector('.project-no')?.textContent||''} / PROJECT VIEW`;
    projectPreview.querySelector('strong').textContent=row.querySelector('h3')?.textContent||'';
    projectPreview.querySelector('p').textContent=row.querySelector('.project-title p')?.textContent||'';
    projectPreview.classList.add('is-visible');
  });
  row.addEventListener('pointermove',event=>{
    const width=360,height=245;
    projectPreview.style.setProperty('--preview-x',`${Math.max(18,Math.min(event.clientX+30,innerWidth-width-18))}px`);
    projectPreview.style.setProperty('--preview-y',`${Math.max(18,Math.min(event.clientY-height/2,innerHeight-height-18))}px`);
  });
  row.addEventListener('pointerleave',()=>projectPreview.classList.remove('is-visible'));
});
const projectMore=document.querySelector('.project-more');
if(projectMore){projectMore.disabled=true;projectMore.setAttribute('aria-hidden','true')}
projectMore?.addEventListener('click',()=>{
  const expanded=workSection.classList.toggle('show-all-projects');
  const english=document.documentElement.lang==='en';
  projectMore.setAttribute('aria-expanded',String(expanded));
  projectMore.querySelector('span').textContent=expanded?(english?'SHOW SELECTED CASES ONLY':'VISA ENDAST UTVALDA CASE'):(english?'EXPLORE 10 MORE PROJECTS':'UTFORSKA 10 FLER PROJEKT');
});
const caseEvidence={
  duro:{
    type:'VERKLIG UPPDRAGSGIVARE',
    role:'Mitt arbete omfattade research, testupplägg, analys och ansvar för Figma prototypen genom tre iterationer.',
    output:'En testförankrad designriktning för sök, filtrering, guider och butikshittare.',
    proof:['8 deltagare i den första testomgången','3 iterativa omgångar','Teknisk verifiering tillsammans med utvecklare'],
    images:[['assets/cases/duro-process.webp','Tre omgångar från bred research till teknisk verifiering'],['assets/cases/duro-insights.webp','Insikter som förändrade sök, filtrering och guider']]
  },
  academedia:{
    type:'VERKLIG UPPDRAGSGIVARE',
    role:'Jag arbetade med tidiga flöden och testobservation och hade huvudansvar för designiterationerna i Figma.',
    output:'En personligare och mer överblickbar lärplattform, utvecklad från prototyp 1.0 till 3.0.',
    proof:['Informationsarkitektur från grunden','Observation av klick och interaktionsmönster','Utveckling från prototyp 1.0 till 3.0'],
    images:[['assets/cases/academedia-decisions.webp','Designbeslut för struktur, motivation och friare konceptarbete'],['assets/cases/academedia-iterations.webp','Från identifierade brister till en förfinad och tillgängligare upplevelse']]
  },
  kommunal:{
    role:'Kartläggning av befintlig webb · Interaktionsflöden i Figma · UI iteration',
    proof:['Navigation och medlemsinnehåll kartlades före lösningsarbetet','Självskattning med tydliga steg, skala och resultat','Användartest prioriterade om navigation före detaljpolering']
  },
  foodora:{
    role:'Service design · Kundresa · Service blueprint och systemsamband',
    proof:['Kund, restaurang, bud och plattform kartlades som ett system','Frontstage kopplades till processerna bakom upplevelsen','Designriktning för ärligare leveranstid och tydligare förändringar']
  },
  gamecraft:{
    role:'Konceptutveckling · Value Proposition Canvas · Affärslogik och visuell riktning',
    proof:['Spelarnas pains och gains översattes till prioriterade behov','Multiplayer, karteditor och communitystöd kopplades till retention','Budget, ROI och risk användes för att pröva konceptets bärkraft']
  },
  analytics:{
    role:'GA4 analys · Heuristisk UX granskning · Prioritering av köpresans friktion',
    proof:['Största tappet identifierades före produktvisning','Datamönster kombinerades med kvalitativa gränssnittsfynd','Gästköp, fungerande produktvägar och tidigare kostnadsbesked prioriterades']
  },
  storyapp:{
    role:'Crazy 8s · Wireframes · Figma prototyp · Test med föräldrar',
    proof:['Barnets självständighet och förälderns trygghet balanserades','En tydlig huvudhandling minskade den kognitiva belastningen','Prenumerationsval tonades ned för att förebygga feltryck']
  },
  wmg:{
    role:'Research · Konceptutveckling · Projektstruktur och visuell kommunikation',
    proof:['Yngre målgrupp kopplades till kortformat, interaktion och deltagande','Konceptet strukturerades i sprintar, pipeline och tidsplan','Budget, ROI och risk gjorde riktningen möjlig att värdera']
  },
  cinema:{
    role:'Hypotesarbete · Research · Customer journey och experience mapping',
    proof:['Upplevelsen kartlades i sex steg före, under och efter filmen','Touchpoints, förväntningar och känslor synliggjordes över tid','Resan visade att planering och transport påverkar kärnupplevelsen']
  },
  parking:{
    role:'User research · Frågeformulering · Syntes av behov och frustrationer',
    proof:['Problemet utforskades innan en lösning bestämdes','Antaganden hölls isär från användarnas faktiska perspektiv','Återkommande mönster skapade grund för framtida prioritering']
  },
  webportfolio:{
    role:'Wireframe i Figma · Frontendutveckling · Responsiv UI och teamsamarbete',
    proof:['Informationshierarkin utgick från arbetsgivarens viktigaste frågor','Wireframe översattes till fungerande HTML och CSS','Löpande testning säkrade användbarhet mellan skärmstorlekar']
  }
};
const caseStories={
  duro:{
    context:'Ett skarpt UX uppdrag för Duro med fokus på deras digitala tapetupplevelse och vägen från inspiration till köp.',
    challenge:'Det stora sortimentet var svårt att orientera sig i. Sök, filter, guider och butikshittare skapade osäkerhet och granskningen visade även tillgänglighetsproblem.',
    process:'Vi kombinerade manuell granskning, enkät, användartester och iterativa Figma prototyper. Tre testomgångar gjorde det möjligt att pröva både helhet och detaljer.',
    decisions:'Sökförslag förtydligades, filtreringen stabiliserades och guider lyftes fram. Favoritfunktionen och butikshittaren fick tydligare återkoppling.',
    outcome:'Resultatet blev en mer begriplig riktning för sök, inspiration och köp, förankrad i observerade användarbehov och WCAG.',
    learning:'Tillgänglighet och affärsnytta blir starkare när de behandlas som samma designproblem, inte som separata lager.'
  },
  academedia:{
    context:'Ett skarpt UX och UI uppdrag för AcadeMedia Academy, en lärplattform för medarbetare inom flera utbildningsverksamheter.',
    challenge:'Startsidan upplevdes som en vägg av text. Användaren behövde snabbare förstå vad som var relevant, pågående och nästa steg.',
    process:'Vi kartlade informationsarkitekturen, byggde tidiga flöden och observerade hur användare klickade och orienterade sig i flera prototypversioner.',
    decisions:'Personligt innehåll, utbildningsstatus och tydliga vägar till katalogen prioriterades. Hierarki och färg användes för att skilja handling från information.',
    outcome:'Den slutliga riktningen gjorde lärandet mer överblickbart, personligt och motiverande utan att tappa AcadeMedias identitet.',
    learning:'När innehållet är omfattande måste gränssnittet först svara på frågan: vad är viktigast för mig just nu?'
  },
  kommunal:{
    context:'Ett skolcase om hur Kommunals befintliga webbupplevelse kan ge tydligare stöd i medlemsärenden och självskattning.',
    challenge:'Viktiga funktioner låg djupt i navigationen och självskattningen saknade tillräcklig orientering, återkoppling och överblick.',
    process:'Befintliga sidor och flöden kartlades. Därefter togs interaktionsflöden och UI iterationer fram i Figma och prövades i användartest.',
    decisions:'Centrala ingångar lyftes fram. Självskattningen fick skala, stegindikator, brödsmulor och mer skannbara resultat.',
    outcome:'Förslaget gav en tydligare väg genom både webbplats och självskattning, samtidigt som Kommunals visuella igenkänning bevarades.',
    learning:'Testet visade att rätt navigation måste lösas före detaljpolering. Annars förbättras enskilda skärmar men inte användarens resa.'
  },
  foodora:{
    context:'Ett fiktivt service design case som undersökte hela leveransupplevelsen kring Foodora, inte bara appens gränssnitt.',
    challenge:'En försening upplevs av kunden som ett enda problem men skapas genom beroenden mellan restaurang, bud, plattform och support.',
    process:'Kundresan kartlades tillsammans med frontstage, backstage, kontaktpunkter och aktörer för att synliggöra var information och ansvar bröts.',
    decisions:'Lösningsriktningen fokuserade på ärligare tidsuppskattning, tidigare information om förändringar och tydligare ansvar genom hela tjänsten.',
    outcome:'Arbetet resulterade i en service blueprint som kopplade kundens frustration till konkreta processer bakom upplevelsen.',
    learning:'En bra digital lösning räcker inte när problemet finns i tjänstesystemet. Gränssnitt och verksamhetsprocess måste utvecklas tillsammans.'
  },
  gamecraft:{
    context:'Ett fiktivt business design case för Iron Dominion Reborn, en communitydriven nytolkning av ett strategispel.',
    challenge:'Konceptet behövde skapa långsiktigt spelarvärde utan att bygga retention på aggressiv eller orättvis monetisering.',
    process:'Spelarnas pains och gains kartlades i Value Proposition Canvas och kopplades till funktioner, affärslogik, budget, risk och möjlig avkastning.',
    decisions:'Multiplayer, karteditor och communityinnehåll prioriterades som värdeskapande funktioner. Monetiseringen byggdes kring transparens och frivillighet.',
    outcome:'Resultatet blev en sammanhållen produkt och affärsriktning där communitynytta och ekonomisk bärkraft kunde bedömas tillsammans.',
    learning:'Affärsdesign blir trovärdig först när varje intäktsidé kan kopplas till ett tydligt värde för användaren.'
  },
  analytics:{
    context:'Ett analyscase baserat på Google Merchandise Store där GA4 data kombinerades med en kvalitativ UX granskning av köpresan.',
    challenge:'Data visade var användare föll bort men inte varför. Uppgiften var att koppla beteendemönster till konkreta problem i gränssnittet.',
    process:'Trafik, flöden och konverteringspunkter analyserades i GA4. Därefter granskades motsvarande skärmar heuristiskt för att formulera förklaringar och åtgärder.',
    decisions:'Fungerande produktvägar, gästköp, tydligare kostnadsinformation och mindre friktion före produktvisning prioriterades.',
    outcome:'Caset mynnade ut i en prioriterad förbättringslista där varje rekommendation hade stöd i både data och UX observation.',
    learning:'Kvantitativ data hittar signalen. Kvalitativ UX analys gör signalen begriplig och möjlig att agera på.'
  },
  storyapp:{
    context:'Ett verkligt UI och prototyping uppdrag för Viilike, med fokus på en berättelseapp som barn ska kunna använda själva och föräldrar känna sig trygga med.',
    challenge:'Gränssnittet behövde vara enkelt och lekfullt utan att skapa feltryck, otydliga val eller oavsiktliga prenumerationer.',
    process:'Idéer utvecklades med Crazy 8s, wireframes och en klickbar Figma prototyp. Föräldrar användes som testgrupp för trygghet och begriplighet.',
    decisions:'En huvudhandling fick tydlig visuell prioritet, återkopplingen förenklades och prenumerationsval tonades ned och separerades.',
    outcome:'Prototypen gav barnet en tydligare väg genom upplevelsen och gjorde kritiska val lättare för föräldern att förstå och kontrollera.',
    learning:'Barnvänlig design handlar inte om fler färger. Den kräver hårdare prioritering, tydligare återkoppling och färre konkurrerande val.'
  },
  wmg:{
    context:'Ett fiktivt strategi och konceptcase för Worldline Media Group med fokus på relevans hos en yngre, digital målgrupp.',
    challenge:'Ett värderingsdrivet mediehus behövde hitta nya uttryck och deltagandeformat utan att förlora sin trovärdighet.',
    process:'Målgruppens medievanor undersöktes och översattes till konceptmöjligheter. Arbetet strukturerades med sprintar, pipeline, tidsplan, budget och risk.',
    decisions:'Kortformat, interaktion och medskapande prioriterades framför envägskommunikation. Konceptets genomförbarhet prövades parallellt.',
    outcome:'Resultatet blev en strategisk konceptriktning som kopplade målgruppsrelevans till produktion, resurser och möjliga affärseffekter.',
    learning:'Ett framtidskoncept blir användbart först när berättelsen också har en realistisk väg till genomförande.'
  },
  cinema:{
    context:'Ett fiktivt experience design case som betraktade biobesöket som en hel resa, från första filmsuget till vägen hem.',
    challenge:'Själva filmen är bara en del av upplevelsen. Planering, sällskap, transport, väntan och efterkänsla påverkar helhetsvärdet.',
    process:'Hypoteser och research sammanställdes i en customer journey med sex steg, där handlingar, kontaktpunkter, förväntningar och känslor följdes över tid.',
    decisions:'Möjligheter identifierades före, under och efter visningen i stället för att begränsa lösningsrymden till biosalongen.',
    outcome:'Kartläggningen skapade en gemensam bild av upplevelsen och visade var tjänsten kan minska friktion eller förstärka förväntan.',
    learning:'Experience design kräver att man ritar en större ram än den produkt eller plats som först verkar vara uppdraget.'
  },
  parking:{
    context:'Ett fiktivt user research case om bilisters upplevelse av att hitta, förstå och planera parkering i Stockholm.',
    challenge:'Ämnet rymmer starka antaganden. Utmaningen var att förstå faktisk frustration, osäkerhet och beteenden innan en lösning valdes.',
    process:'Researchfrågan avgränsades, intervjufrågor formulerades och svaren syntetiserades i återkommande behov och mönster.',
    decisions:'Fokus låg på förutsägbarhet, begriplig information och planering snarare än att omedelbart föreslå ännu en parkeringsapp.',
    outcome:'Arbetet gav en behovsbild som kan användas för att prioritera framtida koncept och testa rätt problem före utveckling.',
    learning:'Bra research håller lösningen öppen tillräckligt länge för att användarens problem ska hinna förändra riktningen.'
  },
  webportfolio:{
    context:'Ett fiktivt frontend och UI case där en portfolio utvecklades från wireframe i Figma till en fungerande responsiv webbplats.',
    challenge:'Innehållet behövde vara snabbt att bedöma för en arbetsgivare och samtidigt fungera på olika skärmstorlekar och i riktig kod.',
    process:'Informationshierarkin definierades i wireframes, översattes till HTML och CSS och testades löpande mellan desktop och mobil.',
    decisions:'Projekt, kompetenser och kontakt fick tydlig ordning. Responsiva regler utgick från innehållets läsbarhet i stället för enskilda enheter.',
    outcome:'Resultatet blev en kodad webbupplevelse som förenade visuell identitet, tydlig navigation och praktisk responsivitet.',
    learning:'När designen byggs i kod blir begränsningar synliga tidigare och besluten kan bedömas i sitt verkliga medium.'
  }
};
projectRows.forEach(row=>{
  const id=row.getAttribute('href')?.slice(1);
  const panel=id&&document.getElementById(id);
  if(!panel)return;
  row.setAttribute('aria-controls',id);
  row.setAttribute('aria-expanded','false');
  panel.classList.add('project-inline-case');
  if(panel instanceof HTMLDetailsElement){
    panel.open=false;
    const content=panel.querySelector('.case-content');
    if(content&&!content.querySelector('.case-expanded-head')){
      const head=document.createElement('div');head.className='case-expanded-head';
      head.innerHTML=`<p>${row.querySelector('.project-no')?.textContent||''} / UX CASE</p><div><h2>${row.querySelector('h3')?.textContent||''}</h2><span>${row.querySelector('.project-title p')?.textContent||''}</span><p class="case-open-intro">${row.querySelector('.project-question')?.textContent||''}</p></div>`;
      content.prepend(head);
    }
    const evidence=caseEvidence[id];
    if(content&&evidence&&!content.querySelector('.case-evidence-summary')){
      const summary=document.createElement('section');summary.className='case-evidence-summary';
      summary.innerHTML=`<div class="case-evidence-copy"><p><span>PROJEKTTYP</span>${evidence.type||'UX CASE'}</p><p><span>MIN ROLL</span>${evidence.role}</p>${evidence.output?`<p><span>LEVERANS</span>${evidence.output}</p>`:''}</div><div class="case-evidence-points">${evidence.proof.map((item,index)=>`<strong><i>0${index+1}</i>${item}</strong>`).join('')}</div>`;
      content.querySelector('.case-expanded-head')?.insertAdjacentElement('afterend',summary);
      if(evidence.images?.length){
        const gallery=document.createElement('section');gallery.className='case-process-gallery';gallery.setAttribute('aria-label','Processmaterial');
        gallery.innerHTML=evidence.images.map(([src,caption],index)=>`<figure><img src="${src}" alt="${caption}" loading="lazy"><figcaption><span>0${index+1}</span>${caption}</figcaption></figure>`).join('');
        const meta=content.querySelector('.case-meta');meta?content.insertBefore(gallery,meta):content.appendChild(gallery);
      }
    }
    const story=caseStories[id];
    if(content&&story&&!content.querySelector('.case-story')){
      const narrative=document.createElement('section');narrative.className='case-story';
      narrative.innerHTML=`<div class="case-story-opening"><p><span>SAMMANHANG</span>${story.context}</p><p><span>UTMANING</span>${story.challenge}</p></div><div class="case-story-flow"><article><b>01 / PROCESS</b><h3>Så tog vi oss an problemet.</h3><p>${story.process}</p></article><article><b>02 / DESIGNBESLUT</b><h3>Vad riktningen byggde på.</h3><p>${story.decisions}</p></article><article><b>03 / RESULTAT</b><h3>Vad arbetet ledde fram till.</h3><p>${story.outcome}</p></article><article><b>04 / LÄRDOM</b><h3>Det jag tar vidare.</h3><p>${story.learning}</p></article></div>`;
      const meta=content.querySelector('.case-meta');meta?content.insertBefore(narrative,meta):content.appendChild(narrative);
    }
    const concept=projectConceptImages[id];
    if(content&&concept&&!content.querySelector('.project-concept-media')){
      const figure=document.createElement('figure');figure.className='project-concept-media';
      figure.innerHTML=`<img src="${concept}" alt="Konceptbild från ${row.querySelector('h3')?.textContent||'projektet'}"><figcaption>UTVALT MATERIAL FRÅN PROJEKTET</figcaption>`;
      const head=content.querySelector('.case-expanded-head');
      head?head.insertAdjacentElement('afterend',figure):content.prepend(figure);
    }
  }
  else{
    panel.classList.add('is-collapsed');
    const concept=projectConceptImages[id];
    if(concept&&!panel.querySelector('.project-concept-media')){
      const figure=document.createElement('figure');figure.className='project-concept-media aether-concept-media';
      figure.innerHTML=`<img src="${concept}" alt="Konceptbild för ${row.querySelector('h3')?.textContent||'projektet'}"><figcaption>VISUELL TOLKNING AV PROJEKTIDÉN</figcaption>`;
      panel.querySelector('.aether-head')?.insertAdjacentElement('afterend',figure);
    }
    if(id==='aether'&&!panel.querySelector('.case-process-gallery')){
      const gallery=document.createElement('section');gallery.className='case-process-gallery aether-process-gallery';gallery.setAttribute('aria-label','Processmaterial');
      gallery.innerHTML='<figure><img src="assets/cases/aether-process.webp" alt="Aethers produktionsprocess från skiss till efterbearbetning" loading="lazy" decoding="async"><figcaption><span>01</span>Från klassiska wireframes till AI visualisering, ljud och efterbearbetning</figcaption></figure><figure><img src="assets/cases/aether-reflection.webp" alt="Aethers utveckling från utopisk vision till sårbarhetsanalys" loading="lazy" decoding="async"><figcaption><span>02</span>Handledarfeedback flyttade fokus mot etik, risker och kritisk reflektion</figcaption></figure>';
      panel.querySelector('.aether-film')?.insertAdjacentElement('beforebegin',gallery);
    }
  }
  row.insertAdjacentElement('afterend',panel);
});
function closeProjectPanels(except=null){
  projectRows.forEach(row=>{
    const panel=document.getElementById(row.getAttribute('href')?.slice(1));
    if(panel===except)return;
    row.setAttribute('aria-expanded','false');
    if(panel instanceof HTMLDetailsElement)panel.open=false;
    else panel?.classList.add('is-collapsed');
  });
}
workSection?.addEventListener('click',event=>{
  const row=event.target.closest('.project');
  if(!row||!workSection.contains(row))return;
  event.preventDefault();event.stopImmediatePropagation();
  const panel=document.getElementById(row.getAttribute('href')?.slice(1));
  if(!panel)return;
  const isOpen=panel instanceof HTMLDetailsElement?panel.open:!panel.classList.contains('is-collapsed');
  closeProjectPanels(panel);
  row.setAttribute('aria-expanded',String(!isOpen));
  if(panel instanceof HTMLDetailsElement)panel.open=!isOpen;
  else{panel.classList.toggle('is-collapsed',isOpen);panel.setAttribute('aria-hidden',String(isOpen));}
  if(!isOpen)setTimeout(()=>row.scrollIntoView({behavior:'smooth',block:'start'}),50);
},true);
document.querySelector('.case-library')?.classList.add('is-merged');
const mykoFullscreen=document.querySelector('.myko-fullscreen');
mykoFullscreen?.addEventListener('click',event=>{
  event.preventDefault();event.stopPropagation();
  const frame=document.querySelector('.myko-frame');
  if(frame?.requestFullscreen)frame.requestFullscreen();
});

const allProjectIds=projectRows.map(row=>row.getAttribute('href')?.slice(1)).filter(Boolean);
const projectLens={
  selected:['duro','academedia','aether'],
  all:allProjectIds,
  research:['duro','academedia','kommunal','foodora','analytics','storyapp'],
  ui:['duro','academedia','kommunal','storyapp','webportfolio','parking'],
  service:['foodora','cinema','parking'],
  game:['myko','grannfejden','gamecraft'],
  concept:['aether','gamecraft','wmg','cinema']
};
const lensLabels={selected:'Utvalda case',all:'Alla projekt',research:'Research',ui:'UX/UI',service:'Tjänstedesign',game:'Speldesign',concept:'Koncept'};
const lensLabelsEnglish={selected:'Selected cases',all:'All projects',research:'Research',ui:'UX/UI',service:'Service design',game:'Game design',concept:'Concepts'};
const lensButtons=[...document.querySelectorAll('[data-lens]')];
const lensStatus=document.querySelector('.lens-status');
const workFilterFeedback=document.querySelector('.work-filter-feedback');
const workHeading=document.querySelector('.work>.section-head h2');
const workIntro=document.querySelector('.work>.section-head .section-intro');
function setProjectLens(lens,userInitiated=false){
  const active=projectLens[lens]?lens:'selected';
  closeProjectPanels();
  // Put the playable game first in its category. The complete project index
  // is alphabetical, while the remaining views keep their editorial order.
  const orderedRows=active==='game'
    ?[...projectLens.game.map(id=>projectRows.find(row=>row.getAttribute('href')===`#${id}`)).filter(Boolean),...projectRows.filter(row=>!projectLens.game.includes(row.getAttribute('href')?.slice(1)))]
    :active==='all'
      ?[...projectRows].sort((a,b)=>(a.querySelector('h3')?.textContent||'').localeCompare(b.querySelector('h3')?.textContent||'',document.documentElement.lang==='en'?'en':'sv',{sensitivity:'base'}))
      :projectRows;
  orderedRows.forEach(row=>{
    workSection?.insertBefore(row,projectMore||null);
    const panel=document.querySelector(row.getAttribute('href'));
    if(panel&&panel.parentElement===workSection)workSection.insertBefore(panel,projectMore||null);
  });
  document.body.dataset.lens=active;
  workSection?.classList.add('lens-filtering');
  lensButtons.forEach(button=>button.setAttribute('aria-pressed',String(button.dataset.lens===active)));
  document.querySelectorAll('.work>.project').forEach(project=>{
    const id=project.getAttribute('href')?.slice(1);
    project.classList.toggle('lens-match',Boolean(active&&projectLens[active].includes(id)));
    project.classList.toggle('lens-muted',Boolean(active&&!projectLens[active].includes(id)));
  });
  if(lensStatus){
    const english=document.documentElement.lang==='en';
    const visibleCount=projectLens[active].length;
    const totalCount=projectLens.all.length;
    lensStatus.textContent=active==='all'
      ?(english?`Showing all ${totalCount} projects`:`Visar alla ${totalCount} projekt`)
      :(english?`Showing ${visibleCount} of ${totalCount} projects · ${lensLabelsEnglish[active]}`:`Visar ${visibleCount} av ${totalCount} projekt · ${lensLabels[active]}`);
    lensStatus.classList.remove('is-updated');
    requestAnimationFrame(()=>lensStatus.classList.add('is-updated'));
  }
  if(workFilterFeedback){
    const english=document.documentElement.lang==='en';
    const count=projectLens[active].length;
    workFilterFeedback.querySelector('span').textContent=active==='selected'?(english?'SELECTED CASES':'UTVALDA CASE'):(english?'ACTIVE FILTER':'AKTIVT FILTER');
    workFilterFeedback.querySelector('strong').textContent=active==='selected'?'Duro · AcadeMedia · Aether':(english?lensLabelsEnglish[active]:lensLabels[active]);
    workFilterFeedback.querySelector('small').textContent=active==='selected'?(english?'Open a case to see the process':'Öppna ett case för att se processen'):(english?`${count} ${count===1?'project':'projects'} shown`:`${count} projekt visas`);
    workFilterFeedback.classList.remove('is-updated');
    requestAnimationFrame(()=>workFilterFeedback.classList.add('is-updated'));
  }
  if(userInitiated&&workSection){
    const reduced=window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    window.setTimeout(()=>workSection.scrollIntoView({behavior:reduced?'auto':'smooth',block:'start'}),reduced?0:320);
  }
}
lensButtons.forEach(button=>button.addEventListener('click',()=>setProjectLens(button.dataset.lens,true)));
lensButtons.forEach(button=>button.addEventListener('pointermove',event=>{
  const rect=button.getBoundingClientRect();
  button.style.setProperty('--lens-x',`${event.clientX-rect.left}px`);
  button.style.setProperty('--lens-y',`${event.clientY-rect.top}px`);
}));
setProjectLens('selected');

// Clean high-resolution artwork with genuine transparency.
if(character) character.src='assets/hero-character-clean.webp';

// The game-design case now contains both course projects.
const gameDesignContent=document.querySelector('#myko .case-content');
const gameDesignDirection=document.querySelector('#myko .game-design-direction');
if(gameDesignDirection){
  gameDesignDirection.textContent='Två spel, två olika perspektiv på spelarupplevelsen. MYKO utforskar rörelse och onboarding. Grannfejden fokuserar på rumslig tydlighet, modulära system och en levande 3D-värld.';
}
const gameDesignSummary=document.querySelector('.project[href="#myko"] .project-question');
if(gameDesignSummary){
  gameDesignSummary.textContent='Ett spelbart skogsäventyr med fokus på rörelse, onboarding och tydlig återkoppling.';
}
if(gameDesignContent&&!document.querySelector('#grannfejden')){
  const grannfejden=document.createElement('section');
  grannfejden.className='grannfejden-case';
  grannfejden.id='grannfejden';
  grannfejden.setAttribute('aria-labelledby','grannfejden-title');
  grannfejden.innerHTML=`
    <div class="grannfejden-head">
      <span>SPEL 02 / GRUPPROJEKT / 3D</span>
      <div>
        <h3 id="grannfejden-title">Grannfejden.</h3>
        <p>Ett spelprojekt där ett bostadskvarter blir en social spelplats. Mitt arbete låg i mötet mellan visuell gestaltning, rumslig struktur och interaktion, från tidiga idéer till en fungerande 3D-miljö.</p>
      </div>
    </div>
    <div class="grannfejden-role">
      <p><span>MIN ROLL</span>Visuell och interaktiv utveckling</p>
      <p><span>FOKUS</span>3D-miljö, systemlogik och spelarrespons</p>
      <p><span>ARBETSSÄTT</span>Skiss, modellering och iteration i fungerande miljö</p>
    </div>
    <div class="grannfejden-contribution">
      <article><span>01 / KONCEPT</span><h4>Från idé till spelvärld.</h4><p>Jag tog en drivande roll i idéarbetet och var med och satte ton, inramning och känsla för kvarteret Björkbacken.</p></article>
      <article><span>02 / RUMSLIG STRUKTUR</span><h4>En miljö som går att läsa.</h4><p>Jag planerade spelytans tomter och objektplacering för att skapa en balanserad miljö där spelaren enkelt kan orientera sig.</p></article>
      <article><span>03 / VISUELL FORM</span><h4>Ett sammanhållet uttryck.</h4><p>Jag samordnade spelets visuella stil och skapade 3D-objekt som byggde upp atmosfär och ett tydligt formspråk.</p></article>
      <article><span>04 / SYSTEM</span><h4>Modulärt utan kollisioner.</h4><p>Jag utvecklade logiken för hur husdelar och uppgraderingar kan byggas på under spelets gång utan att krocka med tomtens övriga objekt.</p></article>
      <article><span>05 / INTERAKTION</span><h4>Små svar som skapar närvaro.</h4><p>Jag formgav föreningsmötet och utvecklade detaljer där karaktärernas huvuden följer spelarens musrörelser. Jag animerade även fåglar med naturliga flygmönster.</p></article>
    </div>
    <div class="grannfejden-learning"><span>VAD JAG TAR VIDARE</span><p>Projektet visade hur tydliga ramar och lekfull respons behöver fungera tillsammans. Genom att testa skisser direkt i 3D-miljön kunde vi snabbt se vad som fungerade, och hur subtil visuell återkoppling hjälper spelaren att känna sig närvarande.</p></div>`;
  gameDesignContent.appendChild(grannfejden);
}

// Swedish is the editorial default; English is available without reloading the page.
const englishCopy={
  'VISA':'VIEW','UTVALDA PROJEKT ↓':'SELECTED WORK ↓','Välj språk':'Choose language','NYFIKEN':'CURIOUS','MÄNSKLIG':'HUMAN','FRAMTID':'FUTURES','SE PORTFOLION':'ENTER PORTFOLIO',
  'Jag skrapar på ytan':'I look beneath the surface','för att förstå hur saker faktiskt hänger ihop.':'to understand how things truly connect.','För mig är design ingen ytfinish. Det handlar om att bygga strukturer som håller hela vägen in i vardagen.':'To me, design is not surface polish. It is about building structures that hold up in everyday life.',
  '02 / PERSPEKTIV':'02 / PERSPECTIVE','Välj ett perspektiv.':'Choose a perspective.','Se relevanta projekt.':'See relevant projects.','Människa':'People','Research, behov och beteenden':'Research, needs and behaviours','Struktur':'Structure','System, flöden och tydlighet':'Systems, flows and clarity','Känsla':'Emotion','Berättande, uttryck och engagemang':'Storytelling, expression and engagement','Alla perspektiv visas':'Showing all perspectives',
  '03 / PROJEKT / 01 TILL 12':'03 / PROJECTS / 01 TO 12','Praktiskt tänkande.':'Practical thinking.','Mänsklig förståelse.':'Human understanding.','Tre testomgångar för en tydligare, mer tillgänglig tapetupplevelse.':'Three rounds of testing for a clearer, more accessible wallpaper experience.','En tydligare webbupplevelse för självskattning, medlemsstöd och vardagliga ärenden.':'A clearer web experience for self-assessment, member support and everyday tasks.','Från en vägg av text till en relevant och motiverande lärplattform.':'From a wall of text to a relevant and motivating learning platform.','Shared Dreamscape · Framtidens kollektiva upplevelser.':'Shared Dreamscape · Collective experiences of the future.','Hur en försening blir en dominoeffekt genom hela leveranskedjan.':'How one delay creates a domino effect throughout the delivery chain.','En communitydriven remake som kopplar spelarvärde till affärsnytta.':'A community-driven remake connecting player value to business value.','Ett fiktivt spelkoncept där community, rättvis monetisering och retention formar produktriktningen.':'A fictional game concept where community, fair monetisation and retention shape the product direction.','Kvantitativ data möter kvalitativa UX observationer i köpresan.':'Quantitative data meets qualitative UX observations in the purchase journey.','En GA4- och UX-analys av var användare tappar fart i e-handelsresan.':'A GA4 and UX analysis of where users lose momentum in the ecommerce journey.','Ett gränssnitt som barn kan använda och föräldrar vågar lämna över.':'An interface children can use and parents feel safe handing over.','En moderniseringsplan för att nå en yngre publik.':'A modernisation plan for reaching a younger audience.','Ett fiktivt mediekoncept för att göra ett värderingsdrivet mediehus relevant för yngre målgrupper.':'A fictional media concept designed to make a values-driven media company relevant to younger audiences.','Bioupplevelsen':'Cinema Experience','Hela biobesöket, från första filmsuget till resan hem.':'The entire cinema experience, from the first urge to watch a film to the journey home.','Parkering i Stockholm':'Parking in Stockholm','Vad känner bilister inför parkeringssituationen i Stockholm?':'How do drivers feel about parking in Stockholm?','Responsiv webbportfolio':'Responsive web portfolio','Från wireframe till en responsiv portfoliosida i kod.':'From wireframe to a responsive portfolio site in code.','VISA 6 PROJEKT TILL':'SHOW 6 MORE PROJECTS','PROJEKTARKIV / KLICKA FÖR ATT LÄSA':'CASE ARCHIVE / CLICK TO READ','Från research':'From research','till riktning.':'to direction.',
  'UTMANING':'CHALLENGE','PROCESS':'PROCESS','RESULTAT':'OUTCOME','PROJEKTUNDERLAG':'PROJECT MATERIAL','Presentation':'Presentation','Grupprapport':'Group report','Individuellt bidrag':'Individual contribution','MITT BIDRAG':'MY CONTRIBUTION','DESIGNBESLUT':'DESIGN DECISIONS','LÄRDOM':'LEARNING','ROLL':'ROLE','LÖSNING':'SOLUTION','METOD':'METHOD','INSIKT':'INSIGHT','RIKTNING':'DIRECTION','STRATEGI':'STRATEGY','AFFÄRSLOGIK':'BUSINESS LOGIC','UX FYND':'UX FINDINGS','PRIORITERING':'PRIORITY','DESIGN':'DESIGN','ARBETSSÄTT':'WAYS OF WORKING','OMFATTNING':'SCOPE','VÄRDE':'VALUE','FRÅGA':'QUESTION','MÅL':'GOAL','STÄNG PROJEKT':'CLOSE PROJECT',
  'Hur gör man ett starkt svenskt varumärke lättare att hitta, förstå och handla från, för fler?':'How can a strong Swedish brand become easier for more people to find, understand and shop from?','Sök, filtrering, guider, önskelista och butikshittare skapade osäkerhet. Granskningen visade samtidigt brister mot WCAG 2.1.':'Search, filtering, guides, wish lists and the store locator created uncertainty. The review also revealed WCAG 2.1 issues.','Manuell granskning, tillgänglighetsverktyg, enkät med 13 svar och tre iterativa testomgångar: åtta användare på originalsidan, sex i Figma och en verifierande utvecklartestare.':'Manual review, accessibility tools, a 13-response survey and three iterative test rounds: eight users on the original site, six in Figma and one verifying developer test.','Tydligare sökförslag, stabil filtrering, guider i huvudnavigationen, starkare favoritfeedback och en mer begriplig butikshittare. Testerna visade snabbare orientering och mer intuitiva flöden.':'Clearer search suggestions, stable filtering, guides in the main navigation, stronger favourite feedback and a more understandable store locator. Testing showed faster orientation and more intuitive flows.',
  'En vidareutveckling av Kommunals webbupplevelse med tydligare navigation, medlemsinnehåll och ett webbaserat stöd för självskattning och arbetsbelastning.':'A further development of Kommunal’s web experience with clearer navigation, member content and web-based support for self-assessment and workload.','Jag arbetade med kartläggning av de befintliga webbsidorna, interaktionsflöden i Figma och UI iteration tillsammans med Karolina. Fokus låg på att göra innehåll och viktiga funktioner enklare att hitta och förstå.':'I mapped the existing web pages, developed interaction flows in Figma and iterated on the UI together with Karolina. The focus was making content and key functions easier to find and understand.','Viktiga ingångar lyftes ur undermenyerna och fick tydligare placering på webben. Självskattningen fick en 1 till 5 skala, stegindikator, breadcrumbs och mer skannbara resultat. Kommunals visuella uttryck behölls för igenkänning.':'Key entry points were moved out of submenus and given clearer placement. The self-assessment gained a 1–5 scale, step indicator, breadcrumbs and more scannable results, while retaining Kommunal’s visual identity.','Användartesterna visade att “Min arbetstid” låg på en onaturlig plats. Det gav en tydlig prioritering: först webbnavigationen, därefter formulärfeedback, resultatöversikt och responsiv anpassning.':'User testing showed that “My working hours” was placed unnaturally. This set a clear priority: web navigation first, followed by form feedback, result overview and responsive adaptation.',
  'En total redesign av en intern lärplattform som upplevdes rörig, opersonlig och överväldigande.':'A complete redesign of an internal learning platform perceived as cluttered, impersonal and overwhelming.','Observatör under användartesterna och medansvarig för dashboarden. Jag dokumenterade var osäkerhet uppstod och drev visuell hierarki, whitespace och UI detaljer.':'Observer during user testing and co-responsible for the dashboard. I documented moments of uncertainty and drove visual hierarchy, whitespace and UI details.','Personalisering efter roll och verksamhet, tydligare utbildningskatalog, bättre filter, progression och tidsestimat på utbildningar.':'Personalisation by role and organisation, a clearer course catalogue, better filters, progression and course time estimates.','En testperson som använde det befintliga systemet dagligen kunde navigera den nya prototypen direkt utan instruktioner, ett tydligt kvitto på den nya strukturen.':'A participant who used the existing system daily could navigate the new prototype immediately without instructions, clear evidence that the new structure worked.',
  'Foodora under lunchrush':'Foodora during the lunch rush','Appens försening är bara den synliga delen av ett system där kund, restaurang, bud och plattform påverkar varandra.':'The app delay is only the visible part of a system in which customer, restaurant, courier and platform affect one another.','Kundresa och service blueprint användes för att koppla frontstage till processerna bakom kulisserna.':'A customer journey and service blueprint connected the frontstage experience to the processes behind the scenes.','Förseningar i köket påverkar budets rutt, expressordrar omprioriterar flödet och kundens leveranstid kan hoppa från 10 till 25 minuter. Frustrationen landar till sist hos budet.':'Kitchen delays affect courier routes, express orders reprioritise the flow and the customer’s delivery time can jump from 10 to 25 minutes. The frustration ultimately lands on the courier.','Kommunicera en ärligare tid från början, förklara förändringar och begränsa hur mycket expressordrar får försena ordinarie leveranser.':'Communicate a more honest estimate from the start, explain changes and limit how much express orders may delay regular deliveries.',
  'Hur kan en spelstudio återvinna förtroende, retention och lönsamhet utan att börja om från noll?':'How can a game studio regain trust, retention and profitability without starting from scratch?','En modern remake med multiplayer, DLC och karteditor bygger vidare på en existerande kundbas och låter communityn skapa långsiktigt innehåll.':'A modern remake with multiplayer, DLC and a map editor builds on an existing customer base and lets the community create lasting content.','Brainstorming, kalkyl, budget, ROI och riskpåslag samt ansvar för presentationens visuella finish.':'Brainstorming, calculations, budgeting, ROI and risk contingency, plus responsibility for the presentation’s visual finish.','VPC kopplade spelarnas pains, orättvisa köpmodeller, svag transparens och ojämna uppdateringar, till gains som communitystöd, kreativitet och stabil onlineupplevelse.':'The VPC connected player pains—unfair purchase models, weak transparency and inconsistent updates—to gains such as community support, creativity and a stable online experience.',
  'En analys av köpresan 2025 som kombinerar GA4 med heuristisk UX granskning.':'An analysis of the 2025 purchase journey combining GA4 with a heuristic UX review.','2,7 miljoner dollar i intäkt och cirka 14 000 köpare. Det största tappet identifierades mellan session start och produktvisning.':'$2.7 million in revenue and roughly 14,000 buyers. The largest drop-off was identified between session start and product view.','Trasiga produktlänkar, inloggningskrav, sen fraktkostnad och onödig adressfriktion riskerar både konvertering och förtroende.':'Broken product links, login requirements, late shipping costs and unnecessary address friction put both conversion and trust at risk.','Reparera ingångarna till produkter, tillåt gästköp och gör kostnader synliga tidigare. Analysen inkluderade även samtycke, dataminimering och GDPR.':'Repair product entry points, allow guest checkout and surface costs earlier. The analysis also covered consent, data minimisation and GDPR.',
  'Story App för barn & föräldrar':'Story App for children and parents','En snabb onboarding som gör appen lekfull för barnet och trygg för föräldern.':'A quick onboarding flow that makes the app playful for children and reassuring for parents.','Crazy 8s, wireframes, Figma prototyp och tester med föräldrar.':'Crazy 8s, wireframes, a Figma prototype and testing with parents.','En stor “Play Story knapp”, luftig hemskärm och enkel How to Play. “Subscribe” blev “Premium” och tonades ned för att minska feltryck från barn.':'A large “Play Story” button, spacious home screen and simple “How to Play”. “Subscribe” became “Premium” and was toned down to reduce accidental taps by children.','Testpersonerna beskrev upplevelsen som lekfull, ren och lätt att förstå, även när barnet ännu inte kan läsa.':'Participants described the experience as playful, clean and easy to understand, even when the child could not yet read.',
  'En moderniseringsplan för ett värderingsdrivet mediehus som behöver nå yngre läsare.':'A modernisation plan for a values-driven media company that needs to reach younger readers.','Korta videoformat, interaktivitet, deltagande innehåll och ett fysiskt skolevent kopplades till en modern digital upplevelse.':'Short-form video, interactivity, participatory content and a physical school event were connected to a modern digital experience.','Hybrid mellan Kanban, pipeline, sprintar, dagliga avstämningar och ett Ganttschema över 14 veckor.':'A hybrid of Kanban, pipeline, sprints, daily check-ins and a 14-week Gantt chart.','Kreativ konceptutveckling, budget, ROI, riskpåslag och visuell finish. Projektet stärkte min förmåga att skapa struktur när ett komplext uppdrag först känns rörigt.':'Creative concept development, budget, ROI, risk contingency and visual finish. The project strengthened my ability to create structure when a complex brief initially feels messy.',
  'En kundresa över hela bioupplevelsen, inte bara tiden i biosalongen.':'A customer journey covering the entire cinema experience, not only the time in the auditorium.','Resan kartlades i sex steg: suget uppstår, planering, inför besöket, på plats, filmen och tiden efteråt.':'The journey was mapped in six stages: initial interest, planning, before the visit, on site, the film and afterwards.','Hypoteser, research och kundresekartläggning användes för att synliggöra förväntningar, touchpoints och känslor över tid.':'Hypotheses, research and journey mapping revealed expectations, touchpoints and emotions over time.','Projektet tränade förmågan att se upplevelsen som en sammanhängande kedja där planering och transport påverkar helhetsintrycket lika mycket som kärntjänsten.':'The project trained my ability to see the experience as one connected chain, where planning and transport affect the overall impression as much as the core service.',
  'Projektet tog avstamp i bilisternas känslor, behov och frustrationer snarare än i en färdig lösning.':'The project began with drivers’ emotions, needs and frustrations rather than a predetermined solution.','User research användes för att samla in perspektiv och strukturera återkommande problem i en komplex stadsmiljö.':'User research gathered perspectives and structured recurring problems in a complex urban environment.','Att hålla isär antaganden och faktiska användarinsikter skapade en stabilare grund för framtida koncept och prioriteringar.':'Separating assumptions from actual user insight created a more stable foundation for future concepts and priorities.','Ett grupparbete där en wireframe blev en fungerande portfolio med HTML och CSS.':'A group project in which a wireframe became a working portfolio using HTML and CSS.','Arbetsgivare skulle snabbt kunna förstå kompetenser och projekt genom en ren, luftig och responsiv struktur.':'Employers should quickly understand skills and projects through a clean, spacious and responsive structure.','Wireframe i Figma, ansvarsfördelning mellan header, hero, projektkort och footer samt löpande testning i olika skärmstorlekar.':'A Figma wireframe, divided responsibility for header, hero, project cards and footer, plus continuous testing across screen sizes.','Tydliga ansvarsområden gjorde parallellt arbete möjligt samtidigt som teamet hjälptes åt när någon fastnade.':'Clear areas of responsibility enabled parallel work while the team supported anyone who got stuck.',
  '04 / LAB / GRUPPROJEKT':'04 / LAB / GROUP PROJECT','Hur skulle vi mötas, skapa och dela upplevelser om gränssnittet försvann helt?':'How would we meet, create and share experiences if the interface disappeared entirely?','UTGÅNGSPUNKT':'STARTING POINT','DESIGNFRÅGAN':'DESIGN QUESTION','MITT ARBETE I GRUPPEN':'MY ROLE IN THE TEAM','PROTOTYPEN':'THE PROTOTYPE','KONCEPTFILM':'CONCEPT FILM','Aether 2.0 är ett spekulativt Experience Design projekt som utforskar framtida biologisk neural nanoteknik och Brain Computer Interfaces. Konceptet placerar flera människor i ett gemensamt drömlandskap där tankar, minnen och känslor blir själva interaktionen.':'Aether 2.0 is a speculative Experience Design project exploring future biological neural nanotechnology and Brain Computer Interfaces. The concept places several people in a shared dreamscape where thoughts, memories and emotions become the interaction itself.','När skärmen, knappen och menyn försvinner förändras också makten över upplevelsen. Vi undersökte hur ett gränssnitt utan skärm skulle kunna kännas intuitivt och mänskligt, och vilka etiska risker som uppstår när tekniken får tillgång till vårt mest privata.':'When the screen, button and menu disappear, power over the experience changes too. We explored how a screenless interface could feel intuitive and human, and the ethical risks of technology accessing our most private selves.','Research och syntes · Storyboards och konceptmanus · Visuell storytelling och konceptvideo · Etisk analys och sårbarhetsanalys · Prototyping av den gemensamma upplevelsen.':'Research and synthesis · Storyboards and concept script · Visual storytelling and concept video · Ethical and vulnerability analysis · Prototyping the shared experience.','Idén gjordes testbar genom en interaktiv webbsimulering i flerspelarläge. Supabase Realtime skapade den delade närvaron mellan deltagarna och Vercel användes för att göra upplevelsen tillgänglig som fungerande prototyp.':'The idea became testable through an interactive multiplayer web simulation. Supabase Realtime created shared presence between participants and Vercel made the experience available as a working prototype.',
  '01 / OM MIG':'01 / ABOUT','Praktiskt hantverkstänk.':'Practical craft thinking.','Djup förståelse för människor.':'Deep understanding of people.','Ett tydligt syfte som håller i längden.':'A clear purpose built to last.','Min styrka ligger i kombinationen av ett praktiskt hantverkstänk och en djup förståelse för människor. I ett tidigare liv som snickare lärde jag mig att bygga för att det ska hålla, och senare som Shift Leader att navigera i komplexa teamdynamiker.':'My strength lies in combining practical craft thinking with a deep understanding of people. As a carpenter I learned to build things that last, and later as a Shift Leader to navigate complex team dynamics.','Men det var under mina år i kundservice som min viktigaste filosofi formades. Genom att arbeta direkt med användarnas utmaningar utvecklade jag en instinkt för att identifiera och lösa problem redan på ritbordet.':'My most important philosophy was shaped during my years in customer service. Working directly with users’ challenges gave me an instinct for identifying and solving problems at the drawing board.','Just nu studerar jag på Futuregames, där jag förvandlar mina insikter till digitala lösningar.':'I currently study at Futuregames, where I turn insights into digital solutions.','Oavsett om jag skapar musik, snickrar eller bygger prototyper är målet alltid detsamma: att skapa något med ett tydligt syfte som håller i längden.':'Whether I create music, build with my hands or prototype, the goal is always the same: to create something purposeful that lasts.',
  '05 / MUSIK / UTANFÖR DESIGNEN':'05 / MUSIC / BEYOND DESIGN','Samma nyfikenhet.':'The same curiosity.','Ett annat medium.':'A different medium.','Musiken är en annan del av mitt skapande, ett sätt att arbeta med rytm, känsla och berättande. Samma byggstenar följer med in i hur jag formar digitala upplevelser.':'Music is another part of my creative practice—a way of working with rhythm, emotion and storytelling. The same building blocks shape how I create digital experiences.','ÖPPNA ARTISTSIDAN PÅ SPOTIFY ↗':'OPEN ARTIST PAGE ON SPOTIFY ↗',
  '04 / FÄRDIGHETER':'04 / SKILLS','Kompetens i praktiken.':'Skills in practice.','Från insikt till upplevelse.':'From insight to experience.','01 / FÖRSTÅ':'01 / UNDERSTAND','Intervjuer · Observation · Enkäter · Hypoteser · Personas · Syntes av användarinsikter':'Interviews · Observation · Surveys · Hypotheses · Personas · Synthesis of user insights','02 / PRÖVA':'02 / TEST','Testplanering · Modererade tester · Iteration · Analys · Prioritering av förbättringar':'Test planning · Moderated tests · Iteration · Analysis · Prioritisation of improvements','03 / STRUKTURERA':'03 / STRUCTURE','User flows · Wireframes · Informationsarkitektur · Onboarding · Responsiv design':'User flows · Wireframes · Information architecture · Onboarding · Responsive design','04 / FORMA':'04 / SHAPE','Interaktiva prototyper · Visuell hierarki · Designsystem · Mikrointeraktioner · Figma':'Interactive prototypes · Visual hierarchy · Design systems · Microinteractions · Figma','05 / HELHET':'05 / SYSTEM','Kundresor · Service blueprints · Touchpoints · Systems thinking · Frontstage & backstage':'Customer journeys · Service blueprints · Touchpoints · Systems thinking · Frontstage & backstage','06 / INKLUDERA':'06 / INCLUDE','Tillgänglighet':'Accessibility','WCAG 2.1 · Kognitiv belastning · Tydlig feedback · Begriplig navigation · Inkluderande gränssnitt':'WCAG 2.1 · Cognitive load · Clear feedback · Understandable navigation · Inclusive interfaces','07 / MÄTA':'07 / MEASURE','Analys & strategi':'Analysis & strategy','Google Analytics · Beteendedata · Marknadsanalys · Affärsnytta · Produktutveckling':'Google Analytics · Behavioural data · Market analysis · Business value · Product development','08 / LEDA':'08 / LEAD','Ledarskap & team':'Leadership & teams','Tre år som Shift Lead på Telenor · Lagledning · Coaching · Driftledning · Konflikthantering · Resultat under tidspress':'Three years as Shift Lead at Telenor · Team leadership · Coaching · Operations management · Conflict resolution · Results under pressure','09 / UTFORSKA':'09 / EXPLORE','AI i designarbetet':'AI in the design process','Promptdesign · Idéutveckling · Researchstöd · Konceptvisualisering · Prototypinnehåll · Kritisk granskning av resultat':'Prompt design · Ideation · Research support · Concept visualisation · Prototype content · Critical evaluation of outputs','VERKTYG & METODER':'TOOLS & METHODS','Generativ AI':'Generative AI','SVENSKA / MODERSMÅL':'SWEDISH / NATIVE','ENGELSKA / FLYTANDE':'ENGLISH / FLUENT','ERFARENHET SOM FORMAR MITT SÄTT ATT DESIGNA':'EXPERIENCE THAT SHAPES HOW I DESIGN','Ledarskap':'Leadership','Människoförståelse':'Human understanding','Praktiskt hantverk':'Practical craft','AI som kreativt verktyg':'AI as a creative tool','Shift Lead på Telenor 2022 till 2025. Van att skapa riktning, stötta människor och få ett team att fungera när tempot är högt.':'Shift Lead at Telenor from 2022 to 2025. Used to creating direction, supporting people and helping teams perform in high-pressure environments.','Över sex år i kundservice. Tränad i att lyssna, formulera tydligt och lösa problem för människor med helt olika behov.':'More than six years in customer service. Trained to listen, communicate clearly and solve problems for people with very different needs.','Bakgrund som snickare. Jag tänker i material, struktur och genomförbarhet, och vill att det jag designar ska hålla i verkligheten.':'A background as a carpenter. I think in materials, structure and feasibility, and I want what I design to hold up in the real world.','Jag använder generativ AI och genomtänkta promptar för att utforska fler riktningar, visualisera koncept och effektivisera delar av designprocessen. Resultaten granskas, bearbetas och förankras alltid i användarbehov och projektets mål.':'I use generative AI and considered prompts to explore more directions, visualise concepts and streamline parts of the design process. Outputs are always reviewed, refined and grounded in user needs and project goals.',
  '06 / KONTAKT':'06 / CONTACT','Har du något i tankarna?':'Have something in mind?','Skriv direkt till mig.':'Write directly to me.','Jag återkommer så snart jag kan.':'I will get back to you as soon as I can.','DITT NAMN':'YOUR NAME','DIN MEJL':'YOUR EMAIL','MEDDELANDE':'MESSAGE','SKICKA MEDDELANDE':'SEND MESSAGE','Skickas direkt till min inkorg.':'Sent directly to my inbox.','LÅT OSS SKAPA NÅGOT':'LET’S CREATE SOMETHING','SOM HÅLLER.':'THAT LASTS.','TILLBAKA TILL TOPPEN ↑':'BACK TO TOP ↑'
};

englishCopy['Jag är Experience Designer med bakgrund inom snickeri, ledarskap och kundservice. Det har lärt mig att förstå människor, skapa struktur och bygga lösningar som fungerar i verkligheten.']='I am an Experience Designer with a background in carpentry, leadership and customer service. It has taught me to understand people, create structure and build solutions that work in the real world.';
englishCopy['På Futuregames utvecklar jag detta genom research, prototyper och digitala upplevelser. Oavsett uttrycksform vill jag skapa något tydligt, mänskligt och genomtänkt.']='At Futuregames, I develop this through research, prototypes and digital experiences. Whatever the form, I want to create something clear, human and considered.';
englishCopy['Ett annat uttryck.']='A different expression.';
englishCopy['Har du ett projekt, en idé eller bara något du vill resonera kring? Skriv direkt eller välj en av länkarna nedan.']='Have a project, an idea or simply something you would like to discuss? Write directly or choose one of the links below.';
englishCopy['ELLER HITTA MIG HÄR']='OR FIND ME HERE';
englishCopy['Du når mig enklast via mejl, telefon eller LinkedIn. Välj det som passar dig bäst.']='The easiest way to reach me is by email, phone or LinkedIn. Choose whichever suits you best.';
englishCopy['VÄLJ HUR DU VILL TA KONTAKT']='CHOOSE HOW TO GET IN TOUCH';
englishCopy['01 / MEJL']='01 / EMAIL';
englishCopy['02 / TELEFON']='02 / PHONE';
englishCopy['Jag är öppen för nya möjligheter, samarbeten och idéer. Hör gärna av dig om du tror att vi kan skapa något bra tillsammans.']='I am open to new opportunities, collaborations and ideas. Get in touch if you think we could create something meaningful together.';
englishCopy['SKICKA ETT MEJL']='SEND AN EMAIL';
englishCopy['TELEFON']='PHONE';
englishCopy['03 / UTVALDA CASE']='03 / SELECTED CASES';
englishCopy['Tre projekt.']='Three projects.';
englishCopy['Tre sätt att tänka.']='Three ways of thinking.';
englishCopy['UTFORSKA 9 FLER PROJEKT']='EXPLORE 9 MORE PROJECTS';
englishCopy['UTFORSKA 10 FLER PROJEKT']='EXPLORE 10 MORE PROJECTS';
englishCopy['03 / PROJEKT / 01 TILL 13']='03 / PROJECTS / 01 TO 13';
englishCopy['Tre perspektiv som formar mitt arbete']='Three perspectives shaping my work';
englishCopy['Min styrka ligger i kombinationen av praktiskt hantverkstänk och en djup förståelse för människor. Erfarenheter från snickeri, kundservice och ledarskap har lärt mig att se både detaljerna och helheten.']='My strength lies in combining practical craft thinking with a deep understanding of people. Experience from carpentry, customer service and leadership has taught me to see both the details and the whole.';
englishCopy['På Futuregames förvandlar jag insikter till digitala lösningar. För mig är design ingen ytfinish, utan strukturer som fungerar i verkligheten och håller över tid.']='At Futuregames, I turn insights into digital solutions. To me, design is not surface polish, but structures that work in the real world and stand the test of time.';
englishCopy['Hantverk']='Craft';
englishCopy['Människor']='People';
englishCopy['Digital form']='Digital form';
englishCopy['Bygga för att hålla.']='Build to last.';
englishCopy['Lyssna innan jag formar.']='Listen before shaping.';
englishCopy['Göra det komplexa tydligt.']='Make complexity clear.';
englishCopy['Något tydligt, användbart och meningsfullt.']='Something clear, useful and meaningful.';
englishCopy['Det är så jag tar mig an design: förstå problemet, skapa struktur och bygga en lösning som fungerar i verkligheten.']='This is how I approach design: understand the problem, create structure and build a solution that works in the real world.';
englishCopy['Ett litet skogsäventyr som går att spela direkt i portfolion.']='A little woodland adventure you can play directly in the portfolio.';
englishCopy['SPELBART PROJEKT']='PLAYABLE PROJECT';
englishCopy['Spela MYKO.']='Play MYKO.';
englishCopy['Klicka i spelområdet för att börja. Spelet använder tangentbord och upplevs bäst på dator.']='Click the game area to begin. The game uses a keyboard and is best experienced on desktop.';
englishCopy['SPELA I HELSKÄRM ↗']='PLAY FULLSCREEN ↗';
englishCopy['Fungerar inte spelet här?']='Game not working here?';
englishCopy['Öppna MYKO i en ny flik ↗']='Open MYKO in a new tab ↗';
englishCopy['Speldesign']='Game Design';
englishCopy['Meningsfulla val, tydliga core loops och spelbara upplevelser. MYKO är det första spelet.']='Meaningful choices, clear core loops and playable experiences. MYKO is the first game.';
englishCopy['Ett spelbart skogsäventyr med fokus på rörelse, onboarding och tydlig återkoppling.']='A playable woodland adventure focused on movement, onboarding and clear feedback.';
englishCopy['15 YH-POÄNG / EXPERIENCE DESIGN']='15 HVE CREDITS / EXPERIENCE DESIGN';
englishCopy['Hur skapar ett spel deltagande?']='How does a game create engagement?';
englishCopy['Speldesign handlar om mer än regler och grafik. Kursen utforskar hur mekaniker, val och återkoppling formar spelarens beteende, upplevelse och vilja att fortsätta.']='Game design is about more than rules and graphics. The course explores how mechanics, choices and feedback shape player behaviour, experience and motivation to continue.';
englishCopy['Spelmekanik']='Game mechanics';
englishCopy['Regler och interaktioner som tillsammans skapar spelets grundläggande system.']='Rules and interactions that together create the game’s fundamental system.';
englishCopy['Meningsfulla val']='Meaningful choices';
englishCopy['Beslut där spelaren förstår alternativen och upplever att valet faktiskt spelar roll.']='Decisions where players understand their options and feel that the choice genuinely matters.';
englishCopy['Flow & core loops']='Flow & core loops';
englishCopy['Balansen mellan utmaning, förmåga, belöning och viljan att försöka igen.']='The balance between challenge, ability, reward and the motivation to try again.';
englishCopy['Onboarding']='Onboarding';
englishCopy['Tutorials och återkoppling som lär ut spelet genom handling istället för långa instruktioner.']='Tutorials and feedback that teach through action instead of lengthy instructions.';
englishCopy['Sektionen växer med kursen. MYKO är spel 01 och nästa spel får en egen del med samma fokus på mekanik, spelarupplevelse och reflektion.']='This section will grow with the course. MYKO is game 01, and the next game will receive its own section with the same focus on mechanics, player experience and reflection.';
englishCopy['Två spel, två olika perspektiv på spelarupplevelsen. MYKO utforskar rörelse och onboarding. Grannfejden fokuserar på rumslig tydlighet, modulära system och en levande 3D-värld.']='Two games, two perspectives on player experience. MYKO explores movement and onboarding. Grannfejden focuses on spatial clarity, modular systems and a living 3D world.';
englishCopy['Ett bostadskvarter som blir en social spelplats genom rumslig tydlighet och levande respons.']='A residential neighbourhood becomes a social play space through spatial clarity and responsive details.';

englishCopy['SPELA GRANNFEJDEN ↗']='PLAY GRANNFEJDEN ↗';
englishCopy['01 / ENTRÉ']='01 / ENTRY';
englishCopy['Spelets första möte sätter tonen och gör vägen in i kvarteret tydlig.']='The first encounter sets the tone and makes the way into the neighbourhood clear.';
englishCopy['02 / SPELSYSTEM']='02 / GAME SYSTEM';
englishCopy['Kort, resurser och omedelbar återkoppling gör konsekvenserna av spelarens val synliga.']='Cards, resources and immediate feedback make the consequences of each choice visible.';
englishCopy['03 / ONBOARDING']='03 / ONBOARDING';
englishCopy['Tre steg introducerar spelets loop utan att bryta berättelsens ton.']='Three steps introduce the game loop without breaking the tone of the story.';
englishCopy['04 / VISUELLT SYSTEM']='04 / VISUAL SYSTEM';
englishCopy['Kortfamiljerna använder samma varma illustrationsstil men skiljs åt genom funktion, färg och innehåll.']='The card families share a warm illustration style while function, colour and content keep them distinct.';
englishCopy['HÖNSHUSET']='THE CHICKEN COOP';
englishCopy['Byggt med kod för spelets modulära tomter.']='Built in code for the game’s modular plots.';
englishCopy['POOLEN']='THE POOL';
englishCopy['En läsbar uppgradering med egen form och skala.']='A readable upgrade with its own shape and scale.';
englishCopy['LEKHUSET']='THE PLAYHOUSE';
englishCopy['En kompakt modell skapad för flexibel placering.']='A compact model created for flexible placement.';
englishCopy['04 / KODBYGGDA OBJEKT']='04 / CODE-BUILT OBJECTS';
englishCopy['Hönshuset, poolen och lekhuset är modeller jag byggde direkt med kod. Dra över ett objekt för att rotera det själv.']='The chicken coop, pool and playhouse are models I built directly in code. Drag an object to rotate it yourself.';
englishCopy['02 / SOCIAL NÄRVARO']='02 / SOCIAL PRESENCE';
englishCopy['Från brädspel till digital gemenskap.']='From board game to digital community.';
englishCopy['Att översätta känslan av ett brädspel till en digital värld handlar om närvaro och gemenskap. Röstchatt och interaktiva element skapar den sociala närhet som annars uppstår när människor sitter mitt emot varandra.']='Translating the feeling of a board game into a digital world is about presence and community. Voice chat and interactive elements create the social closeness that otherwise comes from sitting across from one another.';
englishCopy['Processen balanserade tydliga strukturer för spelytan med lekfulla, responsiva animationer. Genom tidig iteration mellan skisser och 3D-modeller såg vi snabbt hur visuell respons hjälper spelaren att förstå vad som händer och vilja stanna kvar.']='The process balanced clear structures for the play space with playful, responsive animation. Early iteration between sketches and 3D models quickly showed us how visual feedback helps players understand what is happening and want to stay.';
englishCopy['Spela tillsammans med integrerad röstchatt.']='Play together with integrated voice chat.';
englishCopy['Möt AI-spelare med tydliga och trovärdiga beteenden.']='Face AI players with clear and believable behaviours.';
englishCopy['SPEL 02 / GRUPPROJEKT / 3D']='GAME 02 / GROUP PROJECT / 3D';
englishCopy['Grannfejden.']='Grannfejden.';
englishCopy['Ett spelprojekt där ett bostadskvarter blir en social spelplats. Mitt arbete låg i mötet mellan visuell gestaltning, rumslig struktur och interaktion, från tidiga idéer till en fungerande 3D-miljö.']='A game project where a residential neighbourhood becomes a social play space. My work connected visual design, spatial structure and interaction, from early ideas to a functioning 3D environment.';
englishCopy['Visuell och interaktiv utveckling']='Visual and interactive development';
englishCopy['3D-miljö, systemlogik och spelarrespons']='3D environment, system logic and player feedback';
englishCopy['Skiss, modellering och iteration i fungerande miljö']='Sketching, modelling and iteration in a working environment';
englishCopy['01 / KONCEPT']='01 / CONCEPT';
englishCopy['Från idé till spelvärld.']='From idea to game world.';
englishCopy['Jag tog en drivande roll i idéarbetet och var med och satte ton, inramning och känsla för kvarteret Björkbacken.']='I took a driving role in ideation and helped define the tone, framing and atmosphere of the Björkbacken neighbourhood.';
englishCopy['02 / RUMSLIG STRUKTUR']='02 / SPATIAL STRUCTURE';
englishCopy['En miljö som går att läsa.']='An environment players can read.';
englishCopy['Jag planerade spelytans tomter och objektplacering för att skapa en balanserad miljö där spelaren enkelt kan orientera sig.']='I planned plots and object placement to create a balanced environment that players can navigate with ease.';
englishCopy['03 / VISUELL FORM']='03 / VISUAL DESIGN';
englishCopy['Ett sammanhållet uttryck.']='A coherent visual language.';
englishCopy['Jag samordnade spelets visuella stil och skapade 3D-objekt som byggde upp atmosfär och ett tydligt formspråk.']='I coordinated the game’s visual style and created 3D objects that built atmosphere and a clear visual language.';
englishCopy['04 / SYSTEM']='04 / SYSTEM';
englishCopy['Modulärt utan kollisioner.']='Modular without collisions.';
englishCopy['Jag utvecklade logiken för hur husdelar och uppgraderingar kan byggas på under spelets gång utan att krocka med tomtens övriga objekt.']='I developed the logic for adding modular house parts and upgrades during play without colliding with other objects on the plot.';
englishCopy['05 / INTERAKTION']='05 / INTERACTION';
englishCopy['Små svar som skapar närvaro.']='Small responses that create presence.';
englishCopy['Jag formgav föreningsmötet och utvecklade detaljer där karaktärernas huvuden följer spelarens musrörelser. Jag animerade även fåglar med naturliga flygmönster.']='I designed the residents’ meeting and developed details where characters follow the player’s mouse movements with their heads. I also animated birds with natural flight patterns.';
englishCopy['VAD JAG TAR VIDARE']='WHAT I TAKE FORWARD';
englishCopy['Projektet visade hur tydliga ramar och lekfull respons behöver fungera tillsammans. Genom att testa skisser direkt i 3D-miljön kunde vi snabbt se vad som fungerade, och hur subtil visuell återkoppling hjälper spelaren att känna sig närvarande.']='The project showed how clear constraints and playful feedback need to work together. Testing sketches directly in the 3D environment quickly revealed what worked and how subtle visual feedback helps players feel present.';
englishCopy['SPEL 01 / AP-GAMES / SPELBART PROJEKT']='GAME 01 / AP-GAMES / PLAYABLE PROJECT';
englishCopy['MYKO är ett 2D-plattformsspel i en varm skogsvärld. Spelaren utforskar miljön genom rörelse, stegar, dubbelhopp och interaktioner med stugan och ficklampan. Klicka i spelområdet för att börja.']='MYKO is a 2D platform game set in a warm woodland world. Players explore through movement, ladders, double jumps and interactions with the cabin and flashlight. Click the game area to begin.';
englishCopy['KURS']='COURSE';
englishCopy['Speldesign, 15 YH-poäng.']='Game Design, 15 HVE credits.';
englishCopy['Spelmekanik, spelartyper, flow, onboarding och tutorials.']='Game mechanics, player types, flow, onboarding and tutorials.';
englishCopy['FÄRDIGHETER']='SKILLS';
englishCopy['03 / KOMPETENSER']='03 / SKILLS';
englishCopy['Det jag använder.']='What I use.';
englishCopy['I arbetet.']='In my work.';
englishCopy['Research, struktur, samarbete och AI är fyra kompetensområden som återkommer genom mina projekt.']='Research, structure, collaboration and AI are four areas of expertise that recur throughout my projects.';
englishCopy['Meningsfulla val, regelverk för interaktioner och analys av core loops.']='Meaningful choices, interaction rules and analysis of core loops.';
englishCopy['SPEL 01']='GAME 01';
englishCopy['MYKO, en spelbar webbupplevelse av AP-Games.']='MYKO, a playable web experience by AP-Games.';
englishCopy['VISA ENDAST UTVALDA CASE']='SHOW SELECTED CASES ONLY';
englishCopy['03 / LAB / GRUPPROJEKT']='03 / LAB / GROUP PROJECT';
englishCopy['Utvalda case']='Selected cases';
englishCopy['Duro, AcadeMedia och Aether']='Duro, AcadeMedia and Aether';
englishCopy['Visar tre utvalda case']='Showing three selected cases';
englishCopy['FILTRERA PROJEKT']='FILTER PROJECTS';
englishCopy['Visar 3 av 13 projekt']='Showing 3 of 13 projects';
englishCopy['3 UTVALDA']='3 SELECTED';
englishCopy['03 / PROJEKT']='03 / PROJECTS';
englishCopy['Arbeten genom']='Work through';
englishCopy['olika perspektiv.']='different perspectives.';
englishCopy['MIN ROLL']='MY ROLE';
englishCopy['Research och analys · UX/UI design · Ansvar för Figma prototyp']='Research and analysis · UX/UI design · Figma prototype ownership';
englishCopy['8 deltagare i den första testomgången']='8 participants in the first test round';
englishCopy['3 iterativa omgångar']='3 iterative rounds';
englishCopy['Teknisk verifiering tillsammans med utvecklare']='Technical verification with a developer';
englishCopy['Tidiga flöden · Testobservation · Huvudansvar för designiteration']='Early flows · Test observation · Lead responsibility for design iteration';
englishCopy['Informationsarkitektur från grunden']='Information architecture from the ground up';
englishCopy['Observation av klick och interaktionsmönster']='Observation of clicks and interaction patterns';
englishCopy['Utveckling från prototyp 1.0 till 3.0']='Development from prototype 1.0 to 3.0';
englishCopy['Tre omgångar från bred research till teknisk verifiering']='Three rounds from broad research to technical verification';
englishCopy['Insikter som förändrade sök, filtrering och guider']='Insights that changed search, filtering and guides';
englishCopy['Designbeslut för struktur, motivation och friare konceptarbete']='Design decisions for structure, motivation and freer concept work';
englishCopy['Från identifierade brister till en förfinad och tillgängligare upplevelse']='From identified issues to a refined and more accessible experience';
englishCopy['Från klassiska wireframes till AI visualisering, ljud och efterbearbetning']='From classic wireframes to AI visualisation, sound and post-production';
englishCopy['Handledarfeedback flyttade fokus mot etik, risker och kritisk reflektion']='Mentor feedback shifted the focus towards ethics, risks and critical reflection';
Object.assign(englishCopy,{
  'Ett verkligt uppdrag för Viilike: en app som barn kan använda och föräldrar känna sig trygga med.':'A real client project for Viilike: an app children can use independently and parents can feel confident about.',
  'Ett verkligt UI och prototyping uppdrag för Viilike, med fokus på en berättelseapp som barn ska kunna använda själva och föräldrar känna sig trygga med.':'A real UI and prototyping project for Viilike, focused on a story app children can use independently and parents can feel confident about.',
  'UPPDRAGSGIVARE':'CLIENT',
  'VERKLIG UPPDRAGSGIVARE':'REAL CLIENT',
  'Kartläggning av befintlig webb · Interaktionsflöden i Figma · UI iteration':'Existing-site mapping · Interaction flows in Figma · UI iteration',
  'Navigation och medlemsinnehåll kartlades före lösningsarbetet':'Navigation and member content were mapped before solution work',
  'Självskattning med tydliga steg, skala och resultat':'Self-assessment with clear steps, scale and results',
  'Användartest prioriterade om navigation före detaljpolering':'User testing reprioritised navigation ahead of detail polish',
  'Service design · Kundresa · Service blueprint och systemsamband':'Service design · Customer journey · Service blueprint and system relationships',
  'Kund, restaurang, bud och plattform kartlades som ett system':'Customer, restaurant, courier and platform were mapped as one system',
  'Frontstage kopplades till processerna bakom upplevelsen':'The frontstage was connected to processes behind the experience',
  'Designriktning för ärligare leveranstid och tydligare förändringar':'Design direction for more honest delivery times and clearer changes',
  'Konceptutveckling · Value Proposition Canvas · Affärslogik och visuell riktning':'Concept development · Value Proposition Canvas · Business logic and visual direction',
  'Spelarnas pains och gains översattes till prioriterade behov':'Player pains and gains were translated into prioritised needs',
  'Multiplayer, karteditor och communitystöd kopplades till retention':'Multiplayer, a map editor and community support were linked to retention',
  'Budget, ROI och risk användes för att pröva konceptets bärkraft':'Budget, ROI and risk were used to test the concept’s viability',
  'GA4 analys · Heuristisk UX granskning · Prioritering av köpresans friktion':'GA4 analysis · Heuristic UX review · Prioritisation of purchase-journey friction',
  'Största tappet identifierades före produktvisning':'The largest drop-off was identified before product view',
  'Datamönster kombinerades med kvalitativa gränssnittsfynd':'Data patterns were combined with qualitative interface findings',
  'Gästköp, fungerande produktvägar och tidigare kostnadsbesked prioriterades':'Guest checkout, working product paths and earlier cost information were prioritised',
  'Crazy 8s · Wireframes · Figma prototyp · Test med föräldrar':'Crazy 8s · Wireframes · Figma prototype · Testing with parents',
  'Barnets självständighet och förälderns trygghet balanserades':'The child’s independence and the parent’s sense of safety were balanced',
  'En tydlig huvudhandling minskade den kognitiva belastningen':'One clear primary action reduced cognitive load',
  'Prenumerationsval tonades ned för att förebygga feltryck':'Subscription choices were toned down to prevent accidental taps',
  'Research · Konceptutveckling · Projektstruktur och visuell kommunikation':'Research · Concept development · Project structure and visual communication',
  'Yngre målgrupp kopplades till kortformat, interaktion och deltagande':'A younger audience was linked to short-form content, interaction and participation',
  'Konceptet strukturerades i sprintar, pipeline och tidsplan':'The concept was structured through sprints, a pipeline and a timeline',
  'Budget, ROI och risk gjorde riktningen möjlig att värdera':'Budget, ROI and risk made the direction possible to evaluate',
  'Hypotesarbete · Research · Customer journey och experience mapping':'Hypothesis work · Research · Customer journey and experience mapping',
  'Upplevelsen kartlades i sex steg före, under och efter filmen':'The experience was mapped in six stages before, during and after the film',
  'Touchpoints, förväntningar och känslor synliggjordes över tid':'Touchpoints, expectations and emotions were visualised over time',
  'Resan visade att planering och transport påverkar kärnupplevelsen':'The journey showed that planning and transport affect the core experience',
  'User research · Frågeformulering · Syntes av behov och frustrationer':'User research · Question framing · Synthesis of needs and frustrations',
  'Problemet utforskades innan en lösning bestämdes':'The problem was explored before a solution was selected',
  'Antaganden hölls isär från användarnas faktiska perspektiv':'Assumptions were kept separate from users’ actual perspectives',
  'Återkommande mönster skapade grund för framtida prioritering':'Recurring patterns created a foundation for future prioritisation',
  'Wireframe i Figma · Frontendutveckling · Responsiv UI och teamsamarbete':'Figma wireframe · Frontend development · Responsive UI and teamwork',
  'Informationshierarkin utgick från arbetsgivarens viktigaste frågor':'The information hierarchy began with employers’ most important questions',
  'Wireframe översattes till fungerande HTML och CSS':'The wireframe was translated into working HTML and CSS',
  'Löpande testning säkrade användbarhet mellan skärmstorlekar':'Continuous testing ensured usability across screen sizes'
});

Object.assign(englishCopy,{
  'PROJEKTTYP':'PROJECT TYPE',
  'MITT ANSVAR':'MY RESPONSIBILITY',
  'LEVERANS':'DELIVERABLE',
  'Mitt arbete omfattade research, testupplägg, analys och ansvar för Figma prototypen genom tre iterationer.':'My work covered research, test planning, analysis and responsibility for the Figma prototype through three iterations.',
  'En testförankrad designriktning för sök, filtrering, guider och butikshittare.':'A test-informed design direction for search, filtering, guides and the store locator.',
  'Jag arbetade med tidiga flöden och testobservation och hade huvudansvar för designiterationerna i Figma.':'I worked on early flows and test observation and had lead responsibility for the design iterations in Figma.',
  'En personligare och mer överblickbar lärplattform, utvecklad från prototyp 1.0 till 3.0.':'A more personal and accessible learning platform, developed from prototype 1.0 to 3.0.',
  'LAB och grupprojekt inom speculative design.':'LAB group project in speculative design.',
  'Idéutveckling, visuellt språk, prompting och att forma delarna till en sammanhängande upplevelse.':'Concept development, visual language, prompting and shaping the parts into a cohesive experience.',
  'Ett framtidskoncept gestaltat genom prototyper, film, ljud och kritisk reflektion.':'A future-facing concept expressed through prototypes, film, sound and critical reflection.'
});

const originalText=new WeakMap();
const translatableNodes=[];
const textWalker=document.createTreeWalker(document.body,NodeFilter.SHOW_TEXT,{acceptNode(node){return node.parentElement?.closest('script,style')||!node.nodeValue.trim()?NodeFilter.FILTER_REJECT:NodeFilter.FILTER_ACCEPT}});
while(textWalker.nextNode()){const node=textWalker.currentNode;originalText.set(node,node.nodeValue);translatableNodes.push(node)}
const languageButtons=document.querySelectorAll('[data-lang]');
const translatedAttributes=[...document.querySelectorAll('input[placeholder],textarea[placeholder]')].map(element=>({element,placeholder:element.placeholder}));
const accessibleAttributes=[...document.querySelectorAll('[aria-label],img[alt],iframe[title]')].map(element=>({
  element,
  ariaLabel:element.getAttribute('aria-label'),
  alt:element.getAttribute('alt'),
  title:element.getAttribute('title')
}));
const accessibleEnglish={
  'Pontus Joelsson, till toppen':'Pontus Joelsson, back to the top',
  'Välj språk':'Choose language',
  'Tre perspektiv som formar mitt arbete':'Three perspectives that shape my work',
  'Filtrera projekt efter UX-område':'Filter projects by UX area',
  'Projektarkiv':'Project archive',
  'Spelkontroller':'Game controls',
  'Stäng Aether 2.0':'Close Aether 2.0',
  'Fler kontaktvägar':'More ways to get in touch',
  'Illustrerad karaktär av Pontus Joelsson':'Illustrated character of Pontus Joelsson',
  'Pontus Joelsson på Spotify':'Pontus Joelsson on Spotify',
  'MYKO, ett spelbart 2D plattformsspel av AP-Games':'MYKO, a playable 2D platform game by AP-Games',
  'Kodbyggda 3D-modeller från Grannfejden':'Code-built 3D models from Grannfejden',
  'Processmaterial':'Process material'
};
function setPortfolioLanguage(language){
  document.documentElement.lang=language;
  document.body.dataset.language=language;
  translatableNodes.forEach(node=>{const source=originalText.get(node);const clean=source.trim();const value=language==='en'?(englishCopy[clean]||clean):clean;node.nodeValue=source.replace(clean,value)});
  translatedAttributes.forEach(({element,placeholder})=>{element.placeholder=language==='en'?({'Vad heter du?':'What is your name?','namn@företag.se':'name@company.com','Berätta gärna vad du vill skapa...':'Tell me what you would like to create...'}[placeholder]||placeholder):placeholder});
  accessibleAttributes.forEach(({element,ariaLabel,alt,title})=>{
    if(ariaLabel!==null)element.setAttribute('aria-label',language==='en'?(accessibleEnglish[ariaLabel]||ariaLabel):ariaLabel);
    if(alt!==null)element.setAttribute('alt',language==='en'?(accessibleEnglish[alt]||alt):alt);
    if(title!==null)element.setAttribute('title',language==='en'?(accessibleEnglish[title]||title):title);
  });
  const skipLink=document.querySelector('.skip-link');
  if(skipLink)skipLink.textContent=language==='en'?'Skip to main content':'Hoppa till huvudinnehållet';
  languageButtons.forEach(button=>button.setAttribute('aria-pressed',String(button.dataset.lang===language)));
  document.querySelector('.language-switch')?.setAttribute('aria-label',language==='en'?'Choose language':'Välj språk');
  localStorage.setItem('portfolio-language',language);
}
languageButtons.forEach(button=>button.addEventListener('click',()=>setPortfolioLanguage(button.dataset.lang)));
setPortfolioLanguage(localStorage.getItem('portfolio-language')==='en'?'en':'sv');

// Use Pontus' own AcadeMedia prototype image in every project presentation.
const academediaPrototypeImage='assets/cases/academedia-hero.webp';
projectConceptImages.academedia=academediaPrototypeImage;
document.querySelectorAll('#academedia .project-concept-media img').forEach(image=>{image.src=academediaPrototypeImage;image.alt='AcadeMedia Academy, prototyp för lärplattform'});
document.querySelectorAll('img:not(.hero-environment-image):not(.character)').forEach(image=>{image.loading='lazy';image.decoding='async'});
