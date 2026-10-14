import { useCallback, useEffect, useRef, useState } from 'react';
import { profile } from '../data';
import { track } from '../analytics';
import CookieBanner from '../components/CookieBanner';
import { deck, headers } from './content';
import { SLIDES } from './Slides';

const pad = (n) => String(n).padStart(2, '0');
const home = import.meta.env.BASE_URL;
const fromHash = () => Math.max(0, headers.findIndex((h) => `#${h.id}` === location.hash));

export default function Deck() {
  const [index, setIndex] = useState(fromHash);
  const [dir, setDir] = useState('next');
  const [overview, setOverview] = useState(false);
  const [theme, setTheme] = useState(() => (document.documentElement.classList.contains('dark') ? 'dark' : 'light'));
  const stage = useRef(null);
  const last = SLIDES.length - 1;

  const go = useCallback((to) => {
    const next = Math.min(last, Math.max(0, to));
    if (next === index) return;
    setDir(next > index ? 'next' : 'prev');
    setIndex(next);
  }, [index, last]);

  // keep the URL shareable (…/deck/#solve) and count how far each visitor got
  const seen = useRef(new Set());
  useEffect(() => {
    const h = headers[index];
    history.replaceState(null, '', `#${h.id}`);
    document.title = `${pad(index + 1)} ${h.label} — ${deck.title} · ${profile.name}`;
    stage.current?.scrollTo(0, 0);
    if (!seen.current.has(h.id)) {
      seen.current.add(h.id);
      track('deck_slide_viewed', { slide: h.id, index: index + 1 });
    }
  }, [index]);

  useEffect(() => {
    const onHash = () => go(fromHash());
    addEventListener('hashchange', onHash);
    return () => removeEventListener('hashchange', onHash);
  }, [go]);

  // ← → / PgUp PgDn / Space / Home End / 1–9,0 / O for overview / Esc
  useEffect(() => {
    const onKey = (e) => {
      if (e.metaKey || e.ctrlKey || e.altKey) return;
      if (e.key === 'Escape') return setOverview(false);
      if (e.key === 'o' || e.key === 'O') return setOverview((o) => !o);
      if (overview) return;
      const onControl = e.target.closest?.('button, a, input, textarea');
      const keys = {
        ArrowRight: index + 1, PageDown: index + 1, ArrowLeft: index - 1, PageUp: index - 1, Home: 0, End: last,
        ...(onControl ? {} : { ' ': e.shiftKey ? index - 1 : index + 1 }),
      };
      if (/^[0-9]$/.test(e.key)) keys[e.key] = e.key === '0' ? 9 : Number(e.key) - 1;
      if (!(e.key in keys)) return;
      e.preventDefault();
      go(keys[e.key]);
    };
    addEventListener('keydown', onKey);
    return () => removeEventListener('keydown', onKey);
  }, [index, last, overview, go]);

  // horizontal swipe on touch screens
  const touch = useRef(null);
  const onTouchStart = (e) => { touch.current = [e.touches[0].clientX, e.touches[0].clientY]; };
  const onTouchEnd = (e) => {
    if (!touch.current) return;
    const dx = e.changedTouches[0].clientX - touch.current[0];
    const dy = e.changedTouches[0].clientY - touch.current[1];
    touch.current = null;
    if (Math.abs(dx) > 60 && Math.abs(dx) > Math.abs(dy) * 1.5) go(index + (dx < 0 ? 1 : -1));
  };

  const toggleTheme = () => {
    const next = theme === 'dark' ? 'light' : 'dark';
    document.documentElement.classList.toggle('dark', next === 'dark');
    try { localStorage.setItem('theme', next); } catch (e) { /* storage unavailable */ }
    setTheme(next);
  };

  const Slide = SLIDES[index];
  const h = headers[index];

  return (
    <div className="deck">
      <header className="deck-bar">
        <div className="group min-w-0">
          <a href={home} className="flex-none font-bold" style={{ color: 'var(--accent)' }} aria-label="Back to portfolio">
            &gt;_ <span style={{ color: 'var(--text)' }}>{profile.handle}</span>
          </a>
          <span className="deck-title hidden sm:inline">/ <b>{deck.title}</b></span>
        </div>
        <div className="group">
          <button className="ctl" onClick={() => setOverview(true)} aria-haspopup="dialog" title="All slides (O)">▦ <span className="hidden sm:inline">Slides</span></button>
          <button className="ctl" onClick={toggleTheme} aria-label="Toggle color theme">{theme === 'dark' ? '☾' : '☀'}</button>
          <a className="ctl" href={home} title="Return to portfolio">Exit ✕</a>
        </div>
      </header>

      <main ref={stage} className="stage" onTouchStart={onTouchStart} onTouchEnd={onTouchEnd}>
        <section
          key={index}
          className={`slide enter-${dir}`}
          aria-roledescription="slide"
          aria-label={`${index + 1} of ${SLIDES.length}: ${h.label}`}
        >
          <div className="flex min-h-0 flex-1 flex-col"><Slide /></div>
          <footer className="s-foot">
            <span>{profile.name} · {deck.title}</span>
            <span>{pad(index + 1)} / {pad(SLIDES.length)}</span>
          </footer>
        </section>
      </main>

      <nav className="deck-bar" aria-label="Slide navigation">
        <button className="ctl" onClick={() => go(index - 1)} disabled={index === 0} aria-label="Previous slide">←<span className="hidden sm:inline"> Prev</span></button>
        <div className="flex flex-1 items-center justify-center gap-4">
          <div className="progress hidden sm:flex">
            {headers.map((x, k) => (
              <button
                key={x.id}
                onClick={() => go(k)}
                aria-label={`Slide ${k + 1}: ${x.label}`}
                aria-current={k === index ? 'step' : undefined}
                title={`${pad(k + 1)} — ${x.label}`}
                className={k < index ? 'done' : ''}
              />
            ))}
          </div>
          <span className="counter"><b>{pad(index + 1)}</b> / {pad(SLIDES.length)}</span>
          <span className="muted hidden truncate lg:inline">{h.label}</span>
        </div>
        <button className="ctl primary" onClick={() => go(index + 1)} disabled={index === last} aria-label="Next slide"><span className="hidden sm:inline">Next </span>→</button>
      </nav>

      <p className="sr-only" aria-live="polite">Slide {index + 1} of {SLIDES.length}: {h.label}</p>

      {overview && <Overview index={index} onPick={(k) => { go(k); setOverview(false); }} onClose={() => setOverview(false)} />}
      <CookieBanner />
    </div>
  );
}

/** Every deck header at a glance — jump to any slide. */
function Overview({ index, onPick, onClose }) {
  const current = useRef(null);
  useEffect(() => { current.current?.focus(); }, []);
  return (
    <div className="overview" role="dialog" aria-modal="true" aria-label="All slides" onClick={(e) => e.target === e.currentTarget && onClose()}>
      <div className="overview-inner">
        <div className="flex items-center justify-between gap-4">
          <div>
            <p className="font-mono text-sm" style={{ color: 'var(--accent)' }}>// {deck.title}</p>
            <p className="muted mt-1 text-sm">{deck.tagline}</p>
          </div>
          <button className="ctl" onClick={onClose} aria-label="Close slide overview">Close ✕</button>
        </div>
        <div className="overview-grid">
          {headers.map((h, k) => (
            <button key={h.id} ref={k === index ? current : null} className="thumb" aria-current={k === index} onClick={() => onPick(k)}>
              <span className="n">{pad(k + 1)}</span>
              <b>{h.label}</b>
              <span>{h.headline}</span>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
