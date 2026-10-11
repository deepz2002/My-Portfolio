import { profile } from '../data';
import { R, Screen } from './ui';
import { analyticsEnabled } from '../analytics';

export default function Contact({ onActive }) {
  return (
    <Screen id="contact" label="Contact" onActive={onActive} className="text-center">
      <R as="p" className="eyebrow">// contact</R>
      <R as="h2" d={0.1} className="title mt-3">Let&apos;s build something<br /><span className="accent">meaningful.</span></R>
      <R as="p" d={0.2} className="muted mx-auto mt-4 max-w-lg">Open to AI engineering roles, product collaborations and interesting problems. {profile.location}.</R>
      <R d={0.3} className="mt-8 flex flex-wrap justify-center gap-3">
        <a href={`mailto:${profile.email}`} className="btn solid">Email</a>
        <a href={profile.linkedin} target="_blank" rel="noreferrer" className="btn">LinkedIn ↗</a>
        <a href={profile.github} target="_blank" rel="noreferrer" className="btn">GitHub ↗</a>
      </R>
      <R as="p" d={0.35} className="muted mt-4 break-all font-mono text-sm">{profile.email}</R>
      <R as="p" d={0.45} className="muted mt-16 font-mono text-xs">© {new Date().getFullYear()} {profile.name} · built with React &amp; Tailwind
        {analyticsEnabled && (
          <> · <button onClick={() => dispatchEvent(new Event('open-cookie-settings'))} className="underline hover:text-[var(--accent)]">Cookie settings</button></>
        )}
      </R>
    </Screen>
  );
}
