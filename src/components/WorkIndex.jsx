import { useEffect, useMemo, useRef, useState, useSyncExternalStore } from "react";
import projects from "../data/projects.json";
import { ArrowUpRight, Plus } from "./Icons";

function useMediaQuery(query) {
  return useSyncExternalStore(
    (cb) => {
      const mq = window.matchMedia(query);
      mq.addEventListener("change", cb);
      return () => mq.removeEventListener("change", cb);
    },
    () => window.matchMedia(query).matches,
    () => false,
  );
}

const filters = [
  { id: "all", label: "All" },
  { id: "client", label: "Client" },
  { id: "personal", label: "Personal" },
];

const pad = (n) => String(n).padStart(2, "0");

/* ---------- Cursor-follow preview (desktop, fine pointer only) ---------- */
function usePreviewFollower(previewRef, active) {
  const target = useRef({ x: 0, y: 0 });
  const pos = useRef({ x: 0, y: 0, r: 0 });
  const raf = useRef(0);
  const reduced = useRef(false);

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    reduced.current = mq.matches;
    const onChange = (e) => (reduced.current = e.matches);
    mq.addEventListener("change", onChange);
    return () => mq.removeEventListener("change", onChange);
  }, []);

  useEffect(() => {
    const el = previewRef.current;
    if (!el || !active) return;

    const tick = () => {
      const p = pos.current;
      const t = target.current;
      const k = reduced.current ? 1 : 0.14;
      const dx = t.x - p.x;
      p.x += dx * k;
      p.y += (t.y - p.y) * k;
      // Lean into the direction of travel, lerped back to zero.
      const lean = reduced.current ? 0 : Math.max(-7, Math.min(7, dx * 0.06));
      p.r += (lean - p.r) * 0.12;
      el.style.transform = `translate3d(${p.x}px, ${p.y}px, 0) rotate(${p.r}deg)`;
      raf.current = requestAnimationFrame(tick);
    };
    raf.current = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf.current);
  }, [active, previewRef]);

  const move = (clientX, clientY, snap = false) => {
    const el = previewRef.current;
    if (!el) return;
    const w = el.offsetWidth;
    const h = el.offsetHeight;
    const margin = 16;
    // Sit to the right of the cursor; flip left near the edge.
    let x = clientX + 32;
    if (x + w > window.innerWidth - margin) x = clientX - w - 32;
    let y = clientY - h / 2;
    y = Math.max(margin + 56, Math.min(window.innerHeight - h - margin, y));
    target.current = { x, y };
    if (snap) {
      pos.current.x = x;
      pos.current.y = y;
    }
  };

  return move;
}

function Preview({ items, hovered, armed, previewRef }) {
  return (
    <div
      ref={previewRef}
      className={`preview${hovered ? " is-active" : ""}`}
      aria-hidden="true"
    >
      <div className="preview__frame">
        {armed &&
          items.map((p) => (
            <div
              key={p.slug}
              className={`preview__item${hovered === p.slug ? " is-current" : ""}`}
            >
              {p.images[0] ? (
                <img src={p.images[0]} alt="" decoding="async" />
              ) : (
                <div className="plate">
                  <span className="plate__name">{p.name}</span>
                  <span className="mono">{p.status ?? "Source on GitHub"}</span>
                </div>
              )}
            </div>
          ))}
      </div>
    </div>
  );
}

/* ---------- One row of the index ---------- */
function Row({ project, index, open, onToggle, onHover }) {
  const id = `project-${project.slug}`;
  const visibleTools = project.tools.slice(0, 2).join(" · ");

  return (
    <li
      className={`row${open ? " is-open" : ""}`}
      onPointerEnter={(e) => e.pointerType === "mouse" && onHover(project.slug, e)}
      onPointerLeave={(e) => e.pointerType === "mouse" && onHover(null, e)}
    >
      <h3 className="row__heading">
        <button
          type="button"
          className="row__trigger"
          aria-expanded={open}
          aria-controls={`${id}-panel`}
          id={`${id}-trigger`}
          onClick={onToggle}
        >
          <span className="row__num mono">{pad(index + 1)}</span>
          <span className="row__name">
            {project.name}
            {project.status && <span className="tag mono">{project.status}</span>}
          </span>
          <span className="row__type">{project.type}</span>
          <span className="row__stack mono">{visibleTools}</span>
          <span className="row__year mono">{project.year}</span>
          <span className="row__icon">
            <Plus />
          </span>
        </button>
      </h3>

      <div
        className="row__panel"
        id={`${id}-panel`}
        role="region"
        aria-labelledby={`${id}-trigger`}
        inert={!open}
      >
        <div className="row__panel-inner">
          <div className="detail">
            <p className="detail__summary">{project.summary}</p>
            <p className="detail__body">{project.description}</p>
            <div className="detail__links">
              {project.link && (
                <a
                  className="btn btn--solid"
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Visit site <ArrowUpRight />
                  <span className="sr-only"> (opens in a new tab)</span>
                </a>
              )}
              {project.repo && (
                <a className="btn" href={project.repo} target="_blank" rel="noopener noreferrer">
                  Source code <ArrowUpRight />
                  <span className="sr-only"> (opens in a new tab)</span>
                </a>
              )}
            </div>
            <dl className="detail__meta">
              <div>
                <dt className="mono">Type</dt>
                <dd>{project.type}</dd>
              </div>
              <div>
                <dt className="mono">Year</dt>
                <dd>{project.year}</dd>
              </div>
              <div className="detail__tools">
                <dt className="mono">Built with</dt>
                <dd>
                  <ul>
                    {project.tools.map((t) => (
                      <li key={t}>{t}</li>
                    ))}
                  </ul>
                </dd>
              </div>
            </dl>
          </div>

          {open && project.images.length > 0 && (
            <ul className="gallery" aria-label={`${project.name} screenshots`}>
              {project.images.map((src, i) => (
                <li key={src}>
                  <img
                    src={src}
                    alt={`${project.name}: screenshot ${i + 1} of ${project.images.length}`}
                    loading="lazy"
                    decoding="async"
                    width="1440"
                    height="900"
                  />
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </li>
  );
}

/* ---------- Section ---------- */
export default function WorkIndex() {
  const [filter, setFilter] = useState("all");
  const [openSlug, setOpenSlug] = useState(null);
  const [hovered, setHovered] = useState(null);
  const [armed, setArmed] = useState(false);
  const finePointer = useMediaQuery("(hover: hover) and (pointer: fine)");
  const sectionRef = useRef(null);
  const previewRef = useRef(null);

  const list = useMemo(
    () => (filter === "all" ? projects : projects.filter((p) => p.category === filter)),
    [filter],
  );

  const counts = useMemo(
    () => ({
      all: projects.length,
      client: projects.filter((p) => p.category === "client").length,
      personal: projects.filter((p) => p.category === "personal").length,
    }),
    [],
  );

  // Only fetch preview images once the index is near the viewport (keeps first load light).
  useEffect(() => {
    if (!finePointer || armed || !sectionRef.current) return;
    const io = new IntersectionObserver(
      ([entry]) => entry.isIntersecting && setArmed(true),
      { rootMargin: "400px 0px" },
    );
    io.observe(sectionRef.current);
    return () => io.disconnect();
  }, [finePointer, armed]);

  const usePreview = finePointer && armed;
  const move = usePreviewFollower(previewRef, usePreview && hovered !== null);

  const handleHover = (slug, e) => {
    if (!usePreview) return;
    if (slug && !hovered) move(e.clientX, e.clientY, true);
    setHovered(slug);
  };

  return (
    <section
      id="work"
      ref={sectionRef}
      className="section work"
      aria-labelledby="work-title"
      onPointerMove={(e) => usePreview && hovered && move(e.clientX, e.clientY)}
    >
      <div className="section__head">
        <p className="section__label mono">(01)</p>
        <h2 id="work-title" className="section__title">
          Selected work
        </h2>
        <div className="filters" role="group" aria-label="Filter projects">
          {filters.map((f) => (
            <button
              key={f.id}
              type="button"
              className="filter mono"
              aria-pressed={filter === f.id}
              onClick={() => {
                setFilter(f.id);
                setOpenSlug(null);
              }}
            >
              {f.label}
              <sup>{counts[f.id]}</sup>
            </button>
          ))}
        </div>
      </div>

      <div className="index-head mono" aria-hidden="true">
        <span>No.</span>
        <span>Project</span>
        <span>Type</span>
        <span>Stack</span>
        <span>Year</span>
        <span />
      </div>

      <ol className={`index${hovered && !openSlug ? " is-hovering" : ""}`}>
        {list.map((p, i) => (
          <Row
            key={p.slug}
            project={p}
            index={i}
            open={openSlug === p.slug}
            onToggle={() => {
              setOpenSlug((s) => (s === p.slug ? null : p.slug));
              setHovered(null);
            }}
            onHover={(slug, e) => !openSlug && handleHover(slug, e)}
          />
        ))}
      </ol>

      <p className="work__note mono">
        {finePointer ? "Hover to preview · Click a project to open it" : "Tap a project to open it"}
      </p>

      {finePointer && (
        <Preview
          items={projects}
          hovered={openSlug ? null : hovered}
          armed={armed}
          previewRef={previewRef}
        />
      )}
    </section>
  );
}
