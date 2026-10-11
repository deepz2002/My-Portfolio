import { stack } from '../data';
import { R, Screen, SectionHead, TermBar } from './ui';

/** Core technical skills, laid out like the resume's skills table. */
export default function Stack({ onActive }) {
  return (
    <Screen id="stack" label="Skills" onActive={onActive}>
      <SectionHead eyebrow="core technical skills" title="Skills" />
      <R d={0.2} className="term mt-8">
        <TermBar title="~/skills.txt" />
        <dl className="divide-y divide-[var(--line)]">
          {stack.map((s) => (
            <div key={s.label} className="grid gap-1 px-5 py-3 sm:grid-cols-[14rem_1fr] sm:gap-6">
              <dt className="font-mono text-sm font-bold accent">{s.label}</dt>
              <dd className="text-sm">{s.items.join(', ')}</dd>
            </div>
          ))}
        </dl>
      </R>
    </Screen>
  );
}
