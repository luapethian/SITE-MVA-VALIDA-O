// portfolio.jsx — Portfolio page: editorial tile grid with hover reveals + filters.

function PortfolioHeader() {
  return (
    <section style={{ padding: "calc(var(--nav-h) + 64px) var(--pad-x) 36px" }}>
      <div className="reveal" data-mobile-stack="" style={{ display: "grid", gridTemplateColumns: "1fr 2fr", gap: "min(80px, 6vw)" }}>
        <div className="t-mono"></div>
        <div>
          <h1 className="t-display" style={{ margin: 0, maxWidth: "14ch", letterSpacing: "-0.02em" }}>
            PROJECTOS
          </h1>
          <p className="t-lead" style={{ marginTop: 28, maxWidth: "48ch", color: "var(--ink-2)", fontStyle: "italic", fontWeight: 300 }}>
            Alguns dos nossos projectos.
          </p>
        </div>
      </div>
    </section>);

}

function ProjectTile({ p, idx, aspect, fill }) {
  const [hover, setHover] = useState(false);
  const ar = aspect || (
  p.scale === "tall" ? "4/5" :
  p.scale === "wide" ? "4/3" :
  p.scale === "large" ? "5/4" :
  "1/1");
  return (
    <a href="#"
    onClick={(e) => e.preventDefault()}
    onMouseEnter={() => setHover(true)}
    onMouseLeave={() => setHover(false)}
    style={{ display: "block", background: "var(--bg)", height: fill ? "100%" : "auto", width: "100%" }}>
      <div style={{ position: "relative", overflow: "hidden", aspectRatio: fill ? undefined : ar, height: fill ? "100%" : undefined, width: "100%" }}>
        {p.image ?
        <div style={{
          position: "absolute", inset: 0,
          backgroundImage: `url("${p.image}")`,
          backgroundSize: "cover",
          backgroundPosition: "center center",
          backgroundRepeat: "no-repeat",
          transform: hover ? "scale(1.04)" : "scale(1)",
          transition: "transform 1.6s var(--ease)",
          filter: "saturate(.96) contrast(1.02)"
        }} /> :

        <Stone tone={p.stone} h="100%" style={{
          transform: hover ? "scale(1.04)" : "scale(1)",
          transition: "transform 1.6s var(--ease)"
        }} />
        }

        {/* index */}
        <div style={{
          position: "absolute", top: 18, left: 18, color: "#F4F2EE",
          fontFamily: "var(--f-mono)", fontSize: 10, letterSpacing: ".06em", textTransform: "uppercase",
          mixBlendMode: "difference", opacity: .9
        }}>
          /{p.id}
        </div>

        {/* Hover overlay — subtle darken only, no text */}
        <div style={{
          position: "absolute", inset: 0,
          background: "linear-gradient(180deg, rgba(27,26,24,0) 40%, rgba(27,26,24,.45) 100%)",
          opacity: hover ? 1 : 0,
          transition: "opacity .6s var(--ease)", padding: "0px", margin: "0px", borderStyle: "solid", borderWidth: "0px", width: "510px"
        }} />
      </div>
    </a>);

}

function PortfolioGrid() {
  const [filter, setFilter] = useState("all");
  const items = PORTFOLIO.slice(0, 10);
  const filtered = items;

  // Group projects into modules of 5: 1 hero + 4 small (2×2).
  // Alternate hero side per module to keep asymmetry.
  const modules = [];
  for (let i = 0; i < filtered.length; i += 5) {
    modules.push(filtered.slice(i, i + 5));
  }

  const GAP = 14;

  return (
    <section style={{ padding: "16px var(--pad-x) 80px" }}>
      <div className="reveal" style={{
        display: "flex", gap: 8, flexWrap: "wrap",
        padding: "18px 0", borderTop: "1px solid var(--line)", borderBottom: "1px solid var(--line)",
        marginBottom: 28, alignItems: "center"
      }}>
        <div className="t-mono" style={{ marginRight: 18 }}>Programa</div>
        <button onClick={() => setFilter("all")}
        className={"chip" + (filter === "all" ? " on" : "")}>
          <span>Todos</span>
          <span className="n">{String(items.length).padStart(2, "0")}</span>
        </button>
        <span className="t-mono" style={{ marginLeft: "auto" }}>{String(filtered.length).padStart(2, "0")} / {String(items.length).padStart(2, "0")}</span>
      </div>

      {/* Curated architectural modules — hero + 2×2 grid */}
      <div style={{ display: "grid", rowGap: GAP * 2 }}>
        {modules.map((mod, mi) => {
          const heroLeft = mi % 2 === 0;
          const hero = mod[0];
          const smalls = mod.slice(1, 5);
          return (
            <div key={mi} className="reveal" data-portfolio-module="" style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              columnGap: GAP,
              height: "min(58vh, 520px)"
            }}>
              {/* Hero column */}
              <div data-portfolio-hero="" style={{ order: heroLeft ? 1 : 2, height: "100%", minHeight: 0 }}>
                <ProjectTile p={hero} idx={mi * 5} fill />
              </div>
              {/* 2×2 column */}
              <div data-portfolio-smalls="" style={{
                order: heroLeft ? 2 : 1,
                display: "grid",
                gridTemplateColumns: "1fr 1fr",
                gridTemplateRows: "1fr 1fr",
                gap: GAP,
                height: "100%", minHeight: 0
              }}>
                {smalls.map((p, si) =>
                <div key={p.id} style={{ minHeight: 0, minWidth: 0 }}>
                    <ProjectTile p={p} idx={mi * 5 + si + 1} fill />
                  </div>
                )}
              </div>
            </div>);

        })}
      </div>
    </section>);

}

function PortfolioPage({ go }) {
  useReveal();
  return (
    <main className="page-pad page-enter">
      <PortfolioHeader />
      <PortfolioGrid />
    </main>);

}

Object.assign(window, { PortfolioPage });