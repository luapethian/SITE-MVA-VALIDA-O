// products.jsx — Curated category gateway + per-category page.

// ─────────────────────────────────────────────────────────────────────────
// GATEWAY (Products index)

function ProductsGatewayHeader(){
  return (
    <section style={{ position:"relative", padding:"calc(var(--nav-h) + 140px) var(--pad-x) 140px", color:"#F4F2EE", overflow:"hidden", background:"#1B1A18" }}>
      {/* Background image */}
      <div style={{
        position:"absolute", inset:0,
        backgroundImage:'url("assets/produtos-bg.jpg")',
        backgroundSize:"cover",
        backgroundPosition:"center center",
        backgroundRepeat:"no-repeat",
        filter:"saturate(.92) contrast(1.04) brightness(.78)"
      }} />
      {/* Cinematic dark scrim for legibility */}
      <div style={{
        position:"absolute", inset:0,
        background:"linear-gradient(90deg, rgba(14,14,12,.78) 0%, rgba(14,14,12,.55) 45%, rgba(14,14,12,.30) 100%), linear-gradient(180deg, rgba(14,14,12,.25) 0%, rgba(14,14,12,0) 30%, rgba(14,14,12,0) 70%, rgba(14,14,12,.35) 100%)",
        pointerEvents:"none"
      }} />
      <div className="reveal" data-mobile-stack="" style={{ position:"relative", display:"grid", gridTemplateColumns:"1fr 2fr", gap:"min(120px, 8vw)" }}>
        <div className="t-mono" style={{ color:"rgba(244,242,238,.7)" }}>Produtos · Cinco universos</div>
        <div>
          <h1 className="t-display" style={{margin:0, maxWidth:"14ch", color:"#F4F2EE"}}>
            Materiais,<br/>
            <span style={{fontStyle:"italic", opacity:.8}}>por família</span>.
          </h1>
          <p className="t-lead" style={{ marginTop:32, maxWidth:"48ch", color:"rgba(244,242,238,.85)" }}>
            Cada material é apresentado dentro do seu universo. Pedra natural, quartzo, cerâmico, solid surface e a colecção Integrity de pias integradas.
          </p>
        </div>
      </div>
    </section>
  );
}

function CategoryCard({ cat, idx, go }){
  const [hover, setHover] = useState(false);
  const isOdd = idx % 2 === 1;
  return (
    <a
      href={`#/products/${cat.id}`}
      onClick={(e)=>{e.preventDefault(); go("products/"+cat.id);}}
      onMouseEnter={()=>setHover(true)}
      onMouseLeave={()=>setHover(false)}
      className="cat-card"
      style={{
        display:"grid",
        gridTemplateColumns: isOdd ? "1fr 1.4fr" : "1.4fr 1fr",
        gap:"min(80px, 6vw)",
        padding:"110px 0",
        borderTop:"1px solid var(--line)",
        alignItems:"center"
      }}>
      {/* image */}
      <div className="cat-card-img" style={{ order: isOdd ? 2 : 1, position:"relative", overflow:"hidden", height:"68vh", minHeight:480, background:"#1B1A18" }}>
        {cat.image ? (
          <>
            <div style={{
              position:"absolute", inset:0,
              backgroundImage:`url("${cat.image}")`,
              backgroundSize:"cover",
              backgroundPosition:"center center",
              backgroundRepeat:"no-repeat",
              transform: hover ? "scale(1.018)" : "scale(1)",
              transition:"transform 2.4s cubic-bezier(.65,.05,.36,1)",
              filter:"saturate(.94) contrast(1.02)"
            }} />
            {/* subtle cinematic overlay for typography legibility on label/index */}
            <div style={{
              position:"absolute", inset:0,
              background:"linear-gradient(180deg, rgba(15,14,12,.22) 0%, rgba(15,14,12,0) 28%, rgba(15,14,12,0) 60%, rgba(15,14,12,.32) 100%)",
              pointerEvents:"none"
            }} />
          </>
        ) : (
          <Stone
            tone={cat.tone}
            h="100%"
            style={{
              transform: hover ? "scale(1.025)" : "scale(1)",
              transition:"transform 1.6s var(--ease)"
            }} />
        )}
        {/* overlay index */}
        <div style={{
          position:"absolute", top:24, left:24,
          fontFamily:"var(--f-mono)", fontSize:11, letterSpacing:".08em", textTransform:"uppercase",
          color:"#F4F2EE", mixBlendMode:"difference"
        }}>
          /{cat.n}
        </div>
        <div style={{
          position:"absolute", bottom:24, right:24,
          fontFamily:"var(--f-mono)", fontSize:10, letterSpacing:".06em", textTransform:"uppercase",
          color:"rgba(244,242,238,.7)", mixBlendMode:"difference"
        }}>
          {cat.brands.length} {cat.brands.length === 1 ? "colecção" : "colecções"}
        </div>
      </div>

      {/* text column */}
      <div className="cat-card-text" style={{ order: isOdd ? 1 : 2, padding:isOdd ? "0 0 0 4vw" : "0 4vw 0 0" }}>
        <div className="t-mono" style={{ marginBottom:24 }}>
          {cat.n} — Família
        </div>
        <h2 className="t-h1" style={{
          margin:0, fontWeight:300,
          letterSpacing: cat.atmosphere === "minimal" ? "-0.025em" : "-0.03em",
          maxWidth:"14ch"
        }}>
          {cat.label}
        </h2>
        <p className="t-lead" style={{ marginTop:28, color:"var(--ink-2)", maxWidth:"38ch" }}>
          {cat.intro}
        </p>

        {/* brand chips, subtle */}
        <div style={{
          display:"flex", flexWrap:"wrap", gap:8, marginTop:36
        }}>
          {cat.brands.map(b => (
            <span key={b.id} className="chip" style={{cursor:"default"}}>
              <span>{b.label}</span>
            </span>
          ))}
        </div>

        <div style={{
          marginTop:48, display:"flex", alignItems:"center", justifyContent:"space-between", gap:24
        }}>
          <span className="lnk" style={{
            color:"var(--ink)",
            borderColor: hover ? "var(--ink)" : "transparent"
          }}>
            <span>{cat.cta}</span>
            <span className="arr" style={{ transform: hover ? "translateX(6px)" : "none" }}/>
          </span>
          <span className="t-mono" style={{ opacity:.5 }}>
            /{String(idx+1).padStart(2,"0")} · /{String(CATEGORIES.length).padStart(2,"0")}
          </span>
        </div>
      </div>
    </a>
  );
}

function ProductsGateway({ go }){
  useReveal();
  return (
    <main className="page-pad page-enter">
      <ProductsGatewayHeader />
      <section style={{ padding:"40px var(--pad-x) 0" }}>
        {CATEGORIES.map((cat, idx) => (
          <div key={cat.id} className="reveal">
            <CategoryCard cat={cat} idx={idx} go={go} />
          </div>
        ))}
        {/* close the last separator visually */}
        <div style={{ borderTop:"1px solid var(--line)" }}/>
      </section>

      {/* Closing editorial */}
      <section className="container reveal" style={{ padding:"96px var(--pad-x) 120px" }}>
        <div data-mobile-stack="" style={{ display:"grid", gridTemplateColumns:"1fr 2fr", gap:"min(120px, 8vw)" }}>
          <div className="t-mono">— Selecção dedicada</div>
          <div>
            <h2 className="t-h1" style={{margin:0, fontWeight:300, maxWidth:"22ch"}}>
              Não encontra o que procura?
            </h2>
            <a href="#/contacts" onClick={(e)=>{e.preventDefault(); go("contacts");}}
               className="btn btn-lg" style={{marginTop:36}}>
              <span>Solicitar selecção</span><span className="dot"/>
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}

// ─────────────────────────────────────────────────────────────────────────
// CATEGORY PAGE

function CategoryHero({ cat }){
  return (
    <section style={{
      position:"relative",
      height:"62vh",
      minHeight:480,
      overflow:"hidden",
      background:"#1B1A18"
    }}>
      {(() => {
        const heroes = {
          "pedra-natural":  "assets/hero/pedra-natural.png",
          "quartzo":        "assets/hero/quartzo.png",
          "ceramico":       "assets/hero/ceramico.png",
          "solid-surfaces": "assets/hero/solid-surfaces.png",
          "pias-integrity": "assets/hero/pias-integrity.jpg",
        };
        const src = heroes[cat.id];
        return src ? (
          <div style={{
            position:"absolute", inset:0,
            backgroundImage:`url("${src}")`,
            backgroundSize:"cover",
            backgroundPosition:"center center",
            backgroundRepeat:"no-repeat",
            filter:"saturate(.96) contrast(1.02)"
          }} />
        ) : (
          <Stone tone={cat.tone} h="100%" />
        );
      })()}
      <div style={{
        position:"absolute", inset:0,
        background:"linear-gradient(180deg, rgba(27,26,24,.25) 0%, rgba(27,26,24,0) 25%, rgba(27,26,24,0) 55%, rgba(27,26,24,.7) 100%)"
      }}/>

      {/* Top breadcrumb */}
      <div style={{
        position:"absolute", top:"calc(var(--nav-h) + 28px)", left:"var(--pad-x)", right:"var(--pad-x)",
        display:"flex", justifyContent:"space-between", color:"rgba(244,242,238,.85)",
        fontFamily:"var(--f-mono)", fontSize:11, letterSpacing:".08em", textTransform:"uppercase"
      }}>
        <span>
          <a href="#/products" style={{opacity:.7}}>Produtos</a>
          <span style={{margin:"0 12px", opacity:.4}}>/</span>
          <span>{cat.label}</span>
        </span>
        <span>{cat.n} / {String(CATEGORIES.length).padStart(2,"0")}</span>
      </div>

      {/* Title — anchored just above the info line, tightening the composition */}
      <div style={{
        position:"absolute", left:"var(--pad-x)", right:"var(--pad-x)", bottom:"96px",
        color:"#F4F2EE"
      }}>
        <div className="t-mono" style={{ color:"rgba(244,242,238,.6)", marginBottom:24 }}>
          Família {cat.n}
        </div>
        <h1 className="t-display" style={{ margin:0, color:"#F4F2EE", maxWidth:"14ch" }}>
          {cat.label}.
        </h1>
        <p className="t-lead" style={{ marginTop:24, maxWidth:"48ch", color:"rgba(244,242,238,.85)" }}>
          {cat.tagline}
        </p>
      </div>

      <div style={{
        position:"absolute", bottom:28, left:"var(--pad-x)", right:"var(--pad-x)",
        display:"flex", justifyContent:"space-between", alignItems:"center",
        color:"rgba(244,242,238,.65)", fontFamily:"var(--f-mono)", fontSize:10, letterSpacing:".06em", textTransform:"uppercase"
      }}>
        <span>{cat.brands.length} colecções · {cat.brands.reduce((n,b)=>n+b.materials.length,0)} referências</span>
        <span>Scroll ↓</span>
      </div>
    </section>
  );
}

function CategoryIntro({ cat }){
  return (
    <section className="container reveal" style={{ padding:"120px var(--pad-x) 80px" }}>
      <div className="t-mono" style={{ marginBottom:32 }}>§ — Carácter</div>
      <h2 className="t-h1" style={{
        margin:0, fontWeight:300,
        letterSpacing: cat.atmosphere === "technical" ? "-0.025em" : "-0.03em",
        maxWidth: "22ch"
      }}>
        {cat.intro}
      </h2>
      <p className="t-lead" style={{ marginTop:36, color:"var(--ink-2)", maxWidth:"52ch" }}>
        {cat.longIntro}
      </p>
    </section>
  );
}

function MaterialCard({ m, brand, cat, h }){
  const [hover, setHover] = useState(false);
  return (
    <a href="#"
       onClick={(e)=>e.preventDefault()}
       onMouseEnter={()=>setHover(true)}
       onMouseLeave={()=>setHover(false)}
       style={{ display:"block", background:"var(--bg)" }}>
      <div style={{ position:"relative", overflow:"hidden", aspectRatio:"4 / 5" }}>
        {m.image ? (
          <div style={{
            position:"absolute", inset:0,
            backgroundImage:`url("${m.image}")`,
            backgroundSize:"cover",
            backgroundPosition:"center center",
            backgroundRepeat:"no-repeat",
            transform: hover ? "scale(1.035)" : "scale(1)",
            transition:"transform 1.6s var(--ease)"
          }} />
        ) : (
          <Stone tone={m.stone} h="100%" style={{
            transform: hover ? "scale(1.035)" : "scale(1)",
            transition:"transform 1.6s var(--ease)"
          }} />
        )}
        <div style={{
          position:"absolute", inset:0,
          background:"linear-gradient(180deg, rgba(15,14,12,.05) 0%, rgba(15,14,12,0) 30%, rgba(15,14,12,0) 65%, rgba(15,14,12,.18) 100%)",
          pointerEvents:"none"
        }}/>
      </div>
      <div style={{ padding:"22px 0 8px", display:"flex", justifyContent:"space-between", alignItems:"flex-start", gap:14 }}>
        <div>
          <div style={{ fontSize:18, fontWeight:500, letterSpacing:"-0.01em" }}>{m.name}</div>
          <div className="t-mono" style={{ marginTop:8 }}>
            {(m.category || brand.label)} · {m.origin}
          </div>
        </div>
        <span className="t-mono" style={{ opacity:.5, paddingTop:4 }}>→</span>
      </div>
    </a>
  );
}

function CategoryBrandSection({ cat, brand, idx }){
  return (
    <section className="reveal" style={{ padding:"40px var(--pad-x) 120px", scrollMarginTop:"calc(var(--nav-h) + 24px)" }}
             id={`brand-${brand.id}`}>
      <div style={{
        borderTop:"1px solid var(--line)", paddingTop:48,
        display:"grid", gridTemplateColumns:"minmax(0, 1.7fr) minmax(0, 1fr)", gap:"min(80px, 6vw)",
        alignItems:"start"
      }} className="brand-section-grid">
        {/* LEFT — 3 material cards */}
        <div className="brand-materials-grid" style={{
          display:"grid",
          gridTemplateColumns:"repeat(3, 1fr)",
          columnGap:24, rowGap:24
        }}>
          {brand.materials.slice(0,3).map(m => (
            <MaterialCard key={m.id} m={m} brand={brand} cat={cat} />
          ))}
        </div>

        {/* RIGHT — institutional text, sticky */}
        <div className="brand-section-sticky" style={{ position:"sticky", top:"calc(var(--nav-h) + 40px)", paddingTop:8 }}>
          <div className="t-mono" style={{ marginBottom:24 }}>Colecção · 0{idx+1}</div>
          <h3 style={{
            margin:0, fontWeight:300,
            fontSize:"clamp(28px, 2.6vw, 40px)",
            lineHeight:1.05, letterSpacing:"-0.02em"
          }}>
            {brand.label}
          </h3>
          <div style={{ width:48, height:1, background:"var(--line)", margin:"28px 0 0" }}/>
          <p style={{
            margin:"32px 0 0",
            fontFamily:"var(--f-sans)",
            fontSize:16, lineHeight:1.65,
            color:"var(--ink-2)",
            maxWidth:"38ch",
            fontWeight:300
          }}>
            {brand.desc}
          </p>
          {brand.secondary && (
            <p className="t-small" style={{
              margin:"24px 0 0",
              color:"var(--mid)",
              fontStyle:"italic",
              fontSize:13,
              maxWidth:"38ch"
            }}>
              {brand.secondary}
            </p>
          )}
          {brand.link && (
            <a
              href={brand.link.href}
              onClick={(e)=>{ if(brand.link.href === "#") e.preventDefault(); }}
              style={{
                marginTop:36,
                display:"flex", alignItems:"center", justifyContent:"space-between",
                padding:"22px 24px",
                border:"1px solid var(--line)",
                background:"transparent",
                transition:"border-color .35s var(--ease), background .35s var(--ease)"
              }}
              onMouseEnter={(e)=>{ e.currentTarget.style.borderColor = "var(--ink)"; }}
              onMouseLeave={(e)=>{ e.currentTarget.style.borderColor = ""; }}>
              <span style={{ fontSize:14, letterSpacing:"-0.005em" }}>{brand.link.label}</span>
              <span className="t-mono" style={{ opacity:.6 }}>→</span>
            </a>
          )}
        </div>
      </div>
    </section>
  );
}

function CategoryBrandsNav({ cat }){
  // Sticky-ish brand jump nav, only shown when there's >1 brand
  if(cat.brands.length < 2) return null;
  return (
    <section className="container" style={{ padding:"24px var(--pad-x) 16px" }}>
      <div style={{
        display:"flex", flexWrap:"wrap", gap:8,
        padding:"22px 0",
        borderTop:"1px solid var(--line)", borderBottom:"1px solid var(--line)",
        alignItems:"center"
      }}>
        <div className="t-mono" style={{marginRight:18}}>Colecções nesta família</div>
        {cat.brands.map(b => (
          <a key={b.id} href={`#brand-${b.id}`}
             onClick={(e)=>{
               e.preventDefault();
               const el = document.getElementById(`brand-${b.id}`);
               if(el){ window.scrollTo({ top: el.getBoundingClientRect().top + window.scrollY - 80, behavior:"smooth"}); }
             }}
             className="chip">
            <span>{b.label}</span>
            <span className="n">{String(b.materials.length).padStart(2,"0")}</span>
          </a>
        ))}
      </div>
    </section>
  );
}

function CategoryAdjacents({ cat, go }){
  // Up next + back to all families
  const idx = CATEGORIES.findIndex(c => c.id === cat.id);
  const next = CATEGORIES[(idx+1) % CATEGORIES.length];
  return (
    <section className="surface-deep" style={{ padding:"160px var(--pad-x)" }}>
      <div className="reveal" data-mobile-stack="" style={{
        display:"grid", gridTemplateColumns:"1fr 1fr", gap:"min(80px, 6vw)", alignItems:"end"
      }}>
        <div>
          <div className="t-mono" style={{color:"rgba(244,242,238,.55)", marginBottom:16}}>— Família seguinte</div>
          <a href={`#/products/${next.id}`}
             onClick={(e)=>{e.preventDefault(); go("products/"+next.id);}}
             style={{display:"block"}}>
            <h2 className="t-display" style={{margin:0, color:"#F4F2EE", fontWeight:300, maxWidth:"12ch"}}>
              {next.label}.
            </h2>
            <span className="lnk" style={{color:"#F4F2EE", marginTop:24}}>
              <span>{next.cta}</span>
              <span className="arr"/>
            </span>
          </a>
        </div>
        <div style={{textAlign:"right"}}>
          <div className="t-mono" style={{color:"rgba(244,242,238,.55)", marginBottom:16}}>— Voltar</div>
          <a href="#/products" onClick={(e)=>{e.preventDefault(); go("products");}}
             className="lnk" style={{color:"#F4F2EE"}}>
            <span>Todas as famílias</span>
            <span className="arr"/>
          </a>
        </div>
      </div>
    </section>
  );
}

function CategoryPage({ catId, go }){
  useReveal();
  const cat = findCategory(catId);
  if(!cat){
    return (
      <main className="page-pad page-enter container" style={{padding:"120px var(--pad-x)"}}>
        <div className="t-mono">404 — Família não encontrada</div>
        <h1 className="t-h1" style={{margin:"24px 0 32px", fontWeight:300}}>Não conseguimos abrir esta colecção.</h1>
        <a href="#/products" onClick={(e)=>{e.preventDefault(); go("products");}} className="btn btn-fill">
          <span>Voltar a Produtos</span><span className="dot"/>
        </a>
      </main>
    );
  }

  return (
    <main className="page-enter">
      <CategoryHero cat={cat} />
      <CategoryBrandsNav cat={cat} />
      {cat.brands.map((b, i) => (
        <CategoryBrandSection key={b.id} cat={cat} brand={b} idx={i} />
      ))}
      <CategoryAdjacents cat={cat} go={go} />
    </main>
  );
}

// ─────────────────────────────────────────────────────────────────────────
// Top-level Products router

function ProductsPage({ go, sub }){
  // sub: optional category id
  if(sub){
    return <CategoryPage catId={sub} go={go} />;
  }
  return <ProductsGateway go={go} />;
}

Object.assign(window, { ProductsPage, ProductsGateway, CategoryPage });
