import { useState } from 'react';
import { experience } from '../data';
import { Chips, R, Screen, TermBar } from './ui';
import { track } from '../analytics';

const job = experience.find((e) => e.id === '4good');

/** 4good.ai — client engagements and the in-house product, switchable by tab. */
export default function FourGood({ onActive }) {
  const [sel, setSel] = useState(0);
  const e = job.engagements[sel];

  return (
    <Screen id="4good" label="4good.ai" onActive={onActive}>
      <R as="p" className="eyebrow">// experience · where it started</R>
      <R as="h2" d={0.1} className="title mt-3">{job.role} <span className="accent">@ {job.company}</span></R>
      <R as="p" d={0.15} className="muted mt-2 font-mono text-sm">{job.period} · {job.location}</R>
      <R as="p" d={0.2} className="muted mt-4 max-w-2xl">{job.summary}</R>

      <R d={0.3} className="-mx-1 mt-8 flex gap-2 overflow-x-auto px-1 pb-2" role="tablist" aria-label="4good.ai engagements">
        {job.engagements.map((g, i) => (
          <button key={g.name} role="tab" aria-selected={i === sel} onClick={() => { setSel(i); track('engagement_tab_viewed', { engagement: g.name }); }} className="tab">
            {g.name}
          </button>
        ))}
      </R>

      <R d={0.35} className="term mt-3" role="tabpanel">
        <TermBar title={`~/4good/${e.name.toLowerCase().replace(/[^a-z0-9]+/g, '-')}`} />
        <div className="grid gap-6 p-5 md:grid-cols-3">
          <div>
            <span className="chip">{e.type}</span>
            <h3 className="mt-3 font-mono text-xl font-bold">{e.name}</h3>
            <p className="muted mt-1 text-sm">{e.about}</p>
            {e.url && (
              <a href={e.url} target="_blank" rel="noreferrer" className="mt-4 inline-block font-mono text-sm accent hover:underline">
                {e.url.replace(/^https?:\/\/|\/$/g, '')} ↗
              </a>
            )}
          </div>
          <div className="md:col-span-2">
            <ul className="space-y-2.5">
              {e.points.map((p) => (
                <li key={p} className="flex gap-3 text-[0.92rem] leading-relaxed">
                  <span className="accent flex-none font-mono">▸</span>{p}
                </li>
              ))}
            </ul>
            <Chips items={e.stack} className="mt-5" />
          </div>
        </div>
      </R>
    </Screen>
  );
}
