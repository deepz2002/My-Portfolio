import { useEffect, useRef, useState } from 'react';

/** One full-screen "component" — reveals its children when it scrolls into view. */
export function Screen({ id, label, onActive, className = '', children }) {
  const ref = useRef(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    // a band across the middle of the viewport works for both short and very tall sections
    const io = new IntersectionObserver(
      ([e]) => {
        setInView(e.isIntersecting);
        if (e.isIntersecting) onActive?.(id);
      },
      { rootMargin: '-35% 0px -35% 0px' }
    );
    io.observe(ref.current);
    return () => io.disconnect();
  }, [id, onActive]);

  return (
    <section id={id} ref={ref} data-label={label} className={`screen ${inView ? 'in' : ''} ${className}`}>
      <div className="wrap">{children}</div>
    </section>
  );
}

/** Reveal-on-scroll wrapper with a stagger delay (seconds). */
export function R({ as: Tag = 'div', d = 0, className = '', style, ...props }) {
  return <Tag className={`reveal ${className}`} style={{ '--d': `${d}s`, ...style }} {...props} />;
}

export function TermBar({ title }) {
  return (
    <div className="term-bar">
      <span className="h-2.5 w-2.5 rounded-full bg-red-500" />
      <span className="h-2.5 w-2.5 rounded-full bg-yellow-400" />
      <span className="h-2.5 w-2.5 rounded-full bg-green-500" />
      <span className="ml-2 truncate">{title}</span>
    </div>
  );
}

export function Chips({ items, className = '' }) {
  return (
    <div className={`flex flex-wrap gap-2 ${className}`}>
      {items.map((s) => (
        <span key={s} className="chip">{s}</span>
      ))}
    </div>
  );
}

export function SectionHead({ eyebrow, title, center = false }) {
  return (
    <div className={center ? 'text-center' : ''}>
      <R as="p" className="eyebrow">// {eyebrow}</R>
      <R as="h2" d={0.1} className="title mt-3">{title}</R>
    </div>
  );
}
