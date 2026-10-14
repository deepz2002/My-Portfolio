import { useEffect, useState } from 'react';
import { profile } from '../data';
import { R, Screen, TermBar } from './ui';

function useTyped(phrases) {
  const [text, setText] = useState('');
  useEffect(() => {
    if (matchMedia('(prefers-reduced-motion: reduce)').matches) return setText(phrases[0]);
    let p = 0, c = 0, del = false, timer;
    const tick = () => {
      const s = phrases[p];
      setText(s.slice(0, c));
      if (!del && c === s.length) { del = true; timer = setTimeout(tick, 1800); return; }
      if (del && c === 0) { del = false; p = (p + 1) % phrases.length; }
      c += del ? -1 : 1;
      timer = setTimeout(tick, del ? 25 : 55);
    };
    tick();
    return () => clearTimeout(timer);
  }, [phrases]);
  return text;
}

export default function Hero({ onActive }) {
  const typed = useTyped(profile.typed);
  return (
    <Screen id="home" label="Home" onActive={onActive}>
      <div className="grid items-center gap-10 lg:grid-cols-5">
        <div className="lg:col-span-3">
          <R as="p" d={0.05} className="eyebrow">$ whoami</R>
          <R as="h1" d={0.15} className="mt-3 font-mono font-bold leading-tight" style={{ fontSize: 'clamp(2.2rem, 7vw, 4.5rem)', letterSpacing: '-.03em' }}>
            {profile.name}
          </R>
          <R as="p" d={0.2} className="mt-2 font-mono text-lg sm:text-2xl">
            <span className="accent">{profile.role}</span> <span className="muted">@ Nuearcus</span>
          </R>
          <R as="p" d={0.25} className="mt-4 min-h-[2rem] font-mono text-base sm:text-lg">
            <span className="cursor">{typed}</span>
          </R>
          <R as="p" d={0.35} className="muted mt-5 max-w-xl">{profile.intro}</R>
          <R d={0.45} className="mt-8 flex flex-wrap gap-3">
            <a href="#projects" className="btn solid">Explore Projects →</a>
            <a href={`${import.meta.env.BASE_URL}deck/`} className="btn">Capability Deck ▸</a>
            <a href="#nuearcus" className="btn">Experience</a>
            <a href={profile.linkedin} target="_blank" rel="noreferrer" className="btn">LinkedIn ↗</a>
          </R>
        </div>

        <R d={0.3} className="lg:col-span-2">
          <div className="term font-mono text-sm">
            <TermBar title="~/career/pipeline.sh" />
            <div className="space-y-1.5 p-4">
              {[
                ['2020 – 24', 'bnmit', 'B.E. AI & ML'],
                ['2024 – 25', '4good.ai', 'Banavo · PodHealth'],
                ['2025 – now', 'nuearcus', 'NuePrism'],
              ].map(([year, place, what]) => (
                <p key={place} className="flex gap-3">
                  <span className="accent w-[5.5rem] flex-none">{year}</span>
                  <span>{place} <span className="muted">→ {what}</span></span>
                </p>
              ))}
              <p className="muted">▸ learn · improve · repeat<span className="cursor" /></p>
            </div>
          </div>
        </R>
      </div>
    </Screen>
  );
}
