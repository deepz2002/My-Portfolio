import { clients } from '../data';
import { R, Screen, SectionHead } from './ui';

export default function Clients({ onActive }) {
  return (
    <Screen id="clients" label="Clients" onActive={onActive}>
      <SectionHead eyebrow="clients & collaborations" title="Who I've built with" />
      <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {clients.map((c, i) => {
          const Tag = c.url ? 'a' : 'div';
          return (
            <R key={c.name} d={0.15 + i * 0.07}>
              <Tag {...(c.url ? { href: c.url, target: '_blank', rel: 'noreferrer' } : {})} className="term hover flex h-full items-center justify-between gap-3 p-5">
                <div>
                  <p className="font-mono text-lg font-bold">{c.name}</p>
                  <p className="muted mt-1 text-sm">{c.note}</p>
                </div>
                {c.url && <span className="accent font-mono">↗</span>}
              </Tag>
            </R>
          );
        })}
      </div>
    </Screen>
  );
}
