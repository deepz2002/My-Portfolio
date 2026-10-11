import { Fragment } from 'react';
import { process } from '../data';
import { R, Screen, SectionHead } from './ui';

const ICONS = {
  problem: <><path d="M10 6h20l8 8v12M10 6v36h14" /><path d="M16 18h14M16 25h10" /><circle cx="36" cy="37" r="8" /><path d="M34 35a2 2 0 1 1 3 1.7c-.7.4-1 .8-1 1.5M36 41v.2" /></>,
  ai: <><path d="M24 8v32M24 12c-5-5-14-2-14 6 0 3 1 4 3 5-2 2-2 6 1 8 2 2 5 2 7 0M24 12c5-5 14-2 14 6 0 3-1 4-3 5 2 2 2 6-1 8-2 2-5 2-7 0" /><path d="M17 20h4M27 20h4M17 29h4M27 29h4" /></>,
  build: <><circle cx="24" cy="16" r="8" /><path d="M8 42c0-9 7-14 16-14s16 5 16 14z" /></>,
  deploy: <><path d="M30 6c8 0 12 4 12 12-5 8-10 12-16 14l-10-10C18 16 22 10 30 6z" /><circle cx="31" cy="17" r="3" /><path d="M16 22l-8 2 4 4M26 32l-2 8-4-4M12 36l-6 6" /></>,
  impact: <><rect x="7" y="28" width="8" height="14" /><rect x="20" y="20" width="8" height="22" /><rect x="33" y="10" width="8" height="32" /><path d="M30 6h10v8M40 6L32 14" /></>,
};

function Arrow() {
  return (
    <>
      <svg className="muted mt-10 hidden flex-none lg:block" width="56" height="16" viewBox="0 0 56 16" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M0 8h52M46 2l8 6-8 6" /></svg>
      <svg className="muted lg:hidden" width="16" height="32" viewBox="0 0 16 32" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M8 0v28M2 22l6 8 6-8" /></svg>
    </>
  );
}

/** The Problem → Impact loop from the concept image. */
export default function Process({ onActive }) {
  return (
    <Screen id="process" label="Process" onActive={onActive}>
      <SectionHead center eyebrow="how i build products" title="Problem → Impact, on repeat." />

      <div className="mt-12 flex flex-col items-center justify-between gap-6 lg:flex-row lg:items-start lg:gap-2">
        {process.map((s, i) => (
          <Fragment key={s.key}>
            {i > 0 && <Arrow />}
            <R d={0.15 + i * 0.15} className="step w-56 text-center" style={{ '--c': s.color }}>
              <div className="blob mx-auto"><svg viewBox="0 0 48 48">{ICONS[s.key]}</svg></div>
              <h3 className="mt-3 font-mono font-bold">{s.title}</h3>
              <p className="muted text-sm">{s.lines.map((l) => <span key={l} className="block">{l}</span>)}</p>
            </R>
          </Fragment>
        ))}
      </div>

      <R d={0.9} className="relative mt-8">
        <svg className="hidden w-full lg:block" height="70" viewBox="0 0 1000 70" preserveAspectRatio="none" fill="none">
          <path className="loop-path" d="M900 4 C 900 70, 700 60, 560 60 M440 60 C 300 60, 100 70, 100 8" stroke="var(--accent)" strokeWidth="1.5" opacity=".7" />
          <path d="M94 16l6-10 6 10" stroke="var(--accent)" strokeWidth="1.5" opacity=".7" />
        </svg>
        <div className="mt-6 flex justify-center lg:absolute lg:bottom-0 lg:left-1/2 lg:mt-0 lg:-translate-x-1/2">
          <span className="term whitespace-nowrap !rounded-full px-5 py-2 font-mono text-sm">
            Learn <span className="accent">·</span> Improve <span className="accent">·</span> Repeat ↻
          </span>
        </div>
      </R>
    </Screen>
  );
}
