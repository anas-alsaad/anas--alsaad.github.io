// Reusable scaffold for case-study pages.
// Renders: top nav, hero, sticky side-nav (chapter list), main content slot, footer.

function CaseTopNav() {
  return (
    <nav style={{
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      padding: "20px 64px",
      borderBottom: "1px solid var(--line)",
      background: "rgba(250,250,248,0.85)",
      backdropFilter: "blur(12px)",
      position: "sticky", top: 0, zIndex: 20,
    }}>
      <a href="portfolio.html" style={{ display: "flex", alignItems: "center", gap: 12, whiteSpace: "nowrap", minWidth: 0 }}>
        <div style={{
          width: 28, height: 28, borderRadius: 6, flexShrink: 0,
          background: "var(--ink)", color: "var(--bg)",
          display: "grid", placeItems: "center",
          fontFamily: "var(--serif)", fontSize: 18, fontStyle: "italic",
          letterSpacing: "-0.02em",
        }}>a</div>
        <span style={{ fontSize: 14, fontWeight: 500, whiteSpace: "nowrap" }}>Anas Al-Saad</span>
        <span className="eyebrow" style={{ marginLeft: 4 }}>· Product Designer</span>
      </a>
      <div style={{ display: "flex", gap: 28, alignItems: "center" }}>
        <a href="portfolio.html#work" className="eyebrow">Work</a>
        <a href="portfolio.html#about" className="eyebrow">About</a>
        <a href="portfolio.html#contact" className="eyebrow">Contact</a>
        <span className="tag"><span className="dot"></span> Open to roles</span>
      </div>
    </nav>
  );
}

function CaseHero({ index, tag, title, lede, meta }) {
  return (
    <header className="cs-hero">
      <div className="cs-hero-inner">
        <a href="portfolio.html#work" className="cs-back">
          <span style={{ fontFamily: "var(--serif)", fontSize: 18, lineHeight: 1 }}>←</span>
          Back to work
        </a>

        <div className="eyebrow-row">
          <span className="eyebrow">Case Study · {String(index).padStart(2, "0")}</span>
          <span style={{ width: 4, height: 4, borderRadius: "50%", background: "var(--muted-2)" }} />
          <span className="eyebrow">{tag}</span>
        </div>

        <h1>{title}</h1>
        <p className="lede">{lede}</p>

        <div className="cs-meta">
          {meta.map((m, i) => (
            <div key={i} className="cs-meta-item">
              <div className="lbl">{m.lbl}</div>
              <div className="val">{m.val}</div>
            </div>
          ))}
        </div>
      </div>
    </header>
  );
}

// Sticky side nav. Highlights the current section using IntersectionObserver.
function CaseSideNav({ chapters }) {
  const [active, setActive] = React.useState(chapters[0]?.id);

  React.useEffect(() => {
    const els = chapters
      .map(c => document.getElementById(c.id))
      .filter(Boolean);
    if (!els.length) return;

    const io = new IntersectionObserver((entries) => {
      // pick the entry closest to the top that is intersecting
      const visible = entries
        .filter(e => e.isIntersecting)
        .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top);
      if (visible[0]) setActive(visible[0].target.id);
    }, { rootMargin: "-20% 0px -60% 0px", threshold: 0 });

    els.forEach(el => io.observe(el));
    return () => io.disconnect();
  }, [chapters]);

  return (
    <aside className="cs-side">
      <div className="eyebrow" style={{ marginBottom: 16, paddingLeft: 10 }}>Chapters</div>
      <ol>
        {chapters.map((c, i) => (
          <li key={c.id}>
            <a
              href={`#${c.id}`}
              className={active === c.id ? "active" : ""}
            >
              <span className="num">{String(i + 1).padStart(2, "0")}</span>
              <span>{c.label}</span>
            </a>
          </li>
        ))}
      </ol>
    </aside>
  );
}

function CaseSection({ id, ch, title, children }) {
  return (
    <section id={id} className="cs-section" data-screen-label={`${ch} ${title}`}>
      <div className="cs-section-head">
        <div className="ch">{ch}</div>
        <h2>{title}</h2>
      </div>
      {children}
    </section>
  );
}

function Figure({ src, tone, pad, caption, figNo }) {
  const toneClass =
    tone === "warm" ? "cs-figure-tone-warm" :
    tone === "blue" ? "cs-figure-tone-blue" :
    tone === "paper" ? "cs-figure-tone-paper" : "";
  return (
    <>
      <figure className={`cs-figure ${toneClass} ${pad ? "cs-figure-pad" : ""}`}>
        <img src={src} alt="" />
      </figure>
      {caption && (
        <p className="cs-caption">
          <span className="fig-no">FIG. {figNo}</span>
          <span>{caption}</span>
        </p>
      )}
    </>
  );
}

function NextCase({ step, title, href }) {
  return (
    <div className="cs-next">
      <div className="ch">Next case</div>
      <a href={href}>
        <div className="step">{step}</div>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          <span className="next-title">{title}</span>
          <span className="next-arrow">→</span>
        </div>
      </a>
    </div>
  );
}

window.CaseTopNav = CaseTopNav;
window.CaseHero = CaseHero;
window.CaseSideNav = CaseSideNav;
window.CaseSection = CaseSection;
window.Figure = Figure;
window.NextCase = NextCase;
