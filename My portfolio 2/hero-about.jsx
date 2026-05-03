// HeroAbout — dark hero merged with About Me content.
// Headline + render up top, then About copy + animated counters + contact row,
// all on the same dark backdrop.

function CounterDark({ target, suffix, label, accent }) {
  const [val, setVal] = React.useState(0);
  React.useEffect(() => {
    let raf;
    const start = performance.now();
    const dur = 1200;
    const tick = (t) => {
      const p = Math.min(1, (t - start) / dur);
      const eased = 1 - Math.pow(1 - p, 3);
      setVal(target * eased);
      if (p < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [target]);
  const display = Number.isInteger(target) ? Math.round(val) : val.toFixed(1);
  return (
    <div>
      <div style={{
        fontFamily: "var(--sans)", fontWeight: 700,
        fontSize: 64, lineHeight: 1,
        color: accent, letterSpacing: "-0.03em"
      }}>
        {display}{suffix}
      </div>
      <div style={{
        marginTop: 8, fontSize: 13,
        color: "rgba(250,250,248,0.7)",
        whiteSpace: "nowrap"
      }}>{label}</div>
    </div>);

}

function HeroAbout() {
  const accent = "#7a8cff";

  return (
    <section id="top" style={{
      padding: "80px 64px 120px",
      background: "var(--ink)",
      color: "#fafaf8",
      position: "relative",
      overflow: "hidden"
    }}>
      {/* ambient grid */}
      <div style={{
        position: "absolute", inset: 0,
        backgroundImage:
        "linear-gradient(rgba(255,255,255,0.04) 1px, transparent 1px)," +
        "linear-gradient(90deg, rgba(255,255,255,0.04) 1px, transparent 1px)",
        backgroundSize: "64px 64px",
        maskImage: "radial-gradient(ellipse at 30% 20%, #000 30%, transparent 75%)",
        WebkitMaskImage: "radial-gradient(ellipse at 30% 20%, #000 30%, transparent 75%)"
      }} />

      <div style={{ maxWidth: 1200, margin: "0 auto", position: "relative" }}>
        {/* top meta strip */}
        <div style={{
          display: "flex", justifyContent: "space-between", alignItems: "center",
          marginBottom: 80
        }}>
          <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
            <span className="eyebrow" style={{ color: "rgba(250,250,248,0.55)" }}>Anas Al-Saad</span>
            <span style={{ width: 4, height: 4, borderRadius: "50%", background: "rgba(250,250,248,0.3)" }} />
            <span className="eyebrow" style={{ color: "rgba(250,250,248,0.55)" }}>UX/UI DESIGNER </span>
          </div>
          <span className="tag" style={{
            background: "rgba(255,255,255,0.04)",
            borderColor: "rgba(255,255,255,0.1)",
            color: "rgba(250,250,248,0.7)"
          }}>
            <span className="dot"></span> Open to roles
          </span>
        </div>

        {/* upper grid: headline + render */}
        <div style={{
          display: "grid",
          gridTemplateColumns: "1.6fr 1fr",
          gap: 64,
          alignItems: "center"
        }}>
          <div>
            <h1 style={{
              margin: "0 0 48px",
              fontFamily: "var(--serif)",
              fontWeight: 400,
              fontSize: "clamp(44px, 4.6vw, 68px)",
              lineHeight: 1.1,
              letterSpacing: "-0.025em"
            }}>
              Designing products that feel like <span style={{ fontStyle: "italic", color: accent }}>infrastructure</span>, not friction.
            </h1>

            <div style={{
              display: "flex", gap: 12
            }}>
              <a href="#work" style={{
                display: "inline-flex", alignItems: "center", gap: 10,
                padding: "14px 22px",
                background: "#fafaf8", color: "var(--ink)",
                borderRadius: 999,
                fontSize: 14, fontWeight: 500,
                whiteSpace: "nowrap"
              }}>
                See selected work →
              </a>
              <a href="#contact" style={{
                display: "inline-flex", alignItems: "center", gap: 10,
                padding: "14px 22px",
                border: "1px solid rgba(255,255,255,0.18)",
                color: "#fafaf8",
                borderRadius: 999,
                fontSize: 14, fontWeight: 500,
                whiteSpace: "nowrap"
              }}>
                Get in touch
              </a>
            </div>
          </div>

          <div style={{ position: "relative" }}>
            <div style={{
              position: "relative", borderRadius: 20, overflow: "hidden",
              border: "1px solid rgba(255,255,255,0.08)",
              aspectRatio: "4 / 5",
              background: "linear-gradient(180deg, #1a1814 0%, #0d0c0a 100%)"
            }}>
              <img src="assets/anas-portrait.png" alt="Anas Al-Saad portrait"
              style={{
                position: "absolute", inset: 0,
                width: "100%", height: "100%",
                objectFit: "cover", objectPosition: "center top",
                filter: "grayscale(1) contrast(1.02)"
              }} />
              <div style={{
                position: "absolute", left: 16, top: 16,
                fontFamily: "var(--mono)", fontSize: 10,
                letterSpacing: "0.08em", textTransform: "uppercase",
                color: "rgba(255,255,255,0.85)",
                background: "rgba(0,0,0,0.35)",
                backdropFilter: "blur(8px)",
                padding: "4px 8px",
                borderRadius: 6,
                border: "1px solid rgba(255,255,255,0.18)"
              }}>
                Anas Al-Saad · Riyadh
              </div>
            </div>
          </div>
        </div>

        {/* About Me — same dark canvas */}
        <div id="about" style={{
          marginTop: 120,
          paddingTop: 64,
          borderTop: "1px solid rgba(255,255,255,0.1)"
        }}>
          <div style={{
            display: "grid",
            gridTemplateColumns: "200px 1fr",
            gap: 64,
            alignItems: "start", margin: "19.957px -88.6328px 0px 0px"
          }}>
            <div className="eyebrow" style={{ color: "rgba(250,250,248,0.5)" }}>About me</div>
            <div>
              <h2 style={{
                margin: 0,
                fontFamily: "var(--sans)",
                fontWeight: 700,
                fontSize: 44,
                letterSpacing: "-0.025em",
                color: "#fafaf8"
              }}>
                ABOUT ME
              </h2>

              <p style={{
                marginTop: 24, maxWidth: 640,
                fontSize: 16, lineHeight: 1.7,
                color: "rgba(250,250,248,0.78)"
              }}>
                I'm Anas Al-Saad, a UX/UI Designer based in Riyadh. I've spent the last 1.5 years working across B2C and B2B at Al Rajhi Bank — shipping 200+ designs in a high-velocity environment — and I'm interested in any product where complex systems meet real people. I call my approach <em>tactical design thinking</em>: the textbook process, right-sized for teams that ship fast.
              </p>

              {/* Counters */}
              <div style={{
                marginTop: 56,
                display: "grid",
                gridTemplateColumns: "repeat(3, max-content)",
                gap: 80
              }}>
                <CounterDark target={1.5} suffix="" label="Years of Experience" accent={accent} />
                <CounterDark target={5} suffix="" label="Completed Projects" accent={accent} />
                <CounterDark target={200} suffix="+" label="Tickets" accent={accent} />
              </div>

              {/* Contact row */}
              <div style={{
                marginTop: 64,
                display: "grid",
                gridTemplateColumns: "repeat(3, max-content)",
                gap: 80,
                paddingTop: 32,
                borderTop: "1px solid rgba(255,255,255,0.1)"
              }}>
                <div>
                  <div className="eyebrow" style={{
                    marginBottom: 8, fontWeight: 600,
                    color: "rgba(250,250,248,0.55)"
                  }}>Call Today</div>
                  <a href="tel:+966500139137" style={{
                    fontSize: 14, color: "#fafaf8",
                    whiteSpace: "nowrap"
                  }}>+966 50 013 9137</a>
                </div>
                <div>
                  <div className="eyebrow" style={{
                    marginBottom: 8, fontWeight: 600,
                    color: "rgba(250,250,248,0.55)"
                  }}>Email</div>
                  <a href="mailto:anas.a.al.saad@gmail.com" style={{
                    fontSize: 14, color: "#fafaf8",
                    whiteSpace: "nowrap"
                  }}>anas.a.al.saad@gmail.com</a>
                </div>
                <div>
                  <div className="eyebrow" style={{
                    marginBottom: 8, fontWeight: 600,
                    color: "rgba(250,250,248,0.55)"
                  }}>LinkedIn</div>
                  <a href="https://www.linkedin.com/in/anas-al-saad" style={{
                    fontSize: 14, color: "#fafaf8",
                    whiteSpace: "nowrap"
                  }}>anas-al-saad</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>);

}

window.HeroAbout = HeroAbout;