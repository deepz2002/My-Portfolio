import { useCallback, useEffect, useRef, useState } from 'react';
import BinaryRain from './components/BinaryRain';
import Nav from './components/Nav';
import Hero from './components/Hero';
import Philosophy from './components/Philosophy';
import Process from './components/Process';
import Journey from './components/Journey';
import Nuearcus from './components/Nuearcus';
import FourGood from './components/FourGood';
import Projects from './components/Projects';
import Clients from './components/Clients';
import Stack from './components/Stack';
import Contact from './components/Contact';
import CookieBanner from './components/CookieBanner';
import { track } from './analytics';

const SECTIONS = [
  ['home', Hero],
  ['philosophy', Philosophy],
  ['process', Process],
  ['about', Journey],
  ['nuearcus', Nuearcus],
  ['4good', FourGood],
  ['projects', Projects],
  ['clients', Clients],
  ['stack', Stack],
  ['contact', Contact],
];

export default function App() {
  const [theme, setTheme] = useState(() => (document.documentElement.classList.contains('dark') ? 'dark' : 'light'));
  const [active, setActive] = useState('home');
  const onActive = useCallback((id) => setActive(id), []);

  // one event per section per visit — shows how far each visitor actually read
  const seen = useRef(new Set());
  useEffect(() => {
    if (seen.current.has(active)) return;
    seen.current.add(active);
    track('section_viewed', { section: active });
  }, [active]);

  const toggleTheme = () => {
    const next = theme === 'dark' ? 'light' : 'dark';
    document.documentElement.classList.toggle('dark', next === 'dark');
    try { localStorage.setItem('theme', next); } catch (e) { /* storage unavailable */ }
    setTheme(next);
  };

  // ↑ / ↓ jump one full screen
  useEffect(() => {
    const onKey = (e) => {
      if (!['ArrowDown', 'ArrowUp'].includes(e.key) || e.metaKey || e.ctrlKey || e.target.closest('input,textarea,[role=tablist]')) return;
      const i = SECTIONS.findIndex(([id]) => id === active);
      const next = SECTIONS[i + (e.key === 'ArrowDown' ? 1 : -1)];
      if (next) { e.preventDefault(); document.getElementById(next[0]).scrollIntoView({ behavior: 'smooth' }); }
    };
    addEventListener('keydown', onKey);
    return () => removeEventListener('keydown', onKey);
  }, [active]);

  return (
    <>
      <BinaryRain theme={theme} />
      <Nav active={active} theme={theme} onToggleTheme={toggleTheme} />

      <aside className="fixed right-5 top-1/2 z-40 hidden -translate-y-1/2 md:block" aria-label="Section progress">
        {SECTIONS.map(([id]) => (
          <a
            key={id}
            href={`#${id}`}
            aria-label={id}
            title={id}
            className="my-3 block h-2 w-2 rounded-full border border-[var(--accent)] transition-all"
            style={active === id ? { background: 'var(--accent)', transform: 'scale(1.5)' } : undefined}
          />
        ))}
      </aside>

      <main>
        {SECTIONS.map(([id, Comp]) => <Comp key={id} onActive={onActive} />)}
      </main>
      <CookieBanner />
    </>
  );
}
