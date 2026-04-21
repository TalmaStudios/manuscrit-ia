
// ════════════════════════════════
// CONFIGURATION DES LANGUES
// ════════════════════════════════
window.LANGS = {
  fr: { label: '🇫🇷 Français', name: 'français', nameEn: 'French',
    rules: [
      { id:'guillemets', label:'Guillemets', type:'select', options:[{value:'francais',label:'« … »'},{value:'anglais',label:'" … "'}]},
      { id:'tirets', label:'Tirets de dialogue', type:'select', options:[{value:'cadratin',label:'— cadratin'},{value:'demi',label:'– demi-cadratin'}]},
      { id:'suspension', label:'Points de suspension', type:'select', options:[{value:'typographique',label:'… (unique)'},{value:'trois',label:'... (trois points)'}]},
      { id:'espaces', label:'Espaces fines (: ; ! ?)', type:'select', options:[{value:'oui',label:'Oui'},{value:'non',label:'Non'}]},
      { id:'nombres', label:'Nombres < 10', type:'select', options:[{value:'lettres',label:'En toutes lettres'},{value:'chiffres',label:'En chiffres'}]},
      { id:'majuscules', label:'Majuscules après point', type:'checkbox', default:true}
    ],
    extra:'Guillemets « … » avec espaces fines. Tiret cadratin pour les dialogues. Règles de l\'Imprimerie nationale.'
  },
  en: { label:'🇬🇧 Anglais', name:'anglais / English', nameEn:'English',
    rules:[
      { id:'guillemets', label:'Quotation marks', type:'select', options:[{value:'double',label:'"…" double'},{value:'single',label:"'…' single"}]},
      { id:'dialect', label:'Variante', type:'select', options:[{value:'uk',label:'British English'},{value:'us',label:'American English'}]},
      { id:'tirets', label:'Dashes', type:'select', options:[{value:'em',label:'— em dash'},{value:'en',label:'– en dash'}]},
      { id:'nombres', label:'Numbers < 10', type:'select', options:[{value:'lettres',label:'In words'},{value:'chiffres',label:'In digits'}]}
    ],
    extra:'Oxford comma. Curly quotes. Respect British/American spelling.'
  },
  de: { label:'🇩🇪 Allemand', name:'allemand / Deutsch', nameEn:'German',
    rules:[
      { id:'guillemets', label:'Anführungszeichen', type:'select', options:[{value:'deutsch',label:'„…"'},{value:'guillemets',label:'»…«'}]},
      { id:'tirets', label:'Gedankenstrich', type:'select', options:[{value:'halbgeviert',label:'–'},{value:'geviert',label:'—'}]},
      { id:'rechtschreibung', label:'Rechtschreibung', type:'select', options:[{value:'neu',label:'Neue (1996+)'},{value:'alt',label:'Alte'}]},
      { id:'ss', label:'ß / ss', type:'select', options:[{value:'ss_regel',label:'Règle ß standard'},{value:'ss_only',label:'ss (Suisse)'}]}
    ],
    extra:'Majuscule pour tous les noms. Anführungszeichen „unten-oben". Gedankenstrich avec espaces.'
  },
  es: { label:'🇪🇸 Espagnol', name:'espagnol / español', nameEn:'Spanish',
    rules:[
      { id:'guillemets', label:'Comillas', type:'select', options:[{value:'angulares',label:'«…» España'},{value:'dobles',label:'"…" América'}]},
      { id:'tirets', label:'Raya', type:'select', options:[{value:'raya',label:'— raya'},{value:'guion',label:'- guion'}]},
      { id:'dialect', label:'Variante', type:'select', options:[{value:'espana',label:'España'},{value:'america',label:'América Latina'}]},
      { id:'interrogacion', label:'¿ ¡ initiaux', type:'select', options:[{value:'oui',label:'Oui ¿…? ¡…!'},{value:'non',label:'Non'}]}
    ],
    extra:'¿…? et ¡…! obligatoires. Raya pour les dialogues. Règles RAE.'
  },
  it: { label:'🇮🇹 Italien', name:'italien / italiano', nameEn:'Italian',
    rules:[
      { id:'guillemets', label:'Virgolette', type:'select', options:[{value:'angolari',label:'«…»'},{value:'doppie',label:'"…"'}]},
      { id:'tirets', label:'Lineetta', type:'select', options:[{value:'lungo',label:'—'},{value:'medio',label:'–'}]},
      { id:'apostrofo', label:'Apostrophe', type:'select', options:[{value:'typographique',label:"' typographique"},{value:'droit',label:"' droit"}]}
    ],
    extra:'Virgolette basse «». Lineetta pour les dialogues. Apostrophe typographique.'
  },
  pt: { label:'🇵🇹 Portugais', name:'portugais / português', nameEn:'Portuguese',
    rules:[
      { id:'guillemets', label:'Aspas', type:'select', options:[{value:'angulares',label:'«…» Portugal'},{value:'duplas',label:'"…" Brasil'}]},
      { id:'dialect', label:'Variante', type:'select', options:[{value:'pt',label:'Européen'},{value:'br',label:'Brésilien'}]},
      { id:'tirets', label:'Travessão', type:'select', options:[{value:'longo',label:'—'},{value:'medio',label:'–'}]}
    ],
    extra:'Accord Ortográfico 1990. Travessão pour les dialogues.'
  },
  ru: { label:'🇷🇺 Russe', name:'russe / русский', nameEn:'Russian',
    rules:[
      { id:'guillemets', label:'Кавычки', type:'select', options:[{value:'elochki',label:'«…» ёлочки'},{value:'lapki',label:'„…" лапки'}]},
      { id:'tirets', label:'Тире', type:'select', options:[{value:'long',label:'—'},{value:'court',label:'–'}]},
      { id:'yo', label:'Lettre ё', type:'select', options:[{value:'obligatoire',label:'ё obligatoire'},{value:'optionnel',label:'е acceptable'}]}
    ],
    extra:'Guillemets «ёлочки». Tiret long pour les dialogues. Règle sur ё.'
  },
  zh: { label:'🇨🇳 Chinois', name:'chinois / 中文', nameEn:'Chinese',
    rules:[
      { id:'script', label:'Caractères', type:'select', options:[{value:'simplifie',label:'简体 Simplifié'},{value:'traditionnel',label:'繁體 Traditionnel'}]},
      { id:'guillemets', label:'引号', type:'select', options:[{value:'chinois',label:'「…」'},{value:'occidental',label:'"…"'}]},
      { id:'ponctuation', label:'Ponctuation', type:'select', options:[{value:'cn',label:'Standard 。，！？'},{value:'mixte',label:'Mixte'}]}
    ],
    extra:'Ponctuation pleine largeur 。，！？。Guillemets 「…」. Pas d\'espace entre caractères.'
  },
  ja: { label:'🇯🇵 Japonais', name:'japonais / 日本語', nameEn:'Japanese',
    rules:[
      { id:'script', label:'Écriture', type:'select', options:[{value:'standard',label:'Kanji+Kana standard'},{value:'furigana',label:'Avec furigana'}]},
      { id:'guillemets', label:'引用符', type:'select', options:[{value:'japonais',label:'「…」'},{value:'occidental',label:'"…"'}]},
      { id:'keigo', label:'Politesse', type:'select', options:[{value:'maintenir',label:'Maintenir l\'existant'},{value:'unifier',label:'Unifier (teineigo)'}]}
    ],
    extra:'Ponctuation japonaise 。、！？。Dialogues 「…」. Respect du keigo.'
  }
};

// ════════════════════════════════
// ÉTAT GLOBAL
// ════════════════════════════════
window.currentMode = 'correct';
window.sourceLang = 'fr';
window.targetLangs = [];
window.results = {}; // { panelId: { type:'correct'|'translate', lang, clean, diff, diffMode, stats, footnotes } }
window.originalText = '';
window.richInputHtml = ''; // HTML enrichi conservant gras/italique du fichier source
window.inputFootnotes = {}; // { 1: "texte de la note", 2: "..." } — notes de bas de page du fichier source

// ════════════════════════════════
// INIT
// ════════════════════════════════
document.addEventListener('DOMContentLoaded', () => {
  renderTypoRules('fr');
  syncTargetGrid();
});

// ════════════════════════════════
// MODE
// ════════════════════════════════
window.setMode = function(mode) {
  currentMode = mode;
  document.getElementById('modeBtn-correct').classList.toggle('active', mode==='correct');
  document.getElementById('modeBtn-translate').classList.toggle('active', mode==='translate');
  document.getElementById('panel-correct-options').classList.toggle('active', mode==='correct');
  document.getElementById('panel-translate-options').classList.toggle('active', mode==='translate');
  const btn = document.getElementById('btn-action');
  if (mode==='correct') { btn.textContent='✦ Corriger'; btn.className='btn btn-primary'; }
  else { btn.textContent='⟳ Traduire'; btn.className='btn btn-purple'; }
}

// ════════════════════════════════
// LANGUE SOURCE
// ════════════════════════════════
window.selectSourceLang = function(btn) {
  document.querySelectorAll('#source-lang-grid .lang-btn').forEach(b=>b.classList.remove('selected'));
  btn.classList.add('selected');
  sourceLang = btn.dataset.lang;
  renderTypoRules(sourceLang);
  syncTargetGrid();
  notify(`Langue source : ${LANGS[sourceLang].label}`, 'info', 1800);
}

window.syncTargetGrid = function() {
  // Désactiver la langue source dans les cibles
  document.querySelectorAll('#target-lang-grid .lang-btn').forEach(b => {
    if (b.dataset.lang === sourceLang) {
      b.disabled = true; b.style.opacity='0.3'; b.classList.remove('target-selected');
      targetLangs = targetLangs.filter(l=>l!==sourceLang);
    } else {
      b.disabled = false; b.style.opacity='';
    }
  });
}

// ════════════════════════════════
// LANGUE CIBLE (multiselect)
// ════════════════════════════════
window.toggleTargetLang = function(btn) {
  if (btn.disabled) return;
  const lang = btn.dataset.lang;
  if (btn.classList.contains('target-selected')) {
    btn.classList.remove('target-selected');
    targetLangs = targetLangs.filter(l=>l!==lang);
  } else {
    btn.classList.add('target-selected');
    if (!targetLangs.includes(lang)) targetLangs.push(lang);
  }
}

// ════════════════════════════════
// RÈGLES TYPO
// ════════════════════════════════
window.renderTypoRules = function(lang) {
  const rules = LANGS[lang].rules;
  const container = document.getElementById('typo-rules-content');
  container.innerHTML = '';
  rules.forEach(rule => {
    const lbl = document.createElement('label');
    lbl.textContent = rule.label;
    container.appendChild(lbl);
    if (rule.type === 'select') {
      const sel = document.createElement('select');
      sel.id = `rule-${rule.id}`;
      rule.options.forEach(opt => {
        const o = document.createElement('option');
        o.value = opt.value; o.textContent = opt.label; sel.appendChild(o);
      });
      container.appendChild(sel);
    } else if (rule.type === 'checkbox') {
      const wrap = document.createElement('div');
      wrap.className = 'checkbox-row'; wrap.style.marginTop='4px';
      const cb = document.createElement('input'); cb.type='checkbox'; cb.id=`rule-${rule.id}`; cb.checked=rule.default!==false;
      const lb = document.createElement('label'); lb.htmlFor=`rule-${rule.id}`; lb.style.cssText='margin:0;color:#c8b99a;font-size:0.78rem;'; lb.textContent=rule.label;
      wrap.appendChild(cb); wrap.appendChild(lb); container.appendChild(wrap);
    }
  });
}

window.getTypoRulesText = function(lang) {
  const rules = LANGS[lang].rules;
  let txt = '';
  rules.forEach(rule => {
    const el = document.getElementById(`rule-${rule.id}`);
    if (!el) return;
    if (rule.type==='select') { const sel=rule.options.find(o=>o.value===el.value); txt+=`- ${rule.label} : ${sel?sel.label:el.value}\n`; }
    else if (rule.type==='checkbox') { txt+=`- ${rule.label} : ${el.checked?'oui':'non'}\n`; }
  });
  return txt;
}

// ════════════════════════════════
// UI UTILS
// ════════════════════════════════
window.notify = function(msg, type='info', duration=4000) {
  const el=document.createElement('div'); el.className=`notif-item ${type}`; el.textContent=msg;
  document.getElementById('notif').appendChild(el); setTimeout(()=>el.remove(),duration);
}
window.showProgress = function(title,msg,chunk='') {
  document.getElementById('progress-overlay').classList.add('show');
  document.getElementById('progress-title').textContent=title;
  document.getElementById('progress-msg').textContent=msg;
  document.getElementById('chunk-info').textContent=chunk;
}
window.hideProgress = function() { document.getElementById('progress-overlay').classList.remove('show'); }

window.updateCount = function() {
  const txt=document.getElementById('manuscript-input').value;
  document.getElementById('char-count').textContent=txt.length.toLocaleString('fr');
  document.getElementById('word-count').textContent=txt.trim()?txt.trim().split(/\s+/).length.toLocaleString('fr'):0;
}
window.clearInput = function() {
  document.getElementById('manuscript-input').value='';
  richInputHtml='';
  inputFootnotes={};
  updateCount();
}

window.loadFile = function(e) {
  const f=e.target.files[0]; if(!f) return;
  const ext=f.name.split('.').pop().toLowerCase();

  if(ext==='docx') {
    const reader=new FileReader();
    reader.onload=async ev=>{
      try {
        if(typeof mammoth==='undefined') throw new Error('Bibliothèque mammoth non chargée.');
        const arrayBuffer=ev.target.result;

        // 1. HTML enrichi (gras, italique, appels de notes sous forme <sup data-fn="N">N</sup>)
        const htmlResult=await mammoth.convertToHtml({arrayBuffer, options:{
          styleMap: [
            "b => b",
            "i => i",
            "u => u"
          ]
        }});
        richInputHtml=htmlResult.value;

        // 2. Extraire les footnotes via les messages de mammoth ou via le XML brut
        inputFootnotes = await extractDocxFootnotes(arrayBuffer);

        // 3. Texte avec marqueurs pour l'IA
        const plainWithMarkers = htmlToMarkedText(richInputHtml, inputFootnotes);
        document.getElementById('manuscript-input').value=plainWithMarkers;
        updateCount();
        const fnCount=Object.keys(inputFootnotes).length;
        notify(`Fichier .docx chargé${fnCount>0?` — ${fnCount} note(s) de bas de page détectée(s)`:''}  : ${f.name}`,'success',5000);
      } catch(err){ notify('Erreur lecture .docx : '+err.message,'error',6000); }
    };
    reader.readAsArrayBuffer(f);

  } else if(ext==='odt') {
    const reader=new FileReader();
    reader.onload=async ev=>{
      try {
        await loadJSZip();
        const zip=await JSZip.loadAsync(ev.target.result);
        const contentXml=await zip.file('content.xml').async('string');
        let stylesXml='';
        if(zip.file('styles.xml')) stylesXml=await zip.file('styles.xml').async('string');
        const {html, footnotes} = odtToHtml(contentXml, stylesXml);
        richInputHtml=html;
        inputFootnotes=footnotes;
        const plainWithMarkers=htmlToMarkedText(html, footnotes);
        document.getElementById('manuscript-input').value=plainWithMarkers;
        updateCount();
        const fnCount=Object.keys(footnotes).length;
        notify(`Fichier .odt chargé${fnCount>0?` — ${fnCount} note(s) de bas de page`:''}  : ${f.name}`,'success',5000);
      } catch(err){ notify('Erreur lecture .odt : '+err.message,'error',6000); }
    };
    reader.readAsArrayBuffer(f);

  } else {
    richInputHtml='';
    inputFootnotes={};
    const reader=new FileReader();
    reader.onload=ev=>{
      document.getElementById('manuscript-input').value=ev.target.result;
      updateCount();
      notify(`Fichier chargé : ${f.name}`,'success');
    };
    reader.readAsText(f,'UTF-8');
  }
  e.target.value='';
}

// Extraire les footnotes d'un .docx en dézippant le XML
window.extractDocxFootnotes = async function(arrayBuffer) {
  const footnotes={};
  try {
    await loadJSZip();
    const zip=await JSZip.loadAsync(arrayBuffer);
    const fnFile=zip.file('word/footnotes.xml');
    if(!fnFile) return footnotes;
    const xml=await fnFile.async('string');
    const parser=new DOMParser();
    const xmlDoc=parser.parseFromString(xml,'text/xml');
    // <w:footnote w:id="N"> contient <w:p><w:r><w:t>texte</w:t>
    xmlDoc.querySelectorAll('w\\:footnote').forEach(fn=>{
      const id=fn.getAttribute('w:id');
      if(!id||id==='0'||id==='-1') return; // id 0 et -1 = séparateur/continuation
      // Extraire texte brut (avec gras/italique)
      const text = extractDocxRunText(fn);
      if(text.trim()) footnotes[id]=text.trim();
    });
  } catch(e){ console.warn('Footnotes extraction error:', e); }
  return footnotes;
}

// Extraire le texte d'un nœud XML Word avec marqueurs **gras** *italique*
window.extractDocxRunText = function(node) {
  let result='';
  node.querySelectorAll('w\\:r').forEach(run=>{
    const rPr=run.querySelector('w\\:rPr');
    const isBold=rPr&&rPr.querySelector('w\\:b')&&!rPr.querySelector('w\\:b[w\\:val="false"]');
    const isItalic=rPr&&rPr.querySelector('w\\:i')&&!rPr.querySelector('w\\:i[w\\:val="false"]');
    const tNodes=run.querySelectorAll('w\\:t');
    let txt='';
    tNodes.forEach(t=>txt+=t.textContent);
    if(!txt) return;
    if(isBold&&isItalic) result+=`***${txt}***`;
    else if(isBold) result+=`**${txt}**`;
    else if(isItalic) result+=`*${txt}*`;
    else result+=txt;
  });
  return result;
}

// Convertit le HTML enrichi en texte avec marqueurs **gras**, *italique* et [FN:N]
window.htmlToMarkedText = function(html, footnotes={}) {
  const div=document.createElement('div');
  div.innerHTML=html;
  function walk(node) {
    if(node.nodeType===3) return node.textContent;
    const tag=node.tagName?node.tagName.toLowerCase():'';
    const inner=Array.from(node.childNodes).map(walk).join('');
    if(tag==='strong'||tag==='b') return `**${inner}**`;
    if(tag==='em'||tag==='i') return `*${inner}*`;
    if(tag==='sup'&&node.dataset&&node.dataset.fn) return `[FN:${node.dataset.fn}]`;
    if(tag==='p'||tag==='div'||tag==='h1'||tag==='h2'||tag==='h3'||tag==='h4') return inner+'\n\n';
    if(tag==='br') return '\n';
    return inner;
  }
  let text=walk(div).replace(/\n{3,}/g,'\n\n').trim();
  // Ajouter les notes en fin de texte sous forme lisible par l'IA
  const fnKeys=Object.keys(footnotes);
  if(fnKeys.length>0){
    text+='\n\n---NOTES DE BAS DE PAGE---\n';
    fnKeys.forEach(k=>{ text+=`[FN:${k}] ${footnotes[k]}\n`; });
  }
  return text;
}

// Convertit content.xml ODF en HTML + extrait les footnotes
window.odtToHtml = function(contentXml, stylesXml) {
  const parser=new DOMParser();
  const xmlDoc=parser.parseFromString(contentXml,'text/xml');
  const footnotes={};
  let fnCounter=1;

  // Styles
  const styleMap={};
  xmlDoc.querySelectorAll('text\\:style, style\\:style').forEach(s=>{
    const name=s.getAttribute('style:name')||s.getAttribute('text:name')||'';
    const tp=s.querySelector('text\\:properties, style\\:text-properties');
    if(tp){ styleMap[name]={ bold:tp.getAttribute('fo:font-weight')==='bold', italic:tp.getAttribute('fo:font-style')==='italic' }; }
  });

  let html='';
  const paras=xmlDoc.querySelectorAll('text\\:p, text\\:h');
  paras.forEach(para=>{
    let paraHtml='';
    function processOdtNode(node){
      if(node.nodeType===3){paraHtml+=escapeHtml(node.textContent);return;}
      const tag=node.nodeName;
      if(tag==='text:line-break'){paraHtml+='<br>';return;}
      if(tag==='text:s'){const c=parseInt(node.getAttribute('text:c')||'1');paraHtml+='&nbsp;'.repeat(c);return;}
      if(tag==='text:tab'){paraHtml+='&nbsp;&nbsp;&nbsp;&nbsp;';return;}
      // Note de bas de page ODF
      if(tag==='text:note'){
        const noteClass=node.getAttribute('text:note-class')||'footnote';
        if(noteClass==='footnote'||noteClass==='endnote'){
          const bodyNode=node.querySelector('text\\:note-body');
          if(bodyNode){
            // Extraire texte de la note
            let noteText='';
            const noteParts=bodyNode.querySelectorAll('text\\:p, text\\:h');
            if(noteParts.length>0){
              noteParts.forEach(np=>{
                // Texte brut avec marqueurs gras/italique
                function extractNoteText(n){
                  if(n.nodeType===3) return n.textContent;
                  const t=n.nodeName;
                  const inner2=Array.from(n.childNodes).map(extractNoteText).join('');
                  if(t==='text:span'){
                    const st=styleMap[n.getAttribute('text:style-name')||'']||{};
                    if(st.bold&&st.italic) return `***${inner2}***`;
                    if(st.bold) return `**${inner2}**`;
                    if(st.italic) return `*${inner2}*`;
                  }
                  return inner2;
                }
                noteText+=extractNoteText(np)+' ';
              });
            } else {
              noteText=bodyNode.textContent;
            }
            const fnId=String(fnCounter++);
            footnotes[fnId]=noteText.trim();
            paraHtml+=`<sup data-fn="${fnId}">${fnId}</sup>`;
          }
        }
        return;
      }
      if(tag==='text:span'){
        const styleName=node.getAttribute('text:style-name')||'';
        const st=styleMap[styleName]||{};
        let open='',close='';
        if(st.bold){open+='<strong>';close='</strong>'+close;}
        if(st.italic){open+='<em>';close='</em>'+close;}
        const savedHtml=paraHtml; paraHtml='';
        Array.from(node.childNodes).forEach(processOdtNode);
        const innerHtml=paraHtml; paraHtml=savedHtml;
        paraHtml+=open+innerHtml+close;
        return;
      }
      Array.from(node.childNodes).forEach(processOdtNode);
    }
    Array.from(para.childNodes).forEach(processOdtNode);
    html+=`<p>${paraHtml}</p>\n`;
  });
  return {html, footnotes};
}

// Chargement à la demande de JSZip pour les .odt
window.loadJSZip = function() {
  return new Promise((resolve,reject)=>{
    if(typeof JSZip!=='undefined'){resolve();return;}
    const s=document.createElement('script');
    s.src='https://cdnjs.cloudflare.com/ajax/libs/jszip/3.10.1/jszip.min.js';
    s.onload=resolve; s.onerror=()=>reject(new Error('Impossible de charger JSZip'));
    document.head.appendChild(s);
  });
}
window.toggleKey = function() { const i=document.getElementById('api-key'); i.type=i.type==='password'?'text':'password'; }
window.escapeHtml = function(t) { return t.replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;'); }

// ════════════════════════════════
// ONGLETS
// ════════════════════════════════
window.switchTab = function(tabEl) {
  document.querySelectorAll('.tab').forEach(t=>t.classList.remove('active'));
  document.querySelectorAll('.panel').forEach(p=>p.classList.remove('active'));
  tabEl.classList.add('active');
  const panelId = tabEl.dataset.panel;
  const panel = document.getElementById(panelId);
  if (panel) panel.classList.add('active');
}

window.createResultTab = function(panelId, label, isTranslation=false) {
  const tabsBar = document.getElementById('tabs-bar');
  // Supprimer onglet existant si même id
  const existing = tabsBar.querySelector(`[data-panel="${panelId}"]`);
  if (existing) existing.remove();

  const tab = document.createElement('div');
  tab.className = 'tab' + (isTranslation?' purple':'');
  tab.dataset.panel = panelId;
  tab.innerHTML = `${isTranslation?'⟳':'✦'} ${label}`;
  tab.onclick = () => switchTab(tab);
  tabsBar.appendChild(tab);
  return tab;
}

window.createResultPanel = function(panelId, isTranslation=false) {
  const main = document.querySelector('main');
  let panel = document.getElementById(panelId);
  if (panel) panel.remove();

  panel = document.createElement('div');
  panel.id = panelId;
  panel.className = 'panel';
  panel.innerHTML = `
    <div class="output-toolbar">
      <button class="btn btn-ghost" style="color:var(--ink);border-color:var(--rule);font-size:0.75rem" onclick="toggleDiff('${panelId}')">🔀 Vue propre / diff</button>
      ${isTranslation ? `<button class="btn btn-ghost" style="color:var(--ink);border-color:var(--rule);font-size:0.75rem;border-color:var(--purple);color:var(--purple)" onclick="corrigerTraduction('${panelId}')">✦ Corriger cette traduction</button>` : ''}
      <div class="legend">
        <div class="legend-item"><div class="legend-dot" style="background:var(--red)"></div>Suppression</div>
        <div class="legend-item"><div class="legend-dot" style="background:var(--green)"></div>Ajout</div>
        <div class="legend-item"><div class="legend-dot" style="background:var(--blue)"></div>Style</div>
        <div class="legend-item"><div class="legend-dot" style="background:var(--gold)"></div>Note</div>
      </div>
    </div>
    <div class="output-content" id="content-${panelId}"></div>
    <div class="stats-bar">
      <div class="stat">Total : <strong id="stat-total-${panelId}">—</strong></div>
      <div class="stat">Orthographe : <strong id="stat-ortho-${panelId}">—</strong></div>
      <div class="stat">Typographie : <strong id="stat-typo-${panelId}">—</strong></div>
      <div class="stat">Style : <strong id="stat-style-${panelId}">—</strong></div>
    </div>`;
  main.appendChild(panel);
  return panel;
}

window.renderPanel = function(panelId) {
  const r = results[panelId]; if(!r) return;
  const el = document.getElementById(`content-${panelId}`);
  if (!el) return;
  if(r.diffMode) {
    // Mode diff : afficher le HTML annoté tel quel
    el.innerHTML = r.diff;
  } else {
    // Mode texte propre : convertir les marqueurs **gras** *italique* en HTML
    el.innerHTML = markersToHtml(r.clean);
  }
}

// Convertit les marqueurs **gras**, *italique*, ***gras+italique*** en balises HTML
// et les sauts de ligne en <br> pour l'affichage
window.markersToHtml = function(text) {
  // Échapper d'abord le HTML sauf les marqueurs
  let t = escapeHtml(text);
  // Convertir les marqueurs (après échappement, * n'est pas altéré)
  t = t.replace(/\*\*\*(.+?)\*\*\*/gs, '<strong><em>$1</em></strong>');
  t = t.replace(/\*\*(.+?)\*\*/gs, '<strong>$1</strong>');
  t = t.replace(/\*(.+?)\*/gs, '<em>$1</em>');
  // Sauts de ligne → <br>
  t = t.replace(/\n/g, '<br>');
  return t;
}

window.toggleDiff = function(panelId) {
  const r = results[panelId]; if(!r) return;
  r.diffMode = !r.diffMode;
  renderPanel(panelId);
  notify(r.diffMode?'Suivi des modifications':'Texte propre','info',1800);
}

// ════════════════════════════════
// CHUNKS
// ════════════════════════════════
window.splitChunks = function(text, max=1800) {
  // Découpage d'abord par double saut de ligne (paragraphes)
  const paras = text.split(/\n\n+/);
  const chunks=[]; let cur='';
  for(const p of paras){
    // Si un seul paragraphe dépasse max, le couper par phrases
    if(p.length > max) {
      if(cur){chunks.push(cur.trim());cur='';}
      const phrases = p.split(/(?<=[.!?…»])\s+/);
      let sub='';
      for(const ph of phrases){
        if((sub+' '+ph).length > max && sub){
          chunks.push(sub.trim()); sub=ph;
        } else { sub=sub?sub+' '+ph:ph; }
      }
      if(sub.trim()) chunks.push(sub.trim());
    } else if((cur+'\n\n'+p).length > max && cur){
      chunks.push(cur.trim()); cur=p;
    } else {
      cur=cur?cur+'\n\n'+p:p;
    }
  }
  if(cur.trim()) chunks.push(cur.trim());
  return chunks;
}

// ════════════════════════════════
// APPEL API (avec retry)
// ════════════════════════════════
window.callClaude = async function(text, systemPrompt, attempt=1) {
  const apiKey = document.getElementById('api-key').value.trim();
  if(!apiKey) throw new Error('Clé API manquante. Veuillez la saisir dans le panneau gauche.');

  let res;
  try {
    res = await fetch('https://api.anthropic.com/v1/messages', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'x-api-key': apiKey,
        'anthropic-version': '2023-06-01',
        'anthropic-dangerous-direct-browser-access': 'true'
      },
      body: JSON.stringify({
        model: 'claude-sonnet-4-20250514',
        max_tokens: 4096,
        system: systemPrompt,
        messages: [{role:'user', content:`Text:\n\n${text}`}]
      })
    });
  } catch(networkErr) {
    if(attempt < 3) {
      notify(`Erreur réseau, nouvelle tentative ${attempt}/3…`, 'info', 3000);
      await sleep(2000 * attempt);
      return callClaude(text, systemPrompt, attempt+1);
    }
    throw new Error(`Erreur réseau après 3 tentatives : ${networkErr.message}. Vérifiez votre connexion internet.`);
  }

  // Erreurs HTTP
  if(!res.ok) {
    const errBody = await res.json().catch(()=>({}));
    const errMsg = errBody?.error?.message || '';
    const status = res.status;

    if(status === 401) throw new Error('Clé API invalide ou expirée. Vérifiez votre clé sur console.anthropic.com.');
    if(status === 429) {
      if(attempt < 3) {
        notify(`Limite de débit atteinte, attente avant réessai ${attempt}/3…`, 'info', 4000);
        await sleep(5000 * attempt);
        return callClaude(text, systemPrompt, attempt+1);
      }
      throw new Error('Limite de débit API dépassée. Attendez quelques secondes et réessayez.');
    }
    if(status === 529 || status === 500 || status === 503) {
      if(attempt < 3) {
        notify(`Serveur temporairement indisponible, réessai ${attempt}/3…`, 'info', 4000);
        await sleep(3000 * attempt);
        return callClaude(text, systemPrompt, attempt+1);
      }
      throw new Error(`Serveur Anthropic indisponible (${status}). Réessayez dans quelques instants.`);
    }
    throw new Error(`Erreur API ${status}${errMsg ? ' : ' + errMsg : ''}`);
  }

  const data = await res.json();
  const raw = data.content.map(b=>b.text||'').join('');

  // Nettoyer les éventuels blocs ```json
  const cleaned = raw.replace(/```json\s*/gi,'').replace(/```\s*/g,'').trim();

  // Tentative de parsing JSON
  try {
    return JSON.parse(cleaned);
  } catch(parseErr) {
    // Tentative de récupération : extraire le JSON entre { et } si présent
    const match = cleaned.match(/\{[\s\S]*\}/);
    if(match) {
      try { return JSON.parse(match[0]); } catch{}
    }
    // Si on peut encore réessayer, on renvoie avec un fragment plus court
    if(attempt < 3) {
      notify(`Réponse mal formée, nouvelle tentative ${attempt}/3…`, 'info', 3000);
      await sleep(1500);
      return callClaude(text, systemPrompt, attempt+1);
    }
    // Dernier recours : retourner le texte brut sans diff
    console.error('JSON non parsable :', cleaned.slice(0,200));
    return {
      diff: escapeHtml(text),
      clean: text,
      stats: {ortho:0, typo:0, style:0}
    };
  }
}

window.sleep = function(ms){ return new Promise(r=>setTimeout(r,ms)); }

// ════════════════════════════════
// PROMPT CORRECTION
// ════════════════════════════════
window.buildCorrectPrompt = function(lang) {
  const style=document.getElementById('rule-style').value;
  const custom=document.getElementById('rule-custom').value.trim();
  const optOrtho=document.getElementById('opt-ortho').checked;
  const optTypo=document.getElementById('opt-typo').checked;
  const optStyle=document.getElementById('opt-style').checked;
  const optComments=document.getElementById('opt-comments').checked;
  const typo=getTypoRulesText(lang);
  return `You are a professional editorial proofreader for ${LANGS[lang].name}.
All corrections must be in ${LANGS[lang].name}.

TYPOGRAPHIC RULES:\n${typo}\n${LANGS[lang].extra}
STYLE: ${style}
${custom?`SPECIAL INSTRUCTIONS:\n${custom}`:''}

CORRECTIONS:
${optOrtho?`- Spelling, grammar, agreement`:''}
${optTypo?`- Typography`:''}
${optStyle?`- Style improvements (light, respect author's voice)`:''}
${optComments?`- Editorial notes [NOTE: ...]`:''}
${lang==='fr'?`- Accented capital letters: ensure all French capitals carry their accent (É not E, À not A, Ê not E, Î not I, Ô not O, Û not U, Ù not U, Ë not E, Ï not I, Ç not C) — this is mandatory in French typography`:''}

RESPONSE FORMAT — return ONLY valid JSON, no markdown:
{"diff":"HTML with correction tags","clean":"corrected text","stats":{"ortho":N,"typo":N,"style":N}}

HTML tags: <del class="diff-del">old</del><ins class="diff-ins">new</ins> for corrections, <mark class="diff-style">text</mark> for style, <span class="diff-comment">[NOTE: ...]</span> for notes.
CRITICAL:
- Preserve ALL paragraph breaks AND all **bold** and *italic* markers exactly.
- Preserve ALL [FN:N] footnote reference markers in place — never move or delete them.
- Preserve ALL non-breaking thin spaces (U+202F) before : ; ! ? % and inside « » — do not replace them with regular spaces.
- If the text ends with a ---NOTES DE BAS DE PAGE--- section, correct the footnote texts too and return them in the same format at the end of the "clean" field.`;
}

// ════════════════════════════════
// PROMPT TRADUCTION
// ════════════════════════════════
window.buildTranslatePrompt = function(sourceLangCode, targetLangCode) {
  const tone=document.getElementById('transl-tone').value;
  const genre=document.getElementById('transl-genre').value;
  const notes=document.getElementById('transl-notes').checked;
  const custom=document.getElementById('transl-custom').value.trim();
  const toneDesc={litteraire:'literary — faithful to the author\'s style and voice',naturel:'natural — fluid and idiomatic in the target language',litterale:'literal — close to the source structure'}[tone];
  const src=LANGS[sourceLangCode], tgt=LANGS[targetLangCode];
  return `You are a professional literary translator. Translate the following text from ${src.name} to ${tgt.name}.

TRANSLATION APPROACH: ${toneDesc}
GENRE: ${genre}
${notes?'Add translator\'s notes as [NdT: ...] for cultural adaptations or ambiguous terms.':''}
${custom?`SPECIAL INSTRUCTIONS:\n${custom}`:''}

TYPOGRAPHIC RULES FOR ${tgt.name.toUpperCase()}:\n${tgt.extra}

RESPONSE FORMAT — return ONLY valid JSON, no markdown:
{"diff":"translated text (plain, no diff tags needed)","clean":"translated text","stats":{"ortho":0,"typo":0,"style":0}}

CRITICAL: 
- Translate ONLY, do not correct the source
- Preserve ALL paragraph breaks and structure
- Apply correct typographic conventions of ${tgt.name}
- Preserve ALL **bold** and *italic* markers, applying them to equivalent translated words
- Preserve ALL [FN:N] footnote reference markers in their position in the text
- If the text ends with ---NOTES DE BAS DE PAGE---, translate the footnote texts too and return them in the same format at the end of the translated text
- The "diff" and "clean" fields contain the same translated text`;
}

// ════════════════════════════════
// LANCER ACTION
// ════════════════════════════════
window.lancerAction = async function() {
  if (currentMode==='correct') await lancerCorrection();
  else await lancerTraduction();
}

// ── Correction ──
// ════════════════════════════════
// NORMALISATION TYPOGRAPHIQUE FR
// ════════════════════════════════

// Espace fine insécable (U+202F) — devant : ; ! ? % et à l'intérieur des guillemets « »
// Espace insécable (U+00A0)       — cas particuliers
// Apostrophe typographique (U+2019) — remplace l'apostrophe droite
window.NNBSP = '\u202F'; // espace fine insécable
window.NBSP = '\u00A0'; // espace insécable
window.APOS = '\u2019'; // apostrophe typographique '

// Locutions françaises composées de tirets — formes correctes
// Clé : regex de la forme incorrecte, Valeur : forme correcte
window.LOCUTIONS_TIRETS = [
  // c'est-à-dire et variantes (apostrophe droite ou manquante, tirets manquants)
  [/c[''\u2019]?[ ]?est[ -]?à[ -]?dire/gi,        `c${APOS}est-à-dire`],
  [/c\s+est\s+a\s+dire/gi,                          `c${APOS}est-à-dire`],
  // vis-à-vis
  [/vis[ -]?à[ -]?vis/gi,                           'vis-à-vis'],
  [/vis\s+a\s+vis/gi,                               'vis-à-vis'],
  // face-à-face
  [/face[ -]?à[ -]?face/gi,                         'face-à-face'],
  // tête-à-tête
  [/t[eê]te[ -]?à[ -]?t[eê]te/gi,                  'tête-à-tête'],
  // après-midi
  [/apr[eè]s[ -]?midi/gi,                           'après-midi'],
  // chef-d'œuvre / chef-d'oeuvre
  [/chef[ -]?d[''\u2019]?[oœ]euvre/gi,             `chef-d${APOS}œuvre`],
  // c'est-à-dire dans les notes ([FN:N]) — ne pas toucher
  // au-dessus, au-dessous, au-delà, au-dedans, au-dehors
  [/au[ -]?dessus/gi,                               'au-dessus'],
  [/au[ -]?dessous/gi,                              'au-dessous'],
  [/au[ -]?del[aà]/gi,                              'au-delà'],
  [/au[ -]?dedans/gi,                               'au-dedans'],
  [/au[ -]?dehors/gi,                               'au-dehors'],
  // quelque chose / quelqu'un — apostrophe typographique
  [/quelqu['']un/gi,                                `quelqu${APOS}un`],
  [/lorsqu['']il/gi,                                `lorsqu${APOS}il`],
  [/lorsqu['']elle/gi,                              `lorsqu${APOS}elle`],
  [/jusqu[''](?=[aàâeéèêëiîïoôuùûœ])/gi,           `jusqu${APOS}`],
  [/puisqu[''](?=[aàâeéèêëiîïoôuùûœ])/gi,          `puisqu${APOS}`],
  [/qu[''](?=[aàâeéèêëiîïoôuùûœil])/gi,            `qu${APOS}`],
  [/j[''](?=[aàâeéèêëiîïoôuùûœ])/gi,               `j${APOS}`],
  [/n[''](?=[aàâeéèêëiîïoôuùûœ])/gi,               `n${APOS}`],
  [/m[''](?=[aàâeéèêëiîïoôuùûœ])/gi,               `m${APOS}`],
  [/s[''](?=[aàâeéèêëiîïoôuùûœ])/gi,               `s${APOS}`],
  [/d[''](?=[aàâeéèêëiîïoôuùûœ])/gi,               `d${APOS}`],
  [/l[''](?=[aàâeéèêëiîïoôuùûœ])/gi,               `l${APOS}`],
  [/c[''](?=[aàâeéèêëiîïoôuùûœ])/gi,               `c${APOS}`],
];

// Mots avec ligature œ — liste fermée et sans ambiguïté
window.OE_LIGATURES = [
  [/\bcoeur\b/gi, 'cœur'], [/\bcoeurs\b/gi, 'cœurs'],
  [/\bsoeur\b/gi, 'sœur'], [/\bsoeurs\b/gi, 'sœurs'],
  [/\boeuvre\b/gi, 'œuvre'], [/\boeuvres\b/gi, 'œuvres'],
  [/\bchef-d[''\u2019]oeuvre\b/gi, `chef-d${APOS}œuvre`],
  [/\bchef-d[''\u2019]oeuvres\b/gi, `chef-d${APOS}œuvres`],
  [/\bboeur\b/gi, 'bœur'], // bœuf sans le f final (rare)
  [/\bboeuf\b/gi, 'bœuf'], [/\bboeufs\b/gi, 'bœufs'],
  [/\bfoetus\b/gi, 'fœtus'],
  [/\bmanoeuvre\b/gi, 'manœuvre'], [/\bmanoeuvres\b/gi, 'manœuvres'],
  [/\bmanoeuvrer\b/gi, 'manœuvrer'],
  [/\bmoeurs\b/gi, 'mœurs'],
  [/\bnoeud\b/gi, 'nœud'], [/\bnoeuds\b/gi, 'nœuds'],
  [/\boeil\b/gi, 'œil'], [/\byeux\b/gi, 'yeux'], // yeux correct, pas de œ
  [/\boeillet\b/gi, 'œillet'], [/\boeillets\b/gi, 'œillets'],
  [/\bvoeu\b/gi, 'vœu'], [/\bvoeux\b/gi, 'vœux'],
  [/\boeuf\b/gi, 'œuf'], [/\boeufs\b/gi, 'œufs'],
  [/\bpoele\b/gi, 'poêle'], [/\bpoeles\b/gi, 'poêles'],
];

// Majuscules françaises sans accent → avec accent
// Liste étendue des mots courants dans un manuscrit français
window.MAJUSCULES_ACCENT = [

  // ── É (le cas le plus fréquent) ──
  [/\bEcart\b/g,'Écart'],[/\bEcarts\b/g,'Écarts'],
  [/\bEchange\b/g,'Échange'],[/\bEchanges\b/g,'Échanges'],
  [/\bEchec\b/g,'Échec'],[/\bEchecs\b/g,'Échecs'],
  [/\bEchelon\b/g,'Échelon'],[/\bEchelons\b/g,'Échelons'],
  [/\bEcho\b/g,'Écho'],[/\bEchos\b/g,'Échos'],
  [/\bEclair\b/g,'Éclair'],[/\bEclairs\b/g,'Éclairs'],
  [/\bEclat\b/g,'Éclat'],[/\bEclats\b/g,'Éclats'],
  [/\bEcole\b/g,'École'],[/\bEcoles\b/g,'Écoles'],
  [/\bEcologie\b/g,'Écologie'],
  [/\bEconomie\b/g,'Économie'],[/\bEconomies\b/g,'Économies'],
  [/\bEconomique\b/g,'Économique'],
  [/\bEcran\b/g,'Écran'],[/\bEcrans\b/g,'Écrans'],
  [/\bEcrit\b/g,'Écrit'],[/\bEcrits\b/g,'Écrits'],
  [/\bEcrite\b/g,'Écrite'],[/\bEcrites\b/g,'Écrites'],
  [/\bEcriture\b/g,'Écriture'],[/\bEcritures\b/g,'Écritures'],
  [/\bEcrivain\b/g,'Écrivain'],[/\bEcrivains\b/g,'Écrivains'],
  [/\bEcrivaine\b/g,'Écrivaine'],[/\bEcrivaines\b/g,'Écrivaines'],
  [/\bEdition\b/g,'Édition'],[/\bEditions\b/g,'Éditions'],
  [/\bEditeur\b/g,'Éditeur'],[/\bEditeurs\b/g,'Éditeurs'],
  [/\bEditrice\b/g,'Éditrice'],[/\bEditrices\b/g,'Éditrices'],
  [/\bEducation\b/g,'Éducation'],
  [/\bEglise\b/g,'Église'],[/\bEglises\b/g,'Églises'],
  [/\bElection\b/g,'Élection'],[/\bElections\b/g,'Élections'],
  [/\bEleve\b/g,'Élève'],[/\bEleves\b/g,'Élèves'],
  [/\bElu\b/g,'Élu'],[/\bElus\b/g,'Élus'],
  [/\bElue\b/g,'Élue'],[/\bElues\b/g,'Élues'],
  [/\bEmission\b/g,'Émission'],[/\bEmissions\b/g,'Émissions'],
  [/\bEmotion\b/g,'Émotion'],[/\bEmotions\b/g,'Émotions'],
  [/\bEmotionnel\b/g,'Émotionnel'],
  [/\bEnergie\b/g,'Énergie'],[/\bEnergies\b/g,'Énergies'],
  [/\bEnorme\b/g,'Énorme'],[/\bEnormes\b/g,'Énormes'],
  [/\bEnormement\b/g,'Énormément'],
  [/\bEpoque\b/g,'Époque'],[/\bEpoques\b/g,'Époques'],
  [/\bEpreuve\b/g,'Épreuve'],[/\bEpreuves\b/g,'Épreuves'],
  [/\bEquipe\b/g,'Équipe'],[/\bEquipes\b/g,'Équipes'],
  [/\bEquilibre\b/g,'Équilibre'],[/\bEquilibres\b/g,'Équilibres'],
  [/\bEtat\b/g,'État'],[/\bEtats\b/g,'États'],
  [/\bEte\b/g,'Été'],[/\bEtes\b/g,'Étés'],
  [/\bEternite\b/g,'Éternité'],
  [/\bEtude\b/g,'Étude'],[/\bEtudes\b/g,'Études'],
  [/\bEtudiant\b/g,'Étudiant'],[/\bEtudiants\b/g,'Étudiants'],
  [/\bEtudiante\b/g,'Étudiante'],[/\bEtudiantes\b/g,'Étudiantes'],
  [/\bEveil\b/g,'Éveil'],
  [/\bEvenement\b/g,'Événement'],[/\bEvenements\b/g,'Événements'],
  [/\bEvidence\b/g,'Évidence'],
  [/\bEvolution\b/g,'Évolution'],[/\bEvolutions\b/g,'Évolutions'],
  [/\bExces\b/g,'Excès'],
  [/\bEpoux\b/g,'Époux'],[/\bEpouse\b/g,'Épouse'],[/\bEpouses\b/g,'Épouses'],
  [/\bEpaule\b/g,'Épaule'],[/\bEpaules\b/g,'Épaules'],
  [/\bEpee\b/g,'Épée'],[/\bEpees\b/g,'Épées'],
  [/\bEpingle\b/g,'Épingle'],[/\bEpingles\b/g,'Épingles'],
  [/\bEpreuve\b/g,'Épreuve'],[/\bEpreuves\b/g,'Épreuves'],
  [/\bEprouver\b/g,'Éprouver'],
  [/\bEtoile\b/g,'Étoile'],[/\bEtoiles\b/g,'Étoiles'],
  [/\bEtranger\b/g,'Étranger'],[/\bEtrangers\b/g,'Étrangers'],
  [/\bEtrangere\b/g,'Étrangère'],[/\bEtrangeres\b/g,'Étrangères'],
  [/\bEtre\b/g,'Être'],[/\bEtres\b/g,'Êtres'],
  [/\bEtroit\b/g,'Étroit'],[/\bEtroite\b/g,'Étroite'],
  [/\bEveque\b/g,'Évêque'],[/\bEveques\b/g,'Évêques'],

  // ── À ──
  [/\bAge\b/g,'Âge'],[/\bAges\b/g,'Âges'],
  [/\bAme\b/g,'Âme'],[/\bAmes\b/g,'Âmes'],
  [/\bApre\b/g,'Âpre'],

  // ── Ê (dans les mots majusculés en début de phrase) ──
  // Traité via Être ci-dessus — les autres sont rares en majuscule isolée

  // ── Î ──
  [/\bIle\b/g,'Île'],[/\bIles\b/g,'Îles'],

  // ── Ô ──
  [/\bOtage\b/g,'Otage'],[/\bOtages\b/g,'Otages'], // pas d'accent sur Otage
  // Ô est rare en majuscule de début de mot courant — laissé à l'IA

  // ── Ç ──
  [/\bCa\b/g,'Ça'], // Ça (pronom démonstratif) — attention : "Ca" peut être un acronyme
  // On ne traite que la forme isolée évidente

  // ── Noms propres et titres courants ──
  [/\bEurope\b/g,'Europe'], // pas d'accent — correct tel quel
];


window.normaliserEspacesFR = function(text) {
  let t = text;

  // 0. Apostrophes droites → apostrophes typographiques
  t = t.replace(/(?<=[a-zA-ZÀ-ÿ])'(?=[a-zA-ZÀ-ÿ])/g, APOS);
  t = t.replace(/(?<=[a-zA-ZÀ-ÿ])'(?=[a-zA-ZÀ-ÿ])/g, APOS);

  // 1. Locutions à tirets et apostrophes
  for(const [regex, correct] of LOCUTIONS_TIRETS){
    t = t.replace(regex, correct);
  }

  // 2. Ligatures œ
  for(const [regex, correct] of OE_LIGATURES){
    t = t.replace(regex, correct);
  }

  // 3. Majuscules accentuées (liste de mots connus)
  for(const [regex, correct] of MAJUSCULES_ACCENT){
    t = t.replace(regex, correct);
  }

  // 3b. A seul en début de phrase → À
  // Après . ! ? … ou en début de texte, suivi d'une espace puis d'autre chose
  t = t.replace(/(^|(?<=[.!?…»]\s{1,3}))A(?=\s)/g, 'À');

  // 4. Supprimer les doubles espaces ordinaires
  t = t.replace(/  +/g, ' ');

  // 5. Avant ; ! ? % → espace fine insécable
  t = t.replace(/[ \u00A0\u202F]?([;!?%])/g, `${NNBSP}$1`);
  // Pour le : on évite les URL (http:// etc.) et les heures (12:30)
  t = t.replace(/(?<![a-zA-Z0-9])[ \u00A0\u202F]?(:)(?!\/\/|\d)/g, `${NNBSP}$1`);

  // 6. Après « → espace fine insécable
  t = t.replace(/«[ \u00A0\u202F]?/g, `«${NNBSP}`);

  // 7. Avant » → espace fine insécable
  t = t.replace(/[ \u00A0\u202F]?»/g, `${NNBSP}»`);

  // 8. Nettoyer les espaces fines en début de ligne ou doublées
  t = t.replace(/\n[ \u202F\u00A0]+/g, '\n');
  t = t.replace(/[\u202F\u00A0]{2,}/g, NNBSP);

  return t;
}

// Génère un diff HTML lisible entre texte avant/après normalisation
window.diffNormalisation = function(avant, apres) {
  // Comparaison caractère par caractère sur les zones modifiées
  // Pour l'affichage on remplace les espaces fines par un symbole visible ·
  const afficher = s => s
    .replace(/\u202F/g, '<span style="background:#e8f5ee;color:#1e6e3a;font-size:0.75em;border-radius:2px;padding:0 2px" title="espace fine insécable">·</span>')
    .replace(/\u00A0/g, '<span style="background:#e8f0fb;color:#1a4a8a;font-size:0.75em;border-radius:2px;padding:0 2px" title="espace insécable">⎵</span>');

  // Diff simplifié : on affiche uniquement les lignes qui ont changé
  const lignesAvant = avant.split('\n');
  const lignesApres = apres.split('\n');
  let html = '';
  for(let i=0; i<lignesApres.length; i++){
    const la = lignesAvant[i]||'';
    const lb = lignesApres[i]||'';
    if(la===lb){ html += escapeHtml(lb)+'\n'; }
    else {
      // Marquer la ligne modifiée
      html += '<span class="diff-ins" style="display:inline">' + afficher(escapeHtml(lb)) + '</span>\n';
    }
  }
  return html;
}

window.lancerCorrection = async function() {
  const text=document.getElementById('manuscript-input').value.trim();
  if(!text){notify('Le manuscrit est vide.','error');return;}
  if(!document.getElementById('api-key').value.trim()){notify('Clé API manquante.','error');return;}
  originalText=text;

  // Normalisation typographique automatique pour le français
  let textToProcess = text;
  let nbEspaces = 0;
  if(sourceLang==='fr') {
    const normalise = normaliserEspacesFR(text);
    // Compter les remplacements
    nbEspaces = [...normalise].filter((c,i)=>(c===NNBSP||c===NBSP)&&text[i]!==c).length;
    // Mettre à jour la zone de saisie avec le texte normalisé
    if(normalise!==text){
      document.getElementById('manuscript-input').value=normalise;
      textToProcess=normalise;
      notify(`Typographie : ${nbEspaces} espace(s) fine(s) insécable(s) appliquée(s) automatiquement.`,'info',5000);
    }
  }

  const panelId='panel-correction';
  const chunks=splitChunks(textToProcess);
  document.getElementById('btn-action').disabled=true;
  let allDiff='',allClean='',tot={ortho:0,typo:0,style:0};
  try {
    for(let i=0;i<chunks.length;i++){
      showProgress('Correction en cours…',`Fragment ${i+1} / ${chunks.length}`,`Langue : ${LANGS[sourceLang].label}`);
      const r=await callClaude(chunks[i],buildCorrectPrompt(sourceLang));
      allDiff+=(allDiff?'\n\n':'')+r.diff;
      allClean+=(allClean?'\n\n':'')+r.clean;
      if(r.stats){tot.ortho+=r.stats.ortho||0;tot.typo+=r.stats.typo||0;tot.style+=r.stats.style||0;}
    }
    // Normaliser aussi la sortie de l'IA pour le français
    if(sourceLang==='fr'){
      allClean=normaliserEspacesFR(allClean);
    }
    results[panelId]={type:'correct',lang:sourceLang,diff:allDiff,clean:allClean,diffMode:true,stats:tot,footnotes:{...inputFootnotes}};
    const tab=createResultTab(panelId,`Corrigé — ${LANGS[sourceLang].label}`,false);
    createResultPanel(panelId,false);
    const total=tot.ortho+tot.typo+tot.style;
    document.getElementById(`stat-total-${panelId}`).textContent=total;
    document.getElementById(`stat-ortho-${panelId}`).textContent=tot.ortho;
    document.getElementById(`stat-typo-${panelId}`).textContent=tot.typo;
    document.getElementById(`stat-style-${panelId}`).textContent=tot.style;
    renderPanel(panelId);
    switchTab(tab);
    hideProgress();
    notify(`Correction terminée — ${total} modification(s)${nbEspaces>0?` + ${nbEspaces} espace(s) fine(s) normalisée(s)`:''}.`,'success',6000);
  } catch(err){hideProgress();notify(err.message||'Erreur.','error',7000);}
  document.getElementById('btn-action').disabled=false;
}

// ── Traduction ──
window.lancerTraduction = async function() {
  const text=document.getElementById('manuscript-input').value.trim();
  if(!text){notify('Le manuscrit est vide.','error');return;}
  if(!document.getElementById('api-key').value.trim()){notify('Clé API manquante.','error');return;}
  if(targetLangs.length===0){notify('Sélectionnez au moins une langue cible.','error');return;}
  originalText=text;
  document.getElementById('btn-action').disabled=true;
  const autoCorrect=document.getElementById('transl-then-correct').checked;

  for(const tgtLang of targetLangs){
    const panelId=`panel-transl-${tgtLang}`;
    const chunks=splitChunks(text);
    let allDiff='',allClean='';
    try {
      for(let i=0;i<chunks.length;i++){
        showProgress(`Traduction → ${LANGS[tgtLang].label}`,`Fragment ${i+1} / ${chunks.length}`,`${LANGS[sourceLang].label} → ${LANGS[tgtLang].label}`);
        const r=await callClaude(chunks[i],buildTranslatePrompt(sourceLang,tgtLang));
        allDiff+=(allDiff?'\n\n':'')+r.diff;
        allClean+=(allClean?'\n\n':'')+r.clean;
      }
      // Normalisation typographique si la langue cible est le français
      if(tgtLang==='fr'){
        allClean=normaliserEspacesFR(allClean);
        allDiff=normaliserEspacesFR(allDiff);
      }
      results[panelId]={type:'translate',lang:tgtLang,diff:allDiff,clean:allClean,diffMode:false,stats:{ortho:0,typo:0,style:0},footnotes:{...inputFootnotes}};
      const tab=createResultTab(panelId,`${LANGS[tgtLang].label}`,true);
      createResultPanel(panelId,true);
      renderPanel(panelId);
      switchTab(tab);
      notify(`Traduction terminée → ${LANGS[tgtLang].label}`,'purple',4000);

      // Correction automatique après traduction
      if(autoCorrect){
        await corrigerTraductionAuto(panelId,tgtLang,allClean);
      }
    } catch(err){hideProgress();notify(`Erreur ${LANGS[tgtLang].label} : ${err.message}`,'error',7000);}
  }
  hideProgress();
  document.getElementById('btn-action').disabled=false;
}

// ── Correction d'une traduction (bouton dans le panel) ──
window.corrigerTraduction = async function(panelId) {
  const r=results[panelId]; if(!r||r.type!=='translate'){return;}
  const text=r.clean;
  if(!text){notify('Aucun texte traduit à corriger.','error');return;}
  await corrigerTraductionAuto(panelId,r.lang,text);
}

window.corrigerTraductionAuto = async function(panelId,lang,text) {
  const chunks=splitChunks(text);
  let allDiff='',allClean='',tot={ortho:0,typo:0,style:0};
  try {
    for(let i=0;i<chunks.length;i++){
      showProgress(`Correction de la traduction…`,`Fragment ${i+1} / ${chunks.length}`,`Langue : ${LANGS[lang].label}`);
      const r=await callClaude(chunks[i],buildCorrectAutoPrompt(lang));
      allDiff+=(allDiff?'\n\n':'')+r.diff;
      allClean+=(allClean?'\n\n':'')+r.clean;
      if(r.stats){tot.ortho+=r.stats.ortho||0;tot.typo+=r.stats.typo||0;tot.style+=r.stats.style||0;}
    }
    results[panelId].diff=allDiff;
    results[panelId].clean=allClean;
    results[panelId].diffMode=true;
    results[panelId].stats=tot;
    const total=tot.ortho+tot.typo+tot.style;
    const so=document.getElementById(`stat-total-${panelId}`);
    if(so) so.textContent=total;
    const so2=document.getElementById(`stat-ortho-${panelId}`);
    if(so2) so2.textContent=tot.ortho;
    const so3=document.getElementById(`stat-typo-${panelId}`);
    if(so3) so3.textContent=tot.typo;
    const so4=document.getElementById(`stat-style-${panelId}`);
    if(so4) so4.textContent=tot.style;
    renderPanel(panelId);
    hideProgress();
    notify(`Correction de la traduction ${LANGS[lang].label} terminée — ${total} modif.`,'success',4000);
  } catch(err){hideProgress();notify(err.message,'error',6000);}
}

window.buildCorrectAutoPrompt = function(lang) {
  return `You are a professional editorial proofreader for ${LANGS[lang].name}.
Correct spelling, grammar, and typography in ${LANGS[lang].name}.
Apply these typographic conventions: ${LANGS[lang].extra}

RESPONSE FORMAT — return ONLY valid JSON, no markdown:
{"diff":"HTML with correction tags","clean":"corrected text","stats":{"ortho":N,"typo":N,"style":N}}

HTML tags: <del class="diff-del">old</del><ins class="diff-ins">new</ins> for corrections, <mark class="diff-style">text</mark> for style.
Preserve ALL paragraph breaks.`;
}

// ════════════════════════════════
// EXPORT
// ════════════════════════════════
window.openExportModal = function() {
  const container=document.getElementById('export-options');
  container.innerHTML='';
  const src=originalText||document.getElementById('manuscript-input').value;

  // Séparateur visuel
  const mkSep=(txt)=>{const d=document.createElement('div');d.style.cssText='font-size:0.7rem;color:#a89880;text-transform:uppercase;letter-spacing:0.1em;padding:6px 0 2px;border-top:1px solid var(--rule);margin-top:4px;';d.textContent=txt;container.appendChild(d);};

  mkSep('Texte original');
  addExportBtn(container,'📋 Original (.txt)',()=>exportTxt(src,'manuscrit_original.txt'));
  addExportBtn(container,'📝 Original (.docx)',()=>exportDocx(src,null,'fr','manuscrit_original.docx','original'));

  Object.entries(results).forEach(([pid,r])=>{
    const langLabel=LANGS[r.lang]?LANGS[r.lang].label:r.lang;
    const typeLabel=r.type==='translate'?'Traduction':'Correction';
    const base=`${r.type}_${r.lang}`;
    mkSep(`${typeLabel} — ${langLabel}`);
    addExportBtn(container,`📋 Texte propre (.txt)`,()=>exportTxt(r.clean,`${base}_propre.txt`));
    addExportBtn(container,`📝 Texte propre (.docx)`,()=>exportDocx(r.clean,null,r.lang,`${base}_propre.docx`,r.type==='translate'?'translation':'clean', r.footnotes));
    addExportBtn(container,`📝 Avec corrections suivies (.docx)`,()=>exportDocx(r.clean,r.diff,r.lang,`${base}_corrections.docx`,r.type==='translate'?'translation':'tracked', r.footnotes));
    addExportBtn(container,`🌐 Annoté (.html)`,()=>exportHtml(r.diff,r.lang,`${base}_annote.html`));
    addExportBtn(container,`💡 .odt — ouvrir le .docx dans LibreOffice → Fichier → Enregistrer sous → .odt`,null,true);
  });

  document.getElementById('export-modal').classList.add('show');
}

window.addExportBtn = function(container,label,fn,isInfo=false){
  const b=document.createElement('button');
  if(isInfo){
    b.style.cssText='width:100%;background:#1a1208;border:1px dashed #3d3020;border-radius:3px;color:#7a6a52;font-size:0.72rem;padding:6px 9px;text-align:left;cursor:default;font-family:inherit;font-style:italic;';
    b.textContent=label;
  } else {
    b.className='btn btn-ghost';
    b.style.cssText='color:var(--ink);border-color:var(--rule);text-align:left;width:100%;';
    b.textContent=label;
    b.onclick=()=>{closeExportModal();fn();};
  }
  container.appendChild(b);
}

// ── Export TXT ──
window.exportTxt = function(content,filename){
  if(!content){notify('Aucun contenu.','error');return;}
  const a=document.createElement('a');
  a.href=URL.createObjectURL(new Blob([content],{type:'text/plain;charset=utf-8'}));
  a.download=filename; a.click(); notify(`Export : ${filename}`,'success');
}

// ── Export HTML ──
window.exportHtml = function(diff,lang,filename){
  if(!diff){notify('Aucun contenu.','error');return;}
  const langName=LANGS[lang]?LANGS[lang].label:lang;
  const content=`<!DOCTYPE html><html lang="${lang}"><head><meta charset="UTF-8"><title>${langName}</title><style>
body{font-family:Georgia,serif;max-width:820px;margin:40px auto;line-height:1.9;padding:24px;color:#1a1208}
del{color:#c0392b;background:#fdecea;text-decoration:line-through;padding:0 2px;border-radius:2px}
ins{color:#1e6e3a;background:#e8f5ee;text-decoration:none;padding:0 2px;border-radius:2px;border-bottom:1px solid #1e6e3a}
mark{background:#e8f0fb;color:#1a4a8a;padding:0 2px;border-radius:2px}
.diff-comment{background:#fff8e1;border:1px solid #b8860b;border-radius:3px;font-size:.75em;padding:1px 6px;color:#7a5c00;font-style:italic;margin-left:3px}
h1{font-size:1rem;color:#7a6a52;border-bottom:1px solid #c8b99a;padding-bottom:8px;margin-bottom:24px}
</style></head><body><h1>${langName} — Manuscrit IA</h1>${diff}</body></html>`;
  const a=document.createElement('a');
  a.href=URL.createObjectURL(new Blob([content],{type:'text/html'}));
  a.download=filename; a.click(); notify(`Export : ${filename}`,'success');
}

// ── Export DOCX ──
window.exportDocx = async function(cleanText, diffHtml, lang, filename, mode, footnotes) {
  if(!cleanText && !diffHtml){notify('Aucun contenu à exporter.','error');return;}
  // Résoudre docx depuis window, globalThis ou self selon le contexte navigateur
  const _docx = (typeof docx !== 'undefined' && docx) || (typeof window !== 'undefined' && window.docx) || (typeof globalThis !== 'undefined' && globalThis.docx);
  if(!_docx || !_docx.Document){notify('Bibliothèque docx non chargée. Rechargez la page.','error');return;}
  Object.assign(window, {docx: _docx});
  try {
    notify('Génération du .docx…','info',2500);
    const { Document, Packer, Paragraph, TextRun, FootnoteReferenceRun } = _docx;
    const {bodyText, parsedFootnotes} = extractFootnotesFromText(cleanText||'');
    const mergedFn = Object.assign({}, footnotes||inputFootnotes, parsedFootnotes);
    const children = [];

    if(mode==='tracked' && diffHtml) {
      // Parser le HTML via DOM — respecte les vrais paragraphes <p>, <br>, \n
      const div = document.createElement('div');
      div.innerHTML = diffHtml;
      const blocks = collectHtmlBlocks(div);
      for(const block of blocks){
        const runs = parseDiffToRuns(block, mergedFn);
        if(runs.length>0) children.push(new Paragraph({children:runs, spacing:{after:200}}));
      }
    } else {
      // Texte propre : chaque ligne non vide = un paragraphe Word
      const lines = bodyText.replace(/\r\n/g,'\n').replace(/\r/g,'\n').split('\n');
      for(const line of lines){
        if(!line.trim()) continue;
        const runs = parseTextToRuns(line, mergedFn);
        children.push(new Paragraph({children:runs, spacing:{after:200}}));
      }
    }

    const docxFootnotes = {};
    Object.entries(mergedFn).forEach(([id, text])=>{
      docxFootnotes[parseInt(id)] = { children:[new Paragraph({children:parseTextToRuns(text,{})})] };
    });
    const docConfig = {
      creator: 'Manuscrit IA',
      sections:[{
        properties:{ page:{ size:{width:11906,height:16838}, margin:{top:1418,right:1418,bottom:1418,left:1701} } },
        children: children.length>0 ? children : [new Paragraph({children:[new TextRun('(vide)')]})]
      }]
    };
    if(Object.keys(docxFootnotes).length>0) docConfig.footnotes = docxFootnotes;
    const doc = new Document(docConfig);
    const buf = await Packer.toBuffer(doc);
    const blob = new Blob([buf],{type:'application/vnd.openxmlformats-officedocument.wordprocessingml.document'});
    const a=document.createElement('a');
    a.href=URL.createObjectURL(blob);
    a.download=filename; a.click();
    const fnCount = Object.keys(mergedFn).length;
    notify('Export : ' + filename + (fnCount>0 ? ' (' + fnCount + ' note(s) de bas de page)' : ''), 'success');
  } catch(err) {
    console.error(err);
    notify('Erreur lors de la génération du .docx : '+err.message,'error',6000);
  }
}

// Découpe un conteneur HTML en blocs de niveau paragraphe
window.collectHtmlBlocks = function(container) {
  const blocks = [];
  // Cas 1 : le HTML contient des balises <p>
  const pTags = container.querySelectorAll('p');
  if(pTags.length > 0) {
    pTags.forEach(p => { if(p.innerHTML.trim()) blocks.push(p.innerHTML); });
    return blocks;
  }
  // Cas 2 : pas de <p> — découper sur <br> puis sur sauts de ligne
  const raw = container.innerHTML;
  const parts = raw.split(/<brs*/?>/gi);
  for(const part of parts){
    const subparts = part.split(/
+/);
    for(const sub of subparts){
      const clean = sub.trim();
      if(clean) blocks.push(clean);
    }
  }
  // Cas 3 : rien trouvé — tout en un bloc
  if(blocks.length===0 && raw.trim()) blocks.push(raw);
  return blocks;
}


// Sépare le corps du texte et les notes depuis la réponse de l'IA
window.extractFootnotesFromText = function(text) {
  const sep='---NOTES DE BAS DE PAGE---';
  const idx=text.indexOf(sep);
  if(idx===-1) return {bodyText:text, parsedFootnotes:{}};
  const bodyText=text.slice(0,idx).trim();
  const fnBlock=text.slice(idx+sep.length).trim();
  const parsedFootnotes={};
  const lines=fnBlock.split('\n');
  lines.forEach(line=>{
    const m=line.match(/^\[FN:(\d+)\]\s*(.+)$/);
    if(m) parsedFootnotes[m[1]]=m[2].trim();
  });
  return {bodyText, parsedFootnotes};
}

// Convertit un paragraphe HTML diff en TextRun[] Word (avec footnotes)
window.parseDiffToRuns = function(html, footnotes={}) {
  const _d = (typeof docx!=='undefined'&&docx)||window.docx||globalThis.docx;
  const { TextRun, FootnoteReferenceRun } = _d;
  const runs = [];
  const div = document.createElement('div');
  div.innerHTML = html;

  function processNode(node) {
    if(node.nodeType===3) {
      // Chercher les marqueurs [FN:N] dans le texte brut
      const parts = node.textContent.split(/(\[FN:\d+\])/);
      parts.forEach(part=>{
        const fnm=part.match(/^\[FN:(\d+)\]$/);
        if(fnm) runs.push(new FootnoteReferenceRun(parseInt(fnm[1])));
        else if(part) runs.push(new TextRun({text:part}));
      });
    } else if(node.nodeType===1) {
      const tag=node.tagName.toLowerCase();
      const cls=node.className||'';
      if(tag==='del'||cls.includes('diff-del')) {
        const t=node.textContent;
        if(t) runs.push(new TextRun({text:t, strike:true, color:'C0392B'}));
      } else if(tag==='ins'||cls.includes('diff-ins')) {
        const t=node.textContent;
        if(t) runs.push(new TextRun({text:t, underline:{type:'single'}, color:'1E6E3A'}));
      } else if(tag==='mark'||cls.includes('diff-style')) {
        const t=node.textContent;
        if(t) runs.push(new TextRun({text:t, color:'1A4A8A', italics:true}));
      } else if(cls.includes('diff-comment')) {
        const t=node.textContent;
        if(t) runs.push(new TextRun({text:` ${t} `, color:'B8860B', italics:true, size:18}));
      } else if(tag==='strong'||tag==='b') {
        const t=node.textContent;
        if(t) runs.push(new TextRun({text:t, bold:true}));
      } else if(tag==='em'||tag==='i') {
        const t=node.textContent;
        if(t) runs.push(new TextRun({text:t, italics:true}));
      } else {
        for(const child of node.childNodes) processNode(child);
      }
    }
  }
  for(const child of div.childNodes) processNode(child);
  return runs;
}

// Convertit du texte avec **gras**, *italique*, ***gras-italique***, [FN:N] en TextRun[]
window.parseTextToRuns = function(text, footnotes={}) {
  const _d = (typeof docx!=='undefined'&&docx)||window.docx||globalThis.docx;
  const { TextRun, FootnoteReferenceRun } = _d;
  const runs = [];
  // Tokeniser : [FN:N] | ***...*** | **...** | *...*
  const regex = /(\[FN:(\d+)\]|\*\*\*(.+?)\*\*\*|\*\*(.+?)\*\*|\*(.+?)\*)/gs;
  let last=0, m;
  while((m=regex.exec(text))!==null){
    if(m.index>last) runs.push(new TextRun({text:text.slice(last,m.index)}));
    if(m[2]) {
      // Note de bas de page
      runs.push(new FootnoteReferenceRun(parseInt(m[2])));
    } else if(m[3]) runs.push(new TextRun({text:m[3], bold:true, italics:true}));
    else if(m[4]) runs.push(new TextRun({text:m[4], bold:true}));
    else if(m[5]) runs.push(new TextRun({text:m[5], italics:true}));
    last=m.index+m[0].length;
  }
  if(last<text.length) runs.push(new TextRun({text:text.slice(last)}));
  return runs.length>0 ? runs : [new TextRun({text})];
}

window.closeExportModal = function(){document.getElementById('export-modal').classList.remove('show');}

// Exposer toutes les fonctions sur window pour Safari
window.loadFile = loadFile;
window.clearInput = clearInput;
window.updateCount = updateCount;
window.lancerAction = lancerAction;
window.switchTab = switchTab;
window.toggleDiff = toggleDiff;
window.openExportModal = openExportModal;
window.closeExportModal = closeExportModal;
window.exportDocx = exportDocx;
window.exportTxt = exportTxt;
window.exportHtml = exportHtml;
window.setMode = setMode;
window.selectSourceLang = selectSourceLang;
window.toggleTargetLang = toggleTargetLang;
window.toggleKey = toggleKey;
window.corrigerTraduction = corrigerTraduction;
