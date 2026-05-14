// chrome.jsx — Nav, Footer, sticky meta, scroll progress, shared primitives.

const { useState, useEffect, useRef, useMemo, useCallback } = React;

// ───────────────────────────── Reveal hook
function useReveal() {
  useEffect(() => {
    const els = document.querySelectorAll(".reveal:not(.in)");
    const io = new IntersectionObserver((ents) => {
      ents.forEach((e) => {if (e.isIntersecting) {e.target.classList.add("in");io.unobserve(e.target);}});
    }, { threshold: 0.14, rootMargin: "0px 0px -40px 0px" });
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  });
}

// ───────────────────────────── Scroll progress + nav scrolled state
function useScroll() {
  const [scrolled, setScrolled] = useState(false);
  const [prog, setProg] = useState(0);
  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY || 0;
      setScrolled(y > 24);
      const h = document.documentElement.scrollHeight - window.innerHeight || 1;
      setProg(Math.min(1, Math.max(0, y / h)));
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return { scrolled, prog };
}

// ───────────────────────────── Brand mark
function Brand({ onClick }) {
  return (
    <a href="#/home" onClick={onClick} className="brand" aria-label="MVA Mármores — início">
      <span className="b-mark">M</span>
      <span>MVA <span style={{ opacity: .5, fontWeight: 400 }}>Mármores</span></span>
    </a>);

}

// ───────────────────────────── Nav
function Nav({ route, go }) {
  const { scrolled } = useScroll();
  const items = [
  { id: "home", label: "Início" },
  { id: "products", label: "Produtos" },
  { id: "portfolio", label: "Portfólio" },
  { id: "contacts", label: "Contactos" },
  { id: "client", label: "Área de Cliente" }];

  return (
    <nav className={"nav-root" + (scrolled ? " scrolled" : "")}>
      <Brand onClick={(e) => {e.preventDefault();go("home");}} />
      <div className="nav-links">
        {items.map((it) =>
        <a key={it.id} href={"#/" + it.id}
        onClick={(e) => {e.preventDefault();go(it.id);}}
        className={"nav-link" + (route === it.id ? " on" : "")}>
            {it.label}
          </a>
        )}
      </div>
    </nav>);

}

// ───────────────────────────── Sticky scroll meta (current section + counter)
function StickyMeta({ section, counter }) {
  if (!section && !counter) return null;
  return (
    <div className="sticky-meta">
      {section && <div><div className="label">Secção</div><div className="v">{section}</div></div>}
      {counter && <div><div className="label">Índice</div><div className="v">{counter}</div></div>}
    </div>);

}

function ScrollProgress() {
  const { prog } = useScroll();
  return (
    <div className="scroll-prog"><div className="bar" style={{ width: (prog * 100).toFixed(2) + "%" }} /></div>);

}

// ───────────────────────────── Footer
function Footer({ go }) {
  return (
    <footer className="foot">
      <div className="ftop">
        <div>
          <div className="t-mono" style={{ color: "rgba(244,242,238,.45)", marginBottom: 24 }}>MVA — MÁRMORES VALENTIM DE AZEVEDO</div>
          <h2 className="t-h2" style={{ margin: 0, fontWeight: 300, letterSpacing: "-0.02em", maxWidth: 520, color: "rgb(255, 255, 255)" }}>
            Pedra trabalhada<br />com tempo e precisão.
          </h2>
          <div style={{ marginTop: 32 }}>
            <a href="#/contacts" onClick={(e) => {e.preventDefault();go("contacts");}}
            className="btn" style={{ borderColor: "#fff", color: "#fff" }}>
              <span style={{ color: "rgb(146, 146, 146)" }}>Iniciar um projecto</span>
              <span style={{ display: "inline-block", width: 18, height: 1, background: "currentColor", position: "relative" }} />
            </a>
          </div>
        </div>
        <div>
          <h4>Navegação</h4>
          <ul>
            <li><a href="#/home" onClick={(e) => {e.preventDefault();go("home");}}>Início</a></li>
            <li><a href="#/products" onClick={(e) => {e.preventDefault();go("products");}}>Produtos</a></li>
            <li><a href="#/portfolio" onClick={(e) => {e.preventDefault();go("portfolio");}}>Portfólio</a></li>
            <li><a href="#/contacts" onClick={(e) => {e.preventDefault();go("contacts");}}>Contactos</a></li>
            <li><a href="#/client" onClick={(e) => {e.preventDefault();go("client");}}>Área de Cliente</a></li>
          </ul>
        </div>
        <div>
          <h4>Atelier</h4>
          <ul>
            <li style={{ color: "rgb(255, 255, 255)" }}>Parque Industrial Lote 50</li>
            <li style={{ color: "rgb(255, 255, 255)" }}>3045-504 Taveiro</li>
            <li style={{ color: "rgb(255, 255, 255)" }}>Portugal</li>
            <li style={{ marginTop: 14, color: "rgb(255, 255, 255)" }}>239 983 022</li>
            <li style={{ color: "rgba(244,242,238,.55)" }}>Fax 239 983 025</li>
            <li style={{ marginTop: 14 }}>mvacomercial@gmail.com</li>
          </ul>
        </div>
        <div>
          <h4>Horário</h4>
          <ul>
            <li style={{ color: "rgb(255, 255, 255)" }}>Segunda — Sexta</li>
            <li style={{ color: "rgba(244,242,238,.55)" }}>08:00 — 18:00</li>
            <li style={{ marginTop: 14, color: "rgb(255, 255, 255)" }}>Visita ao showroom</li>
            <li style={{ color: "rgba(244,242,238,.55)" }}>Sob marcação</li>
          </ul>
        </div>
      </div>
      <div style={{ display: "flex", justifyContent: "center", padding: "56px var(--pad-x) 24px" }}>
        <img
          src="assets/centro-2030.png"
          alt="Centro 2030 · Portugal 2030 · Cofinanciado pela União Europeia"
          style={{
            display: "block",
            width: "100%",
            maxWidth: 520,
            height: "auto",
            opacity: .92
          }} />
      </div>
      <div className="fbot">
        <div>© 2026 MVA Mármores · Todos os direitos reservados</div>
        <div>PT · EN</div>
      </div>
    </footer>);

}

// ───────────────────────────── Tonal stone placeholder
function Stone({ tone = 1, label, sub, h = "auto", style, dark, className = "" }) {
  const cls = `ph ph-stone-${tone} ph-grain`;
  return (
    <div className={cls + " " + className} style={{ height: h, ...style }}>
      {label &&
      <div style={{
        position: "absolute", left: 18, bottom: 18, right: 18,
        display: "flex", justifyContent: "space-between", alignItems: "flex-end",
        color: dark ? "rgba(244,242,238,.85)" : "rgba(27,26,24,.7)",
        fontFamily: "var(--f-mono)", fontSize: 10, letterSpacing: ".06em", textTransform: "uppercase"
      }}>
          <span>{label}</span>
          {sub && <span style={{ opacity: .7 }}>{sub}</span>}
        </div>
      }
    </div>);

}

// Striped catalog placeholder
function StripePh({ caption, h = "auto", style, className = "" }) {
  return (
    <div className={"ph ph-stripe " + className} style={{ height: h, ...style }}>
      {caption && <div className="ph-cap">{caption}</div>}
    </div>);

}

Object.assign(window, { useReveal, useScroll, Brand, Nav, StickyMeta, ScrollProgress, Footer, Stone, StripePh });