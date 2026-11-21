# Quanto costa l'istruzione – Radar QN

Dataviz interattive (D3) per il pezzo Radar sul costo della scuola, pubblicate con GitHub Pages da `main`, cartella principale.

| # | Dataviz | Pagina | Dati |
|---|---|---|---|
| 1 | Il conto di un anno di scuola | [https://elena-aquilanti.github.io/costi-scuola/il-conto/](https://elena-aquilanti.github.io/costi-scuola/il-conto/) | `tetti_libri_2026_27.csv`, `parametri.csv`, regole regionali in `assets/costi.js` |
| 2 | Il carovita a scuola | [https://elena-aquilanti.github.io/costi-scuola/carovita/](https://elena-aquilanti.github.io/costi-scuola/carovita/) | `prezzi_mensili_2026.csv`, `prezzi_annuali_2015_2025.csv` |
| 3 | La mappa degli aiuti | [https://elena-aquilanti.github.io/costi-scuola/aiuti-regioni/](https://elena-aquilanti.github.io/costi-scuola/aiuti-regioni/) | `fondo_libri_2026_27.csv`, `regioni.geojson`, regole regionali in `assets/costi.js` |
| 4 | Il bonus libri dal 2027 | [https://elena-aquilanti.github.io/costi-scuola/bonus-libri/](https://elena-aquilanti.github.io/costi-scuola/bonus-libri/) | `parametri.csv` |

Fonti: Mim (DM 51/2026, DD 452/2026), Federconsumatori (26/8/2026), Istat (Nic), atti e bandi di Regioni e Province autonome 2026/27, dossier della Camera sul DL 170/2026.

I CSV usano `;` come separatore e la virgola per i decimali. Tutti i numeri mostrati sono calcolati dai CSV.

## Codice per il CMS

Ogni snippet contiene l'iframe e lo script che adatta altezza e tema (da `assets/embed.min.js`). Gli snippet pronti sono anche in `index.html`, con il pulsante «Copia».

### GRAFICO 1 – Il conto di un anno di scuola

```html
<iframe src="https://elena-aquilanti.github.io/costi-scuola/il-conto/" width="100%" height="990" frameborder="0" scrolling="no" title="Il conto di un anno di scuola, e quanto ti ridà la Regione"></iframe>
<script>(function(){if(window.__radarQNv2)return;window.__radarQNv2=1;var O="https://elena-aquilanti.github.io";var MQ=window.matchMedia("(prefers-color-scheme:dark)");function frames(){return Array.prototype.filter.call(document.getElementsByTagName("iframe"),function(f){return(f.getAttribute("src")||"").indexOf(O+"/")===0;});}function theme(){var t=document.documentElement.getAttribute("data-theme");return t==="dark"||t==="light"?t:(MQ.matches?"dark":"light");}function bgOf(el){for(;el&&el.nodeType===1;el=el.parentElement){var c=getComputedStyle(el).backgroundColor;if(c&&c !=="transparent"&&!/rgba\([^)]*,\s*0\)$/.test(c))return c;}return null;}function send(f){try{f.contentWindow.postMessage({sentinel:"radar-qn",type:"theme",theme:theme(),bg:bgOf(f.parentElement)},O);}catch(e){}}function sendAll(){frames().forEach(send);}window.addEventListener("message",function(e){if(e.origin !==O)return;var d=e.data;if(!d||d.sentinel !=="radar-qn"||d.type !=="height")return;frames().forEach(function(f){if(f.contentWindow !==e.source)return;var h=Math.ceil(+d.height);if(h > 0&&20000 > h)f.style.height=h+"px";send(f);});});new MutationObserver(function(){sendAll();setTimeout(sendAll,400);}).observe(document.documentElement,{attributes:true,attributeFilter:["data-theme"]});if(MQ.addEventListener)MQ.addEventListener("change",sendAll);})();</script>
```

### GRAFICO 2 – Il carovita a scuola

```html
<iframe src="https://elena-aquilanti.github.io/costi-scuola/carovita/" width="100%" height="690" frameborder="0" scrolling="no" title="In dieci anni libri sempre più costosi, ma nel 2026 corre il carovita"></iframe>
<script>(function(){if(window.__radarQNv2)return;window.__radarQNv2=1;var O="https://elena-aquilanti.github.io";var MQ=window.matchMedia("(prefers-color-scheme:dark)");function frames(){return Array.prototype.filter.call(document.getElementsByTagName("iframe"),function(f){return(f.getAttribute("src")||"").indexOf(O+"/")===0;});}function theme(){var t=document.documentElement.getAttribute("data-theme");return t==="dark"||t==="light"?t:(MQ.matches?"dark":"light");}function bgOf(el){for(;el&&el.nodeType===1;el=el.parentElement){var c=getComputedStyle(el).backgroundColor;if(c&&c !=="transparent"&&!/rgba\([^)]*,\s*0\)$/.test(c))return c;}return null;}function send(f){try{f.contentWindow.postMessage({sentinel:"radar-qn",type:"theme",theme:theme(),bg:bgOf(f.parentElement)},O);}catch(e){}}function sendAll(){frames().forEach(send);}window.addEventListener("message",function(e){if(e.origin !==O)return;var d=e.data;if(!d||d.sentinel !=="radar-qn"||d.type !=="height")return;frames().forEach(function(f){if(f.contentWindow !==e.source)return;var h=Math.ceil(+d.height);if(h > 0&&20000 > h)f.style.height=h+"px";send(f);});});new MutationObserver(function(){sendAll();setTimeout(sendAll,400);}).observe(document.documentElement,{attributes:true,attributeFilter:["data-theme"]});if(MQ.addEventListener)MQ.addEventListener("change",sendAll);})();</script>
```

### GRAFICO 3 – La mappa degli aiuti

```html
<iframe src="https://elena-aquilanti.github.io/costi-scuola/aiuti-regioni/" width="100%" height="1180" frameborder="0" scrolling="no" title="Aiuti per i libri: stesso Isee, regole diverse da regione a regione"></iframe>
<script>(function(){if(window.__radarQNv2)return;window.__radarQNv2=1;var O="https://elena-aquilanti.github.io";var MQ=window.matchMedia("(prefers-color-scheme:dark)");function frames(){return Array.prototype.filter.call(document.getElementsByTagName("iframe"),function(f){return(f.getAttribute("src")||"").indexOf(O+"/")===0;});}function theme(){var t=document.documentElement.getAttribute("data-theme");return t==="dark"||t==="light"?t:(MQ.matches?"dark":"light");}function bgOf(el){for(;el&&el.nodeType===1;el=el.parentElement){var c=getComputedStyle(el).backgroundColor;if(c&&c !=="transparent"&&!/rgba\([^)]*,\s*0\)$/.test(c))return c;}return null;}function send(f){try{f.contentWindow.postMessage({sentinel:"radar-qn",type:"theme",theme:theme(),bg:bgOf(f.parentElement)},O);}catch(e){}}function sendAll(){frames().forEach(send);}window.addEventListener("message",function(e){if(e.origin !==O)return;var d=e.data;if(!d||d.sentinel !=="radar-qn"||d.type !=="height")return;frames().forEach(function(f){if(f.contentWindow !==e.source)return;var h=Math.ceil(+d.height);if(h > 0&&20000 > h)f.style.height=h+"px";send(f);});});new MutationObserver(function(){sendAll();setTimeout(sendAll,400);}).observe(document.documentElement,{attributes:true,attributeFilter:["data-theme"]});if(MQ.addEventListener)MQ.addEventListener("change",sendAll);})();</script>
```

### GRAFICO 4 – Il bonus libri dal 2027

```html
<iframe src="https://elena-aquilanti.github.io/costi-scuola/bonus-libri/" width="100%" height="700" frameborder="0" scrolling="no" title="Il nuovo bonus libri vale meno di 16 euro a studente"></iframe>
<script>(function(){if(window.__radarQNv2)return;window.__radarQNv2=1;var O="https://elena-aquilanti.github.io";var MQ=window.matchMedia("(prefers-color-scheme:dark)");function frames(){return Array.prototype.filter.call(document.getElementsByTagName("iframe"),function(f){return(f.getAttribute("src")||"").indexOf(O+"/")===0;});}function theme(){var t=document.documentElement.getAttribute("data-theme");return t==="dark"||t==="light"?t:(MQ.matches?"dark":"light");}function bgOf(el){for(;el&&el.nodeType===1;el=el.parentElement){var c=getComputedStyle(el).backgroundColor;if(c&&c !=="transparent"&&!/rgba\([^)]*,\s*0\)$/.test(c))return c;}return null;}function send(f){try{f.contentWindow.postMessage({sentinel:"radar-qn",type:"theme",theme:theme(),bg:bgOf(f.parentElement)},O);}catch(e){}}function sendAll(){frames().forEach(send);}window.addEventListener("message",function(e){if(e.origin !==O)return;var d=e.data;if(!d||d.sentinel !=="radar-qn"||d.type !=="height")return;frames().forEach(function(f){if(f.contentWindow !==e.source)return;var h=Math.ceil(+d.height);if(h > 0&&20000 > h)f.style.height=h+"px";send(f);});});new MutationObserver(function(){sendAll();setTimeout(sendAll,400);}).observe(document.documentElement,{attributes:true,attributeFilter:["data-theme"]});if(MQ.addEventListener)MQ.addEventListener("change",sendAll);})();</script>
```
