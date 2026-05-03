// BeforeAfter — scrubbable slider, auto-animates when idle.

function BeforeAfter({ before, after, beforeLabel = "Before", afterLabel = "After" }) {
  const [pct, setPct] = React.useState(50);
  const [hovering, setHovering] = React.useState(false);
  const ref = React.useRef(null);
  const draggingRef = React.useRef(false);

  // auto-animate when idle
  React.useEffect(() => {
    if (hovering) return;
    let raf;
    const start = performance.now();
    const tick = (t) => {
      const elapsed = (t - start) / 1000;
      // sine sweep between 25% and 75%, period ~6s
      const v = 50 + 25 * Math.sin(elapsed * (2 * Math.PI / 6));
      setPct(v);
      raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [hovering]);

  const setFromEvent = (e) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const x = (e.touches ? e.touches[0].clientX : e.clientX) - rect.left;
    const v = Math.max(0, Math.min(100, (x / rect.width) * 100));
    setPct(v);
  };

  return (
    <div
      ref={ref}
      onMouseEnter={() => setHovering(true)}
      onMouseLeave={() => { setHovering(false); draggingRef.current = false; }}
      onMouseMove={(e) => { if (hovering) setFromEvent(e); }}
      onMouseDown={(e) => { draggingRef.current = true; setFromEvent(e); }}
      onMouseUp={() => { draggingRef.current = false; }}
      onTouchStart={(e) => { setHovering(true); setFromEvent(e); }}
      onTouchMove={(e) => { setFromEvent(e); }}
      onTouchEnd={() => { setHovering(false); }}
      style={{
        position: "absolute", inset: 0,
        cursor: "ew-resize",
        userSelect: "none",
        overflow: "hidden",
      }}
    >
      {/* AFTER (full layer, behind) */}
      <img src={after} alt={afterLabel} draggable="false"
        style={{
          position: "absolute", inset: 0,
          width: "100%", height: "100%",
          objectFit: "cover", objectPosition: "center top",
          pointerEvents: "none",
        }} />

      {/* BEFORE (clipped to pct width, on top) */}
      <div style={{
        position: "absolute", inset: 0,
        width: `${pct}%`,
        overflow: "hidden",
        pointerEvents: "none",
      }}>
        <img src={before} alt={beforeLabel} draggable="false"
          style={{
            position: "absolute", left: 0, top: 0,
            width: `${100 / (pct / 100)}%`, height: "100%",
            objectFit: "cover", objectPosition: "center top",
            // Hold absolute size so the inner image doesn't squish as the wrapper resizes:
            // wrapper width is pct% of container; child width is 100/pct% of wrapper
            // = container width. Net: image stays the same size as the AFTER image.
          }} />
      </div>

      {/* Divider */}
      <div style={{
        position: "absolute", top: 0, bottom: 0,
        left: `${pct}%`,
        width: 2,
        background: "rgba(255,255,255,0.95)",
        boxShadow: "0 0 0 1px rgba(0,0,0,0.15), 0 8px 20px rgba(0,0,0,0.25)",
        transform: "translateX(-1px)",
        pointerEvents: "none",
      }}>
        <div style={{
          position: "absolute",
          top: "50%", left: "50%",
          transform: "translate(-50%, -50%)",
          width: 36, height: 36,
          borderRadius: "50%",
          background: "#fff",
          boxShadow: "0 4px 12px rgba(0,0,0,0.25)",
          display: "grid", placeItems: "center",
          color: "#16140f",
          fontFamily: "var(--mono)", fontSize: 14, fontWeight: 600,
        }}>
          ⇆
        </div>
      </div>

      {/* Labels */}
      <div style={{
        position: "absolute", left: 16, top: 16,
        fontFamily: "var(--mono)", fontSize: 10,
        letterSpacing: "0.08em", textTransform: "uppercase",
        background: "rgba(20,18,16,0.72)",
        backdropFilter: "blur(8px)",
        color: "#fff",
        padding: "5px 10px", borderRadius: 6,
        border: "1px solid rgba(255,255,255,0.12)",
        opacity: pct > 12 ? 1 : 0,
        transition: "opacity .2s",
        pointerEvents: "none",
      }}>
        ← {beforeLabel}
      </div>
      <div style={{
        position: "absolute", right: 16, top: 16,
        fontFamily: "var(--mono)", fontSize: 10,
        letterSpacing: "0.08em", textTransform: "uppercase",
        background: "rgba(20,18,16,0.72)",
        backdropFilter: "blur(8px)",
        color: "#fff",
        padding: "5px 10px", borderRadius: 6,
        border: "1px solid rgba(255,255,255,0.12)",
        opacity: pct < 88 ? 1 : 0,
        transition: "opacity .2s",
        pointerEvents: "none",
      }}>
        {afterLabel} →
      </div>
    </div>
  );
}

window.BeforeAfter = BeforeAfter;
