// other.jsx — Contacts + Client Area pages.

function ContactsHeader() {
  return (
    <section style={{ padding: "calc(var(--nav-h) + 80px) var(--pad-x) 60px" }}>
      <div className="reveal" data-mobile-stack="" style={{ display: "grid", gridTemplateColumns: "1fr 2fr", gap: "min(120px, 8vw)", alignItems: "stretch" }}>
        <div style={{ display: "flex", flexDirection: "column", alignSelf: "stretch" }}>
          <div className="t-mono" style={{ marginBottom: 24 }}>CONTACTOS</div>
          <div style={{
            position: "relative",
            width: "100%",
            flex: "1 1 auto",
            minHeight: 280,
            overflow: "hidden",
            background: "#1B1A18"
          }}>
            <img
              src="assets/contacts-hero.jpg"
              alt=""
              style={{
                position: "absolute", inset: 0,
                width: "100%", height: "100%",
                objectFit: "cover",
                objectPosition: "center bottom",
                display: "block"
              }} />
          </div>
        </div>
        <div>
          <h1 className="t-display" style={{ margin: 0, maxWidth: "14ch" }}>
            Falemos<br />
            <span style={{ fontStyle: "italic", opacity: .65 }}>do projecto</span>
          </h1>
          <p className="t-lead" style={{ marginTop: 32, maxWidth: "48ch", color: "var(--ink-2)" }}>Cada projecto começa com uma conversa. Partilhe a sua intenção, materiais de referência ou desenhos

          </p>
        </div>
      </div>
    </section>);

}

function ContactForm() {
  const [data, setData] = useState({ nome: "", email: "", organizacao: "", programa: "cozinha", mensagem: "" });
  const [sent, setSent] = useState(false);
  const set = (k, v) => setData((d) => ({ ...d, [k]: v }));
  const valid = data.nome.trim() && /\S+@\S+\.\S+/.test(data.email) && data.mensagem.trim().length > 4;

  const fld = {
    display: "block", width: "100%",
    background: "transparent", border: 0,
    borderBottom: "1px solid var(--line)",
    padding: "22px 0 14px",
    fontFamily: "var(--f-sans)", fontSize: 18,
    color: "var(--ink)", letterSpacing: "-0.005em",
    outline: "none",
    transition: "border-color .3s var(--ease)"
  };
  const lblS = { fontFamily: "var(--f-mono)", fontSize: 10, letterSpacing: ".08em", textTransform: "uppercase", color: "var(--mid)", display: "block" };

  if (sent) {
    return (
      <section className="container" style={{ padding: "40px var(--pad-x) 200px" }}>
        <div className="reveal in" style={{ display: "grid", gridTemplateColumns: "1fr 2fr", gap: "min(120px, 8vw)" }}>
          <div className="t-mono">Mensagem recebida</div>
          <div>
            <h2 className="t-h1" style={{ margin: 0, fontWeight: 300, maxWidth: "22ch" }}>
              Obrigado, {data.nome.split(" ")[0]}. Voltamos consigo brevemente.
            </h2>
            <p className="t-lead" style={{ marginTop: 32, maxWidth: "42ch", color: "var(--ink-2)" }}>
              Recebemos o seu pedido e respondemos por email — habitualmente em até 48 horas úteis.
            </p>
            <button className="btn btn-lg" style={{ marginTop: 36 }} onClick={() => {setSent(false);setData({ nome: "", email: "", organizacao: "", programa: "cozinha", mensagem: "" });}}>
              <span>Nova mensagem</span><span className="dot" />
            </button>
          </div>
        </div>
      </section>);

  }

  return (
    <section style={{ padding: "40px var(--pad-x) 120px" }}>
      <div className="reveal" data-mobile-stack="" style={{
        display: "grid", gridTemplateColumns: "1fr 2fr", gap: "min(120px, 8vw)",
        borderTop: "1px solid var(--line)", paddingTop: 48
      }}>
        <div>
          <div className="t-mono" style={{ marginBottom: 12 }}>Pedido</div>
          <h3 className="t-h3" style={{ margin: 0, fontWeight: 400, maxWidth: "20ch" }}>
            Conte-nos sobre o projecto.
          </h3>
        </div>

        <form onSubmit={async (e) => {
          e.preventDefault();
          if (!valid) return;
          const res = await fetch("https://formspree.io/f/mkoererd", {
            method: "POST",
            headers: { "Content-Type": "application/json", "Accept": "application/json" },
            body: JSON.stringify({
              nome: data.nome,
              email: data.email,
              organizacao: data.organizacao,
              programa: data.programa,
              mensagem: data.mensagem
            })
          });
          if (res.ok) setSent(true);
        }} style={{ maxWidth: 760 }}>
          <div className="form-row-2" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 32, marginBottom: 8 }}>
            <div>
              <label style={lblS}>01 — Nome</label>
              <input style={fld} value={data.nome} onChange={(e) => set("nome", e.target.value)}
              placeholder="Como podemos chamar-lhe" />
            </div>
            <div>
              <label style={lblS}>02 — Email</label>
              <input style={fld} type="email" value={data.email} onChange={(e) => set("email", e.target.value)}
              placeholder="exemplo@dominio.pt" />
            </div>
          </div>

          <div className="form-row-2" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 32, marginTop: 18 }}>
            <div>
              <label style={lblS}>03 — Atelier / Organização</label>
              <input style={fld} value={data.organizacao} onChange={(e) => set("organizacao", e.target.value)}
              placeholder="Opcional" />
            </div>
            <div>
              <label style={lblS}>04 — Programa</label>
              <div style={{ display: "flex", gap: 8, flexWrap: "wrap", paddingTop: 18, paddingBottom: 14, borderBottom: "1px solid var(--line)" }}>
                {["cozinha", "casa de banho", "fachada", "exterior", "outro"].map((p) =>
                <button key={p} type="button"
                onClick={() => set("programa", p)}
                className={"chip" + (data.programa === p ? " on" : "")}
                style={{ textTransform: "capitalize" }}>
                    <span>{p}</span>
                  </button>
                )}
              </div>
            </div>
          </div>

          <div style={{ marginTop: 18 }}>
            <label style={lblS}>05 — Mensagem</label>
            <textarea
              style={{ ...fld, minHeight: 140, resize: "vertical", lineHeight: 1.45 }}
              value={data.mensagem}
              onChange={(e) => set("mensagem", e.target.value)}
              placeholder="Localização, materiais de interesse, prazos..." />
          </div>

          <div style={{ marginTop: 48, display: "flex", justifyContent: "space-between", alignItems: "center", gap: 24, flexWrap: "wrap" }}>
            <div className="t-mono" style={{ maxWidth: "38ch" }}>
              Os seus dados são tratados de acordo com a nossa política de privacidade.
            </div>
            <button type="submit" disabled={!valid}
            className={"btn btn-lg btn-fill"}
            style={{ opacity: valid ? 1 : .35 }}>
              <span>Enviar pedido</span><span className="dot" />
            </button>
          </div>
        </form>
      </div>
    </section>);

}

function ContactInfo() {
  return (
    <section className="container reveal" style={{ padding: "60px var(--pad-x) 160px" }}>
      <div style={{
        display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 1, background: "var(--line)",
        borderTop: "1px solid var(--line)", borderBottom: "1px solid var(--line)"
      }} className="contact-info-grid">
        {[
        { l: "Morada", v: ["Parque Industrial Lote 50", "3045-504 Taveiro", "Portugal"] },
        { l: "Telefone", v: ["239 983 022", "Fax: 239 983 025"] },
        { l: "Email", v: ["mvacomercial@gmail.com"] },
        { l: "Horário de funcionamento", v: ["Segunda a sexta", "08:00 — 18:00"] }].
        map((b, i) =>
        <div key={i} style={{ background: "var(--bg)", padding: "40px 28px 56px", minHeight: 240 }}>
            <div className="t-mono" style={{ marginBottom: 36 }}>0{i + 1} — {b.l}</div>
            <div style={{ display: "grid", gap: 6 }}>
              {b.v.map((line, j) =>
            <div key={j} style={{ fontSize: 16, color: j === 0 ? "var(--ink)" : "var(--mid)", letterSpacing: "-0.005em" }}>
                  {line}
                </div>
            )}
            </div>
          </div>
        )}
      </div>
    </section>);

}

function ContactsPage({ go }) {
  useReveal();
  return (
    <main className="page-pad page-enter">
      <ContactsHeader />
      <ContactForm />
      <ContactInfo />
    </main>);

}

// ───────────────────────────── Client Area
function ClientPage({ go }) {
  useReveal();
  return (
    <main className="page-pad page-enter" style={{ minHeight: "100vh", display: "flex", flexDirection: "column" }}>
      <section style={{
        flex: 1, position: "relative",
        display: "grid", gridTemplateColumns: "1fr 1fr",
        minHeight: "calc(100vh - var(--nav-h))"
      }} className="client-grid">
        <div className="client-text-col" style={{
          padding: "max(120px, 12vh) var(--pad-x) 80px",
          display: "flex", flexDirection: "column", justifyContent: "space-between",
          gap: 80
        }}>
          <div className="reveal in t-mono">Área reservada · Acesso a clientes</div>

          <div className="reveal in">
            <h1 className="t-display" style={{ margin: 0, fontWeight: 300, maxWidth: "12ch" }}>
              Área<br />
              <span style={{ fontStyle: "italic", opacity: .7 }}>técnica</span>
            </h1>
            <p className="t-lead" style={{ marginTop: 36, maxWidth: "38ch", color: "var(--ink-2)" }}>
              Documentação técnica, fichas de materiais, cronogramas e medições disponíveis na área reservada de cliente.
            </p>
            <div style={{ marginTop: 48 }}>
              <a
                href="https://mvasales.pt/Account/Login?ReturnUrl=%2F"
                className="btn btn-lg btn-fill">
                <span>Entrar na área reservada</span>
                <span className="dot" />
              </a>
            </div>
            <div className="t-mono" style={{ marginTop: 32, color: "var(--mid)" }}>
              Sem credenciais? Solicite acesso em{" "}
              <a href="#/contacts" onClick={(e) => {e.preventDefault();go("contacts");}}
              style={{ borderBottom: "1px solid var(--ink)", color: "var(--ink)" }}>MVACOMERCIAL@GMAIL.COM</a>
            </div>
          </div>

          <div className="reveal in t-mono" style={{ display: "flex", justifyContent: "space-between" }}>
            <span>MVA / CLIENTE </span>
            <span style={{ opacity: .5 }}>v.01</span>
          </div>
        </div>

        <div className="client-image-col" style={{ position: "relative", overflow: "hidden", background: "#1B1A18" }}>
          <img
            src="assets/hero/client.png"
            alt=""
            style={{
              position: "absolute", inset: 0,
              width: "100%", height: "100%",
              objectFit: "cover",
              objectPosition: "center center",
              display: "block"
            }} />
        </div>
      </section>
    </main>);

}

Object.assign(window, { ContactsPage, ClientPage });