function icon(name, size = 14) {
  const attrs = `width="${size}" height="${size}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"`;
  const paths = {
    arrow: `<svg ${attrs}><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>`,
    check: `<svg ${attrs}><path d="M20 6 9 17l-5-5"/></svg>`,
    bookmark: `<svg ${attrs}><path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z"/></svg>`,
    chart: `<svg ${attrs}><path d="M3 3v18h18"/><path d="m7 15 4-4 3 3 5-7"/><circle cx="7" cy="15" r="1"/><circle cx="11" cy="11" r="1"/><circle cx="14" cy="14" r="1"/><circle cx="19" cy="7" r="1"/></svg>`,
    refresh: `<svg ${attrs}><path d="M21 12a9 9 0 0 1-9 9 9.8 9.8 0 0 1-6.7-2.7"/><path d="M3 12a9 9 0 0 1 9-9 9.8 9.8 0 0 1 6.7 2.7"/><path d="M21 3v6h-6"/><path d="M3 21v-6h6"/></svg>`,
    close: `<svg ${attrs}><path d="M18 6 6 18"/><path d="m6 6 12 12"/></svg>`,
    eye: `<svg ${attrs}><path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z"/><circle cx="12" cy="12" r="3"/></svg>`,
    cards: `<svg ${attrs}><path d="M8 6h13v12H8z"/><path d="M3 10h13v12H3z"/></svg>`,
    list: `<svg ${attrs}><path d="M8 6h13"/><path d="M8 12h13"/><path d="M8 18h13"/><path d="M3 6h.01"/><path d="M3 12h.01"/><path d="M3 18h.01"/></svg>`,
    download: `<svg ${attrs}><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><path d="M7 10l5 5 5-5"/><path d="M12 15V3"/></svg>`,
    upload: `<svg ${attrs}><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><path d="M17 8l-5-5-5 5"/><path d="M12 3v12"/></svg>`,
    trash: `<svg ${attrs}><path d="M3 6h18"/><path d="M8 6V4h8v2"/><path d="M19 6l-1 14H6L5 6"/><path d="M10 11v6"/><path d="M14 11v6"/></svg>`
  };
  return paths[name] || paths.arrow;
}

function nav(active) {
  const links = [
    ["index.html", "Home", "home"],
    ["guide.html", "Guide", "guide"],
    ["questions.html", "Questions", "questions"],
    ["visuals.html", "Visuals", "visuals"],
    ["exam.html", "Exam Kit", "exam"],
    ["flashcards.html", "Flashcards", "flashcards"],
    ["changelog.html", "Changelog", "changelog"]
  ];
  return `
    <div class="blob blob-1"></div><div class="blob blob-2"></div><div class="blob blob-3"></div>
    <nav class="main-nav" aria-label="Main navigation">
      <a class="nav-logo" href="index.html">IDS</a>
      ${links.map(([href, label, id]) => `<a class="nav-link ${active === id ? "active" : ""}" href="${href}">${label}</a>`).join("")}
    </nav>
    <div class="update-alert" id="update-alert">
      <span id="update-message">A newer version is available.</span>
      <a href="changelog.html">Changelog</a>
      <button type="button" id="update-close" aria-label="Dismiss update alert">${icon("close", 12)}</button>
    </div>
  `;
}

function mountShell(active) {
  document.body.insertAdjacentHTML("afterbegin", nav(active));
  startUpdatePolling();
}

function escapeHtml(value) {
  return String(value ?? "")
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

function formatText(value) {
  return escapeHtml(value).replace(/\n/g, "<br>");
}

function statusBadge(status) {
  const map = {
    official: ["b-official", "Official"],
    unofficial: ["b-unofficial", "Unofficial"],
    pending: ["b-pending", "Pending"],
    "revised-after-official-release": ["b-proof", "Revised"]
  };
  const [cls, label] = map[status] || ["b-type", status || "Unknown"];
  return `<span class="badge ${cls}">${label}</span>`;
}

function getStore(key, fallback = {}) {
  try { return JSON.parse(localStorage.getItem(key) || JSON.stringify(fallback)); }
  catch { return fallback; }
}

function setStore(key, value) {
  try { localStorage.setItem(key, JSON.stringify(value)); }
  catch {
    // Some preview browsers or privacy modes can disable localStorage.
  }
}

async function loadJson(url) {
  const res = await fetch(`${url}?t=${Date.now()}`, { cache: "no-store" });
  if (!res.ok) throw new Error(`Failed to load ${url}`);
  return res.json();
}

function startUpdatePolling() {
  const alert = document.getElementById("update-alert");
  const msg = document.getElementById("update-message");
  const close = document.getElementById("update-close");
  if (!alert || !msg) return;
  close?.addEventListener("click", () => alert.classList.remove("visible"));

  async function check() {
    try {
      const data = await loadJson("version.json");
      if (data.version && data.version !== SITE_VERSION) {
        msg.textContent = `Version ${data.version} is live. Refresh to see the newest changes.`;
        alert.classList.add("visible");
      }
    } catch {
      // Static file polling can fail on file:// or while offline; the site should remain usable.
    }
  }
  check();
  window.setInterval(check, 30000);
}

function rerenderMath() {
  if (window.MathJax?.typesetPromise) {
    window.MathJax.typesetPromise().catch(() => {});
  } else {
    window.setTimeout(renderMathFallback, 1200);
  }
}

function texReadable(tex) {
  return String(tex)
    .replaceAll("\\\\", " ")
    .replace(/\\operatorname\{([^}]+)\}/g, "$1")
    .replace(/\\text\{([^}]+)\}/g, "$1")
    .replace(/\\frac\{([^{}]+)\}\{([^{}]+)\}/g, "($1)/($2)")
    .replace(/\\sum_\{([^}]+)\}\^\{([^}]+)\}/g, "Σ[$1 to $2]")
    .replace(/\\sum/g, "Σ")
    .replace(/\\Phi/g, "Φ")
    .replace(/\\mu/g, "μ")
    .replace(/\\sigma/g, "σ")
    .replace(/\\bar\{x\}/g, "x̄")
    .replace(/\\hat F/g, "F̂")
    .replace(/\\le/g, "≤")
    .replace(/\\ge/g, "≥")
    .replace(/\\approx/g, "≈")
    .replace(/\\qquad/g, "   ")
    .replace(/\\,/g, " ")
    .replace(/\^\{([^}]+)\}/g, "^$1")
    .replace(/_\{([^}]+)\}/g, "_$1")
    .replace(/[{}]/g, "")
    .replace(/\s+/g, " ")
    .trim();
}

function renderMathFallback() {
  if (window.MathJax || document.querySelector("mjx-container")) return;
  document.querySelectorAll(".math-block").forEach(block => {
    if (block.dataset.mathFallback === "1") return;
    const raw = block.textContent.replace(/\\\[/g, "").replace(/\\\]/g, "");
    block.innerHTML = `<span class="lite-display">${escapeHtml(texReadable(raw))}</span>`;
    block.dataset.mathFallback = "1";
  });
  const walkerTargets = document.querySelectorAll(".guide-card p, .callout, .q-text, .solution p");
  walkerTargets.forEach(target => {
    if (target.dataset.mathFallback === "1") return;
    let html = target.innerHTML;
    html = html.replace(/\\\((.+?)\\\)/g, (_, tex) => `<span class="lite-math">${escapeHtml(texReadable(tex))}</span>`);
    html = html.replace(/\\\[(.+?)\\\]/gs, (_, tex) => `<span class="lite-display">${escapeHtml(texReadable(tex))}</span>`);
    target.innerHTML = html;
    target.dataset.mathFallback = "1";
  });
}

function drawDiagram(id, target) {
  const diagrams = {
    "science-vs-ds": `
      <svg viewBox="0 0 760 250" role="img" aria-label="Traditional science and data science comparison">
        <text x="115" y="30" fill="rgba(255,255,255,.82)" font-size="16">Traditional Science</text>
        <text x="505" y="30" fill="rgba(255,255,255,.82)" font-size="16">Data Science</text>
        ${node(65,70,"Theory")}${node(65,155,"Observations")}${node(215,155,"Predictions")}${arrow(125,92,125,148)}${arrow(165,168,210,168)}
        ${node(455,70,"Data")}${node(455,155,"Training")}${node(605,155,"Predictions")}${node(605,70,"Theory")}${arrow(515,92,515,148)}${arrow(555,168,600,168)}${arrow(605,148,605,95)}
      </svg>`,
    crisp: `
      <svg viewBox="0 0 820 360" role="img" aria-label="CRISP-DM iterative process">
        ${node(50,50,"Business\\nUnderstanding",150)}${node(310,50,"Data\\nUnderstanding",150)}${node(570,50,"Data\\nPreparation",150)}
        ${node(570,220,"Modeling",150)}${node(310,220,"Evaluation",150)}${node(50,220,"Deployment",150)}
        ${arrow(200,88,302,88)}${arrow(460,88,562,88)}${arrow(645,118,645,212)}${arrow(570,258,462,258)}${arrow(310,258,202,258)}
        ${arrow(125,220,125,118)}${curvedArrow(190,72,315,230)}${curvedArrow(650,220,640,108)}${curvedArrow(370,220,125,118)}
      </svg>`,
    "missing-variance": `
      <svg viewBox="0 0 760 250" role="img" aria-label="Variance of sample mean grows after deletion">
        ${axis(70,200,680,200)}${axis(90,210,90,40)}
        <text x="90" y="30" fill="rgba(255,255,255,.6)" font-size="12">Variance of sample mean</text>
        <rect x="170" y="90" width="110" height="110" fill="rgba(74,222,128,.25)" stroke="rgba(74,222,128,.65)"/>
        <rect x="450" y="55" width="110" height="145" fill="rgba(251,191,36,.22)" stroke="rgba(251,191,36,.65)"/>
        <text x="155" y="224" fill="rgba(255,255,255,.72)" font-size="13">all observations</text>
        <text x="420" y="224" fill="rgba(255,255,255,.72)" font-size="13">after deleting m values</text>
        <text x="155" y="78" fill="rgba(74,222,128,.95)" font-size="14">sigma²/(n1+m)</text>
        <text x="430" y="42" fill="rgba(251,191,36,.95)" font-size="14">sigma²/n1</text>
      </svg>`,
    imputation: `
      <svg viewBox="0 0 760 260" role="img" aria-label="Mean imputation shrinks variance">
        ${axis(60,210,720,210)}
        ${bell(90,205,260,90,"rgba(147,197,253,.62)")}
        ${bell(430,205,230,55,"rgba(74,222,128,.62)")}
        <line x1="250" y1="70" x2="250" y2="210" stroke="rgba(255,255,255,.45)" stroke-dasharray="5 5"/>
        <line x1="545" y1="70" x2="545" y2="210" stroke="rgba(255,255,255,.45)" stroke-dasharray="5 5"/>
        <text x="135" y="238" fill="rgba(255,255,255,.72)" font-size="13">original spread</text>
        <text x="452" y="238" fill="rgba(255,255,255,.72)" font-size="13">more values at the mean</text>
      </svg>`,
    "relationship-break": `
      <svg viewBox="0 0 760 260" role="img" aria-label="Random imputation can break x-y relationship">
        ${scatterPanel(50,35,"Original relationship",true)}${scatterPanel(405,35,"Random replacement",false)}
      </svg>`,
    "outlier-1d-2d": `
      <svg viewBox="0 0 760 260" role="img" aria-label="Outliers in one and two dimensions">
        ${scatterPanel(50,35,"1D tools see extremes",true, true)}${scatterPanel(405,35,"2D pattern reveals anomaly",false, true)}
      </svg>`,
    boxplot: `
      <svg viewBox="0 0 760 240" role="img" aria-label="Boxplot IQR fences">
        ${axis(80,150,690,150)}
        <rect x="270" y="95" width="190" height="70" fill="rgba(74,222,128,.14)" stroke="rgba(74,222,128,.7)"/>
        <line x1="365" y1="95" x2="365" y2="165" stroke="rgba(255,255,255,.75)"/>
        <line x1="170" y1="130" x2="270" y2="130" stroke="rgba(255,255,255,.5)"/>
        <line x1="460" y1="130" x2="560" y2="130" stroke="rgba(255,255,255,.5)"/>
        <circle cx="635" cy="130" r="5" fill="rgba(248,113,113,.9)"/>
        <text x="266" y="188" fill="rgba(255,255,255,.7)" font-size="12">Q1</text><text x="356" y="188" fill="rgba(255,255,255,.7)" font-size="12">Q2</text><text x="452" y="188" fill="rgba(255,255,255,.7)" font-size="12">Q3</text>
        <text x="580" y="112" fill="rgba(248,113,113,.9)" font-size="12">above Q3 + 1.5 IQR</text>
      </svg>`,
    leverage: `
      <svg viewBox="0 0 760 300" role="img" aria-label="High leverage points in regression">
        ${axis(65,250,700,250)}${axis(75,260,75,35)}
        ${Array.from({length:19},(_,i)=>`<circle cx="${130+i*18}" cy="${220-i*5+(i%4)*8}" r="4" fill="rgba(255,255,255,.58)"/>`).join("")}
        <circle cx="330" cy="70" r="6" fill="rgba(147,197,253,.9)"/><text x="340" y="74" fill="rgba(147,197,253,.95)" font-size="13">A</text>
        <circle cx="640" cy="70" r="6" fill="rgba(251,191,36,.9)"/><text x="650" y="74" fill="rgba(251,191,36,.95)" font-size="13">B</text>
        <circle cx="640" cy="205" r="6" fill="rgba(248,113,113,.9)"/><text x="650" y="209" fill="rgba(248,113,113,.95)" font-size="13">C</text>
        <line x1="110" y1="222" x2="410" y2="138" stroke="rgba(74,222,128,.8)" stroke-width="3"/>
        <line x1="110" y1="226" x2="680" y2="92" stroke="rgba(251,191,36,.65)" stroke-width="3"/>
        <line x1="110" y1="218" x2="680" y2="197" stroke="rgba(248,113,113,.65)" stroke-width="3"/>
      </svg>`,
    "normal-lognormal": `
      <svg viewBox="0 0 760 260" role="img" aria-label="Normal and lognormal distributions">
        ${bell(90,210,250,95,"rgba(147,197,253,.65)")} ${lognormal(430,210,280,115)}
        <text x="165" y="235" fill="rgba(255,255,255,.72)" font-size="13">normal: mean approx median</text>
        <text x="442" y="235" fill="rgba(255,255,255,.72)" font-size="13">lognormal: mean pulled right</text>
      </svg>`,
    "iqr-normal": `
      <svg viewBox="0 0 760 240" role="img" aria-label="IQR in a normal distribution">
        ${bell(130,200,500,120,"rgba(74,222,128,.62)")}
        <line x1="300" y1="80" x2="300" y2="200" stroke="rgba(251,191,36,.85)" stroke-dasharray="4 5"/>
        <line x1="500" y1="80" x2="500" y2="200" stroke="rgba(251,191,36,.85)" stroke-dasharray="4 5"/>
        <path d="M300 70 H500" stroke="rgba(251,191,36,.85)" marker-end="url(#arrowhead)"/>
        <defs><marker id="arrowhead" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto"><path d="M0,0 L0,6 L6,3 z" fill="rgba(251,191,36,.85)"/></marker></defs>
        <text x="355" y="61" fill="rgba(251,191,36,.9)" font-size="14">1.35 sigma</text>
      </svg>`,
    scaling: `
      <svg viewBox="0 0 760 260" role="img" aria-label="Scaling changes distance-based clustering">
        ${scatterPanel(50,35,"Before scaling",false)}${scatterPanel(405,35,"After z-scores",true)}
      </svg>`,
    "log-transform": `
      <svg viewBox="0 0 760 260" role="img" aria-label="Log transform reduces skew">
        ${lognormal(80,210,280,125)}${bell(430,210,260,92,"rgba(74,222,128,.62)")}
        <text x="130" y="235" fill="rgba(255,255,255,.72)" font-size="13">raw positive skew</text>
        <text x="485" y="235" fill="rgba(255,255,255,.72)" font-size="13">log values</text>
      </svg>`,
    "eda-flow": `
      <svg viewBox="0 0 820 220" role="img" aria-label="EDA flow">
        ${node(40,70,"One variable",135)}${node(235,70,"Two variables",135)}${node(430,70,"Conditional\\nprobabilities",145)}${node(635,70,"Model-ready\\nquestions",145)}
        ${arrow(175,108,228,108)}${arrow(370,108,423,108)}${arrow(575,108,628,108)}
      </svg>`
  };
  target.innerHTML = diagrams[id] || "";
}

function node(x, y, label, width = 125) {
  const lines = String(label).split("\\n");
  return `<g><rect x="${x}" y="${y}" width="${width}" height="64" rx="8" fill="rgba(255,255,255,.045)" stroke="rgba(255,255,255,.12)"/>${lines.map((l, i) => `<text x="${x + width/2}" y="${y + 28 + i*17}" text-anchor="middle" fill="rgba(255,255,255,.78)" font-size="13">${l}</text>`).join("")}</g>`;
}
function arrow(x1,y1,x2,y2) {
  return `<line x1="${x1}" y1="${y1}" x2="${x2}" y2="${y2}" stroke="rgba(74,222,128,.55)" stroke-width="2"/><path d="M${x2} ${y2} l-7 -4 l0 8 z" fill="rgba(74,222,128,.65)" transform="rotate(${Math.atan2(y2-y1,x2-x1)*180/Math.PI} ${x2} ${y2})"/>`;
}
function curvedArrow(x1,y1,x2,y2) {
  const mx = (x1 + x2) / 2;
  return `<path d="M${x1} ${y1} Q${mx} ${Math.min(y1,y2)-55} ${x2} ${y2}" fill="none" stroke="rgba(147,197,253,.32)" stroke-width="2" stroke-dasharray="5 5"/>`;
}
function axis(x1,y1,x2,y2) {
  return `<line x1="${x1}" y1="${y1}" x2="${x2}" y2="${y2}" stroke="rgba(255,255,255,.18)"/><line x1="${x1}" y1="${y1}" x2="${x1}" y2="${y1-170}" stroke="rgba(255,255,255,.18)"/>`;
}
function bell(x,y,w,h,color) {
  return `<path d="M${x} ${y} C${x+w*.18} ${y}, ${x+w*.28} ${y-h}, ${x+w*.5} ${y-h} C${x+w*.72} ${y-h}, ${x+w*.82} ${y}, ${x+w} ${y}" fill="none" stroke="${color}" stroke-width="4"/><line x1="${x}" y1="${y}" x2="${x+w}" y2="${y}" stroke="rgba(255,255,255,.16)"/>`;
}
function lognormal(x,y,w,h) {
  return `<path d="M${x} ${y} C${x+25} ${y}, ${x+35} ${y-h*.9}, ${x+95} ${y-h} C${x+150} ${y-h*.95}, ${x+150} ${y-25}, ${x+w} ${y-12}" fill="none" stroke="rgba(251,191,36,.7)" stroke-width="4"/><line x1="${x}" y1="${y}" x2="${x+w}" y2="${y}" stroke="rgba(255,255,255,.16)"/>`;
}
function scatterPanel(x,y,title,structured, outlier=false) {
  const pts = Array.from({length:20}, (_,i) => {
    const px = x + 45 + (i%5)*34 + (i%3)*3;
    const py = structured ? y + 150 - (i%5)*19 + Math.floor(i/5)*5 : y + 70 + ((i*37)%110);
    return `<circle cx="${px}" cy="${py}" r="4" fill="rgba(255,255,255,.56)"/>`;
  }).join("");
  const special = outlier ? `<circle cx="${x+250}" cy="${y+42}" r="6" fill="rgba(248,113,113,.9)"/>` : "";
  return `<g><rect x="${x}" y="${y}" width="300" height="190" rx="8" fill="rgba(255,255,255,.025)" stroke="rgba(255,255,255,.09)"/><text x="${x+16}" y="${y+24}" fill="rgba(255,255,255,.72)" font-size="13">${title}</text>${pts}${special}</g>`;
}
