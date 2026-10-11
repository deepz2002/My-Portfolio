import { philosophy, stats } from '../data';
import { R, Screen } from './ui';

export default function Philosophy({ onActive }) {
  return (
    <Screen id="philosophy" label="Philosophy" onActive={onActive} className="text-center">
      <R as="p" className="eyebrow">// engineering philosophy</R>
      <R as="h2" d={0.1} className="title mt-4">I drive AI.<br /><span className="muted">AI doesn't drive me.</span></R>
      <div className="mt-10 grid gap-4 text-left sm:grid-cols-3">
        {philosophy.map((p, i) => (
          <R key={p.title} d={0.2 + i * 0.1} className="term hover p-5">
            <p className="font-mono text-sm accent">0{i + 1}</p>
            <h3 className="mt-2 font-mono font-bold">{p.title}</h3>
            <p className="muted mt-1 text-sm">{p.text}</p>
          </R>
        ))}
      </div>
      <R d={0.5} className="mt-10 grid grid-cols-2 gap-6 md:grid-cols-4">
        {stats.map((s) => (
          <div key={s.label}>
            <p className="font-mono text-3xl font-bold accent">{s.value}</p>
            <p className="muted font-mono text-xs">{s.label}</p>
          </div>
        ))}
      </R>
    </Screen>
  );
}
