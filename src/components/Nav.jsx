import { useState } from 'react';
import { profile } from '../data';

const LINKS = [
  ['about', 'About'],
  ['nuearcus', 'Experience'],
  ['projects', 'Projects'],
  ['clients', 'Clients'],
  ['stack', 'Skills'],
  ['contact', 'Contact'],
];
// sections that count as "Experience" for nav highlighting
const GROUP = { '4good': 'nuearcus' };
// separate page: the capability deck
const DECK = `${import.meta.env.BASE_URL}deck/`;

export default function Nav({ active, theme, onToggleTheme }) {
  const [open, setOpen] = useState(false);
  const current = GROUP[active] || active;

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-[var(--line)] backdrop-blur-md" style={{ background: 'rgb(var(--veil) / .72)' }}>
      <nav className="mx-auto flex h-14 max-w-6xl items-center justify-between px-4 font-mono text-sm sm:px-8">
        <a href="#home" className="font-bold accent">&gt;_ <span className="text-[var(--text)]">{profile.handle}</span></a>
        <div className="hidden items-center gap-7 lg:flex">
          {LINKS.map(([id, label]) => (
            <a key={id} href={`#${id}`} className={`navlink ${current === id ? 'active' : ''}`}>{label}</a>
          ))}
          <a href={DECK} className="navlink rounded-md border border-[var(--accent)] px-2.5 py-1 !text-[var(--accent)] hover:bg-[var(--glow)]">Deck ▸</a>
        </div>
        <div className="flex items-center gap-2">
          <button onClick={onToggleTheme} className="chip py-1.5 hover:border-[var(--accent)]" aria-label="Toggle color theme">
            {theme === 'dark' ? '☾ dark' : '☀ light'}
          </button>
          <button onClick={() => setOpen((o) => !o)} className="chip py-1.5 lg:hidden" aria-label="Menu" aria-expanded={open}>
            {open ? '✕' : '☰'}
          </button>
        </div>
      </nav>
      {open && (
        <div className="grid grid-cols-2 gap-2 px-4 pb-4 font-mono text-sm lg:hidden">
          {LINKS.map(([id, label]) => (
            <a key={id} href={`#${id}`} onClick={() => setOpen(false)} className="chip py-2 text-center text-sm">{label}</a>
          ))}
          <a href={DECK} className="chip col-span-2 border-[var(--accent)] py-2 text-center text-sm accent">Capability Deck ▸</a>
        </div>
      )}
    </header>
  );
}
