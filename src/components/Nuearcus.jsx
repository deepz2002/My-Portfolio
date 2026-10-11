import { experience } from '../data';
import { Chips, R, Screen, TermBar } from './ui';

const job = experience.find((e) => e.id === 'nuearcus');

export default function Nuearcus({ onActive }) {
  return (
    <Screen id="nuearcus" label="Nuearcus" onActive={onActive}>
      <div className="grid items-start gap-10 lg:grid-cols-5">
        <div className="lg:col-span-2">
          <R as="p" className="eyebrow">// experience · now</R>
          <R as="h2" d={0.1} className="title mt-3">{job.role}<br /><span className="accent">@ {job.company}</span></R>
          <R as="p" d={0.15} className="muted mt-2 font-mono text-sm">{job.period} · {job.location}</R>
          <R as="p" d={0.2} className="muted mt-5">{job.summary}</R>
          <R d={0.3} className="mt-6 flex flex-wrap gap-3">
            <a href={job.url} target="_blank" rel="noreferrer" className="btn solid">NuePrism ↗</a>
            <span className="chip self-center py-1.5">✔ Live on Atlassian Marketplace</span>
          </R>
          <R d={0.35}><Chips items={job.stack} className="mt-6" /></R>
        </div>

        <R d={0.25} className="term font-mono text-sm lg:col-span-3">
          <TermBar title="~/nueprism/build.log" />
          <ul className="space-y-3 p-4 sm:p-5">
            {job.highlights.map((h) => (
              <li key={h} className="flex gap-3">
                <span className="accent flex-none">✔</span>
                <span className="font-sans text-[0.9rem] leading-relaxed">{h}</span>
              </li>
            ))}
            <li className="muted">$ status → <span className="accent">shipped</span><span className="cursor" /></li>
          </ul>
        </R>
      </div>
    </Screen>
  );
}
