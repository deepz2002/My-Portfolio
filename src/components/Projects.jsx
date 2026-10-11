import { projects } from '../data';
import { Chips, R, Screen, SectionHead, TermBar } from './ui';

function Card({ p, d }) {
  const Tag = p.link ? 'a' : 'div';
  const linkProps = p.link ? { href: p.link, target: '_blank', rel: 'noreferrer' } : {};
  return (
    <R d={d} className={p.featured ? 'md:col-span-2 md:row-span-2' : ''}>
      <Tag {...linkProps} className="term hover flex h-full flex-col">
        {p.featured && <TermBar title="~/projects/nueprism" />}
        <div className={`flex flex-1 flex-col gap-3 ${p.featured ? 'p-6' : 'p-5'}`}>
          <span className="chip self-start">{p.tag}</span>
          <h3 className={`font-mono font-bold ${p.featured ? 'text-2xl sm:text-3xl' : 'text-lg'}`}>{p.name}</h3>
          <p className="muted text-sm"><b className="accent font-mono font-medium">problem </b>{p.problem}</p>
          <p className="muted text-sm"><b className="accent font-mono font-medium">solution </b>{p.solution}</p>
          {p.impact && <p className="muted text-sm"><b className="accent font-mono font-medium">impact </b>{p.impact}</p>}
          <Chips items={p.stack} className="mt-auto pt-2" />
          {p.link && <span className="font-mono text-sm accent">View ↗</span>}
        </div>
      </Tag>
    </R>
  );
}

export default function Projects({ onActive }) {
  return (
    <Screen id="projects" label="Projects" onActive={onActive}>
      <SectionHead eyebrow="featured projects" title="Things I've shipped" />
      <div className="mt-8 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        {projects.map((p, i) => <Card key={p.name} p={p} d={0.15 + i * 0.08} />)}
      </div>
    </Screen>
  );
}
