// home.jsx — Home page: cinematic hero + timeless editorial sections.

function HeroCinematic({ tweaks }) {
  const slides = [
  { image: "assets/hero-1.png", chapter: "01 — Matéria", loc: "Pedra" },
  { image: "assets/hero-2.png", chapter: "02 — Espaço", loc: "Arquitectura" },
  { image: "assets/hero-3.png", chapter: "03 — Aplicação", loc: "Detalhe" }];

  const [i, setI] = useState(0);
  useEffect(() => {
    const t = setInterval(() => setI((v) => (v + 1) % slides.length), 8400);
    return () => clearInterval(t);
  }, []);
  const cur = slides[i];

  return (
    <section style={{ position: "relative", height: "100vh", minHeight: 640, overflow: "hidden", background: "#0E0E0C" }}>
      {slides.map((s, idx) =>
      <div key={idx} style={{
        position: "absolute", inset: 0,
        opacity: idx === i ? 1 : 0,
        transition: "opacity 2.6s cubic-bezier(.65,.05,.36,1)"
      }}>
          <div style={{
          position: "absolute", inset: 0,
          backgroundImage: `url("${s.image}")`,
          backgroundSize: "cover",
          backgroundPosition: "center center",
          backgroundRepeat: "no-repeat",
          filter: "saturate(.95) contrast(1.02)"
        }} />
          <div style={{
          position: "absolute", inset: 0,
          background: "linear-gradient(180deg, rgba(14,14,12,.45) 0%, rgba(14,14,12,.05) 28%, rgba(14,14,12,.05) 55%, rgba(14,14,12,.7) 100%)"
        }} />
        </div>
      )}

      <div style={{
        position: "absolute", top: "calc(var(--nav-h) + 28px)", left: "var(--pad-x)", right: "var(--pad-x)",
        display: "flex", justifyContent: "space-between", color: "rgba(244,242,238,.85)",
        fontFamily: "var(--f-mono)", fontSize: 11, letterSpacing: ".08em", textTransform: "uppercase"
      }}>
        <span>DESDE 1962</span>
        <span style={{ opacity: "0" }}>{cur.chapter}</span>
      </div>

      <div style={{
        position: "absolute", left: "var(--pad-x)", right: "var(--pad-x)",
        bottom: "22%", color: "#F4F2EE"
      }}>
        <div className="t-mono" style={{ color: "rgba(244,242,238,.6)", marginBottom: 24, opacity: "0" }}>
          {String(i + 1).padStart(2, "0")} / {String(slides.length).padStart(2, "0")} · {cur.loc}
        </div>
        <h1 style={{
          margin: 0, color: "#F4F2EE",
          fontFamily: "var(--f-sans)",
          fontSize: "clamp(40px, 5.2vw, 78px)",
          lineHeight: 1.02,
          letterSpacing: "0.005em",
          fontWeight: 300,
          textTransform: "uppercase",
          maxWidth: "16ch"
        }}>
          A pedra como<br />arquitectura
        </h1>
      </div>

      <div style={{
        position: "absolute", bottom: 36, left: "var(--pad-x)", right: "var(--pad-x)",
        display: "flex", justifyContent: "space-between", alignItems: "flex-end",
        color: "#F4F2EE"
      }}>
        <div style={{ display: "flex", gap: 12, alignItems: "center" }}>
          {slides.map((_, idx) =>
          <button key={idx} onClick={() => setI(idx)}
          aria-label={`Capítulo ${idx + 1}`}
          style={{
            width: idx === i ? 44 : 22, height: 1,
            background: "#F4F2EE",
            opacity: idx === i ? 1 : .35,
            transition: "width .8s var(--ease), opacity .5s",
            cursor: "default"
          }} />
          )}
        </div>
        <div className="t-mono" style={{ color: "rgba(244,242,238,.5)" }}>
          Scroll ↓
        </div>
      </div>
    </section>);

}

function HeroSplit() {
  return (
    <section style={{
      minHeight: "100vh", display: "grid", gridTemplateColumns: "1.1fr 1fr",
      background: "var(--bg)", paddingTop: "var(--nav-h)"
    }}>
      <div style={{ position: "relative" }}><Stone tone={7} h="100%" /></div>
      <div style={{ padding: "max(80px, 8vw) var(--pad-x) 80px", display: "flex", flexDirection: "column", justifyContent: "space-between" }}>
        <div className="t-mono">Atelier · Est. 1987</div>
        <div>
          <h1 className="t-display" style={{ margin: 0, maxWidth: "12ch" }}>Pedra<br />com tempo.</h1>
          <p className="t-lead" style={{ marginTop: 32, maxWidth: "36ch" }}>
            Atelier português dedicado à transformação de pedra natural — selecção, corte e aplicação para arquitectura contemporânea.
          </p>
        </div>
        <div style={{ display: "flex", gap: 14 }}>
          <a href="#/portfolio" className="btn btn-fill"><span>Ver portfólio</span><span className="dot" /></a>
          <a href="#/products" className="btn"><span>Materiais</span></a>
        </div>
      </div>
    </section>);

}

function HeroEditorial() {
  return (
    <section style={{ minHeight: "100vh", paddingTop: "calc(var(--nav-h) + 60px)", paddingBottom: 60 }}>
      <div className="container">
        <div className="t-mono" style={{ marginBottom: 28 }}>Atelier · Est. 1987</div>
        <h1 className="t-display" style={{ margin: 0 }}>
          Pedra,<br />
          <span style={{ fontStyle: "italic", fontWeight: 300, opacity: .65 }}>silêncio</span>,<br />
          arquitectura.
        </h1>
        <div style={{ marginTop: 48 }}><Stone tone={7} h="46vh" /></div>
      </div>
    </section>);

}

function HomeHero({ mode }) {
  if (mode === "split") return <HeroSplit />;
  if (mode === "editorial") return <HeroEditorial />;
  return <HeroCinematic />;
}

// ─── § 01 Atelier
function HomeIntro() {
  return (
    <section className="container reveal" style={{ padding: "100px var(--pad-x) 90px" }}>
      <div data-mobile-stack="" style={{ display: "grid", gridTemplateColumns: "minmax(0, 1.45fr) minmax(0, 1fr)", gap: "min(80px, 6vw)", alignItems: "center" }}>
        {/* Visual block — controlled editorial proportion */}
        <div style={{ position: "relative", overflow: "hidden", aspectRatio: "16 / 10", width: "100%", background: "#1B1A18" }}>
          <img src="assets/atelier.jpg" alt="Atelier MVA" style={{
            position: "absolute", inset: 0, width: "100%", height: "100%",
            objectFit: "cover", objectPosition: "center center",
            filter: "saturate(.95) contrast(1.02)"
          }} />
          <div style={{
            position: "absolute", top: 18, left: 18,
            fontFamily: "var(--f-mono)", fontSize: 10, letterSpacing: ".08em", textTransform: "uppercase",
            color: "rgba(244,242,238,.85)", mixBlendMode: "difference"
          }}>

          </div>
        </div>

        <div style={{ display: "flex", flexDirection: "column", justifyContent: "flex-start", padding: "8px 0" }}>
          <div className="t-mono" style={{ letterSpacing: ".14em", opacity: "0" }}>§ 01 — Desde 1962</div>
          <h2 style={{
            margin: "36px 0 0",
            fontFamily: "var(--f-sans)",
            fontSize: "clamp(28px, 2.6vw, 40px)",
            lineHeight: 1.05,
            letterSpacing: "0.02em",
            fontWeight: 300,
            textTransform: "uppercase"
          }}>
            Desde 1962
          </h2>
          <div style={{ width: 48, height: 1, background: "var(--line)", margin: "28px 0 0" }} />
          <div style={{ display: "grid", gridTemplateColumns: "1fr", gap: "22px", marginTop: 36, maxWidth: "52ch" }}>
            <p className="t-body" style={{ margin: 0, fontSize: 15, lineHeight: 1.7, color: "var(--ink-2)" }}>
              a Mármores Valentim de Azevedo, LDA conta com experiência acumulada de várias gerações a trabalhar bem pedra, sendo uma referência nacional.
            </p>
            <p className="t-body" style={{ margin: 0, fontSize: 15, lineHeight: 1.7, color: "var(--ink-2)" }}>
              A sua atividade abrange o processo de transformação de pedra natural até à instalação de superfícies planas, como bancadas de cozinha e banho, revestimentos e outros produtos elaborados.
            </p>
            <p className="t-body" style={{ margin: 0, fontSize: 15, lineHeight: 1.7, color: "var(--ink-2)" }}>
              Com o recurso a meio tecnológicos e humanos especializados, a MVA tem obtido os mais elevados níveis de produção e qualidade, permitindo responder com eficácia às exigências do mercado. Esta paixão pela pedra, aliada à inovação e qualidade resulta na oferta de uma gama alargada de produtos com características funcionais e de elevado valor acrescentado.
            </p>
          </div>
          <div style={{
            marginTop: 40, paddingTop: 28,
            borderTop: "1px solid var(--line)",
            maxWidth: "52ch"
          }}>
            <p style={{
              margin: 0,
              fontFamily: "var(--f-sans)",
              fontSize: 17, lineHeight: 1.55,
              color: "var(--ink)", fontWeight: 400,
              letterSpacing: "-0.005em"
            }}>
              Através de uma ação consciente, integramos o passado, atendemos o presente, perspetivando o futuro.
            </p>
          </div>
        </div>
      </div>
    </section>);

}

// ─── § 02 Materiais — five timeless families
function FeaturedMaterials({ go }) {
  const items = [
  { image: "assets/home/pedra-natural.png", name: "Pedra Natural", desc: "Veios irrepetíveis. A matéria como ela é.", slug: "pedra-natural" },
  { image: "assets/home/quartzo.png", name: "Quartzo", desc: "Performance desenhada, palete cromática controlada.", slug: "quartzo" },
  { image: "assets/home/ceramico.png", name: "Cerâmico", desc: "Plano contínuo, escala arquitectónica.", slug: "ceramico" },
  { image: "assets/home/solid-surfaces.png", name: "Solid Surfaces", desc: "Continuidade sem juntas, formas esculpidas.", slug: "solid-surfaces" },
  { image: "assets/home/integrity.png", name: "Cubas MVA", desc: "Lavatório e bancada, um só gesto.", slug: "pias-integrity" }];

  return (
    <section style={{ padding: "40px 0 140px" }}>
      <div className="container reveal feat-mat-header" style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", marginBottom: 48 }}>
        <div>
          <div className="t-mono" style={{ marginBottom: 18, opacity: "0" }}>§ 02 — Materiais</div>
          <h2 className="t-h1" style={{ margin: 0, maxWidth: "14ch", fontWeight: 300, fontSize: "83px" }}>Materiais</h2>
        </div>
        <a href="#/products" onClick={(e) => {e.preventDefault();go("products");}} className="lnk">
          <span>Explorar todas as famílias</span><span className="arr" />
        </a>
      </div>

      <div className="container reveal reveal-d2">
        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
          gap: 1, background: "var(--line)"
        }}>
          {items.map((it, idx) =>
          <FeaturedMaterialCard key={idx} item={it} idx={idx} go={go} />
          )}
        </div>
      </div>
    </section>);

}

function FeaturedMaterialCard({ item, idx, go }) {
  const [hover, setHover] = useState(false);
  return (
    <a href={`#/products/${item.slug}`}
    onClick={(e) => {e.preventDefault();go("products/" + item.slug);}}
    onMouseEnter={() => setHover(true)}
    onMouseLeave={() => setHover(false)}
    style={{ background: "var(--bg)", padding: 0, display: "block" }}>
      <div className="mat-card-img" style={{ position: "relative", overflow: "hidden", height: "62vh", minHeight: 380, background: "#1B1A18" }}>
        <div style={{
          position: "absolute", inset: 0,
          backgroundImage: `url("${item.image}")`,
          backgroundSize: "cover",
          backgroundPosition: "center center",
          backgroundRepeat: "no-repeat",
          transform: hover ? "scale(1.018)" : "scale(1)",
          transition: "transform 2.4s cubic-bezier(.65,.05,.36,1)",
          filter: "saturate(.94) contrast(1.02)"
        }} />
        <div style={{
          position: "absolute", inset: 0, pointerEvents: "none",
          background: "linear-gradient(180deg, rgba(14,14,12,.05) 0%, rgba(14,14,12,0) 35%, rgba(14,14,12,.18) 100%)"
        }} />
      </div>
      <div style={{ padding: "22px 22px 28px", background: "var(--bg)", display: "flex", justifyContent: "space-between", alignItems: "flex-start", gap: 14 }}>
        <div style={{ flex: 1 }}>
          <div style={{ fontSize: 18, fontWeight: 500, letterSpacing: "-0.01em" }}>{item.name}</div>
          <div className="t-small" style={{ marginTop: 8, fontSize: 13, color: "var(--mid)", lineHeight: 1.45, maxWidth: "28ch" }}>{item.desc}</div>
        </div>
        <span className="t-mono" style={{ fontSize: 10, paddingTop: 4, opacity: .55 }}>0{idx + 1}</span>
      </div>
    </a>);

}

// ─── § 03 Actualidade
function EditorialPull() {
  return (
    <section className="surface-deep" style={{ padding: "100px 0", color: "var(--bg)" }}>
      <div className="container reveal" style={{
        display: "grid", gridTemplateColumns: "minmax(0, 1.45fr) minmax(0, 1fr)", gap: "min(80px, 6vw)", alignItems: "stretch"
      }} data-mobile-stack="">
        {/* Left visual card — height-matched to text column */}
        <div style={{ position: "relative", overflow: "hidden", width: "100%", background: "#1B1A18", minHeight: 0 }}>
          <img src="assets/actualidade.png" alt="Actualidade MVA" style={{
            position: "absolute", inset: 0,
            width: "100%", height: "100%",
            objectFit: "cover",
            objectPosition: "center center",
            filter: "saturate(.95) contrast(1.02)",
            display: "block"
          }} />
          <div style={{
            position: "absolute", top: 18, left: 18,
            fontFamily: "var(--f-mono)", fontSize: 10, letterSpacing: ".08em", textTransform: "uppercase",
            color: "rgba(244,242,238,.9)", mixBlendMode: "difference", opacity: "0"
          }}>
            Parque Industrial · Taveiro
          </div>
        </div>

        {/* Right text */}
        <div style={{ display: "flex", flexDirection: "column", justifyContent: "center", padding: "24px 0" }}>
          <div className="t-mono" style={{ color: "rgba(244,242,238,.55)", letterSpacing: ".14em", opacity: "0" }}>§ 03 — Actualidade</div>
          <h2 style={{
            margin: "36px 0 0",
            fontFamily: "var(--f-sans)",
            fontSize: "clamp(28px, 2.6vw, 40px)",
            lineHeight: 1.05,
            letterSpacing: "0.02em",
            fontWeight: 300,
            textTransform: "uppercase",
            color: "#F4F2EE"
          }}>
            Actualidade
          </h2>
          <div style={{ width: 48, height: 1, background: "rgba(244,242,238,.25)", margin: "28px 0 0" }} />
          <p style={{
            margin: "36px 0 0",
            fontFamily: "var(--f-sans)",
            fontSize: 15, lineHeight: 1.7,
            color: "rgba(244,242,238,.82)",
            maxWidth: "52ch"
          }}>
            Em 2003 dá o grande salto qualitativo ao inaugurar as novas instalações no Parque Industrial de Taveiro, onde todo o processo de transformação é suportado pela mais recente e fiável tecnologia, proporcionando deste modo elevados níveis de produção e qualidade que permitem responder com eficácia às exigentes solicitações do mercado.
          </p>
        </div>
      </div>
    </section>);

}

// ─── § 04 Arquitectura em matéria — timeless showcase (no client/year)
function ArchitectureInMatter({ go }) {
  return (
    <section className="surface-deep" style={{ padding: "100px 0", color: "var(--bg)" }}>
      <div className="container reveal" data-mobile-stack="" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "min(80px, 6vw)", alignItems: "end", marginBottom: 60 }}>
        <div>
          <div className="t-mono" style={{ color: "rgba(244,242,238,.6)", marginBottom: 18, opacity: "0" }}>§ 04 — Aplicações</div>
          <h2 className="t-h1" style={{ margin: 0, color: "rgb(255, 255, 255)", fontWeight: 300, maxWidth: "14ch" }}>
            <span style={{ color: "rgb(255, 255, 255)" }}>Arquitectura</span><br /><span style={{ color: "rgb(255, 255, 255)" }}>em</span> <span style={{ fontStyle: "italic", color: "rgb(255, 255, 255)" }}>matéria</span>
          </h2>
        </div>
        <div>
          <p className="t-lead" style={{ margin: 0, color: "rgba(244,242,238,.85)", maxWidth: "44ch" }}>
            A pedra entendida como linguagem do espaço. Continuidade entre pavimento, parede e mobiliário; integração de matéria e luz; pormenor executado à medida do desenho.
          </p>
        </div>
      </div>

      {/* Editorial gallery — 1 wide horizontal + 3 verticals below */}
      <div className="container reveal reveal-d2" style={{ display: "grid", gap: 18 }}>
        {/* Full-bleed wide hero */}
        <div className="arch-wide" style={{ aspectRatio: "21 / 9", overflow: "hidden", background: "#1B1A18" }}>
          <img src="assets/aplicacoes-1.jpg" alt="Aplicação em contexto — bancada" style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "center", display: "block" }} />
        </div>
        {/* 3 vertical cards */}
        <div className="arch-3col" style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 18 }}>
          <div style={{ aspectRatio: "3 / 4", overflow: "hidden", background: "#1B1A18" }}>
            <img src="assets/aplicacoes-2.jpg" alt="Revestimento de parede em mármore" style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "center", display: "block" }} />
          </div>
          <div style={{ aspectRatio: "3 / 4", overflow: "hidden", background: "#1B1A18" }}>
            <img src="assets/aplicacoes-3.jpg" alt="Detalhe de lava-louça em pedra" style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "center", display: "block" }} />
          </div>
          <div style={{ aspectRatio: "3 / 4", overflow: "hidden", background: "#1B1A18" }}>
            <img src="assets/aplicacoes-4.jpg" alt="Bancada em cozinha contemporânea" style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "center", display: "block" }} />
          </div>
        </div>
      </div>

      <div className="container" style={{ marginTop: 48, display: "flex", justifyContent: "space-between", alignItems: "center" }}>
        <div className="t-mono" style={{ color: "rgba(244,242,238,.5)" }}>Selecção · Pavimentos, paredes, mobiliário fixo</div>
        <a href="#/portfolio" onClick={(e) => {e.preventDefault();go("portfolio");}}
        className="lnk" style={{ color: "#fff" }}>
          <span>Aplicações em contexto</span><span className="arr" />
        </a>
      </div>
    </section>);

}

// ─── § 05 Espaços — 4 timeless lifestyle categories (linkable externally later)
function ApplicationsBlock({ go }) {
  const SPACES = [
  { id: "cozinhas", n: "01", label: "Cozinhas", desc: "Bancada contínua, ilha esculpida, plano de trabalho." },
  { id: "banhos", n: "02", label: "Casas de banho", desc: "Lavatório integrado, parede em pedra, atmosfera serena." },
  { id: "sala", n: "03", label: "Sala de estar", desc: "Pavimento contínuo, lareira em matéria única." },
  { id: "exterior", n: "04", label: "Exterior", desc: "Fachada ventilada, pátio, escada exterior." }];

  return (
    <section className="container reveal" style={{ padding: "100px var(--pad-x)" }}>
      <div data-mobile-stack="" style={{ display: "grid", gridTemplateColumns: "1fr 2fr", gap: "min(120px, 8vw)", marginBottom: 64, alignItems: "stretch" }}>
        <div style={{ display: "flex", flexDirection: "column", gap: 16, minHeight: 0 }}>
          <div className="t-mono" style={{ opacity: "0" }}>§ 05 — Espaços</div>
          <div className="app-block-img" style={{ position: "relative", overflow: "hidden", flexGrow: 1, minHeight: 200 }}>
            <img src="assets/Hero_-_Materia.png" alt="" style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover", objectPosition: "center center", display: "block" }} />
          </div>
        </div>
        <div>
          <h2 className="t-h1" style={{ margin: 0, fontWeight: 300, maxWidth: "22ch" }}>A matéria, segundo o lugar

          </h2>
        </div>
      </div>

      <div style={{ borderTop: "1px solid var(--line)" }}>
        {SPACES.map((a) =>
        <a key={a.id}
        href="#/portfolio"
        data-href-external=""
        onClick={(e) => {e.preventDefault();go("portfolio");}}
        className="app-row"
        style={{
          display: "grid", gridTemplateColumns: "80px 1fr 320px 60px",
          alignItems: "center", padding: "40px 0",
          borderBottom: "1px solid var(--line)",
          transition: "padding-left .5s var(--ease)"
        }}
        onMouseEnter={(e) => {e.currentTarget.style.paddingLeft = "14px";}}
        onMouseLeave={(e) => {e.currentTarget.style.paddingLeft = "0px";}}>
            <span className="t-mono">/{a.n}</span>
            <span className="t-h2" style={{ fontWeight: 300, letterSpacing: "-0.02em" }}>{a.label}</span>
            <span className="app-desc t-small" style={{ color: "var(--mid)", maxWidth: "40ch" }}>{a.desc}</span>
            <span className="app-arr" style={{ textAlign: "right" }}>
              <span style={{
              display: "inline-block", width: 30, height: 1, background: "var(--ink)", verticalAlign: "middle"
            }} />
            </span>
          </a>
        )}
      </div>
    </section>);

}

// ─── § 06 Processo
function ProcessBlock() {
  return (
    <section className="container" style={{ padding: "40px var(--pad-x) 160px" }}>
      <div className="reveal" data-mobile-stack="" style={{ display: "grid", gridTemplateColumns: "1fr 2fr", gap: "min(120px, 8vw)", marginBottom: 80, alignItems: "stretch" }}>
        <div style={{ display: "flex", flexDirection: "column", gap: 16, minHeight: 0 }}>
          <div className="t-mono" style={{ opacity: "0" }}>§ 06 — Processo</div>
          <div style={{ position: "relative", overflow: "hidden", flexGrow: 1 }}>
            <img src="assets/processo-hero.avif" alt="" style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover", objectPosition: "center center", display: "block" }} />
          </div>
        </div>
        <div>
          <h2 className="t-h1" style={{ margin: 0, fontWeight: 300, maxWidth: "22ch" }}>Quatro fases<br />Um único cuidado</h2>
        </div>
      </div>
      <div data-mobile-2col="" style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 1, background: "var(--line)" }}>
        {SERVICES.map((s, idx) =>
        <div key={s.id} className="reveal" style={{ padding: "40px 28px 56px", background: "var(--bg)", minHeight: 300 }}>
            <div className="t-mono" style={{ marginBottom: 48, opacity: "0" }}>0{idx + 1}</div>
            <div className="t-h3" style={{ fontWeight: 500, marginBottom: 14 }}>{s.label}</div>
            <p className="t-small" style={{ color: "var(--mid)", lineHeight: 1.55, fontSize: 13 }}>{s.desc}</p>
          </div>
        )}
      </div>
    </section>);

}

// ─── Marquee — slow, almost imperceptible (later: partner brands)
function HomeMarquee() {
  const items = ["Pedra Natural", "Quartzo", "Cerâmico", "Solid Surfaces", "Pias Integrity", "Atelier desde 1987"];
  const dup = [...items, ...items, ...items, ...items];
  return (
    <section className="surface-deep" style={{ padding: "56px 0", borderTop: "1px solid var(--line-on-dark)", borderBottom: "1px solid var(--line-on-dark)" }}>
      <div className="marquee">
        <div className="marquee-track" style={{ padding: "0 40px", animationDuration: "180s" }}>
          {dup.map((t, i) =>
          <span key={i} style={{ display: "inline-flex", alignItems: "center", gap: 80, fontFamily: "var(--f-sans)", fontSize: "clamp(24px, 3.2vw, 44px)", fontWeight: 300, letterSpacing: "-0.02em", color: "#F4F2EE", opacity: .78 }}>
              <span>{t}</span>
              <span style={{ display: "inline-block", width: 6, height: 6, borderRadius: 99, background: "#F4F2EE", opacity: .4 }} />
            </span>
          )}
        </div>
      </div>
    </section>);

}

// ─── CTA closer
function HomeCTA({ go }) {
  return (
    <section className="reveal" style={{
      position: "relative",
      padding: "90px var(--pad-x) 100px",
      overflow: "hidden"
    }}>
      {/* Image — left side, sits behind the typography */}
      <div aria-hidden="true" className="home-cta-img" style={{
        position: "absolute",
        top: "50%",
        left: "var(--pad-x)",
        transform: "translateY(-50%)",
        width: "min(54vw, 760px)",
        height: "min(52vh, 460px)",
        overflow: "hidden",
        backgroundImage: 'url("assets/home/desenhar.png")',
        backgroundSize: "cover",
        backgroundPosition: "center center",
        backgroundRepeat: "no-repeat",
        filter: "saturate(.95) contrast(1.04) brightness(.92)"
      }} />

      {/* Composition grid — typography on the right, overlapping the image edge */}
      <div style={{
        position: "relative",
        display: "grid",
        gridTemplateColumns: "1fr 1.15fr",
        gap: "min(40px, 4vw)",
        alignItems: "end"
      }} className="home-cta-grid">
        <div className="t-mono" style={{ alignSelf: "start", opacity: "0" }}>§ 07 — Início</div>
        <div className="home-cta-text" style={{ position: "relative", marginLeft: "-6vw" }}>
          <h2 className="t-display" style={{
            margin: 0, maxWidth: "14ch",
            position: "relative", zIndex: 1,
            mixBlendMode: "normal",
            fontWeight: 300,
            fontSize: "clamp(56px, 7.2vw, 116px)",
            lineHeight: 1,
            letterSpacing: "-0.03em",
            textAlign: "left"
          }}>
            Vamos<br />desenhar<br />em pedra
          </h2>
          <div style={{ marginTop: 48, display: "flex", gap: 14, position: "relative", zIndex: 1 }}>
            <a href="#/contacts" onClick={(e) => {e.preventDefault();go("contacts");}} className="btn btn-fill btn-lg">
              <span>Iniciar um projecto</span><span className="dot" />
            </a>
            <a href="#/portfolio" onClick={(e) => {e.preventDefault();go("portfolio");}} className="btn btn-lg">
              <span>Ver portfólio</span>
            </a>
          </div>
        </div>
      </div>
    </section>);

}

function HomePage({ go, tweaks }) {
  useReveal();
  return (
    <main className="page-enter">
      <HomeHero mode={tweaks.heroMode} />
      <HomeIntro />
      <FeaturedMaterials go={go} />
      <EditorialPull />
      <ArchitectureInMatter go={go} />
      <ApplicationsBlock go={go} />
      <ProcessBlock />
      <HomeCTA go={go} />
    </main>);

}

Object.assign(window, { HomePage });