import { useState } from 'react';
import { profile } from '../data';
import {
  approachCriteria, approachOptions, approachSteps, capabilities, caseStudies, deck, depthTopics, headers,
  lifecycle, pillars, problems, promiseFlow, reasons, stageLabels, stories,
} from './content';

const pad = (n) => String(n).padStart(2, '0');
const home = import.meta.env.BASE_URL;

/** Second sentence of a headline in the accent colour: "Have a Problem? *Let's Engineer the Solution.*" */
function Headline({ text }) {
  const m = text.match(/^(.+?[.?])\s+(.+)$/);
  return m ? <>{m[1]} <span className="hl">{m[2]}</span></> : text;
}

/** Staggered entrance — `i` sets the delay. */
const Rise = ({ i = 0, as: Tag = 'div', className = '', style, ...props }) => (
  <Tag className={`rise ${className}`} style={{ '--i': i, ...style }} {...props} />
);

function Head({ n, children }) {
  const h = headers[n];
  return (
    <header>
      <Rise as="p" className="s-eyebrow"><span className="num">{pad(n + 1)} —</span> {h.label}</Rise>
      <Rise as="h2" i={1} className="s-title"><Headline text={h.headline} /></Rise>
      {children}
    </header>
  );
}

/** Vertical tablist with ↑/↓ support — used for the clickable lists on slides 03, 06 and 08. */
function useTabs(count) {
  const [sel, setSel] = useState(0);
  const onKeyDown = (e) => {
    const step = { ArrowDown: 1, ArrowUp: -1 }[e.key];
    if (!step) return;
    e.preventDefault();
    const next = (sel + step + count) % count;
    setSel(next);
    e.currentTarget.querySelectorAll('[role=tab]')[next]?.focus();
  };
  return [sel, setSel, onKeyDown];
}

// ---------- 01 ----------
function Opening() {
  return (
    <div className="promise flex h-full flex-col">
      <Rise as="p" className="s-eyebrow">Engineering Capability Deck <span className="num">· {profile.name}</span></Rise>
      <Rise as="h1" i={1} className="mt-[.45em] max-w-[16em]"><Headline text={headers[0].headline} /></Rise>
      <Rise as="p" i={2} className="s-lead mt-[1.1em]">
        From an unclear idea to a working, scalable product — I bridge the gap between business problems and technology.
      </Rise>

      <Rise i={3} className="flow mt-auto pt-[2em]" aria-label="From problem to deployment">
        {promiseFlow.map((s, k) => (
          <FlowNode key={s} k={k} label={s} last={k === promiseFlow.length - 1} />
        ))}
      </Rise>

      <Rise i={4} className="mt-[2.2em] flex flex-wrap items-end justify-between gap-[1em]">
        <p className="mono text-[.85em]"><span className="muted">positioning ›</span> {deck.positioning}</p>
        <p className="mono muted text-[.75em]">Press → to begin</p>
      </Rise>
    </div>
  );
}

function FlowNode({ k, label, last }) {
  return (
    <>
      <div className={`flow-node ${k === 0 ? 'first' : ''} ${last ? 'last' : ''}`}>
        <span className="flow-dot">{k === 0 ? '?' : last ? '✓' : pad(k)}</span>
        <span>{k === 0 ? 'Your problem' : label}</span>
      </div>
      {!last && <span className="flow-line" aria-hidden="true" />}
    </>
  );
}

// ---------- 02 ----------
function Who() {
  return (
    <>
      <Head n={1} />
      <div className="s-body g-who items-start">
        <Rise i={2} className="card idcard">
          <p className="s-label">Identity</p>
          <p className="mt-[.6em] text-[1.6em] font-bold tracking-tight">{profile.name}</p>
          <p className="mt-[.15em] text-[1.05em]" style={{ color: 'var(--accent)' }}>Full-Stack AI Engineer</p>
          <div className="mt-[1.1em]">
            {[
              ['now', 'Founding AI Engineer @ Nuearcus'],
              ['focus', 'AI systems · Software · Cloud'],
              ['shipped', 'NuePrism on Atlassian Marketplace'],
              ['based', profile.location],
            ].map(([k, v]) => (
              <p key={k} className="row"><span>{k}</span><span className="text-right">{v}</span></p>
            ))}
          </div>
        </Rise>

        <div>
          <Rise i={2} as="p" className="s-lead !text-[1.05em]" style={{ color: 'var(--text)' }}>
            Full-Stack AI Engineer working across software development, AI systems, cloud infrastructure and product delivery.
          </Rise>
          <Rise i={3} as="p" className="s-lead mt-[.7em] !text-[.95em]">
            I don&apos;t just develop features. I understand problems, design solutions, make engineering decisions — and take
            ownership of getting products into users&apos; hands.
          </Rise>
          <div className="mt-[1.1em]">
            {pillars.map((p, k) => (
              <Rise key={p.title} i={4 + k} className="pillar">
                <span className="n">{pad(k + 1)}</span>
                <div>
                  <p className="font-semibold">{p.title}</p>
                  <p className="muted mt-[.15em] text-[.88em]">{p.text}</p>
                </div>
              </Rise>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

// ---------- 03 ----------
function Solve() {
  const [sel, setSel, onKeyDown] = useTabs(problems.length);
  const p = problems[sel];
  return (
    <>
      <Head n={2} />
      <div className="s-body g-solve">
        <Rise i={2} className="flex flex-col">
          <p className="s-label mb-[.7em]">Your problem — select one</p>
          <div role="tablist" aria-label="Problems" aria-orientation="vertical" onKeyDown={onKeyDown} className="grid gap-[.4em]">
            {problems.map((x, k) => (
              <button
                key={x.problem}
                role="tab"
                id={`problem-${k}`}
                aria-selected={sel === k}
                aria-controls="problem-panel"
                tabIndex={sel === k ? 0 : -1}
                onClick={() => setSel(k)}
                className="pick problem-pick"
              >
                <span className="n">{pad(k + 1)}</span>
                <span>{x.problem}</span>
                <span className="arrow" aria-hidden="true">→</span>
              </button>
            ))}
          </div>
        </Rise>

        <Rise i={3} role="tabpanel" id="problem-panel" aria-labelledby={`problem-${sel}`}>
          <div key={sel} className="chain panel-in">
            <div className="card step">
              <p className="s-label pt-[.3em]">Approach</p>
              <p className="text-[1.05em] font-semibold leading-snug">{p.approach}</p>
            </div>
            <span className="down" aria-hidden="true">↓</span>
            <div className="card step">
              <p className="s-label pt-[.5em]">Capabilities</p>
              <div className="flex flex-wrap gap-[.4em]">{p.capabilities.map((c) => <span key={c} className="pill">{c}</span>)}</div>
            </div>
            <span className="down" aria-hidden="true">↓</span>
            <div className="card step" style={{ borderColor: 'color-mix(in srgb, var(--accent) 45%, transparent)' }}>
              <p className="s-label pt-[.3em]">Related evidence</p>
              <div>
                <p className="font-semibold">{p.evidence.name} <span className="mono muted text-[.75em] font-normal">· {p.evidence.where}</span></p>
                <p className="muted mt-[.3em] text-[.88em] leading-relaxed">{p.evidence.text}</p>
              </div>
            </div>
          </div>
        </Rise>
      </div>
    </>
  );
}

// ---------- 04 ----------
function Approach() {
  return (
    <>
      <Head n={3} />
      <div className="s-body flex flex-col">
        <ol className="steps">
          {approachSteps.map((s, k) => (
            <Rise as="li" key={s.step} i={2 + k} className={`card stepcard ${k === 0 || k === approachSteps.length - 1 ? 'edge' : ''}`}>
              <span className="k">{pad(k + 1)}</span>
              <h3>{s.step.toUpperCase()}</h3>
              <p className="verb">{s.verb}</p>
              <p>{s.text}</p>
            </Rise>
          ))}
        </ol>

        <div className="g-approach mt-auto pt-[1.6em]">
          <Rise i={8} className="card p-[1.4em]">
            <p className="text-[1.3em] font-semibold leading-tight tracking-tight">I don&apos;t force AI into every solution.</p>
            <p className="muted mt-[.6em] text-[.9em] leading-relaxed">
              Every option is compared against the business goal — and the simplest approach that works wins.
            </p>
          </Rise>
          <Rise i={9} className="card p-[1.4em]">
            <p className="s-label">I compare</p>
            <div className="mt-[.6em] flex flex-wrap gap-[.4em]">{approachOptions.map((o) => <span key={o} className="pill on">{o}</span>)}</div>
            <p className="s-label mt-[1em]">Weighed against</p>
            <div className="mt-[.6em] flex flex-wrap gap-[.4em]">{approachCriteria.map((c) => <span key={c} className="pill">{c}</span>)}</div>
          </Rise>
        </div>
      </div>
    </>
  );
}

// ---------- 05 ----------
function Build() {
  const [sel, setSel] = useState(0);
  const c = capabilities[sel];
  return (
    <>
      <Head n={4} />
      <div className="s-body flex flex-col">
        <div className="pillars">
          {capabilities.map((x, k) => (
            <Rise key={x.title} i={2 + k}>
              <button aria-pressed={sel === k} onClick={() => setSel(k)} className="pick pillar-pick h-full">
                <span className="mono muted text-[.72em]">{pad(k + 1)}</span>
                <h3>{x.title}</h3>
                <ul>{x.items.map((it) => <li key={it}>{it}</li>)}</ul>
                <span className="more">{sel === k ? 'proof point ↓' : 'see proof →'}</span>
              </button>
            </Rise>
          ))}
        </div>

        <Rise i={6} className="mt-auto pt-[1.1em]" aria-live="polite">
          <div key={sel} className="card panel-in flex flex-wrap items-center gap-x-[2em] gap-y-[.6em] p-[1.05em_1.5em]"
            style={{ borderColor: 'color-mix(in srgb, var(--accent) 45%, transparent)' }}>
            <div className="min-w-[12em] flex-none">
              <p className="s-label">Proof point · {c.title}</p>
              <p className="mt-[.35em] font-semibold">{c.proof.name}</p>
            </div>
            <p className="muted flex-1 basis-[20em] text-[.92em] leading-relaxed">{c.proof.text}</p>
          </div>
        </Rise>
      </div>
    </>
  );
}

// ---------- 06 ----------
function Proof() {
  const [sel, setSel, onKeyDown] = useTabs(caseStudies.length);
  const c = caseStudies[sel];
  const rows = [
    ['Problem', c.problem],
    ['My role', c.role],
    ['Key decision', c.decision],
    ['Solution', c.solution],
    ['Outcome', c.outcome],
    ['Evidence', c.link && <a href={c.link} target="_blank" rel="noreferrer">{c.link.replace(/^https?:\/\/(www\.)?/, '').replace(/\/$/, '')} ↗</a>],
  ].filter(([, v]) => v);

  return (
    <>
      <Head n={5} />
      <div className="s-body g-proof">
        <Rise i={2} className="flex flex-col gap-[.6em]">
          <div role="tablist" aria-label="Case studies" aria-orientation="vertical" onKeyDown={onKeyDown} className="grid gap-[.6em]">
            {caseStudies.map((x, k) => (
              <button
                key={x.name}
                role="tab"
                id={`case-${k}`}
                aria-selected={sel === k}
                aria-controls="case-panel"
                tabIndex={sel === k ? 0 : -1}
                onClick={() => setSel(k)}
                className="pick case-pick"
              >
                <span className="flex items-center justify-between gap-[.6em]">
                  <b>{x.name}</b>
                  <span className={`badge ${x.stage}`}>{stageLabels[x.stage]}</span>
                </span>
                <span className="muted text-[.82em]">{x.tag}</span>
              </button>
            ))}
          </div>
          <p className="mono muted mt-auto text-[.68em] leading-relaxed">
            Shipped products and client projects are labelled as such.
          </p>
        </Rise>

        <Rise i={3} role="tabpanel" id="case-panel" aria-labelledby={`case-${sel}`}>
          <div key={sel} className="card case panel-in">
            <div className="mb-[.6em] flex items-center justify-between gap-[1em]">
              <p className="text-[1.2em] font-bold tracking-tight">{c.name}</p>
              <span className={`badge ${c.stage}`}>{stageLabels[c.stage]}</span>
            </div>
            <dl>
              {rows.map(([k, v]) => (
                <div key={k} className="contents">
                  <dt>{k}</dt>
                  <dd>{v}</dd>
                </div>
              ))}
            </dl>
          </div>
        </Rise>
      </div>
    </>
  );
}

// ---------- 07 ----------
function Journey() {
  return (
    <>
      <Head n={6} />
      <div className="s-body flex flex-col">
        <ol className="track">
          {lifecycle.map((s, k) => (
            <Rise as="li" key={s.stage} i={2 + k * 0.6} className="stop">
              <span className="dot">{pad(k + 1)}</span>
              <h3>{s.stage}</h3>
              <p>{s.text}</p>
            </Rise>
          ))}
        </ol>
        <Rise i={7} as="p" className="loop">↻ iteration feeds the next requirements</Rise>

        <div className="g-approach mt-auto pt-[1.4em]">
          <Rise i={8} className="card p-[1.3em_1.4em]">
            <p className="s-label">End to end</p>
            <p className="mt-[.5em] leading-relaxed">
              Product discovery, technical decisions, implementation, infrastructure and post-release improvement —
              <span className="muted"> connected by one engineer who understands every stage.</span>
            </p>
          </Rise>
          <Rise i={9} className="card p-[1.3em_1.4em]">
            <p className="s-label">Cross-functional</p>
            <p className="mt-[.5em] leading-relaxed">
              I own the engineering and work alongside product, design and stakeholders —
              <span className="muted"> ownership, not a claim that every project was built alone.</span>
            </p>
          </Rise>
        </div>
      </div>
    </>
  );
}

// ---------- 08 ----------
function Depth() {
  const [sel, setSel] = useState(0);
  const s = stories[sel];
  return (
    <>
      <Head n={7} />
      <div className="s-body flex flex-col">
        <Rise i={2} className="flex flex-wrap gap-[.4em]">
          {depthTopics.map((t) => <span key={t} className="pill">{t}</span>)}
        </Rise>

        <Rise i={3} className="mt-[2.4em] flex flex-wrap items-center justify-between gap-[.8em] border-t border-[var(--line)] pt-[1.6em]">
          <p className="s-label">Engineering story · symptom → validation</p>
          <div role="tablist" aria-label="Engineering stories" className="flex gap-[.4em]">
            {stories.map((x, k) => (
              <button key={x.title} role="tab" aria-selected={sel === k} aria-controls="story-panel" onClick={() => setSel(k)} className="pick tabbtn">
                {x.title}
              </button>
            ))}
          </div>
        </Rise>

        <Rise i={4} role="tabpanel" id="story-panel" aria-label={s.title} className="mt-[.8em]">
          <ol key={sel} className="story panel-in">
            {Object.entries(s.steps).map(([k, v], j) => (
              <li key={k} className="card">
                <h4><span className="muted">{j + 1}</span>{k}</h4>
                <p>{v}</p>
              </li>
            ))}
          </ol>
        </Rise>
      </div>
    </>
  );
}

// ---------- 09 ----------
function Why() {
  return (
    <>
      <Head n={8} />
      <div className="s-body g-why">
        <ul>
          {reasons.map((r, k) => (
            <Rise as="li" key={r.title} i={2 + k} className="reason">
              <span className="n">{pad(k + 1)}</span>
              <b>{r.title}</b>
              <span>{r.text}</span>
            </Rise>
          ))}
        </ul>
        <Rise i={5} className="card quote">
          <blockquote>AI accelerates execution. Human judgment owns quality and decisions.</blockquote>
          <p className="muted text-[.9em] leading-relaxed">
            Logic and engineering judgment matter more than merely generating code.
          </p>
        </Rise>
      </div>
    </>
  );
}

// ---------- 10 ----------
function Next() {
  const mail = `mailto:${profile.email}?subject=${encodeURIComponent("Let's discuss a problem")}`;
  return (
    <div className="closing flex h-full flex-col items-center justify-center text-center">
      <Rise as="p" className="s-eyebrow"><span className="num">10 —</span> {headers[9].label}</Rise>
      <Rise as="h2" i={1} className="mt-[.4em] max-w-[14em]"><Headline text={headers[9].headline} /></Rise>
      <Rise as="p" i={2} className="s-lead mx-auto mt-[1em] max-w-[36em]">
        Whether it&apos;s an idea that needs validation, a process that needs automation, an AI capability that needs engineering,
        or a product that needs to reach production — I&apos;m interested in solving meaningful problems and building solutions that work.
      </Rise>
      <Rise i={3} className="mt-[2em]">
        <a href={mail} className="s-btn solid !text-[.95em]">Let&apos;s Discuss Your Problem →</a>
      </Rise>
      <Rise i={4} className="mt-[1.2em] flex flex-wrap justify-center gap-[.6em]">
        <a href={`mailto:${profile.email}`} className="s-btn ghost">Email</a>
        <a href={profile.linkedin} target="_blank" rel="noreferrer" className="s-btn ghost">LinkedIn ↗</a>
        <a href={profile.github} target="_blank" rel="noreferrer" className="s-btn ghost">GitHub ↗</a>
        <a href={home} className="s-btn ghost">← Return to Portfolio</a>
      </Rise>
      <Rise as="p" i={5} className="mono muted mt-[1.4em] text-[.75em]">{profile.email}</Rise>
    </div>
  );
}

export const SLIDES = [Opening, Who, Solve, Approach, Build, Proof, Journey, Depth, Why, Next];
