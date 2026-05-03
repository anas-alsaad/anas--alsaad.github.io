// Shared page sections used inside each hero variant.
// All three landing variants reuse <SharedSections /> below the hero.

const PROJECTS = [
{
  id: "01",
  name: "Merchant Management Ecosystem",
  tag: "B2B · Lead",
  summary:
  "What started as a fix for a payouts trust gap turned into a full operations tool — POS fleet monitoring, dynamic grouping, and batch claim resolution.",
  role: "Lead Designer",
  year: "2025-2026",
  bullets: [
  "Distinguished authorized vs. settled funds so merchants finally trusted their balance.",
  "Hierarchical grouping by staff, branch, region — without forcing a rigid taxonomy.",
  "Batch reconciliation flow that turned a support ticket into a self-serve action."],

  asset: "assets/merchant-main.png",
  before: "assets/merchant-before.png",
  assetTone: "neutral",
  href: "merchant.html"
},
{
  id: "02",
  name: "Business Finance Manager — Subscription",
  tag: "B2B · Conversion",
  summary:
  "A high drop-off rate on the BFM subscription page was leaving revenue on the table. Working closely with the PO, we mapped the friction, redesigned the path, and turned the page into a conversion tool.",
  role: "Designer",
  year: "2026",
  bullets: [
  "Behavioural audit of the existing subscription page — pinpointed where users hesitated, abandoned, or looped.",
  "Simplified the conversion path: fewer steps, clearer pricing, decision-first hierarchy.",
  "Measurable lift in subscription conversions and revenue — design tied directly to a business KPI."],

  asset: "assets/bfm-subscription.png",
  assetFit: "contain",
  assetBg: "#a3b290",
  assetTone: "blue",
  href: "bfm.html"
},
{
  id: "03",
  name: "Finance Revamp",
  tag: "B2C · Lead",
  summary:
  "A full revamp of the retail finance sector. The biggest unlock was the fleet-applying journey — the highest-friction flow in the app.",
  role: "Lead Designer",
  year: "2026",
  bullets: [
  "Rewrote the application flow around what the user is actually deciding.",
  "Centralized financial dashboard for a holistic view across products.",
  "Tightened copy, micro-states, and after-sales access."],

  asset: "assets/finance-revamp.png",
  assetTone: "warm",
  href: "finance.html"
}];


const STATS = [
{ value: "1.5", unit: "yrs", label: "at Al Rajhi Bank" },
{ value: "5", unit: "", label: "shipped projects" },
{ value: "200+", unit: "", label: "tickets delivered" }];


// Tone ramp for project cards
function ToneFill({ tone }) {
  if (tone === "blue") {
    return (
      <div style={{
        position: "absolute", inset: 0,
        background: "radial-gradient(120% 80% at 70% 30%, #2418f5 0%, #0a0bbf 60%, #050880 100%)"
      }} />);

  }
  if (tone === "warm") {
    return (
      <div style={{
        position: "absolute", inset: 0,
        background: "linear-gradient(180deg, #1a1814 0%, #2a2620 100%)"
      }} />);

  }
  return (
    <div style={{
      position: "absolute", inset: 0,
      background: "var(--bg-2)"
    }} />);

}

function PlaceholderArt({ tone, label }) {
  // Used when no real asset exists. Subtle striped placeholder + caption.
  return (
    <div style={{ position: "absolute", inset: 0 }}>
      <ToneFill tone={tone} />
      <div style={{
        position: "absolute", inset: 0,
        backgroundImage:
        "repeating-linear-gradient(135deg, rgba(255,255,255,0.04) 0 1px, transparent 1px 16px)"
      }} />
      <div style={{
        position: "absolute",
        left: "50%", top: "50%",
        transform: "translate(-50%, -50%)",
        fontFamily: "var(--mono)",
        fontSize: 11,
        letterSpacing: "0.1em",
        textTransform: "uppercase",
        color: "rgba(255,255,255,0.55)",
        textAlign: "center",
        whiteSpace: "nowrap"
      }}>
        [ {label} mockup ]
      </div>
    </div>);

}

// ─────────────── ABOUT ───────────────

function AboutSection({ flavor = "default" }) {
  return (
    <section style={{
      padding: "120px 64px",
      borderTop: "1px solid var(--line)",
      background: "var(--bg)"
    }}>
      <div style={{
        maxWidth: 1200, margin: "0 auto",
        display: "grid", gridTemplateColumns: "200px 1fr 1fr", gap: 64,
        alignItems: "start"
      }}>
        <div className="eyebrow">About</div>
        <div style={{
          fontFamily: "var(--serif)",
          fontSize: 38,
          lineHeight: 1.2,
          color: "var(--ink)",
          letterSpacing: "-0.01em"
        }}>
          I design for the messy middle of fintech — where what users want, what the regulator allows, and what the engineering backlog can hold all collide on the same screen.
        </div>
        <div style={{ color: "var(--muted)", fontSize: 16, lineHeight: 1.7 }}>
          <p style={{ marginTop: 0 }}>
            I'm a product designer working across B2C and B2B at Al Rajhi Bank — the retail app on one side, the e-business portal on the other. In a year and a half I've shipped 200+ tickets, from end-to-end journeys to micro-fixes I caught in audit.
          </p>
          <p>
            I work in what I call <em>tactical design thinking</em>: the textbook process, but right-sized for a banking org that ships fast. I keep the parts that protect the user — research, problem framing, pattern reuse — and skip the parts that turn into theatre.
          </p>
          <p>
            What I care about: clarity over cleverness, short feedback loops with engineering, and treating copy as part of the design.
          </p>
        </div>
      </div>
    </section>);

}

// ─────────────── PROJECTS ───────────────

function ProjectsSection() {
  return (
    <section id="work" data-hero-end style={{
      padding: "120px 64px",
      borderTop: "1px solid var(--line)",
      background: "var(--paper)"
    }}>
      <div style={{ maxWidth: 1200, margin: "0 auto" }}>
        <div style={{
          display: "grid", gridTemplateColumns: "200px 1fr", gap: 64,
          marginBottom: 80
        }}>
          <div className="eyebrow">Selected Work</div>
          <div style={{
            fontFamily: "var(--serif)",
            fontSize: 32,
            lineHeight: 1.25,
            letterSpacing: "-0.01em",
            maxWidth: 720
          }}>Work I'm proud of A handful of projects where the design actually moved something — better journeys, clearer numbers, experiences people can rely on.

          </div>
        </div>

        <div style={{ display: "flex", flexDirection: "column" }}>
          {PROJECTS.map((p, i) =>
          <ProjectRow key={p.id} project={p} index={i} />
          )}
        </div>
      </div>
    </section>);

}

function ProjectRow({ project, index }) {
  const isFlipped = index % 2 === 1;
  const hasLink = !!project.href;
  const VisualTag = hasLink ? "a" : "div";
  return (
    <div style={{
      display: "grid",
      gridTemplateColumns: "1fr 1fr",
      gap: 64,
      padding: "56px 0",
      borderTop: "1px solid var(--line)",
      alignItems: "center"
    }}>
      {/* visual */}
      <VisualTag
        {...hasLink ? { href: project.href, "aria-label": `Open ${project.name} case study` } : {}}
        className={hasLink ? "project-visual" : ""}
        style={{
          order: isFlipped ? 2 : 1,
          position: "relative",
          aspectRatio: "4 / 3",
          borderRadius: 14,
          overflow: "hidden",
          border: "1px solid var(--line)",
          background: project.assetBg || "var(--bg-2)",
          display: "block",
          cursor: hasLink ? "pointer" : "default"
        }}>
        {project.before && project.asset ?
        <BeforeAfter before={project.before} after={project.asset} /> :
        project.asset ?
        <img src={project.asset} alt=""
        style={{
          position: "absolute", inset: 0,
          width: "100%", height: "100%",
          objectFit: project.assetFit || "contain",
          objectPosition: "center",
          imageRendering: "auto"
        }} /> :

        <PlaceholderArt tone={project.assetTone} label={project.name} />
        }
        <div style={{
          position: "absolute",
          left: 16, top: 16,
          fontFamily: "var(--mono)",
          fontSize: 10,
          letterSpacing: "0.08em",
          textTransform: "uppercase",
          color: project.asset ? "rgba(255,255,255,0.85)" : "var(--muted)",
          background: project.asset ? "rgba(0,0,0,0.35)" : "var(--paper)",
          backdropFilter: project.asset ? "blur(8px)" : "none",
          padding: "4px 8px",
          borderRadius: 6,
          border: project.asset ? "1px solid rgba(255,255,255,0.18)" : "1px solid var(--line)"
        }}>
          {project.id} / {project.tag}
        </div>
        {hasLink &&
        <div className="project-visual-cta" style={{
          position: "absolute",
          right: 16, bottom: 16,
          display: "inline-flex",
          alignItems: "center",
          gap: 8,
          padding: "8px 14px",
          borderRadius: 999,
          background: "rgba(15,15,18,0.78)",
          color: "#fafaf8",
          fontSize: 12,
          fontWeight: 500,
          letterSpacing: 0,
          backdropFilter: "blur(8px)",
          border: "1px solid rgba(255,255,255,0.14)",
          opacity: 0,
          transform: "translateY(4px)",
          transition: "opacity .25s ease, transform .25s ease",
          pointerEvents: "none"
        }}>
            <span>View case study</span>
            <span style={{ fontFamily: "var(--serif)", fontSize: 14, lineHeight: 1 }}>→</span>
          </div>
        }
      </VisualTag>

      {/* text */}
      <div style={{ order: isFlipped ? 1 : 2 }}>
        <div style={{
          display: "flex", gap: 12, alignItems: "center",
          marginBottom: 16
        }}>
          <span className="eyebrow">{project.role}</span>
          <span style={{ width: 4, height: 4, borderRadius: "50%", background: "var(--muted-2)" }} />
          <span className="eyebrow">{project.year}</span>
        </div>

        {hasLink ?
        <a href={project.href} className="project-title-link" style={{
          display: "inline-flex",
          alignItems: "baseline",
          gap: 16,
          color: "var(--ink)"
        }}>
            <h3 style={{
            margin: 0,
            fontFamily: "var(--serif)",
            fontSize: 40,
            lineHeight: 1.25,
            letterSpacing: "-0.02em",
            color: "var(--ink)"
          }}>
              {project.name}
            </h3>
            <span className="project-title-arrow" style={{
            fontFamily: "var(--serif)",
            fontSize: 32,
            lineHeight: 1,
            color: "var(--muted-2)",
            transition: "transform .25s ease, color .25s ease",
            display: "inline-block"
          }}>→</span>
          </a> :

        <h3 style={{
          margin: 0,
          fontFamily: "var(--serif)",
          fontSize: 40,
          lineHeight: 1.25,
          letterSpacing: "-0.02em",
          color: "var(--ink)"
        }}>
            {project.name}
          </h3>
        }

        <p style={{
          marginTop: 16,
          fontSize: 16,
          lineHeight: 1.65,
          color: "var(--muted)",
          maxWidth: 520
        }}>
          {project.summary}
        </p>

        <ul style={{
          margin: "24px 0 0",
          padding: 0,
          listStyle: "none",
          display: "flex",
          flexDirection: "column",
          gap: 10
        }}>
          {project.bullets.map((b, i) =>
          <li key={i} style={{
            display: "grid",
            gridTemplateColumns: "20px 1fr",
            gap: 8,
            fontSize: 14,
            lineHeight: 1.55,
            color: "var(--ink-2)"
          }}>
              <span style={{
              fontFamily: "var(--mono)",
              fontSize: 11,
              color: "var(--muted-2)",
              paddingTop: 2
            }}>
                0{i + 1}
              </span>
              <span>{b}</span>
            </li>
          )}
        </ul>

        {hasLink &&
        <a href={project.href} className="project-cta" style={{
          marginTop: 32,
          display: "inline-flex",
          alignItems: "center",
          gap: 10,
          padding: "12px 18px 12px 20px",
          borderRadius: 999,
          background: "var(--ink)",
          color: "var(--bg)",
          fontSize: 13,
          fontWeight: 500,
          letterSpacing: 0,
          transition: "transform .2s ease, background .2s ease"
        }}>
            <span>Read the case study</span>
            <span className="project-cta-arrow" style={{
            fontFamily: "var(--serif)",
            fontSize: 16,
            lineHeight: 1,
            transition: "transform .2s ease",
            display: "inline-block"
          }}>→</span>
          </a>
        }
      </div>
    </div>);

}

// ─────────────── CONTACT ───────────────

function ContactSection() {
  return (
    <section id="contact" style={{
      padding: "140px 64px 80px",
      borderTop: "1px solid var(--line)",
      background: "var(--ink)",
      color: "#fafaf8"
    }}>
      <div style={{ maxWidth: 1200, margin: "0 auto" }}>
        <div style={{ display: "grid", gridTemplateColumns: "200px 1fr", gap: 64, alignItems: "start" }}>
          <div className="eyebrow" style={{ color: "rgba(250,250,248,0.5)" }}>Contact</div>
          <div>
            <div style={{
              fontFamily: "var(--serif)",
              fontSize: 72,
              lineHeight: 1.05,
              letterSpacing: "-0.025em",
              maxWidth: 900
            }}>
              Have a project in mind, a role to discuss, or just want to say hello? I'd like to hear about it.
            </div>

            <div style={{
              marginTop: 64,
              display: "grid",
              gridTemplateColumns: "1fr 1fr 1fr",
              gap: 32,
              borderTop: "1px solid rgba(250,250,248,0.12)",
              paddingTop: 32
            }}>
              <ContactItem label="Email" value="anas.a.al.saad@gmail.com" href="mailto:anas.a.al.saad@gmail.com" />
              <ContactItem label="Phone" value="+966 50 013 9137" href="tel:+966500139137" />
              <ContactItem label="LinkedIn" value="anas-al-saad" href="https://www.linkedin.com/in/anas-al-saad" />
            </div>
          </div>
        </div>

        <div style={{
          marginTop: 120,
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          fontFamily: "var(--mono)",
          fontSize: 11,
          color: "rgba(250,250,248,0.45)",
          letterSpacing: "0.06em",
          textTransform: "uppercase"
        }}>
          <span>© {new Date().getFullYear()} · Anas Al-Saad</span>
          <span>Riyadh, KSA</span>
          <span>Last updated · Apr 2026</span>
        </div>
      </div>
    </section>);

}

function ContactItem({ label, value, href }) {
  return (
    <a href={href} style={{ display: "block" }}>
      <div className="eyebrow" style={{ color: "rgba(250,250,248,0.5)", marginBottom: 8 }}>{label}</div>
      <div style={{ fontFamily: "var(--serif)", fontSize: 26, lineHeight: 1.2 }}>{value}</div>
    </a>);

}

// ─────────────── TOP NAV ───────────────

function TopNav({ variant }) {
  const [scrolled, setScrolled] = React.useState(false);
  const [light, setLight] = React.useState(false);

  React.useEffect(() => {
    if (variant === "static") return;
    const onScroll = () => {
      const y = window.scrollY || 0;
      setScrolled(y > 8);
      // hero is dark and ~720–820px tall depending on viewport.
      // switch to light variant once we're well into the work section.
      const hero = document.querySelector("[data-hero-end]");
      if (hero) {
        const r = hero.getBoundingClientRect();
        setLight(r.bottom <= 64);
      } else {
        setLight(y > 700);
      }
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [variant]);

  const cls = ["site-nav", scrolled ? "is-condensed" : "", light ? "is-light" : ""].filter(Boolean).join(" ");

  return (
    <nav className={cls}>
      <a href="#top" className="nav-brand" aria-label="Anas Al-Saad — home">
        <span className="nav-dot" aria-hidden="true"></span>
        <span>Anas Al-Saad</span>
      </a>
      <div className="nav-links">
        <a href="#work">Work</a>
        <a href="#about">About</a>
        <a href="#contact">Contact</a>
        <a href="#contact" className="nav-cta">
          <span>Get in touch</span>
          <span style={{ fontFamily: "var(--serif)", fontSize: 14, lineHeight: 1 }}>→</span>
        </a>
      </div>
    </nav>);

}

window.AboutSection = AboutSection;
window.ProjectsSection = ProjectsSection;
window.ContactSection = ContactSection;
window.TopNav = TopNav;
window.STATS = STATS;
window.PROJECTS = PROJECTS;