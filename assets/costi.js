/* Costo della scuola – Radar QN · funzioni comuni ai quattro grafici (formati, icone, regole degli aiuti regionali) */
const L = d3.formatLocale({decimal:',',thousands:'.',grouping:[3],currency:['','']});
const f0=L.format(',.0f'), f1=L.format(',.1f'), f2=L.format(',.2f');
const eur=v=>(Math.round(v*100)%100?f2(v):f0(v));
const RM = matchMedia('(prefers-reduced-motion: reduce)').matches;
const ICO = {
  book:'<path d="M4 5.5A2.5 2.5 0 0 1 6.5 3H20v15H6.5A2.5 2.5 0 0 0 4 20.5z"/><path d="M4 20.5A2.5 2.5 0 0 0 6.5 23H20v-5"/><path d="M8 7h8"/>',
  pack:'<path d="M6 9a6 6 0 0 1 12 0v11a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1z"/><path d="M9 3.5h6M9 14h6v3H9z"/>',
  bus:'<rect x="4" y="3" width="16" height="14" rx="2"/><path d="M4 11h16M7 17v3M17 17v3"/><circle cx="8" cy="14" r=".6"/><circle cx="16" cy="14" r=".6"/>',
  aid:'<path d="M3 13h3l3 3h5a2 2 0 0 0 0-4h-3"/><path d="M6 13v6H3"/><circle cx="15.5" cy="6.5" r="3.5"/>',
  star:'<path d="M12 3l2.6 5.6 6.1.7-4.5 4.2 1.2 6L12 16.6 6.6 19.5l1.2-6L3.3 9.3l6.1-.7z"/>'
};
const ic=(k,cls='')=>`<svg class="ico ${cls}" viewBox="0 0 24 24" aria-hidden="true">${ICO[k]}</svg>`;
function countUp(el, to, dec=0, pre='', suf='', ms=700){
  const fmt = dec?L.format(`,.${dec}f`):f0;
  if(RM){ el.innerHTML=pre+fmt(to)+suf; return; }
  const from=+(el.dataset.cur||0); el.dataset.cur=to; const t0=performance.now();
  const step=t=>{ const k=Math.min(1,(t-t0)/ms), e=1-Math.pow(1-k,3); el.innerHTML=pre+fmt(from+(to-from)*e)+suf; if(k<1) requestAnimationFrame(step); }; requestAnimationFrame(step);
}
function onView(el, fn){ const io=new IntersectionObserver(es=>{ if(es.some(e=>e.isIntersecting)){ io.disconnect(); fn(); } },{threshold:.25}); io.observe(el); }
function onResize(el, fn){ let w=0; new ResizeObserver(()=>{ const nw=el.clientWidth; if(nw&&nw!==w){w=nw; fn(nw);} }).observe(el); }
function tipFor(el){ let t=el.querySelector('.tip'); if(!t){t=document.createElement('div');t.className='tip';el.appendChild(t);} return { show(h,x,y){t.innerHTML=h;t.style.opacity=1;const w=el.clientWidth,tw=t.offsetWidth;t.style.left=Math.max(0,Math.min(w-tw,x+12))+'px';t.style.top=(y-10)+'px';}, hide(){t.style.opacity=0;} }; }
function frame(el,w,h){ d3.select(el).selectAll('svg.c').remove(); return d3.select(el).append('svg').attr('class','c').attr('width',w).attr('height',h).attr('viewBox',`0 0 ${w} ${h}`); }

/* regole (scheda D84-D115) */
const REG=["Piemonte","Valle d'Aosta","Lombardia","Trento","Bolzano","Veneto","Friuli-Venezia Giulia","Liguria","Emilia-Romagna","Toscana","Umbria","Marche","Lazio","Abruzzo","Molise","Campania","Puglia","Basilicata","Calabria","Sicilia","Sardegna"];
const SOGLIA={"Puglia":13000,"Campania":13300,"Marche":13500,"Calabria":14365,"Sicilia":15000,"Lazio":15493.71,"Umbria":15493.71,"Abruzzo":15493.71,"Piemonte":15748.78,"Lombardia":15748.78,"Veneto":15748.78,"Emilia-Romagna":15748.78,"Molise":15748.78,"Basilicata":15748.78,"Toscana":15800,"Sardegna":20000,"Friuli-Venezia Giulia":35000,"Liguria":50000};
const COMODATO={"Valle d'Aosta":1,"Trento":1,"Bolzano":1};
const FISSO=new Set(["Piemonte","Lombardia","Veneto","Toscana","Molise","Sardegna","Friuli-Venezia Giulia","Liguria"]);
function aiuto(reg,isee,sup,c,libri){
  if(reg==="Valle d'Aosta") return {k:'com',v:libri,t:"Libri gratuiti dalla Regione"};
  if(reg==="Bolzano") return {k:'com',v:libri,t:"Libri in comodato dalla Provincia"};
  if(reg==="Trento") return (!sup||c<=2)?{k:'com',v:libri,t:"Libri in comodato dalla Provincia"}:{k:'no',t:"Dal terzo anno i libri sono a carico della famiglia"};
  const s=SOGLIA[reg]; if(isee>s) return {k:'no',t:`Nessun aiuto: la soglia è ${eur(s)} euro di Isee`};
  const ob=!sup||c<=2;
  switch(reg){
    case "Piemonte": return {k:'fix',v:sup?(isee<=4000?500:isee<=9000?300:200):(isee<=4000?300:isee<=9000?200:100),t:"Voucher scuola"};
    case "Lombardia": return {k:'fix',v:500,t:"Dote scuola, da 150 a 500 euro",upto:1};
    case "Veneto": return {k:'fix',v:isee<=10632.94?200:150,t:"Buono libri",upto:1};
    case "Toscana": return {k:'fix',v:sup?({1:348,2:204,3:348,4:251,5:251})[c]:({1:309,2:137,3:137})[c],t:"Libri gratis, importo per classe"};
    case "Molise": return {k:'fix',v:ob?(isee<=10632.94?300:isee<=13800?240:180):(isee<=10632.94?250:isee<=13800?190:130),t:"Buono libri"};
    case "Sardegna": return {k:'fix',v:((!sup&&c===1)||(sup&&(c===1||c===3)))?250:150,t:"Buono libri",upto:1};
    case "Friuli-Venezia Giulia": return {k:'fix',v:ob?250:400,t:"Dote scuola, per tutte le spese"};
    case "Liguria": {const p=isee<30000?.6:isee<=40000?.55:.5; return {k:'fix',v:Math.min(sup?1100:800,Math.round(libri*p*100)/100),t:`Borsa libri, ${f0(p*100)}% della spesa`};}
  }
  return {k:'var',t:`Contributo deciso dopo le domande (Isee entro ${eur(s)} euro)`};
}
const statoReg=(reg,isee)=>COMODATO[reg]?'com':isee<=SOGLIA[reg]?(FISSO.has(reg)?'fix':'var'):'no';
const SC={com:'--blue-1',fix:'--blue-2',var:'--blue-4',no:'--grey-5'};
const SL={com:'Libri gratis o in comodato per tutti',fix:'Contributo con importo fisso',var:'Contributo variabile',no:'Nessun aiuto'};



/* ---------- caricamento dei dati dai CSV in data/ ---------- */
const Costi = {
  load(opts){
    const N=Radar.num, base='../data/';
    const jobs=[Radar.loadCSV(base+'tetti_libri_2026_27.csv'),Radar.loadCSV(base+'fondo_libri_2026_27.csv'),Radar.loadCSV(base+'prezzi_mensili_2026.csv'),Radar.loadCSV(base+'prezzi_annuali_2015_2025.csv'),Radar.loadCSV(base+'parametri.csv')];
    if(opts&&opts.geo) jobs.push(fetch(base+'regioni.geojson',{cache:'no-cache'}).then(r=>{ if(!r.ok) throw new Error('Mappa non trovata'); return r.json(); }));
    return Promise.all(jobs).then(([te,f9,me,an,pa,geo])=>{
      const mesi=Object.keys(me[0]).filter(k=>k!=='Voce');
      const P={}; pa.forEach(r=>P[r['Voce']]=N(r['Valore']));
      return {
        tetti: te.map(r=>({grado:r['Grado'],tipo:r['Tipo'],ind:r['Indirizzo'],v:['I','II','III','IV','V'].map(k=>N(r[k]))})),
        f9: f9.map(r=>({reg:r['Regione'],fam:N(r['Famiglie sotto la soglia di reddito (%)']),stud:N(r['Studenti medie e superiori']),tot:N(r['Fondo statale libri (euro)'])})),
        mesi, mens: Object.fromEntries(me.map(r=>[r['Voce'],mesi.map(m=>N(r[m]))])),
        ann: an.map(r=>({a:+r['Anno'],g:N(r['Indice generale']),l:N(r['Libri di testo'])})),
        P: { corredo:P['Corredo scolastico per alunno, tutto nuovo'], gita:P['Gita con pernottamento, costo medio'], fondo27:P['Fondo nazionale libri dal 2027'], platea:P['Platea stimata dal 2027'], spesa1sup:P['Spesa media per i libri di una prima superiore'] },
        geo21: geo
      };
    });
  }
};
