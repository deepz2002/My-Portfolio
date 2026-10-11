import { journey } from '../data';
import { R, Screen, SectionHead } from './ui';

/** About: education → passion → 4good.ai → Nuearcus. */
export default function Journey({ onActive }) {
  return (
    <Screen id="about" label="About" onActive={onActive}>
      <div className="grid gap-10 lg:grid-cols-5">
        <div className="lg:col-span-2">
          <SectionHead eyebrow="about · my journey" title={<>Engineer first.<br /><span className="muted">AI as an accelerator.</span></>} />
          <R as="p" d={0.2} className="muted mt-5 max-w-md">
            I studied AI &amp; ML at BNMIT, fell for building intelligent products, and have spent every role since taking AI from
            idea to production — for clients, for my team&apos;s own product, and now as a founding engineer.
          </R>
        </div>

        <ol className="relative space-y-5 border-l border-[var(--line)] pl-6 lg:col-span-3">
          {journey.map((j, i) => (
            <R as="li" key={j.title} d={0.2 + i * 0.12} className="relative">
              <span className="absolute -left-[1.85rem] top-5 h-3 w-3 rounded-full" style={{ background: 'var(--accent)', boxShadow: i === journey.length - 1 ? '0 0 12px var(--accent)' : 'none' }} />
              <div className="term hover p-4 sm:p-5">
                <p className="font-mono text-xs accent">{j.when}</p>
                <h3 className="mt-1 font-mono font-bold">{j.title}</h3>
                <p className="font-mono text-xs muted">{j.place}</p>
                <p className="muted mt-2 text-sm">{j.text}</p>
              </div>
            </R>
          ))}
        </ol>
      </div>
    </Screen>
  );
}
