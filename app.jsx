// app.jsx — Router, theme/tweaks orchestration, mounts pages.

const TWEAK_DEFAULTS = /*EDITMODE-BEGIN*/{
  "heroMode": "cinematic",
  "palette": ["#0E0E0C","#F4F2EE","#7A766E","#2A2826"],
  "typeface": "hanken",
  "grain": true,
  "showStickyMeta": true
}/*EDITMODE-END*/;

const PALETTES = {
  "warm-mineral":   ["#EDE8E1","#1B1A18","#6E6A62","#C9BFAF"],
  "cool-neutral":   ["#F2F1EE","#111111","#7A7A7A","#D8D8D8"],
  "deep-stone":     ["#0E0E0C","#F4F2EE","#7A766E","#2A2826"],
  "bone-warm":      ["#F4F2EE","#1B1A18","#6E6A62","#A39E94"],
};

const TYPEFACES = {
  hanken: { sans:"'Hanken Grotesk', sans-serif" },
  geist:  { sans:"'Geist', 'Hanken Grotesk', sans-serif" },
  space:  { sans:"'Space Grotesk', 'Hanken Grotesk', sans-serif" },
};

const ROUTES = ["home","products","portfolio","contacts","client"];
const ROUTE_LABELS = { home:"Início", products:"Produtos", portfolio:"Portfólio", contacts:"Contactos", client:"Cliente" };

function parseHash(){
  const h = (location.hash || "").replace(/^#\/?/, "").trim();
  const [base, sub] = h.split("/");
  if(!ROUTES.includes(base)) return { route:"home", sub:null };
  return { route: base, sub: sub || null };
}

function App(){
  const [t, setTweak] = useTweaks(TWEAK_DEFAULTS);
  const initial = parseHash();
  const [route, setRoute] = useState(initial.route);
  const [sub, setSub] = useState(initial.sub);

  // Hash-routing
  useEffect(() => {
    const onHash = () => {
      const p = parseHash();
      setRoute(p.route);
      setSub(p.sub);
      window.scrollTo({ top:0, behavior:"instant" });
    };
    window.addEventListener("hashchange", onHash);
    return () => window.removeEventListener("hashchange", onHash);
  }, []);

  const go = useCallback((path) => {
    // accepts "home", "products", or "products/pedra-natural"
    location.hash = "#/" + path;
  }, []);

  // Apply palette + typeface vars to :root
  useEffect(() => {
    const r = document.documentElement.style;
    const p = t.palette || PALETTES["warm-mineral"];
    r.setProperty("--bg", p[0]);
    r.setProperty("--ink", p[1]);
    r.setProperty("--mid", p[2]);
    r.setProperty("--warm", p[3]);
    r.setProperty("--bg-2", mix(p[0], p[1], 0.06));
    // bg-deep stays a dark surface regardless of palette direction
    const lumOf = (hex) => {
      const m = /^#?([0-9a-f]{2})([0-9a-f]{2})([0-9a-f]{2})$/i.exec(hex);
      if(!m) return 1;
      const ln = (v) => { v = parseInt(v,16)/255; return v <= .03928 ? v/12.92 : Math.pow((v+.055)/1.055, 2.4); };
      return .2126*ln(m[1]) + .7152*ln(m[2]) + .0722*ln(m[3]);
    };
    const deeper = lumOf(p[0]) < lumOf(p[1]) ? p[0] : p[1];
    r.setProperty("--bg-deep", deeper);
    r.setProperty("--line", `color-mix(in oklab, ${p[1]} 14%, transparent)`);
    r.setProperty("--line-soft", `color-mix(in oklab, ${p[1]} 6%, transparent)`);
    r.setProperty("--line-on-dark", `color-mix(in oklab, ${p[0]} 18%, transparent)`);
    r.setProperty("--ink-2", `color-mix(in oklab, ${p[1]} 78%, ${p[0]})`);
    r.setProperty("--soft", `color-mix(in oklab, ${p[1]} 40%, ${p[0]})`);

    // Auto-set data-theme based on bg luminance (dark bg ⇒ dark theme)
    document.body.setAttribute("data-theme", lumOf(p[0]) < 0.35 ? "dark" : "light");

    const tf = TYPEFACES[t.typeface] || TYPEFACES.hanken;
    r.setProperty("--f-sans", tf.sans);

    // grain toggle: use class on <html>
    document.documentElement.classList.toggle("no-grain", !t.grain);
  }, [t.palette, t.typeface, t.grain]);

  // simple hex mix for bg-2
  function mix(a, b, w){
    const ph = (h) => [parseInt(h.slice(1,3),16), parseInt(h.slice(3,5),16), parseInt(h.slice(5,7),16)];
    const A = ph(a), B = ph(b);
    const m = A.map((c,i) => Math.round(c*(1-w) + B[i]*w));
    return "#"+m.map(c => c.toString(16).padStart(2,"0")).join("");
  }

  // counter for sticky meta
  const counter = (() => {
    if(route === "products") return sub
      ? (findCategory(sub)?.label || "Produtos")
      : String(CATEGORIES.length).padStart(2,"0") + " famílias";
    if(route === "portfolio") return String(PORTFOLIO.length).padStart(2,"0") + " projectos";
    if(route === "home") return "MVA · 2026";
    return null;
  })();

  // section tracker (for sticky meta) — observe section headings on home
  const [section, setSection] = useState("§ 01");
  useEffect(() => {
    if(route !== "home"){ setSection(ROUTE_LABELS[route]); return; }
    const handle = () => {
      const heads = Array.from(document.querySelectorAll(".t-mono"));
      const tops = heads
        .filter(h => h.textContent && h.textContent.startsWith("§"))
        .map(h => ({ el:h, t:h.getBoundingClientRect().top }));
      const passed = tops.filter(o => o.t < 200).slice(-1)[0];
      if(passed) setSection(passed.el.textContent.replace(/—.*$/,"").trim());
    };
    handle();
    window.addEventListener("scroll", handle, { passive:true });
    return () => window.removeEventListener("scroll", handle);
  }, [route]);

  let body;
  if(route === "home")      body = <HomePage go={go} tweaks={t} />;
  else if(route === "products")  body = <ProductsPage go={go} sub={sub} />;
  else if(route === "portfolio") body = <PortfolioPage go={go} />;
  else if(route === "contacts")  body = <ContactsPage go={go} />;
  else if(route === "client")    body = <ClientPage go={go} />;

  return (
    <>
      <ScrollProgress />
      <Nav route={route} go={go} />
      {body}
      {route !== "client" && <Footer go={go} />}
      {t.showStickyMeta && route !== "contacts" && route !== "client" && !(route === "products" && sub) && <StickyMeta section={section} counter={counter} />}

      <TweaksPanel title="Tweaks">
        <TweakSection label="Hero (Início)" />
        <TweakRadio
          label="Modo"
          value={t.heroMode}
          options={["cinematic","split","editorial"]}
          onChange={(v)=>setTweak("heroMode", v)} />

        <TweakSection label="Tipografia" />
        <TweakRadio
          label="Família"
          value={t.typeface}
          options={["hanken","geist","space"]}
          onChange={(v)=>setTweak("typeface", v)} />

        <TweakSection label="Paleta" />
        <TweakColor
          label="Direcção"
          value={t.palette}
          options={Object.values(PALETTES)}
          onChange={(v)=>setTweak("palette", v)} />

        <TweakSection label="Detalhes" />
        <TweakToggle label="Grão na pedra" value={t.grain} onChange={(v)=>setTweak("grain", v)} />
        <TweakToggle label="Meta lateral" value={t.showStickyMeta} onChange={(v)=>setTweak("showStickyMeta", v)} />
      </TweaksPanel>
    </>
  );
}

// Inject "no-grain" rule (overrides .ph-grain::before opacity)
const _ng = document.createElement("style");
_ng.textContent = ".no-grain .ph-grain::before{ opacity:0 !important; }";
document.head.appendChild(_ng);

const _root = ReactDOM.createRoot(document.getElementById("root"));
_root.render(<App />);
